import React from 'react';
import { ResumeData } from '@/types/resume';

export const MinimalElite: React.FC<{ data: ResumeData }> = ({ data }) => (
  <div className="p-8 font-sans text-[11px] text-slate-700 space-y-5">
    <div className="text-center space-y-1">
      <h1 className="text-xl font-light tracking-widest text-slate-900 uppercase">{data.personal.fullName}</h1>
      <p className="text-xs font-medium text-slate-500">{data.personal.jobTitle}</p>
      <p className="text-[10px] text-slate-400">
        {data.personal.email} | {data.personal.phone} | {data.personal.location}
      </p>
    </div>

    {data.personal.summary && (
      <p className="text-center text-slate-600 max-w-xl mx-auto italic">{data.personal.summary}</p>
    )}

    {data.experience.length > 0 && (
      <div>
        <h2 className="text-xs font-bold uppercase tracking-widest text-slate-900 border-b border-slate-200 pb-1">Experience</h2>
        <div className="mt-3 space-y-3">
          {data.experience.map((exp) => (
            <div key={exp.id}>
              <div className="flex justify-between font-semibold text-slate-900">
                <span>{exp.role}, {exp.company}</span>
                <span className="text-[10px] text-slate-400">{exp.startDate}</span>
              </div>
              <p className="mt-1 text-slate-600">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    )}

    {data.skills.length > 0 && (
      <div>
        <h2 className="text-xs font-bold uppercase tracking-widest text-slate-900 border-b border-slate-200 pb-1">Core Competencies</h2>
        <p className="mt-2 text-slate-600">{data.skills.join(', ')}</p>
      </div>
    )}
  </div>
);