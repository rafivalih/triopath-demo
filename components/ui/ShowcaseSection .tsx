'use client';

import Image from 'next/image';
import React from 'react';
import instalogo from '@/app/images/instapics/instalogo.png';
import instapics1 from '@/app/images/instapics/instapics1.png';
import instapics2 from '@/app/images/instapics/instapics2.jpeg';
import instapics3 from '@/app/images/instapics/instapics3.png';
import instapics4 from '@/app/images/instapics/instapics4.png';
import instapics5 from '@/app/images/instapics/instapics5.png';
import { ScrollReveal } from '@/components/shared/ScrollReveal';
import AccordionGallery from './AccordionGallery';

const showcaseItems = [
	{
		image: instapics3.src,
		label: 'Trianing Process',
		link: 'https://www.instagram.com/reel/DcOTlATt27H/?igsi=MXFhZGpjMWp0cWkxZA==',
	},
	{
		image: instapics1.src,
		label: 'Be early. Be ahead',
		link: 'https://www.instagram.com/reel/DbItip8NxWo/?igsi=MXNhenYxM2t5bWs4',
	},
	{
		image: instapics2.src,
		label: 'Interview Calls Tips',
		link: 'https://www.instagram.com/reel/Dci32xsh0f2/?igsi=ZDRiaXlyaTN0Nnpi',
	},
	{
		image: instapics4.src,
		label: 'New Office',
		link: 'https://www.instagram.com/reel/Dbs20ufNGIE/?igsi=M2JxcWtzdW02cjJu',
	},
	{
		image: instapics5.src,
		label: 'USA Job Market',
		link: 'https://www.instagram.com/reel/Db8Qa_xtm8T/?igsi=MTRiZ3l4anRodWJ6cg==',
	},
];

export default function ShowcaseSection() {
	return (
		<ScrollReveal>
			<section className="relative overflow-hidden bg-[#0a0713] py-16 sm:py-20 lg:py-24">
				{/* Ambient background glow */}
				<div className="pointer-events-none absolute -left-40 top-0 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl" />
				<div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-purple-500/10 blur-3xl" />

				<div className="relative mx-auto max-w-[1500px] px-4 sm:px-6 lg:px-8">
					{/* =========================
              HEADER
          ========================== */}
					<div className="mb-10 text-center sm:mb-12 lg:mb-14">
						<p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-400 sm:text-sm">
							See Our Illustration
						</p>

						<h2 className="mt-3 text-2xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl italic flex justify-center items-center gap-3">
							Follow Us on Instagram{' '}
							<Image
								src={instalogo}
								alt="Instagram"
								width={42}
								height={42}
								className="h-8 w-8 object-contain sm:h-9 sm:w-9 lg:h-10 lg:w-10"
							/>
						</h2>

						<p className="mx-auto mt-4 max-w-4xl text-sm leading-relaxed text-white/55 sm:text-base text-gray-400">
							Explore our work and discover how we help candidates build stronger profiles, improve
							their careers, and connect with the right opportunities.
						</p>
					</div>

					{/* =========================
              ACCORDION GALLERY
          ========================== */}
					<div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02] p-1.5 sm:p-2">
						<AccordionGallery
							items={showcaseItems}
							defaultIndex={0}
							expandRatio={0.52}
							trigger="hover"
							accentColor="#ffffff"
							overlayColor="#060010"
							textColor="#ffffff"
							grayscale
							showLabels
							duration={0.6}
							ease="power3.out"
							parallax={0.5}
							tilt={8}
							stagger={0.06}
							height={500}
							gap={10}
							radius={18}
							orientation="horizontal"
						/>
					</div>
				</div>
			</section>
		</ScrollReveal>
	);
}
