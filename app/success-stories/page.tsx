import type { Metadata } from "next";
import { ArrowRight, Star, ExternalLink } from "lucide-react";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Reveal, Stagger, StaggerItem } from "@/components/shared/Reveal";
import Image from "next/image";
import { BorderTrail } from "@/components/core/border-trail";
import { reviews } from "@/constants/reviews";
import rating from "../../app/images/review/credit-rating.svg";
import { ButtonLink } from "@/components/shared/Button";
import { ScrollReveal } from "@/components/shared/ScrollReveal";

export const metadata: Metadata = {
	title: "Success Stories",
	description:
		"Real reviews and success stories from candidates who accelerated their careers with TRIOPATH Careers.",
};

export default function SuccessStoriesPage() {
	return (
		<div className="pt-28">
			<section className="success-stories relative overflow-hidden py-14 sm:py-20">
				<div className="pointer-events-none absolute -left-40 top-10 h-96 w-96 rounded-full bg-blue-200/30 blur-3xl" />
				<div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8 mt-10">
					<Reveal>
						<p className="mb-4 text-sm font-semibold uppercase tracking-wider text-accent">
							Success Stories
						</p>
						<h1 className="text-4xl font-bold tracking-tight text-primary sm:text-5xl">
							Real people. Real progress.
						</h1>
						<p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
							Over 330+ candidates have moved their careers forward with
							TRIOPATH. Here are some of their stories.
						</p>
					</Reveal>
				</div>
			</section>

			<section className="section-tight bg-white">
				<div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
					<Stagger>
              <ScrollReveal>
						<div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
							{reviews.map((review) => (
                <StaggerItem key={review.id}>
									<div className="group relative h-full overflow-hidden rounded-2xl border-gray-300 border-[1px] bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-premium">
										<BorderTrail
											className="bg-gradient-to-l from-gray-400 via-gray-500 to-transparent blur-[1px]"
											size={70}
											transition={{
												repeat: Infinity,
												repeatType: "loop",
												duration: 6,
												ease: "linear",
											}}
											style={{
                        offsetPath: "rect(0% 100% 100% 0% round 16px)",
											}}
										/>

										<div className="flex items-center justify-between border-b border-border px-5 py-4">
											<div>
												<p className="text-sm font-bold text-[#5368df]">
													{review.name}
												</p>
												{/* <p className="mt-0.5 text-xs text-muted-foreground">
													{review.role}
                          </p> */}
											</div>
											<a
												href={review.proofUrl}
												className="inline-flex items-center gap-1 text-xs font-medium text-gray-500 transition-colors hover:text-accent"
                        >
												View Proof <ExternalLink className="h-3 w-3" />
											</a>
										</div>
										<div className="flex items-stretch">
											<div
												className={`flex w-[26%] min-w-[76px] shrink-0 items-center justify-center bg-gradient-to-br p-5 ${review.accentColor} border-none`}
                        >
												<div className="flex aspect-square w-full max-w-[76px] items-center justify-center rounded-2xl  border-none bg-white/15 ">
													<Image
														src={rating}
														alt="Rating"
														width={80}
														height={80}
														className="h-9 w-9 object-contain"
                            />
												</div>
											</div>
											<div className="flex-1 p-5">
												<p className="text-sm leading-relaxed text-muted-foreground line-clamp-4">
													{review.message}
												</p>
											</div>
										</div>
										<div className="flex items-center gap-0.5 border-t border-border px-5 py-3">
											{Array.from({ length: 5 }).map((_, i) => (
                        <Star
                        key={i}
                        className={`h-4 w-4 ${i < review.rating ? "fill-amber-400 text-amber-400" : "text-gray-300"}`}
												/>
											))}
										</div>
									</div>
								</StaggerItem>
							))}
						</div>
              </ScrollReveal>
					</Stagger>

					<div className="mt-16 text-center">
						<div className="navy-gradient relative mx-auto max-w-3xl overflow-hidden rounded-3xl px-6 py-12 sm:px-12">
							<div className="pointer-events-none absolute left-1/4 top-0 h-64 w-64 rounded-full bg-accent/15 blur-3xl" />
							<div className="relative">
								<h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
									Ready to write your own story?
								</h2>
								<p className="mx-auto mt-4 max-w-md text-white/60">
									Join thousands of professionals who chose TRIOPATH to guide
									their next step.
								</p>
								<ButtonLink
									href="/contact#contact-form"
									variant="white"
									className="mt-6"
								>
									Schedule a consultation{" "}
									<ArrowRight className="ml-2 h-4 w-4" />
								</ButtonLink>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}
