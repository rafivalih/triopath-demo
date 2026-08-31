'use client';

import { ArrowRight, Compass, Lock, Mail, Phone, User } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import { Reveal } from '@/components/shared/Reveal';
import Image from 'next/image';
import logo from '../../app/images/favicon.png';


export default function SignUpPage() {
	const [form, setForm] = useState({
		name: '',
		email: '',
		phone: '',
		password: '',
		confirmPassword: '',
		role: 'Student',
	});
	const [errors, setErrors] = useState<Record<string, string>>({});

	function validate() {
		const e: Record<string, string> = {};
		if (!form.name.trim()) e.name = 'Name is required';
		if (!form.email.trim()) e.email = 'Email is required';
		else if (!/\S+@\S+\.\S+/.test(form.email)) e.email = 'Invalid email';
		if (!form.phone.trim()) e.phone = 'Phone is required';
		if (!form.password.trim()) e.password = 'Password is required';
		else if (form.password.length < 6) e.password = 'Password must be at least 6 characters';
		if (form.confirmPassword !== form.password) e.confirmPassword = 'Passwords do not match';
		setErrors(e);
		return Object.keys(e).length === 0;
	}

	function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
		event.preventDefault();
		if (!validate()) return;
		// API integration ready - replace with actual auth call
		window.location.href = form.role === 'Student' ? '/student/dashboard' : '/recruiter/dashboard';
	}

	return (
		<div className="pt-28">
			<section className="premium-page-hero relative overflow-hidden py-12 sm:py-16">
				<div className="pointer-events-none absolute -left-40 top-10 h-96 w-96 rounded-full bg-blue-200/30 blur-3xl" />
				<div className="relative mx-auto max-w-md px-4 sm:px-6 lg:px-8">
					<Reveal>
						<div className="rounded-3xl border border-border bg-white p-6 shadow-premium sm:p-8">
							<div className="flex items-center justify-center">
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
							<h1 className="mt-6 text-2xl font-bold text-primary text-center">Create your account</h1>
							<p className="mt-2 text-sm text-muted-foreground">
								Join TRIOPATH Careers and start moving forward.
							</p>
							<form onSubmit={handleSubmit} className="mt-6 space-y-4">
								<div>
									<label htmlFor="name" className="mb-1.5 block text-sm font-medium text-primary">
										Name
									</label>
									<div className="flex items-center gap-2 rounded-xl border border-border bg-white px-3 focus-within:border-accent">
										<User className="h-4 w-4 text-muted-foreground" />
										<input
											id="name"
											type="text"
											required
											value={form.name}
											onChange={(e) => setForm({ ...form, name: e.target.value })}
											placeholder="Your full name"
											className="w-full bg-transparent py-2.5 text-sm focus:outline-none"
										/>
									</div>
									{errors.name && <p className="mt-1 text-xs text-red-500">{errors.name}</p>}
								</div>
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
											value={form.email}
											onChange={(e) => setForm({ ...form, email: e.target.value })}
											placeholder="you@example.com"
											className="w-full bg-transparent py-2.5 text-sm focus:outline-none"
										/>
									</div>
									{errors.email && <p className="mt-1 text-xs text-red-500">{errors.email}</p>}
								</div>
								<div>
									<label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-primary">
										Phone
									</label>
									<div className="flex items-center gap-2 rounded-xl border border-border bg-white px-3 focus-within:border-accent">
										<Phone className="h-4 w-4 text-muted-foreground" />
										<input
											id="phone"
											type="tel"
											required
											value={form.phone}
											onChange={(e) => setForm({ ...form, phone: e.target.value })}
											placeholder="+1 (555) 000-0000"
											className="w-full bg-transparent py-2.5 text-sm focus:outline-none"
										/>
									</div>
									{errors.phone && <p className="mt-1 text-xs text-red-500">{errors.phone}</p>}
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
											value={form.password}
											onChange={(e) => setForm({ ...form, password: e.target.value })}
											placeholder="••••••••"
											className="w-full bg-transparent py-2.5 text-sm focus:outline-none"
										/>
									</div>
									{errors.password && (
										<p className="mt-1 text-xs text-red-500">{errors.password}</p>
									)}
								</div>
								<div>
									<label
										htmlFor="confirmPassword"
										className="mb-1.5 block text-sm font-medium text-primary"
									>
										Confirm Password
									</label>
									<div className="flex items-center gap-2 rounded-xl border border-border bg-white px-3 focus-within:border-accent">
										<Lock className="h-4 w-4 text-muted-foreground" />
										<input
											id="confirmPassword"
											type="password"
											required
											value={form.confirmPassword}
											onChange={(e) => setForm({ ...form, confirmPassword: e.target.value })}
											placeholder="••••••••"
											className="w-full bg-transparent py-2.5 text-sm focus:outline-none"
										/>
									</div>
									{errors.confirmPassword && (
										<p className="mt-1 text-xs text-red-500">{errors.confirmPassword}</p>
									)}
								</div>
								<div>
									<label className="mb-2 block text-sm font-medium text-primary">Role</label>
									<div className="grid grid-cols-2 gap-3">
										{['Student', 'Recruiter'].map((role) => (
											<button
												key={role}
												type="button"
												onClick={() => setForm({ ...form, role })}
												className={`rounded-xl border px-4 py-2.5 text-sm font-medium transition-colors ${form.role === role ? 'border-accent bg-accent/10 text-accent' : 'border-border bg-white text-muted-foreground hover:bg-secondary'}`}
											>
												{role}
											</button>
										))}
									</div>
								</div>
								<button
									type="submit"
									className="flex h-11 w-full items-center justify-center rounded-xl bg-primary text-sm font-semibold text-white transition-colors hover:bg-primary/90"
								>
									Create Account <ArrowRight className="ml-2 h-4 w-4" />
								</button>
							</form>
							<div className="relative my-5">
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
								<svg className="h-4 w-4" viewBox="0 0 24 24" aria-hidden="true">
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
							<p className="mt-6 text-center text-sm text-muted-foreground">
								Already have an account?{' '}
								<Link href="/login" className="font-semibold text-accent hover:text-accent/80">
									Login
								</Link>
							</p>
						</div>
					</Reveal>
				</div>
			</section>
		</div>
	);
}
