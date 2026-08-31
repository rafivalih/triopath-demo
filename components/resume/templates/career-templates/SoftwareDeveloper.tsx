'use client';

import {
	Award,
	Briefcase,
	Calendar,
	Code2,
	FolderGit2,
	Github,
	Globe,
	GraduationCap,
	Linkedin,
	Link as LinkIcon,
	Mail,
	MapPin,
	Phone,
	User,
} from 'lucide-react';
import type React from 'react';
import type { ResumeData } from '@/types/resume';

interface SoftwareDeveloperProps {
	data: ResumeData;
}

export const SoftwareDeveloper: React.FC<SoftwareDeveloperProps> = ({ data }) => {
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
			className="w-full bg-white text-slate-900 leading-normal box-border p-6 print:p-0 print:m-0 font-sans text-[8.8pt]"
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
			<header className="border-b border-slate-200 pb-3 mb-4 break-inside-avoid">
				<h1 className="text-[26pt] font-black uppercase tracking-tight text-[#0B1E48] leading-none">
					{personal.fullName || 'YOUR NAME'}
				</h1>
				<p className="text-[10.5pt] font-bold uppercase tracking-widest text-[#1D4ED8] mt-1 font-sans">
					{personal.jobTitle || 'SOFTWARE DEVELOPER'}
				</p>

				{/* Contact Links Row */}
				<div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 mt-2.5 text-[7.5pt] text-slate-700">
					{personal.email && (
						<div className="flex items-center gap-1.5">
							<Mail className="w-3.5 h-3.5 text-[#1D4ED8] shrink-0" />
							<a href={`mailto:${personal.email}`} className="hover:underline">
								{personal.email}
							</a>
						</div>
					)}
					{personal.phone && (
						<div className="flex items-center gap-1.5">
							<Phone className="w-3.5 h-3.5 text-[#1D4ED8] shrink-0" />
							<span>{personal.phone}</span>
						</div>
					)}

					{personal.linkedin && (
						<div className="flex items-center gap-1.5">
							<Linkedin className="w-3.5 h-3.5 text-[#1D4ED8] shrink-0" />
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
					{personal.github && (
						<div className="flex items-center gap-1.5">
							<Github className="w-3.5 h-3.5 text-[#1D4ED8] shrink-0" />
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
							<Globe className="w-3.5 h-3.5 text-[#1D4ED8] shrink-0" />
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
					{personal.location && (
						<div className="flex items-center gap-1.5">
							<MapPin className="w-3.5 h-3.5 text-[#1D4ED8] shrink-0" />
							<span>{personal.location}</span>
						</div>
					)}
				</div>
			</header>

			{/* ========================================================= */}
			{/* ================= 2-COLUMN MAIN BODY ==================== */}
			{/* ========================================================= */}
			<div className="grid grid-cols-12 gap-6">
				{/* ================= LEFT COLUMN (~32% / Col 4) ================= */}
				<aside className="col-span-4 border-r border-slate-200 pr-5 space-y-5">
					{/* 1. EDUCATION */}
					{education.length > 0 && (
						<section className="break-inside-avoid">
							<div className="flex items-center gap-1.5 mb-1.5">
								<GraduationCap className="w-4 h-4 text-[#1D4ED8]" />
								<h2 className="text-[9pt] font-black uppercase tracking-wider text-[#0B1E48]">
									EDUCATION
								</h2>
							</div>
							<div className="w-6 h-0.5 bg-[#1D4ED8] mb-3"></div>

							<div className="space-y-3 pl-1">
								{education.map((edu: any, idx: number) => (
									<div key={edu.id || idx} className="relative pl-3 border-l-2 border-blue-100">
										<div
											className="absolute -left-[4.5px] top-1 w-2 h-2 rounded-full bg-[#1D4ED8]"
											style={{ backgroundColor: '#1D4ED8', ...forceColorStyle }}
										></div>
										<p className="font-bold text-slate-900 leading-snug">
											{edu.degree || edu.fieldOfStudy || 'Degree'}
										</p>
										<p className="italic text-slate-700 text-[8pt]">{edu.institution}</p>
										{edu.fieldOfStudy && (
											<p className="text-[#1D4ED8] font-medium text-[7.5pt]">{edu.fieldOfStudy}</p>
										)}
										{edu.location && <p className="text-slate-500 text-[7.5pt]">{edu.location}</p>}
										{(edu.startDate || edu.endDate) && (
											<div className="flex items-center gap-1 text-slate-500 text-[7pt] mt-0.5">
												<Calendar className="w-3 h-3" />
												<span>
													{edu.startDate ? `${edu.startDate} – ` : ''}
													{edu.endDate}
												</span>
											</div>
										)}
									</div>
								))}
							</div>
						</section>
					)}

					{/* 2. TECHNICAL SKILLS */}
					{skills.length > 0 && (
						<section className="break-inside-avoid">
							<div className="flex items-center gap-1.5 mb-1.5">
								<Code2 className="w-4 h-4 text-[#1D4ED8]" />
								<h2 className="text-[9pt] font-black uppercase tracking-wider text-[#0B1E48]">
									SKILLS
								</h2>
							</div>
							<div className="w-6 h-0.5 bg-[#1D4ED8] mb-2.5"></div>

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
												<p className="font-bold text-[#1D4ED8] text-[8pt] mb-1">{categoryTitle}</p>
												<ul className="space-y-0.5 text-slate-700 pl-2">
													{skillsList.map((skill: string, sIdx: number) => (
														<li key={sIdx} className="flex items-center gap-1.5">
															<span className="text-slate-800 font-bold">•</span>
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
													<p className="font-bold text-[#1D4ED8] text-[8pt] mb-1">
														{category.trim()}
													</p>
													<ul className="space-y-0.5 text-slate-700 pl-2">
														{list?.map((skill, sIdx) => (
															<li key={sIdx} className="flex items-center gap-1.5">
																<span className="text-slate-800 font-bold">•</span>
																<span>{skill}</span>
															</li>
														))}
													</ul>
												</div>
											);
										}

										return (
											<p key={idx} className="text-slate-700 pl-2">
												• {item}
											</p>
										);
									}

									return null;
								})}
							</div>
						</section>
					)}
				</aside>

				{/* ================= RIGHT COLUMN (~68% / Col 8) ================= */}
				<main className="col-span-8 space-y-5">
					{/* 1. PROFESSIONAL SUMMARY */}
					{personal.summary && (
						<section className="break-inside-avoid">
							<div className="flex items-center gap-1.5 mb-1">
								<User className="w-4 h-4 text-[#1D4ED8]" />
								<h2 className="text-[9.5pt] font-black uppercase tracking-wider text-[#0B1E48]">
									PROFESSIONAL SUMMARY
								</h2>
							</div>
							<div className="w-6 h-0.5 bg-[#1D4ED8] mb-2"></div>
							<p className="text-[8.5pt] leading-relaxed text-slate-700 text-justify">
								{personal.summary}
							</p>
						</section>
					)}

					{/* 2. EXPERIENCE TIMELINE */}
					{experience.length > 0 && (
						<section>
							<div className="flex items-center gap-1.5 mb-1 break-inside-avoid">
								<Briefcase className="w-4 h-4 text-[#1D4ED8]" />
								<h2 className="text-[9.5pt] font-black uppercase tracking-wider text-[#0B1E48]">
									EXPERIENCE
								</h2>
							</div>
							<div className="w-6 h-0.5 bg-[#1D4ED8] mb-3"></div>

							<div className="space-y-4 pl-1">
								{experience.map((exp: any, idx: number) => (
									<div key={exp.id || idx} className="relative pl-3.5 border-l-2 border-blue-100">
										<div
											className="absolute -left-[4.5px] top-1 w-2 h-2 rounded-full bg-[#1D4ED8]"
											style={{ backgroundColor: '#1D4ED8', ...forceColorStyle }}
										></div>

										<div className="flex items-baseline justify-between text-[9pt] break-inside-avoid">
											<span className="font-bold text-slate-900">{exp.role}</span>
											<span className="text-[7.5pt] text-slate-500 font-medium">
												{exp.startDate} – {exp.current ? 'Present' : exp.endDate}
											</span>
										</div>

										<div className="flex items-baseline gap-2 text-[8pt] text-[#1D4ED8] font-semibold mb-1 break-inside-avoid">
											<span>{exp.company}</span>
											{exp.location && (
												<span className="text-slate-500 font-normal">| {exp.location}</span>
											)}
										</div>

										{exp.description && (
											<div className="space-y-1 text-[8.2pt] leading-relaxed text-slate-700 mt-1">
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

					{/* 3. PROJECTS */}
					{projects && projects.length > 0 && (
						<section>
							<div className="flex items-center gap-1.5 mb-1 break-inside-avoid">
								<FolderGit2 className="w-4 h-4 text-[#1D4ED8]" />
								<h2 className="text-[9.5pt] font-black uppercase tracking-wider text-[#0B1E48]">
									PROJECTS
								</h2>
							</div>
							<div className="w-6 h-0.5 bg-[#1D4ED8] mb-3"></div>

							<div className="space-y-4 pl-1">
								{projects.map((proj: any, idx: number) => (
									<div key={proj.id || idx} className="relative pl-3.5 border-l-2 border-blue-100">
										<div
											className="absolute -left-[4.5px] top-1 w-2 h-2 rounded-full bg-[#1D4ED8]"
											style={{ backgroundColor: '#1D4ED8', ...forceColorStyle }}
										></div>

										<div className="break-inside-avoid">
											<div className="flex items-baseline justify-between">
												<span className="font-bold text-slate-900 text-[9pt]">{proj.name}</span>
												{proj.link && (
													<a
														href={proj.link.startsWith('http') ? proj.link : `https://${proj.link}`}
														target="_blank"
														rel="noreferrer"
														className="text-[#1D4ED8] hover:underline flex items-center gap-1 text-[7.5pt]"
													>
														<LinkIcon className="w-3 h-3" />
														<span>Live / Repository URL</span>
													</a>
												)}
											</div>

											{proj.technologies && (
												<p className="text-[8pt] text-[#1D4ED8] font-medium mb-1">
													<strong className="text-slate-800 font-semibold">Tech Stack:</strong>{' '}
													{proj.technologies}
												</p>
											)}
										</div>

										{proj.description && (
											<div className="space-y-1 text-[8.2pt] leading-relaxed text-slate-700">
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

					{/* 4. CERTIFICATIONS */}
					{certificates && certificates.length > 0 && (
						<section className="break-inside-avoid">
							<div className="flex items-center gap-1.5 mb-1">
								<Award className="w-4 h-4 text-[#1D4ED8]" />
								<h2 className="text-[9.5pt] font-black uppercase tracking-wider text-[#0B1E48]">
									CERTIFICATIONS
								</h2>
							</div>
							<div className="w-6 h-0.5 bg-[#1D4ED8] mb-3"></div>

							<div className="space-y-3 pl-1">
								{certificates.map((cert: any, idx: number) => (
									<div key={cert.id || idx} className="relative pl-3.5 border-l-2 border-blue-100">
										<div
											className="absolute -left-[4.5px] top-1 w-2 h-2 rounded-full bg-[#1D4ED8]"
											style={{ backgroundColor: '#1D4ED8', ...forceColorStyle }}
										></div>
										<div className="flex justify-between items-baseline">
											<p className="font-bold text-slate-900 leading-tight">{cert.name}</p>
											{cert.issuer && (
												<span className="text-slate-600 text-[8pt]">{cert.issuer}</span>
											)}
										</div>
										<div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[7.5pt] text-slate-500 mt-0.5">
											{cert.credentialId && <span>ID: {cert.credentialId}</span>}
											{cert.issueDate && (
												<span className="flex items-center gap-1">
													<Calendar className="w-3 h-3" /> Issued: {cert.issueDate}
												</span>
											)}
											{cert.url && (
												<a
													href={cert.url.startsWith('http') ? cert.url : `https://${cert.url}`}
													target="_blank"
													rel="noreferrer"
													className="text-[#1D4ED8] hover:underline flex items-center gap-0.5"
												>
													<LinkIcon className="w-2.5 h-2.5" /> URL: Credential
												</a>
											)}
										</div>
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

export default SoftwareDeveloper;
