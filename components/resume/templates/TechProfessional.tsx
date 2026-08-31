'use client';

import React from 'react';
import type { ResumeData } from '@/types/resume';

export const TechProfessional: React.FC<{ data: ResumeData }> = ({ data }) => {
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

	// Build contact array
	const contactItems: React.ReactNode[] = [];

	if (personal.phone) {
		contactItems.push(<span key="phone">{personal.phone}</span>);
	}
	if (personal.email) {
		contactItems.push(
			<a key="email" href={`mailto:${personal.email}`} className="text-teal-700 hover:underline">
				{personal.email}
			</a>,
		);
	}
	if (personal.github) {
		contactItems.push(
			<a
				key="github"
				href={personal.github.startsWith('http') ? personal.github : `https://${personal.github}`}
				target="_blank"
				rel="noreferrer"
				className="text-teal-700 hover:underline"
			>
				github.com/{personal.github.replace(/^https?:\/\/(www\.)?github\.com\/?/, '')}
			</a>,
		);
	}
	if (personal.linkedin) {
		contactItems.push(
			<a
				key="linkedin"
				href={
					personal.linkedin.startsWith('http') ? personal.linkedin : `https://${personal.linkedin}`
				}
				target="_blank"
				rel="noreferrer"
				className="text-teal-700 hover:underline"
			>
				linkedin.com/in/{personal.linkedin.replace(/^https?:\/\/(www\.)?linkedin\.com\/in\/?/, '')}
			</a>,
		);
	}
	if (personal.website) {
		contactItems.push(
			<a
				key="website"
				href={
					personal.website.startsWith('http') ? personal.website : `https://${personal.website}`
				}
				target="_blank"
				rel="noreferrer"
				className="text-teal-700 hover:underline"
			>
				{personal.website.replace(/^https?:\/\//, '')}
			</a>,
		);
	}
	if (personal.location) {
		contactItems.push(<span key="location">{personal.location}</span>);
	}

	return (
		<div
			className="w-full bg-white text-slate-800 leading-tight box-border px-[12mm] py-[10mm] print:p-0 print:m-0 font-mono text-[9.5pt]"
			style={{
				fontFamily: "'JetBrains Mono', 'Fira Code', 'Courier New', monospace",
				wordBreak: 'break-word',
				overflowWrap: 'break-word',
			}}
		>
			{/* 1. Terminal Header */}
			<header className="border-l-4 border-teal-600 pl-3.5 pb-1 mb-3 break-inside-avoid">
				<h1 className="text-[18pt] font-bold tracking-tight text-slate-900 leading-none">
					{personal.fullName || 'DEVELOPER_NAME'}
				</h1>

				{personal.jobTitle && (
					<p className="text-[10pt] font-semibold text-teal-700 mt-1 uppercase tracking-wide">
						&gt; {personal.jobTitle}
					</p>
				)}

				{contactItems.length > 0 && (
					<div className="mt-2 flex flex-wrap items-center gap-y-1 text-[8.5pt] text-slate-600">
						{contactItems.map((item, idx) => (
							<React.Fragment key={idx}>
								<span className="inline-flex items-center">{item}</span>
								{idx < contactItems.length - 1 && (
									<span className="mx-2 text-teal-400 font-bold select-none">|</span>
								)}
							</React.Fragment>
						))}
					</div>
				)}
			</header>

			{/* 2. Professional Summary */}
			{personal.summary && (
				<section className="mb-3 break-inside-avoid">
					<h2 className="text-[9pt] font-bold text-teal-900 bg-teal-50 border border-teal-200 px-2 py-0.5 rounded inline-block mb-1.5 uppercase">
						// 01_SUMMARY
					</h2>
					<p className="text-[9pt] font-sans leading-relaxed text-slate-700 pl-1">
						{personal.summary}
					</p>
				</section>
			)}

			{/* 3. Tech Stack / Skills */}
			{skills.length > 0 && (
				<section className="mb-3 break-inside-avoid">
					<h2 className="text-[9pt] font-bold text-teal-900 bg-teal-50 border border-teal-200 px-2 py-0.5 rounded inline-block mb-1.5 uppercase">
						// 02_TECH_STACK
					</h2>
					<div className="space-y-1.5 pl-1">
						{skills.map((item: any, idx: number) => {
							if (typeof item === 'object' && item !== null) {
								const categoryTitle = item.category || 'Core';
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
									<div key={item.id || idx} className="flex flex-wrap items-baseline gap-1.5">
										<span className="text-[8.5pt] font-bold text-slate-700 min-w-[130px] shrink-0">
											$ {categoryTitle}:
										</span>
										<div className="flex flex-wrap gap-1">
											{tags.map((tag, tIdx) => (
												<span
													key={tIdx}
													className="rounded border border-teal-200 bg-teal-50/50 px-1.5 py-0.5 text-[8pt] text-teal-900 font-semibold"
												>
													{tag}
												</span>
											))}
										</div>
									</div>
								);
							}

							if (typeof item === 'string') {
								const hasColon = item.includes(':');
								if (hasColon) {
									const [category, rawItems] = item.split(/:(.+)/);
									const tags = rawItems
										? rawItems
												.split(',')
												.map((s) => s.trim())
												.filter(Boolean)
										: [];

									return (
										<div key={idx} className="flex flex-wrap items-baseline gap-1.5">
											<span className="text-[8.5pt] font-bold text-slate-700 min-w-[130px] shrink-0">
												$ {category.trim()}:
											</span>
											<div className="flex flex-wrap gap-1">
												{tags.map((tag, tIdx) => (
													<span
														key={tIdx}
														className="rounded border border-teal-200 bg-teal-50/50 px-1.5 py-0.5 text-[8pt] text-teal-900 font-semibold"
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
										className="inline-block mr-1 mb-1 rounded border border-teal-200 bg-teal-50/50 px-1.5 py-0.5 text-[8pt] text-teal-900 font-semibold"
									>
										{item}
									</span>
								);
							}

							return null;
						})}
					</div>
				</section>
			)}

			{/* 4. Work Experience */}
			{experience.length > 0 && (
				<section className="mb-3">
					<h2 className="text-[9pt] font-bold text-teal-900 bg-teal-50 border border-teal-200 px-2 py-0.5 rounded inline-block mb-1.5 uppercase">
						// 03_EXPERIENCE
					</h2>
					<div className="space-y-2.5 pl-1">
						{experience.map((exp, idx) => (
							<div key={exp.id || idx} className="break-inside-avoid">
								<div className="flex items-baseline justify-between text-[9.5pt]">
									<span className="font-bold text-slate-900">
										&gt; {exp.role} <span className="text-teal-700">@{exp.company}</span>
										{exp.location && (
											<span className="font-normal text-slate-500 text-[8.5pt]">
												{' '}
												[{exp.location}]
											</span>
										)}
									</span>
									<span className="text-[8.5pt] text-slate-500 shrink-0 ml-2">
										[{exp.startDate} – {exp.current ? 'Present' : exp.endDate}]
									</span>
								</div>

								{exp.description && (
									<div className="mt-1 space-y-0.5 text-[8.5pt] font-sans leading-relaxed text-slate-700">
										{exp.description
											.split('\n')
											.filter((line) => line.trim().length > 0)
											.map((point, pIdx) => (
												<div key={pIdx} className="flex items-start">
													<span className="mr-1.5 text-teal-600 font-mono">#</span>
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

			{/* 5. Projects */}
			{projects && projects.length > 0 && (
				<section className="mb-3">
					<h2 className="text-[9pt] font-bold text-teal-900 bg-teal-50 border border-teal-200 px-2 py-0.5 rounded inline-block mb-1.5 uppercase">
						// 04_PROJECTS
					</h2>
					<div className="space-y-2.5 pl-1">
						{projects.map((proj, idx) => (
							<div key={proj.id || idx} className="break-inside-avoid">
								<div className="text-[9.5pt]">
									<span className="font-bold text-slate-900">&gt; {proj.name}</span>
									{proj.technologies && (
										<span className="text-teal-700 text-[8.5pt]"> [{proj.technologies}]</span>
									)}
								</div>

								{proj.description && (
									<div className="mt-1 space-y-0.5 text-[8.5pt] font-sans leading-relaxed text-slate-700">
										{proj.description
											.split('\n')
											.filter((line) => line.trim().length > 0)
											.map((line, pIdx) => (
												<div key={pIdx} className="flex items-start">
													<span className="mr-1.5 text-teal-600 font-mono">#</span>
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

			{/* 6. Education */}
			{education.length > 0 && (
				<section className="mb-3">
					<h2 className="text-[9pt] font-bold text-teal-900 bg-teal-50 border border-teal-200 px-2 py-0.5 rounded inline-block mb-1.5 uppercase">
						// 05_EDUCATION
					</h2>
					<div className="space-y-2 pl-1 text-[9pt]">
						{education.map((edu, idx) => (
							<div key={edu.id || idx} className="break-inside-avoid">
								<div className="flex justify-between items-baseline">
									<span className="font-bold text-slate-900">
										&gt; {edu.institution}
										{(edu.degree || edu.fieldOfStudy) && (
											<span className="font-normal text-slate-700">
												{' '}
												– {edu.degree}
												{edu.fieldOfStudy ? ` (${edu.fieldOfStudy})` : ''}
											</span>
										)}
									</span>
									{(edu.startDate || edu.endDate) && (
										<span className="text-[8.5pt] text-slate-500 shrink-0 ml-2">
											[{edu.startDate ? `${edu.startDate} – ` : ''}
											{edu.endDate}]
										</span>
									)}
								</div>

								<div className="flex items-center gap-2 text-[8.5pt] text-slate-600 mt-0.5">
									{edu.location && <span>Loc: {edu.location}</span>}
									{edu.location && edu.score && <span>|</span>}
									{edu.score && <span>Score: {edu.score}</span>}
								</div>
							</div>
						))}
					</div>
				</section>
			)}

			{/* 7. Certifications */}
			{certificates && certificates.length > 0 && (
				<section className="mb-2">
					<h2 className="text-[9pt] font-bold text-teal-900 bg-teal-50 border border-teal-200 px-2 py-0.5 rounded inline-block mb-1.5 uppercase">
						// 06_CERTIFICATIONS
					</h2>
					<div className="space-y-1 pl-1 text-[9pt]">
						{certificates.map((cert, idx) => (
							<div
								key={cert.id || idx}
								className="flex items-baseline justify-between break-inside-avoid"
							>
								<div>
									<span className="font-bold text-slate-900">&gt; {cert.name}</span>
									{cert.issuer && <span className="text-slate-600"> [{cert.issuer}]</span>}
									{cert.credentialUrl && (
										<a
											href={
												cert.credentialUrl.startsWith('http')
													? cert.credentialUrl
													: `https://${cert.credentialUrl}`
											}
											target="_blank"
											rel="noreferrer"
											className="ml-1.5 text-teal-700 text-[8.5pt] hover:underline"
										>
											[verify]
										</a>
									)}
								</div>
								{(cert.issueDate || cert.expirationDate) && (
									<span className="text-[8.5pt] text-slate-500 shrink-0 ml-2">
										[{cert.issueDate}
										{cert.expirationDate && !cert.doesNotExpire ? ` – ${cert.expirationDate}` : ''}]
									</span>
								)}
							</div>
						))}
					</div>
				</section>
			)}
		</div>
	);
};

export default TechProfessional;
