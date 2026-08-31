'use client';

import React from 'react';
import type { ResumeData } from '@/types/resume';

export const MinimalElite: React.FC<{ data: ResumeData }> = ({ data }) => {
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

	// Build contact links
	const contactLinks: React.ReactNode[] = [];

	if (personal.phone) {
		contactLinks.push(<span key="phone">{personal.phone}</span>);
	}
	if (personal.email) {
		contactLinks.push(
			<a key="email" href={`mailto:${personal.email}`} className="text-slate-700 hover:text-black">
				{personal.email}
			</a>,
		);
	}
	if (personal.linkedin) {
		contactLinks.push(
			<a
				key="linkedin"
				href={
					personal.linkedin.startsWith('http') ? personal.linkedin : `https://${personal.linkedin}`
				}
				target="_blank"
				rel="noreferrer"
				className="text-slate-700 hover:text-black"
			>
				LinkedIn
			</a>,
		);
	}
	if (personal.github) {
		contactLinks.push(
			<a
				key="github"
				href={personal.github.startsWith('http') ? personal.github : `https://${personal.github}`}
				target="_blank"
				rel="noreferrer"
				className="text-slate-700 hover:text-black"
			>
				GitHub
			</a>,
		);
	}
	if (personal.website) {
		contactLinks.push(
			<a
				key="website"
				href={
					personal.website.startsWith('http') ? personal.website : `https://${personal.website}`
				}
				target="_blank"
				rel="noreferrer"
				className="text-slate-700 hover:text-black"
			>
				Portfolio
			</a>,
		);
	}
	if (personal.location) {
		contactLinks.push(<span key="location">{personal.location}</span>);
	}

	return (
		<div
			className="w-full bg-white text-slate-800 leading-normal box-border px-[12mm] py-[10mm] print:p-0 print:m-0 font-sans text-[10pt]"
			style={{
				fontFamily: "'Inter', 'Helvetica Neue', Arial, sans-serif",
				wordBreak: 'break-word',
				overflowWrap: 'break-word',
			}}
		>
			{/* 1. Header (Centered Minimalist) */}
			<header className="text-center pb-2 mb-3 border-b border-slate-200 break-inside-avoid">
				<h1 className="text-[19pt] font-light tracking-widest text-slate-900 uppercase">
					{personal.fullName || 'YOUR NAME'}
				</h1>
				{personal.jobTitle && (
					<p className="text-[10pt] font-medium tracking-wide text-slate-500 uppercase mt-0.5">
						{personal.jobTitle}
					</p>
				)}

				{contactLinks.length > 0 && (
					<div className="mt-1.5 flex flex-wrap items-center justify-center text-[9pt] text-slate-500">
						{contactLinks.map((item, idx) => (
							<React.Fragment key={idx}>
								<span className="inline-flex items-center">{item}</span>
								{idx < contactLinks.length - 1 && (
									<span className="mx-2 text-slate-300 select-none">•</span>
								)}
							</React.Fragment>
						))}
					</div>
				)}
			</header>

			{/* 2. Summary */}
			{personal.summary && (
				<section className="mb-3 break-inside-avoid text-center">
					<p className="text-[9.5pt] italic text-slate-600 leading-relaxed max-w-2xl mx-auto">
						{personal.summary}
					</p>
				</section>
			)}

			{/* 3. Core Competencies / Skills */}
			{skills.length > 0 && (
				<section className="mb-3 break-inside-avoid">
					<h2 className="text-[10pt] font-semibold uppercase tracking-widest text-slate-900 border-b border-slate-200 pb-0.5 mb-1.5">
						Core Competencies
					</h2>
					<div className="space-y-1 text-[9.5pt] text-slate-700">
						{skills.map((item: any, idx: number) => {
							if (typeof item === 'object' && item !== null) {
								const categoryTitle = item.category || 'Skills';
								const skillsList = Array.isArray(item.skills)
									? item.skills.filter(Boolean).join(', ')
									: item.skills;

								if (!skillsList || skillsList.trim().length === 0) return null;

								return (
									<div key={item.id || idx} className="flex items-start">
										<span className="font-medium text-slate-900 min-w-[130px] shrink-0">
											{categoryTitle}:
										</span>
										<span className="text-slate-600">{skillsList}</span>
									</div>
								);
							}

							if (typeof item === 'string') {
								const hasColon = item.includes(':');
								if (hasColon) {
									const [category, skillsList] = item.split(/:(.+)/);
									return (
										<div key={idx} className="flex items-start">
											<span className="font-medium text-slate-900 min-w-[130px] shrink-0">
												{category.trim()}:
											</span>
											<span className="text-slate-600">{skillsList?.trim()}</span>
										</div>
									);
								}

								return (
									<span key={idx} className="inline-block mr-2 text-slate-600">
										• {item}
									</span>
								);
							}

							return null;
						})}
					</div>
				</section>
			)}

			{/* 4. Experience */}
			{experience.length > 0 && (
				<section className="mb-3">
					<h2 className="text-[10pt] font-semibold uppercase tracking-widest text-slate-900 border-b border-slate-200 pb-0.5 mb-2">
						Experience
					</h2>
					<div className="space-y-2.5">
						{experience.map((exp, idx) => (
							<div key={exp.id || idx} className="break-inside-avoid">
								<div className="flex items-baseline justify-between text-[9.5pt]">
									<span className="font-medium text-slate-900">
										{exp.role} <span className="text-slate-400 font-light">|</span>{' '}
										<span className="text-slate-700">{exp.company}</span>
										{exp.location && (
											<span className="text-slate-500 font-normal">, {exp.location}</span>
										)}
									</span>
									<span className="text-[9pt] text-slate-500 shrink-0 ml-2 font-mono">
										{exp.startDate} – {exp.current ? 'Present' : exp.endDate}
									</span>
								</div>

								{exp.description && (
									<div className="mt-1 space-y-0.5 text-[9pt] leading-relaxed text-slate-600">
										{exp.description
											.split('\n')
											.filter((line) => line.trim().length > 0)
											.map((point, pIdx) => (
												<div key={pIdx} className="flex items-start">
													<span className="mr-1.5 text-slate-400">•</span>
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
					<h2 className="text-[10pt] font-semibold uppercase tracking-widest text-slate-900 border-b border-slate-200 pb-0.5 mb-2">
						Projects
					</h2>
					<div className="space-y-2.5">
						{projects.map((proj, idx) => (
							<div key={proj.id || idx} className="break-inside-avoid">
								<div className="text-[9.5pt] font-medium text-slate-900">
									<span>{proj.name}</span>
									{proj.technologies && (
										<span className="text-slate-500 font-normal text-[9pt]">
											{' '}
											— {proj.technologies}
										</span>
									)}
								</div>

								{proj.description && (
									<div className="mt-1 space-y-0.5 text-[9pt] leading-relaxed text-slate-600">
										{proj.description
											.split('\n')
											.filter((line) => line.trim().length > 0)
											.map((line, pIdx) => (
												<div key={pIdx} className="flex items-start">
													<span className="mr-1.5 text-slate-400">•</span>
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
					<h2 className="text-[10pt] font-semibold uppercase tracking-widest text-slate-900 border-b border-slate-200 pb-0.5 mb-2">
						Education
					</h2>
					<div className="space-y-2 text-[9.5pt]">
						{education.map((edu, idx) => (
							<div key={edu.id || idx} className="break-inside-avoid">
								<div className="flex justify-between items-baseline">
									<span className="font-medium text-slate-900">
										{edu.institution}
										{(edu.degree || edu.fieldOfStudy) && (
											<span className="font-normal text-slate-600">
												{' '}
												— {edu.degree}
												{edu.fieldOfStudy ? ` in ${edu.fieldOfStudy}` : ''}
											</span>
										)}
									</span>
									{(edu.startDate || edu.endDate) && (
										<span className="text-[9pt] text-slate-500 font-mono shrink-0 ml-2">
											{edu.startDate ? `${edu.startDate} – ` : ''}
											{edu.endDate}
										</span>
									)}
								</div>

								<div className="flex items-center gap-2 text-[9pt] text-slate-500 mt-0.5">
									{edu.location && <span>{edu.location}</span>}
									{edu.location && edu.score && <span>|</span>}
									{edu.score && <span>GPA / Score: {edu.score}</span>}
								</div>
							</div>
						))}
					</div>
				</section>
			)}

			{/* 7. Certifications */}
			{certificates && certificates.length > 0 && (
				<section className="mb-2">
					<h2 className="text-[10pt] font-semibold uppercase tracking-widest text-slate-900 border-b border-slate-200 pb-0.5 mb-2">
						Certifications
					</h2>
					<div className="space-y-1 text-[9.5pt]">
						{certificates.map((cert, idx) => (
							<div
								key={cert.id || idx}
								className="flex items-baseline justify-between break-inside-avoid"
							>
								<div>
									<span className="font-medium text-slate-900">{cert.name}</span>
									{cert.issuer && <span className="text-slate-600"> — {cert.issuer}</span>}
									{cert.credentialUrl && (
										<a
											href={
												cert.credentialUrl.startsWith('http')
													? cert.credentialUrl
													: `https://${cert.credentialUrl}`
											}
											target="_blank"
											rel="noreferrer"
											className="ml-1.5 text-slate-500 text-[8.5pt] hover:underline"
										>
											[View]
										</a>
									)}
								</div>
								{(cert.issueDate || cert.expirationDate) && (
									<span className="text-[9pt] text-slate-500 font-mono shrink-0 ml-2">
										{cert.issueDate}
										{cert.expirationDate && !cert.doesNotExpire ? ` – ${cert.expirationDate}` : ''}
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

export default MinimalElite;
