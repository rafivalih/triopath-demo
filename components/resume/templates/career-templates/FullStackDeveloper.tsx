'use client';

import {
	Briefcase,
	ExternalLink,
	FolderGit2,
	Github,
	Globe,
	Linkedin,
	Mail,
	MapPin,
	Phone,
} from 'lucide-react';
import type React from 'react';
import type { ResumeData } from '@/types/resume';

interface FullStackDeveloperProps {
	data: ResumeData;
}

export const FullStackDeveloper: React.FC<FullStackDeveloperProps> = ({ data }) => {
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
				{/* ================= LEFT SIDEBAR (Col 4) ================= */}
				<aside
					className="col-span-4 bg-[#0B0C1E] text-white flex flex-col justify-start p-4 space-y-5"
					style={{ backgroundColor: '#0B0C1E', color: '#ffffff', ...forceColorStyle }}
				>
					{/* 1. CONTACT */}
					<section className="break-inside-avoid">
						<h3 className="text-[9pt] font-black uppercase tracking-wider text-white mb-2.5 pb-1 border-b border-slate-700/60">
							CONTACT
						</h3>

						<div className="space-y-1.5 text-[8pt] text-slate-300 pl-0.5">
							{personal.email && (
								<div className="flex items-center gap-2">
									<Mail className="w-3.5 h-3.5 text-[#A78BFA] shrink-0" />
									<a
										href={`mailto:${personal.email}`}
										className="hover:underline text-slate-300 truncate block"
									>
										{personal.email}
									</a>
								</div>
							)}

							{personal.phone && (
								<div className="flex items-center gap-2">
									<Phone className="w-3.5 h-3.5 text-[#A78BFA] shrink-0" />
									<span>{personal.phone}</span>
								</div>
							)}

							{personal.location && (
								<div className="flex items-center gap-2">
									<MapPin className="w-3.5 h-3.5 text-[#A78BFA] shrink-0" />
									<span>{personal.location}</span>
								</div>
							)}

							{personal.website && (
								<div className="flex items-center gap-2">
									<Globe className="w-3.5 h-3.5 text-[#A78BFA] shrink-0" />
									<a
										href={
											personal.website.startsWith('http')
												? personal.website
												: `https://${personal.website}`
										}
										target="_blank"
										rel="noreferrer"
										className="hover:underline text-slate-300 truncate block"
									>
										{personal.website.replace(/^https?:\/\/(www\.)?/, '') || 'Portfolio'}
									</a>
								</div>
							)}

							{personal.linkedin && (
								<div className="flex items-center gap-2">
									<Linkedin className="w-3.5 h-3.5 text-[#A78BFA] shrink-0" />
									<a
										href={
											personal.linkedin.startsWith('http')
												? personal.linkedin
												: `https://${personal.linkedin}`
										}
										target="_blank"
										rel="noreferrer"
										className="hover:underline text-slate-300 truncate block"
									>
										{personal.linkedin.replace(/^https?:\/\/(www\.)?linkedin\.com\/in\/?/, '') ||
											'LinkedIn'}
									</a>
								</div>
							)}

							{personal.github && (
								<div className="flex items-center gap-2">
									<Github className="w-3.5 h-3.5 text-[#A78BFA] shrink-0" />
									<a
										href={
											personal.github.startsWith('http')
												? personal.github
												: `https://${personal.github}`
										}
										target="_blank"
										rel="noreferrer"
										className="hover:underline text-slate-300 truncate block"
									>
										{personal.github.replace(/^https?:\/\/(www\.)?github\.com\/?/, '') || 'GitHub'}
									</a>
								</div>
							)}
						</div>
					</section>

					{/* 2. TECH STACK (SKILLS) */}
					{skills.length > 0 && (
						<section className="break-inside-avoid">
							<h3 className="text-[9pt] font-black uppercase tracking-wider text-white mb-2.5 pb-1 border-b border-slate-700/60">
								TECH STACK
							</h3>

							<div className="space-y-3 text-[8pt]">
								{skills.map((item: any, idx: number) => {
									if (typeof item === 'object' && item !== null) {
										const categoryTitle = item.category || 'Skills';
										const skillsList = Array.isArray(item.skills)
											? item.skills.filter(Boolean)
											: typeof item.skills === 'string'
												? item.skills.split(',').map((s: string) => s.trim())
												: [];

										if (skillsList.length === 0) return null;

										return (
											<div key={item.id || idx} className="break-inside-avoid">
												<p className="font-bold text-[#A78BFA] text-[7.5pt] uppercase tracking-wider mb-1">
													{categoryTitle}
												</p>
												<ul className="space-y-0.5 text-slate-300 font-normal pl-2">
													{skillsList.map((skill: string, sIdx: number) => (
														<li key={sIdx} className="flex items-center gap-1.5">
															<span className="text-[#7C3AED] font-bold">•</span>
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
													<p className="font-bold text-[#A78BFA] text-[7.5pt] uppercase tracking-wider mb-1">
														{category.trim()}
													</p>
													<ul className="space-y-0.5 text-slate-300 font-normal pl-2">
														{list?.map((skill, sIdx) => (
															<li key={sIdx} className="flex items-center gap-1.5">
																<span className="text-[#7C3AED] font-bold">•</span>
																<span>{skill}</span>
															</li>
														))}
													</ul>
												</div>
											);
										}

										return (
											<p key={idx} className="text-slate-300 pl-2">
												• {item}
											</p>
										);
									}

									return null;
								})}
							</div>
						</section>
					)}

					{/* 3. EDUCATION */}
					{education.length > 0 && (
						<section className="break-inside-avoid">
							<h3 className="text-[9pt] font-black uppercase tracking-wider text-white mb-2.5 pb-1 border-b border-slate-700/60">
								EDUCATION
							</h3>

							<div className="space-y-2.5 text-[8pt]">
								{education.map((edu: any, idx: number) => (
									<div key={edu.id || idx} className="break-inside-avoid">
										<p className="font-bold text-white leading-snug">
											{edu.degree || edu.fieldOfStudy || 'Degree'}
										</p>
										<p className="text-slate-300">{edu.institution}</p>
										{edu.location && <p className="text-slate-400">{edu.location}</p>}
										{(edu.startDate || edu.endDate) && (
											<p className="text-[#A78BFA] font-semibold text-[7.5pt] mt-0.5">
												{edu.startDate ? `${edu.startDate} – ` : ''}
												{edu.endDate}
											</p>
										)}
									</div>
								))}
							</div>
						</section>
					)}

					{/* 4. CERTIFICATIONS */}
					{certificates && certificates.length > 0 && (
						<section className="break-inside-avoid">
							<h3 className="text-[9pt] font-black uppercase tracking-wider text-white mb-2.5 pb-1 border-b border-slate-700/60">
								CERTIFICATIONS
							</h3>

							<div className="space-y-2 text-[8pt]">
								{certificates.map((cert: any, idx: number) => (
									<div key={cert.id || idx} className="break-inside-avoid">
										<div className="flex items-start gap-1">
											<span className="text-[#A78BFA] font-bold">•</span>
											<div>
												<p className="font-bold text-white leading-tight">{cert.name}</p>
												<p className="text-slate-400 text-[7.5pt]">
													{cert.issuer} {cert.issueDate ? `| ${cert.issueDate}` : ''}
												</p>
											</div>
										</div>
									</div>
								))}
							</div>
						</section>
					)}
				</aside>

				{/* ================= MAIN COLUMN (Col 8) ================= */}
				<main className="col-span-8 p-6 flex flex-col space-y-1 bg-white">
					{/* Header Name & Title */}
					<header className="border-b border-slate-200 pb-3 break-inside-avoid">
						<h1 className="text-[25pt] font-black uppercase tracking-tight text-[#1E1B4B] leading-none">
							{personal.fullName || 'YOUR NAME'}
						</h1>
						<p className="text-[11pt] font-bold uppercase tracking-wider text-[#4338CA] mt-1.5 font-sans">
							{personal.jobTitle || 'FULL STACK DEVELOPER'}
						</p>
					</header>

					{/* Professional Summary */}
					{personal.summary && (
						<section className="break-inside-avoid text-slate-700">
							<p className="text-[8.5pt] leading-relaxed text-justify">{personal.summary}</p>
						</section>
					)}

					{/* Experience Section */}
					{experience.length > 0 && (
						<section>
							<div className="flex items-center gap-2 mb-2 break-inside-avoid mt-2">
								<div
									className="bg-[#4338CA] text-white p-1 rounded-full shrink-0 flex items-center justify-center"
									style={{ backgroundColor: '#4338CA', color: '#ffffff', ...forceColorStyle }}
								>
									<Briefcase className="w-3.5 h-3.5 text-white" />
								</div>
								<h2 className="text-[9.5pt] font-black uppercase tracking-wider text-[#1E1B4B]">
									PROFESSIONAL EXPERIENCE
								</h2>
							</div>

							<div className="space-y-4 pl-1">
								{experience.map((exp: any, idx: number) => (
									<div key={exp.id || idx} className="relative pl-4 border-l-2 border-indigo-200">
										<div
											className="absolute -left-[5px] top-1 w-2 h-2 rounded-full bg-[#4338CA]"
											style={{ backgroundColor: '#4338CA', ...forceColorStyle }}
										></div>

										<div className="flex items-baseline justify-between text-[9pt] break-inside-avoid">
											<span className="font-bold text-slate-900">{exp.role}</span>
											<span className="text-[8pt] text-slate-600 font-medium">
												{exp.startDate} – {exp.current ? 'Present' : exp.endDate}
											</span>
										</div>

										<div className="flex items-baseline justify-between text-[8pt] text-[#4338CA] font-semibold mb-1 break-inside-avoid">
											<span>{exp.company}</span>
											{exp.location && (
												<span className="text-slate-600 font-normal">{exp.location}</span>
											)}
										</div>

										{exp.description && (
											<div className=" text-[8.2pt] leading-relaxed text-slate-700 mt-1">
												{exp.description
													.split('\n')
													.filter((line: string) => line.trim().length > 0)
													.map((point: string, pIdx: number) => (
														<div key={pIdx} className="flex items-start gap-1 break-inside-avoid">
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

					{/* Featured Projects */}
					{projects && projects.length > 0 && (
						<section>
							<div className="flex items-center gap-2 mb-2 break-inside-avoid">
								<div
									className="bg-[#4338CA] text-white p-1 rounded-full shrink-0 flex items-center justify-center"
									style={{ backgroundColor: '#4338CA', color: '#ffffff', ...forceColorStyle }}
								>
									<FolderGit2 className="w-3.5 h-3.5 text-white" />
								</div>
								<h2 className="text-[9.5pt] font-black uppercase tracking-wider text-[#1E1B4B]">
									FEATURED PROJECTS
								</h2>
							</div>

							<div className="space-y-4">
								{projects.map((proj: any, idx: number) => (
									<div key={proj.id || idx} className="space-y-1">
										{/* Project Header */}
										<div className="break-inside-avoid">
											<div className="flex items-baseline justify-between">
												<span className="font-bold text-slate-900 text-[9pt]">{proj.name}</span>
												{proj.link && (
													<a
														href={proj.link.startsWith('http') ? proj.link : `https://${proj.link}`}
														target="_blank"
														rel="noreferrer"
														className="text-[#4338CA] hover:underline"
													>
														<ExternalLink className="w-3.5 h-3.5" />
													</a>
												)}
											</div>

											{proj.technologies && (
												<p className="text-[8pt] text-[#4338CA] font-semibold mb-1">
													{proj.technologies}
												</p>
											)}
										</div>

										{/* Project Points: flow naturally across page breaks */}
										{proj.description && (
											<div className=" text-[8.2pt] leading-relaxed text-slate-700">
												{proj.description
													.split('\n')
													.filter((line: string) => line.trim().length > 0)
													.map((line: string, pIdx: number) => (
														<div key={pIdx} className="flex items-start gap-1 break-inside-avoid">
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
				</main>
			</div>
		</div>
	);
};

export default FullStackDeveloper;
