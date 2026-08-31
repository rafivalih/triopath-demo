// "use client";

// import React from "react";
// import { ResumeData } from "@/types/resume";

// interface ClassicTemplateProps {
// 	data: ResumeData;
// }

// export const ClassicTemplate: React.FC<ClassicTemplateProps> = ({ data }) => {
// 	const {
// 		personal = {
// 			fullName: "",
// 			jobTitle: "",
// 			email: "",
// 			phone: "",
// 			location: "",
// 			website: "",
// 			linkedin: "",
// 			github: "",
// 			summary: "",
// 		},
// 		experience = [],
// 		education = [],
// 		skills = [],
// 		projects = [],
// 		certificates = [],
// 	} = data || {};

// 	// Build contact items array separated by pipes
// 	const contactLinks: React.ReactNode[] = [];

// 	if (personal.phone) {
// 		contactLinks.push(<span key="phone">{personal.phone}</span>);
// 	}
// 	if (personal.email) {
// 		contactLinks.push(
// 			<a
// 				key="email"
// 				href={`mailto:${personal.email}`}
// 				className="text-[#121ec4]"
// 			>
// 				{personal.email}
// 			</a>,
// 		);
// 	}
// 	if (personal.linkedin) {
// 		contactLinks.push(
// 			<a
// 				key="linkedin"
// 				href={
// 					personal.linkedin.startsWith("http")
// 						? personal.linkedin
// 						: `https://${personal.linkedin}`
// 				}
// 				target="_blank"
// 				rel="noreferrer"
// 				className="text-[#121ec4]"
// 			>
// 				{personal.linkedin}
// 			</a>,
// 		);
// 	}
// 	if (personal.github) {
// 		contactLinks.push(
// 			<a
// 				key="github"
// 				href={
// 					personal.github.startsWith("http")
// 						? personal.github
// 						: `https://${personal.github}`
// 				}
// 				target="_blank"
// 				rel="noreferrer"
// 				className="text-[#121ec4]"
// 			>
// 				{personal.github}
// 			</a>,
// 		);
// 	}
// 	if (personal.website) {
// 		contactLinks.push(
// 			<a
// 				key="website"
// 				href={
// 					personal.website.startsWith("http")
// 						? personal.website
// 						: `https://${personal.website}`
// 				}
// 				target="_blank"
// 				rel="noreferrer"
// 				className="text-[#121ec4]"
// 			>
// 				{personal.website}
// 			</a>,
// 		);
// 	}
// 	if (personal.location) {
// 		contactLinks.push(<span key="location">{personal.location}</span>);
// 	}

// 	return (
// 		<div
// 			className="w-[210mm] min-h-[297mm] bg-white px-[12mm] py-[12mm] text-black leading-tight box-border break-words"
// 			style={{
// 				fontFamily: "Arial, Helvetica, sans-serif",
// 				wordBreak: "break-word",
// 				overflowWrap: "break-word",
// 			}}
// 		>
// 			{/* 1. Header */}
// 			{/* 1. Header */}
// 			<header className="border-b border-black pb-1 mb-2">
// 				<h1 className="text-[20pt] font-bold uppercase tracking-tight text-black leading-none mb-1">
// 					{personal.fullName || "YOUR NAME"}
// 				</h1>

// 				{personal.jobTitle && (
// 					<p className="text-[11.5pt] uppercase text-black font-semibold mb-1">
// 						{personal.jobTitle}
// 					</p>
// 				)}

// 				{contactLinks.length > 0 && (
// 					<div className="flex flex-wrap items-center text-[10pt] leading-normal text-black">
// 						{contactLinks.map((item, idx) => (
// 							<React.Fragment key={idx}>
// 								<span className="whitespace-nowrap inline-flex items-center">
// 									{item}
// 								</span>
// 								{idx < contactLinks.length - 1 && (
// 									<span className="mx-1.5 font-normal text-black select-none">
// 										|
// 									</span>
// 								)}
// 							</React.Fragment>
// 						))}
// 					</div>
// 				)}
// 			</header>

// 			{/* 2. Professional Summary */}
// 			{personal.summary && (
// 				<section className="mb-[1px]">
// 					<h2 className="text-[12pt] font-bold uppercase text-black  pb-0.5 mb-1">
// 						PROFESSIONAL SUMMARY
// 					</h2>
// 					<p className="text-[10.5pt] leading-snug text-black border-b border-black">
// 						{personal.summary}
// 					</p>
// 				</section>
// 			)}

// 			{/* 3. Skills & Competencies */}
// 			{skills.length > 0 && (
// 				<section className="mb-[1px]">
// 					<h2 className="text-[12pt] font-bold uppercase text-black  pb-0.5 ">
// 						SKILLS & COMPETENCIES
// 					</h2>
// 					<div className="space-y-0.5 text-[10.5pt] text-black border-b border-black">
// 						{skills.map((item: any, idx: number) => {
// 							if (typeof item === "object" && item !== null) {
// 								const categoryTitle = item.category || "Skills";
// 								const skillsList = Array.isArray(item.skills)
// 									? item.skills.filter(Boolean).join(", ")
// 									: item.skills;

// 								if (!skillsList || skillsList.trim().length === 0) return null;

// 								return (
// 									<div key={item.id || idx} className="flex items-start">
// 										<span className="mr-1.5 font-bold">•</span>
// 										<p className="leading-snug">
// 											<strong className="font-bold text-black">
// 												{categoryTitle}:{" "}
// 											</strong>
// 											<span className="text-black">{skillsList}</span>
// 										</p>
// 									</div>
// 								);
// 							}

// 							if (typeof item === "string") {
// 								const hasColon = item.includes(":");
// 								if (hasColon) {
// 									const [category, skillsList] = item.split(/:(.+)/);
// 									return (
// 										<div key={idx} className="flex items-start">
// 											<span className="mr-1.5 font-bold">•</span>
// 											<p className="leading-snug">
// 												<strong className="font-bold text-black">
// 													{category.trim()}:{" "}
// 												</strong>
// 												<span className="text-black">{skillsList?.trim()}</span>
// 											</p>
// 										</div>
// 									);
// 								}

// 								return (
// 									<div key={idx} className="flex items-start">
// 										<span className="mr-1.5 font-bold">•</span>
// 										<span className="text-black">{item}</span>
// 									</div>
// 								);
// 							}

// 							return null;
// 						})}
// 					</div>
// 				</section>
// 			)}

// 			{/* 4. Experience */}
// 			{experience.length > 0 && (
// 				<section className="mb-[1px]">
// 					<h2 className="text-[12pt] font-bold uppercase text-black  pb-0.5 ">
// 						EXPERIENCE
// 					</h2>
// 					<div className="space-y-2">
// 						{experience.map((exp, idx) => (
// 							<div key={exp.id || idx}>
// 								<div className="flex items-baseline justify-between text-[10.5pt] text-black">
// 									<span className="flex  gap-2">
// 										<span className="font-bold">
// 											{exp.role} – {exp.company}
// 										</span>
// 										(
// 										{exp.location && (
// 											<span className="text-[10.5pt]  text-black ">
// 												{exp.location}
// 											</span>
// 										)}
// 										)
// 									</span>
// 									<span className="font-bold">
// 										{exp.startDate} – {exp.current ? "Present" : exp.endDate}
// 									</span>
// 								</div>

// 								{exp.description && (
// 									<div className="mt-0.5 space-y-0.5 text-[10.5pt] leading-snug text-black border-b border-black">
// 										{exp.description
// 											.split("\n")
// 											.filter((line) => line.trim().length > 0)
// 											.map((point, pIdx) => (
// 												<div key={pIdx} className="flex items-start ">
// 													<span className="mr-1.5">•</span>
// 													<span>{point.replace(/^•\s*/, "")}</span>
// 												</div>
// 											))}
// 									</div>
// 								)}
// 							</div>
// 						))}
// 					</div>
// 				</section>
// 			)}

// 			{/* 5. Projects */}
// 			{projects.length > 0 && (
// 				<section className="mb-[1px]">
// 					<h2 className="text-[12pt] font-bold uppercase text-black  pb-0.5">
// 						PROJECTS
// 					</h2>
// 					<div className="space-y-2 border-b border-black">
// 						{projects.map((proj, idx) => (
// 							<div key={proj.id || idx}>
// 								<div className="text-[10.5pt]  text-black">
// 									<span className="font-bold">{proj.name}</span>
// 									{proj.technologies && (
// 										<span className=" text-black"> – {proj.technologies}</span>
// 									)}
// 								</div>

// 								{proj.description && (
// 									<div className="mt-0.5 space-y-0.5 text-[10.5pt] leading-snug text-black">
// 										{proj.description
// 											.split("\n")
// 											.filter((line) => line.trim().length > 0)
// 											.map((line, pIdx) => (
// 												<div key={pIdx} className="flex items-start">
// 													<span className="mr-1.5">•</span>
// 													<span>{line.replace(/^•\s*/, "")}</span>
// 												</div>
// 											))}
// 									</div>
// 								)}
// 							</div>
// 						))}
// 					</div>
// 				</section>
// 			)}

// 			{/* 6. Certifications */}

// 			{/* 7. Education */}
// 			{/* 7. Education */}
// 			{education.length > 0 && (
// 				<section className="mb-[1px]">
// 					<h2 className="text-[12pt] font-bold uppercase text-black  pb-0.5">
// 						EDUCATION
// 					</h2>
// 					<div className="space-y-1.5 text-[10.5pt] text-black border-b border-black">
// 						{education.map((edu, idx) => (
// 							<div key={edu.id || idx}>
// 								{/* Top Line: Institution - Degree in Field */}
// 								<div>
// 									<span className="font-bold">{edu.institution}</span>
// 									{(edu.degree || edu.fieldOfStudy) && (
// 										<span>
// 											{" "}
// 											– {edu.degree}
// 											{edu.fieldOfStudy ? ` in ${edu.fieldOfStudy}` : ""}
// 										</span>
// 									)}
// 								</div>

// 								{/* Sub-line (Left-aligned): Location | Year – Year | GPA */}
// 								<div className="flex items-center gap-1.5 text-[10.5pt]">
// 									{edu.location && <span>{edu.location}</span>}
// 									{edu.location && (edu.startDate || edu.endDate) && (
// 										<span className="font-normal text-black select-none">
// 											|
// 										</span>
// 									)}
// 									{(edu.startDate || edu.endDate) && (
// 										<span className="font-bold text-black">
// 											{edu.startDate} – {edu.endDate}
// 										</span>
// 									)}
// 									{edu.score && (
// 										<>
// 											<span className="font-normal text-black select-none">
// 												|
// 											</span>
// 											<span className="text-black">
// 												GPA / Score: {edu.score}
// 											</span>
// 										</>
// 									)}
// 								</div>
// 							</div>
// 						))}
// 					</div>
// 				</section>
// 			)}

// 			{certificates && certificates.length > 0 && (
// 				<section className="mb-2">
// 					<h2 className="text-[12pt] font-bold uppercase text-black  pb-0.5 ">
// 						CERTIFICATIONS
// 					</h2>
// 					<div className="space-y-1 text-[10.5pt] text-black mb-[1px]">
// 						{certificates.map((cert, idx) => (
// 							<div
// 								key={cert.id || idx}
// 								className="flex items-baseline justify-between"
// 							>
// 								<div>
// 									<span className="font-bold">{cert.name}</span>
// 									{cert.issuer && <span> – {cert.issuer}</span>}
// 									{cert.credentialId && (
// 										<span className="text-slate-600 text-xs">
// 											{" "}
// 											(ID: {cert.credentialId})
// 										</span>
// 									)}
// 									{cert.credentialUrl && (
// 										<a
// 											href={
// 												cert.credentialUrl.startsWith("http")
// 													? cert.credentialUrl
// 													: `https://${cert.credentialUrl}`
// 											}
// 											target="_blank"
// 											rel="noreferrer"
// 											className="ml-1.5 text-[#121ec4] text-xs"
// 										>
// 											[View Certificate]
// 										</a>
// 									)}
// 								</div>
// 								{(cert.issueDate || cert.expirationDate) && (
// 									<span className="font-bold text-[10pt] text-black shrink-0 ml-2">
// 										{cert.issueDate}
// 										{cert.expirationDate && !cert.doesNotExpire
// 											? ` – ${cert.expirationDate}`
// 											: ""}
// 									</span>
// 								)}
// 							</div>
// 						))}
// 					</div>
// 				</section>
// 			)}
// 		</div>
// 	);
// };

// export default ClassicTemplate;

'use client';

import React from 'react';
import type { ResumeData } from '@/types/resume';

interface ClassicTemplateProps {
	data: ResumeData;
}

export const ClassicTemplate: React.FC<ClassicTemplateProps> = ({ data }) => {
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

	// Build contact links array separated by pipes
	const contactLinks: React.ReactNode[] = [];

	if (personal.phone) {
		contactLinks.push(<span key="phone">{personal.phone}</span>);
	}

	if (personal.email) {
		contactLinks.push(
			<a key="email" href={`mailto:${personal.email}`} className="text-[#1d4ed8]">
				{personal.email}
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
				className="text-[#1d4ed8]"
			>
				{personal.github}
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
				className="text-[#1d4ed8]"
			>
				{personal.linkedin}
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
				className="text-[#1d4ed8]"
			>
				{personal.website}
			</a>,
		);
	}

	if (personal.location) {
		contactLinks.push(<span key="location">{personal.location}</span>);
	}

	return (
		<div
			className="w-full bg-white text-black leading-tight box-border px-[12mm] py-[10mm] print:p-0 print:m-0"
			style={{
				fontFamily: 'Arial, Helvetica, sans-serif',
				wordBreak: 'break-word',
				overflowWrap: 'break-word',
			}}
		>
			{/* 1. Header */}
			<header className="border-b border-black pb-1 mb-[1px] break-inside-avoid">
				<h1 className="text-[20pt] font-bold uppercase tracking-tight text-black leading-none">
					{personal.fullName || 'YOUR NAME'}
				</h1>

				{personal.jobTitle && (
					<p className="text-[11pt] uppercase text-black ">{personal.jobTitle}</p>
				)}

				{contactLinks.length > 0 && (
					<div className="flex flex-wrap items-center text-[10pt]  text-black ">
						{contactLinks.map((item, idx) => (
							<React.Fragment key={idx}>
								<span className="whitespace-nowrap inline-flex items-center">{item}</span>
								{idx < contactLinks.length - 1 && (
									<span className="mx-1.5 font-normal text-black ">|</span>
								)}
							</React.Fragment>
						))}
					</div>
				)}
			</header>

			{/* 2. Professional Summary */}
			{personal.summary && (
				<section className="mb-[1px] break-inside-avoid border-b border-black pb-[3px]">
					<h2 className="text-[11.5pt] font-bold uppercase text-black ">PROFESSIONAL SUMMARY</h2>
					<p className="text-[10pt] leading-[1.25] text-black">{personal.summary}</p>
				</section>
			)}

			{/* 3. Skills & Competencies */}
			{skills.length > 0 && (
				<section className="mb-[1px] break-inside-avoid">
					<h2 className="text-[11.5pt] font-bold uppercase text-black">SKILLS & COMPETENCIES</h2>
					<div className=" text-[10pt] text-black border-b border-black">
						{skills.map((item: any, idx: number) => {
							if (typeof item === 'object' && item !== null) {
								const categoryTitle = item.category || 'Skills';
								const skillsList = Array.isArray(item.skills)
									? item.skills.filter(Boolean).join(', ')
									: item.skills;

								if (!skillsList || skillsList.trim().length === 0) return null;

								return (
									<div key={item.id || idx} className="flex items-start">
										<span className="mr-1.5 font-bold">•</span>
										<p className="leading-snug">
											<strong className="font-bold text-black">{categoryTitle}: </strong>
											<span className="text-black">{skillsList}</span>
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
											<span className="mr-1.5 font-bold">•</span>
											<p className="leading-snug">
												<strong className="font-bold text-black">{category.trim()}: </strong>
												<span className="text-black">{skillsList?.trim()}</span>
											</p>
										</div>
									);
								}

								return (
									<div key={idx} className="flex items-start">
										<span className="mr-1.5 font-bold">•</span>
										<span className="text-black">{item}</span>
									</div>
								);
							}

							return null;
						})}
					</div>
				</section>
			)}

			{/* 4. Experience */}
			{experience.length > 0 && (
				<section className="mb-[1px]">
					<h2 className="text-[11.5pt] font-bold uppercase text-black ">EXPERIENCE</h2>
					<div className="">
						{experience.map((exp, idx) => (
							<div key={exp.id || idx} className="break-inside-avoid">
								<div className="flex items-baseline justify-between text-[10pt] text-black">
									<span className="font-bold">
										{exp.role} – {exp.company}
										{exp.location && <span className="font-normal"> ({exp.location})</span>}
									</span>
									<span className="font-bold shrink-0 ml-2">
										{exp.startDate} – {exp.current ? 'Present' : exp.endDate}
									</span>
								</div>

								{exp.description && (
									<div className="mt-0.3   text-[10pt]  text-black  border-b border-black pb-[2px]">
										{exp.description
											.split('\n')
											.filter((line) => line.trim().length > 0)
											.map((point, pIdx) => (
												<div key={pIdx} className="flex items-start">
													<span className="mr-1.5">•</span>
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
			{projects.length > 0 && (
				<section className="border-b border-black pb-[2px] ">
					<h2 className="text-[11.5pt] font-bold uppercase text-black">PROJECTS</h2>
					<div className="space-y-0.5">
						{projects.map((proj, idx) => (
							<div key={proj.id || idx} className="break-inside-avoid">
								<div className="text-[10pt] text-black">
									<span className="font-bold">{proj.name}</span>
									{proj.technologies && <span className="text-black"> – {proj.technologies}</span>}
								</div>

								{proj.description && (
									<div className="  text-[10pt]  text-black ">
										{proj.description
											.split('\n')
											.filter((line) => line.trim().length > 0)
											.map((line, pIdx) => (
												<div key={pIdx} className="flex items-start">
													<span className="mr-1.5">•</span>
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
				<section className="border-b border-black  pb-[2px] ">
					<h2 className="text-[11.5pt] font-bold uppercase text-black ">EDUCATION</h2>
					<div className="space-y-0.5 text-[10pt] text-black ">
						{education.map((edu, idx) => (
							<div key={edu.id || idx} className="break-inside-avoid">
								{/* Top Line: Institution - Degree in Field */}
								<div>
									<span className="font-bold">{edu.institution}</span>
									{(edu.degree || edu.fieldOfStudy) && (
										<span>
											{' '}
											– {edu.degree}
											{edu.fieldOfStudy ? ` in ${edu.fieldOfStudy}` : ''}
										</span>
									)}
								</div>

								{/* Sub-line: Location | Year – Year | GPA */}
								<div className="flex items-center gap-1.5 text-[10pt]">
									{edu.location && <span>{edu.location}</span>}
									{edu.location && (edu.startDate || edu.endDate) && (
										<span className="font-normal text-black select-none">|</span>
									)}
									{(edu.startDate || edu.endDate) && (
										<span className="font-bold text-black">
											{edu.startDate} – {edu.endDate}
										</span>
									)}
									{edu.score && (
										<>
											<span className="font-normal text-black select-none">|</span>
											<span className="text-black">GPA / Score: {edu.score}</span>
										</>
									)}
								</div>
							</div>
						))}
					</div>
				</section>
			)}

			{/* 7. Certifications */}
			{certificates && certificates.length > 0 && (
				<section className="">
					<h2 className="text-[11.5pt] font-bold uppercase text-black pb-13px]">CERTIFICATIONS</h2>
					<div className=" text-[10pt] text-black">
						{certificates.map((cert, idx) => (
							<div
								key={cert.id || idx}
								className="flex items-baseline justify-between break-inside-avoid"
							>
								<div>
									<span className="font-bold">{cert.name}</span>
									{cert.issuer && <span> – {cert.issuer}</span>}
									{cert.credentialId && (
										<span className="text-slate-600 text-xs"> (ID: {cert.credentialId})</span>
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
											className="ml-1.5 text-[#121ec4] text-xs"
										>
											[View Certificate]
										</a>
									)}
								</div>
								{(cert.issueDate || cert.expirationDate) && (
									<span className="font-bold text-[9.5pt] text-black shrink-0 ml-2">
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

export default ClassicTemplate;
