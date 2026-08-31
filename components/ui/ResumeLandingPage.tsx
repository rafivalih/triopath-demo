import { ArrowRight, Sparkles } from 'lucide-react';
import Link from 'next/link';
import React from 'react';
import { Reveal } from '@/components/shared/Reveal';
import { ScrollReveal } from '@/components/shared/ScrollReveal';

export default function ResumeLandingPage() {
	return (
		<div className="pt-28">
			<section className="relative overflow-hidden bg-slate-50 py-16">
				<div className="relative mx-auto max-w-4xl px-4 text-center">
					<ScrollReveal>
						<Reveal>
							<span className="inline-flex items-center gap-1.5 rounded-full bg-accent/10 px-3.5 py-1 text-xs font-semibold text-accent">
								<Sparkles className="h-3.5 w-3.5" />
								AI Resume Studio
							</span>

							<h1 className="mt-4 text-4xl font-extrabold tracking-tight text-primary sm:text-5xl">
								Build an ATS-optimized resume in minutes.
							</h1>

							<p className="mx-auto mt-4 max-w-2xl text-base text-muted-foreground">
								Choose from 10+ recruiter-approved templates, tailor your experience, and download
								in pristine high-resolution PDF format.
							</p>

							<div className="mt-8 flex flex-wrap justify-center gap-4">
								<Link
									href="/resume/templates"
									className="inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-white shadow-md hover:bg-primary/90"
								>
									Browse Templates
									<ArrowRight className="h-4 w-4" />
								</Link>

								<Link
									href="/resume/builder"
									className="inline-flex items-center gap-2 rounded-xl border border-border bg-white px-6 py-3 text-sm font-semibold text-primary shadow-sm hover:bg-slate-50"
								>
									Open Editor
								</Link>
							</div>
						</Reveal>
					</ScrollReveal>

					{/* Instructions Button */}
					<ScrollReveal>
						<div className="mt-5 flex justify-center">
							<Link
								href="/resume/instructions"
								className="
                  inline-flex
                  items-center
                  justify-center
                  rounded-md
                  border
                  border-gray-500
                  bg-white
                  px-5
                  py-2
                  text-sm
                  font-medium
                  text-slate-700
                  transition-all
                  duration-200
                  hover:border-primary
                  hover:bg-slate-50
                  hover:text-primary
                "
							>
								Know Instructions
								<ArrowRight className="ml-2 h-4 w-4" />
							</Link>
						</div>
					</ScrollReveal>
				</div>
			</section>
		</div>
	);
}
