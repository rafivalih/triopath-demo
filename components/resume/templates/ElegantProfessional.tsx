'use client';

import React from 'react';
import { ResumeData } from '@/types/resume';

interface ElegantProfessionalProps {
  data: ResumeData;
}

export const ElegantProfessional: React.FC<ElegantProfessionalProps> = ({ data }) => {
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

  // Build contact items
  const contactLinks: React.ReactNode[] = [];

  if (personal.phone) contactLinks.push(<span key="phone">{personal.phone}</span>);
  if (personal.email) {
    contactLinks.push(
      <a key="email" href={`mailto:${personal.email}`} className="text-[#1d4ed8] hover:underline">
        {personal.email}
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
        className="text-[#1d4ed8] hover:underline"
      >
        LinkedIn
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
        className="text-[#1d4ed8] hover:underline"
      >
        GitHub
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
        className="text-[#1d4ed8] hover:underline"
      >
        Portfolio
      </a>
    );
  }
  if (personal.location) contactLinks.push(<span key="location">{personal.location}</span>);

  return (
    <div
      className="w-full bg-white text-slate-900 leading-normal box-border px-[12mm] py-[10mm] print:p-0 print:m-0 font-serif text-[10pt]"
      style={{
        fontFamily: "Garamond, 'Baskerville', 'Times New Roman', serif",
        wordBreak: 'break-word',
        overflowWrap: 'break-word',
      }}
    >
      {/* 1. Header (Centered, Sophisticated Typography) */}
      <header className="text-center pb-2.5 mb-3 border-b border-slate-300 break-inside-avoid">
        <h1 className="text-[23pt] font-normal uppercase tracking-[0.18em] text-slate-900 leading-tight mb-1">
          {personal.fullName || 'YOUR NAME'}
        </h1>
        {personal.jobTitle && (
          <p className="text-[10.5pt] italic text-[#1d4ed8] tracking-widest uppercase font-sans mb-1.5">
            {personal.jobTitle}
          </p>
        )}
        {contactLinks.length > 0 && (
          <div className="flex flex-wrap items-center justify-center text-[9pt] text-slate-600 font-sans">
            {contactLinks.map((item, idx) => (
              <React.Fragment key={idx}>
                <span className="whitespace-nowrap inline-flex items-center">{item}</span>
                {idx < contactLinks.length - 1 && (
                  <span className="mx-2 text-slate-400 select-none">✦</span>
                )}
              </React.Fragment>
            ))}
          </div>
        )}
      </header>

      {/* 2. Professional Profile / Summary */}
      {personal.summary && (
        <section className="mb-3 break-inside-avoid">
          <div className="text-center mb-1.5">
            <h2 className="text-[10.5pt] font-bold uppercase tracking-[0.15em] text-slate-800 font-sans inline-block border-b border-slate-300 pb-0.5">
              Professional Summary
            </h2>
          </div>
          <p className="text-[9.5pt] leading-relaxed text-slate-800 text-justify italic">
            {personal.summary}
          </p>
        </section>
      )}

      {/* 3. Areas of Expertise / Skills */}
      {skills.length > 0 && (
        <section className="mb-3 break-inside-avoid">
          <div className="text-center mb-1.5">
            <h2 className="text-[10.5pt] font-bold uppercase tracking-[0.15em] text-slate-800 font-sans inline-block border-b border-slate-300 pb-0.5">
              Areas of Expertise
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
                    <span className="text-[#1d4ed8] mr-2">❖</span>
                    <p className="leading-snug font-sans text-[9pt]">
                      <strong className="font-semibold text-slate-900">{categoryTitle}: </strong>
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
                      <span className="text-[#1d4ed8] mr-2">❖</span>
                      <p className="leading-snug font-sans text-[9pt]">
                        <strong className="font-semibold text-slate-900">{category.trim()}: </strong>
                        <span className="text-slate-700">{skillsList?.trim()}</span>
                      </p>
                    </div>
                  );
                }

                return (
                  <div key={idx} className="flex items-start">
                    <span className="text-[#1d4ed8] mr-2">❖</span>
                    <span className="font-sans text-[9pt] text-slate-700">{item}</span>
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
          <div className="text-center mb-2">
            <h2 className="text-[10.5pt] font-bold uppercase tracking-[0.15em] text-slate-800 font-sans inline-block border-b border-slate-300 pb-0.5">
              Professional Experience
            </h2>
          </div>
          <div className="space-y-3">
            {experience.map((exp, idx) => (
              <div key={exp.id || idx} className="break-inside-avoid">
                <div className="flex items-baseline justify-between">
                  <span className="font-bold text-[10.5pt] text-slate-900 font-sans">
                    {exp.role}{' '}
                    <span className="font-serif italic font-normal text-slate-600">at</span>{' '}
                    <span className="text-[#1d4ed8] font-semibold">{exp.company}</span>
                    {exp.location && (
                      <span className="font-normal text-slate-500 text-[9pt]"> — {exp.location}</span>
                    )}
                  </span>
                  <span className="font-sans text-[8.5pt] text-slate-600 shrink-0 ml-2 italic">
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
                          <span className="mr-2 text-slate-400 font-serif">•</span>
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
          <div className="text-center mb-2">
            <h2 className="text-[10.5pt] font-bold uppercase tracking-[0.15em] text-slate-800 font-sans inline-block border-b border-slate-300 pb-0.5">
              Key Projects & Initiatives
            </h2>
          </div>
          <div className="space-y-2.5">
            {projects.map((proj, idx) => (
              <div key={proj.id || idx} className="break-inside-avoid">
                <div className="text-[10pt] font-sans">
                  <span className="font-bold text-slate-900">{proj.name}</span>
                  {proj.technologies && (
                    <span className="text-slate-500 font-serif italic text-[9.5pt]">
                      {' '}— ({proj.technologies})
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
                          <span className="mr-2 text-slate-400 font-serif">•</span>
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
          <div className="text-center mb-1.5">
            <h2 className="text-[10.5pt] font-bold uppercase tracking-[0.15em] text-slate-800 font-sans inline-block border-b border-slate-300 pb-0.5">
              Education & Credentials
            </h2>
          </div>
          <div className="space-y-1.5 text-[9.5pt] text-slate-800">
            {education.map((edu, idx) => (
              <div key={edu.id || idx} className="break-inside-avoid">
                <div className="flex justify-between items-baseline font-sans">
                  <span className="font-bold text-slate-900">
                    {edu.institution}
                    {(edu.degree || edu.fieldOfStudy) && (
                      <span className="font-serif italic font-normal text-slate-700">
                        {' '}— {edu.degree}
                        {edu.fieldOfStudy ? ` in ${edu.fieldOfStudy}` : ''}
                      </span>
                    )}
                  </span>
                  {(edu.startDate || edu.endDate) && (
                    <span className="text-slate-600 shrink-0 ml-2 text-[8.5pt] italic">
                      {edu.startDate ? `${edu.startDate} – ` : ''}{edu.endDate}
                    </span>
                  )}
                </div>

                <div className="flex items-center gap-1.5 text-slate-500 text-[8.5pt] font-sans">
                  {edu.location && <span>{edu.location}</span>}
                  {edu.location && edu.score && <span>|</span>}
                  {edu.score && <span>Honors / GPA: {edu.score}</span>}
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* 7. Certifications */}
      {certificates && certificates.length > 0 && (
        <section className="mb-2">
          <div className="text-center mb-1.5">
            <h2 className="text-[10.5pt] font-bold uppercase tracking-[0.15em] text-slate-800 font-sans inline-block border-b border-slate-300 pb-0.5">
              Certifications & Affiliations
            </h2>
          </div>
          <div className="space-y-1 text-[9.5pt] text-slate-800 font-sans">
            {certificates.map((cert, idx) => (
              <div
                key={cert.id || idx}
                className="flex items-baseline justify-between break-inside-avoid"
              >
                <div>
                  <span className="font-semibold text-slate-900">{cert.name}</span>
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
                      className="ml-1.5 text-[#1d4ed8] text-[8.5pt] underline"
                    >
                      [Verify]
                    </a>
                  )}
                </div>
                {(cert.issueDate || cert.expirationDate) && (
                  <span className="text-slate-500 text-[8.5pt] shrink-0 ml-2 italic">
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

export default ElegantProfessional;