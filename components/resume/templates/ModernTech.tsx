'use client';

import React from 'react';
import { ResumeData } from '@/types/resume';

interface ModernTechProps {
  data: ResumeData;
}

export const ModernTech: React.FC<ModernTechProps> = ({ data }) => {
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

  if (personal.phone) contactLinks.push(<span key="phone">{personal.phone}</span>);
  if (personal.email) {
    contactLinks.push(
      <a key="email" href={`mailto:${personal.email}`} className="text-[#059669] hover:underline">
        {personal.email}
      </a>
    );
  }
  if (personal.github) {
    contactLinks.push(
      <a
        key="github"
        href={personal.github.startsWith('http') ? personal.github : `https://${personal.github}`}
        target="_blank"
        rel="noreferrer"
        className="text-[#059669] hover:underline"
      >
        GitHub
      </a>
    );
  }
  if (personal.linkedin) {
    contactLinks.push(
      <a
        key="linkedin"
        href={personal.linkedin.startsWith('http') ? personal.linkedin : `https://${personal.linkedin}`}
        target="_blank"
        rel="noreferrer"
        className="text-[#059669] hover:underline"
      >
        LinkedIn
      </a>
    );
  }
  if (personal.website) {
    contactLinks.push(
      <a
        key="website"
        href={personal.website.startsWith('http') ? personal.website : `https://${personal.website}`}
        target="_blank"
        rel="noreferrer"
        className="text-[#059669] hover:underline"
      >
        Portfolio
      </a>
    );
  }
  if (personal.location) contactLinks.push(<span key="location">{personal.location}</span>);

  return (
    <div
      className="w-full bg-white text-slate-900 leading-tight box-border px-[12mm] py-[10mm] print:p-0 print:m-0 font-sans text-[10pt]"
      style={{
        fontFamily: "'JetBrains Mono', 'Fira Code', 'Roboto Mono', Menlo, monospace",
        wordBreak: 'break-word',
        overflowWrap: 'break-word',
      }}
    >
      {/* 1. Header (CLI Style Header) */}
      <header className="border-b-2 border-[#059669] pb-2.5 mb-3 break-inside-avoid">
        <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
          <h1 className="text-[20pt] font-black uppercase tracking-tight text-slate-900 leading-none">
            <span className="text-[#059669] font-normal mr-1">&gt;</span>
            {personal.fullName || 'YOUR NAME'}
          </h1>
          {personal.jobTitle && (
            <span className="text-[10.5pt] font-bold text-[#059669]">
              [{personal.jobTitle}]
            </span>
          )}
        </div>

        {contactLinks.length > 0 && (
          <div className="mt-2 flex flex-wrap items-center text-[9pt] text-slate-600">
            {contactLinks.map((item, idx) => (
              <React.Fragment key={idx}>
                <span className="whitespace-nowrap inline-flex items-center">{item}</span>
                {idx < contactLinks.length - 1 && (
                  <span className="mx-2 text-[#059669] font-bold select-none">::</span>
                )}
              </React.Fragment>
            ))}
          </div>
        )}
      </header>

      {/* 2. Summary / Bio */}
      {personal.summary && (
        <section className="mb-3 break-inside-avoid">
          <h2 className="text-[10.5pt] font-bold uppercase tracking-wider text-slate-900 border-b border-emerald-100 pb-0.5 mb-1.5">
            <span className="text-[#059669] mr-1">$</span>cat about_me.md
          </h2>
          <p className="text-[9pt] leading-relaxed text-slate-700 text-justify">
            {personal.summary}
          </p>
        </section>
      )}

      {/* 3. Core Tech & Skills */}
      {skills.length > 0 && (
        <section className="mb-3 break-inside-avoid">
          <h2 className="text-[10.5pt] font-bold uppercase tracking-wider text-slate-900 border-b border-emerald-100 pb-0.5 mb-1.5">
            <span className="text-[#059669] mr-1">$</span>cat skills.json
          </h2>
          <div className="space-y-1.5 text-[9pt] text-slate-800">
            {skills.map((item: any, idx: number) => {
              if (typeof item === 'object' && item !== null) {
                const categoryTitle = item.category || 'Skills';
                const skillsList = Array.isArray(item.skills)
                  ? item.skills.filter(Boolean).join(', ')
                  : item.skills;

                if (!skillsList || skillsList.trim().length === 0) return null;

                return (
                  <div key={item.id || idx} className="flex items-start">
                    <span className="text-[#059669] font-bold mr-1.5">#</span>
                    <p className="leading-snug">
                      <strong className="font-bold text-slate-900">{categoryTitle}: </strong>
                      <span className="text-slate-700">{skillsList}</span>
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
                      <span className="text-[#059669] font-bold mr-1.5">#</span>
                      <p className="leading-snug">
                        <strong className="font-bold text-slate-900">{category.trim()}: </strong>
                        <span className="text-slate-700">{skillsList?.trim()}</span>
                      </p>
                    </div>
                  );
                }

                return (
                  <div key={idx} className="flex items-start">
                    <span className="text-[#059669] font-bold mr-1.5">#</span>
                    <span className="text-slate-700">{item}</span>
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
        <section className="mb-3">
          <h2 className="text-[10.5pt] font-bold uppercase tracking-wider text-slate-900 border-b border-emerald-100 pb-0.5 mb-2">
            <span className="text-[#059669] mr-1">$</span>git log --experience
          </h2>
          <div className="space-y-3">
            {experience.map((exp, idx) => (
              <div key={exp.id || idx} className="break-inside-avoid">
                <div className="flex items-baseline justify-between text-[9.5pt]">
                  <span className="font-bold text-slate-900">
                    {exp.role}{' '}
                    <span className="text-[#059669] font-semibold">@ {exp.company}</span>
                    {exp.location && (
                      <span className="font-normal text-slate-500 text-[8.5pt]"> ({exp.location})</span>
                    )}
                  </span>
                  <span className="font-semibold text-[8.5pt] text-slate-600 shrink-0 ml-2">
                    [{exp.startDate} ~ {exp.current ? 'HEAD' : exp.endDate}]
                  </span>
                </div>

                {exp.description && (
                  <div className="mt-1 space-y-0.5 text-[9pt] leading-relaxed text-slate-700">
                    {exp.description
                      .split('\n')
                      .filter((line) => line.trim().length > 0)
                      .map((point, pIdx) => (
                        <div key={pIdx} className="flex items-start">
                          <span className="text-[#059669] font-bold mr-1.5">&gt;</span>
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
          <h2 className="text-[10.5pt] font-bold uppercase tracking-wider text-slate-900 border-b border-emerald-100 pb-0.5 mb-2">
            <span className="text-[#059669] mr-1">$</span>ls ./projects
          </h2>
          <div className="space-y-2.5">
            {projects.map((proj, idx) => (
              <div key={proj.id || idx} className="break-inside-avoid">
                <div className="text-[9.5pt]">
                  <span className="font-bold text-slate-900">{proj.name}</span>
                  {proj.technologies && (
                    <span className="text-[#059669] font-medium text-[8.5pt]">
                      {' '}:: [{proj.technologies}]
                    </span>
                  )}
                </div>

                {proj.description && (
                  <div className="mt-0.5 space-y-0.5 text-[9pt] leading-relaxed text-slate-700">
                    {proj.description
                      .split('\n')
                      .filter((line) => line.trim().length > 0)
                      .map((line, pIdx) => (
                        <div key={pIdx} className="flex items-start">
                          <span className="text-[#059669] font-bold mr-1.5">&gt;</span>
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
          <h2 className="text-[10.5pt] font-bold uppercase tracking-wider text-slate-900 border-b border-emerald-100 pb-0.5 mb-1.5">
            <span className="text-[#059669] mr-1">$</span>cat education.txt
          </h2>
          <div className="space-y-1.5 text-[9pt] text-slate-800">
            {education.map((edu, idx) => (
              <div key={edu.id || idx} className="break-inside-avoid">
                <div className="flex justify-between items-baseline">
                  <span className="font-bold text-slate-900">
                    {edu.institution}
                    {(edu.degree || edu.fieldOfStudy) && (
                      <span className="font-normal text-slate-700">
                        {' '}— {edu.degree}
                        {edu.fieldOfStudy ? ` in ${edu.fieldOfStudy}` : ''}
                      </span>
                    )}
                  </span>
                  {(edu.startDate || edu.endDate) && (
                    <span className="font-semibold text-slate-600 shrink-0 ml-2 text-[8.5pt]">
                      {edu.startDate ? `${edu.startDate} – ` : ''}{edu.endDate}
                    </span>
                  )}
                </div>

                <div className="flex items-center gap-1.5 text-slate-500 text-[8.5pt]">
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
          <h2 className="text-[10.5pt] font-bold uppercase tracking-wider text-slate-900 border-b border-emerald-100 pb-0.5 mb-1.5">
            <span className="text-[#059669] mr-1">$</span>gpg --list-keys
          </h2>
          <div className="space-y-1 text-[9pt] text-slate-800">
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
                      className="ml-1.5 text-[#059669] text-[8.5pt] hover:underline"
                    >
                      [verify]
                    </a>
                  )}
                </div>
                {(cert.issueDate || cert.expirationDate) && (
                  <span className="font-semibold text-[8.5pt] text-slate-600 shrink-0 ml-2">
                    {cert.issueDate}
                    {cert.expirationDate && !cert.doesNotExpire
                      ? ` – ${cert.expirationDate}`
                      : ''}
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

export default ModernTech;