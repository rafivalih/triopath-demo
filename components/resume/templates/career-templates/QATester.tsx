'use client';

import { Github, Globe, Linkedin, Mail, MapPin, Phone } from 'lucide-react';
import type React from 'react';
import type { ResumeData } from '@/types/resume';

interface QATesterProps {
	data: ResumeData;
}

export const QATester: React.FC<QATesterProps> = ({ data }) => {
	const {
		personal = {
			fullName: '',
			jobTitle: '',
			email: '',
			phone: '',
			location: '',
			website: '',
			linkedin: '',
			github: '',
			summary: '',
		},
		experience = [],
		education = [],
		skills = [],
		projects = [],
		certificates = [],
		languages = [],
	} = (data as any) || {};

	const forceColorStyle = {
		WebkitPrintColorAdjust: 'exact',
		printColorAdjust: 'exact',
	} as React.CSSProperties;

	return (
		<div
			className="w-full bg-white text-slate-800 leading-normal box-border p-8 print:p-0 print:m-0 font-sans text-[9pt]"
			style={{
				fontFamily: "'Inter', 'Plus Jakarta Sans', system-ui, sans-serif",
				wordBreak: 'break-word',
				overflowWrap: 'break-word',
				...forceColorStyle,
			}}
		>
			{/* ========================================================= */}
			{/* ================= TOP HEADER & CONTACT BAR ============= */}
			{/* ========================================================= */}
			<header className="border-b border-slate-300 pb-3 mb-4 break-inside-avoid">
				<div className="flex justify-between items-start">
					<div>
						<h1 className="text-[24pt] font-extrabold uppercase tracking-tight text-[#0D5F5F] leading-none">
							{personal.fullName || 'YOUR NAME'}
						</h1>
						<p className="text-[11pt] font-semibold text-[#0D5F5F] mt-1.5">
							{personal.jobTitle || 'QA (Quality Assurance) Software Tester'}
						</p>
					</div>
				</div>

				{/* Contact Links Row */}
				<div className="flex flex-wrap items-center gap-x-4 gap-y-1 mt-2 text-[7.5pt] text-slate-700">
					{personal.email && (
						<div className="flex items-center gap-1">
							<Mail className="w-3.5 h-3.5 text-[#0D5F5F] shrink-0" />
							<a href={`mailto:${personal.email}`} className="hover:underline text-[#0D5F5F]">
								{personal.email}
							</a>
						</div>
					)}
					<span>|</span>
					{personal.phone && (
						<div className="flex items-center gap-1">
							<Phone className="w-3.5 h-3.5 text-[#0D5F5F] shrink-0" />
							<span>{personal.phone}</span>
						</div>
					)}

					{personal.linkedin && (
						<div className="flex items-center gap-1">
							<Linkedin className="w-3.5 h-3.5 text-[#0D5F5F] shrink-0" />
							<a
								href={
									personal.linkedin.startsWith('http')
										? personal.linkedin
										: `https://${personal.linkedin}`
								}
								target="_blank"
								rel="noreferrer"
								className="hover:underline text-[#0D5F5F]"
							>
								{personal.linkedin.replace(/^https?:\/\/(www\.)?linkedin\.com\/in\/?/, '') ||
									'LinkedIn'}
							</a>
						</div>
					)}
					{personal.github && (
						<div className="flex items-center gap-1">
							<Github className="w-3.5 h-3.5 text-[#0D5F5F] shrink-0" />
							<a
								href={
									personal.github.startsWith('http')
										? personal.github
										: `https://${personal.github}`
								}
								target="_blank"
								rel="noreferrer"
								className="hover:underline text-[#0D5F5F]"
							>
								{personal.github.replace(/^https?:\/\/(www\.)?github\.com\/?/, '') || 'GitHub'}
							</a>
						</div>
					)}
					{personal.website && (
						<div className="flex items-center gap-1">
							<Globe className="w-3.5 h-3.5 text-[#0D5F5F] shrink-0" />
							<a
								href={
									personal.website.startsWith('http')
										? personal.website
										: `https://${personal.website}`
								}
								target="_blank"
								rel="noreferrer"
								className="hover:underline text-[#0D5F5F]"
							>
								{personal.website.replace(/^https?:\/\/(www\.)?/, '') || 'Portfolio'}
							</a>
						</div>
					)}
					{personal.location && (
						<div className="flex items-center gap-1">
							<MapPin className="w-3.5 h-3.5 text-[#0D5F5F] shrink-0" />
							<span>{personal.location}</span>
						</div>
					)}
				</div>
			</header>

			{/* ========================================================= */}
			{/* ================= 1. PROFESSIONAL SUMMARY ============== */}
			{/* ========================================================= */}
			{personal.summary && (
				<section className="mb-1 break-inside-avoid">
					<p className="text-[8.5pt] leading-relaxed text-slate-700 text-justify">
						{personal.summary}
					</p>
				</section>
			)}

			{/* ========================================================= */}
			{/* ================= 2. WORK EXPERIENCE =================== */}
			{/* ========================================================= */}
			{experience.length > 0 && (
				<section className="mb-1">
					<div className="border-b border-[#0D5F5F] pb-1 mb-1 break-inside-avoid">
						<h2 className="text-[9.5pt] font-black uppercase tracking-wider text-[#0D5F5F]">
							RELEVANT WORK EXPERIENCE
						</h2>
					</div>

					<div className="space-y-1">
						{experience.map((exp: any, idx: number) => (
							<div key={exp.id || idx} className="space-y-1">
								{/* Role Header */}
								<div className="flex justify-between items-baseline break-inside-avoid">
									<div>
										<span className="font-bold text-slate-900 text-[9pt]">{exp.company}</span>
										{exp.location && (
											<span className="text-slate-600 text-[8.5pt]">, {exp.location}</span>
										)}
									</div>
									<span className="text-[8pt] text-slate-600 font-medium">
										{exp.startDate} – {exp.current ? 'Present' : exp.endDate}
									</span>
								</div>

								<div className="text-[8.5pt] font-semibold text-[#0D5F5F] break-inside-avoid">
									{exp.role}
								</div>

								{/* Bullet Points */}
								{exp.description && (
									<div className=" text-[8.2pt] leading-relaxed text-slate-700 pl-3">
										{exp.description
											.split('\n')
											.filter((line: string) => line.trim().length > 0)
											.map((point: string, pIdx: number) => (
												<div key={pIdx} className="flex items-start gap-1 break-inside-avoid">
													<span className="text-slate-700 font-bold">•</span>
													<span>{point.replace(/^•\s*/, '')}</span>
												</div>
											))}
									</div>
								)}
							</div>
						))}
					</div>
				</section>
			)}

			{/* ========================================================= */}
			{/* ================= 5. TECHNICAL SKILLS =================== */}
			{/* ========================================================= */}
			{skills.length > 0 && (
				<section className="mb-1 break-inside-avoid">
					<div className="border-b border-[#0D5F5F]  mb-0.5">
						<h2 className="text-[9.5pt] font-black uppercase tracking-wider text-[#0D5F5F]">
							SKILLS
						</h2>
					</div>

					<div className="space-y-0.5 text-[8.2pt]">
						{skills.map((item: any, idx: number) => {
							if (typeof item === 'object' && item !== null) {
								const categoryTitle = item.category || 'Tools and Software';
								const skillsList = Array.isArray(item.skills)
									? item.skills.filter(Boolean)
									: typeof item.skills === 'string'
										? item.skills.split(',').map((s: string) => s.trim())
										: [];

								if (skillsList.length === 0) return null;

								return (
									<div key={item.id || idx}>
										<strong className="font-bold text-slate-900">{categoryTitle}:</strong>{' '}
										<span className="text-slate-700">{skillsList.join(', ')}</span>
									</div>
								);
							}

							if (typeof item === 'string') {
								const hasColon = item.includes(':');
								if (hasColon) {
									const [category, skillsList] = item.split(/:(.+)/);
									return (
										<div key={idx}>
											<strong className="font-bold text-slate-900">{category.trim()}:</strong>{' '}
											<span className="text-slate-700">{skillsList?.trim()}</span>
										</div>
									);
								}
								return (
									<span key={idx} className="text-slate-700">
										{item}
									</span>
								);
							}

							return null;
						})}

						{languages && languages.length > 0 && (
							<div>
								<strong className="font-bold text-slate-900">Languages:</strong>{' '}
								<span className="text-slate-700">
									{languages
										.map((l: any) =>
											typeof l === 'string' ? l : `${l.name} (${l.level || 'Fluent'})`,
										)
										.join(', ')}
								</span>
							</div>
						)}
					</div>
				</section>
			)}

			{/* ========================================================= */}
			{/* ================= 3. PROJECTS ========================== */}
			{/* ========================================================= */}
			{projects && projects.length > 0 && (
				<section className="mb-1">
					<div className="border-b border-[#0D5F5F]  mb-1 break-inside-avoid">
						<h2 className="text-[9.5pt] font-black uppercase tracking-wider text-[#0D5F5F]">
							PROJECTS
						</h2>
					</div>

					<div className="space-y-1">
						{projects.map((proj: any, idx: number) => (
							<div key={proj.id || idx} className="space-y-0.5">
								<div className="flex justify-between items-baseline break-inside-avoid">
									<div>
										<span className="font-bold text-slate-900 text-[9pt]">{proj.name}</span>
										{proj.technologies && (
											<span className="text-slate-600 text-[8.5pt]"> ({proj.technologies})</span>
										)}
									</div>
									{proj.startDate && (
										<span className="text-[8pt] text-slate-600 font-medium">
											{proj.startDate} – {proj.endDate || 'Present'}
										</span>
									)}
								</div>

								{proj.role && (
									<div className="text-[8.5pt] font-semibold text-[#0D5F5F] break-inside-avoid">
										{proj.role}
									</div>
								)}

								{proj.description && (
									<div className=" text-[8.2pt] leading-relaxed text-slate-700 pl-3">
										{proj.description
											.split('\n')
											.filter((line: string) => line.trim().length > 0)
											.map((line: string, pIdx: number) => (
												<div key={pIdx} className="flex items-start gap-1 break-inside-avoid">
													<span className="text-slate-700 font-bold">•</span>
													<span>{line.replace(/^•\s*/, '')}</span>
												</div>
											))}
									</div>
								)}
							</div>
						))}
					</div>
				</section>
			)}

			{/* ========================================================= */}
			{/* ================= 4. EDUCATION ========================== */}
			{/* ========================================================= */}
			{education.length > 0 && (
				<section className="mb-1 break-inside-avoid">
					<div className="border-b border-[#0D5F5F] pb-1 mb-1">
						<h2 className="text-[9.5pt] font-black uppercase tracking-wider text-[#0D5F5F]">
							EDUCATION
						</h2>
					</div>

					<div className="space-y-1">
						{education.map((edu: any, idx: number) => (
							<div key={edu.id || idx}>
								<div className="flex justify-between items-baseline">
									<span className="font-bold text-slate-900 text-[8.5pt]">
										{edu.institution}
										{edu.location ? `, ${edu.location}` : ''}
									</span>
									{(edu.startDate || edu.endDate) && (
										<span className="text-[8pt] text-slate-600">
											{edu.endDate || edu.startDate}
										</span>
									)}
								</div>
								<div className="text-slate-700 text-[8.2pt]">
									{edu.degree}
									{edu.fieldOfStudy ? ` – ${edu.fieldOfStudy}` : ''}
								</div>
							</div>
						))}
					</div>
				</section>
			)}

			{/* ========================================================= */}
			{/* ================= 6. CERTIFICATIONS ===================== */}
			{/* ========================================================= */}
			{certificates && certificates.length > 0 && (
				<section className="break-inside-avoid">
					<div className="border-b border-[#0D5F5F] pb-1 mb-1">
						<h2 className="text-[9.5pt] font-black uppercase tracking-wider text-[#0D5F5F]">
							CERTIFICATIONS
						</h2>
					</div>

					<div className="space-y-0.5 text-[8.2pt]">
						{certificates.map((cert: any, idx: number) => (
							<div key={cert.id || idx} className="flex justify-between items-baseline">
								<div>
									<strong className="font-bold text-slate-900">{cert.name}</strong>
									{cert.issuer && <span className="text-slate-700"> — {cert.issuer}</span>}
								</div>
								{cert.issueDate && (
									<span className="text-slate-600 text-[8pt]">{cert.issueDate}</span>
								)}
							</div>
						))}
					</div>
				</section>
			)}
		</div>
	);
};

export default QATester;
