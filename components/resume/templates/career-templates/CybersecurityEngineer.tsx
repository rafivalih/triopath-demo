'use client';

import { CheckCircle2, Github, Globe, Linkedin, Mail, MapPin, Phone } from 'lucide-react';
import type React from 'react';
import type { ResumeData } from '@/types/resume';

interface CyberSecurityEngineerProps {
	data: ResumeData;
}

export const CyberSecurityEngineer: React.FC<CyberSecurityEngineerProps> = ({ data }) => {
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
				{/* ================= LEFT SIDEBAR (~32% / Col 4) =========== */}
				{/* ========================================================= */}
				<aside
					className="col-span-4 bg-[#051329] text-white p-5 space-y-4 flex flex-col justify-start"
					style={{ backgroundColor: '#051329', color: '#ffffff', ...forceColorStyle }}
				>
					{/* Header Title on Page 1 */}
					<div className="break-inside-avoid border-b border-cyan-500/40 pb-3">
						<h1 className="text-[17pt] font-black uppercase tracking-wider text-white leading-tight font-sans">
							CYBERSECURITY
							<br />
							<span className="text-[#00D2B4]">ENGINEER</span>
						</h1>
					</div>

					{/* 1. CONTACT */}
					<section className="break-inside-avoid">
						<div className="flex items-center justify-between mb-2">
							<h3 className="text-[8.5pt] font-bold uppercase tracking-wider text-[#00D2B4]">
								CONTACT
							</h3>
							<div className="flex items-center gap-1">
								<div className="w-6 h-[1px] bg-cyan-500/50"></div>
								<div className="w-1.5 h-1.5 rounded-full bg-[#00D2B4]"></div>
							</div>
						</div>

						<div className="space-y-1.5 text-[7.8pt] text-slate-200">
							{personal.phone && (
								<div className="flex items-center gap-2">
									<Phone className="w-3.5 h-3.5 text-[#00D2B4] shrink-0" />
									<span>{personal.phone}</span>
								</div>
							)}
							{personal.email && (
								<div className="flex items-center gap-2">
									<Mail className="w-3.5 h-3.5 text-[#00D2B4] shrink-0" />
									<a href={`mailto:${personal.email}`} className="hover:underline truncate block">
										{personal.email}
									</a>
								</div>
							)}
							{personal.linkedin && (
								<div className="flex items-center gap-2">
									<Linkedin className="w-3.5 h-3.5 text-[#00D2B4] shrink-0" />
									<a
										href={
											personal.linkedin.startsWith('http')
												? personal.linkedin
												: `https://${personal.linkedin}`
										}
										target="_blank"
										rel="noreferrer"
										className="hover:underline truncate block"
									>
										{personal.linkedin.replace(/^https?:\/\/(www\.)?linkedin\.com\/in\/?/, '') ||
											'LinkedIn'}
									</a>
								</div>
							)}
							{personal.location && (
								<div className="flex items-center gap-2">
									<MapPin className="w-3.5 h-3.5 text-[#00D2B4] shrink-0" />
									<span>{personal.location}</span>
								</div>
							)}
							{personal.github && (
								<div className="flex items-center gap-2">
									<Github className="w-3.5 h-3.5 text-[#00D2B4] shrink-0" />
									<a
										href={
											personal.github.startsWith('http')
												? personal.github
												: `https://${personal.github}`
										}
										target="_blank"
										rel="noreferrer"
										className="hover:underline truncate block"
									>
										{personal.github.replace(/^https?:\/\/(www\.)?github\.com\/?/, '') || 'GitHub'}
									</a>
								</div>
							)}
							{personal.website && (
								<div className="flex items-center gap-2">
									<Globe className="w-3.5 h-3.5 text-[#00D2B4] shrink-0" />
									<a
										href={
											personal.website.startsWith('http')
												? personal.website
												: `https://${personal.website}`
										}
										target="_blank"
										rel="noreferrer"
										className="hover:underline truncate block"
									>
										{personal.website.replace(/^https?:\/\/(www\.)?/, '') || 'Portfolio'}
									</a>
								</div>
							)}
						</div>
					</section>

					{/* 2. PROFESSIONAL SUMMARY */}
					{personal.summary && (
						<section className="break-inside-avoid">
							<div className="flex items-center justify-between mb-1.5">
								<h3 className="text-[8.5pt] font-bold uppercase tracking-wider text-[#00D2B4]">
									PROFESSIONAL SUMMARY
								</h3>
								<div className="flex items-center gap-1">
									<div className="w-6 h-[1px] bg-cyan-500/50"></div>
									<div className="w-1.5 h-1.5 rounded-full bg-[#00D2B4]"></div>
								</div>
							</div>
							<p className="text-[7.8pt] text-slate-300 leading-relaxed text-justify">
								{personal.summary}
							</p>
						</section>
					)}

					{/* 3. TECHNICAL SKILLS & TOOLS */}
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
											<div className="flex items-center justify-between mb-1.5">
												<h3 className="text-[8.5pt] font-bold uppercase tracking-wider text-[#00D2B4]">
													{categoryTitle}
												</h3>
												<div className="flex items-center gap-1">
													<div className="w-6 h-[1px] bg-cyan-500/50"></div>
													<div className="w-1.5 h-1.5 rounded-full bg-[#00D2B4]"></div>
												</div>
											</div>
											<ul className="space-y-0.5 text-[7.8pt] text-slate-300 pl-2">
												{skillsList.map((skill: string, sIdx: number) => (
													<li key={sIdx} className="flex items-center gap-1.5">
														<span className="text-[#00D2B4] font-bold">•</span>
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
												<div className="flex items-center justify-between mb-1.5">
													<h3 className="text-[8.5pt] font-bold uppercase tracking-wider text-[#00D2B4]">
														{category.trim()}
													</h3>
													<div className="flex items-center gap-1">
														<div className="w-6 h-[1px] bg-cyan-500/50"></div>
														<div className="w-1.5 h-1.5 rounded-full bg-[#00D2B4]"></div>
													</div>
												</div>
												<ul className="space-y-0.5 text-[7.8pt] text-slate-300 pl-2">
													{list?.map((skill, sIdx) => (
														<li key={sIdx} className="flex items-center gap-1.5">
															<span className="text-[#00D2B4] font-bold">•</span>
															<span>{skill}</span>
														</li>
													))}
												</ul>
											</div>
										);
									}

									return (
										<div key={idx} className="break-inside-avoid text-[7.8pt] text-slate-300 pl-2">
											• {item}
										</div>
									);
								}

								return null;
							})}
						</section>
					)}

					{/* 4. CERTIFICATIONS (Sidebar Glance) */}
					{certificates && certificates.length > 0 && (
						<section className="break-inside-avoid">
							<div className="flex items-center justify-between mb-1.5">
								<h3 className="text-[8.5pt] font-bold uppercase tracking-wider text-[#00D2B4]">
									CERTIFICATIONS
								</h3>
								<div className="flex items-center gap-1">
									<div className="w-6 h-[1px] bg-cyan-500/50"></div>
									<div className="w-1.5 h-1.5 rounded-full bg-[#00D2B4]"></div>
								</div>
							</div>
							<ul className="space-y-1 text-[7.8pt] text-slate-300 pl-2">
								{certificates.map((cert: any, idx: number) => (
									<li key={cert.id || idx} className="flex items-start gap-1.5">
										<span className="text-[#00D2B4] font-bold">•</span>
										<span>
											{cert.name}
											{cert.issuer && ` (${cert.issuer})`}
										</span>
									</li>
								))}
							</ul>
						</section>
					)}

					{/* 5. EDUCATION */}
					{education.length > 0 && (
						<section className="break-inside-avoid">
							<div className="flex items-center justify-between mb-1.5">
								<h3 className="text-[8.5pt] font-bold uppercase tracking-wider text-[#00D2B4]">
									EDUCATION
								</h3>
								<div className="flex items-center gap-1">
									<div className="w-6 h-[1px] bg-cyan-500/50"></div>
									<div className="w-1.5 h-1.5 rounded-full bg-[#00D2B4]"></div>
								</div>
							</div>
							<div className="space-y-2 text-[7.8pt] text-slate-300">
								{education.map((edu: any, idx: number) => (
									<div key={edu.id || idx}>
										<p className="font-bold text-white">{edu.degree || edu.fieldOfStudy}</p>
										<p className="text-slate-300 text-[7.5pt]">{edu.institution}</p>
										{(edu.startDate || edu.endDate) && (
											<p className="text-cyan-400 text-[7pt] mt-0.5">
												{edu.startDate ? `${edu.startDate} – ` : ''}
												{edu.endDate}
											</p>
										)}
									</div>
								))}
							</div>
						</section>
					)}
				</aside>

				{/* ========================================================= */}
				{/* ================= MAIN COLUMN (~68% / Col 8) =========== */}
				{/* ========================================================= */}
				<main className="col-span-8 p-6 space-y-5 bg-white">
					{/* 1. WORK EXPERIENCE TIMELINE */}
					{experience.length > 0 && (
						<section>
							<div className="flex items-center gap-2 mb-3 break-inside-avoid">
								<h2 className="text-[9.5pt] font-black uppercase tracking-wider text-slate-900">
									WORK EXPERIENCE
								</h2>
								<div className="flex-1 h-[1.5px] bg-[#00D2B4]"></div>
							</div>

							<div className="space-y-4 pl-1">
								{experience.map((exp: any, idx: number) => (
									<div key={exp.id || idx} className="relative pl-3.5 border-l-2 border-slate-200">
										<div
											className="absolute -left-[4.5px] top-1 w-2 h-2 rounded-full bg-[#00D2B4]"
											style={{ backgroundColor: '#00D2B4', ...forceColorStyle }}
										></div>

										<div className="flex justify-between items-baseline break-inside-avoid text-[9pt]">
											<span className="font-bold text-slate-900">{exp.role}</span>
											<span className="text-[7.5pt] text-slate-600 font-medium">
												{exp.startDate} – {exp.current ? 'Present' : exp.endDate}
											</span>
										</div>

										<div className="text-[8pt] text-[#0D9488] font-semibold italic mb-1 break-inside-avoid">
											<span>{exp.company}</span>
											{exp.location && (
												<span className="font-normal text-slate-500">, {exp.location}</span>
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
							<div className="flex items-center gap-2 mb-3 break-inside-avoid">
								<h2 className="text-[9.5pt] font-black uppercase tracking-wider text-slate-900">
									KEY PROJECTS
								</h2>
								<div className="flex-1 h-[1.5px] bg-[#00D2B4]"></div>
							</div>

							<div className="space-y-3.5 pl-1">
								{projects.map((proj: any, idx: number) => (
									<div key={proj.id || idx} className="relative pl-3.5 border-l-2 border-slate-200">
										<div
											className="absolute -left-[4.5px] top-1 w-2 h-2 rounded-full bg-[#00D2B4]"
											style={{ backgroundColor: '#00D2B4', ...forceColorStyle }}
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
											<p className="text-[7.5pt] text-[#0D9488] font-semibold mb-0.5 break-inside-avoid">
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

					{/* 3. ACHIEVEMENTS */}
					{achievements && achievements.length > 0 && (
						<section className="break-inside-avoid">
							<div className="flex items-center gap-2 mb-2">
								<h2 className="text-[9.5pt] font-black uppercase tracking-wider text-slate-900">
									ACHIEVEMENTS
								</h2>
								<div className="flex-1 h-[1.5px] bg-[#00D2B4]"></div>
							</div>

							<ul className="space-y-1.5 text-[8.2pt] text-slate-700 pl-1">
								{achievements.map((ach: any, idx: number) => (
									<li key={idx} className="flex items-start gap-2">
										<CheckCircle2 className="w-3.5 h-3.5 text-[#00D2B4] shrink-0 mt-0.5" />
										<span>{typeof ach === 'string' ? ach : ach.title || ach.name}</span>
									</li>
								))}
							</ul>
						</section>
					)}

					{/* 4. COURSES & LANGUAGES (2-Column Block) */}
					<div className="grid grid-cols-2 gap-4 break-inside-avoid">
						{/* Courses */}
						{courses && courses.length > 0 && (
							<div>
								<div className="flex items-center gap-2 mb-1.5">
									<h2 className="text-[9pt] font-black uppercase tracking-wider text-slate-900">
										COURSES & TRAINING
									</h2>
									<div className="flex-1 h-[1px] bg-[#00D2B4]"></div>
								</div>
								<ul className="space-y-0.5 text-[7.8pt] text-slate-700 pl-2">
									{courses.map((c: any, idx: number) => (
										<li key={idx} className="flex items-start gap-1.5">
											<span className="text-[#00D2B4] font-bold">•</span>
											<span>
												{typeof c === 'string' ? c : `${c.name} – ${c.institution || ''}`}
											</span>
										</li>
									))}
								</ul>
							</div>
						)}

						{/* Languages */}
						{languages && languages.length > 0 && (
							<div>
								<div className="flex items-center gap-2 mb-1.5">
									<h2 className="text-[9pt] font-black uppercase tracking-wider text-slate-900">
										LANGUAGES
									</h2>
									<div className="flex-1 h-[1px] bg-[#00D2B4]"></div>
								</div>
								<ul className="space-y-0.5 text-[7.8pt] text-slate-700 pl-2">
									{languages.map((l: any, idx: number) => (
										<li key={idx} className="flex items-start gap-1.5">
											<span className="text-[#00D2B4] font-bold">•</span>
											<span>
												{typeof l === 'string' ? l : `${l.name} (${l.level || 'Fluent'})`}
											</span>
										</li>
									))}
								</ul>
							</div>
						)}
					</div>

					{/* 5. INTERESTS */}
					{interests && interests.length > 0 && (
						<section className="break-inside-avoid">
							<div className="flex items-center gap-2 mb-1.5">
								<h2 className="text-[9pt] font-black uppercase tracking-wider text-slate-900">
									INTERESTS
								</h2>
								<div className="flex-1 h-[1px] bg-[#00D2B4]"></div>
							</div>
							<div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-[7.8pt] text-slate-700">
								{interests.map((it: any, idx: number) => (
									<span key={idx} className="flex items-center gap-1">
										<span className="text-[#00D2B4] font-bold">•</span>
										{typeof it === 'string' ? it : it.name}
									</span>
								))}
							</div>
						</section>
					)}

					{/* 6. PUBLICATIONS & RESEARCH */}
					{publications && publications.length > 0 && (
						<section className="break-inside-avoid">
							<div className="flex items-center gap-2 mb-2">
								<h2 className="text-[9.5pt] font-black uppercase tracking-wider text-slate-900">
									PUBLICATIONS & RESEARCH
								</h2>
								<div className="flex-1 h-[1.5px] bg-[#00D2B4]"></div>
							</div>

							<ul className="space-y-1.5 text-[8pt] text-slate-700 pl-2">
								{publications.map((pub: any, idx: number) => (
									<li key={idx} className="flex items-start gap-1.5">
										<span className="text-[#00D2B4] font-bold">•</span>
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

export default CyberSecurityEngineer;
