'use client';

import { Globe, Linkedin, Mail, MapPin, Phone } from 'lucide-react';
import type React from 'react';
import type { ResumeData } from '@/types/resume';

interface DataAnalystProps {
	data: ResumeData;
}

export const DataAnalyst: React.FC<DataAnalystProps> = ({ data }) => {
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
		achievements = [],
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
					className="col-span-4 bg-[#F2F8F7] border-r border-[#D5E7E4] p-5 space-y-4 flex flex-col justify-start"
					style={{ backgroundColor: '#F2F8F7', ...forceColorStyle }}
				>
					{/* 1. ABOUT ME */}
					{personal.summary && (
						<section className="break-inside-avoid">
							<h3 className="text-[9pt] font-black uppercase tracking-wider text-[#0D5F5F] mb-1.5 pb-1 border-b border-[#0D5F5F]">
								ABOUT ME
							</h3>
							<p className="text-[8pt] text-slate-700 leading-relaxed text-justify">
								{personal.summary}
							</p>
						</section>
					)}

					{/* 2. SKILLS / TOOLS / COMPETENCIES */}
					{skills.length > 0 && (
						<section className="space-y-4">
							{skills.map((item: any, idx: number) => {
								if (typeof item === 'object' && item !== null) {
									const categoryTitle = item.category || 'SKILLS';
									const skillsList = Array.isArray(item.skills)
										? item.skills.filter(Boolean)
										: typeof item.skills === 'string'
											? item.skills.split(',').map((s: string) => s.trim())
											: [];

									if (skillsList.length === 0) return null;

									return (
										<div key={item.id || idx} className="break-inside-avoid">
											<h3 className="text-[9pt] font-black uppercase tracking-wider text-[#0D5F5F] mb-1.5 pb-1 border-b border-[#0D5F5F]">
												{categoryTitle}
											</h3>
											<ul className="space-y-0.5 text-[8pt] text-slate-700 pl-2">
												{skillsList.map((skill: string, sIdx: number) => (
													<li key={sIdx} className="flex items-center gap-1.5">
														<span className="text-[#0D5F5F] font-bold">•</span>
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
												<h3 className="text-[9pt] font-black uppercase tracking-wider text-[#0D5F5F] mb-1.5 pb-1 border-b border-[#0D5F5F]">
													{category.trim()}
												</h3>
												<ul className="space-y-0.5 text-[8pt] text-slate-700 pl-2">
													{list?.map((skill, sIdx) => (
														<li key={sIdx} className="flex items-center gap-1.5">
															<span className="text-[#0D5F5F] font-bold">•</span>
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

					{/* 3. EDUCATION (Sidebar Glance) */}
					{education.length > 0 && (
						<section className="break-inside-avoid">
							<h3 className="text-[9pt] font-black uppercase tracking-wider text-[#0D5F5F] mb-1.5 pb-1 border-b border-[#0D5F5F]">
								EDUCATION
							</h3>
							<div className="space-y-2 text-[8pt]">
								{education.map((edu: any, idx: number) => (
									<div key={edu.id || idx}>
										<p className="font-bold text-slate-900 leading-snug">
											{edu.degree || edu.fieldOfStudy || 'Degree'}
										</p>
										<p className="italic text-slate-700 text-[7.5pt]">{edu.institution}</p>
										{(edu.startDate || edu.endDate) && (
											<p className="text-slate-500 text-[7pt]">
												{edu.startDate ? `${edu.startDate} – ` : ''}
												{edu.endDate}
											</p>
										)}
									</div>
								))}
							</div>
						</section>
					)}

					{/* 4. LANGUAGES (Sidebar) */}
					{languages && languages.length > 0 && (
						<section className="break-inside-avoid">
							<h3 className="text-[9pt] font-black uppercase tracking-wider text-[#0D5F5F] mb-1.5 pb-1 border-b border-[#0D5F5F]">
								LANGUAGES
							</h3>
							<ul className="space-y-0.5 text-[8pt] text-slate-700 pl-2">
								{languages.map((l: any, idx: number) => (
									<li key={idx} className="flex items-center gap-1.5">
										<span className="text-[#0D5F5F] font-bold">•</span>
										<span>{typeof l === 'string' ? l : `${l.name} (${l.level || 'Fluent'})`}</span>
									</li>
								))}
							</ul>
						</section>
					)}

					{/* 5. CONTACT */}
					<section className="break-inside-avoid pt-2">
						<h3 className="text-[9pt] font-black uppercase tracking-wider text-[#0D5F5F] mb-2 pb-1 border-b border-[#0D5F5F]">
							CONTACT
						</h3>
						<div className="space-y-1.5 text-[7.5pt] text-slate-700">
							{personal.email && (
								<div className="flex items-center gap-2">
									<Mail className="w-3.5 h-3.5 text-[#0D5F5F] shrink-0" />
									<a href={`mailto:${personal.email}`} className="hover:underline truncate block">
										{personal.email}
									</a>
								</div>
							)}
							{personal.phone && (
								<div className="flex items-center gap-2">
									<Phone className="w-3.5 h-3.5 text-[#0D5F5F] shrink-0" />
									<span>{personal.phone}</span>
								</div>
							)}
							{personal.location && (
								<div className="flex items-center gap-2">
									<MapPin className="w-3.5 h-3.5 text-[#0D5F5F] shrink-0" />
									<span>{personal.location}</span>
								</div>
							)}
							{personal.linkedin && (
								<div className="flex items-center gap-2">
									<Linkedin className="w-3.5 h-3.5 text-[#0D5F5F] shrink-0" />
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
							{personal.website && (
								<div className="flex items-center gap-2">
									<Globe className="w-3.5 h-3.5 text-[#0D5F5F] shrink-0" />
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
				</aside>

				{/* ========================================================= */}
				{/* ================= MAIN COLUMN (~70% / Col 8) =========== */}
				{/* ========================================================= */}
				<main className="col-span-8 p-6 space-y-5 bg-white">
					{/* Header Name & Title */}
					<header className="break-inside-avoid">
						<h1 className="text-[26pt] font-black uppercase tracking-tight text-[#0B1E48] leading-none">
							{personal.fullName || 'YOUR NAME'}
						</h1>
						<p className="text-[11pt] font-bold uppercase tracking-widest text-[#0D5F5F] mt-1 font-sans">
							{personal.jobTitle || 'DATA ANALYST'}
						</p>
					</header>

					{/* 1. EXPERIENCE */}
					{experience.length > 0 && (
						<section>
							<div className="flex items-center gap-2 mb-2 break-inside-avoid">
								<h2 className="text-[9.5pt] font-black uppercase tracking-wider text-[#0D5F5F]">
									EXPERIENCE
								</h2>
								<div className="flex-1 h-[1.5px] bg-[#0D5F5F]"></div>
							</div>

							<div className="space-y-4">
								{experience.map((exp: any, idx: number) => (
									<div key={exp.id || idx} className="space-y-1">
										<div className="flex justify-between items-baseline break-inside-avoid text-[9pt]">
											<span className="font-bold text-slate-900">{exp.role}</span>
											<span className="text-[7.5pt] text-slate-600 font-medium">
												{exp.startDate} – {exp.current ? 'Present' : exp.endDate}
											</span>
										</div>

										<div className="text-[8pt] text-slate-700 font-medium mb-1 break-inside-avoid">
											<span>{exp.company}</span>
											{exp.location && <span>, {exp.location}</span>}
										</div>

										{exp.description && (
											<div className="space-y-1 text-[8.2pt] leading-relaxed text-slate-700 pl-2">
												{exp.description
													.split('\n')
													.filter((line: string) => line.trim().length > 0)
													.map((point: string, pIdx: number) => (
														<div key={pIdx} className="flex items-start gap-1.5 break-inside-avoid">
															<span className="text-[#0D5F5F] font-bold">•</span>
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

					{/* 2. PROJECTS */}
					{projects && projects.length > 0 && (
						<section>
							<div className="flex items-center gap-2 mb-2 break-inside-avoid">
								<h2 className="text-[9.5pt] font-black uppercase tracking-wider text-[#0D5F5F]">
									PROJECTS
								</h2>
								<div className="flex-1 h-[1.5px] bg-[#0D5F5F]"></div>
							</div>

							<div className="space-y-3 pl-1">
								{projects.map((proj: any, idx: number) => (
									<div key={proj.id || idx} className="relative pl-3.5 border-l-2 border-slate-200">
										<div
											className="absolute -left-[4.5px] top-1 w-2 h-2 rounded-full bg-[#0D5F5F]"
											style={{ backgroundColor: '#0D5F5F', ...forceColorStyle }}
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
											<p className="text-[7.5pt] text-[#0D5F5F] font-semibold mb-0.5 break-inside-avoid">
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
						<section>
							<div className="flex items-center gap-2 mb-2 break-inside-avoid">
								<h2 className="text-[9.5pt] font-black uppercase tracking-wider text-[#0D5F5F]">
									ACHIEVEMENTS
								</h2>
								<div className="flex-1 h-[1.5px] bg-[#0D5F5F]"></div>
							</div>

							<div className="space-y-2 pl-1">
								{achievements.map((ach: any, idx: number) => (
									<div
										key={idx}
										className="relative pl-3.5 border-l-2 border-slate-200 break-inside-avoid"
									>
										<div
											className="absolute -left-[4.5px] top-1.5 w-2 h-2 rounded-full bg-[#0D5F5F]"
											style={{ backgroundColor: '#0D5F5F', ...forceColorStyle }}
										></div>
										<p className="text-[8.2pt] text-slate-700 leading-relaxed">
											{typeof ach === 'string' ? ach : ach.title || ach.name}
										</p>
									</div>
								))}
							</div>
						</section>
					)}

					{/* 4. EDUCATION (Detailed) */}
					{education.length > 0 && (
						<section className="break-inside-avoid">
							<div className="flex items-center gap-2 mb-2">
								<h2 className="text-[9.5pt] font-black uppercase tracking-wider text-[#0D5F5F]">
									EDUCATION
								</h2>
								<div className="flex-1 h-[1.5px] bg-[#0D5F5F]"></div>
							</div>

							<div className="space-y-2 text-[8.5pt]">
								{education.map((edu: any, idx: number) => (
									<div key={edu.id || idx}>
										<div className="flex justify-between items-baseline font-bold text-slate-900">
											<span>{edu.degree || edu.fieldOfStudy}</span>
											<span className="text-[7.5pt] text-slate-600 font-normal">
												{edu.startDate ? `${edu.startDate} – ` : ''}
												{edu.endDate}
											</span>
										</div>
										<p className="italic text-slate-700 text-[8pt]">{edu.institution}</p>
									</div>
								))}
							</div>
						</section>
					)}

					{/* 5. CERTIFICATIONS */}
					{certificates && certificates.length > 0 && (
						<section className="break-inside-avoid">
							<div className="flex items-center gap-2 mb-2">
								<h2 className="text-[9.5pt] font-black uppercase tracking-wider text-[#0D5F5F]">
									CERTIFICATIONS
								</h2>
								<div className="flex-1 h-[1.5px] bg-[#0D5F5F]"></div>
							</div>

							<ul className="space-y-1 text-[8.2pt] text-slate-700 pl-2">
								{certificates.map((cert: any, idx: number) => (
									<li key={cert.id || idx} className="flex items-start gap-1.5">
										<span className="text-[#0D5F5F] font-bold">•</span>
										<span>
											<strong className="font-semibold text-slate-900">{cert.name}</strong>
											{cert.issuer && ` – ${cert.issuer}`}
											{cert.issueDate && ` (${cert.issueDate})`}
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

export default DataAnalyst;
