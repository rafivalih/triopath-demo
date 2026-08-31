import { ArrowRight, ArrowUpRight, Award, ShieldCheck, TrendingUp, Users } from 'lucide-react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { BorderTrail } from '@/components/core/border-trail';
import { ButtonLink } from '@/components/shared/Button';
import { Reveal, Stagger, StaggerItem } from '@/components/shared/Reveal';
import { ScrollReveal } from '@/components/shared/ScrollReveal';
import { SectionHeading } from '@/components/shared/SectionHeading';
import { StatCounter } from '@/components/shared/StatCounter';
import StudioGallery from '@/components/shared/StudioGallery';
import { ValueCards } from '@/components/shared/ValueCards';

export const metadata: Metadata = {
	title: 'Who We Are',
	description:
		'TRIOPATH Careers is a career acceleration and recruitment agency helping professionals find their path forward.',
};

const stats = [
	['4+', 'Years of experience'],
	['5000+', 'Candidates guided'],
	['30+', 'Hiring partners'],
	['88%', 'Success rate'],
];

const whyUs = [
	{
		icon: 'Users',
		title: 'People-first',
		text: 'Real mentors and recruiters who see the person behind the resume.',
	},
	{
		icon: 'Award',
		title: 'Proven results',
		text: '88% of our candidates land interviews within 60 days.',
	},
	{
		icon: 'ShieldCheck',
		title: 'Trust & transparency',
		text: 'No false promises. Just honest guidance and measurable progress.',
	},
	{
		icon: 'TrendingUp',
		title: 'Momentum-driven',
		text: 'We focus on building career momentum, not just one-time placements.',
	},
];

const approachSteps = [
	{
		number: '01',
		title: 'Discover',
		text: 'We understand your goals, experience, strengths, and the direction you want your career to take.',
	},
	{
		number: '02',
		title: 'Prepare',
		text: 'We help strengthen your resume, skills, interview readiness, and overall professional positioning.',
	},
	{
		number: '03',
		title: 'Connect',
		text: 'We help you identify relevant opportunities and connect with employers that match your career direction.',
	},
	{
		number: '04',
		title: 'Grow',
		text: 'We focus on creating long-term career momentum rather than simply helping you find one opportunity.',
	},
];

export default function AboutPage() {
	return (
		<div className="pt-[90px]">
			<section className="aboutus relative overflow-hidden py-14 sm:py-20">
				<div className="pointer-events-none absolute -left-40 top-10 h-96 w-96 rounded-full bg-blue-200/30 blur-3xl" />
				<div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
					<Reveal>
						<p className="mb-4 text-sm font-semibold uppercase tracking-wider text-accent mt-6">
							About TRIOPATH Careers
						</p>
						<h1 className="text-4xl font-bold tracking-tight text-primary sm:text-[50px] mt-5">
							We help careers move forward
						</h1>
						<p className="mx-auto mt-6 max-w-2xl text-md leading-relaxed text-muted-foreground">
							TRIOPATH Careers was founded on a simple belief: every candidate deserves a path
							forward. We combine expert career guidance, resume optimization, recruitment, and
							staffing to help professionals and employers find their perfect match.
						</p>
					</Reveal>
				</div>
			</section>

			<section className="section-tight bg-white">
				<div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
					<div className="grid items-center gap-12 lg:grid-cols-2">
						<Reveal>
							<div className="relative">
								<div className="overflow-hidden rounded-3xl">
									<img
										src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1000"
										alt="TRIOPATH team collaborating"
										className="h-[420px] w-full object-cover"
									/>
								</div>
								<div className="absolute -bottom-6 -right-4 rounded-2xl bg-primary p-5 text-white shadow-navy sm:-right-8">
									<p className="text-3xl font-bold">Since 2025</p>
									<p className="mt-1 text-xs text-white/60">guiding careers</p>
								</div>
							</div>
						</Reveal>
						<Reveal delay={0.1}>
							<div>
								<SectionHeading
									eyebrow="Our story"
									title="A company built by people who care about careers."
									description="What started as a small career consulting practice has grown into a full-service career acceleration and recruitment platform serving thousands of professionals across India and the USA."
									align="left"
								/>
								<p className="mt-5 text-base leading-relaxed text-muted-foreground">
									We saw too many talented people stuck — not because they lacked ability, but
									because they lacked guidance and approach. So we built a platform that combines
									human expertise with smart technology to help every candidate find their path
									forward.
								</p>
								<p className="mt-4 text-base leading-relaxed text-muted-foreground">
									Today, TRIOPATH Careers is trusted by over 30 hiring partners and has guided more
									than 5,000 candidates toward meaningful careers.
								</p>
							</div>
						</Reveal>
					</div>
				</div>
			</section>

			<ScrollReveal>
				<section className="section-tight bg-[#f7f9fc]">
					<div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
						<SectionHeading eyebrow="What drives us" title="Our mission, vision, and values." />
						<div className="mt-10 sm:mt-12">
							<ValueCards />
						</div>
					</div>
				</section>
			</ScrollReveal>

			<ScrollReveal>
				<StudioGallery />
			</ScrollReveal>

			<ScrollReveal>
				<section className="section-tight bg-white">
					<div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
						<SectionHeading eyebrow="Why TRIOPATH" title="What sets us apart." />
						<Stagger>
							<div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
								{whyUs.map((item) => (
									<StaggerItem key={item.title}>
										<div className="h-full rounded-2xl border border-border bg-[#f8fafc] p-6 text-center">
											<div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent">
												{item.icon === 'Users' && <Users className="h-6 w-6" />}
												{item.icon === 'Award' && <Award className="h-6 w-6" />}
												{item.icon === 'ShieldCheck' && <ShieldCheck className="h-6 w-6" />}
												{item.icon === 'TrendingUp' && <TrendingUp className="h-6 w-6" />}
											</div>
											<h3 className="mt-5 font-semibold text-primary">{item.title}</h3>
											<p className="mt-2 text-sm leading-relaxed text-muted-foreground">
												{item.text}
											</p>
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
						<Reveal>
							<SectionHeading
								eyebrow="How we work"
								title="A clearer path from ambition to opportunity."
								description="Every career journey is different. Our approach is designed to give you clarity, preparation, meaningful connections, and momentum."
							/>
						</Reveal>

						<Stagger>
							<div className="relative mt-10 grid gap-5 sm:mt-12 md:grid-cols-2 lg:grid-cols-4">
								{/* Connecting line - desktop */}
								<div className="pointer-events-none absolute left-[12.5%] right-[12.5%] top-8 hidden h-px bg-border lg:block" />

								{approachSteps.map((step) => (
									<StaggerItem key={step.number} className="h-full">
										{/* Outer Wrapper for Rotating Border Trail */}
										<div className="relative z-10 h-full overflow-hidden rounded-2xl border border-border/80 bg-white/20 p-[1.5px]">
											<BorderTrail
												className="bg-gradient-to-r from-blue-400 via-indigo-400 to-transparent"
												size={80}
												transition={{
													repeat: Infinity,
													duration: 4,
													ease: 'linear',
												}}
											/>

											{/* Inner Card Content */}
											<div className="relative z-10 h-full rounded-[14px] bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-md sm:p-7">
												<div className="flex items-center justify-between">
													<div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent/10 text-sm font-bold text-accent ring-8 ring-[#f7f9fc]">
														{step.number}
													</div>

													<ArrowRight className="hidden h-5 w-5 text-muted-foreground/50 lg:block" />
												</div>

												<h3 className="mt-6 text-lg font-semibold text-primary">{step.title}</h3>

												<p className="mt-3 text-sm leading-relaxed text-muted-foreground">
													{step.text}
												</p>
											</div>
										</div>
									</StaggerItem>
								))}
							</div>
						</Stagger>
					</div>
				</section>
			</ScrollReveal>

			{/* Stats Section with Scroll-Triggered Animated Counters */}
			<section className="navy-gradient py-16">
				<div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
					<div className="grid grid-cols-2 gap-8 md:grid-cols-4">
						{stats.map(([value, label]) => (
							<div key={label} className="text-center">
								<p className="text-3xl font-bold text-white sm:text-4xl">
									{/* Triggers count up ONLY when scrolled into viewport */}
									<StatCounter value={value} />
								</p>
								<p className="mt-2 text-sm text-white/60">{label}</p>
							</div>
						))}
					</div>
				</div>
			</section>

			<section className="px-4 pb-20 pt-20 sm:px-6 sm:pb-28 lg:px-8">
				<div className="navy-gradient relative mx-auto max-w-[1400px] overflow-hidden rounded-3xl px-6 py-14 text-center sm:px-12 sm:py-20">
					<div className="pointer-events-none absolute left-1/4 top-0 h-64 w-64 rounded-full bg-accent/15 blur-3xl" />
					<div className="relative">
						<h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
							Ready to move your career forward?
						</h2>
						<p className="mx-auto mt-4 mb-4 max-w-xl text-white/60 sm:whitespace-nowrap">
							Join thousands of professionals who chose TRIOPATH to guide their next step.
						</p>
						{/* <ButtonLink href="/contact#contact-form" variant="white" className="mt-8">Schedule a consultation <ArrowRight className="ml-2 h-4 w-4" /></ButtonLink> */}
						<Link href="/student/jobs" className="">
							<button className="group relative h-12 w-[20%] overflow-hidden rounded-xl bg-[#0f1729] font-semibold text-white shadow-md [perspective:1000px] border-[0.5px] border-gray-400 hover:border-green-100">
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
