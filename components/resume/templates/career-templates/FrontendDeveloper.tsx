'use client';

import React from 'react';
import { ResumeData } from '@/types/resume';

interface FrontendDeveloperProps {
  data: ResumeData;
}

export const FrontendDeveloper: React.FC<FrontendDeveloperProps> = ({ data }) => {
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
      className="w-full bg-white text-slate-900 leading-tight box-border px-[10mm] py-[10mm] print:p-0 print:m-0 font-sans text-[9pt]"
      style={{
        fontFamily: "'Inter', 'Plus Jakarta Sans', system-ui, sans-serif",
        wordBreak: 'break-word',
        overflowWrap: 'break-word',
      }}
    >
      {/* Outer Border Box */}
      <div className="border-2 border-slate-900 grid grid-cols-12 min-h-full">
        {/* ================= LEFT COLUMN (~35% / Col 4) ================= */}
        <aside className="col-span-4 border-r-2 border-slate-900 p-3.5 flex flex-col justify-between bg-white">
          <div>
            {/* Top: FRONTEND DEVELOPER Label & Contact */}
            <div className="mb-4">
              <div className="font-mono font-black text-[10pt] uppercase tracking-wider text-slate-950 leading-tight mb-3">
                FRONTEND
                <br />
                DEVELOPER
              </div>

              <div className="mb-2">
                <h3 className="font-mono font-bold uppercase tracking-wider text-[8.5pt] text-slate-900 mb-1.5">
                  CONTACT
                </h3>
                <div className="space-y-1 text-[8.5pt] text-slate-800">
                  {personal.email && (
                    <div>
                      <span className="font-semibold block text-slate-500 text-[7.5pt] uppercase">
                        Email
                      </span>
                      <a
                        href={`mailto:${personal.email}`}
                        className="hover:underline text-slate-900 truncate block font-medium"
                      >
                        {personal.email}
                      </a>
                    </div>
                  )}

                  {personal.phone && (
                    <div>
                      <span className="font-semibold block text-slate-500 text-[7.5pt] uppercase">
                        Phone
                      </span>
                      <span className="font-medium">{personal.phone}</span>
                    </div>
                  )}

                  {personal.location && (
                    <div>
                      <span className="font-semibold block text-slate-500 text-[7.5pt] uppercase">
                        Location
                      </span>
                      <span className="font-medium">{personal.location}</span>
                    </div>
                  )}

                  {personal.linkedin && (
                    <div>
                      <span className="font-semibold block text-slate-500 text-[7.5pt] uppercase">
                        LinkedIn
                      </span>
                      <a
                        href={
                          personal.linkedin.startsWith('http')
                            ? personal.linkedin
                            : `https://${personal.linkedin}`
                        }
                        target="_blank"
                        rel="noreferrer"
                        className="hover:underline text-slate-900 block font-medium"
                      >
                        {personal.linkedin.replace(/^https?:\/\/(www\.)?linkedin\.com\/in\/?/, '') ||
                          'Profile'}
                      </a>
                    </div>
                  )}

                  {personal.github && (
                    <div>
                      <span className="font-semibold block text-slate-500 text-[7.5pt] uppercase">
                        GitHub
                      </span>
                      <a
                        href={
                          personal.github.startsWith('http')
                            ? personal.github
                            : `https://${personal.github}`
                        }
                        target="_blank"
                        rel="noreferrer"
                        className="hover:underline text-slate-900 block font-medium"
                      >
                        {personal.github.replace(/^https?:\/\/(www\.)?github\.com\/?/, '') ||
                          'Profile'}
                      </a>
                    </div>
                  )}

                  {personal.website && (
                    <div>
                      <span className="font-semibold block text-slate-500 text-[7.5pt] uppercase">
                        Portfolio
                      </span>
                      <a
                        href={
                          personal.website.startsWith('http')
                            ? personal.website
                            : `https://${personal.website}`
                        }
                        target="_blank"
                        rel="noreferrer"
                        className="hover:underline text-slate-900 block font-medium"
                      >
                        {personal.website.replace(/^https?:\/\/(www\.)?/, '') || 'Portfolio'}
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Divider Line */}
            <div className="w-full border-t border-slate-900 my-3" />

            {/* Technical Skills */}
            {skills.length > 0 && (
              <div className="mb-4">
                <h3 className="font-mono font-bold uppercase tracking-wider text-[8.5pt] text-slate-900 mb-2">
                  TECHNICAL SKILLS
                </h3>
                <div className="space-y-2 text-[8.5pt]">
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
                        <div key={item.id || idx}>
                          <p className="font-semibold text-slate-600 text-[7.5pt] uppercase">
                            {categoryTitle}
                          </p>
                          <p className="font-medium text-slate-950 leading-snug">
                            {skillsList.join(', ')}
                          </p>
                        </div>
                      );
                    }

                    if (typeof item === 'string') {
                      const hasColon = item.includes(':');
                      if (hasColon) {
                        const [category, skillsList] = item.split(/:(.+)/);
                        return (
                          <div key={idx}>
                            <p className="font-semibold text-slate-600 text-[7.5pt] uppercase">
                              {category.trim()}
                            </p>
                            <p className="font-medium text-slate-950 leading-snug">
                              {skillsList?.trim()}
                            </p>
                          </div>
                        );
                      }

                      return (
                        <p key={idx} className="font-medium text-slate-950">
                          {item}
                        </p>
                      );
                    }

                    return null;
                  })}
                </div>
              </div>
            )}
          </div>

          <div>
            {/* Divider Line */}
            <div className="w-full border-t border-slate-900 my-3" />

            {/* Education Quick View */}
            {education.length > 0 && (
              <div className="mb-3">
                <h3 className="font-mono font-bold uppercase tracking-wider text-[8.5pt] text-slate-900 mb-1.5">
                  EDUCATION
                </h3>
                <div className="space-y-1.5 text-[8.5pt]">
                  {education.map((edu, idx) => (
                    <div key={edu.id || idx}>
                      <p className="font-bold text-slate-950 leading-tight">
                        {edu.degree || edu.fieldOfStudy || 'Degree'}
                      </p>
                      <p className="text-slate-600 text-[8pt]">{edu.institution}</p>
                      {(edu.startDate || edu.endDate) && (
                        <p className="text-slate-500 text-[7.5pt]">
                          {edu.startDate ? `${edu.startDate} – ` : ''}
                          {edu.endDate}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Certifications Quick View */}
            {certificates && certificates.length > 0 && (
              <div>
                <h3 className="font-mono font-bold uppercase tracking-wider text-[8.5pt] text-slate-900 mb-1.5">
                  CERTIFICATIONS
                </h3>
                <div className="space-y-1 text-[8pt]">
                  {certificates.map((cert, idx) => (
                    <div key={cert.id || idx}>
                      <p className="font-semibold text-slate-900 leading-tight">{cert.name}</p>
                      {cert.issuer && <p className="text-slate-500 text-[7.5pt]">{cert.issuer}</p>}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </aside>

        {/* ================= RIGHT COLUMN (~65% / Col 8) ================= */}
        <main className="col-span-8 flex flex-col justify-between bg-white">
          {/* SECTION 1: Header & Summary */}
          <div className="p-4 border-b-2 border-slate-900">
            <h1 className="text-[20pt] font-black uppercase tracking-tight text-slate-950 leading-none mb-1">
              {personal.fullName || 'FULL NAME'}
            </h1>
            <p className="text-[10pt] font-bold uppercase tracking-wider text-slate-700 font-mono mb-2.5">
              {personal.jobTitle || 'Frontend Developer'}
            </p>

            <div>
              <h2 className="font-mono font-bold uppercase tracking-wider text-[8.5pt] text-slate-900 mb-1">
                PROFESSIONAL SUMMARY
              </h2>
              <p className="text-[8.5pt] leading-relaxed text-slate-700 text-justify">
                {personal.summary ||
                  'Experienced Frontend Developer specializing in responsive design, state management, and modern component architectures.'}
              </p>
            </div>
          </div>

          {/* SECTION 2: Work Experience */}
          <div className="p-4 border-b-2 border-slate-900 flex-1">
            <h2 className="font-mono font-bold uppercase tracking-wider text-[9pt] text-slate-900 mb-2.5">
              EXPERIENCE
            </h2>

            {experience.length > 0 ? (
              <div className="space-y-3">
                {experience.map((exp, idx) => (
                  <div key={exp.id || idx} className="break-inside-avoid">
                    <div className="flex items-baseline justify-between">
                      <span className="font-bold text-slate-950 text-[9pt]">
                        {exp.role}{' '}
                        <span className="font-medium text-slate-700">— {exp.company}</span>
                      </span>
                      <span className="text-[8pt] font-mono text-slate-600 shrink-0 ml-2">
                        {exp.startDate} – {exp.current ? 'Present' : exp.endDate}
                      </span>
                    </div>

                    {exp.location && (
                      <div className="text-[8pt] text-slate-500 font-medium mb-1">
                        {exp.location}
                      </div>
                    )}

                    {exp.description && (
                      <div className="mt-1 space-y-0.5 text-[8.5pt] leading-relaxed text-slate-700">
                        {exp.description
                          .split('\n')
                          .filter((line) => line.trim().length > 0)
                          .map((point, pIdx) => (
                            <div key={pIdx} className="flex items-start">
                              <span className="font-bold mr-1.5 text-slate-900">•</span>
                              <span>{point.replace(/^•\s*/, '')}</span>
                            </div>
                          ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-slate-400 text-[8pt] italic">No work experience added yet.</p>
            )}
          </div>

          {/* SECTION 3: Projects */}
          <div className="p-4 border-b-2 border-slate-900">
            <h2 className="font-mono font-bold uppercase tracking-wider text-[9pt] text-slate-900 mb-2.5">
              PROJECTS
            </h2>

            {projects && projects.length > 0 ? (
              <div className="space-y-2.5">
                {projects.map((proj, idx) => (
                  <div key={proj.id || idx} className="break-inside-avoid">
                    <div className="text-[9pt]">
                      <span className="font-bold text-slate-950">{proj.name}</span>
                      {proj.technologies && (
                        <span className="text-slate-600 font-mono text-[8pt]">
                          {' '}
                          • {proj.technologies}
                        </span>
                      )}
                    </div>

                    {proj.description && (
                      <div className="mt-0.5 space-y-0.5 text-[8.5pt] leading-relaxed text-slate-700">
                        {proj.description
                          .split('\n')
                          .filter((line) => line.trim().length > 0)
                          .map((line, pIdx) => (
                            <div key={pIdx} className="flex items-start">
                              <span className="font-bold mr-1.5 text-slate-900">•</span>
                              <span>{line.replace(/^•\s*/, '')}</span>
                            </div>
                          ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-slate-400 text-[8pt] italic">No projects added yet.</p>
            )}
          </div>

          {/* SECTION 4: Education / Certifications Detailed Bottom Box */}
          <div className="p-4">
            <h2 className="font-mono font-bold uppercase tracking-wider text-[9pt] text-slate-900 mb-2">
              EDUCATION / CERTIFICATIONS
            </h2>
            <div className="space-y-1.5 text-[8.5pt]">
              {education.map((edu, idx) => (
                <div key={edu.id || idx} className="flex justify-between items-baseline">
                  <span className="font-medium text-slate-900">
                    <strong className="font-bold">{edu.degree || edu.institution}</strong>
                    {edu.fieldOfStudy ? ` in ${edu.fieldOfStudy}` : ''} — {edu.institution}
                  </span>
                  {(edu.startDate || edu.endDate) && (
                    <span className="text-slate-500 font-mono text-[8pt] shrink-0 ml-2">
                      {edu.startDate ? `${edu.startDate} – ` : ''}
                      {edu.endDate}
                    </span>
                  )}
                </div>
              ))}

              {certificates.map((cert, idx) => (
                <div key={cert.id || idx} className="flex justify-between items-baseline">
                  <span className="text-slate-800">
                    <strong className="font-bold text-slate-950">{cert.name}</strong>
                    {cert.issuer ? ` — ${cert.issuer}` : ''}
                  </span>
                  {cert.issueDate && (
                    <span className="text-slate-500 font-mono text-[8pt] shrink-0 ml-2">
                      {cert.issueDate}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default FrontendDeveloper;