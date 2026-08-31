'use client';

import React from 'react';
import type { ResumeData } from '@/types/resume';

interface CareerProProps {
	data: ResumeData;
}

export const CareerPro: React.FC<CareerProProps> = ({ data }) => {
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
			<a key="email" href={`mailto:${personal.email}`} className="text-[#0284c7] hover:underline">
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
				className="text-[#0284c7] hover:underline"
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
				className="text-[#0284c7] hover:underline"
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
				className="text-[#0284c7] hover:underline"
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
				fontFamily: "'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
				wordBreak: 'break-word',
				overflowWrap: 'break-word',
			}}
		>
			{/* 1. Header with Sky Blue Accent Banner */}
			<header className="border-b-2 border-[#0284c7] pb-2 mb-3 break-inside-avoid">
				<div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
					<h1 className="text-[22pt] font-extrabold uppercase tracking-tight text-slate-900 leading-none">
						{personal.fullName || 'YOUR NAME'}
					</h1>
					{personal.jobTitle && (
						<span className="text-[11pt] font-bold uppercase tracking-wider text-[#0284c7]">
							{personal.jobTitle}
						</span>
					)}
				</div>

				{contactLinks.length > 0 && (
					<div className="mt-2 flex flex-wrap items-center text-[9.5pt] text-slate-600">
						{contactLinks.map((item, idx) => (
							<React.Fragment key={idx}>
								<span className="whitespace-nowrap inline-flex items-center">{item}</span>
								{idx < contactLinks.length - 1 && (
									<span className="mx-2 font-bold text-[#0284c7] select-none">/</span>
								)}
							</React.Fragment>
						))}
					</div>
				)}
			</header>

			{/* 2. Executive Summary */}
			{personal.summary && (
				<section className="mb-3 break-inside-avoid">
					<div className="flex items-center gap-2 mb-1">
						<span className="h-2 w-2 rounded-full bg-[#0284c7]"></span>
						<h2 className="text-[11pt] font-bold uppercase tracking-wider text-slate-900">
							Executive Profile
						</h2>
					</div>
					<p className="text-[9.5pt] leading-relaxed text-slate-700 pl-4 border-l-2 border-slate-200">
						{personal.summary}
					</p>
				</section>
			)}

			{/* 3. Core Competencies & Skills */}
			{skills.length > 0 && (
				<section className="mb-3 break-inside-avoid">
					<div className="flex items-center gap-2 mb-1.5">
						<span className="h-2 w-2 rounded-full bg-[#0284c7]"></span>
						<h2 className="text-[11pt] font-bold uppercase tracking-wider text-slate-900">
							Core Competencies & Stack
						</h2>
					</div>
					<div className="space-y-1.5 pl-4 border-l-2 border-slate-200 text-[9.5pt] text-slate-800">
						{skills.map((item: any, idx: number) => {
							if (typeof item === 'object' && item !== null) {
								const categoryTitle = item.category || 'Skills';
								const skillsList = Array.isArray(item.skills)
									? item.skills.filter(Boolean).join(', ')
									: item.skills;

								if (!skillsList || skillsList.trim().length === 0) return null;

								return (
									<div key={item.id || idx} className="flex items-start">
										<span className="font-bold text-[#0284c7] mr-1.5">▸</span>
										<p className="leading-snug">
											<strong className="font-bold text-slate-900">{categoryTitle}: </strong>
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
											<span className="font-bold text-[#0284c7] mr-1.5">▸</span>
											<p className="leading-snug">
												<strong className="font-bold text-slate-900">{category.trim()}: </strong>
												<span>{skillsList?.trim()}</span>
											</p>
										</div>
									);
								}

								return (
									<div key={idx} className="flex items-start">
										<span className="font-bold text-[#0284c7] mr-1.5">▸</span>
										<span>{item}</span>
									</div>
								);
							}

							return null;
						})}
					</div>
				</section>
			)}

			{/* 4. Professional Experience */}
			{experience.length > 0 && (
				<section className="mb-3">
					<div className="flex items-center gap-2 mb-2">
						<span className="h-2 w-2 rounded-full bg-[#0284c7]"></span>
						<h2 className="text-[11pt] font-bold uppercase tracking-wider text-slate-900">
							Professional Experience
						</h2>
					</div>
					<div className="space-y-3 pl-4 border-l-2 border-slate-200">
						{experience.map((exp, idx) => (
							<div key={exp.id || idx} className="break-inside-avoid">
								<div className="flex items-baseline justify-between text-[10pt]">
									<span className="font-bold text-slate-900">
										{exp.role} <span className="font-semibold text-[#0284c7]">@ {exp.company}</span>
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
													<span className="text-[#0284c7] font-bold mr-1.5">•</span>
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
						<span className="h-2 w-2 rounded-full bg-[#0284c7]"></span>
						<h2 className="text-[11pt] font-bold uppercase tracking-wider text-slate-900">
							Featured Projects
						</h2>
					</div>
					<div className="space-y-2.5 pl-4 border-l-2 border-slate-200">
						{projects.map((proj, idx) => (
							<div key={proj.id || idx} className="break-inside-avoid">
								<div className="text-[10pt]">
									<span className="font-bold text-slate-900">{proj.name}</span>
									{proj.technologies && (
										<span className="text-[#0284c7] font-medium text-[9pt]">
											{' '}
											[{proj.technologies}]
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
													<span className="text-[#0284c7] font-bold mr-1.5">•</span>
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
						<span className="h-2 w-2 rounded-full bg-[#0284c7]"></span>
						<h2 className="text-[11pt] font-bold uppercase tracking-wider text-slate-900">
							Education
						</h2>
					</div>
					<div className="space-y-1.5 pl-4 border-l-2 border-slate-200 text-[9.5pt] text-slate-800">
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
						<span className="h-2 w-2 rounded-full bg-[#0284c7]"></span>
						<h2 className="text-[11pt] font-bold uppercase tracking-wider text-slate-900">
							Certifications & Credentials
						</h2>
					</div>
					<div className="space-y-1 pl-4 border-l-2 border-slate-200 text-[9.5pt] text-slate-800">
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
											className="ml-1.5 text-[#0284c7] text-[8.5pt] hover:underline"
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

export default CareerPro;
