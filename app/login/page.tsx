import { ArrowRight, Compass, Lock, Mail } from 'lucide-react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Reveal } from '@/components/shared/Reveal';
import logo from '../../app/images/favicon.png';
import Image from 'next/image';


export const metadata: Metadata = {
	title: 'Login',
	description: 'Sign in to your TRIOPATH Careers account.',
};

export default function LoginPage() {
	return (
		<div className="pt-14">
			<section className="premium-page-hero relative overflow-hidden py-12 sm:py-16">
				<div className="pointer-events-none absolute -left-40 top-10 h-96 w-96 rounded-full bg-blue-200/30 blur-3xl" />
				<div className="relative mx-auto max-w-md px-4 sm:px-6 lg:px-8">
					<Reveal>
						<div className="rounded-3xl border border-border bg-white p-6 shadow-premium sm:p-8">
							<div className="flex items-center  justify-center ">
								{/* <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-white">
									<Compass className="h-5 w-5" />
								</span> */}
									<span className="flex h-9 w-9 shrink-0 items-center justify-center">
																<Image
																	src={logo}
																	alt="TRIOPATH logo"
																	width={30}
																	height={30}
																	className="h-8 w-8 object-contain bg-transparent"
																/>
															</span>
								<span className="text-4xl font-bold tracking-[0.02em] text-primary">TRIOPATH</span>
							</div>
							<h1 className="mt-6 text-2xl font-bold text-primary text-center items-center">Welcome back</h1>
							<p className="mt-2 text-sm text-muted-foreground">
								Sign in to access your dashboard and continue your career journey.
							</p>
							<form className="mt-6 space-y-4">
								<div>
									<label htmlFor="email" className="mb-1.5 block text-sm font-medium text-primary">
										Email
									</label>
									<div className="flex items-center gap-2 rounded-xl border border-border bg-white px-3 focus-within:border-accent">
										<Mail className="h-4 w-4 text-muted-foreground" />
										<input
											id="email"
											type="email"
											required
											placeholder="you@example.com"
											className="w-full bg-transparent py-2.5 text-sm focus:outline-none"
										/>
									</div>
								</div>
								<div>
									<label
										htmlFor="password"
										className="mb-1.5 block text-sm font-medium text-primary"
									>
										Password
									</label>
									<div className="flex items-center gap-2 rounded-xl border border-border bg-white px-3 focus-within:border-accent">
										<Lock className="h-4 w-4 text-muted-foreground" />
										<input
											id="password"
											type="password"
											required
											placeholder="••••••••"
											className="w-full bg-transparent py-2.5 text-sm focus:outline-none"
										/>
									</div>
								</div>
								<div className="flex items-center justify-between">
									<label className="flex items-center gap-2 text-xs text-muted-foreground">
										<input type="checkbox" className="rounded border-border" /> Remember me
									</label>
									<Link href="#" className="text-xs font-medium text-accent hover:text-accent/80">
										Forgot password?
									</Link>
								</div>
								<button
									type="submit"
									className="flex h-11 w-full items-center justify-center rounded-xl bg-primary text-sm font-semibold text-white transition-colors hover:bg-primary/90"
								>
									Login <ArrowRight className="ml-2 h-4 w-4" />
								</button>
								<div className="relative py-2">
									<div className="absolute inset-0 flex items-center">
										<div className="w-full border-t border-border" />
									</div>
									<div className="relative flex justify-center">
										<span className="bg-white px-3 text-xs text-muted-foreground">or</span>
									</div>
								</div>
								<button
									type="button"
									className="flex h-11 w-full items-center justify-center gap-2 rounded-xl border border-border bg-white text-sm font-medium text-primary transition-colors hover:bg-secondary"
								>
									<svg className="h-4 w-4" viewBox="0 0 24 24">
										<path
											fill="#4285F4"
											d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
										/>
										<path
											fill="#34A853"
											d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
										/>
										<path
											fill="#FBBC05"
											d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
										/>
										<path
											fill="#EA4335"
											d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
										/>
									</svg>
									Continue with Google
								</button>
							</form>
							<p className="mt-6 text-center text-sm text-muted-foreground">
								Don't have an account?{' '}
								<Link href="/signup" className="font-semibold text-accent hover:text-accent/80">
									Sign up
								</Link>
							</p>
						</div>
					</Reveal>
				</div>
			</section>
		</div>
	);
}























// 'use client';

// import { AnimatePresence, motion } from 'framer-motion';
// import {
// 	ArrowRight,
// 	Check,
// 	Chrome,
// 	Eye,
// 	EyeOff,
// 	LockKeyhole,
// 	Mail,
// 	UserRound,
// } from 'lucide-react';
// import { FormEvent, useState } from 'react';

// type AuthMode = 'login' | 'signup';

// export default function LoginPage() {
// 	const [mode, setMode] = useState<AuthMode>('login');
// 	const [rememberMe, setRememberMe] = useState(false);
// 	const [showPassword, setShowPassword] = useState(false);
// 	const [loading, setLoading] = useState(false);

// 	const [loginForm, setLoginForm] = useState({
// 		email: '',
// 		password: '',
// 	});

// 	const [signupForm, setSignupForm] = useState({
// 		name: '',
// 		email: '',
// 		password: '',
// 	});

// 	const handleLogin = async (e: FormEvent<HTMLFormElement>) => {
// 		e.preventDefault();

// 		setLoading(true);

// 		// Temporary frontend-only behavior.
// 		await new Promise((resolve) => setTimeout(resolve, 900));

// 		setLoading(false);
// 	};

// 	const handleSignup = async (e: FormEvent<HTMLFormElement>) => {
// 		e.preventDefault();

// 		setLoading(true);

// 		// Temporary frontend-only behavior.
// 		await new Promise((resolve) => setTimeout(resolve, 900));

// 		setLoading(false);
// 	};

// 	const handleGoogle = async () => {
// 		setLoading(true);

// 		// Google authentication will be connected later.
// 		await new Promise((resolve) => setTimeout(resolve, 900));

// 		setLoading(false);
// 	};

// 	const switchMode = (nextMode: AuthMode) => {
// 		setLoading(false);
// 		setShowPassword(false);
// 		setMode(nextMode);
// 	};

// 	return (
// 		<main className="relative min-h-screen overflow-hidden bg-[#eef0f4] text-[#17191d] pt-15">
// 			{/* =====================================================
// 			    BACKGROUND
// 			===================================================== */}

// 			<div className="pointer-events-none absolute inset-0 overflow-hidden">
// 				{/* Main glow */}
// 				<motion.div
// 					animate={{
// 						x: [0, 35, 0],
// 						y: [0, -25, 0],
// 						scale: [1, 1.08, 1],
// 					}}
// 					transition={{
// 						duration: 10,
// 						repeat: Infinity,
// 						ease: 'easeInOut',
// 					}}
// 					className="
// 						absolute
// 						-left-32
// 						-top-32
// 						h-[420px]
// 						w-[420px]
// 						rounded-full
// 						bg-[#b51c2b]/10
// 						blur-[100px]
// 					"
// 				/>

// 				<motion.div
// 					animate={{
// 						x: [0, -40, 0],
// 						y: [0, 35, 0],
// 						scale: [1, 1.12, 1],
// 					}}
// 					transition={{
// 						duration: 12,
// 						repeat: Infinity,
// 						ease: 'easeInOut',
// 					}}
// 					className="
// 						absolute
// 						-bottom-40
// 						-right-32
// 						h-[500px]
// 						w-[500px]
// 						rounded-full
// 						bg-[#667085]/10
// 						blur-[110px]
// 					"
// 				/>

// 				{/* Tiny floating circles */}
// 				<motion.div
// 					animate={{ y: [0, -15, 0] }}
// 					transition={{
// 						duration: 4,
// 						repeat: Infinity,
// 						ease: 'easeInOut',
// 					}}
// 					className="
// 						absolute
// 						left-[12%]
// 						top-[22%]
// 						h-3
// 						w-3
// 						rounded-full
// 						bg-[#b51c2b]/20
// 					"
// 				/>

// 				<motion.div
// 					animate={{ y: [0, 18, 0] }}
// 					transition={{
// 						duration: 5,
// 						repeat: Infinity,
// 						ease: 'easeInOut',
// 					}}
// 					className="
// 						absolute
// 						right-[14%]
// 						top-[30%]
// 						h-2
// 						w-2
// 						rounded-full
// 						bg-[#68707d]/30
// 					"
// 				/>
// 			</div>

// 			{/* =====================================================
// 			    PAGE CONTENT
// 			===================================================== */}

// 			<div className="relative z-10 flex min-h-screen items-center justify-center px-4 py-10 sm:px-6">
// 				<motion.div
// 					initial={{
// 						opacity: 0,
// 						y: 35,
// 						scale: 0.96,
// 					}}
// 					animate={{
// 						opacity: 1,
// 						y: 0,
// 						scale: 1,
// 					}}
// 					transition={{
// 						duration: 0.8,
// 						ease: [0.22, 1, 0.36, 1],
// 					}}
// 					className="relative w-full max-w-[490px]"
// 				>
// 					{/* =================================================
// 					    OUTER CARD
// 					================================================= */}

// 					<div
// 						className="
// 							relative
// 							overflow-hidden
// 							rounded-[38px]
// 							border
// 							border-white/80
// 							bg-[#eef0f4]/90
// 							p-5
// 							shadow-[
// 								20px_25px_55px_rgba(113,119,129,0.25),
// 								-20px_-20px_55px_rgba(255,255,255,0.95)
// 							]
// 							backdrop-blur-xl
// 							sm:rounded-[46px]
// 							sm:p-7
// 						"
// 					>
// 						{/* Animated shine */}
// 						<motion.div
// 							animate={{
// 								x: ['-120%', '220%'],
// 							}}
// 							transition={{
// 								duration: 5,
// 								repeat: Infinity,
// 								repeatDelay: 3,
// 								ease: 'easeInOut',
// 							}}
// 							className="
// 								pointer-events-none
// 								absolute
// 								inset-y-0
// 								-left-1/2
// 								w-1/3
// 								rotate-[18deg]
// 								bg-gradient-to-r
// 								from-transparent
// 								via-white/30
// 								to-transparent
// 								blur-xl
// 							"
// 						/>

// 						{/* Inner border */}
// 						<div
// 							className="
// 								pointer-events-none
// 								absolute
// 								inset-[10px]
// 								rounded-[32px]
// 								border
// 								border-white/70
// 								sm:inset-[12px]
// 								sm:rounded-[38px]
// 							"
// 						/>

// 						<div className="relative z-10 rounded-[30px] px-5 py-7 sm:rounded-[36px] sm:px-10 sm:py-9">
// 							{/* =================================================
// 							    LOGO / BRAND MARK
// 							================================================= */}

// 							<motion.div
// 								initial={{ opacity: 0, scale: 0.7 }}
// 								animate={{ opacity: 1, scale: 1 }}
// 								transition={{
// 									delay: 0.15,
// 									duration: 0.5,
// 								}}
// 								className="mb-5 flex justify-center"
// 							>
// 								<div
// 									className="
// 										flex
// 										h-11
// 										w-11
// 										items-center
// 										justify-center
// 										rounded-2xl
// 										bg-[#eef0f4]
// 										text-[##081330]
// 										shadow-[
// 											5px_5px_12px_rgba(180,185,193,0.45),
// 											-5px_-5px_12px_rgba(255,255,255,0.9)
// 										]
// 									"
// 								>
// 									{/* <div className="h-3 w-3 rounded-full bg-[##081330] shadow-[0_0_16px_rgba(168,23,37,0.35)]" >Sign Up</div> */}
// 								</div>
// 							</motion.div>

// 							{/* =================================================
// 							    FORM CONTENT
// 							================================================= */}

// 							<AnimatePresence mode="wait" initial={false}>
// 								{mode === 'login' ? (
// 									<motion.div
// 										key="login"
// 										initial={{
// 											opacity: 0,
// 											x: 35,
// 										}}
// 										animate={{
// 											opacity: 1,
// 											x: 0,
// 										}}
// 										exit={{
// 											opacity: 0,
// 											x: -35,
// 										}}
// 										transition={{
// 											duration: 0.4,
// 											ease: [0.22, 1, 0.36, 1],
// 										}}
// 									>
// 										<AuthHeader
// 											title="Welcome back"
// 											description="Sign in to continue to your TRIOPATH account"
// 										/>

// 										<form
// 											onSubmit={handleLogin}
// 											className="mt-7"
// 										>
// 											<AnimatedInput
// 												icon={
// 													<Mail className="h-[17px] w-[17px]" />
// 												}
// 												type="email"
// 												placeholder="Email address"
// 												value={
// 													loginForm.email
// 												}
// 												onChange={(value) =>
// 													setLoginForm(
// 														(prev) => ({
// 															...prev,
// 															email: value,
// 														}),
// 													)
// 												}
// 												delay={0.05}
// 											/>

// 											<PasswordInput
// 												value={
// 													loginForm.password
// 												}
// 												showPassword={
// 													showPassword
// 												}
// 												setShowPassword={
// 													setShowPassword
// 												}
// 												onChange={(value) =>
// 													setLoginForm(
// 														(prev) => ({
// 															...prev,
// 															password:
// 																value,
// 														}),
// 													)
// 												}
// 												delay={0.1}
// 											/>

// 											<div className="mt-4 flex items-center justify-between gap-3">
// 												<button
// 													type="button"
// 													onClick={() =>
// 														setRememberMe(
// 															(prev) =>
// 																!prev,
// 														)
// 													}
// 													className="group flex items-center gap-2"
// 												>
// 													<span
// 														className={`
// 															flex h-4 w-4 items-center
// 															justify-center rounded-[5px]
// 															border transition-all duration-200
// 															${
// 																rememberMe
// 																	? 'border-[##081330] bg-[##081330] shadow-[0_3px_8px_rgba(168,23,37,0.22)]'
// 																	: 'border-[#c9cdd3] bg-[#eef0f4] shadow-[inset_2px_2px_4px_rgba(180,185,193,0.35)]'
// 															}
// 														`}
// 													>
// 														<AnimatePresence>
// 															{rememberMe && (
// 																<motion.div
// 																	initial={{
// 																		scale: 0,
// 																		rotate: -45,
// 																	}}
// 																	animate={{
// 																		scale: 1,
// 																		rotate: 0,
// 																	}}
// 																	exit={{
// 																		scale: 0,
// 																	}}
// 																>
// 																	<Check className="h-2.5 w-2.5 text-[#081330]" />
// 																</motion.div>
// 															)}
// 														</AnimatePresence>
// 													</span>

// 													<span className="text-[11px] font-medium text-[#777d87] transition-colors group-hover:text-[##081330]">
// 														Remember me
// 													</span>
// 												</button>

// 												<button
// 													type="button"
// 													className="text-[11px] font-semibold text-[##081330] transition-all hover:tracking-wide"
// 												>
// 													Forgot password?
// 												</button>
// 											</div>

// 											<SubmitButton
// 												loading={loading}
// 												label="Sign in"
// 												loadingLabel="Signing in..."
// 											/>
// 										</form>

// 										<Divider />

// 										<GoogleButton
// 											loading={loading}
// 											onClick={handleGoogle}
// 										/>

// 										<SwitchAuth
// 											text="Don't have an account?"
// 											action="Create account"
// 											onClick={() =>
// 												switchMode('signup')
// 											}
// 										/>
// 									</motion.div>
// 								) : (
// 									<motion.div
// 										key="signup"
// 										initial={{
// 											opacity: 0,
// 											x: 35,
// 										}}
// 										animate={{
// 											opacity: 1,
// 											x: 0,
// 										}}
// 										exit={{
// 											opacity: 0,
// 											x: -35,
// 										}}
// 										transition={{
// 											duration: 0.4,
// 											ease: [0.22, 1, 0.36, 1],
// 										}}
// 									>
// 										<AuthHeader
// 											title="Create account"
// 											description="Join TRIOPATH and get started today"
// 										/>

// 										<form
// 											onSubmit={handleSignup}
// 											className="mt-7"
// 										>
// 											<AnimatedInput
// 												icon={
// 													<UserRound className="h-[17px] w-[17px]" />
// 												}
// 												type="text"
// 												placeholder="Full name"
// 												value={
// 													signupForm.name
// 												}
// 												onChange={(value) =>
// 													setSignupForm(
// 														(prev) => ({
// 															...prev,
// 															name: value,
// 														}),
// 													)
// 												}
// 												delay={0.05}
// 											/>

// 											<AnimatedInput
// 												icon={
// 													<Mail className="h-[17px] w-[17px]" />
// 												}
// 												type="email"
// 												placeholder="Email address"
// 												value={
// 													signupForm.email
// 												}
// 												onChange={(value) =>
// 													setSignupForm(
// 														(prev) => ({
// 															...prev,
// 															email: value,
// 														}),
// 													)
// 												}
// 												delay={0.1}
// 											/>

// 											<PasswordInput
// 												value={
// 													signupForm.password
// 												}
// 												showPassword={
// 													showPassword
// 												}
// 												setShowPassword={
// 													setShowPassword
// 												}
// 												onChange={(value) =>
// 													setSignupForm(
// 														(prev) => ({
// 															...prev,
// 															password:
// 																value,
// 														}),
// 													)
// 												}
// 												delay={0.15}
// 											/>

// 											<SubmitButton
// 												loading={loading}
// 												label="Create account"
// 												loadingLabel="Creating..."
// 											/>
// 										</form>

// 										<Divider />

// 										<GoogleButton
// 											loading={loading}
// 											onClick={handleGoogle}
// 										/>

// 										<SwitchAuth
// 											text="Already have an account?"
// 											action="Sign in"
// 											onClick={() =>
// 												switchMode('login')
// 											}
// 										/>
// 									</motion.div>
// 								)}
// 							</AnimatePresence>
// 						</div>
// 					</div>

// 					{/* Bottom glow */}
// 					<div className="pointer-events-none absolute -bottom-6 left-1/2 h-12 w-3/4 -translate-x-1/2 rounded-full bg-[##081330]/10 blur-2xl" />
// 				</motion.div>
// 			</div>
// 		</main>
// 	);
// }

// /* ============================================================
//    HEADER
// ============================================================ */

// function AuthHeader({
// 	title,
// 	description,
// }: {
// 	title: string;
// 	description: string;
// }) {
// 	return (
// 		<div className="text-center">
// 			<motion.h1
// 				initial={{ opacity: 0, y: 8 }}
// 				animate={{ opacity: 1, y: 0 }}
// 				className="text-[30px] font-bold tracking-[-0.045em] text-[#24272c] sm:text-[34px]"
// 			>
// 				{title}
// 			</motion.h1>

// 			<motion.p
// 				initial={{ opacity: 0, y: 8 }}
// 				animate={{ opacity: 1, y: 0 }}
// 				transition={{ delay: 0.05 }}
// 				className="mx-auto mt-2 max-w-[270px] text-[11px] leading-5 text-[#858b95]"
// 			>
// 				{description}
// 			</motion.p>
// 		</div>
// 	);
// }

// /* ============================================================
//    INPUT
// ============================================================ */

// function AnimatedInput({
// 	icon,
// 	type,
// 	placeholder,
// 	value,
// 	onChange,
// 	delay = 0,
// }: {
// 	icon: React.ReactNode;
// 	type: string;
// 	placeholder: string;
// 	value: string;
// 	onChange: (value: string) => void;
// 	delay?: number;
// }) {
// 	return (
// 		<motion.div
// 			initial={{ opacity: 0, y: 12 }}
// 			animate={{ opacity: 1, y: 0 }}
// 			transition={{
// 				delay,
// 				duration: 0.35,
// 			}}
// 			className="group relative mb-4"
// 		>
// 			<div
// 				className="
// 					pointer-events-none absolute left-4 top-1/2
// 					z-10 -translate-y-1/2 text-[#969ba4]
// 					transition-all duration-200
// 					group-focus-within:text-[##081330]
// 					group-focus-within:scale-110
// 				"
// 			>
// 				{icon}
// 			</div>

// 			<input
// 				type={type}
// 				value={value}
// 				onChange={(e) => onChange(e.target.value)}
// 				placeholder={placeholder}
// 				required
// 				className="
// 					h-[48px]
// 					w-full
// 					rounded-[14px]
// 					border
// 					border-white/80
// 					bg-[#eef0f4]
// 					pl-[45px]
// 					pr-4
// 					text-[12px]
// 					font-medium
// 					text-[#33373e]
// 					outline-none
// 					placeholder:text-[#9a9ea6]
// 					shadow-[
// 						inset_4px_4px_9px_rgba(180,185,193,0.35),
// 						inset_-4px_-4px_9px_rgba(255,255,255,0.9)
// 					]
// 					transition-all
// 					duration-300
// 					focus:border-[##081330]/20
// 					focus:shadow-[
// 						inset_3px_3px_8px_rgba(180,185,193,0.32),
// 						inset_-3px_-3px_8px_rgba(255,255,255,0.95),
// 						0_0_0_3px_rgba(168,23,37,0.06)
// 					]
// 				"
// 			/>
// 		</motion.div>
// 	);
// }

// /* ============================================================
//    PASSWORD
// ============================================================ */

// function PasswordInput({
// 	value,
// 	showPassword,
// 	setShowPassword,
// 	onChange,
// 	delay = 0,
// }: {
// 	value: string;
// 	showPassword: boolean;
// 	setShowPassword: (value: boolean) => void;
// 	onChange: (value: string) => void;
// 	delay?: number;
// }) {
// 	return (
// 		<motion.div
// 			initial={{ opacity: 0, y: 12 }}
// 			animate={{ opacity: 1, y: 0 }}
// 			transition={{
// 				delay,
// 				duration: 0.35,
// 			}}
// 			className="group relative mb-4"
// 		>
// 			<LockKeyhole
// 				className="
// 					pointer-events-none absolute left-4 top-1/2
// 					z-10 h-[17px] w-[17px]
// 					-translate-y-1/2
// 					text-[#969ba4]
// 					transition-all duration-200
// 					group-focus-within:scale-110
// 					group-focus-within:text-[##081330]
// 				"
// 			/>

// 			<input
// 				type={showPassword ? 'text' : 'password'}
// 				value={value}
// 				onChange={(e) => onChange(e.target.value)}
// 				placeholder="Password"
// 				required
// 				className="
// 					h-[48px]
// 					w-full
// 					rounded-[14px]
// 					border
// 					border-white/80
// 					bg-[#eef0f4]
// 					pl-[45px]
// 					pr-12
// 					text-[12px]
// 					font-medium
// 					text-[#33373e]
// 					outline-none
// 					placeholder:text-[#9a9ea6]
// 					shadow-[
// 						inset_4px_4px_9px_rgba(180,185,193,0.35),
// 						inset_-4px_-4px_9px_rgba(255,255,255,0.9)
// 					]
// 					transition-all
// 					duration-300
// 					focus:border-[##081330]/20
// 					focus:shadow-[
// 						inset_3px_3px_8px_rgba(180,185,193,0.32),
// 						inset_-3px_-3px_8px_rgba(255,255,255,0.95),
// 						0_0_0_3px_rgba(168,23,37,0.06)
// 					]
// 				"
// 			/>

// 			<button
// 				type="button"
// 				onClick={() =>
// 					setShowPassword(!showPassword)
// 				}
// 				className="
// 					absolute right-4 top-1/2
// 					-translate-y-1/2
// 					text-[#969ba4]
// 					transition-colors
// 					hover:text-[##081330]
// 				"
// 				aria-label={
// 					showPassword
// 						? 'Hide password'
// 						: 'Show password'
// 				}
// 			>
// 				{showPassword ? (
// 					<EyeOff className="h-[16px] w-[16px]" />
// 				) : (
// 					<Eye className="h-[16px] w-[16px]" />
// 				)}
// 			</button>
// 		</motion.div>
// 	);
// }

// /* ============================================================
//    SUBMIT BUTTON
// ============================================================ */

// function SubmitButton({
// 	loading,
// 	label,
// 	loadingLabel,
// }: {
// 	loading: boolean;
// 	label: string;
// 	loadingLabel: string;
// }) {
// 	return (
// 		<motion.button
// 			whileHover={
// 				!loading
// 					? {
// 							y: -2,
// 							scale: 1.01,
// 						}
// 					: undefined
// 			}
// 			whileTap={
// 				!loading
// 					? {
// 							scale: 0.98,
// 						}
// 					: undefined
// 			}
// 			type="submit"
// 			disabled={loading}
// 			className="
// 				mt-6
// 				flex
// 				h-[48px]
// 				w-full
// 				items-center
// 				justify-center
// 				gap-2
// 				rounded-[14px]
// 				bg-[#081330]
// 				text-[11px]
// 				font-bold
// 				uppercase
// 				tracking-[0.12em]
// 				text-white
// 				shadow-[
// 					0_12px_24px_rgba(168,23,37,0.20),
// 					5px_5px_12px_rgba(180,185,193,0.3),
// 					-5px_-5px_12px_rgba(255,255,255,0.7)
// 				]
// 				transition-all
// 				duration-300
// 				hover:bg-white
// 				hover:text-[#081330]
// 				disabled:cursor-not-allowed
// 				disabled:opacity-60
// 			"
// 		>
// 			{loading ? (
// 				<>
// 					<motion.span
// 						animate={{ rotate: 360 }}
// 						transition={{
// 							duration: 0.8,
// 							repeat: Infinity,
// 							ease: 'linear',
// 						}}
// 						className="h-3.5 w-3.5 rounded-full border-2 border-white/30 border-t-white"
// 					/>
// 					{loadingLabel}
// 				</>
// 			) : (
// 				<>
// 					{label}
// 					<ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1" />
// 				</>
// 			)}
// 		</motion.button>
// 	);
// }

// /* ============================================================
//    DIVIDER
// ============================================================ */

// function Divider() {
// 	return (
// 		<div className="my-5 flex items-center gap-3">
// 			<div className="h-px flex-1 bg-[#d5d8dd]" />
// 			<span className="text-[9px] font-medium uppercase tracking-[0.14em] text-[#9a9ea6]">
// 				or 
// 			</span>
// 			<div className="h-px flex-1 bg-[#d5d8dd]" />
// 		</div>
// 	);
// }

// /* ============================================================
//    GOOGLE
// ============================================================ */

// function GoogleButton({
// 	loading,
// 	onClick,
// }: {
// 	loading: boolean;
// 	onClick: () => void;
// }) {
// 	return (
// 		<motion.button
// 			type="button"
// 			disabled={loading}
// 			whileHover={!loading ? { y: -2 } : undefined}
// 			whileTap={!loading ? { scale: 0.98 } : undefined}
// 			onClick={onClick}
// 			className="
// 				flex
// 				h-[48px]
// 				w-full
// 				items-center
// 				justify-center
// 				gap-3
// 				rounded-[14px]
// 				border
// 				border-white
// 				bg-[#eef0f4]
// 				text-[11px]
// 				font-semibold
// 				text-[#4c5159]
// 				shadow-[
// 					5px_5px_11px_rgba(180,185,193,0.35),
// 					-5px_-5px_11px_rgba(255,255,255,0.9)
// 				]
// 				transition-all
// 				duration-300
// 				hover:text-[#081330]
// 				hover:shadow-[
// 					3px_3px_7px_rgba(180,185,193,0.35),
// 					-3px_-3px_7px_rgba(255,255,255,0.9)
// 				]
// 				disabled:cursor-not-allowed
// 				disabled:opacity-60
// 			"
// 		>
// 			{loading ? (
// 				<motion.span
// 					animate={{ rotate: 360 }}
// 					transition={{
// 						duration: 0.8,
// 						repeat: Infinity,
// 						ease: 'linear',
// 					}}
// 					className="h-3.5 w-3.5 rounded-full border-2 border-[##081330]/20 border-t-[##081330]"
// 				/>
// 			) : (
// 				<Chrome className="h-[16px] w-[16px]" />
// 			)}

// 			{loading
// 				? 'Connecting...'
// 				: 'Continue with Google'}
// 		</motion.button>
// 	);
// }

// /* ============================================================
//    SWITCH LOGIN / SIGNUP
// ============================================================ */

// function SwitchAuth({
// 	text,
// 	action,
// 	onClick,
// }: {
// 	text: string;
// 	action: string;
// 	onClick: () => void;
// }) {
// 	return (
// 		<motion.p
// 			initial={{ opacity: 0 }}
// 			animate={{ opacity: 1 }}
// 			transition={{ delay: 0.15 }}
// 			className="mt-6 text-center text-[11px] font-medium text-[#858b95]"
// 		>
// 			{text}{' '}
// 			<button
// 				type="button"
// 				onClick={onClick}
// 				className="
// 					font-bold
// 					text-[#081330]
// 					transition-all
// 					hover:tracking-wide
// 				"
// 			>
// 				{action}
// 			</button>
// 		</motion.p>
// 	);
// }
















