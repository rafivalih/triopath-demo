import React from 'react';
import { ResumeData } from '@/types/resume';

export const ATSClassic: React.FC<{ data: ResumeData }> = ({ data }) => (
  <div className="p-8 font-serif text-[11px] text-black space-y-4 leading-normal">
    <div className="text-center border-b border-black pb-2">
      <h1 className="text-2xl font-bold uppercase">{data.personal.fullName}</h1>
      <p className="text-xs">{data.personal.jobTitle}</p>
      <p className="text-[10px] mt-1">
        {data.personal.location} • {data.personal.phone} • {data.personal.email}
      </p>
    </div>

    {data.personal.summary && (
      <div>
        <h2 className="font-bold uppercase border-b border-black text-xs">Professional Summary</h2>
        <p className="mt-1">{data.personal.summary}</p>
      </div>
    )}

    {data.experience.length > 0 && (
      <div>
        <h2 className="font-bold uppercase border-b border-black text-xs">Work Experience</h2>
        <div className="mt-2 space-y-2">
          {data.experience.map((exp) => (
            <div key={exp.id}>
              <div className="flex justify-between font-bold">
                <span>{exp.company} — {exp.role}</span>
                <span>{exp.startDate}</span>
              </div>
              <p className="mt-0.5">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    )}

    {data.education.length > 0 && (
      <div>
        <h2 className="font-bold uppercase border-b border-black text-xs">Education</h2>
        <div className="mt-2 space-y-1">
          {data.education.map((edu) => (
            <div key={edu.id} className="flex justify-between">
              <span>{edu.degree} — {edu.institution}</span>
              <span>{edu.endDate}</span>
            </div>
          ))}
        </div>
      </div>
    )}

    {data.skills.length > 0 && (
      <div>
        <h2 className="font-bold uppercase border-b border-black text-xs">Technical Skills</h2>
        <p className="mt-1">{data.skills.join(', ')}</p>
      </div>
    )}
  </div>
);