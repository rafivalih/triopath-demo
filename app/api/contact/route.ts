import { Redis } from '@upstash/redis';
import { NextRequest, NextResponse } from 'next/server';

const redis = Redis.fromEnv();

const RATE_LIMIT_WINDOW = 60 * 60 * 24; // 24 hours

const MAX_REQUESTS_PER_IP = 5;
const MAX_REQUESTS_PER_IP_EMAIL = 2;

function normalizeEmail(email: string) {
	return email.trim().toLowerCase();
}

function getClientIp(request: NextRequest) {
	const forwardedFor = request.headers.get('x-forwarded-for');

	if (forwardedFor) {
		return forwardedFor.split(',')[0].trim();
	}

	const realIp = request.headers.get('x-real-ip');

	if (realIp) {
		return realIp.trim();
	}

	// Local development fallback
	if (process.env.NODE_ENV === 'development') {
		return '127.0.0.1';
	}

	return 'unknown';
}

function encodeEmail(email: string) {
	return encodeURIComponent(email);
}

export async function POST(request: NextRequest) {
	try {
		const body = await request.json();

		const {
			name,
			email,
			phone,
			linkedin,
			message,
			captchaToken,
		} = body;

		// -----------------------------------------
		// Validate request data
		// -----------------------------------------

		if (
			typeof name !== 'string' ||
			typeof email !== 'string' ||
			typeof phone !== 'string' ||
			typeof message !== 'string'
		) {
			return NextResponse.json(
				{
					success: false,
					message: 'Invalid form data.',
				},
				{ status: 400 },
			);
		}

		const cleanName = name.trim();
		const cleanEmail = normalizeEmail(email);
		const cleanPhone = phone.trim();
		const cleanLinkedin =
			typeof linkedin === 'string'
				? linkedin.trim()
				: '';
		const cleanMessage = message.trim();

		// -----------------------------------------
		// Required fields
		// -----------------------------------------

		if (
			!cleanName ||
			!cleanEmail ||
			!cleanPhone ||
			!cleanMessage
		) {
			return NextResponse.json(
				{
					success: false,
					message:
						'Please complete all required fields.',
				},
				{ status: 400 },
			);
		}

		// -----------------------------------------
		// Email validation
		// -----------------------------------------

		const emailRegex =
			/^[^\s@]+@[^\s@]+\.[^\s@]+$/;

		if (!emailRegex.test(cleanEmail)) {
			return NextResponse.json(
				{
					success: false,
					message:
						'Please enter a valid email address.',
				},
				{ status: 400 },
			);
		}

		// -----------------------------------------
		// CAPTCHA validation
		// -----------------------------------------

		if (
			typeof captchaToken !== 'string' ||
			!captchaToken.trim()
		) {
			return NextResponse.json(
				{
					success: false,
					message:
						'Please complete the reCAPTCHA verification.',
				},
				{ status: 400 },
			);
		}

		// -----------------------------------------
		// Get visitor IP
		// -----------------------------------------

		const ip = getClientIp(request);

		if (ip === 'unknown') {
			return NextResponse.json(
				{
					success: false,
					message:
						'Unable to verify your connection. Please try again.',
				},
				{ status: 400 },
			);
		}

		// -----------------------------------------
		// Redis keys
		// -----------------------------------------

		const ipKey = `contact:ip:${ip}`;

		const ipEmailKey = `contact:ip-email:${ip}:${encodeEmail(
			cleanEmail,
		)}`;

		// -----------------------------------------
		// Get current counters
		// -----------------------------------------

		const [ipCountValue, ipEmailCountValue] =
			await Promise.all([
				redis.get<number>(ipKey),
				redis.get<number>(ipEmailKey),
			]);

		const ipCount = Number(ipCountValue ?? 0);
		const ipEmailCount = Number(
			ipEmailCountValue ?? 0,
		);

		// -----------------------------------------
		// IP rate limit
		// -----------------------------------------

		if (ipCount >= MAX_REQUESTS_PER_IP) {
			return NextResponse.json(
				{
					success: false,
					code: 'IP_RATE_LIMIT',
					message:
						'Too many requests from this connection. Please try again later.',
				},
				{ status: 429 },
			);
		}

		// -----------------------------------------
		// IP + Email rate limit
		// -----------------------------------------

		if (
			ipEmailCount >=
			MAX_REQUESTS_PER_IP_EMAIL
		) {
			return NextResponse.json(
				{
					success: false,
					code: 'EMAIL_RATE_LIMIT',
					message:
						'You have reached the contact limit for this email address. Please try again later.',
				},
				{ status: 429 },
			);
		}

		// -----------------------------------------
		// EmailJS
		// -----------------------------------------

		const emailJSResponse = await fetch(
			'https://api.emailjs.com/api/v1.0/email/send',
			{
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					service_id:
						process.env.EMAILJS_SERVICE_ID,
					template_id:
						process.env.EMAILJS_TEMPLATE_ID,
					user_id:
						process.env.EMAILJS_PUBLIC_KEY,
					accessToken:
							process.env.EMAILJS_PRIVATE_KEY,

					template_params: {
						name: cleanName,
						email: cleanEmail,
						phone: cleanPhone,
						linkedin:
							cleanLinkedin || 'N/A',
						message: cleanMessage,
						'g-recaptcha-response':
							captchaToken,
					},
				}),
			},
		);

		// -----------------------------------------
		// EmailJS failure
		// -----------------------------------------

		if (!emailJSResponse.ok) {
			const errorText =
				await emailJSResponse.text();

			console.error(
				'EmailJS error:',
				errorText,
			);

			return NextResponse.json(
				{
					success: false,
					message:
						'Unable to send your message right now. Please try again.',
				},
				{ status: 502 },
			);
		}

		// -----------------------------------------
		// Increase counters ONLY after successful
		// EmailJS request
		// -----------------------------------------

		const pipeline = redis.pipeline();

		pipeline.incr(ipKey);
		pipeline.incr(ipEmailKey);

		if (ipCount === 0) {
			pipeline.expire(
				ipKey,
				RATE_LIMIT_WINDOW,
			);
		}

		if (ipEmailCount === 0) {
			pipeline.expire(
				ipEmailKey,
				RATE_LIMIT_WINDOW,
			);
		}

		await pipeline.exec();

		// -----------------------------------------
		// Success
		// -----------------------------------------

		return NextResponse.json(
			{
				success: true,
				message:
					'Your message has been sent successfully.',
			},
			{ status: 200 },
		);
	} catch (error) {
		console.error(
			'Contact API error:',
			error,
		);

		return NextResponse.json(
			{
				success: false,
				message:
					'Something went wrong. Please try again later.',
			},
			{ status: 500 },
		);
	}
}