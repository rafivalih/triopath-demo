

'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { ArrowRight, Check } from 'lucide-react';
import { Icon } from '@/components/shared/Icon';
import { Reveal } from '@/components/shared/Reveal';
import { pricingByRegion, pricingPlans } from '@/constants/pricing';
import { ScrollReveal } from '@/components/shared/ScrollReveal';

export default function PricingPage() {
	const currency = '$';
	const region = 'USA';

	return (
		<div className="pt-28">
			{/* Pricing Header */}
			<section className="relative overflow-hidden py-14 sm:py-20">
				<div className="pointer-events-none absolute -left-40 top-10 h-96 w-96 rounded-full bg-blue-200/30 blur-3xl" />

				<div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
					<Reveal>
						<p className="mb-4 mt-2 text-sm font-semibold uppercase tracking-wider text-accent">
							Pricing
						</p>

						<h1 className="text-4xl font-bold tracking-tight text-primary sm:text-[41px]">
							Affordable career services for every stage.
						</h1>

						<p className="mx-auto mt-2 max-w-2xl text-[14px] leading-relaxed text-muted-foreground">
							Choose the plan that fits where you are in your career. Upgrade,
							downgrade, hold, or cancel anytime.
						</p>
					</Reveal>
				</div>
			</section>

			{/* Pricing Cards */}
			<section className="bg-[#f7f9fc] pb-14 sm:pb-20">
				<div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
					<div className="rounded-3xl bg-primary p-6 sm:p-10 lg:p-14">
						<div className="flex flex-col items-center gap-6">
							<div className="text-sm font-medium text-white">
								USA Pricing
							</div>

							<div className="grid w-full gap-5 md:grid-cols-2 lg:grid-cols-3">
								{pricingPlans.map((plan, i) => {
									const price =
										pricingByRegion[region][
											plan.id as keyof typeof pricingByRegion[typeof region]
										];

									return (
										<Reveal key={plan.id} delay={i * 0.05}>
											<div
												className={`relative flex h-full flex-col rounded-2xl border p-5 transition-all ${
													plan.popular
														? 'border-accent bg-white shadow-premium'
														: 'border-white/10 bg-white/5'
												}`}
											>
												{/* Popular Badge */}
												{plan.popular && (
													<span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-accent px-3 py-1 text-xs font-bold text-white">
														Most Popular
													</span>
												)}

												{/* Icon */}
												<div
													className={`flex h-10 w-10 items-center justify-center rounded-xl ${
														plan.popular
															? 'bg-accent/10 text-accent'
															: 'bg-white/10 text-white'
													}`}
												>
													<Icon
														name={plan.icon}
														className="h-5 w-5"
													/>
												</div>

												{/* Plan Name */}
												<h3
													className={`mt-4 font-bold ${
														plan.popular
															? 'text-primary'
															: 'text-white'
													}`}
												>
													{plan.name}
												</h3>

												{/* Description */}
												<p
													className={`mt-1 text-sm leading-relaxed ${
														plan.popular
															? 'text-muted-foreground'
															: 'text-white/50'
													}`}
												>
													{plan.description}
												</p>

												{/* Price */}
												<div className="mt-4">
													<AnimatePresence mode="wait">
														<motion.div
															key={plan.id}
															initial={{
																opacity: 0,
																y: 8,
															}}
															animate={{
																opacity: 1,
																y: 0,
															}}
															exit={{
																opacity: 0,
																y: -8,
															}}
															transition={{
																duration: 0.2,
															}}
														>
															<span
																className={`text-3xl font-bold ${
																	plan.popular
																		? 'text-primary'
																		: 'text-white'
																}`}
															>
																{currency}
																{price.toLocaleString()}
															</span>

															<span
																className={`text-xs ${
																	plan.popular
																		? 'text-muted-foreground'
																		: 'text-white/40'
																}`}
															>
																/month
															</span>
														</motion.div>
													</AnimatePresence>
												</div>

												{/* Features */}
												<ul className="mt-5 flex-1 space-y-2">
													{plan.features.map((feature) => (
														<li
															key={feature}
															className={`flex items-start gap-2 text-sm ${
																plan.popular
																	? 'text-muted-foreground'
																	: 'text-white/60'
															}`}
														>
															<Check
																className={`mt-0.5 h-3.5 w-3.5 shrink-0 ${
																	plan.popular
																		? 'text-emerald-500'
																		: 'text-emerald-400'
																}`}
															/>

															<span>{feature}</span>
														</li>
													))}
												</ul>

												{/* Get Started */}
												<a
	href="/contact#contact-form"
	className={`group mt-6 flex h-10 items-center justify-center rounded-lg text-xs font-semibold transition-all hover:bg-white hover:text-black ${
		plan.popular
			? 'bg-primary text-white hover:bg-primary/90 hover:bg-white hover:text-black hover:border-[2px] hover:border-cream/60'
			: 'bg-white/10 text-white hover:bg-white/20'
	}`}
>
	<span className="flex items-center justify-center">
		Get Started
		<span className="ml-1.5 transition-transform duration-300 group-hover:translate-x-2">
			<ArrowRight className="h-3.5 w-3.5" />
		</span>
	</span>
</a>
											</div>
										</Reveal>
									);
								})}
							</div>
						</div>
					</div>
				</div>
						<ScrollReveal>
								<section className="flex min-h-[150px] items-center justify-center bg-gradient-to-r from-[#0F1930] via-[#111C34] to-[#1C254D] px-6 mt-10">
									<p className="text-center font-serif text-[17px] font-semibold italic text-white sm:text-[28px]">
										“Don’t leave your career to chance. Get the right strategy, support, and direction to move forward.”
									</p>
								</section>
							</ScrollReveal>
			</section>
		</div>
	);
}