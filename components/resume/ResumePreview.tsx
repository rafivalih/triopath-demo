'use client';

import React, { forwardRef } from 'react';
import { useResume } from '@/context/ResumeContext';
import { ResumeTemplateRenderer } from './ResumeTemplateRenderer';

export const ResumePreview = forwardRef<HTMLDivElement>((props, ref) => {
  const { resumeData, activeTemplate } = useResume();

  return (
    <div className="flex justify-center p-6 bg-slate-200/70 overflow-auto">
      {/* Standard A4 dimensions */}
      <div
        ref={ref}
        className="w-[794px] min-h-[1123px] bg-white shadow-2xl origin-top transition-transform"
        style={{ boxSizing: 'border-box' }}
      >
        <ResumeTemplateRenderer templateId={activeTemplate} data={resumeData} />
      </div>
    </div>
  );
});

ResumePreview.displayName = 'ResumePreview';