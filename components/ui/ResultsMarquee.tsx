'use client';

import Image from 'next/image';
import React from 'react';
import scroll1 from '@/app/images/scrollingimages/scroll1.jpg';
import scroll2 from '@/app/images/scrollingimages/scroll2.jpg';
import scroll3 from '@/app/images/scrollingimages/scroll3.jpg';
import scroll4 from '@/app/images/scrollingimages/scroll4.jpg';
import scroll5 from '@/app/images/scrollingimages/scroll5.jpg';
import scroll6 from '@/app/images/scrollingimages/scroll6.jpg';
import scroll7 from '@/app/images/scrollingimages/scroll7.jpg';
import scroll8 from '@/app/images/scrollingimages/scroll8.jpg';
import scroll9 from '@/app/images/scrollingimages/scroll9.jpg';
import scroll10 from '@/app/images/scrollingimages/scroll10placed.jpg';

const resultImages = [
	scroll10,
	scroll1,
	scroll8,
	scroll9,
	scroll2,
	scroll5,
	scroll3,
	scroll4,
	scroll6,
	scroll7,
	// '/images/results/result-02.png',
	// '/images/results/result-03.png',
	// '/images/results/result-04.png',
	// '/images/results/result-05.png',
	// '/images/results/result-06.png',
	// '/images/results/result-07.png',
	// '/images/results/result-08.png',
	// '/images/results/result-09.png',
	// '/images/results/result-10.png',
	// '/images/results/result-11.png',
	// '/images/results/result-12.png',
	// '/images/results/result-13.png',
	// '/images/results/result-14.png',
	// '/images/results/result-15.png',
];

const cards = [...resultImages, ...resultImages];

export default function ResultsMarquee() {
	return (
		<section className="relative overflow-hidden bg-[#060b18] py-20 sm:py-24">
			{/* ================================
          HEADER
      ================================= */}
			<div className="relative z-10 mx-auto mb-12 max-w-4xl px-4 text-center">
				<p className="text-xs font-bold uppercase tracking-[0.2em] text-sky-400 sm:text-sm">
					Straight From Their Inboxes
				</p>

				<h2 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
					1000+
					<span className="ml-2">REAL RESULTS</span>
				</h2>

				<p className="mt-5 text-sm leading-7 text-slate-400 sm:text-base">
					Real screening-call invites and recruiter replies, straight from our members&apos;
					inboxes.
				</p>
			</div>

			{/* ================================
          MARQUEE
      ================================= */}
			<div className="relative w-full overflow-hidden">
				{/* Left fade */}
				<div
					className="
            pointer-events-none absolute left-0 top-0 z-20
            h-full w-16
            bg-gradient-to-r from-[#060b18] to-transparent
            sm:w-28 lg:w-40
          "
				/>

				{/* Right fade */}
				<div
					className="
            pointer-events-none absolute right-0 top-0 z-20
            h-full w-16
            bg-gradient-to-l from-[#060b18] to-transparent
            sm:w-28 lg:w-40
          "
				/>

				{/* Moving track */}
				<div className="group flex w-max animate-results-marquee gap-4  sm:gap-5 lg:gap-6">
					{cards.map((image, index) => (
						<div
							key={`${image}-${index}`}
							className="
                relative
                h-[390px]
                w-[220px]
                shrink-0
                overflow-hidden
                rounded-2xl
                border border-slate-700/70
                bg-slate-900
                shadow-[0_15px_40px_rgba(0,0,0,0.3)]
                transition-all
                duration-300
                hover:shadow-[0_20px_50px_rgba(14,165,233,0.15)]
              "
						>
							<Image
								src={image}
								alt={`Recruiter response ${index + 1}`}
								fill
								sizes="220px"
								className="
                  object-cover
                  object-top
                  transition-transform
                  duration-500
                  hover:scale-[1.02]
                "
							/>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
