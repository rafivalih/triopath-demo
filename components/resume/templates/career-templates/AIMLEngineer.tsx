'use client';

import {
	Award,
	BookOpen,
	Calendar,
	Github,
	Globe,
	GraduationCap,
	Linkedin,
	Mail,
	MapPin,
	Phone,
	Star,
	Trophy,
	UserCheck,
} from 'lucide-react';
import type React from 'react';
import type { ResumeData } from '@/types/resume';

interface AIMLEngineerProps {
	data: ResumeData;
}

export const AIMLEngineer: React.FC<AIMLEngineerProps> = ({ data }) => {
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
		interests = [],
		achievements = [],
		courses = [],
		publications = [],
	} = (data as any) || {};

	const forceColorStyle = {
		WebkitPrintColorAdjust: 'exact',
		printColorAdjust: 'exact',
	} as React.CSSProperties;

	return (
		<div
			className="w-full bg-white text-slate-900 leading-normal box-border print:p-0 print:m-0 font-sans text-[8.8pt]"
			style={{
				fontFamily: "'Inter', 'Plus Jakarta Sans', system-ui, sans-serif",
				wordBreak: 'break-word',
				overflowWrap: 'break-word',
				...forceColorStyle,
			}}
		>
			<div className="grid grid-cols-12 min-h-full">
				{/* ========================================================= */}
				{/* ================= LEFT SIDEBAR (~30% / Col 4) =========== */}
				{/* ========================================================= */}
				<aside
					className="col-span-4 bg-[#F8FAFC] border-r border-slate-200 p-5 space-y-4 flex flex-col justify-start"
					style={{ backgroundColor: '#F8FAFC', ...forceColorStyle }}
				>
					{/* Header Name on Page 1 */}
					<div className="break-inside-avoid">
						<h1 className="text-[24pt] font-black uppercase tracking-tight text-[#0B1E48] leading-none">
							{personal.fullName || 'YOUR NAME'}
						</h1>
						<p className="text-[10.5pt] font-bold uppercase tracking-wider text-[#1E3A8A] mt-1 font-sans">
							{personal.jobTitle || 'AI/ML DEVELOPER'}
						</p>
						<div className="w-10 h-1 bg-[#0B1E48] mt-2 mb-3"></div>
					</div>

					{/* 1. PROFESSIONAL SUMMARY */}
					{personal.summary && (
						<section className="break-inside-avoid">
							<div className="border-l-4 border-[#0B1E48] pl-2 mb-1.5">
								<h3 className="text-[8.5pt] font-black uppercase tracking-wider text-[#0B1E48]">
									PROFESSIONAL SUMMARY
								</h3>
							</div>
							<p className="text-[8pt] text-slate-700 leading-relaxed text-justify">
								{personal.summary}
							</p>
						</section>
					)}

					{/* 2. SKILLS / FRAMEWORKS / TOOLS */}
					{skills.length > 0 && (
						<section className="space-y-3.5">
							{skills.map((item: any, idx: number) => {
								if (typeof item === 'object' && item !== null) {
									const categoryTitle = item.category || 'TECHNICAL SKILLS';
									const skillsList = Array.isArray(item.skills)
										? item.skills.filter(Boolean)
										: typeof item.skills === 'string'
											? item.skills.split(',').map((s: string) => s.trim())
											: [];

									if (skillsList.length === 0) return null;

									return (
										<div key={item.id || idx} className="break-inside-avoid">
											<div className="border-l-4 border-[#0B1E48] pl-2 mb-1.5">
												<h3 className="text-[8.5pt] font-black uppercase tracking-wider text-[#0B1E48]">
													{categoryTitle}
												</h3>
											</div>
											<ul className="space-y-0.5 text-[8pt] text-slate-700 pl-2">
												{skillsList.map((skill: string, sIdx: number) => (
													<li key={sIdx} className="flex items-center gap-1.5">
														<span className="text-[#0B1E48] font-bold">•</span>
														<span>{skill}</span>
													</li>
												))}
											</ul>
										</div>
									);
								}

								if (typeof item === 'string') {
									const hasColon = item.includes(':');
									if (hasColon) {
										const [category, skillsList] = item.split(/:(.+)/);
										const list = skillsList
											?.split(',')
											.map((s) => s.trim())
											.filter(Boolean);
										return (
											<div key={idx} className="break-inside-avoid">
												<div className="border-l-4 border-[#0B1E48] pl-2 mb-1.5">
													<h3 className="text-[8.5pt] font-black uppercase tracking-wider text-[#0B1E48]">
														{category.trim()}
													</h3>
												</div>
												<ul className="space-y-0.5 text-[8pt] text-slate-700 pl-2">
													{list?.map((skill, sIdx) => (
														<li key={sIdx} className="flex items-center gap-1.5">
															<span className="text-[#0B1E48] font-bold">•</span>
															<span>{skill}</span>
														</li>
													))}
												</ul>
											</div>
										);
									}

									return (
										<div key={idx} className="break-inside-avoid text-[8pt] text-slate-700 pl-2">
											• {item}
										</div>
									);
								}

								return null;
							})}
						</section>
					)}

					{/* 3. LANGUAGES */}
					{languages && languages.length > 0 && (
						<section className="break-inside-avoid">
							<div className="border-l-4 border-[#0B1E48] pl-2 mb-1.5">
								<h3 className="text-[8.5pt] font-black uppercase tracking-wider text-[#0B1E48]">
									LANGUAGES
								</h3>
							</div>
							<ul className="space-y-0.5 text-[8pt] text-slate-700 pl-2">
								{languages.map((l: any, idx: number) => (
									<li key={idx} className="flex items-center gap-1.5">
										<span className="text-[#0B1E48] font-bold">•</span>
										<span>{typeof l === 'string' ? l : `${l.name} (${l.level || 'Fluent'})`}</span>
									</li>
								))}
							</ul>
						</section>
					)}

					{/* 4. INTERESTS */}
					{interests && interests.length > 0 && (
						<section className="break-inside-avoid">
							<div className="border-l-4 border-[#0B1E48] pl-2 mb-1.5">
								<h3 className="text-[8.5pt] font-black uppercase tracking-wider text-[#0B1E48]">
									INTERESTS
								</h3>
							</div>
							<ul className="space-y-0.5 text-[8pt] text-slate-700 pl-2">
								{interests.map((it: any, idx: number) => (
									<li key={idx} className="flex items-center gap-1.5">
										<span className="text-[#0B1E48] font-bold">•</span>
										<span>{typeof it === 'string' ? it : it.name}</span>
									</li>
								))}
							</ul>
						</section>
					)}
				</aside>

				{/* ========================================================= */}
				{/* ================= MAIN COLUMN (~70% / Col 8) =========== */}
				{/* ========================================================= */}
				<main className="col-span-8 p-6 space-y-5 bg-white">
					{/* Top Horizontal Contact Bar */}
					<header className="border-b-2 border-slate-900 pb-2.5 break-inside-avoid">
						<div className="flex flex-wrap items-center justify-between gap-2 text-[7.8pt] text-slate-700">
							{personal.phone && (
								<div className="flex items-center gap-1.5">
									<Phone className="w-3.5 h-3.5 text-[#0B1E48] shrink-0" />
									<span>{personal.phone}</span>
								</div>
							)}
							{personal.email && (
								<div className="flex items-center gap-1.5">
									<Mail className="w-3.5 h-3.5 text-[#0B1E48] shrink-0" />
									<a href={`mailto:${personal.email}`} className="hover:underline">
										{personal.email}
									</a>
								</div>
							)}
							{personal.linkedin && (
								<div className="flex items-center gap-1.5">
									<Linkedin className="w-3.5 h-3.5 text-[#0B1E48] shrink-0" />
									<a
										href={
											personal.linkedin.startsWith('http')
												? personal.linkedin
												: `https://${personal.linkedin}`
										}
										target="_blank"
										rel="noreferrer"
										className="hover:underline"
									>
										{personal.linkedin.replace(/^https?:\/\/(www\.)?linkedin\.com\/in\/?/, '') ||
											'LinkedIn'}
									</a>
								</div>
							)}
							{personal.location && (
								<div className="flex items-center gap-1.5">
									<MapPin className="w-3.5 h-3.5 text-[#0B1E48] shrink-0" />
									<span>{personal.location}</span>
								</div>
							)}
							{personal.github && (
								<div className="flex items-center gap-1.5">
									<Github className="w-3.5 h-3.5 text-[#0B1E48] shrink-0" />
									<a
										href={
											personal.github.startsWith('http')
												? personal.github
												: `https://${personal.github}`
										}
										target="_blank"
										rel="noreferrer"
										className="hover:underline"
									>
										{personal.github.replace(/^https?:\/\/(www\.)?github\.com\/?/, '') || 'GitHub'}
									</a>
								</div>
							)}
							{personal.website && (
								<div className="flex items-center gap-1.5">
									<Globe className="w-3.5 h-3.5 text-[#0B1E48] shrink-0" />
									<a
										href={
											personal.website.startsWith('http')
												? personal.website
												: `https://${personal.website}`
										}
										target="_blank"
										rel="noreferrer"
										className="hover:underline"
									>
										{personal.website.replace(/^https?:\/\/(www\.)?/, '') || 'Portfolio'}
									</a>
								</div>
							)}
						</div>
					</header>

					{/* 1. WORK EXPERIENCE TIMELINE */}
					{experience.length > 0 && (
						<section>
							<div className="flex items-center gap-2 mb-2 break-inside-avoid">
								<h2 className="text-[9.5pt] font-black uppercase tracking-wider text-[#0B1E48]">
									WORK EXPERIENCE
								</h2>
								<div className="flex-1 h-[1.5px] bg-[#0B1E48]"></div>
							</div>

							<div className="space-y-4 pl-1">
								{experience.map((exp: any, idx: number) => (
									<div key={exp.id || idx} className="relative pl-3.5 border-l-2 border-slate-200">
										<div
											className="absolute -left-[4.5px] top-1 w-2 h-2 rounded-full bg-[#0B1E48]"
											style={{ backgroundColor: '#0B1E48', ...forceColorStyle }}
										></div>

										<div className="flex justify-between items-baseline break-inside-avoid text-[9pt]">
											<span className="font-bold text-slate-900">{exp.role}</span>
											<span className="text-[7.5pt] text-slate-600 font-medium">
												{exp.startDate} – {exp.current ? 'Present' : exp.endDate}
											</span>
										</div>

										<div className="text-[8pt] text-[#1E3A8A] font-semibold italic mb-1 break-inside-avoid">
											<span>{exp.company}</span>
											{exp.location && (
												<span className="text-slate-500 font-normal">, {exp.location}</span>
											)}
										</div>

										{exp.description && (
											<div className="space-y-1 text-[8.2pt] leading-relaxed text-slate-700 mt-1">
												{exp.description
													.split('\n')
													.filter((line: string) => line.trim().length > 0)
													.map((point: string, pIdx: number) => (
														<div key={pIdx} className="flex items-start gap-1.5 break-inside-avoid">
															<span className="text-slate-800 font-bold">•</span>
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

					{/* 2. KEY PROJECTS */}
					{projects && projects.length > 0 && (
						<section>
							<div className="flex items-center gap-2 mb-2 break-inside-avoid">
								<h2 className="text-[9.5pt] font-black uppercase tracking-wider text-[#0B1E48]">
									KEY PROJECTS
								</h2>
								<div className="flex-1 h-[1.5px] bg-[#0B1E48]"></div>
							</div>

							<div className="space-y-3.5 pl-1">
								{projects.map((proj: any, idx: number) => (
									<div key={proj.id || idx} className="relative pl-3.5 border-l-2 border-slate-200">
										<div
											className="absolute -left-[4.5px] top-1 w-2 h-2 rounded-full bg-[#0B1E48]"
											style={{ backgroundColor: '#0B1E48', ...forceColorStyle }}
										></div>

										<div className="flex justify-between items-baseline break-inside-avoid text-[9pt]">
											<span className="font-bold text-slate-900">{proj.name}</span>
											{proj.startDate && (
												<span className="text-[7.5pt] text-slate-600 font-medium">
													{proj.startDate} {proj.endDate ? `– ${proj.endDate}` : ''}
												</span>
											)}
										</div>

										{proj.technologies && (
											<p className="text-[7.5pt] text-[#1E3A8A] font-semibold mb-0.5 break-inside-avoid">
												{proj.technologies}
											</p>
										)}

										{proj.description && (
											<div className="space-y-1 text-[8.2pt] leading-relaxed text-slate-700 mt-1">
												{proj.description
													.split('\n')
													.filter((line: string) => line.trim().length > 0)
													.map((line: string, pIdx: number) => (
														<div key={pIdx} className="flex items-start gap-1.5 break-inside-avoid">
															<span className="text-slate-800 font-bold">•</span>
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

					{/* 3. EDUCATION & CERTIFICATIONS (2-Column Block) */}
					<div className="grid grid-cols-2 gap-4 break-inside-avoid">
						{/* Education */}
						{education.length > 0 && (
							<div>
								<div className="flex items-center gap-2 mb-1.5">
									<h2 className="text-[9pt] font-black uppercase tracking-wider text-[#0B1E48]">
										EDUCATION
									</h2>
									<div className="flex-1 h-[1.5px] bg-[#0B1E48]"></div>
								</div>
								<div className="space-y-2 text-[8pt]">
									{education.map((edu: any, idx: number) => (
										<div key={edu.id || idx}>
											<p className="font-bold text-slate-900">{edu.degree || edu.fieldOfStudy}</p>
											<p className="text-[#1E3A8A] italic text-[7.5pt]">{edu.institution}</p>
											{(edu.startDate || edu.endDate) && (
												<p className="text-slate-500 text-[7pt]">
													{edu.startDate ? `${edu.startDate} – ` : ''}
													{edu.endDate}
												</p>
											)}
										</div>
									))}
								</div>
							</div>
						)}

						{/* Certifications */}
						{certificates && certificates.length > 0 && (
							<div>
								<div className="flex items-center gap-2 mb-1.5">
									<h2 className="text-[9pt] font-black uppercase tracking-wider text-[#0B1E48]">
										CERTIFICATIONS
									</h2>
									<div className="flex-1 h-[1.5px] bg-[#0B1E48]"></div>
								</div>
								<ul className="space-y-1 text-[8pt] text-slate-700 pl-1">
									{certificates.map((cert: any, idx: number) => (
										<li key={cert.id || idx} className="flex items-start gap-1">
											<span className="text-[#0B1E48] font-bold">•</span>
											<span>
												<strong className="font-semibold text-slate-900">{cert.name}</strong>
												{cert.issuer && ` – ${cert.issuer}`}
											</span>
										</li>
									))}
								</ul>
							</div>
						)}
					</div>

					{/* 4. ACHIEVEMENTS HIGHLIGHT GRID */}
					{achievements && achievements.length > 0 && (
						<section className="break-inside-avoid">
							<div className="flex items-center gap-2 mb-2">
								<h2 className="text-[9.5pt] font-black uppercase tracking-wider text-[#0B1E48]">
									ACHIEVEMENTS
								</h2>
								<div className="flex-1 h-[1.5px] bg-[#0B1E48]"></div>
							</div>

							<div className="grid grid-cols-4 gap-2 text-center text-[7.5pt]">
								{achievements.map((ach: any, idx: number) => (
									<div
										key={idx}
										className="p-2 border border-slate-200 rounded bg-slate-50 flex flex-col items-center justify-center"
									>
										<div
											className="w-2 h-2 rounded-full bg-[#0B1E48] mb-1"
											style={{ backgroundColor: '#0B1E48', ...forceColorStyle }}
										></div>
										<span className="font-semibold text-slate-800 leading-tight">
											{typeof ach === 'string' ? ach : ach.title}
										</span>
									</div>
								))}
							</div>
						</section>
					)}

					{/* 5. TRAINING / COURSES (Multi-page Timeline Support) */}
					{courses && courses.length > 0 && (
						<section className="break-inside-avoid">
							<div className="flex items-center gap-2 mb-2">
								<h2 className="text-[9.5pt] font-black uppercase tracking-wider text-[#0B1E48]">
									TRAINING & COURSES
								</h2>
								<div className="flex-1 h-[1.5px] bg-[#0B1E48]"></div>
							</div>

							<div className="space-y-2 pl-1">
								{courses.map((c: any, idx: number) => (
									<div
										key={idx}
										className="relative pl-3.5 border-l-2 border-slate-200 break-inside-avoid"
									>
										<div
											className="absolute -left-[4.5px] top-1.5 w-2 h-2 rounded-full bg-[#0B1E48]"
											style={{ backgroundColor: '#0B1E48', ...forceColorStyle }}
										></div>
										<div className="flex justify-between items-baseline text-[8pt]">
											<span className="font-bold text-slate-900">
												{typeof c === 'string' ? c : c.name}
											</span>
											{c.year && <span className="text-slate-500 text-[7.5pt]">{c.year}</span>}
										</div>
									</div>
								))}
							</div>
						</section>
					)}

					{/* 6. PUBLICATIONS */}
					{publications && publications.length > 0 && (
						<section className="break-inside-avoid">
							<div className="flex items-center gap-2 mb-2">
								<h2 className="text-[9.5pt] font-black uppercase tracking-wider text-[#0B1E48]">
									PUBLICATIONS
								</h2>
								<div className="flex-1 h-[1.5px] bg-[#0B1E48]"></div>
							</div>

							<ul className="space-y-1.5 text-[8pt] text-slate-700 pl-2">
								{publications.map((pub: any, idx: number) => (
									<li key={idx} className="flex items-start gap-1.5">
										<span className="text-[#0B1E48] font-bold">•</span>
										<span>
											{typeof pub === 'string' ? pub : `"${pub.title}" – ${pub.publisher || ''}`}
										</span>
									</li>
								))}
							</ul>
						</section>
					)}
				</main>
			</div>
		</div>
	);
};

export default AIMLEngineer;
