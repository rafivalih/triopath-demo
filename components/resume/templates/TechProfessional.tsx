import React from 'react';
import { ResumeData } from '@/types/resume';

export const TechProfessional: React.FC<{ data: ResumeData }> = ({ data }) => (
  <div className="p-8 font-mono text-[11px] text-slate-800 space-y-4">
    <div className="border-l-4 border-teal-600 pl-4">
      <h1 className="text-xl font-bold tracking-tight text-slate-900">{data.personal.fullName}</h1>
      <p className="text-xs font-semibold text-teal-700">{data.personal.jobTitle}</p>
      <p className="text-[10px] text-slate-500 mt-1">
        {data.personal.email} | {data.personal.github} | {data.personal.location}
      </p>
    </div>

    {data.skills.length > 0 && (
      <div>
        <h2 className="text-xs font-bold text-teal-800 bg-teal-50 px-2 py-0.5 rounded inline-block mb-1">
          // TECH_STACK
        </h2>
        <div className="flex flex-wrap gap-1.5 mt-1">
          {data.skills.map((skill) => (
            <span key={skill} className="rounded border border-teal-200 bg-white px-2 py-0.5 text-[10px]">
              {skill}
            </span>
          ))}
        </div>
      </div>
    )}

    {data.experience.length > 0 && (
      <div>
        <h2 className="text-xs font-bold text-teal-800 bg-teal-50 px-2 py-0.5 rounded inline-block mb-2">
          // EXPERIENCE
        </h2>
        <div className="space-y-3">
          {data.experience.map((exp) => (
            <div key={exp.id}>
              <div className="flex justify-between font-bold text-slate-900">
                <span>&gt; {exp.role} @ {exp.company}</span>
                <span className="text-[10px] text-slate-400">{exp.startDate}</span>
              </div>
              <p className="mt-1 text-slate-600 font-sans">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    )}
  </div>
);