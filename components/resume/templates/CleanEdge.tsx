'use client';

import React from 'react';
import type { ResumeData } from '@/types/resume';

interface CleanEdgeProps {
	data: ResumeData;
}

export const CleanEdge: React.FC<CleanEdgeProps> = ({ data }) => {
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
			<a key="email" href={`mailto:${personal.email}`} className="text-[#334155] hover:underline">
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
				className="text-[#334155] hover:underline"
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
				className="text-[#334155] hover:underline"
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
				className="text-[#334155] hover:underline"
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
			className="w-full bg-white text-slate-900 leading-tight box-border px-[12mm] py-[10mm] print:p-0 print:m-0 font-sans text-[10pt]"
			style={{
				fontFamily:
					"'Inter', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
				wordBreak: 'break-word',
				overflowWrap: 'break-word',
			}}
		>
			{/* 1. Header with Border Frame Effect */}
			<header className="border-l-4 border-slate-700 pl-3.5 pb-1 mb-3.5 break-inside-avoid">
				<h1 className="text-[22pt] font-black uppercase tracking-tight text-slate-900 leading-none">
					{personal.fullName || 'YOUR NAME'}
				</h1>
				{personal.jobTitle && (
					<p className="text-[10.5pt] font-semibold uppercase tracking-widest text-slate-600 mt-1 mb-1.5">
						{personal.jobTitle}
					</p>
				)}

				{contactLinks.length > 0 && (
					<div className="flex flex-wrap items-center text-[9pt] text-slate-600">
						{contactLinks.map((item, idx) => (
							<React.Fragment key={idx}>
								<span className="whitespace-nowrap inline-flex items-center">{item}</span>
								{idx < contactLinks.length - 1 && (
									<span className="mx-2 text-slate-400 select-none">▪</span>
								)}
							</React.Fragment>
						))}
					</div>
				)}
			</header>

			{/* 2. Professional Summary */}
			{personal.summary && (
				<section className="mb-3 break-inside-avoid">
					<div className="flex items-center gap-2 mb-1">
						<h2 className="text-[10.5pt] font-extrabold uppercase tracking-wider text-slate-800 bg-slate-100 px-2 py-0.5 rounded-sm border-l-2 border-slate-700">
							Professional Summary
						</h2>
					</div>
					<p className="text-[9.5pt] leading-relaxed text-slate-700 text-justify">
						{personal.summary}
					</p>
				</section>
			)}

			{/* 3. Core Competencies & Skills */}
			{skills.length > 0 && (
				<section className="mb-3 break-inside-avoid">
					<div className="flex items-center gap-2 mb-1.5">
						<h2 className="text-[10.5pt] font-extrabold uppercase tracking-wider text-slate-800 bg-slate-100 px-2 py-0.5 rounded-sm border-l-2 border-slate-700">
							Skills & Expertise
						</h2>
					</div>
					<div className="space-y-1 text-[9.5pt] text-slate-800">
						{skills.map((item: any, idx: number) => {
							if (typeof item === 'object' && item !== null) {
								const categoryTitle = item.category || 'Skills';
								const skillsList = Array.isArray(item.skills)
									? item.skills.filter(Boolean).join(', ')
									: item.skills;

								if (!skillsList || skillsList.trim().length === 0) return null;

								return (
									<div key={item.id || idx} className="flex items-start">
										<span className="text-slate-500 font-bold mr-1.5">›</span>
										<p className="leading-snug">
											<strong className="font-semibold text-slate-900">{categoryTitle}: </strong>
											<span>{skillsList}</span>
										</p>
									</div>
								);
							}

							if (typeof item === 'string') {
								const hasColon = item.includes(':');
								if (hasColon) {
									const [category, skillsList] = item.split(/:(.+)/);
									return (
										<div key={idx} className="flex items-start">
											<span className="text-slate-500 font-bold mr-1.5">›</span>
											<p className="leading-snug">
												<strong className="font-semibold text-slate-900">
													{category.trim()}:{' '}
												</strong>
												<span>{skillsList?.trim()}</span>
											</p>
										</div>
									);
								}

								return (
									<div key={idx} className="flex items-start">
										<span className="text-slate-500 font-bold mr-1.5">›</span>
										<span>{item}</span>
									</div>
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
					<div className="flex items-center gap-2 mb-2">
						<h2 className="text-[10.5pt] font-extrabold uppercase tracking-wider text-slate-800 bg-slate-100 px-2 py-0.5 rounded-sm border-l-2 border-slate-700">
							Work Experience
						</h2>
					</div>
					<div className="space-y-2.5">
						{experience.map((exp, idx) => (
							<div key={exp.id || idx} className="break-inside-avoid">
								<div className="flex items-baseline justify-between text-[10pt]">
									<span className="font-bold text-slate-900">
										{exp.role} <span className="text-slate-500 font-normal">|</span>{' '}
										<span className="font-semibold text-slate-700">{exp.company}</span>
										{exp.location && (
											<span className="font-normal text-slate-500 text-[9pt]">
												{' '}
												({exp.location})
											</span>
										)}
									</span>
									<span className="font-semibold text-[9pt] text-slate-600 shrink-0 ml-2">
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
													<span className="text-slate-500 font-bold mr-1.5">•</span>
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

			{/* 5. Key Projects */}
			{projects && projects.length > 0 && (
				<section className="mb-3">
					<div className="flex items-center gap-2 mb-2">
						<h2 className="text-[10.5pt] font-extrabold uppercase tracking-wider text-slate-800 bg-slate-100 px-2 py-0.5 rounded-sm border-l-2 border-slate-700">
							Projects
						</h2>
					</div>
					<div className="space-y-2">
						{projects.map((proj, idx) => (
							<div key={proj.id || idx} className="break-inside-avoid">
								<div className="text-[10pt]">
									<span className="font-bold text-slate-900">{proj.name}</span>
									{proj.technologies && (
										<span className="text-slate-500 font-normal text-[9pt]">
											{' '}
											— {proj.technologies}
										</span>
									)}
								</div>

								{proj.description && (
									<div className="mt-0.5 space-y-0.5 text-[9.5pt] leading-relaxed text-slate-700">
										{proj.description
											.split('\n')
											.filter((line) => line.trim().length > 0)
											.map((line, pIdx) => (
												<div key={pIdx} className="flex items-start">
													<span className="text-slate-500 font-bold mr-1.5">•</span>
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
					<div className="flex items-center gap-2 mb-1.5">
						<h2 className="text-[10.5pt] font-extrabold uppercase tracking-wider text-slate-800 bg-slate-100 px-2 py-0.5 rounded-sm border-l-2 border-slate-700">
							Education
						</h2>
					</div>
					<div className="space-y-1.5 text-[9.5pt] text-slate-800">
						{education.map((edu, idx) => (
							<div key={edu.id || idx} className="break-inside-avoid">
								<div className="flex justify-between items-baseline">
									<span className="font-bold text-slate-900">
										{edu.institution}
										{(edu.degree || edu.fieldOfStudy) && (
											<span className="font-normal text-slate-700">
												{' '}
												— {edu.degree}
												{edu.fieldOfStudy ? ` in ${edu.fieldOfStudy}` : ''}
											</span>
										)}
									</span>
									{(edu.startDate || edu.endDate) && (
										<span className="font-semibold text-slate-600 shrink-0 ml-2 text-[9pt]">
											{edu.startDate ? `${edu.startDate} – ` : ''}
											{edu.endDate}
										</span>
									)}
								</div>

								<div className="flex items-center gap-1.5 text-slate-500 text-[9pt]">
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
					<div className="flex items-center gap-2 mb-1.5">
						<h2 className="text-[10.5pt] font-extrabold uppercase tracking-wider text-slate-800 bg-slate-100 px-2 py-0.5 rounded-sm border-l-2 border-slate-700">
							Certifications
						</h2>
					</div>
					<div className="space-y-1 text-[9.5pt] text-slate-800">
						{certificates.map((cert, idx) => (
							<div
								key={cert.id || idx}
								className="flex items-baseline justify-between break-inside-avoid"
							>
								<div>
									<span className="font-bold text-slate-900">{cert.name}</span>
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
											className="ml-1.5 text-slate-600 text-[8.5pt] underline hover:text-slate-900"
										>
											[View]
										</a>
									)}
								</div>
								{(cert.issueDate || cert.expirationDate) && (
									<span className="font-semibold text-[9pt] text-slate-600 shrink-0 ml-2">
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

export default CleanEdge;
