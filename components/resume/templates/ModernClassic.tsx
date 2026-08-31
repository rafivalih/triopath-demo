// // 'use client';

// // import React from 'react';
// // import { ResumeData } from '@/types/resume';

// // export const ModernClassic: React.FC<{ data: ResumeData }> = ({ data }) => {
// //   const {
// //     personal = {
// //       fullName: '',
// //       jobTitle: '',
// //       email: '',
// //       phone: '',
// //       location: '',
// //       website: '',
// //       linkedin: '',
// //       github: '',
// //       summary: '',
// //     },
// //     experience = [],
// //     education = [],
// //     skills = [],
// //     projects = [],
// //   } = data || {};

// //   // Build top contact info list separated by pipes
// //   const contactItems: React.ReactNode[] = [];

// //   if (personal.phone) {
// //     contactItems.push(<span key="phone">{personal.phone}</span>);
// //   }
// //   if (personal.email) {
// //     contactItems.push(
// //       <a
// //         key="email"
// //         href={`mailto:${personal.email}`}
// //         className="text-[#0056b3] underline hover:text-blue-800"
// //       >
// //         {personal.email}
// //       </a>
// //     );
// //   }
// //   if (personal.linkedin) {
// //     contactItems.push(
// //       <a
// //         key="linkedin"
// //         href={personal.linkedin.startsWith('http') ? personal.linkedin : `https://${personal.linkedin}`}
// //         target="_blank"
// //         rel="noreferrer"
// //         className="text-[#0056b3] underline hover:text-blue-800"
// //       >
// //         {personal.linkedin}
// //       </a>
// //     );
// //   }
// //   if (personal.github) {
// //     contactItems.push(
// //       <a
// //         key="github"
// //         href={personal.github.startsWith('http') ? personal.github : `https://${personal.github}`}
// //         target="_blank"
// //         rel="noreferrer"
// //         className="text-[#0056b3] underline hover:text-blue-800"
// //       >
// //         {personal.github}
// //       </a>
// //     );
// //   }
// //   if (personal.website) {
// //     contactItems.push(
// //       <a
// //         key="website"
// //         href={personal.website.startsWith('http') ? personal.website : `https://${personal.website}`}
// //         target="_blank"
// //         rel="noreferrer"
// //         className="text-[#0056b3] underline hover:text-blue-800"
// //       >
// //         {personal.website}
// //       </a>
// //     );
// //   }
// //   if (personal.location) {
// //     contactItems.push(<span key="location">{personal.location}</span>);
// //   }

// //   return (
// //     <div
// //       className="min-h-[297mm] w-full bg-white p-[18mm] text-black leading-tight"
// //       style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}
// //     >
// //       {/* 1. HEADER */}
// //       <header className="border-b-[1.5px] border-black pb-1.5">
// //         {/* Full Name: 18pt Bold Uppercase */}
// //         <h1 className="text-[18pt] font-bold uppercase tracking-tight text-black">
// //           {personal.fullName || 'YOUR NAME'}
// //         </h1>

// //         {/* Job Title: 11pt Bold Uppercase */}
// //         {personal.jobTitle && (
// //           <p className="mt-0.5 text-[11pt] font-bold uppercase text-black">
// //             {personal.jobTitle}
// //           </p>
// //         )}

// //         {/* Contact Links: 11pt */}
// //         {contactItems.length > 0 && (
// //           <div className="mt-1 flex flex-wrap items-center text-[11pt] leading-normal text-black">
// //             {contactItems.map((item, idx) => (
// //               <React.Fragment key={idx}>
// //                 {item}
// //                 {idx < contactItems.length - 1 && (
// //                   <span className="mx-1.5 font-normal text-black">|</span>
// //                 )}
// //               </React.Fragment>
// //             ))}
// //           </div>
// //         )}
// //       </header>

// //       {/* 2. PROFESSIONAL SUMMARY */}
// //       {personal.summary && (
// //         <section className="mt-3">
// //           <h2 className="border-b-[1.5px] border-black pb-0.5 text-[12pt] font-bold uppercase text-black">
// //             PROFESSIONAL SUMMARY
// //           </h2>
// //           <p className="mt-1.5 text-[11pt] leading-relaxed text-black">
// //             {personal.summary}
// //           </p>
// //         </section>
// //       )}

// //       {/* 3. SKILLS & COMPETENCIES */}
// //       {skills.length > 0 && (
// //         <section className="mt-3">
// //           <h2 className="border-b-[1.5px] border-black pb-0.5 text-[12pt] font-bold uppercase text-black">
// //             SKILLS & COMPETENCIES
// //           </h2>
// //           <div className="mt-1.5 space-y-1 text-[11pt] leading-snug text-black">
// //             {skills.map((skill, idx) => {
// //               // Supports either "Category: items" format or standard string items
// //               const hasColon = skill.includes(':');
// //               if (hasColon) {
// //                 const [category, items] = skill.split(/:(.+)/);
// //                 return (
// //                   <div key={idx} className="flex items-start">
// //                     <span className="mr-1.5">•</span>
// //                     <div>
// //                       <strong className="font-bold text-black">{category}:</strong>
// //                       <span className="text-black">{items}</span>
// //                     </div>
// //                   </div>
// //                 );
// //               }
// //               return (
// //                 <div key={idx} className="flex items-start">
// //                   <span className="mr-1.5">•</span>
// //                   <span className="text-black">{skill}</span>
// //                 </div>
// //               );
// //             })}
// //           </div>
// //         </section>
// //       )}

// //       {/* 4. PROJECTS */}
// //       {projects.length > 0 && (
// //         <section className="mt-3">
// //           <h2 className="border-b-[1.5px] border-black pb-0.5 text-[12pt] font-bold uppercase text-black">
// //             PROJECTS
// //           </h2>
// //           <div className="mt-2 space-y-3">
// //             {projects.map((proj, idx) => (
// //               <div key={proj.id || idx}>
// //                 <div className="text-[11pt] font-bold text-black">
// //                   <span>{proj.name}</span>
// //                   {proj.technologies && (
// //                     <span className="font-bold text-black">
// //                       {' '}
// //                       – {proj.technologies}
// //                     </span>
// //                   )}
// //                 </div>

// //                 {proj.description && (
// //                   <div className="mt-1 space-y-0.5 text-[11pt] leading-snug text-black">
// //                     {proj.description
// //                       .split('\n')
// //                       .filter((line) => line.trim().length > 0)
// //                       .map((line, lIdx) => (
// //                         <div key={lIdx} className="flex items-start">
// //                           <span className="mr-1.5">•</span>
// //                           <span className="text-black">{line.replace(/^•\s*/, '')}</span>
// //                         </div>
// //                       ))}
// //                   </div>
// //                 )}
// //               </div>
// //             ))}
// //           </div>
// //         </section>
// //       )}

// //       {/* 5. EXPERIENCE */}
// //       {experience.length > 0 && (
// //         <section className="mt-3">
// //           <h2 className="border-b-[1.5px] border-black pb-0.5 text-[12pt] font-bold uppercase text-black">
// //             EXPERIENCE
// //           </h2>
// //           <div className="mt-2 space-y-3">
// //             {experience.map((exp, idx) => (
// //               <div key={exp.id || idx}>
// //                 <div className="flex items-center justify-between text-[11pt] text-black">
// //                   <span className="font-bold">
// //                     {exp.role} – {exp.company}
// //                   </span>
// //                   <span className="font-bold">
// //                     {exp.startDate} – {exp.current ? 'Present' : exp.endDate}
// //                   </span>
// //                 </div>

// //                 {exp.location && (
// //                   <div className="text-[11pt] text-black italic">
// //                     {exp.location}
// //                   </div>
// //                 )}

// //                 {exp.description && (
// //                   <div className="mt-1 space-y-0.5 text-[11pt] leading-snug text-black">
// //                     {exp.description
// //                       .split('\n')
// //                       .filter((line) => line.trim().length > 0)
// //                       .map((line, lIdx) => (
// //                         <div key={lIdx} className="flex items-start">
// //                           <span className="mr-1.5">•</span>
// //                           <span className="text-black">{line.replace(/^•\s*/, '')}</span>
// //                         </div>
// //                       ))}
// //                   </div>
// //                 )}
// //               </div>
// //             ))}
// //           </div>
// //         </section>
// //       )}

// //       {/* 6. EDUCATION */}
// //       {education.length > 0 && (
// //         <section className="mt-3">
// //           <h2 className="border-b-[1.5px] border-black pb-0.5 text-[12pt] font-bold uppercase text-black">
// //             EDUCATION
// //           </h2>
// //           <div className="mt-2 space-y-2 text-[11pt] text-black">
// //             {education.map((edu, idx) => (
// //               <div key={edu.id || idx}>
// //                 <div className="font-bold">
// //                   {edu.institution}{' '}
// //                   {edu.degree && (
// //                     <span className="font-normal">
// //                       - {edu.degree}
// //                       {edu.fieldOfStudy ? ` in ${edu.fieldOfStudy}` : ''}
// //                     </span>
// //                   )}
// //                 </div>
// //                 <div className="flex justify-between">
// //                   <span>{edu.score ? `GPA / Score: ${edu.score}` : ''}</span>
// //                   <span className="font-bold">
// //                     {edu.startDate} – {edu.endDate}
// //                   </span>
// //                 </div>
// //               </div>
// //             ))}
// //           </div>
// //         </section>
// //       )}
// //     </div>
// //   );
// // };

// // export default ModernClassic;

// "use client";

// import React from "react";
// import {
//   Mail,
//   Phone,
//   MapPin,
//   Linkedin,
//   Github,
//   Code,
//   ExternalLink,
// } from "lucide-react";
// import { ResumeData } from "@/types/resume";

// interface ModernTemplateProps {
//   data: ResumeData;
// }

// export const ModernTemplate: React.FC<ModernTemplateProps> = ({ data }) => {
//   const {
//     personal = {
//       fullName: "",
//       jobTitle: "",
//       email: "",
//       phone: "",
//       location: "",
//       website: "",
//       linkedin: "",
//       github: "",
//       summary: "",
//     },
//     experience = [],
//     education = [],
//     skills = [],
//     projects = [],
//   } = data || {};

//   return (
//     <div
//       className="min-h-[297mm] w-full bg-white font-sans text-sm leading-relaxed text-gray-800"
//       style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
//     >
//       {/* 1. Header with Dark Slate Accent */}
//       <header className="mb-6 bg-slate-800 p-6 text-center text-white">
//         <h1 className="mb-1 text-2xl font-bold uppercase tracking-tight text-white">
//           {personal.fullName || "Your Name"}
//         </h1>
//         <p className="mb-4 text-base font-medium uppercase text-slate-300">
//           {personal.jobTitle || "Professional Title"}
//         </p>

//         <div className="flex flex-wrap justify-center gap-2 text-xs text-slate-300">
//           {personal.phone && (
//             <span className="flex items-center gap-1.5 rounded bg-slate-700/60 px-2.5 py-1">
//               <Phone className="h-3 w-3" />
//               <a
//                 href={`tel:${personal.phone.replace(/\s+/g, "")}`}
//                 className="hover:text-white"
//               >
//                 {personal.phone}
//               </a>
//             </span>
//           )}
//           {personal.email && (
//             <span className="flex items-center gap-1.5 rounded bg-slate-700/60 px-2.5 py-1">
//               <Mail className="h-3 w-3" />
//               <a
//                 href={`mailto:${personal.email}`}
//                 className="hover:text-white"
//               >
//                 {personal.email}
//               </a>
//             </span>
//           )}
//           {personal.linkedin && (
//             <span className="flex items-center gap-1.5 rounded bg-slate-700/60 px-2.5 py-1">
//               <Linkedin className="h-3 w-3" />
//               <a
//                 href={
//                   personal.linkedin.startsWith("http")
//                     ? personal.linkedin
//                     : `https://${personal.linkedin}`
//                 }
//                 target="_blank"
//                 rel="noreferrer"
//                 className="hover:text-white"
//               >
//                 {personal.linkedin}
//               </a>
//             </span>
//           )}
//           {personal.github && (
//             <span className="flex items-center gap-1.5 rounded bg-slate-700/60 px-2.5 py-1">
//               <Github className="h-3 w-3" />
//               <a
//                 href={
//                   personal.github.startsWith("http")
//                     ? personal.github
//                     : `https://${personal.github}`
//                 }
//                 target="_blank"
//                 rel="noreferrer"
//                 className="hover:text-white"
//               >
//                 {personal.github}
//               </a>
//             </span>
//           )}
//           {personal.website && (
//             <span className="flex items-center gap-1.5 rounded bg-slate-700/60 px-2.5 py-1">
//               <Code className="h-3 w-3" />
//               <a
//                 href={
//                   personal.website.startsWith("http")
//                     ? personal.website
//                     : `https://${personal.website}`
//                 }
//                 target="_blank"
//                 rel="noreferrer"
//                 className="hover:text-white"
//               >
//                 {personal.website}
//               </a>
//             </span>
//           )}
//           {personal.location && (
//             <span className="flex items-center gap-1.5 rounded bg-slate-700/60 px-2.5 py-1">
//               <MapPin className="h-3 w-3" /> {personal.location}
//             </span>
//           )}
//         </div>
//       </header>

//       <div className="px-6 pb-6">
//         {/* 2. Professional Summary */}
//         {personal.summary && (
//           <section className="mb-6">
//             <h2 className="mb-2 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-800">
//               <span className="h-0.5 w-8 bg-slate-800"></span>
//               Professional Summary
//             </h2>
//             <p className="text-xs leading-relaxed text-gray-600">
//               {personal.summary}
//             </p>
//           </section>
//         )}

//         {/* 3. Two-Column Layout (2/3 Main + 1/3 Sidebar) */}
//         <div className="grid grid-cols-3 gap-6">
//           {/* Main Left Column: Projects & Experience */}
//           <div className="col-span-2 space-y-6">
//             {/* Experience */}
//             {experience.length > 0 && (
//               <section>
//                 <h2 className="mb-3 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-800">
//                   <span className="h-0.5 w-8 bg-slate-800"></span>
//                   Experience
//                 </h2>
//                 <div className="space-y-4">
//                   {experience.map((exp, idx) => (
//                     <div
//                       key={exp.id || idx}
//                       className="relative border-l-2 border-slate-200 pl-4"
//                     >
//                       <div className="absolute -left-[5px] top-1.5 h-2 w-2 rounded-full bg-slate-800"></div>
//                       <div className="mb-1 flex items-baseline justify-between">
//                         <h3 className="text-xs font-bold text-gray-900">
//                           {exp.role}
//                         </h3>
//                         <span className="rounded bg-slate-100 px-2 py-0.5 text-[10px] font-medium text-slate-500">
//                           {exp.startDate} -{" "}
//                           {exp.current ? "Present" : exp.endDate}
//                         </span>
//                       </div>
//                       <p className="mb-1.5 text-xs font-semibold text-slate-600">
//                         {exp.company}{" "}
//                         {exp.location ? `• ${exp.location}` : ""}
//                       </p>

//                       {exp.description && (
//                         <ul className="space-y-1 text-xs text-gray-600">
//                           {exp.description
//                             .split("\n")
//                             .filter((line) => line.trim().length > 0)
//                             .map((point, pIdx) => (
//                               <li key={pIdx} className="flex items-start gap-1.5">
//                                 <span className="text-slate-400">▸</span>
//                                 <span>{point.replace(/^•\s*/, "")}</span>
//                               </li>
//                             ))}
//                         </ul>
//                       )}
//                     </div>
//                   ))}
//                 </div>
//               </section>
//             )}

//             {/* Projects */}
//             {projects.length > 0 && (
//               <section>
//                 <h2 className="mb-3 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-800">
//                   <span className="h-0.5 w-8 bg-slate-800"></span>
//                   Projects
//                 </h2>
//                 <div className="space-y-4">
//                   {projects.map((proj, idx) => (
//                     <div key={proj.id || idx}>
//                       <div className="mb-1 flex items-center gap-2">
//                         <h3 className="text-xs font-bold text-gray-900">
//                           {proj.name}
//                         </h3>
//                         {proj.technologies && (
//                           <span className="text-[11px] text-slate-500">
//                             – {proj.technologies}
//                           </span>
//                         )}
//                         {proj.link && (
//                           <span className="flex items-center gap-0.5 text-[11px] text-blue-600">
//                             <ExternalLink className="h-3 w-3" />
//                             <a
//                               href={
//                                 proj.link.startsWith("http")
//                                   ? proj.link
//                                   : `https://${proj.link}`
//                               }
//                               target="_blank"
//                               rel="noreferrer"
//                               className="hover:underline"
//                             >
//                               Demo
//                             </a>
//                           </span>
//                         )}
//                       </div>

//                       {proj.description && (
//                         <ul className="space-y-1 text-xs text-gray-600">
//                           {proj.description
//                             .split("\n")
//                             .filter((line) => line.trim().length > 0)
//                             .map((point, pIdx) => (
//                               <li key={pIdx} className="flex items-start gap-1.5">
//                                 <span className="text-slate-400">▸</span>
//                                 <span>{point.replace(/^•\s*/, "")}</span>
//                               </li>
//                             ))}
//                         </ul>
//                       )}
//                     </div>
//                   ))}
//                 </div>
//               </section>
//             )}
//           </div>

//           {/* Right Sidebar: Education & Skills */}
//           <div className="space-y-6">
//             {/* Education */}
//             {education.length > 0 && (
//               <section>
//                 <h2 className="mb-3 text-xs font-bold uppercase tracking-wider text-slate-800">
//                   Education
//                 </h2>
//                 <div className="space-y-2.5">
//                   {education.map((edu, idx) => (
//                     <div
//                       key={edu.id || idx}
//                       className="rounded-lg bg-slate-50 p-3"
//                     >
//                       <h3 className="text-xs font-bold text-gray-900">
//                         {edu.institution}
//                       </h3>
//                       <p className="text-xs text-slate-600">
//                         {edu.degree}
//                         {edu.fieldOfStudy ? ` in ${edu.fieldOfStudy}` : ""}
//                       </p>
//                       <p className="mt-1 text-[11px] text-slate-500">
//                         {edu.startDate} - {edu.endDate}{" "}
//                         {edu.score && `• ${edu.score}`}
//                       </p>
//                     </div>
//                   ))}
//                 </div>
//               </section>
//             )}

//             {/* Skills & Competencies */}
//             {skills.length > 0 && (
//               <section>
//                 <h2 className="mb-3 text-xs font-bold uppercase tracking-wider text-slate-800">
//                   Skills & Competencies
//                 </h2>
//                 <div className="space-y-3">
//                   {skills.map((skill, idx) => {
//                     const hasColon = skill.includes(":");
//                     if (hasColon) {
//                       const [category, items] = skill.split(/:(.+)/);
//                       const tags = items
//                         ? items.split(",").map((s) => s.trim()).filter(Boolean)
//                         : [];
//                       return (
//                         <div key={idx}>
//                           <p className="mb-1.5 text-[11px] font-bold text-slate-700">
//                             {category}
//                           </p>
//                           <div className="flex flex-wrap gap-1">
//                             {tags.map((tag, tIdx) => (
//                               <span
//                                 key={tIdx}
//                                 className="rounded bg-slate-800 px-2 py-0.5 text-[10px] font-medium text-white"
//                               >
//                                 {tag}
//                               </span>
//                             ))}
//                           </div>
//                         </div>
//                       );
//                     }

//                     return (
//                       <span
//                         key={idx}
//                         className="mr-1 mb-1 inline-block rounded bg-slate-800 px-2 py-0.5 text-[10px] font-medium text-white"
//                       >
//                         {skill}
//                       </span>
//                     );
//                   })}
//                 </div>
//               </section>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ModernTemplate;

'use client';

import { Code, ExternalLink, Github, Linkedin, Mail, MapPin, Phone } from 'lucide-react';
import type React from 'react';
import type { ResumeData } from '@/types/resume';

interface ModernTemplateProps {
	data: ResumeData;
}

export const ModernTemplate: React.FC<ModernTemplateProps> = ({ data }) => {
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
	} = data || {};

	return (
		<div
			className="min-h-[297mm] w-full bg-white font-sans text-sm leading-relaxed text-gray-800"
			style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}
		>
			{/* 1. Header with Dark Slate Accent */}
			<header className="mb-6 bg-slate-800 p-6 text-center text-white">
				<h1 className="mb-1 text-2xl font-bold uppercase tracking-tight text-white">
					{personal.fullName || 'Your Name'}
				</h1>
				<p className="mb-4 text-base font-medium uppercase text-slate-300">
					{personal.jobTitle || 'Professional Title'}
				</p>

				<div className="flex flex-wrap justify-center gap-2 text-xs text-slate-300">
					{personal.phone && (
						<span className="flex items-center gap-1.5 rounded bg-slate-700/60 px-2.5 py-1">
							<Phone className="h-3 w-3" />
							<a href={`tel:${personal.phone.replace(/\s+/g, '')}`} className="hover:text-white">
								{personal.phone}
							</a>
						</span>
					)}
					{personal.email && (
						<span className="flex items-center gap-1.5 rounded bg-slate-700/60 px-2.5 py-1">
							<Mail className="h-3 w-3" />
							<a href={`mailto:${personal.email}`} className="hover:text-white">
								{personal.email}
							</a>
						</span>
					)}
					{personal.linkedin && (
						<span className="flex items-center gap-1.5 rounded bg-slate-700/60 px-2.5 py-1">
							<Linkedin className="h-3 w-3" />
							<a
								href={
									personal.linkedin.startsWith('http')
										? personal.linkedin
										: `https://${personal.linkedin}`
								}
								target="_blank"
								rel="noreferrer"
								className="hover:text-white"
							>
								{personal.linkedin}
							</a>
						</span>
					)}
					{personal.github && (
						<span className="flex items-center gap-1.5 rounded bg-slate-700/60 px-2.5 py-1">
							<Github className="h-3 w-3" />
							<a
								href={
									personal.github.startsWith('http')
										? personal.github
										: `https://${personal.github}`
								}
								target="_blank"
								rel="noreferrer"
								className="hover:text-white"
							>
								{personal.github}
							</a>
						</span>
					)}
					{personal.website && (
						<span className="flex items-center gap-1.5 rounded bg-slate-700/60 px-2.5 py-1">
							<Code className="h-3 w-3" />
							<a
								href={
									personal.website.startsWith('http')
										? personal.website
										: `https://${personal.website}`
								}
								target="_blank"
								rel="noreferrer"
								className="hover:text-white"
							>
								{personal.website}
							</a>
						</span>
					)}
					{personal.location && (
						<span className="flex items-center gap-1.5 rounded bg-slate-700/60 px-2.5 py-1">
							<MapPin className="h-3 w-3" /> {personal.location}
						</span>
					)}
				</div>
			</header>

			<div className="px-6 pb-6">
				{/* 2. Professional Summary */}
				{personal.summary && (
					<section className="mb-6">
						<h2 className="mb-2 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-800">
							<span className="h-0.5 w-8 bg-slate-800"></span>
							Professional Summary
						</h2>
						<p className="text-xs leading-relaxed text-gray-600">{personal.summary}</p>
					</section>
				)}

				{/* 3. Two-Column Layout (2/3 Main + 1/3 Sidebar) */}
				<div className="grid grid-cols-3 gap-6">
					{/* Main Left Column: Experience & Projects */}
					<div className="col-span-2 space-y-6">
						{/* Experience */}
						{experience.length > 0 && (
							<section>
								<h2 className="mb-3 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-800">
									<span className="h-0.5 w-8 bg-slate-800"></span>
									Experience
								</h2>
								<div className="space-y-4">
									{experience.map((exp, idx) => (
										<div key={exp.id || idx} className="relative border-l-2 border-slate-200 pl-4">
											<div className="absolute -left-[5px] top-1.5 h-2 w-2 rounded-full bg-slate-800"></div>
											<div className="mb-1 flex items-baseline justify-between">
												<h3 className="text-xs font-bold text-gray-900">{exp.role}</h3>
												<span className="rounded bg-slate-100 px-2 py-0.5 text-[10px] font-medium text-slate-500">
													{exp.startDate} - {exp.current ? 'Present' : exp.endDate}
												</span>
											</div>
											<p className="mb-1.5 text-xs font-semibold text-slate-600">
												{exp.company} {exp.location ? `• ${exp.location}` : ''}
											</p>

											{exp.description && (
												<ul className="space-y-1 text-xs text-gray-600">
													{exp.description
														.split('\n')
														.filter((line) => line.trim().length > 0)
														.map((point, pIdx) => (
															<li key={pIdx} className="flex items-start gap-1.5">
																<span className="text-slate-400">▸</span>
																<span>{point.replace(/^•\s*/, '')}</span>
															</li>
														))}
												</ul>
											)}
										</div>
									))}
								</div>
							</section>
						)}

						{/* Projects */}
						{projects.length > 0 && (
							<section>
								<h2 className="mb-3 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-800">
									<span className="h-0.5 w-8 bg-slate-800"></span>
									Projects
								</h2>
								<div className="space-y-4">
									{projects.map((proj, idx) => (
										<div key={proj.id || idx}>
											<div className="mb-1 flex items-center gap-2">
												<h3 className="text-xs font-bold text-gray-900">{proj.name}</h3>
												{proj.technologies && (
													<span className="text-[11px] text-slate-500">– {proj.technologies}</span>
												)}
												{proj.link && (
													<span className="flex items-center gap-0.5 text-[11px] text-blue-600">
														<ExternalLink className="h-3 w-3" />
														<a
															href={
																proj.link.startsWith('http') ? proj.link : `https://${proj.link}`
															}
															target="_blank"
															rel="noreferrer"
															className="hover:underline"
														>
															Demo
														</a>
													</span>
												)}
											</div>

											{proj.description && (
												<ul className="space-y-1 text-xs text-gray-600">
													{proj.description
														.split('\n')
														.filter((line) => line.trim().length > 0)
														.map((point, pIdx) => (
															<li key={pIdx} className="flex items-start gap-1.5">
																<span className="text-slate-400">▸</span>
																<span>{point.replace(/^•\s*/, '')}</span>
															</li>
														))}
												</ul>
											)}
										</div>
									))}
								</div>
							</section>
						)}
					</div>

					{/* Right Sidebar: Education & Skills */}
					<div className="space-y-6">
						{/* Education */}
						{education.length > 0 && (
							<section>
								<h2 className="mb-3 text-xs font-bold uppercase tracking-wider text-slate-800">
									Education
								</h2>
								<div className="space-y-2.5">
									{education.map((edu, idx) => (
										<div key={edu.id || idx} className="rounded-lg bg-slate-50 p-3">
											<h3 className="text-xs font-bold text-gray-900">{edu.institution}</h3>
											<p className="text-xs text-slate-600">
												{edu.degree}
												{edu.fieldOfStudy ? ` in ${edu.fieldOfStudy}` : ''}
											</p>
											<p className="mt-1 text-[11px] text-slate-500">
												{edu.startDate} - {edu.endDate} {edu.score && `• ${edu.score}`}
											</p>
										</div>
									))}
								</div>
							</section>
						)}

						{/* Skills & Competencies */}
						{skills.length > 0 && (
							<section>
								<h2 className="mb-3 text-xs font-bold uppercase tracking-wider text-slate-800">
									Skills & Competencies
								</h2>
								<div className="space-y-3">
									{skills.map((item: any, idx: number) => {
										// Case 1: Structured Category Object ({ id, category, skills: string[] })
										if (typeof item === 'object' && item !== null) {
											const categoryTitle = item.category || 'Skills';
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
													<p className="mb-1.5 text-[11px] font-bold text-slate-700">
														{categoryTitle}
													</p>
													<div className="flex flex-wrap gap-1">
														{tags.map((tag: string, tIdx: number) => (
															<span
																key={tIdx}
																className="rounded bg-slate-800 px-2 py-0.5 text-[10px] font-medium text-white"
															>
																{tag}
															</span>
														))}
													</div>
												</div>
											);
										}

										// Case 2: String with Colon ("Programming: JS, Java")
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
													<p className="mb-1.5 text-[11px] font-bold text-slate-700">
														{category.trim()}
													</p>
													<div className="flex flex-wrap gap-1">
														{tags.map((tag, tIdx) => (
															<span
																key={tIdx}
																className="rounded bg-slate-800 px-2 py-0.5 text-[10px] font-medium text-white"
															>
																{tag}
															</span>
														))}
													</div>
												</div>
											);
										}

										// Case 3: Fallback Single Skill Badge
										return (
											<span
												key={idx}
												className="mr-1 mb-1 inline-block rounded bg-slate-800 px-2 py-0.5 text-[10px] font-medium text-white"
											>
												{typeof item === 'string' ? item : String(item)}
											</span>
										);
									})}
								</div>
							</section>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default ModernTemplate;
