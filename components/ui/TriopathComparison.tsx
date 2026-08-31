'use client';

import { Check, User, X } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

import logo from '../../app/images/favicon1.png';

interface ComparisonItem {
	title: string;
	triopathTitle: string;
	triopathText: string;
	yourselfTitle: string;
	yourselfText: string;
}

const comparisonData: ComparisonItem[] = [
	{
		title: 'Job Apply',
		triopathTitle: 'Our Team Does It for You',
		triopathText: 'Our team searches and applies to relevant jobs on your behalf.',
		yourselfTitle: 'Manual',
		yourselfText: 'You search for jobs and submit applications yourself.',
	},
	{
		title: 'Where We Apply',
		triopathTitle: '20+ Different Platforms',
		triopathText:
			'Job platforms, company career websites, recruiter networks, and direct outreach.',
		yourselfTitle: 'Mostly LinkedIn, Naukri, etc.',
		yourselfText: 'You mainly depend on a few popular job portals.',
	},
	{
		title: 'Job Targeting',
		triopathTitle: 'Targeted Opportunities',
		triopathText: 'We focus on roles that match your skills, experience, and career goals.',
		yourselfTitle: 'Manual Searching',
		yourselfText: 'You manually search and decide which opportunities to apply for.',
	},
	{
		title: 'Resume Optimization',
		triopathTitle: 'Team Optimized',
		triopathText: 'We review and optimize your resume based on your target roles.',
		yourselfTitle: 'Self Managed',
		yourselfText: 'You create and update your resume on your own.',
	},
	{
		title: 'LinkedIn Profile',
		triopathTitle: 'Profile Optimization',
		triopathText: 'Our team reviews and improves your LinkedIn profile and professional presence.',
		yourselfTitle: 'Self Managed',
		yourselfText: 'You manage and update your LinkedIn profile yourself.',
	},
	{
		title: 'Portfolio / Website',
		triopathTitle: 'Dedicated Portfolio',
		triopathText: 'We help create and maintain a professional portfolio or website when included.',
		yourselfTitle: 'Build It Yourself',
		yourselfText: 'You create and maintain your own portfolio or website.',
	},
	{
		title: 'Resume Tailoring',
		triopathTitle: 'Tailored for Every Job',
		triopathText:
			'We customize your resume for each application to match the job description, skills, and requirements.',
		yourselfTitle: 'One Resume for All',
		yourselfText: 'You apply with the same or similar resume across different job applications.',
	},
	{
		title: 'Application Tracking',
		triopathTitle: 'Managed Tracking',
		triopathText: 'Applications and progress are organized and tracked throughout the process.',
		yourselfTitle: 'Self Tracking',
		yourselfText: 'You maintain your own notes, spreadsheets, or tracking system.',
	},
	{
		title: 'Pricing & Flexibility',
		triopathTitle: 'Flexible Plans',
		triopathText:
			'Choose a plan that fits your needs, with options to cancel or pause your service when needed.',
		yourselfTitle: 'Self Managed',
		yourselfText:
			'No fee, but you invest your own time in searching, tailoring, and managing applications.',
	},
];

export default function TriopathComparison() {
	return (
		<section className="relative w-full overflow-hidden bg-white py-16 sm:py-20 lg:py-24">
			<div className="mx-auto w-full max-w-[1400px] px-4 sm:px-6 lg:px-8">
				{/* =====================================================
            HEADER
        ====================================================== */}
				<div className="mx-auto mb-8 max-w-3xl text-center sm:mb-10">
					<p className="text-[11px] font-bold uppercase tracking-[0.2em] text-blue-600 sm:text-xs">
						Why Triopath
					</p>

					<h2 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
						More Than Just Job Applications
					</h2>

					<p className="mx-auto mt-3 max-w-2xl text-xs leading-5 text-slate-500 sm:text-sm sm:leading-6">
						We don&apos;t just help you find jobs. Our team works with you to improve your profile,
						reach more opportunities, and manage the application process.
					</p>
				</div>

				{/* =====================================================
            MOBILE SWIPE INDICATOR
        ====================================================== */}
				<div className="mb-3 flex justify-end md:hidden">
					<span className="text-[10px] font-medium text-slate-400">Swipe to compare →</span>
				</div>

				{/* =====================================================
            TABLE
        ====================================================== */}
				<div
					className="
            overflow-x-auto
            rounded-2xl
            border
            border-slate-200
            bg-white
            shadow-[0_12px_35px_rgba(15,23,42,0.06)]
            sm:rounded-3xl

            /* Hide scrollbar */
            [scrollbar-width:none]
            [-ms-overflow-style:none]
            [&::-webkit-scrollbar]:hidden
          "
				>
					<div className="min-w-[605px] md:min-w-0">
						{/* =================================================
                HEADER ROW
            ================================================== */}
						<div
							className="
                grid
                grid-cols-[105px_250px_250px]
                border-b
                border-slate-200
                md:grid-cols-[190px_minmax(0,1fr)_minmax(0,1fr)]
              "
						>
							{/* ===============================================
                  COMPARISON HEADER
              ================================================ */}
							<div
								className="
                  sticky
                  left-0
                  z-40
                  flex
                  items-center
                  justify-center
                  border-r
                  border-slate-200
                  bg-slate-50
                  px-2
                  py-5
                  text-center
                  shadow-[4px_0_10px_rgba(15,23,42,0.06)]
                  md:static
                  md:justify-start
                  md:px-6
                  md:text-left
                  md:shadow-none
                "
							>
								<span className="text-[8px] font-bold uppercase tracking-[0.12em] text-slate-400 sm:text-[10px] md:text-xs">
									Comparison
								</span>
							</div>

							{/* ===============================================
                  TRIOPATH HEADER
              ================================================ */}
							<div
								className="
                  relative
                  z-10
                  border-r
                  border-blue-200
                  bg-blue-50/70
                  px-3
                  py-4
                  sm:px-5
                  md:px-7
                  md:py-5
                "
							>
								<div className="flex h-full items-center justify-center gap-2 sm:gap-3">
									<Image
										src={logo}
										alt="Triopath"
										width={48}
										height={48}
										className="
                      h-9
                      w-9
                      shrink-0
                      object-contain
                      sm:h-10
                      sm:w-10
                      md:h-12
                      md:w-12
                    "
									/>

									<span className="flex min-w-0 flex-col items-start justify-center">
										<p className="whitespace-nowrap text-base font-extrabold leading-tight tracking-wide text-slate-950 sm:text-lg md:text-2xl">
											TRIOPATH
										</p>

										<p className="mt-1 whitespace-nowrap text-[7px] font-semibold uppercase tracking-wider text-blue-600 sm:text-[8px] md:text-[9px]">
											Managed Career Support
										</p>
									</span>
								</div>
							</div>

							{/* ===============================================
                  YOURSELF HEADER
              ================================================ */}
							<div
								className="
                  relative
                  z-10
                  bg-white
                  px-3
                  py-4
                  sm:px-5
                  md:px-7
                  md:py-5
                "
							>
								<div className="flex h-full items-center justify-center gap-2 sm:gap-3">
									<User
										className="
                      h-9
                      w-9
                      shrink-0
                      rounded-full
                      border
                      border-slate-500
                      p-1.5
                      text-slate-500
                      sm:h-10
                      sm:w-10
                      md:h-10
                      md:w-10
                      md:p-1
                    "
									/>

									<span className="flex min-w-0 flex-col items-start justify-center">
										<p className="whitespace-nowrap text-base font-extrabold leading-tight tracking-wide text-slate-900 sm:text-lg md:text-2xl">
											YOURSELF
										</p>

										<p className="mt-1 whitespace-nowrap text-[7px] font-semibold uppercase tracking-wider text-slate-400 sm:text-[8px] md:text-[9px]">
											Manual Approach
										</p>
									</span>
								</div>
							</div>
						</div>

						{/* =================================================
                DATA ROWS
            ================================================== */}
						{comparisonData.map((item, index) => (
							<div
								key={item.title}
								className={`
                  grid
                  grid-cols-[105px_250px_250px]
                  md:grid-cols-[190px_minmax(0,1fr)_minmax(0,1fr)]
                  ${index !== comparisonData.length - 1 ? 'border-b border-slate-200' : ''}
                `}
							>
								{/* =============================================
                    COMPARISON
                ============================================== */}
								<div
									className="
                    sticky
                    left-0
                    z-30
                    flex
                    items-center
                    border-r
                    border-slate-200
                    bg-slate-50
                    px-2
                    py-3.5
                    shadow-[4px_0_10px_rgba(15,23,42,0.04)]
                    md:static
                    md:px-6
                    md:shadow-none
                  "
								>
									<span className="text-[10px] font-bold leading-4 text-slate-700 sm:text-xs md:text-sm">
										{item.title}
									</span>
								</div>

								{/* =============================================
                    TRIOPATH
                    ✓ KEPT
                ============================================== */}
								<div
									className="
                    border-r
                    border-blue-100
                    bg-blue-50/40
                    px-4
                    py-3.5
                    sm:px-5
                    md:px-7
                  "
								>
									<div className="flex items-start gap-2.5">
										<div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-500">
											<Check className="h-3 w-3 stroke-[3] text-white" />
										</div>

										<div className="min-w-0">
											<h3 className="text-xs font-bold leading-4 text-slate-900 sm:text-sm md:text-[14px]">
												{item.triopathTitle}
											</h3>

											<p className="mt-1 text-[10px] leading-4 text-slate-500 sm:text-[11px] md:text-xs md:leading-5">
												{item.triopathText}
											</p>
										</div>
									</div>
								</div>

								{/* =============================================
                    YOURSELF
                    ✕ KEPT
                ============================================== */}
								<div
									className="
                    bg-white
                    px-4
                    py-3.5
                    sm:px-5
                    md:px-7
                  "
								>
									<div className="flex items-start gap-2.5">
										<div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-red-500">
											<X className="h-3 w-3 stroke-[3] text-white" />
										</div>

										<div className="min-w-0">
											<h3 className="text-xs font-bold leading-4 text-slate-800 sm:text-sm md:text-[14px]">
												{item.yourselfTitle}
											</h3>

											<p className="mt-1 text-[10px] leading-4 text-slate-500 sm:text-[11px] md:text-xs md:leading-5">
												{item.yourselfText}
											</p>
										</div>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>

				{/* =====================================================
            MOBILE MESSAGE
        ====================================================== */}
				<div className="mt-3 text-center md:hidden">
					<p className="text-[10px] text-slate-400">Swipe left or right to compare</p>
				</div>

				{/* =====================================================
            BOTTOM MESSAGE
        ====================================================== */}
				<div className="mx-auto mt-8 max-w-2xl text-center sm:mt-10">
					<p className="text-xs text-slate-500 sm:text-sm">
						You focus on your career. We handle the repetitive work.
					</p>

					<p className="mt-1 text-sm font-semibold text-slate-900 sm:text-base">
						Let Triopath work for you.
					</p>
				</div>
			</div>
		</section>
	);
}
