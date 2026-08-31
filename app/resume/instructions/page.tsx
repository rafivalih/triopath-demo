'use client';

import { ArrowLeft, ChevronDown, ChevronUp } from 'lucide-react';
import Link from 'next/link';
import React, { useState } from 'react';
import { Reveal } from '@/components/shared/Reveal';
import { ScrollReveal } from '@/components/shared/ScrollReveal';

const instructions = [
	'Avoid generic buzzwords like "passionate," "team player," or "hard worker"; let your technical skills and results demonstrate your expertise.',

	'Focus on measurable impact by using numbers, percentages, metrics, or specific results whenever possible.',

	'Eliminate repetition by varying action verbs and using relevant technical keywords naturally throughout your resume.',

	'Keep your content concise, readable, and focused on meaningful contributions and achievements.',

	'Include enough project details to demonstrate your technical skills, responsibilities, contributions, and measurable impact.',

	'Place your strongest and most relevant experience or projects first to immediately highlight your capabilities.',

	'Tailor your resume to each target job by naturally matching relevant keywords, skills, tools, and requirements from the job description.',

	'Mention technologies naturally within your experience and project descriptions instead of relying only on a separate skills list.',

	'Prioritize achievements and results over simply listing responsibilities.',

	'Organize skills into clear categories such as Languages, Frameworks, Libraries, Databases, Tools, and Technologies.',

	'Use a simple, single-column layout to improve ATS parsing and readability.',

	'Use standard section headings such as Summary, Experience, Projects, Skills, Education, and Certifications.',

	'Keep your contact information clear and accurate, including your Name, Phone, Email, LinkedIn, GitHub, Portfolio, and Location when relevant.',

	'Avoid photos, decorative icons, tables, graphics, text boxes, multiple columns, and skill bars when ATS compatibility is a priority.',

	'Keep formatting consistent throughout your resume, including fonts, headings, spacing, bullet styles, dates, and alignment.',

	'Use present tense for current roles and projects, and past tense for completed roles and projects.',

	'Keep your resume concise and focused, using one page when your experience allows and additional pages only when the content adds meaningful value.',

	'Use a text-based PDF or DOCX file that allows ATS systems to read and extract the content correctly.',

	'Make sure links to LinkedIn, GitHub, portfolios, and other professional profiles are correct and working.',

	'Proofread carefully for grammar, spelling, punctuation, formatting, and consistency before submitting your resume.',
];

export default function ResumeInstructionsPage() {
	const [showAll, setShowAll] = useState(true);

	const visibleInstructions = showAll ? instructions : instructions.slice(0, 7);

	return (
		<div className="min-h-screen bg-slate-50 pb-16 pt-28 sm:pb-20">
			<div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
				{/* Back */}
				<ScrollReveal>
					<Reveal>
						<Link
							href="/resume"
							className="
                inline-flex
                items-center
                gap-2
                text-sm
                font-medium
                text-slate-500
                transition-colors
                hover:text-primary
              "
						>
							<ArrowLeft className="h-4 w-4" />
							Resume Builder
						</Link>
					</Reveal>
				</ScrollReveal>

				{/* Page Heading */}
				<ScrollReveal>
					<Reveal delay={0.05}>
						<div className="mt-7 text-center sm:mt-9">
							<span
								className="
                  inline-flex
                  items-center
                  rounded-full
                  bg-blue-50
                  px-3.5
                  py-1
                  text-xs
                  font-semibold
                  text-blue-600
                "
							>
								Resume Guide
							</span>

							<h1
								className="
                  mt-3
                  text-3xl
                  font-extrabold
                  tracking-tight
                  text-slate-950
                  sm:text-4xl
                "
							>
								Resume Instructions
							</h1>

							<p
								className="
                  mx-auto
                  mt-3
                  max-w-4xl
                  text-sm
                  leading-6
                  text-slate-500
                  sm:text-base
                "
							>
								Follow these guidelines to create a clear, professional, ATS-friendly resume that
								stands out to recruiters.
							</p>
						</div>
					</Reveal>
				</ScrollReveal>

				{/* =====================================================
            INSTRUCTIONS BOX
        ====================================================== */}
				<ScrollReveal>
					<Reveal delay={0.1}>
						<div
							className="
                mx-auto
                mt-10
                max-w-4xl
                overflow-hidden
                rounded-xl
                border
                border-slate-200
                bg-white
                shadow-sm
              "
						>
							{/* Box Content */}
							<div className="px-5 py-5 sm:px-6 sm:py-6">
								<h2
									className="
                    text-base
                    font-bold
                    text-slate-900
                    sm:text-2xl
                  "
								>
									Instructions
								</h2>

								{/* Bullet List */}
								<div className="mt-3 space-y-1.5">
									{visibleInstructions.map((instruction, index) => (
										<p
											key={index}
											className="
                        relative
                        pl-4
                        text-[11px]
                        leading-[1.55]
                        text-slate-500
                        sm:text-[15.5px]
                        sm:leading-[1.6]
                      "
										>
											<span
												className="
                          absolute
                          left-0
                          top-0
                          text-blue-500
                        "
											>
												•
											</span>

											{instruction}
										</p>
									))}
								</div>

								{/* View More / Less */}
								<div className="mt-4 flex justify-end">
									<button
										type="button"
										onClick={() => setShowAll((prev) => !prev)}
										className="
                      inline-flex
                      items-center
                      gap-1
                      text-[10px]
                      font-medium
                      text-blue-600
                      transition-colors
                      hover:text-blue-700
                      sm:text-[11px]
                    "
									>
										{showAll ? 'View Less' : 'View More'}

										{showAll ? (
											<ChevronUp className="h-3 w-3" />
										) : (
											<ChevronDown className="h-3 w-3" />
										)}
									</button>
								</div>
							</div>
						</div>
					</Reveal>
				</ScrollReveal>
			</div>
		</div>
	);
}
