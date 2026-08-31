'use client';

import {
	Award,
	BookOpen,
	Briefcase,
	Compass,
	Globe,
	GraduationCap,
	Languages as LangIcon,
	Linkedin,
	Mail,
	MapPin,
	Monitor,
	Phone,
	Settings,
	Target,
	TrendingUp,
	Trophy,
	User,
} from 'lucide-react';
import type React from 'react';
import type { ResumeData } from '@/types/resume';

interface DataScientistProps {
	data: ResumeData;
}

export const DataScientist: React.FC<DataScientistProps> = ({ data }) => {
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
			className="w-full bg-white text-slate-900 leading-normal box-border p-6 print:p-0 print:m-0 font-sans text-[8.8pt]"
			style={{
				fontFamily: "'Inter', 'Plus Jakarta Sans', system-ui, sans-serif",
				wordBreak: 'break-word',
				overflowWrap: 'break-word',
				...forceColorStyle,
			}}
		>
			<div className="grid grid-cols-12 gap-6 min-h-full">
				{/* ========================================================= */}
				{/* ================= LEFT SIDEBAR (~32% / Col 4) =========== */}
				{/* ========================================================= */}
				<aside className="col-span-4 border-r border-slate-200 pr-5 space-y-4 flex flex-col justify-start">
					{/* Header Name on Page 1 */}
					<div className="break-inside-avoid">
						<h1 className="text-[25pt] font-black uppercase tracking-tight text-[#0B1E48] leading-none">
							{personal.fullName || 'YOUR NAME'}
						</h1>
						<p className="text-[11pt] font-bold uppercase tracking-wider text-[#1E3A8A] mt-1 font-sans">
							{personal.jobTitle || 'DATA SCIENTIST'}
						</p>
						<div className="w-10 h-1 bg-[#0B1E48] mt-2 mb-3"></div>
					</div>

					{/* 1. ABOUT ME (Badge Header) */}
					{personal.summary && (
						<section className="break-inside-avoid">
							<div
								className="inline-flex items-center gap-1.5 bg-[#0B1E48] text-white px-3 py-1 rounded-r-full text-[8.5pt] font-bold uppercase tracking-wider mb-2"
								style={{ backgroundColor: '#0B1E48', color: '#ffffff', ...forceColorStyle }}
							>
								<User className="w-3.5 h-3.5" />
								<span>ABOUT ME</span>
							</div>
							<p className="text-[8pt] text-slate-700 leading-relaxed text-justify">
								{personal.summary}
							</p>
						</section>
					)}

					{/* 2. SKILLS / TOOLS */}
					{skills.length > 0 && (
						<section className="space-y-3.5">
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
											<div className="flex items-center gap-1.5 mb-1 border-b border-slate-300 pb-0.5">
												{idx === 0 ? (
													<Settings className="w-3.5 h-3.5 text-[#0B1E48]" />
												) : (
													<Monitor className="w-3.5 h-3.5 text-[#0B1E48]" />
												)}
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
												<div className="flex items-center gap-1.5 mb-1 border-b border-slate-300 pb-0.5">
													<Settings className="w-3.5 h-3.5 text-[#0B1E48]" />
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

					{/* 3. EDUCATION (Sidebar Glance) */}
					{education.length > 0 && (
						<section className="break-inside-avoid">
							<div className="flex items-center gap-1.5 mb-1.5 border-b border-slate-300 pb-0.5">
								<GraduationCap className="w-3.5 h-3.5 text-[#0B1E48]" />
								<h3 className="text-[8.5pt] font-black uppercase tracking-wider text-[#0B1E48]">
									EDUCATION
								</h3>
							</div>
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
							<div className="flex items-center gap-1.5 mb-1.5 border-b border-slate-300 pb-0.5">
								<LangIcon className="w-3.5 h-3.5 text-[#0B1E48]" />
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

					{/* 5. INTERESTS (Sidebar) */}
					{interests && interests.length > 0 && (
						<section className="break-inside-avoid">
							<div className="flex items-center gap-1.5 mb-1.5 border-b border-slate-300 pb-0.5">
								<Compass className="w-3.5 h-3.5 text-[#0B1E48]" />
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

					{/* 6. CONTACT DETAILS */}
					<section className="break-inside-avoid pt-1">
						<div className="flex items-center gap-1.5 mb-1.5 border-b border-slate-300 pb-0.5">
							<Phone className="w-3.5 h-3.5 text-[#0B1E48]" />
							<h3 className="text-[8.5pt] font-black uppercase tracking-wider text-[#0B1E48]">
								CONTACT
							</h3>
						</div>
						<div className="space-y-1.5 text-[7.5pt] text-slate-700">
							{personal.email && (
								<div className="flex items-center gap-2">
									<Mail className="w-3.5 h-3.5 text-[#0B1E48] shrink-0" />
									<a href={`mailto:${personal.email}`} className="hover:underline truncate block">
										{personal.email}
									</a>
								</div>
							)}
							{personal.phone && (
								<div className="flex items-center gap-2">
									<Phone className="w-3.5 h-3.5 text-[#0B1E48] shrink-0" />
									<span>{personal.phone}</span>
								</div>
							)}
							{personal.location && (
								<div className="flex items-center gap-2">
									<MapPin className="w-3.5 h-3.5 text-[#0B1E48] shrink-0" />
									<span>{personal.location}</span>
								</div>
							)}
							{personal.linkedin && (
								<div className="flex items-center gap-2">
									<Linkedin className="w-3.5 h-3.5 text-[#0B1E48] shrink-0" />
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
									<Globe className="w-3.5 h-3.5 text-[#0B1E48] shrink-0" />
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
				{/* ================= MAIN COLUMN (~68% / Col 8) =========== */}
				{/* ========================================================= */}
				<main className="col-span-8 space-y-5 bg-white">
					{/* 1. PROFESSIONAL SUMMARY */}
					{personal.summary && (
						<section className="break-inside-avoid">
							<div className="flex items-center gap-2 mb-1">
								<Target className="w-4 h-4 text-[#0B1E48]" />
								<h2 className="text-[9.5pt] font-black uppercase tracking-wider text-[#0B1E48]">
									PROFESSIONAL SUMMARY
								</h2>
								<div className="flex-1 h-[1.5px] bg-[#0B1E48]"></div>
							</div>
							<p className="text-[8.5pt] leading-relaxed text-slate-700 text-justify">
								{personal.summary}
							</p>
						</section>
					)}

					{/* 2. WORK EXPERIENCE */}
					{experience.length > 0 && (
						<section>
							<div className="flex items-center gap-2 mb-2 break-inside-avoid">
								<Briefcase className="w-4 h-4 text-[#0B1E48]" />
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

										<div className="text-[8pt] text-slate-700 font-semibold mb-1 break-inside-avoid">
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

					{/* 3. PROJECTS */}
					{projects && projects.length > 0 && (
						<section>
							<div className="flex items-center gap-2 mb-2 break-inside-avoid">
								<TrendingUp className="w-4 h-4 text-[#0B1E48]" />
								<h2 className="text-[9.5pt] font-black uppercase tracking-wider text-[#0B1E48]">
									PROJECTS
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

					{/* 4. CERTIFICATIONS */}
					{certificates && certificates.length > 0 && (
						<section className="break-inside-avoid">
							<div className="flex items-center gap-2 mb-2">
								<Award className="w-4 h-4 text-[#0B1E48]" />
								<h2 className="text-[9.5pt] font-black uppercase tracking-wider text-[#0B1E48]">
									CERTIFICATIONS
								</h2>
								<div className="flex-1 h-[1.5px] bg-[#0B1E48]"></div>
							</div>

							<ul className="space-y-1 text-[8.2pt] text-slate-700 pl-2">
								{certificates.map((cert: any, idx: number) => (
									<li key={cert.id || idx} className="flex items-start gap-1.5">
										<span className="text-[#0B1E48] font-bold">•</span>
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

					{/* 5. ACHIEVEMENTS */}
					{achievements && achievements.length > 0 && (
						<section className="break-inside-avoid">
							<div className="flex items-center gap-2 mb-2">
								<Trophy className="w-4 h-4 text-[#0B1E48]" />
								<h2 className="text-[9.5pt] font-black uppercase tracking-wider text-[#0B1E48]">
									ACHIEVEMENTS
								</h2>
								<div className="flex-1 h-[1.5px] bg-[#0B1E48]"></div>
							</div>

							<ul className="space-y-1 text-[8.2pt] text-slate-700 pl-2">
								{achievements.map((ach: any, idx: number) => (
									<li key={idx} className="flex items-start gap-1.5">
										<span className="text-[#0B1E48] font-bold">•</span>
										<span>{typeof ach === 'string' ? ach : ach.title || ach.name}</span>
									</li>
								))}
							</ul>
						</section>
					)}

					{/* 6. PUBLICATIONS / TRAINING */}
					{(publications.length > 0 || courses.length > 0) && (
						<section className="break-inside-avoid">
							<div className="flex items-center gap-2 mb-2">
								<BookOpen className="w-4 h-4 text-[#0B1E48]" />
								<h2 className="text-[9.5pt] font-black uppercase tracking-wider text-[#0B1E48]">
									PUBLICATIONS & TRAINING
								</h2>
								<div className="flex-1 h-[1.5px] bg-[#0B1E48]"></div>
							</div>

							<ul className="space-y-1 text-[8.2pt] text-slate-700 pl-2">
								{publications.map((pub: any, idx: number) => (
									<li key={idx} className="flex items-start gap-1.5">
										<span className="text-[#0B1E48] font-bold">•</span>
										<span>
											{typeof pub === 'string' ? pub : `"${pub.title}" – ${pub.publisher || ''}`}
										</span>
									</li>
								))}
								{courses.map((c: any, idx: number) => (
									<li key={idx} className="flex items-start gap-1.5">
										<span className="text-[#0B1E48] font-bold">•</span>
										<span>{typeof c === 'string' ? c : `${c.name} – ${c.institution || ''}`}</span>
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

export default DataScientist;
