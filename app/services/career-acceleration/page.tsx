import { ArrowRight, ArrowUpRight, Check } from 'lucide-react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ButtonLink } from '@/components/shared/Button';
import { Icon } from '@/components/shared/Icon';
import { Reveal, Stagger, StaggerItem } from '@/components/shared/Reveal';
import { SectionHeading } from '@/components/shared/SectionHeading';
import { AnimatedBackground } from '@/components/ui/animated-background';
import { careerAccelerationServices } from '@/constants/services';

export const metadata: Metadata = {
	title: 'Career Acceleration Services',
	description:
		'Career guidance, resume optimization, interview preparation, skill development, job search assistance, and AI-powered job matching from TRIOPATH Careers.',
};

export default function CareerAccelerationPage() {
	return (
		<div className="pt-28">
			<section className="premium-page-hero relative overflow-hidden py-14 sm:py-20">
				<div className="pointer-events-none absolute -left-40 top-10 h-96 w-96 rounded-full bg-blue-200/30 blur-3xl" />
				<div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
					<Reveal>
						<p className="mb-4 text-sm font-semibold uppercase tracking-wider text-accent">
							Triopath Career Acceleration Services
						</p>
						<h1 className="text-4xl font-bold tracking-tight text-primary sm:text-5xl">
							Accelerate your career with expert guidance.
						</h1>
						<p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
							From resume optimization to interview preparation, we provide everything you need to
							land your next role — faster and with confidence.
						</p>
						<div className="mt-8 flex flex-col gap-3 sm:flex-row justify-center">
							<Link href="/student/jobs" className="slide-hover w-full sm:w-auto">
								<button className="group relative h-12 w-full sm:w-48 overflow-hidden rounded-xl bg-[#0f1729] font-semibold text-white shadow-md [perspective:1000px]">
									<div className="relative h-full w-full transition-transform duration-300 ease-out [transform-style:preserve-3d] group-hover:[transform:rotateX(90deg)]">
										<span className="absolute inset-0 flex items-center justify-center bg-primary px-4 [backface-visibility:hidden]">
											View Pricing <ArrowUpRight className="ml-1.5 h-5 w-5" />
										</span>
										<span className="absolute inset-0 flex items-center justify-center bg-white px-4 text-black [backface-visibility:hidden] [transform:rotateX(-90deg)_translateZ(24px)]">
											View Pricing <ArrowRight className="ml-1.5 h-5 w-5" />
										</span>
									</div>
								</button>
							</Link>

							<ButtonLink
								href="/contact#contact-form"
								variant="outline"
								size="lg"
								className="hover shadow-[0_5px_7px_rgba(0,0,0,0.1)] transition-shadow"
							>
								Schedule Consultation
							</ButtonLink>
						</div>
					</Reveal>
				</div>
			</section>

			<section className="section-tight bg-white">
				<div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
					<SectionHeading
						eyebrow="Our services"
						title="Everything you need to move forward."
						description="Comprehensive career services designed to support you at every stage of your journey."
					/>
					<Stagger>
						<div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
							<AnimatedBackground
								className="rounded-2xl bg-[#f7f9fc] shadow-premium border border-accent/70"
								transition={{
									type: 'spring',
									bounce: 0.2,
									duration: 0.6,
								}}
								enableHover
							>
								{careerAccelerationServices.map((service, index) => (
									<div key={service.id} data-id={`page-service-${index}`} className="h-full">
										<StaggerItem className="h-full">
											<div className="group h-full rounded-2xl border border-border/60 bg-white/80 p-6 transition-all duration-300 hover:-translate-y-1">
												<div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10 text-accent">
													<Icon name={service.icon} className="h-5 w-5" />
												</div>
												<h3 className="mt-5 font-semibold text-primary">{service.title}</h3>
												<p className="mt-2 text-sm leading-relaxed text-muted-foreground">
													{service.description}
												</p>
												<ul className="mt-4 space-y-1.5">
													{service.features.map((f) => (
														<li
															key={f}
															className="flex items-center gap-2 text-xs text-muted-foreground"
														>
															<Check className="h-3.5 w-3.5 text-emerald-500" /> {f}
														</li>
													))}
												</ul>
											</div>
										</StaggerItem>
									</div>
								))}
							</AnimatedBackground>
						</div>
					</Stagger>
				</div>
			</section>

			<section className="section-tight bg-[#f7f9fc]">
				<div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
					<div className="grid items-center gap-12 lg:grid-cols-2">
						<Reveal>
							<div>
								<SectionHeading
									eyebrow="AI-powered"
									title="Smart job matching built for your profile."
									description="Our AI job matching analyzes your skills, experience, and resume to find roles where you are most likely to succeed."
									align="left"
								/>
								<ul className="mt-8 space-y-4">
									{[
										'Match percentage scoring',
										'Identify matching and missing skills',
										'Personalized skill recommendations',
										'Real-time job market insights',
									].map((item) => (
										<li
											key={item}
											className="flex items-center gap-3 text-sm text-muted-foreground"
										>
											<span className="flex h-6 w-6 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-600">
												<Check className="h-4 w-4" />
											</span>
											{item}
										</li>
									))}
								</ul>
								{/* <ButtonLink
									href="/student/jobs"
									variant="outline"
									className="mt-8"
								>
									Explore job opportunities{" "}
									<ArrowRight className="ml-2 h-4 w-4" />
								</ButtonLink> */}

								<Link href="/pricing" className="slide-hover">
									<button className="group relative h-12 w-[40%] overflow-hidden rounded-xl bg-[#0f1729] font-semibold text-white shadow-md [perspective:1000px] mt-6">
										<div className="relative h-full w-full transition-transform duration-300 ease-out [transform-style:preserve-3d] group-hover:[transform:rotateX(90deg)]">
											<span className="absolute inset-0 flex items-center justify-center bg-primary px-4 [backface-visibility:hidden]">
												Explore job opportunities <ArrowUpRight className="ml-1.5 h-5 w-5" />
											</span>
											<span className="absolute inset-0 flex items-center justify-center bg-white px-4 text-black [backface-visibility:hidden] [transform:rotateX(-90deg)_translateZ(24px)]">
												Explore job opportunities <ArrowRight className="ml-1.5 h-5 w-5" />
											</span>
										</div>
									</button>
								</Link>
							</div>
						</Reveal>
						<Reveal delay={0.1}>
							<div className="rounded-3xl border border-border bg-white p-8 shadow-soft transition-transform duration-300 hover:scale-105 hover:shadow-md">
								<div className="flex items-center justify-between border-b border-border pb-6">
									<div>
										<p className="text-sm text-muted-foreground">Match Score</p>
										<p className="mt-1 text-4xl font-bold text-accent">87%</p>
									</div>
									<div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-accent/10">
										<span className="text-2xl font-bold text-accent">A+</span>
									</div>
								</div>
								<div className="mt-6 space-y-4">
									<div>
										<p className="text-xs font-semibold uppercase tracking-wider text-emerald-600">
											Matching Skills
										</p>
										<div className="mt-2 flex flex-wrap gap-2">
											{['Java', 'Spring Boot', 'SQL'].map((s) => (
												<span
													key={s}
													className="rounded-lg bg-emerald-500/10 px-3 py-1.5 text-xs font-medium text-emerald-700"
												>
													{s}
												</span>
											))}
										</div>
									</div>
									<div>
										<p className="text-xs font-semibold uppercase tracking-wider text-amber-600">
											Missing Skills
										</p>
										<div className="mt-2 flex flex-wrap gap-2">
											{['Docker', 'AWS'].map((s) => (
												<span
													key={s}
													className="rounded-lg bg-amber-500/10 px-3 py-1.5 text-xs font-medium text-amber-700"
												>
													{s}
												</span>
											))}
										</div>
									</div>
								</div>
							</div>
						</Reveal>
					</div>
				</div>
			</section>

			<section className="px-4 pb-20 pt-20 sm:px-6 sm:pb-28 lg:px-8">
				<div className="navy-gradient relative mx-auto max-w-[1400px] overflow-hidden rounded-3xl px-6 py-14 text-center sm:px-12 sm:py-20">
					<div className="pointer-events-none absolute left-1/4 top-0 h-64 w-64 rounded-full bg-accent/15 blur-3xl" />
					<div className="relative">
						<h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
							Ready to accelerate your career?
						</h2>
						<p className="mx-auto mt-4 max-w-xl text-white/60">
							Get started with a personalized career consultation today.
						</p>
						<Link href="/student/jobs" className="">
							<button className="group relative h-12 w-[20%] overflow-hidden rounded-xl bg-[#0f1729] font-semibold text-white shadow-md [perspective:1000px] mt-6">
								<div className="relative h-full w-full transition-transform duration-300 ease-out [transform-style:preserve-3d] group-hover:[transform:rotateX(90deg)]">
									<span className="absolute inset-0 flex items-center justify-center bg-primary px-4 [backface-visibility:hidden]">
										Schedule a consultation <ArrowUpRight className="ml-1.5 h-5 w-5" />
									</span>
									<span className="absolute inset-0 flex items-center justify-center bg-white px-4 text-black [backface-visibility:hidden] [transform:rotateX(-90deg)_translateZ(24px)]">
										Schedule a consultation <ArrowRight className="ml-1.5 h-5 w-5" />
									</span>
								</div>
							</button>
						</Link>
					</div>
				</div>
			</section>
		</div>
	);
}
