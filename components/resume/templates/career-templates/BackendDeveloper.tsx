'use client';

import {
	Award,
	BookOpen,
	Briefcase,
	Code2,
	ExternalLink,
	FolderGit2,
	Github,
	Globe,
	GraduationCap,
	Heart,
	Languages,
	Linkedin,
	Mail,
	MapPin,
	Phone,
	Trophy,
	User,
} from 'lucide-react';
import type React from 'react';
import type { ResumeData } from '@/types/resume';

interface BackendDeveloperProps {
	data: ResumeData;
}

export const BackendDeveloper: React.FC<BackendDeveloperProps> = ({ data }) => {
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
				{/* ================= LEFT SIDEBAR (Col 4) ================= */}
				{/* ========================================================= */}
				<aside
					className="col-span-4 bg-[#081432] text-white flex flex-col justify-start"
					style={{ backgroundColor: '#081432', color: '#ffffff', ...forceColorStyle }}
				>
					{/* Top Navy Header Banner */}
					<div className="px-5 pt-6 pb-4 border-b border-slate-700/60">
						<h2 className="text-[16pt] font-black uppercase tracking-wider leading-tight text-white font-sans">
							{personal.jobTitle || 'BACKEND DEVELOPER'}

							<br />
						</h2>
						<div className="flex items-center gap-1.5 mt-2">
							<div className="w-8 h-0.5 bg-[#5B93E8]"></div>
							<div className="w-1.5 h-1.5 rounded-full bg-[#5B93E8]"></div>
						</div>
					</div>

					<div className="p-4 space-y-5 flex-1">
						{/* 1. CONTACT */}
						{(personal.email ||
							personal.phone ||
							personal.location ||
							personal.linkedin ||
							personal.github ||
							personal.website) && (
							<section className="break-inside-avoid">
								<div className="flex items-center gap-2 mb-2.5">
									<div
										className="bg-[#102454] text-white p-1 rounded-full shrink-0 flex items-center justify-center border border-slate-700/50"
										style={{ backgroundColor: '#102454', ...forceColorStyle }}
									>
										<User className="w-3.5 h-3.5 text-white" />
									</div>
									<h3 className="text-[9pt] font-black uppercase tracking-wider text-white">
										CONTACT
									</h3>
								</div>

								<div className="space-y-1.5 text-[8pt] text-slate-200 pl-1">
									{personal.email && (
										<div className="flex items-center gap-2">
											<Mail className="w-3.5 h-3.5 text-slate-400 shrink-0" />
											<a
												href={`mailto:${personal.email}`}
												className="hover:underline text-slate-200 truncate block"
											>
												{personal.email}
											</a>
										</div>
									)}

									{personal.phone && (
										<div className="flex items-center gap-2">
											<Phone className="w-3.5 h-3.5 text-slate-400 shrink-0" />
											<span>{personal.phone}</span>
										</div>
									)}

									{personal.location && (
										<div className="flex items-center gap-2">
											<MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
											<span>{personal.location}</span>
										</div>
									)}

									{personal.linkedin && (
										<div className="flex items-center gap-2">
											<Linkedin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
											<a
												href={
													personal.linkedin.startsWith('http')
														? personal.linkedin
														: `https://${personal.linkedin}`
												}
												target="_blank"
												rel="noreferrer"
												className="hover:underline text-slate-200 truncate block"
											>
												{personal.linkedin.replace(
													/^https?:\/\/(www\.)?linkedin\.com\/in\/?/,
													'',
												) || 'LinkedIn'}
											</a>
										</div>
									)}

									{personal.github && (
										<div className="flex items-center gap-2">
											<Github className="w-3.5 h-3.5 text-slate-400 shrink-0" />
											<a
												href={
													personal.github.startsWith('http')
														? personal.github
														: `https://${personal.github}`
												}
												target="_blank"
												rel="noreferrer"
												className="hover:underline text-slate-200 truncate block"
											>
												{personal.github.replace(/^https?:\/\/(www\.)?github\.com\/?/, '') ||
													'GitHub'}
											</a>
										</div>
									)}

									{personal.website && (
										<div className="flex items-center gap-2">
											<Globe className="w-3.5 h-3.5 text-slate-400 shrink-0" />
											<a
												href={
													personal.website.startsWith('http')
														? personal.website
														: `https://${personal.website}`
												}
												target="_blank"
												rel="noreferrer"
												className="hover:underline text-slate-200 truncate block"
											>
												{personal.website.replace(/^https?:\/\/(www\.)?/, '') || 'Portfolio'}
											</a>
										</div>
									)}
								</div>
							</section>
						)}

						{/* 2. TECHNICAL SKILLS */}
						{skills.length > 0 && (
							<section className="break-inside-avoid">
								<div className="flex items-center gap-2 mb-2.5">
									<div
										className="bg-[#102454] text-white p-1 rounded-full shrink-0 flex items-center justify-center border border-slate-700/50"
										style={{ backgroundColor: '#102454', ...forceColorStyle }}
									>
										<Code2 className="w-3.5 h-3.5 text-white" />
									</div>
									<h3 className="text-[9pt] font-black uppercase tracking-wider text-white">
										TECHNICAL SKILLS
									</h3>
								</div>

								<div className="space-y-3 text-[8pt] pl-1">
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
													<p className="font-bold text-[#5B93E8] text-[7.5pt] uppercase tracking-wider mb-1">
														{categoryTitle}
													</p>
													<ul className="space-y-0.5 text-slate-200 font-normal pl-2">
														{skillsList.map((skill: string, sIdx: number) => (
															<li key={sIdx} className="flex items-center gap-1.5">
																<span className="text-slate-400 font-bold">•</span>
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
														<p className="font-bold text-[#5B93E8] text-[7.5pt] uppercase tracking-wider mb-1">
															{category.trim()}
														</p>
														<ul className="space-y-0.5 text-slate-200 font-normal pl-2">
															{list?.map((skill, sIdx) => (
																<li key={sIdx} className="flex items-center gap-1.5">
																	<span className="text-slate-400 font-bold">•</span>
																	<span>{skill}</span>
																</li>
															))}
														</ul>
													</div>
												);
											}

											return (
												<p key={idx} className="text-slate-200 pl-2">
													• {item}
												</p>
											);
										}

										return null;
									})}
								</div>
							</section>
						)}

						{/* 3. EDUCATION (Sidebar Glance) */}
						{education.length > 0 && (
							<section className="break-inside-avoid">
								<div className="flex items-center gap-2 mb-2.5">
									<div
										className="bg-[#102454] text-white p-1 rounded-full shrink-0 flex items-center justify-center border border-slate-700/50"
										style={{ backgroundColor: '#102454', ...forceColorStyle }}
									>
										<GraduationCap className="w-3.5 h-3.5 text-white" />
									</div>
									<h3 className="text-[9pt] font-black uppercase tracking-wider text-white">
										EDUCATION
									</h3>
								</div>

								<div className="space-y-2.5 text-[8pt] pl-1">
									{education.map((edu: any, idx: number) => (
										<div key={edu.id || idx} className="break-inside-avoid">
											<p className="font-bold text-white leading-snug">
												{edu.degree || edu.fieldOfStudy || 'Degree'}
											</p>
											<p className="text-slate-300">{edu.institution}</p>
											{edu.location && <p className="text-slate-400">{edu.location}</p>}
											{(edu.startDate || edu.endDate) && (
												<p className="text-[#5B93E8] font-semibold text-[7.5pt] mt-0.5">
													{edu.startDate ? `${edu.startDate} – ` : ''}
													{edu.endDate}
												</p>
											)}
										</div>
									))}
								</div>
							</section>
						)}

						{/* 4. CERTIFICATIONS (Sidebar) */}
						{certificates && certificates.length > 0 && (
							<section className="break-inside-avoid">
								<div className="flex items-center gap-2 mb-2.5">
									<div
										className="bg-[#102454] text-white p-1 rounded-full shrink-0 flex items-center justify-center border border-slate-700/50"
										style={{ backgroundColor: '#102454', ...forceColorStyle }}
									>
										<Award className="w-3.5 h-3.5 text-white" />
									</div>
									<h3 className="text-[9pt] font-black uppercase tracking-wider text-white">
										CERTIFICATIONS
									</h3>
								</div>

								<div className="space-y-2 text-[8pt] pl-1">
									{certificates.map((cert: any, idx: number) => (
										<div key={cert.id || idx} className="break-inside-avoid">
											<div className="flex items-start gap-1">
												<span className="text-[#5B93E8] font-bold">•</span>
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

						{/* 5. LANGUAGES (Multi-page Section Support) */}
						{languages && languages.length > 0 && (
							<section className="break-inside-avoid">
								<div className="flex items-center gap-2 mb-2.5">
									<div
										className="bg-[#102454] text-white p-1 rounded-full shrink-0 flex items-center justify-center border border-slate-700/50"
										style={{ backgroundColor: '#102454', ...forceColorStyle }}
									>
										<Languages className="w-3.5 h-3.5 text-white" />
									</div>
									<h3 className="text-[9pt] font-black uppercase tracking-wider text-white">
										LANGUAGES
									</h3>
								</div>
								<ul className="space-y-1 text-[8pt] text-slate-200 pl-2">
									{languages.map((lang: any, idx: number) => (
										<li key={idx} className="flex items-center gap-1.5">
											<span className="text-[#5B93E8] font-bold">•</span>
											<span>
												{typeof lang === 'string'
													? lang
													: `${lang.name} (${lang.level || 'Fluent'})`}
											</span>
										</li>
									))}
								</ul>
							</section>
						)}
					</div>
				</aside>

				{/* ========================================================= */}
				{/* ================= MAIN COLUMN (Col 8) =================== */}
				{/* ========================================================= */}
				<main className="col-span-8 p-6 flex flex-col space-y-5 bg-white">
					{/* Header Name & Job Title */}
					<header className="border-b border-slate-200 pb-3 break-inside-avoid">
						<h1 className="text-[25pt] font-black uppercase tracking-tight text-[#081432] leading-none">
							{personal.fullName || 'YOUR NAME'}
						</h1>
						{/* <p className="text-[11.5pt] font-bold uppercase tracking-wider text-[#2563EB] mt-1.5 font-sans">
              {personal.jobTitle || 'BACKEND DEVELOPER'}
            </p> */}
					</header>

					{/* 1. PROFESSIONAL SUMMARY */}
					{personal.summary && (
						<section className="break-inside-avoid">
							<div className="flex items-center gap-2 mb-1">
								<div
									className="bg-[#081432] text-white p-1 rounded-full shrink-0 flex items-center justify-center"
									style={{ backgroundColor: '#081432', color: '#ffffff', ...forceColorStyle }}
								>
									<User className="w-3.5 h-3.5 text-white" />
								</div>
								<h2 className="text-[9.8pt] font-black uppercase tracking-wider text-[#081432]">
									PROFESSIONAL SUMMARY
								</h2>
							</div>
							<div className="w-7 h-0.5 bg-[#2563EB] mb-2"></div>
							<p className="text-[8.5pt] leading-relaxed text-slate-700 text-justify">
								{personal.summary}
							</p>
						</section>
					)}

					{/* 2. TECHNICAL EXPERIENCE */}
					{experience.length > 0 && (
						<section>
							<div className="flex items-center gap-2 mb-1 break-inside-avoid">
								<div
									className="bg-[#081432] text-white p-1 rounded-full shrink-0 flex items-center justify-center"
									style={{ backgroundColor: '#081432', color: '#ffffff', ...forceColorStyle }}
								>
									<Briefcase className="w-3.5 h-3.5 text-white" />
								</div>
								<h2 className="text-[9.8pt] font-black uppercase tracking-wider text-[#081432]">
									EXPERIENCE
								</h2>
							</div>
							<div className="w-7 h-0.5 bg-[#2563EB] mb-3"></div>

							<div className="space-y-4">
								{experience.map((exp: any, idx: number) => (
									<div key={exp.id || idx} className="break-inside-avoid">
										<div className="flex items-baseline justify-between text-[9pt]">
											<span className="font-bold text-slate-900">{exp.role}</span>
											<span className="text-[8pt] text-slate-600 font-medium">
												{exp.startDate} – {exp.current ? 'Present' : exp.endDate}
											</span>
										</div>

										<div className="flex items-baseline justify-between text-[8pt] text-[#2563EB] font-semibold mb-1">
											<span>{exp.company}</span>
											{exp.location && (
												<span className="text-slate-600 font-normal">{exp.location}</span>
											)}
										</div>

										{exp.description && (
											<div className="space-y-1 text-[8.2pt] leading-relaxed text-slate-700 mt-1">
												{exp.description
													.split('\n')
													.filter((line: string) => line.trim().length > 0)
													.map((point: string, pIdx: number) => (
														<div key={pIdx} className="flex items-start gap-1.5">
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

					{/* 3. TECHNICAL PROJECTS */}
					{projects && projects.length > 0 && (
						<section>
							<div className="flex items-center gap-2 mb-1 break-inside-avoid">
								<div
									className="bg-[#081432] text-white p-1 rounded-full shrink-0 flex items-center justify-center"
									style={{ backgroundColor: '#081432', color: '#ffffff', ...forceColorStyle }}
								>
									<FolderGit2 className="w-3.5 h-3.5 text-white" />
								</div>
								<h2 className="text-[9.8pt] font-black uppercase tracking-wider text-[#081432]">
									PROJECTS
								</h2>
							</div>
							<div className="w-7 h-0.5 bg-[#2563EB] mb-3"></div>

							<div className="space-y-4">
								{projects.map((proj: any, idx: number) => (
									<div key={proj.id || idx} className="break-inside-avoid">
										<div className="flex items-baseline justify-between">
											<span className="font-bold text-slate-900 text-[9pt]">{proj.name}</span>
											{proj.link && (
												<a
													href={proj.link.startsWith('http') ? proj.link : `https://${proj.link}`}
													target="_blank"
													rel="noreferrer"
													className="text-[#2563EB] hover:underline"
												>
													<ExternalLink className="w-3.5 h-3.5" />
												</a>
											)}
										</div>

										{proj.technologies && (
											<p className="text-[8pt] text-[#2563EB] font-semibold mb-1">
												{proj.technologies}
											</p>
										)}

										{proj.description && (
											<div className="space-y-1 text-[8.2pt] leading-relaxed text-slate-700">
												{proj.description
													.split('\n')
													.filter((line: string) => line.trim().length > 0)
													.map((line: string, pIdx: number) => (
														<div key={pIdx} className="flex items-start gap-1.5">
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

					{/* 4. ADDITIONAL INFORMATION (Renders seamlessly across Page 2 / Page 3 / Page 4) */}
					{(courses.length > 0 || achievements.length > 0 || interests.length > 0) && (
						<section className="break-inside-avoid border-t border-slate-200 pt-4">
							<div className="flex items-center gap-2 mb-1">
								<div
									className="bg-[#081432] text-white p-1 rounded-full shrink-0 flex items-center justify-center"
									style={{ backgroundColor: '#081432', color: '#ffffff', ...forceColorStyle }}
								>
									<Award className="w-3.5 h-3.5 text-white" />
								</div>
								<h2 className="text-[9.8pt] font-black uppercase tracking-wider text-[#081432]">
									ADDITIONAL INFORMATION
								</h2>
							</div>
							<div className="w-7 h-0.5 bg-[#2563EB] mb-3"></div>

							{/* Courses */}
							{courses.length > 0 && (
								<div className="mb-3 break-inside-avoid">
									<div className="flex items-center gap-1.5 font-bold text-slate-900 text-[8.5pt] mb-1">
										<BookOpen className="w-3.5 h-3.5 text-[#2563EB]" />
										<span>COURSES</span>
									</div>
									<ul className="space-y-0.5 text-[8pt] text-slate-700 pl-2">
										{courses.map((course: any, idx: number) => (
											<li key={idx} className="flex items-start gap-1.5">
												<span className="text-slate-900 font-bold">•</span>
												<span>
													{typeof course === 'string'
														? course
														: `${course.name} — ${course.institution || ''}`}
												</span>
											</li>
										))}
									</ul>
								</div>
							)}

							{/* Achievements & Interests Grid */}
							<div className="grid grid-cols-2 gap-4">
								{achievements.length > 0 && (
									<div className="break-inside-avoid">
										<div className="flex items-center gap-1.5 font-bold text-slate-900 text-[8.5pt] mb-1">
											<Trophy className="w-3.5 h-3.5 text-[#2563EB]" />
											<span>ACHIEVEMENTS</span>
										</div>
										<ul className="space-y-1 text-[8pt] text-slate-700 pl-2">
											{achievements.map((ach: any, idx: number) => (
												<li key={idx} className="flex items-start gap-1.5">
													<span className="text-slate-900 font-bold">•</span>
													<span>{typeof ach === 'string' ? ach : ach.title}</span>
												</li>
											))}
										</ul>
									</div>
								)}

								{interests.length > 0 && (
									<div className="break-inside-avoid">
										<div className="flex items-center gap-1.5 font-bold text-slate-900 text-[8.5pt] mb-1">
											<Heart className="w-3.5 h-3.5 text-[#2563EB]" />
											<span>INTERESTS</span>
										</div>
										<ul className="space-y-1 text-[8pt] text-slate-700 pl-2">
											{interests.map((interest: any, idx: number) => (
												<li key={idx} className="flex items-start gap-1.5">
													<span className="text-slate-900 font-bold">•</span>
													<span>{typeof interest === 'string' ? interest : interest.name}</span>
												</li>
											))}
										</ul>
									</div>
								)}
							</div>
						</section>
					)}
				</main>
			</div>
		</div>
	);
};

export default BackendDeveloper;
