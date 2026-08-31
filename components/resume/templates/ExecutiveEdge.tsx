'use client';

import type React from 'react';
import type { ResumeData } from '@/types/resume';

export const ExecutiveEdge: React.FC<{ data: ResumeData }> = ({ data }) => {
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
	} = data || {};

	return (
		<div
			className="grid grid-cols-[230px_1fr] min-h-[297mm] w-full bg-white text-slate-800 font-sans text-[10.5pt] leading-tight box-border print:m-0 print:p-0"
			style={{
				fontFamily: 'Arial, Helvetica, sans-serif',
				wordBreak: 'break-word',
				overflowWrap: 'break-word',
			}}
		>
			{/* ========================================================================= */}
			{/* LEFT COLUMN SIDEBAR                                                       */}
			{/* ========================================================================= */}
			<aside className="bg-slate-900 p-5 text-slate-300 space-y-5 print:bg-slate-900">
				{/* Name & Title */}
				<div className="break-inside-avoid">
					<h1 className="text-[15pt] font-bold text-white uppercase tracking-tight leading-tight">
						{personal.fullName || 'YOUR NAME'}
					</h1>
					{personal.jobTitle && (
						<p className="text-[10pt] text-blue-400 font-semibold uppercase mt-0.5 tracking-wide">
							{personal.jobTitle}
						</p>
					)}
				</div>

				{/* Contact Information & Links */}
				<div className="space-y-1.5 text-[9.5pt] break-inside-avoid">
					<p className="text-white font-bold uppercase tracking-wider text-[10pt] border-b border-slate-700 pb-1">
						Contact
					</p>
					{personal.phone && <p className="text-slate-300">{personal.phone}</p>}
					{personal.email && (
						<p>
							<a
								href={`mailto:${personal.email}`}
								className="text-slate-300 hover:text-white break-all"
							>
								{personal.email}
							</a>
						</p>
					)}
					{personal.location && <p className="text-slate-300">{personal.location}</p>}
					{personal.linkedin && (
						<p>
							<a
								href={
									personal.linkedin.startsWith('http')
										? personal.linkedin
										: `https://${personal.linkedin}`
								}
								target="_blank"
								rel="noreferrer"
								className="text-blue-300 hover:underline break-all"
							>
								LinkedIn
							</a>
						</p>
					)}
					{personal.github && (
						<p>
							<a
								href={
									personal.github.startsWith('http')
										? personal.github
										: `https://${personal.github}`
								}
								target="_blank"
								rel="noreferrer"
								className="text-blue-300 hover:underline break-all"
							>
								GitHub
							</a>
						</p>
					)}
					{personal.website && (
						<p>
							<a
								href={
									personal.website.startsWith('http')
										? personal.website
										: `https://${personal.website}`
								}
								target="_blank"
								rel="noreferrer"
								className="text-blue-300 hover:underline break-all"
							>
								Portfolio
							</a>
						</p>
					)}
				</div>

				{/* Skills Section */}
				{skills && skills.length > 0 && (
					<div className="space-y-3 break-inside-avoid">
						<p className="text-white font-bold uppercase tracking-wider text-[10pt] border-b border-slate-700 pb-1">
							Skills & Expertise
						</p>
						<div className="space-y-2.5">
							{skills.map((item: any, idx: number) => {
								if (typeof item === 'object' && item !== null) {
									const categoryName = item.category || 'Skills';
									const tags: string[] = Array.isArray(item.skills)
										? item.skills
										: typeof item.skills === 'string'
											? item.skills
													.split(',')
													.map((s: string) => s.trim())
													.filter(Boolean)
											: [];

									if (tags.length === 0) return null;

									return (
										<div key={item.id || idx}>
											<p className="text-[9.5pt] font-semibold text-slate-300 mb-1">
												{categoryName}
											</p>
											<div className="flex flex-wrap gap-1">
												{tags.map((tag, tIdx) => (
													<span
														key={tIdx}
														className="rounded bg-slate-800 px-1.5 py-0.5 text-[8.5pt] text-slate-200"
													>
														{tag}
													</span>
												))}
											</div>
										</div>
									);
								}

								if (typeof item === 'string' && item.includes(':')) {
									const [category, rawItems] = item.split(/:(.+)/);
									const tags = rawItems
										? rawItems
												.split(',')
												.map((s) => s.trim())
												.filter(Boolean)
										: [];

									return (
										<div key={idx}>
											<p className="text-[9.5pt] font-semibold text-slate-300 mb-1">
												{category.trim()}
											</p>
											<div className="flex flex-wrap gap-1">
												{tags.map((tag, tIdx) => (
													<span
														key={tIdx}
														className="rounded bg-slate-800 px-1.5 py-0.5 text-[8.5pt] text-slate-200"
													>
														{tag}
													</span>
												))}
											</div>
										</div>
									);
								}

								return (
									<span
										key={idx}
										className="inline-block mr-1 mb-1 rounded bg-slate-800 px-1.5 py-0.5 text-[8.5pt] text-slate-200"
									>
										{typeof item === 'string' ? item : ''}
									</span>
								);
							})}
						</div>
					</div>
				)}

				{/* Certifications (Sidebar Display) */}
				{certificates && certificates.length > 0 && (
					<div className="space-y-2 break-inside-avoid">
						<p className="text-white font-bold uppercase tracking-wider text-[10pt] border-b border-slate-700 pb-1">
							Certifications
						</p>
						<div className="space-y-2 text-[9pt]">
							{certificates.map((cert, idx) => (
								<div key={cert.id || idx} className="text-slate-300">
									<p className="font-bold text-white">{cert.name}</p>
									{cert.issuer && <p className="text-slate-400">{cert.issuer}</p>}
									{cert.issueDate && (
										<p className="text-slate-500 text-[8.5pt]">{cert.issueDate}</p>
									)}
									{cert.credentialUrl && (
										<a
											href={
												cert.credentialUrl.startsWith('http')
													? cert.credentialUrl
													: `https://${cert.credentialUrl}`
											}
											target="_blank"
											rel="noreferrer"
											className="text-blue-300 text-[8.5pt] hover:underline"
										>
											[View Certificate]
										</a>
									)}
								</div>
							))}
						</div>
					</div>
				)}
			</aside>

			{/* ========================================================================= */}
			{/* RIGHT COLUMN MAIN BODY                                                    */}
			{/* ========================================================================= */}
			<main className="p-6 text-slate-800 space-y-4">
				{/* Executive Summary */}
				{personal.summary && (
					<section className="break-inside-avoid">
						<h2 className="text-[11pt] font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1 mb-1.5">
							Executive Summary
						</h2>
						<p className="text-[10pt] leading-relaxed text-slate-700">{personal.summary}</p>
					</section>
				)}

				{/* Experience */}
				{experience.length > 0 && (
					<section>
						<h2 className="text-[11pt] font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1 mb-2">
							Work Experience
						</h2>
						<div className="space-y-3">
							{experience.map((exp, idx) => (
								<div key={exp.id || idx} className="break-inside-avoid">
									<div className="flex justify-between items-baseline text-[10pt]">
										<span className="font-bold text-slate-900">
											{exp.role} –{' '}
											<span className="text-blue-700 font-semibold">{exp.company}</span>
											{exp.location && (
												<span className="font-normal text-slate-600 text-[9.5pt]">
													{' '}
													({exp.location})
												</span>
											)}
										</span>
										<span className="text-[9.5pt] font-bold text-slate-600 shrink-0 ml-2">
											{exp.startDate} – {exp.current ? 'Present' : exp.endDate}
										</span>
									</div>

									{exp.description && (
										<div className="mt-1 space-y-0.5 text-[9.5pt] leading-relaxed text-slate-700">
											{exp.description
												.split('\n')
												.filter((line) => line.trim().length > 0)
												.map((point, pIdx) => (
													<div key={pIdx} className="flex items-start">
														<span className="mr-1.5 font-bold">•</span>
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

				{/* Projects Section */}
				{projects && projects.length > 0 && (
					<section>
						<h2 className="text-[11pt] font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1 mb-2">
							Key Projects
						</h2>
						<div className="space-y-3">
							{projects.map((proj, idx) => (
								<div key={proj.id || idx} className="break-inside-avoid">
									<div className="text-[10pt] text-slate-900">
										<span className="font-bold">{proj.name}</span>
										{proj.technologies && (
											<span className="text-blue-700 font-semibold text-[9.5pt]">
												{' '}
												– {proj.technologies}
											</span>
										)}
									</div>

									{proj.description && (
										<div className="mt-1 space-y-0.5 text-[9.5pt] leading-relaxed text-slate-700">
											{proj.description
												.split('\n')
												.filter((line) => line.trim().length > 0)
												.map((line, pIdx) => (
													<div key={pIdx} className="flex items-start">
														<span className="mr-1.5 font-bold">•</span>
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

				{/* Education Section */}
				{education.length > 0 && (
					<section>
						<h2 className="text-[11pt] font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1 mb-2">
							Education
						</h2>
						<div className="space-y-2 text-[10pt]">
							{education.map((edu, idx) => (
								<div key={edu.id || idx} className="break-inside-avoid">
									<div className="flex justify-between items-baseline">
										<span className="font-bold text-slate-900">
											{edu.institution}
											{(edu.degree || edu.fieldOfStudy) && (
												<span className="font-normal">
													{' '}
													– {edu.degree}
													{edu.fieldOfStudy ? ` in ${edu.fieldOfStudy}` : ''}
												</span>
											)}
										</span>
										{(edu.startDate || edu.endDate) && (
											<span className="text-[9.5pt] font-bold text-slate-600 shrink-0 ml-2">
												{edu.startDate ? `${edu.startDate} – ` : ''}
												{edu.endDate}
											</span>
										)}
									</div>

									<div className="flex items-center gap-1.5 text-[9.5pt] text-slate-600">
										{edu.location && <span>{edu.location}</span>}
										{edu.location && edu.score && <span>|</span>}
										{edu.score && <span>GPA / Score: {edu.score}</span>}
									</div>
								</div>
							))}
						</div>
					</section>
				)}
			</main>
		</div>
	);
};

export default ExecutiveEdge;
