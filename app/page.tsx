"use client";

import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { useInView, animate } from "framer-motion";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import {
	ArrowUpRight,
	BriefcaseBusiness,
	Check,
	FileText,
	Quote,
	ArrowRight,
	ShieldCheck,
	Sparkles,
	Target,
	TrendingUp,
	Users,
	Zap,
} from "lucide-react";
import { ButtonLink } from "@/components/shared/Button";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Reveal, Stagger, StaggerItem } from "@/components/shared/Reveal";
import { FAQ } from "@/components/shared/FAQ";
import { Icon } from "@/components/shared/Icon";
import { AnimatedBackground } from "@/components/ui/animated-background";
import { BorderTrail } from "@/components/core/border-trail";
import { careerAccelerationServices } from "@/constants/services";
import { reviews } from "@/constants/reviews";
import resumepic from "../app/images/resume-half.png";
import Image from "next/image";
import faqpic from "../app/images/faqpic.webp";
import ButtonHover from "@/components/shared/ButtonHover";
import CompaniesMarquee from "@/components/shared/CompaniesMarquee";

// --- Animated Counter Component ---
function AnimatedCounter({
	value,
	duration = 2,
}: {
	value: string;
	duration?: number;
}) {
	const ref = useRef<HTMLSpanElement>(null);
	const isInView = useInView(ref, { once: true, margin: "-50px" });

	const shouldAnimate = !value.includes("/");
	const numericMatch = value.match(/[\d.]+/);
	const numericValue =
		numericMatch && shouldAnimate ? parseFloat(numericMatch[0]) : null;
	const prefix = value.split(/[\d.]+/)[0] || "";
	const suffix = value.split(/[\d.]+/)[1] || "";

	const [displayValue, setDisplayValue] = useState<string>(
		numericValue !== null ? "0" : value,
	);

	useEffect(() => {
		if (numericValue === null || !isInView) return;

		const controls = animate(0, numericValue, {
			duration: duration,
			ease: "easeOut",
			onUpdate(latest) {
				if (Number.isInteger(numericValue)) {
					setDisplayValue(Math.floor(latest).toLocaleString());
				} else {
					setDisplayValue(latest.toFixed(1));
				}
			},
		});

		return () => controls.stop();
	}, [isInView, numericValue, duration]);

	return (
		<span ref={ref}>
			{numericValue !== null ? `${prefix}${displayValue}${suffix}` : value}
		</span>
	);
}

const stats = [
	["1500+", "Mock Interviews Conducted"],
	["94%", "Interview success rate"],
	["250+", "Career Transformations"],
	["4.9/5", "Candidate satisfaction"],
];

export default function Home() {
	return (
		<div>
			<section className="relative overflow-hidden bg-[#f7f9fc] pt-32 sm:pt-40">
				<div className="pointer-events-none absolute -left-40 top-24 h-96 w-96 rounded-full bg-blue-200/30 blur-3xl" />
				<div className="pointer-events-none absolute right-0 top-0 h-[500px] w-[500px] rounded-full bg-indigo-100/30 blur-3xl" />
				<div className="relative mx-auto grid max-w-[1400px] items-center gap-12 px-4 pb-20 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:pb-20">
					<Reveal>
						<div className="max-w-2xl">
							<div className="mb-6 inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/5 px-3.5 py-2 text-xs font-semibold text-accent">
								<span className="h-1.5 w-1.5 rounded-full bg-accent" /> Career
								paths, made personal
							</div>
							<h1 className="text-4xl font-bold leading-[1.08] tracking-tight text-primary sm:text-5xl lg:text-[64px]">
								Build the career{" "}
								<span className="text-gradient">you were meant</span> to have.
							</h1>
							<p className="mt-5 max-w-xl text-lg leading-relaxed text-muted-foreground">
								From first step to next chapter, TRIOPATH gives ambitious people
								the clarity, confidence, and connections to move forward.
							</p>
							<div className="mt-6 flex flex-col gap-3 sm:flex-row">
								<Link
									href="/student/jobs"
									className="slide-hover w-full sm:w-auto"
								>
									<button className="group relative h-12 w-full sm:w-48 overflow-hidden rounded-xl bg-[#0f1729] font-semibold text-white shadow-md [perspective:1000px]">
										<div className="relative h-full w-full transition-transform duration-300 ease-out [transform-style:preserve-3d] group-hover:[transform:rotateX(90deg)]">
											<span className="absolute inset-0 flex items-center justify-center bg-primary px-4 [backface-visibility:hidden]">
												Explore Careers{" "}
												<ArrowUpRight className="ml-1.5 h-5 w-5" />
											</span>
											<span className="absolute inset-0 flex items-center justify-center bg-white px-4 text-black [backface-visibility:hidden] [transform:rotateX(-90deg)_translateZ(24px)]">
												Explore Careers{" "}
												<ArrowRight className="ml-1.5 h-5 w-5" />
											</span>
										</div>
									</button>
								</Link>

								<ButtonLink
									href="/contact#contact-form"
									variant="outline"
									size="lg"
									className="shadow-[0_2px_7px_rgba(0,0,0,0.1)] transition-shadow"
								>
									Schedule Consultation
								</ButtonLink>
							</div>
							<div className="mt-6 flex flex-wrap gap-x-6 gap-y-3 text-sm text-muted-foreground">
								<span className="flex items-center gap-2">
									<Check className="h-4 w-4 text-emerald-500" /> Personal
									guidance
								</span>
								<span className="flex items-center gap-2">
									<Check className="h-4 w-4 text-emerald-500" /> Proven outcomes
								</span>
								<span className="flex items-center gap-2">
									<Check className="h-4 w-4 text-emerald-500" /> Human expertise
								</span>
							</div>
						</div>
					</Reveal>
					<Reveal delay={0.12}>
						<div className="relative mx-auto w-full max-w-xl">
							<div className="absolute -inset-4 rounded-[32px] bg-gradient-to-br from-blue-200/40 to-indigo-200/30 blur-xl" />
							<div className="relative overflow-hidden rounded-[28px] border border-white/70 bg-white shadow-premium">
								<img
									src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1200"
									alt="Professionals collaborating around a table"
									className="h-[380px] w-full object-cover sm:h-[460px]"
								/>
								<div className="absolute inset-0 bg-gradient-to-t from-primary/75 via-transparent to-transparent" />
								<div className="absolute bottom-0 left-0 right-0 p-5 text-white sm:p-6">
									<p className="text-sm text-white/70">Your next opportunity</p>
									<p className="mt-1 text-lg font-semibold sm:text-xl">
										Starts with the right path.
									</p>
								</div>
								<div className="glass absolute right-4 top-4 rounded-2xl p-3 shadow-premium sm:right-5 sm:top-5 sm:p-4">
									<div className="flex items-center gap-2 sm:gap-3">
										<div className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-500 text-white sm:h-10 sm:w-10">
											<TrendingUp className="h-4 w-4 sm:h-5 sm:w-5" />
										</div>
										<div>
											<p className="text-lg font-bold text-primary sm:text-xl">
												+91%
											</p>
											<p className="text-[10px] text-muted-foreground sm:text-xs">
												career momentum
											</p>
										</div>
									</div>
								</div>
								<div className="absolute bottom-4 left-4 flex max-w-[calc(100%-2rem)] items-center gap-2 rounded-2xl bg-white p-2.5 shadow-premium sm:bottom-5 sm:left-5 sm:p-3">
									<div className="flex -space-x-2">
										<div className="h-7 w-7 rounded-full border-2 border-white bg-blue-200 sm:h-8 sm:w-8" />
										<div className="h-7 w-7 rounded-full border-2 border-white bg-amber-200 sm:h-8 sm:w-8" />
										<div className="h-7 w-7 rounded-full border-2 border-white bg-emerald-200 sm:h-8 sm:w-8" />
									</div>
									<p className="text-[11px] font-medium text-primary sm:text-xs">
										5,000+ moving forward
									</p>
								</div>
							</div>
						</div>
					</Reveal>
				</div>

				{/* Animated Counter Stats Section */}
				<div className="relative border-y border-border bg-white">
					<div className="mx-auto grid max-w-[1400px] grid-cols-2 px-4 py-7 sm:px-6 md:grid-cols-4 lg:px-8">
						{stats.map(([value, label], i) => (
							<div
								key={label}
								className={`px-2 py-2 text-center sm:px-4 ${
									i % 2 === 1 ? "border-l border-border" : ""
								} md:border-l md:first:border-l-0`}
							>
								<p className="text-2xl font-bold text-primary sm:text-3xl">
									<AnimatedCounter value={value} />
								</p>
								<p className="mt-1 text-xs text-muted-foreground sm:text-sm">
									{label}
								</p>
							</div>
						))}
					</div>
				</div>
			</section>
			
										<CompaniesMarquee/>

			<ScrollReveal>
				<section className="bg-white py-15 sm:py-20">
					<div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
						<div className="grid items-center gap-12 lg:grid-cols-2">
							<Reveal>
								<div className="relative">
									<div className="overflow-hidden rounded-3xl">
										<img
											src="https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=1000"
											alt="Professional receiving career guidance"
											className="h-[420px] w-full object-cover"
										/>
									</div>
									<div className="absolute -bottom-6 -right-4 rounded-2xl bg-primary p-5 text-white shadow-navy sm:-right-15">
										<p className="text-3xl font-bold">
											<AnimatedCounter value="4+" duration={0.8} /> yrs
										</p>
										<p className="mt-1 text-xs text-white/60">
											of shaping careers
										</p>
									</div>
								</div>
							</Reveal>


							<Reveal delay={0.1}>
								<div>
									<SectionHeading
										eyebrow="Why TRIOPATH"
										title="A better path is closer than you think."
										description="Triopath is a career acceleration platform focused on preparing individuals for today’s competitive job market across IT and Non-IT sectors. We work with students, graduates, and professionals to strengthen profiles, sharpen skills, and connect preparation with opportunity.."
										align="left"
									/>
									<div className="mt-8 grid gap-5 sm:grid-cols-2 ">
										<div className="rounded-2xl border border-border bg-[#f8fafc] p-5 hover:scale-105 transition-all duration-300 ">
											<Target className="h-6 w-6 text-accent" />
											<h3 className="mt-4 font-semibold text-primary">
												Clarity over noise
											</h3>
											<p className="mt-2 text-sm leading-relaxed text-muted-foreground">
												A clear plan built around your strengths, not generic
												advice.
											</p>
										</div>
										<div className="rounded-2xl border border-border bg-[#f8fafc] p-5 hover:scale-105 transition-all duration-300">
											<Users className="h-6 w-6 text-accent" />
											<h3 className="mt-4 font-semibold text-primary">
												People, not profiles
											</h3>
											<p className="mt-2 text-sm leading-relaxed text-muted-foreground">
												Real mentors and recruiters who see the person behind
												the resume.
											</p>
										</div>
									</div>

									{/* <Link href="/student/jobs" className="slide-hover">
										<button className="group relative h-12 w-[35%] overflow-hidden rounded-xl bg-[#0f1729] font-semibold text-black shadow-md [perspective:1000px] mt-6">
											<div className="relative h-full w-full transition-transform duration-300 ease-out [transform-style:preserve-3d] group-hover:[transform:rotateX(90deg)]">
												<span className="absolute inset-0 flex items-center justify-center bg-white px-4 [backface-visibility:hidden] border-[1px]">
													More about Triopath{" "}
													<ArrowUpRight className="ml-1.5 h-5 w-5" />
												</span>
												<span className="absolute inset-0 flex items-center justify-center bg-gray px-4 text-white [backface-visibility:hidden] [transform:rotateX(-90deg)_translateZ(24px)]">
													More about Triopath{" "}
													<ArrowRight className="ml-1.5 h-5 w-5" />
												</span>
											</div>
										</button>
									</Link> */}
									<ButtonHover
										text="More About Triopath"
										href="/contact#contact-form"
										className="text-[14px] w-[40%] mt-3"
									/>
								</div>
							</Reveal>
						</div>
					</div>
				</section>
			</ScrollReveal>

			{/* Services Section with AnimatedBackground */}
			<ScrollReveal>
				<section className="bg-[#f7f9fc] py-20 sm:py-28">
					<div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
						<SectionHeading
							eyebrow="What we do"
							title="Everything you need to move forward."
							description="Whether you are finding your first role, making a pivot, or building a team, our expertise meets you where you are."
						/>
						<Stagger>
							<div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
								<AnimatedBackground
									className="rounded-2xl bg-white shadow-premium border border-accent/90"
									transition={{
										type: "spring",
										bounce: 0.2,
										duration: 0.6,
									}}
									enableHover
								>
									{careerAccelerationServices
										.slice(0, 8)
										.map((service, index) => (
											<div
												key={service.id}
												data-id={`service-card-${index}`}
												className="h-full"
											>
												<StaggerItem className="h-full">
													<Link
														href="/services/career-acceleration"
														className="group block h-full rounded-2xl border border-border/60 bg-white/60 p-6 transition-all duration-300 hover:-translate-y-1"
													>
														<div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10 text-accent">
															<Icon name={service.icon} className="h-5 w-5" />
														</div>
														<h3 className="mt-5 font-semibold text-primary">
															{service.title}
														</h3>
														<p className="mt-2 text-sm leading-relaxed text-muted-foreground">
															{service.description}
														</p>
														<span className="mt-5 inline-flex items-center text-xs font-semibold text-accent">
															Explore service{" "}
															<ArrowRight className="ml-1 h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
														</span>
													</Link>
												</StaggerItem>
											</div>
										))}
								</AnimatedBackground>
							</div>
						</Stagger>
					</div>
				</section>
			</ScrollReveal>

			<ScrollReveal>
				<section className="navy-gradient relative overflow-hidden py-20 sm:py-28">
					<div className="pointer-events-none absolute right-0 top-0 h-96 w-96 rounded-full bg-accent/15 blur-3xl" />
					<div className="relative mx-auto grid max-w-[1400px] items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
						<Reveal>
							<div>
								<p className="text-sm font-semibold uppercase tracking-wider text-blue-100">
									Made for momentum
								</p>
								<h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
									Your future deserves a better career path.
								</h2>
								<p className="mt-5 max-w-lg text-sm leading-relaxed text-white mb-4">
									Every opportunity starts with the right preparation. We help
									you turn ambition into an actionable plan — and an actionable
									plan into progress.
								</p>
								{/* <ButtonLink href="/pricing" variant="white" className="mt-8">
                See how we can help <ArrowRight className="ml-2 h-4 w-4" />
              </ButtonLink> */}

								<ButtonHover
										text="See how we can help"
										href="/contact#contact-form"
										className="text-[14px] w-[40%] mt-3 text-white"
									/>
							</div>
						</Reveal>


						<Reveal delay={0.1}>
							<div className="grid grid-cols-2 gap-4 sm:gap-5">
								{/* Card 1 */}
								<div className="relative h-full overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
									<BorderTrail
										className="bg-gradient-to-r from-blue-400 via-indigo-400 to-transparent"
										size={120}
										transition={{
											repeat: Infinity,
											duration: 4,
											ease: "linear",
										}}
									/>
									<Sparkles className="h-6 w-6 text-blue-300" />
									<p className="mt-6 text-3xl font-bold text-white">
										<AnimatedCounter value="3.2x" duration={0.8} />
									</p>
									<p className="mt-1 text-sm text-white/50">
										faster career progress
									</p>
								</div>

								{/* Card 2 */}
								<div className="relative h-full overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
									<BorderTrail
										className="bg-gradient-to-r from-emerald-400 via-teal-400 to-transparent"
										size={120}
										transition={{
											repeat: Infinity,
											duration: 4,
											ease: "linear",
										}}
									/>
									<ShieldCheck className="h-6 w-6 text-emerald-300" />
									<p className="mt-6 text-3xl font-bold text-white">
										<AnimatedCounter value="92%" duration={0.8} />
									</p>
									<p className="mt-1 text-sm text-white/50">
										of candidates recommend us
									</p>
								</div>

								{/* Card 3 */}
								<div className="relative h-full overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
									<BorderTrail
										className="bg-gradient-to-r from-pink-400 via-purple-400 to-transparent"
										size={120}
										transition={{
											repeat: Infinity,
											duration: 4,
											ease: "linear",
										}}
									/>
									<BriefcaseBusiness className="h-6 w-6 text-pink-300" />
									<p className="mt-6 text-3xl font-bold text-white">
										<AnimatedCounter value="30+" duration={0.8} />
									</p>
									<p className="mt-1 text-sm text-white/50">hiring partners</p>
								</div>

								{/* Card 4 */}
								<div className="relative h-full overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
									<BorderTrail
										className="bg-gradient-to-r from-amber-400 via-yellow-400 to-transparent"
										size={120}
										transition={{
											repeat: Infinity,
											duration: 4,
											ease: "linear",
										}}
									/>
									<Zap className="h-6 w-6 text-amber-300" />
									<p className="mt-6 text-3xl font-bold text-white">
										<AnimatedCounter value="60 hrs" duration={0.8} />
									</p>
									<p className="mt-1 text-sm text-white/50">
										to your first matched role
									</p>
								</div>
							</div>
						</Reveal>
					</div>
				</section>
			</ScrollReveal>

			<ScrollReveal>
				<section className="bg-white py-16 sm:py-20 lg:py-28">
					<div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
						<div className="grid items-center gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12">
							<Reveal>
								<div>
									<SectionHeading
										eyebrow="Built for your next move"
										title="One profile. More possibilities."
										description="Create a profile that works harder for you. Our tools match your strengths with opportunities built for your next chapter."
										align="left"
									/>
									<div className="mt-6 space-y-4 sm:mt-8">
										<div className="flex items-start gap-3.5 sm:gap-4">
											<div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent">
												<FileText className="h-4 w-4" />
											</div>
											<div>
												<h3 className="font-semibold text-primary">
													Resume builder
												</h3>
												<p className="mt-1 text-sm text-muted-foreground">
													Create an ATS-ready resume with live preview and
													elegant templates.
												</p>
											</div>
										</div>
										<div className="flex items-start gap-3.5 sm:gap-4">
											<div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent">
												<Sparkles className="h-4 w-4" />
											</div>
											<div>
												<h3 className="font-semibold text-primary">
													AI job matching
												</h3>
												<p className="mt-1 text-sm text-muted-foreground">
													See where your skills shine and what to learn next.
												</p>
											</div>
										</div>
									</div>
									<ButtonLink
										href="/resume"
										variant="outline"
										className="mt-6 shadow-md sm:mt-8"
									>
										Build your resume <ArrowRight className="ml-2 h-4 w-4" />
									</ButtonLink>
								</div>
							</Reveal>

							<Reveal delay={0.1}>
								<div className="rounded-2xl border border-border bg-[#f7f9fc] p-4 shadow-soft sm:rounded-3xl sm:p-6 lg:p-8">
									<div className="group overflow-hidden rounded-xl bg-white p-4 shadow-soft sm:rounded-2xl sm:p-6">
										<Image
											src={resumepic}
											alt="TRIOPATH logo"
											// width={24}
											// height={24}
											className="h-full w-full object-contain transition-transform duration-500 ease-out group-hover:scale-105"
										/>
									</div>

									{/* Fully Responsive Resume Banner Link */}
									<Link
										href="/resume"
										className="group relative mt-5 block h-14 sm:h-16 w-full overflow-hidden rounded-xl sm:rounded-2xl bg-primary text-white shadow-md transition-all duration-300 [perspective:1000px]"
									>
										{/* 3D Rotating Container */}
										<div className="relative h-full w-full transition-transform duration-300 ease-out [transform-style:preserve-3d] group-hover:[transform:rotateX(90deg)]">
											{/* Front Face (Primary Color) */}
											<span className="absolute inset-0 flex items-center justify-between bg-primary px-4 sm:px-5 py-3 sm:py-4 [backface-visibility:hidden]">
												<span className="text-xs sm:text-sm font-medium text-white truncate pr-2">
													Your resume is ready to shine.
												</span>
												<span className="flex h-7 w-7 sm:h-8 sm:w-8 shrink-0 items-center justify-center rounded-lg bg-white/10 text-white">
													<ArrowUpRight className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
												</span>
											</span>

											{/* Bottom Face (Hover State) */}
											<span className="absolute inset-0 flex items-center justify-between bg-white px-4 sm:px-5 py-3 sm:py-4 text-primary [backface-visibility:hidden] [transform:rotateX(-90deg)_translateZ(28px)] sm:[transform:rotateX(-90deg)_translateZ(32px)]">
												<span className="text-xs sm:text-sm font-semibold text-primary truncate pr-2">
													Your resume is ready to shine.
												</span>
												<span className="flex h-7 w-7 sm:h-8 sm:w-8 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
													<ArrowRight className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
												</span>
											</span>
										</div>
									</Link>
								</div>
							</Reveal>
						</div>
					</div>
				</section>
			</ScrollReveal>

			{/* Stories Section with AnimatedBackground */}
			<ScrollReveal>
				<section className="bg-[#f7f9fc] py-20 sm:py-28">
					<div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8"  >
						<SectionHeading
							eyebrow="Stories that inspire"
							title="Progress looks different for everyone."
							description="The best proof is in the journeys of people who chose to take their next step with TRIOPATH."
							  descriptionClassName="text-[15px]"

						/>
						<Stagger>
							<div className="mt-12 grid gap-5 md:grid-cols-3">
								<AnimatedBackground
									className="rounded-2xl bg-white shadow-premium border border-accent/80"
									transition={{
										type: "spring",
										bounce: 0.2,
										duration: 0.6,
									}}
									enableHover
								>
									{reviews.slice(0, 3).map((review, index) => (
										<div
											key={review.id}
											data-id={`review-card-${index}`}
											className="h-full"
										>
											<StaggerItem className="h-full">
												<div className="h-full rounded-2xl border border-border/60 bg-white/60 p-6">
													<Quote className="h-7 w-7 text-accent/30" />
													<p className="mt-4 text-sm leading-relaxed text-muted-foreground">
														“{review.message}”
													</p>
													<div className="mt-6 flex items-center justify-between border-t border-border/60 pt-5">
														<div>
															<p className="text-sm font-semibold text-primary">
																{review.name}
															</p>
															<p className="mt-1 text-xs text-muted-foreground">
																{review.role}
															</p>
														</div>
														<div className="flex gap-0.5 text-amber-400">
															{Array.from({ length: 5 }).map((_, i) => (
																<span key={i}>★</span>
															))}
														</div>
													</div>
												</div>
											</StaggerItem>
										</div>
									))}
								</AnimatedBackground>
							</div>
						</Stagger>
						<div className="mt-8 text-center">
							<ButtonLink href="/success-stories" variant="outline">
								Read more stories <ArrowRight className="ml-2 h-4 w-4" />
							</ButtonLink>
						</div>
					</div>
				</section>
			</ScrollReveal>

			<ScrollReveal>
				<section className="bg-white py-20 sm:py-28" id="FAQ">
					<div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
						<div className="flex justify-center mb-[4rem] text-[40px]">
							<h1 className="font-semibold uppercase ">
								Frequently asked Questions
							</h1>
						</div>
						<div className="grid items-stretch gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
							<Reveal className="h-full">
								<div
									className="relative flex h-full min-h-[380px] flex-col justify-center overflow-hidden rounded-3xl bg-conatin bg-center bg-no-repeat p-8 sm:p-12 shadow-soft object-fill"
									style={{ backgroundImage: `url(${faqpic.src || faqpic})` }}
								>
									{/* Dark Overlay for Readability */}
									<div className="absolute inset-0 bg-slate-900/50 backdrop-blur-[0.5px]" />

									{/* Heading Content */}
									<div className="relative z-10 hover:scale-110 transition-all duration-600">
										<SectionHeading
											eyebrow="Frequently asked"
											title="Questions, answered."
											description="Clear answers to help you choose the right next step for your career."
											align="left"
											className="text-white [&_h2]:text-white [&_p]:text-white/80"
										/>
									</div>
								</div>
							</Reveal>

							<Reveal delay={0.1} className="h-full">
								<FAQ />
							</Reveal>
						</div>
					</div>
				</section>
			</ScrollReveal>

			<ScrollReveal>
				<section className="px-4 pb-20 sm:px-6 sm:pb-28 lg:px-8">
					<div className="navy-gradient relative mx-auto max-w-[1400px] overflow-hidden rounded-3xl px-6 py-14 text-center sm:px-12 sm:py-20">
						<div className="pointer-events-none absolute left-1/4 top-0 h-64 w-64 rounded-full bg-accent/15 blur-3xl" />
						<div className="relative">
							<p className="text-sm font-semibold uppercase tracking-wider text-blue-300">
								Your next chapter starts here
							</p>
							<h2 className="mx-auto mt-4 max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
								Ready to move your career forward?
							</h2>
							<p className="mx-auto mt-4 max-w-xl text-white/60 mb-5">
								Get the clarity, tools, and support you need to make your next
								move your best one yet.
							</p>
							<Link href="/student/jobs" className="">
								<button className="group relative h-12 w-[20%] overflow-hidden rounded-xl bg-[#0f1729] font-semibold text-white shadow-md [perspective:1000px] border-[0.5px] border-gray-400 hover:border-green-100">
									<div className="relative h-full w-full transition-transform duration-300 ease-out [transform-style:preserve-3d] group-hover:[transform:rotateX(90deg)]">
										<span className="absolute inset-0 flex items-center justify-center bg-primary px-4 [backface-visibility:hidden]">
											Schedule a consultation{" "}
											<ArrowUpRight className="ml-1.5 h-5 w-5" />
										</span>
										<span className="absolute inset-0 flex items-center justify-center bg-white px-4 text-black [backface-visibility:hidden] [transform:rotateX(-90deg)_translateZ(24px)]">
											Schedule a consultation{" "}
											<ArrowRight className="ml-1.5 h-5 w-5" />
										</span>
									</div>
								</button>
							</Link>
						</div>
					</div>
				</section>
			</ScrollReveal>
		</div>
	);
}
