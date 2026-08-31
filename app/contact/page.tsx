// 'use client';

// import {
// 	ArrowBigRight,
// 	Facebook,
// 	Github,
// 	Instagram,
// 	Linkedin,
// 	Mail,
// 	MapPin,
// 	MessageCircle,
// 	MoveUpRight,
// 	Phone,
// 	Send,
// 	Twitter,
// 	Youtube,
// } from 'lucide-react';
// import { useState } from 'react';
// import { Reveal } from '@/components/shared/Reveal';
// import { ScrollReveal } from '@/components/shared/ScrollReveal';
// import ShowcaseSection from '@/components/ui/ShowcaseSection ';
// import { siteConfig } from '@/constants/site';

// type LocationKey = 'hyderabad' | 'usa';

// export default function ContactPage() {
// 	const [form, setForm] = useState({ name: '', phone: '', linkedin: '', message: '' });
// 	const [errors, setErrors] = useState<Record<string, string>>({});
// 	const [location, setLocation] = useState<LocationKey>('hyderabad');

// 	function validate() {
// 		const e: Record<string, string> = {};
// 		if (!form.name.trim()) e.name = 'Name is required';
// 		if (!form.phone.trim()) e.phone = 'Phone number is required';
// 		if (!form.message.trim()) e.message = 'Message is required';
// 		setErrors(e);
// 		return Object.keys(e).length === 0;
// 	}

// 	function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
// 		event.preventDefault();
// 		if (!validate()) return;
// 		const subject = encodeURIComponent('Career Consultation Request');
// 		const body = encodeURIComponent(
// 			`Hi Hiring Team,\n\nName: ${form.name}\n\nPhone: ${form.phone}\n\nLinkedIn: ${form.linkedin || 'N/A'}\n\nMessage: ${form.message}\n\nThank you.`,
// 		);
// 		window.location.href = `mailto:${siteConfig.contact.hrEmail}?subject=${subject}&body=${body}`;
// 	}

// 	const socialLinks = [
// 		{ icon: Linkedin, href: '', label: 'LinkedIn' },
// 		{ icon: Mail, href: siteConfig.social.email, label: 'Email' },
// 		{ icon: MessageCircle, href: siteConfig.social.whatsapp, label: 'WhatsApp' },
// 		{ icon: Instagram, href: siteConfig.social.instagram, label: 'Instagram' },
// 		{ icon: Youtube, href: siteConfig.social.youtube, label: 'Youtube' },
// 		{ icon: Facebook, href: siteConfig.social.facebook, label: 'Facebook' },
// 	];

// 	return (
// 		<div className="pt-28">
// 			{/* <section className="contactus relative overflow-hidden py-14 sm:py-20">
//         <div className="pointer-events-none absolute -left-40 top-10 h-96 w-96 rounded-full bg-blue-200/30 blur-3xl" />
//         <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
//           <Reveal>
//             <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-accent">Contact Us</p>
//             <h1 className="text-4xl font-bold tracking-tight text-primary sm:text-5xl">Let's talk about your career.</h1>
//             <p className="mx-auto mt-6  text-lg leading-relaxed text-muted-foreground">Have a question or ready to schedule a consultation? Reach out and our team will get back to you within 24 hours.</p>
//           </Reveal>
//         </div>
//       </section> */}

// 			<ScrollReveal>
// 				<section className=" relative overflow-hidden py-14 sm:py-20">
// 					<div className="pointer-events-none absolute -left-40 top-10 h-96 w-96 rounded-full  blur-3xl" />

// 					<div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
// 						<Reveal>
// 							<p className="mb-4 sm:text-6xl font-semibold uppercase tracking-wider text-blue-600 text-[26px]">
// 								Contact Us
// 							</p>
// 							<p className="mb-4 sm:text-3xl font-semibold uppercase tracking-wider text-muted-foreground text-[19px]">
// 								Have Questions? No Problem.
// 							</p>

// 							<p className="mx-auto max-w-4xl text-[16px] leading-relaxed text-muted-foreground sm:text-xl">
// 								Every career journey is different. Call our team to discuss your goals, understand
// 								your challenges, and find the right Triopath support to move your career forward.
// 							</p>
// 						</Reveal>
// 					</div>
// 				</section>
// 			</ScrollReveal>

// 			<section className="section-tight bg-white" id="contact-form">
// 				<div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
// 					<div className="grid gap-10 lg:grid-cols-2">
// 						<Reveal delay={0.1}>
// 							<div className="space-y-6">
// 								<div className="rounded-3xl border border-border bg-[#f8fafc] p-6 sm:p-8">
// 									<h3 className="text-lg font-bold text-primary">Follow us</h3>
// 									<p className="mt-2 text-sm text-muted-foreground">
// 										Connect with us on social media for career tips and updates.
// 									</p>
// 									<div className="mt-5 flex flex-wrap gap-3">
// 										{socialLinks.map((s) => (
// 											<div key={s.label} className="group relative">
// 												<a
// 													href={s.href}
// 													target="_blank"
// 													rel="noopener noreferrer"
// 													aria-label={s.label}
// 													className="flex h-11 w-10 sm:w-11 items-center justify-center rounded-xl border border-border bg-white text-primary transition-all hover:border-accent hover:bg-accent hover:text-white"
// 												>
// 													<s.icon className="h-5 sm:w-5 w-5" />
// 												</a>

// 												{/* Hover Tooltip */}
// 												<div
// 													className="
//           pointer-events-none
//           absolute
//           bottom-full
//           left-1/2
//           z-30
//           mb-2
//           -translate-x-1/2
//           whitespace-nowrap
//           rounded-lg
//           bg-slate-600
//           px-3
//           py-1.5
//           text-xs
//           font-medium
//           text-white
//           opacity-0
//           shadow-lg
//           transition-all
//           duration-200
//           group-hover:translate-y-0
//           group-hover:opacity-100
//           -translate-y-1
//         "
// 												>
// 													{s.label}
// 												</div>
// 											</div>
// 										))}
// 									</div>
// 								</div>

// 								<div className="rounded-3xl border border-border bg-[#f8fafc] p-6 sm:p-8">
// 									<h3 className="text-lg font-bold text-primary">Phone</h3>
// 									<div className="mt-4 space-y-3">
// 										<a
// 											href={`tel:${siteConfig.contact.usaPhone}`}
// 											className="flex items-center gap-3 text-sm text-muted-foreground hover:text-accent"
// 										>
// 											<Phone className="h-4 w-4 text-accent" /> {siteConfig.contact.usaPhone}{' '}
// 											<span className="text-xs text-muted-foreground/60">(USA)</span>
// 										</a>
// 										<a
// 											href={`tel:${siteConfig.contact.indiaPhone}`}
// 											className="flex items-center gap-3 text-sm text-muted-foreground hover:text-blue-600"
// 										>
// 											<Phone className="h-4 w-4 text-accent" /> {siteConfig.contact.indiaPhone}{' '}
// 											<span className="text-xs text-muted-foreground/60">(India)</span>
// 										</a>
// 										<a
// 											href={`mailto:${siteConfig.contact.hrEmail}`}
// 											className="flex items-center gap-3 text-sm text-muted-foreground hover:text-blue-600"
// 										>
// 											<Mail className="h-4 w-4 text-accent" /> {siteConfig.contact.hrEmail}{' '}
// 											<span className="text-xs text-muted-foreground/60">(HR)</span>
// 										</a>
// 									</div>
// 								</div>

// 								<div className="rounded-3xl border border-border bg-[#f8fafc] p-6 sm:p-8">
// 									<h3 className="text-lg font-bold text-primary">Our Locations</h3>
// 									<div className="mt-4 flex gap-2">
// 										<button
// 											type="button"
// 											onClick={() => setLocation('usa')}
// 											className={`rounded-lg px-3 py-1.5 text-xs font-medium transition-colors ${location === 'usa' ? 'bg-primary text-white' : 'bg-white text-muted-foreground hover:bg-secondary'}`}
// 										>
// 											USA
// 										</button>
// 										<button
// 											type="button"
// 											onClick={() => setLocation('hyderabad')}
// 											className={`rounded-lg px-3 py-1.5 text-xs font-medium transition-colors ${location === 'hyderabad' ? 'bg-primary text-white' : 'bg-white text-muted-foreground hover:bg-secondary'}`}
// 										>
// 											Hyderabad
// 										</button>
// 									</div>
// 									<div className="mt-4 flex items-start gap-3">
// 										<MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
// 										<p className="text-sm text-muted-foreground">
// 											{siteConfig.locations[location]}
// 										</p>
// 									</div>
// 									<div className="mt-4 overflow-hidden rounded-2xl border border-border">
// 										<iframe
// 											title={`Map of ${location}`}
// 											src={siteConfig.mapUrls[location]}
// 											width="100%"
// 											height="200"
// 											style={{ border: 0 }}
// 											loading="lazy"
// 											referrerPolicy="no-referrer-when-downgrade"
// 										/>
// 									</div>
// 								</div>
// 							</div>
// 						</Reveal>

// 						<Reveal>
// 							<div className="rounded-3xl border border-border bg-[#f8fafc] p-6 sm:p-8">
// 								<h2 className="text-xl font-bold text-primary">Send us a message</h2>
// 								<p className="mt-2 text-sm text-muted-foreground" id="fillout">
// 									Fill out the form below and we'll open your email client with a prepared message.
// 								</p>
// 								<form onSubmit={handleSubmit} className="mt-6 space-y-5">
// 									<div className="relative">
// 										<input
// 											id="name"
// 											type="text"
// 											value={form.name}
// 											onChange={(e) => setForm({ ...form, name: e.target.value })}
// 											placeholder=" "
// 											className="
//       peer
//       w-full
//       rounded-xl
//       border
//       border-border
//       bg-white
//       px-4
//       py-3
//       text-sm
//       text-primary
//       outline-none
//       transition-all
//       duration-200
//       focus:border-accent
//       focus:ring-1
//       focus:ring-accent/20
//     "
// 										/>

// 										<label
// 											htmlFor="name"
// 											className="
//       pointer-events-none
//       absolute
//       left-4
//       top-1/2
//       -translate-y-1/2
//       bg-white
//       px-0
//       text-sm
//       text-slate-400
//       transition-all
//       duration-200
//       peer-focus:left-3
//       peer-focus:top-0
//       peer-focus:px-1
//       peer-focus:text-xs
//       peer-focus:font-medium
//       peer-focus:text-accent
//       peer-[:not(:placeholder-shown)]:left-3
//       peer-[:not(:placeholder-shown)]:top-0
//       peer-[:not(:placeholder-shown)]:px-1
//       peer-[:not(:placeholder-shown)]:text-xs
//       peer-[:not(:placeholder-shown)]:font-medium
//       peer-[:not(:placeholder-shown)]:text-accent
//     "
// 										>
// 											FullName
// 										</label>

// 										{errors.name && <p className="mt-1 text-xs text-red-500">{errors.name}</p>}
// 									</div>

// 									<div className="relative">
// 										<input
// 											id="phone"
// 											type="tel"
// 											value={form.phone}
// 											onChange={(e) => setForm({ ...form, phone: e.target.value })}
// 											placeholder=" "
// 											className="
//       peer
//       w-full
//       rounded-xl
//       border
//       border-border
//       bg-white
//       px-4
//       py-3
//       text-sm
//       text-primary
//       outline-none
//       transition-all
//       duration-200
//       focus:border-accent
//       focus:ring-1
//       focus:ring-accent/20
//     "
// 										/>

// 										<label
// 											htmlFor="phone"
// 											className="
//       pointer-events-none
//       absolute
//       left-4
//       top-1/2
//       -translate-y-1/2
//       bg-white
//       px-0
//       text-sm
//       text-slate-400
//       transition-all
//       duration-200
//       peer-focus:left-3
//       peer-focus:top-0
//       peer-focus:px-1
//       peer-focus:text-xs
//       peer-focus:font-medium
//       peer-focus:text-accent
//       peer-[:not(:placeholder-shown)]:left-3
//       peer-[:not(:placeholder-shown)]:top-0
//       peer-[:not(:placeholder-shown)]:px-1
//       peer-[:not(:placeholder-shown)]:text-xs
//       peer-[:not(:placeholder-shown)]:font-medium
//       peer-[:not(:placeholder-shown)]:text-accent
//     "
// 										>
// 											Phone Number
// 										</label>

// 										{errors.phone && <p className="mt-1 text-xs text-red-500">{errors.phone}</p>}
// 									</div>

// 									<div className="relative">
// 										<input
// 											id="linkedin"
// 											type="url"
// 											value={form.linkedin}
// 											onChange={(e) => setForm({ ...form, linkedin: e.target.value })}
// 											placeholder=" "
// 											className="
//       peer
//       w-full
//       rounded-xl
//       border
//       border-border
//       bg-white
//       px-4
//       py-3
//       text-sm
//       text-primary
//       outline-none
//       transition-all
//       duration-200
//       focus:border-accent
//       focus:ring-1
//       focus:ring-accent/20
//     "
// 										/>

// 										<label
// 											htmlFor="linkedin"
// 											className="
//       pointer-events-none
//       absolute
//       left-4
//       top-1/2
//       -translate-y-1/2
//       bg-white
//       px-0
//       text-sm
//       text-slate-400
//       transition-all
//       duration-200
//       peer-focus:left-3
//       peer-focus:top-0
//       peer-focus:px-1
//       peer-focus:text-xs
//       peer-focus:font-medium
//       peer-focus:text-accent
//       peer-[:not(:placeholder-shown)]:left-3
//       peer-[:not(:placeholder-shown)]:top-0
//       peer-[:not(:placeholder-shown)]:px-1
//       peer-[:not(:placeholder-shown)]:text-xs
//       peer-[:not(:placeholder-shown)]:font-medium
//       peer-[:not(:placeholder-shown)]:text-accent
//     "
// 										>
// 											LinkedIn URL
// 										</label>
// 									</div>
// 									<div>
// 										<label
// 											htmlFor="message"
// 											className="mb-1.5 block text-sm font-medium text-primary"
// 										>
// 											Message
// 										</label>
// 										<textarea
// 											id="message"
// 											rows={4}
// 											value={form.message}
// 											onChange={(e) => setForm({ ...form, message: e.target.value })}
// 											className="w-full rounded-xl border border-border bg-white px-4 py-2.5 text-sm focus:border-accent focus:outline-none"
// 											placeholder="Tell us about your career goals..."
// 										/>
// 										{errors.message && (
// 											<p className="mt-1 text-xs text-red-500">{errors.message}</p>
// 										)}
// 									</div>
// 									<button type="submit" className="send-button">
// 										<span className="send-text ">
// 											Send Us <ArrowBigRight size={20} />
// 										</span>

// 										<svg
// 											xmlns="http://www.w3.org/2000/svg"
// 											width="30"
// 											height="10"
// 											viewBox="0 0 38 15"
// 											className="send-arrow"
// 										>
// 											<path
// 												d="M10 7.519l-.939-.344h0l.939.344zm14.386-1.205l-.981-.192.981.192zm1.276 5.509l.537.843.148-.094.107-.139-.792-.611zm4.819-4.304l-.385-.923h0l.385.923zm7.227.707a1 1 0 0 0 0-1.414L31.343.448a1 1 0 0 0-1.414 0 1 1 0 0 0 0 1.414l5.657 5.657-5.657 5.657a1 1 0 0 0 1.414 1.414l6.364-6.364zM1 7.519l.554.833.029-.019.094-.061.361-.23 1.277-.77c1.054-.609 2.397-1.32 3.629-1.787.617-.234 1.17-.392 1.623-.455.477-.066.707-.008.788.034.025.013.031.021.039.034a.56.56 0 0 1 .058.235c.029.327-.047.906-.39 1.842l1.878.689c.383-1.044.571-1.949.505-2.705-.072-.815-.45-1.493-1.16-1.865-.627-.329-1.358-.332-1.993-.244-.659.092-1.367.305-2.056.566-1.381.523-2.833 1.297-3.921 1.925l-1.341.808-.385.245-.104.068-.028.018c-.011.007-.011.007.543.84zm8.061-.344c-.198.54-.328 1.038-.36 1.484-.032.441.024.94.325 1.364.319.45.786.64 1.21.697.403.054.824-.001 1.21-.09.775-.179 1.694-.566 2.633-1.014l3.023-1.554c2.115-1.122 4.107-2.168 5.476-2.524.329-.086.573-.117.742-.115s.195.038.161.014c-.15-.105.085-.139-.076.685l1.963.384c.192-.98.152-2.083-.74-2.707-.405-.283-.868-.37-1.28-.376s-.849.069-1.274.179c-1.65.43-3.888 1.621-5.909 2.693l-2.948 1.517c-.92.439-1.673.743-2.221.87-.276.064-.429.065-.492.057-.043-.006.066.003.155.127.07.099.024.131.038-.063.014-.187.078-.49.243-.94l-1.878-.689zm14.343-1.053c-.361 1.844-.474 3.185-.413 4.161.059.95.294 1.72.811 2.215.567.544 1.242.546 1.664.459a2.34 2.34 0 0 0 .502-.167l.15-.076.049-.028.018-.011c.013-.008.013-.008-.524-.852l-.536-.844.019-.012c-.038.018-.064.027-.084.032-.037.008.053-.013.125.056.021.02-.151-.135-.198-.895-.046-.734.034-1.887.38-3.652l-1.963-.384zm2.257 5.701l.791.611.024-.031.08-.101.311-.377 1.093-1.213c.922-.954 2.005-1.894 2.904-2.27l-.771-1.846c-1.31.547-2.637 1.758-3.572 2.725l-1.184 1.314-.341.414-.093.117-.025.032c-.01.013-.01.013.781.624zm5.204-3.381c.989-.413 1.791-.42 2.697-.307.871.108 2.083.385 3.437.385v-2c-1.197 0-2.041-.226-3.19-.369-1.114-.139-2.297-.146-3.715.447l.771 1.846z"
// 												fill="currentColor"
// 											/>
// 										</svg>
// 									</button>
// 								</form>
// 							</div>
// 						</Reveal>
// 					</div>
// 				</div>
// 			</section>

// 			<ShowcaseSection />
// 		</div>
// 	);
// }





'use client';

import {
	ArrowBigRight,
	Facebook,
	Github,
	Instagram,
	Linkedin,
	Mail,
	MapPin,
	MessageCircle,
	MoveUpRight,
	Phone,
	Send,
	Twitter,
	Youtube,
} from 'lucide-react';
// import emailjs from '@emailjs/browser';
import { useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

import { Reveal } from '@/components/shared/Reveal';
import { ScrollReveal } from '@/components/shared/ScrollReveal';
import ShowcaseSection from '@/components/ui/ShowcaseSection ';
import { siteConfig } from '@/constants/site';

type LocationKey = 'hyderabad' | 'usa';

export default function ContactPage() {
	const [form, setForm] = useState({
		name: '',
		email: '',
		phone: '',
		linkedin: '',
		message: '',
	});

	const [errors, setErrors] = useState<Record<string, string>>({});
	const [location, setLocation] = useState<LocationKey>('hyderabad');
	const [captchaToken, setCaptchaToken] = useState<string | null>(null);
	const [isSending, setIsSending] = useState(false);
	const [successMessage, setSuccessMessage] = useState('');

	function validate() {
		const e: Record<string, string> = {};

		if (!form.name.trim()) {
			e.name = 'Name is required';
		}

		if (!form.email.trim()) {
			e.email = 'Email is required';
		} else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
			e.email = 'Please enter a valid email address';
		}

		if (!form.phone.trim()) {
			e.phone = 'Phone number is required';
		}

		if (!form.message.trim()) {
			e.message = 'Message is required';
		}

		setErrors(e);

		return Object.keys(e).length === 0;
	}

	async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
		event.preventDefault();

		setSuccessMessage('');

		if (!validate()) {
			return;
		}

		if (!captchaToken) {
			setErrors((prev) => ({
				...prev,
				captcha: 'Please verify that you are not a robot.',
			}));
			return;
		}

		setIsSending(true);

		setErrors((prev) => {
			const next = { ...prev };
			delete next.captcha;
			delete next.submit;
			return next;
		});

		// try {
		// 	await emailjs.send(
		// 		process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
		// 		process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
		// 		{
		// 			name: form.name,
		// 			email: form.email,
		// 			phone: form.phone,
		// 			linkedin: form.linkedin || 'N/A',
		// 			message: form.message,
		// 			'g-recaptcha-response': captchaToken,
		// 		},
		// 		{
		// 			publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!,
		// 		},
		// 	);


		try {
	const response = await fetch('/api/contact', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({
			name: form.name,
			email: form.email,
			phone: form.phone,
			linkedin: form.linkedin || 'N/A',
			message: form.message,
			captchaToken,
		}),
	});

	const result = await response.json();

	if (!response.ok) {
		setErrors((prev) => ({
			...prev,
			submit:
				result.message ||
				'Unable to send your message right now. Please try again.',
		}));

		return;
	}

			setSuccessMessage(
				'Thank you! Your message has been sent successfully. Our team will get back to you soon.',
			);

			setForm({
				name: '',
				email: '',
				phone: '',
				linkedin: '',
				message: '',
			});

			setCaptchaToken(null);
		} catch (error) {
			console.error('EmailJS submission error:', error);

			setErrors((prev) => ({
				...prev,
				submit:
					'Unable to send your message right now. Please try again in a moment.',
			}));
		} finally {
			setIsSending(false);
		}
	}

	const socialLinks = [
		{ icon: Linkedin, href: '', label: 'LinkedIn' },
		{ icon: Mail, href: siteConfig.social.email, label: 'Email' },
		{
			icon: MessageCircle,
			href: siteConfig.social.whatsapp,
			label: 'WhatsApp',
		},
		{
			icon: Instagram,
			href: siteConfig.social.instagram,
			label: 'Instagram',
		},
		{ icon: Youtube, href: siteConfig.social.youtube, label: 'Youtube' },
		{ icon: Facebook, href: siteConfig.social.facebook, label: 'Facebook' },
	];

	return (
		<div className="pt-28">
			{/* <section className="contactus relative overflow-hidden py-14 sm:py-20">
				<div className="pointer-events-none absolute -left-40 top-10 h-96 w-96 rounded-full bg-blue-200/30 blur-3xl" />
				<div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
					<Reveal>
						<p className="mb-4 text-sm font-semibold uppercase tracking-wider text-accent">
							Contact Us
						</p>
						<h1 className="text-4xl font-bold tracking-tight text-primary sm:text-5xl">
							Let's talk about your career.
						</h1>
						<p className="mx-auto mt-6 text-lg leading-relaxed text-muted-foreground">
							Have a question or ready to schedule a consultation? Reach out and our team will
							get back to you within 24 hours.
						</p>
					</Reveal>
				</div>
			</section> */}

			<ScrollReveal>
				<section className="relative overflow-hidden py-14 sm:py-20">
					<div className="pointer-events-none absolute -left-40 top-10 h-96 w-96 rounded-full blur-3xl" />

					<div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
						<Reveal>
							<p className="mb-4 text-[26px] font-semibold uppercase tracking-wider text-[#5368df] sm:text-6xl">
								Contact Us
							</p>

							<p className="mb-4 text-[19px] font-semibold uppercase tracking-wider text-muted-foreground sm:text-3xl">
								Have Questions? No Problem.
							</p>

							<p className="mx-auto max-w-4xl text-[16px] leading-relaxed text-muted-foreground sm:text-xl">
								Every career journey is different. Call our team to discuss your goals,
								understand your challenges, and find the right Triopath support to move your
								career forward.
							</p>
						</Reveal>
					</div>
				</section>
			</ScrollReveal>

			<section className="section-tight bg-white" id="contact-form">
				<div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
					<div className="grid gap-10 lg:grid-cols-2">
						<Reveal delay={0.1}>
							<div className="space-y-6">
								<div className="rounded-3xl border border-border bg-[#f8fafc] p-6 sm:p-8">
									<h3 className="text-lg font-bold text-primary">Follow us</h3>

									<p className="mt-2 text-sm text-muted-foreground">
										Connect with us on social media for career tips and updates.
									</p>

									<div className="mt-5 flex flex-wrap gap-3">
										{socialLinks.map((s) => (
											<div key={s.label} className="group relative">
												<a
													href={s.href}
													target="_blank"
													rel="noopener noreferrer"
													aria-label={s.label}
													className="flex h-11 w-10 items-center justify-center rounded-xl border border-border bg-white text-primary transition-all hover:border-accent hover:bg-accent hover:text-white sm:w-11"
												>
													<s.icon className="h-5 w-5" />
												</a>

												{/* Hover Tooltip */}
												<div
													className="
														pointer-events-none
														absolute
														bottom-full
														left-1/2
														z-30
														mb-2
														-translate-x-1/2
														-translate-y-1
														whitespace-nowrap
														rounded-lg
														bg-slate-600
														px-3
														py-1.5
														text-xs
														font-medium
														text-white
														opacity-0
														shadow-lg
														transition-all
														duration-200
														group-hover:translate-y-0
														group-hover:opacity-100
													"
												>
													{s.label}
												</div>
											</div>
										))}
									</div>
								</div>

								<div className="rounded-3xl border border-border bg-[#f8fafc] p-6 sm:p-8">
									<h3 className="text-lg font-bold text-primary">Phone</h3>

									<div className="mt-4 space-y-3">
										<a
											href={`tel:${siteConfig.contact.usaPhone}`}
											className="flex items-center gap-3 text-sm text-muted-foreground hover:text-accent"
										>
											<Phone className="h-4 w-4 text-accent" />
											{siteConfig.contact.usaPhone}{' '}
											<span className="text-xs text-muted-foreground/60">
												(USA)
											</span>
										</a>

										<a
											href={`tel:${siteConfig.contact.indiaPhone}`}
											className="flex items-center gap-3 text-sm text-muted-foreground hover:text-blue-600"
										>
											<Phone className="h-4 w-4 text-accent" />
											{siteConfig.contact.indiaPhone}{' '}
											<span className="text-xs text-muted-foreground/60">
												(India)
											</span>
										</a>

										<a
											href={`mailto:${siteConfig.contact.hrEmail}`}
											className="flex items-center gap-3 text-sm text-muted-foreground hover:text-blue-600"
										>
											<Mail className="h-4 w-4 text-accent" />
											{siteConfig.contact.hrEmail}{' '}
											<span className="text-xs text-muted-foreground/60">
												(HR)
											</span>
										</a>
									</div>
								</div>

								<div className="rounded-3xl border border-border bg-[#f8fafc] p-6 sm:p-8">
									<h3 className="text-lg font-bold text-primary">
										Our Locations
									</h3>

									<div className="mt-4 flex gap-2">
										<button
											type="button"
											onClick={() => setLocation('usa')}
											className={`rounded-lg px-3 py-1.5 text-xs font-medium transition-colors ${
												location === 'usa'
													? 'bg-primary text-white'
													: 'bg-white text-muted-foreground hover:bg-secondary'
											}`}
										>
											USA
										</button>

										<button
											type="button"
											onClick={() => setLocation('hyderabad')}
											className={`rounded-lg px-3 py-1.5 text-xs font-medium transition-colors ${
												location === 'hyderabad'
													? 'bg-primary text-white'
													: 'bg-white text-muted-foreground hover:bg-secondary'
											}`}
										>
											Hyderabad
										</button>
									</div>

									<div className="mt-4 flex items-start gap-3">
										<MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" />

										<p className="text-sm text-muted-foreground">
											{siteConfig.locations[location]}
										</p>
									</div>

									<div className="mt-4 overflow-hidden rounded-2xl border border-border">
										<iframe
											title={`Map of ${location}`}
											src={siteConfig.mapUrls[location]}
											width="100%"
											height="200"
											style={{ border: 0 }}
											loading="lazy"
											referrerPolicy="no-referrer-when-downgrade"
										/>
									</div>
								</div>
							</div>
						</Reveal>

						<Reveal>
							<div className="rounded-3xl border border-border bg-[#f8fafc] p-6 sm:p-8">
								<h2 className="text-xl font-bold text-primary">
									Send us a message
								</h2>

								<p
									className="mt-2 text-sm text-muted-foreground"
									id="fillout"
								>
									Fill out the form below and our team will receive your message
									directly.
								</p>

								<form
									onSubmit={handleSubmit}
									className="mt-6 space-y-5"
								>
									{/* Name */}
									<div className="relative">
										<input
											id="name"
											type="text"
											value={form.name}
											onChange={(e) =>
												setForm({
													...form,
													name: e.target.value,
												})
											}
											placeholder=" "
											autoComplete="name"
											className="
												peer
												w-full
												rounded-xl
												border
												border-border
												bg-white
												px-4
												py-3
												text-sm
												text-primary
												outline-none
												transition-all
												duration-200
												focus:border-accent
												focus:ring-1
												focus:ring-accent/20
											"
											required
										/>

										<label
											htmlFor="name"
											className="
												pointer-events-none
												absolute
												left-4
												top-1/2
												-translate-y-1/2
												bg-white
												px-0
												text-sm
												text-slate-400
												transition-all
												duration-200
												peer-focus:left-3
												peer-focus:top-0
												peer-focus:px-1
												peer-focus:text-xs
												peer-focus:font-medium
												peer-focus:text-accent
												peer-[:not(:placeholder-shown)]:left-3
												peer-[:not(:placeholder-shown)]:top-0
												peer-[:not(:placeholder-shown)]:px-1
												peer-[:not(:placeholder-shown)]:text-xs
												peer-[:not(:placeholder-shown)]:font-medium
												peer-[:not(:placeholder-shown)]:text-accent
											"
										>
											Full Name
										</label>

										{errors.name && (
											<p className="mt-1 text-xs text-red-500">
												{errors.name}
											</p>
										)}
									</div>

									{/* Email */}
									<div className="relative">
										<input
											id="email"
											type="email"
											value={form.email}
											onChange={(e) =>
												setForm({
													...form,
													email: e.target.value,
												})
											}
											placeholder=" "
											autoComplete="email"
											className="
												peer
												w-full
												rounded-xl
												border
												border-border
												bg-white
												px-4
												py-3
												text-sm
												text-primary
												outline-none
												transition-all
												duration-200
												focus:border-accent
												focus:ring-1
												focus:ring-accent/20
											"
											required
										/>

										<label
											htmlFor="email"
											className="
												pointer-events-none
												absolute
												left-4
												top-1/2
												-translate-y-1/2
												bg-white
												px-0
												text-sm
												text-slate-400
												transition-all
												duration-200
												peer-focus:left-3
												peer-focus:top-0
												peer-focus:px-1
												peer-focus:text-xs
												peer-focus:font-medium
												peer-focus:text-accent
												peer-[:not(:placeholder-shown)]:left-3
												peer-[:not(:placeholder-shown)]:top-0
												peer-[:not(:placeholder-shown)]:px-1
												peer-[:not(:placeholder-shown)]:text-xs
												peer-[:not(:placeholder-shown)]:font-medium
												peer-[:not(:placeholder-shown)]:text-accent
											"
										>
											Email
										</label>

										{errors.email && (
											<p className="mt-1 text-xs text-red-500">
												{errors.email}
											</p>
										)}
									</div>

									{/* Phone */}
									<div className="relative">
										<input
											id="phone"
											type="tel"
											value={form.phone}
											onChange={(e) =>
												setForm({
													...form,
													phone: e.target.value,
												})
											}
											placeholder=" "
											autoComplete="tel"
											className="
												peer
												w-full
												rounded-xl
												border
												border-border
												bg-white
												px-4
												py-3
												text-sm
												text-primary
												outline-none
												transition-all
												duration-200
												focus:border-accent
												focus:ring-1
												focus:ring-accent/20
											"
											required
										/>

										<label
											htmlFor="phone"
											className="
												pointer-events-none
												absolute
												left-4
												top-1/2
												-translate-y-1/2
												bg-white
												px-0
												text-sm
												text-slate-400
												transition-all
												duration-200
												peer-focus:left-3
												peer-focus:top-0
												peer-focus:px-1
												peer-focus:text-xs
												peer-focus:font-medium
												peer-focus:text-accent
												peer-[:not(:placeholder-shown)]:left-3
												peer-[:not(:placeholder-shown)]:top-0
												peer-[:not(:placeholder-shown)]:px-1
												peer-[:not(:placeholder-shown)]:text-xs
												peer-[:not(:placeholder-shown)]:font-medium
												peer-[:not(:placeholder-shown)]:text-accent
											"
										>
											Phone Number
										</label>

										{errors.phone && (
											<p className="mt-1 text-xs text-red-500">
												{errors.phone}
											</p>
										)}
									</div>

									{/* LinkedIn */}
									<div className="relative">
										<input
											id="linkedin"
											type="url"
											value={form.linkedin}
											onChange={(e) =>
												setForm({
													...form,
													linkedin: e.target.value,
												})
											}
											placeholder=" "
											autoComplete="url"
											className="
												peer
												w-full
												rounded-xl
												border
												border-border
												bg-white
												px-4
												py-3
												text-sm
												text-primary
												outline-none
												transition-all
												duration-200
												focus:border-accent
												focus:ring-1
												focus:ring-accent/20
											"
											required
										/>

										<label
											htmlFor="linkedin"
											className="
												pointer-events-none
												absolute
												left-4
												top-1/2
												-translate-y-1/2
												bg-white
												px-0
												text-sm
												text-slate-400
												transition-all
												duration-200
												peer-focus:left-3
												peer-focus:top-0
												peer-focus:px-1
												peer-focus:text-xs
												peer-focus:font-medium
												peer-focus:text-accent
												peer-[:not(:placeholder-shown)]:left-3
												peer-[:not(:placeholder-shown)]:top-0
												peer-[:not(:placeholder-shown)]:px-1
												peer-[:not(:placeholder-shown)]:text-xs
												peer-[:not(:placeholder-shown)]:font-medium
												peer-[:not(:placeholder-shown)]:text-accent
											"
											
										>
											LinkedIn URL
										</label>
									</div>

									{/* Message */}
									<div>
										<label
											htmlFor="message"
											className="mb-1.5 block text-sm font-medium text-primary"
										>
											Message
										</label>

										<textarea
											id="message"
											rows={4}
											value={form.message}
											onChange={(e) =>
												setForm({
													...form,
													message: e.target.value,
												})
											}
											className="w-full rounded-xl border border-border bg-white px-4 py-2.5 text-sm focus:border-accent focus:outline-none"
											placeholder="Tell us about your career goals..."
										/>

										{errors.message && (
											<p className="mt-1 text-xs text-red-500">
												{errors.message}
											</p>
										)}
									</div>

									{/* reCAPTCHA */}
									<div className="pt-1">
										<ReCAPTCHA
											sitekey={
												process.env
													.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!
											}
											onChange={(token) => {
												setCaptchaToken(token);

												if (token) {
													setErrors((prev) => {
														const next = { ...prev };
														delete next.captcha;
														return next;
													});
												}
											}}
											onExpired={() => {
												setCaptchaToken(null);
											}}
											onErrored={() => {
												setCaptchaToken(null);
												setErrors((prev) => ({
													...prev,
													captcha:
														'Unable to load reCAPTCHA. Please refresh the page and try again.',
												}));
											}}
										/>

										{errors.captcha && (
											<p className="mt-2 text-xs text-red-500">
												{errors.captcha}
											</p>
										)}
									</div>

									{/* Submit */}
									<button
										type="submit"
										disabled={isSending}
										className="send-button disabled:cursor-not-allowed disabled:opacity-60"
									>
										<span className="send-text">
											{isSending ? 'Sending...' : 'Send Us'}
											<ArrowBigRight size={20} />
										</span>

										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="30"
											height="10"
											viewBox="0 0 38 15"
											className="send-arrow"
										>
											<path
												d="M10 7.519l-.939-.344h0l.939.344zm14.386-1.205l-.981-.192.981.192zm1.276 5.509l.537.843.148-.094.107-.139-.792-.611zm4.819-4.304l-.385-.923h0l.385.923zm7.227.707a1 1 0 0 0 0-1.414L31.343.448a1 1 0 0 0-1.414 0 1 1 0 0 0 0 1.414l5.657 5.657-5.657 5.657a1 1 0 0 0 1.414 1.414l6.364-6.364zM1 7.519l.554.833.029-.019.094-.061.361-.23 1.277-.77c1.054-.609 2.397-1.32 3.629-1.787.617-.234 1.17-.392 1.623-.455.477-.066.707-.008.788.034.025.013.031.021.039.034a.56.56 0 0 1 .058.235c.029.327-.047.906-.39 1.842l1.878.689c.383-1.044.571-1.949.505-2.705-.072-.815-.45-1.493-1.16-1.865-.627-.329-1.358-.332-1.993-.244-.659.092-1.367.305-2.056.566-1.381.523-2.833 1.297-3.921 1.925l-1.341.808-.385.245-.104.068-.028.018c-.011.007-.011.007.543.84zm8.061-.344c-.198.54-.328 1.038-.36 1.484-.032.441.024.94.325 1.364.319.45.786.64 1.21.697.403.054.824-.001 1.21-.09.775-.179 1.694-.566 2.633-1.014l3.023-1.554c2.115-1.122 4.107-2.168 5.476-2.524.329-.086.573-.117.742-.115s.195.038.161.014c-.15-.105.085-.139-.076.685l1.963.384c.192-.98.152-2.083-.74-2.707-.405-.283-.868-.37-1.28-.376s-.849.069-1.274.179c-1.65.43-3.888 1.621-5.909 2.693l-2.948 1.517c-.92.439-1.673.743-2.221.87-.276.064-.429.065-.492.057-.043-.006.066.003.155.127.07.099.024.131.038-.063.014-.187.078-.49.243-.94l-1.878-.689zm14.343-1.053c-.361 1.844-.474 3.185-.413 4.161.059.95.294 1.72.811 2.215.567.544 1.242.546 1.664.459a2.34 2.34 0 0 0 .502-.167l.15-.076.049-.028.018-.011c.013-.008.013-.008-.524-.852l-.536-.844.019-.012c-.038.018-.064.027-.084.032-.037.008.053-.013.125.056.021.02-.151-.135-.198-.895-.046-.734.034-1.887.38-3.652l-1.963-.384zm2.257 5.701l.791.611.024-.031.08-.101.311-.377 1.093-1.213c.922-.954 2.005-1.894 2.904-2.27l-.771-1.846c-1.31.547-2.637 1.758-3.572 2.725l-1.184 1.314-.341.414-.093.117-.025.032c-.01.013-.01.013-.781-.624zm5.204-3.381c.989-.413 1.791-.42 2.697-.307.871.108 2.083.385 3.437.385v-2c-1.197 0-2.041-.226-3.19-.369-1.114-.139-2.297-.146-3.715.447l.771 1.846z"
												fill="currentColor"
											/>
										</svg>
									</button>

									{/* Success / Error */}
									{successMessage && (
										<p className="rounded-xl bg-emerald-50 px-4 py-3 text-sm text-emerald-700">
											{successMessage}
										</p>
									)}

									{errors.submit && (
										<p className="rounded-xl bg-red-50 px-4 py-3 text-sm text-red-600">
											{errors.submit}
										</p>
									)}
								</form>
							</div>
						</Reveal>
					</div>
				</div>
			</section>

			<ShowcaseSection />
		</div>
	);
}