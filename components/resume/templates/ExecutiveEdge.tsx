import React from 'react';
import { ResumeData } from '@/types/resume';

export const ExecutiveEdge: React.FC<{ data: ResumeData }> = ({ data }) => {
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
  } = data || {};

  return (
    <div className="grid grid-cols-[220px_1fr] min-h-full font-sans text-[11px]">
      {/* Left Column Sidebar */}
      <div className="bg-slate-900 p-6 text-slate-300 space-y-5">
        <div>
          <h1 className="text-lg font-bold text-white">{personal.fullName || 'YOUR NAME'}</h1>
          {personal.jobTitle && (
            <p className="text-xs text-blue-400 font-medium">{personal.jobTitle}</p>
          )}
        </div>

        <div className="space-y-1.5 text-[10px]">
          <p className="text-white font-semibold uppercase tracking-wider">Contact</p>
          {personal.email && <p>{personal.email}</p>}
          {personal.phone && <p>{personal.phone}</p>}
          {personal.location && <p>{personal.location}</p>}
        </div>

        {/* Skills Section with Category & Tag parsing */}
        {skills && skills.length > 0 && (
          <div className="space-y-3">
            <p className="text-white font-semibold uppercase tracking-wider text-[10px]">
              Skills
            </p>
            <div className="space-y-2.5">
              {skills.map((item: any, idx: number) => {
                // 1. Structured Category Object
                if (typeof item === 'object' && item !== null) {
                  const categoryName = item.category || 'Skills';
                  const tags: string[] = Array.isArray(item.skills)
                    ? item.skills
                    : typeof item.skills === 'string'
                    ? item.skills.split(',').map((s: string) => s.trim()).filter(Boolean)
                    : [];

                  if (tags.length === 0) return null;

                  return (
                    <div key={item.id || idx}>
                      <p className="text-[10px] font-medium text-slate-400 mb-1">
                        {categoryName}
                      </p>
                      <div className="flex flex-wrap gap-1">
                        {tags.map((tag, tIdx) => (
                          <span
                            key={tIdx}
                            className="rounded bg-slate-800 px-1.5 py-0.5 text-[9px] text-slate-200"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  );
                }

                // 2. Legacy string format with colon
                if (typeof item === 'string' && item.includes(':')) {
                  const [category, rawItems] = item.split(/:(.+)/);
                  const tags = rawItems
                    ? rawItems.split(',').map((s) => s.trim()).filter(Boolean)
                    : [];

                  return (
                    <div key={idx}>
                      <p className="text-[10px] font-medium text-slate-400 mb-1">
                        {category.trim()}
                      </p>
                      <div className="flex flex-wrap gap-1">
                        {tags.map((tag, tIdx) => (
                          <span
                            key={tIdx}
                            className="rounded bg-slate-800 px-1.5 py-0.5 text-[9px] text-slate-200"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  );
                }

                // 3. Fallback raw string item
                return (
                  <span
                    key={idx}
                    className="inline-block mr-1 mb-1 rounded bg-slate-800 px-1.5 py-0.5 text-[9px] text-slate-200"
                  >
                    {typeof item === 'string' ? item : ''}
                  </span>
                );
              })}
            </div>
          </div>
        )}
      </div>

      {/* Right Column Body */}
      <div className="p-6 text-slate-800 space-y-4">
        {personal.summary && (
          <div>
            <h2 className="text-xs font-bold uppercase text-slate-900 border-b border-slate-200 pb-1">
              Executive Summary
            </h2>
            <p className="mt-1.5 text-slate-600 leading-relaxed">{personal.summary}</p>
          </div>
        )}

        {experience.length > 0 && (
          <div>
            <h2 className="text-xs font-bold uppercase text-slate-900 border-b border-slate-200 pb-1">
              Experience
            </h2>
            <div className="mt-2 space-y-3">
              {experience.map((exp) => (
                <div key={exp.id}>
                  <div className="flex justify-between font-bold text-slate-900">
                    <span>{exp.role}</span>
                    <span className="text-[10px] font-normal text-slate-500">
                      {exp.startDate} – {exp.current ? 'Present' : exp.endDate}
                    </span>
                  </div>
                  <p className="text-[10px] font-medium text-blue-600">{exp.company}</p>
                  {exp.description && (
                    <p className="mt-1 text-slate-600 leading-normal whitespace-pre-line">
                      {exp.description}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {education.length > 0 && (
          <div>
            <h2 className="text-xs font-bold uppercase text-slate-900 border-b border-slate-200 pb-1">
              Education
            </h2>
            <div className="mt-2 space-y-2">
              {education.map((edu) => (
                <div key={edu.id}>
                  <p className="font-bold text-slate-900">
                    {edu.degree} {edu.fieldOfStudy ? `in ${edu.fieldOfStudy}` : ''}
                  </p>
                  <p className="text-slate-600">
                    {edu.institution} — {edu.endDate}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ExecutiveEdge;