import { ArrowRight, Check } from 'lucide-react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ButtonLink } from '@/components/shared/Button';
import ButtonHover from '@/components/shared/ButtonHover';
import { Icon } from '@/components/shared/Icon';
import { Reveal, Stagger, StaggerItem } from '@/components/shared/Reveal';
import { ScrollReveal } from '@/components/shared/ScrollReveal';
import { SectionHeading } from '@/components/shared/SectionHeading';
import { recruitmentServices } from '@/constants/services';

export const metadata: Metadata = {
	title: 'Recruitment & Staffing Services',
	description:
		'Talent sourcing, candidate screening, recruitment, staffing, technical hiring, and AI-powered candidate matching from TRIOPATH Careers.',
};

export default function RecruitmentPage() {
	return (
		<div className="pt-[84px] ">
			<section className="premium-page-hero relative overflow-hidden py-[80px] sm:py-[100px] ">
				<div className="pointer-events-none absolute -left-40 top-10 h-96 w-96 rounded-full bg-blue-200/30 blur-3xl" />
				<div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
					<Reveal>
						<p className="mb-2 text-sm font-semibold uppercase tracking-wider text-accent">
							Recruitment & Staffing Services
						</p>
						<h1 className="text-4xl font-bold tracking-tight text-primary sm:text-5xl">
							Find the right talent, faster.
						</h1>
						<p className="mx-auto mt-6 max-w-2xl text-md leading-relaxed text-muted-foreground space-x-0">
							From talent sourcing and screening to intelligent candidate matching, we provide
							comprehensive recruitment and staffing solutions tailored to your hiring needs..
						</p>
						<div className="mt-8 flex flex-col gap-5 sm:flex-row justify-center">
							<Link href="/contact#contact-form" className="w-full sm:w-auto">
								<button className="group relative h-12 w-full sm:w-48 overflow-hidden rounded-xl bg-[#0f1729] font-semibold text-white shadow-md [perspective:1000px]">
									<div className="relative h-full w-full transition-transform duration-300 ease-out [transform-style:preserve-3d] group-hover:[transform:rotateX(90deg)]">
										{/* Normal */}
										<span className="absolute inset-0 flex items-center justify-center bg-primary px-4 [backface-visibility:hidden]">
											Hire with us
											<ArrowRight className="ml-1.5 h-5 w-5" />
										</span>

										{/* Hover */}
										<span className="absolute inset-0 flex items-center justify-center bg-white px-4 text-black [backface-visibility:hidden] [transform:rotateX(-90deg)_translateZ(24px)]">
											Hire with us
											<ArrowRight className="ml-1.5 h-5 w-5" />
										</span>
									</div>
								</button>
							</Link>

							<ButtonLink href="/pricing" variant="outline" size="lg" className="slide-hover">
								<span className="slide-hover-label">View Pricing</span>
							</ButtonLink>
						</div>
					</Reveal>
				</div>
			</section>

			<ScrollReveal>
				{/* <section className="section-tight bg-white mt-0 pt-0"> */}
				<section className="bg-white pt-8 pb-10 sm:pt-5 sm:pb-20">
					<div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
						<SectionHeading
							eyebrow="Our services"
							title="End-to-end recruitment solutions."
							description="From talent sourcing and screening to intelligent candidate matching, we provide comprehensive recruitment and staffing solutions tailored to your hiring needs."
							// description="From sourcing to onboarding, we provide comprehensive recruitment and staffing services tailored to your needs."
						/>
						<Stagger>
							<div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
								{recruitmentServices.map((service) => (
									<StaggerItem key={service.id}>
										<div className="group h-full rounded-2xl border border-border bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent/30 hover:shadow-premium">
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
								))}
							</div>
						</Stagger>
					</div>
				</section>
			</ScrollReveal>

			<ScrollReveal>
				<section className="section-tight bg-[#f7f9fc]">
					<div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
						<div className="grid items-center gap-12 lg:grid-cols-2">
							<Reveal>
								<div className="relative">
									<div className="overflow-hidden rounded-3xl">
										<img
											src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1000"
											alt="Recruitment team at work"
											className="h-[400px] w-full object-cover"
										/>
									</div>
								</div>
							</Reveal>
							<Reveal delay={0.1}>
								<div>
									<SectionHeading
										eyebrow="Why employers choose us"
										title="Quality candidates, every time."
										description="Our rigorous screening process ensures you only meet candidates who are qualified, prepared, and ready to contribute."
										align="left"
									/>
									<div className="mt-8 grid gap-5 sm:grid-cols-2">
										<div className="rounded-2xl border border-border bg-white p-5">
											<p className="text-2xl font-bold text-primary">30+</p>
											<p className="mt-1 text-sm text-muted-foreground">Hiring partners trust us</p>
										</div>
										<div className="rounded-2xl border border-border bg-white p-5">
											<p className="text-2xl font-bold text-primary">48 hrs</p>
											<p className="mt-1 text-sm text-muted-foreground">
												Average time to first match
											</p>
										</div>
										<div className="rounded-2xl border border-border bg-white p-5">
											<p className="text-2xl font-bold text-primary">92%</p>
											<p className="mt-1 text-sm text-muted-foreground">Retention after 6 months</p>
										</div>
										<div className="rounded-2xl border border-border bg-white p-5">
											<p className="text-2xl font-bold text-primary">5K+</p>
											<p className="mt-1 text-sm text-muted-foreground">Candidates in our pool</p>
										</div>
									</div>
									{/* <ButtonLink href="/contact#contact-form" className="mt-8">
										Start hiring <ArrowRight className="ml-2 h-4 w-4" />
									</ButtonLink> */}

									<ButtonHover
										text="Start Hiring"
										href="/contact#contact-form"
										className="w-[11.2rem] mt-5"
									/>
								</div>
							</Reveal>
						</div>
					</div>
				</section>
			</ScrollReveal>

			<section className="px-4 pb-20 pt-20 sm:px-6 sm:pb-28 lg:px-8">
				<div className="navy-gradient relative mx-auto max-w-[1400px] overflow-hidden rounded-3xl px-6 py-14 text-center sm:px-12 sm:py-20">
					<div className="pointer-events-none absolute left-1/4 top-0 h-64 w-64 rounded-full bg-accent/15 blur-3xl" />
					<div className="relative">
						<h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
							Looking to build your team?
						</h2>
						<p className="mx-auto mt-4 max-w-xl text-white/60">
							Partner with TRIOPATH Careers and access pre-screened, qualified candidates.
						</p>
						<Link href="/contact#contact-form" className="w-full sm:w-auto">
							<button className="group relative h-12 w-full sm:w-[200px] overflow-hidden rounded-xl bg-[#0f1729] font-semibold text-white shadow-md [perspective:1000px] border-[2px] mt-2 border-white/20">
								<div className="relative h-full w-full transition-transform duration-300 ease-out [transform-style:preserve-3d] group-hover:[transform:rotateX(90deg)]">
									{/* Normal */}
									<span className="absolute inset-0 flex items-center justify-center bg-primary px-4 [backface-visibility:hidden]">
										Contact our team
										<ArrowRight className="ml-1.5 h-5 w-5" />
									</span>

									{/* Hover */}
									<span className="absolute inset-0 flex items-center justify-center bg-white px-4 text-black [backface-visibility:hidden] [transform:rotateX(-90deg)_translateZ(24px)]">
										Contact our team
										<ArrowRight className="ml-1.5 h-5 w-5" />
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
