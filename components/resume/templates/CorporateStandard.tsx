"use client";

import React from "react";
import { ResumeData } from "@/types/resume";

interface CorporateStandardProps {
	data: ResumeData;
}

export const CorporateStandard: React.FC<CorporateStandardProps> = ({
	data,
}) => {
	const {
		personal = {
			fullName: "",
			jobTitle: "",
			email: "",
			phone: "",
			location: "",
			website: "",
			linkedin: "",
			github: "",
			summary: "",
		},
		experience = [],
		education = [],
		skills = [],
		projects = [],
		certificates = [],
	} = data || {};

	// Build contact items
	const contactLinks: React.ReactNode[] = [];

	if (personal.phone) {
		contactLinks.push(<span key="phone">{personal.phone}</span>);
	}
	if (personal.email) {
		contactLinks.push(
			<a
				key="email"
				href={`mailto:${personal.email}`}
				className="text-[#1e293b] hover:underline"
			>
				{personal.email}
			</a>,
		);
	}
	if (personal.linkedin) {
		contactLinks.push(
			<a
				key="linkedin"
				href={
					personal.linkedin.startsWith("http")
						? personal.linkedin
						: `https://${personal.linkedin}`
				}
				target="_blank"
				rel="noreferrer"
				className="text-[#1e293b] hover:underline"
			>
				LinkedIn
			</a>,
		);
	}
	if (personal.github) {
		contactLinks.push(
			<a
				key="github"
				href={
					personal.github.startsWith("http")
						? personal.github
						: `https://${personal.github}`
				}
				target="_blank"
				rel="noreferrer"
				className="text-[#1e293b] hover:underline"
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
					personal.website.startsWith("http")
						? personal.website
						: `https://${personal.website}`
				}
				target="_blank"
				rel="noreferrer"
				className="text-[#1e293b] hover:underline"
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
				fontFamily: "Georgia, 'Times New Roman', Times, serif",
				wordBreak: "break-word",
				overflowWrap: "break-word",
			}}
		>
			{/* 1. Header (Centered Corporate Standard) */}
			<header className="text-center pb-2 mb-3 border-b-2 border-slate-800 break-inside-avoid">
				<h1 className="text-[22pt] font-normal uppercase tracking-wider text-slate-900 leading-none mb-1">
					{personal.fullName || "YOUR NAME"}
				</h1>
				{personal.jobTitle && (
					<p className="text-[11pt] tracking-widest uppercase text-slate-600 font-semibold mb-1.5 font-sans">
						{personal.jobTitle}
					</p>
				)}
				{contactLinks.length > 0 && (
					<div className="flex flex-wrap items-center justify-center text-[9.5pt] text-slate-700 font-sans">
						{contactLinks.map((item, idx) => (
							<React.Fragment key={idx}>
								<span className="whitespace-nowrap inline-flex items-center">
									{item}
								</span>
								{idx < contactLinks.length - 1 && (
									<span className="mx-2 text-slate-400 select-none">|</span>
								)}
							</React.Fragment>
						))}
					</div>
				)}
			</header>

			{/* 2. Professional Summary */}
			{personal.summary && (
				<section className="mb-3 break-inside-avoid">
					<h2 className="text-[11pt] font-bold uppercase tracking-wider text-slate-900 border-b border-slate-400 pb-0.5 mb-1.5 font-sans">
						Professional Summary
					</h2>
					<p className="text-[9.5pt] leading-relaxed text-slate-800 text-justify">
						{personal.summary}
					</p>
				</section>
			)}

			{/* 3. Areas of Expertise / Skills */}
			{skills.length > 0 && (
				<section className="mb-3 break-inside-avoid">
					<h2 className="text-[11pt] font-bold uppercase tracking-wider text-slate-900 border-b border-slate-400 pb-0.5 mb-1.5 font-sans">
						Core Competencies & Technical Skills
					</h2>
					<div className="space-y-1 text-[9.5pt] text-slate-800 font-sans">
						{skills.map((item: any, idx: number) => {
							if (typeof item === "object" && item !== null) {
								const categoryTitle = item.category || "Skills";
								const skillsList = Array.isArray(item.skills)
									? item.skills.filter(Boolean).join(", ")
									: item.skills;

								if (!skillsList || skillsList.trim().length === 0) return null;

								return (
									<div key={item.id || idx} className="flex items-start">
										<span className="text-slate-800 font-bold mr-2">•</span>
										<p className="leading-snug">
											<strong className="font-bold text-slate-900">
												{categoryTitle}:{" "}
											</strong>
											<span>{skillsList}</span>
										</p>
									</div>
								);
							}

							if (typeof item === "string") {
								const hasColon = item.includes(":");
								if (hasColon) {
									const [category, skillsList] = item.split(/:(.+)/);
									return (
										<div key={idx} className="flex items-start">
											<span className="text-slate-800 font-bold mr-2">•</span>
											<p className="leading-snug">
												<strong className="font-bold text-slate-900">
													{category.trim()}:{" "}
												</strong>
												<span>{skillsList?.trim()}</span>
											</p>
										</div>
									);
								}

								return (
									<div key={idx} className="flex items-start">
										<span className="text-slate-800 font-bold mr-2">•</span>
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
					<h2 className="text-[11pt] font-bold uppercase tracking-wider text-slate-900 border-b border-slate-400 pb-0.5 mb-2 font-sans">
						Professional Experience
					</h2>
					<div className="space-y-2.5">
						{experience.map((exp, idx) => (
							<div key={exp.id || idx} className="break-inside-avoid">
								<div className="flex items-baseline justify-between text-[10pt]">
									<span className="font-bold text-slate-900 font-sans">
										{exp.role}{" "}
										<span className="font-normal text-slate-600">—</span>{" "}
										{exp.company}
										{exp.location && (
											<span className="font-normal text-slate-600 text-[9.5pt]">
												{" "}
												({exp.location})
											</span>
										)}
									</span>
									<span className="font-semibold text-[9pt] text-slate-700 shrink-0 ml-2 font-sans">
										{exp.startDate} – {exp.current ? "Present" : exp.endDate}
									</span>
								</div>

								{exp.description && (
									<div className="mt-1 space-y-0.5 text-[9.5pt] leading-relaxed text-slate-700">
										{exp.description
											.split("\n")
											.filter((line) => line.trim().length > 0)
											.map((point, pIdx) => (
												<div key={pIdx} className="flex items-start">
													<span className="mr-2 text-slate-800 font-bold">
														•
													</span>
													<span>{point.replace(/^•\s*/, "")}</span>
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
					<h2 className="text-[11pt] font-bold uppercase tracking-wider text-slate-900 border-b border-slate-400 pb-0.5 mb-2 font-sans">
						Key Projects
					</h2>
					<div className="space-y-2">
						{projects.map((proj, idx) => (
							<div key={proj.id || idx} className="break-inside-avoid">
								<div className="text-[10pt] font-sans">
									<span className="font-bold text-slate-900">{proj.name}</span>
									{proj.technologies && (
										<span className="text-slate-600 font-normal">
											{" "}
											— {proj.technologies}
										</span>
									)}
								</div>

								{proj.description && (
									<div className="mt-0.5 space-y-0.5 text-[9.5pt] leading-relaxed text-slate-700">
										{proj.description
											.split("\n")
											.filter((line) => line.trim().length > 0)
											.map((line, pIdx) => (
												<div key={pIdx} className="flex items-start">
													<span className="mr-2 text-slate-800 font-bold">
														•
													</span>
													<span>{line.replace(/^•\s*/, "")}</span>
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
					<h2 className="text-[11pt] font-bold uppercase tracking-wider text-slate-900 border-b border-slate-400 pb-0.5 mb-1.5 font-sans">
						Education
					</h2>
					<div className="space-y-1.5 text-[9.5pt] text-slate-800">
						{education.map((edu, idx) => (
							<div key={edu.id || idx} className="break-inside-avoid">
								<div className="flex justify-between items-baseline font-sans">
									<span className="font-bold text-slate-900">
										{edu.institution}
										{(edu.degree || edu.fieldOfStudy) && (
											<span className="font-normal">
												{" "}
												— {edu.degree}
												{edu.fieldOfStudy ? ` in ${edu.fieldOfStudy}` : ""}
											</span>
										)}
									</span>
									{(edu.startDate || edu.endDate) && (
										<span className="font-semibold text-slate-700 shrink-0 ml-2 text-[9pt]">
											{edu.startDate ? `${edu.startDate} – ` : ""}
											{edu.endDate}
										</span>
									)}
								</div>

								<div className="flex items-center gap-1.5 text-slate-600 text-[9pt] font-sans">
									{edu.location && <span>{edu.location}</span>}
									{edu.location && edu.score && (
										<span className="text-slate-400">|</span>
									)}
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
					<h2 className="text-[11pt] font-bold uppercase tracking-wider text-slate-900 border-b border-slate-400 pb-0.5 mb-1.5 font-sans">
						Certifications
					</h2>
					<div className="space-y-1 text-[9.5pt] text-slate-800 font-sans">
						{certificates.map((cert, idx) => (
							<div
								key={cert.id || idx}
								className="flex items-baseline justify-between break-inside-avoid"
							>
								<div>
									<span className="font-bold text-slate-900">{cert.name}</span>
									{cert.issuer && <span> — {cert.issuer}</span>}
									{cert.credentialUrl && (
										<a
											href={
												cert.credentialUrl.startsWith("http")
													? cert.credentialUrl
													: `https://${cert.credentialUrl}`
											}
											target="_blank"
											rel="noreferrer"
											className="ml-1.5 text-slate-800 text-[8.5pt] underline"
										>
											[View]
										</a>
									)}
								</div>
								{(cert.issueDate || cert.expirationDate) && (
									<span className="font-semibold text-[9pt] text-slate-700 shrink-0 ml-2">
										{cert.issueDate}
										{cert.expirationDate && !cert.doesNotExpire
											? ` – ${cert.expirationDate}`
											: ""}
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

export default CorporateStandard;
