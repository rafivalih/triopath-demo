import { ArrowRight, Sparkles } from 'lucide-react';
import Link from 'next/link';
import React from 'react';
import { Reveal } from '@/components/shared/Reveal';
import { ScrollReveal } from '@/components/shared/ScrollReveal';

export default function ResumeLandingPage() {
	return (
		<div className="pt-28">
			<section className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-24">
				<div className="relative mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
					{/* =========================================
              HERO CONTENT
          ========================================== */}
					<ScrollReveal>
						<Reveal>
							{/* Badge */}
							<span
								className="
                  inline-flex
                  items-center
                  gap-1.5
                  rounded-full
                  border
                  border-blue-100
                  bg-blue-50
                  px-4
                  py-1.5
                  text-xs
                  font-semibold
                  text-blue-600
                  shadow-sm
                "
							>
								<Sparkles className="h-3.5 w-3.5" />
								AI Resume Studio
							</span>

							{/* Heading */}
							<h1
								className="
                  mx-auto
                  mt-5
                  max-w-4xl
                  text-4xl
                  font-extrabold
                  leading-tight
                  tracking-tight
                  text-slate-950
                  sm:text-5xl
                  lg:text-6xl
                "
							>
								Build an <span className="text-blue-600">ATS-optimized</span> resume in minutes.
							</h1>

							{/* Description */}
							<p
								className="
                  mx-auto
                  mt-5
                  max-w-2xl
                  text-sm
                  leading-6
                  text-slate-500
                  sm:text-base
                  sm:leading-7
                "
							>
								Choose from 10+ recruiter-approved templates, tailor your experience, and download
								your resume in a professional, high-resolution PDF format.
							</p>

							{/* =========================================
                  PRIMARY ACTIONS
              ========================================== */}
							<div
								className="
                  mt-8
                  flex
                  flex-col
                  items-center
                  justify-center
                  gap-3
                  sm:flex-row
                  sm:gap-4
                "
							>
								{/* Browse Templates */}
								<Link
									href="/resume/templates"
									className="
                    inline-flex
                    h-12
                    w-full
                    items-center
                    justify-center
                    gap-2
                    rounded-xl
                    bg-primary
                    px-6
                    text-sm
                    font-semibold
                    text-white
                    shadow-md
                    transition-all
                    duration-200
                    hover:-translate-y-0.5
                    hover:bg-primary/90
                    hover:shadow-lg
                    sm:w-auto
                  "
								>
									Browse Templates
									<ArrowRight className="h-4 w-4" />
								</Link>

								{/* Open Editor */}
								<Link
									href="/resume/builder"
									className="
                    inline-flex
                    h-12
                    w-full
                    items-center
                    justify-center
                    rounded-xl
                    border
                    border-slate-200
                    bg-white
                    px-6
                    text-sm
                    font-semibold
                    text-slate-900
                    shadow-sm
                    transition-all
                    duration-200
                    hover:-translate-y-0.5
                    hover:border-slate-300
                    hover:bg-slate-50
                    hover:shadow-md
                    sm:w-auto
                  "
								>
									Open Editor
								</Link>
							</div>

							{/* =========================================
                  INSTRUCTIONS
              ========================================== */}
							<div className="mt-6 flex justify-center">
								<Link
									href="/resume/instructions"
									className="
                    group
                    inline-flex
                    items-center
                    gap-2
                    rounded-lg
                    border
                    border-slate-200
                    bg-slate-50
                    px-4
                    py-2.5
                    text-xs
                    font-semibold
                    text-slate-600
                    transition-all
                    duration-200
                    hover:border-blue-200
                    hover:bg-blue-50
                    hover:text-blue-600
                  "
								>
									Know Instructions
									<ArrowRight
										className="
                      h-3.5
                      w-3.5
                      transition-transform
                      duration-200
                      group-hover:translate-x-0.5
                    "
									/>
								</Link>
							</div>
						</Reveal>
					</ScrollReveal>
				</div>
			</section>
		</div>
	);
}
