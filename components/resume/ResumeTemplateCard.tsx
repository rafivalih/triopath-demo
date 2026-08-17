'use client';

import React from 'react';
import { ArrowRight, CheckCircle2, Sparkles } from 'lucide-react';
import { ResumeTemplateMeta } from '@/types/resume';

interface ResumeTemplateCardProps {
  template: ResumeTemplateMeta;
  isSelected?: boolean;
  onSelect: (id: string) => void;
}

export const ResumeTemplateCard: React.FC<ResumeTemplateCardProps> = ({
  template,
  isSelected = false,
  onSelect,
}) => {
  return (
    <div
      className={`group relative flex flex-col justify-between overflow-hidden rounded-2xl border bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${
        isSelected
          ? 'border-blue-600 ring-2 ring-blue-500/20'
          : 'border-slate-200/80 hover:border-blue-300'
      }`}
    >
      <div>
        {/* Template Preview Skeleton Mockup */}
        <div className="relative flex h-48 w-full flex-col justify-between overflow-hidden rounded-xl border border-slate-100 bg-slate-50 p-4 transition-colors group-hover:bg-slate-100/70">
          <div className="flex items-center justify-between">
            <span className="rounded-md bg-white px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-slate-600 shadow-sm border border-slate-200/60">
              {template.category}
            </span>
            {template.isPopular && (
              <span className="inline-flex items-center gap-1 rounded-full bg-blue-50 px-2 py-0.5 text-[10px] font-semibold text-blue-600 border border-blue-200/60">
                <Sparkles className="h-3 w-3" /> Popular
              </span>
            )}
          </div>

          <div className="space-y-2 py-2">
            <div
              className="h-2.5 w-24 rounded-full"
              style={{ backgroundColor: template.accentColor }}
            />
            <div className="h-1.5 w-36 rounded-full bg-slate-300/80" />
            <div className="space-y-1 pt-2">
              <div className="h-1 w-full rounded bg-slate-200" />
              <div className="h-1 w-4/5 rounded bg-slate-200" />
              <div className="h-1 w-2/3 rounded bg-slate-200" />
            </div>
          </div>

          <div className="flex items-center justify-between text-[10px] text-slate-400">
            <span>ATS-Ready</span>
            <div
              className="h-2 w-2 rounded-full"
              style={{ backgroundColor: template.accentColor }}
            />
          </div>
        </div>

        {/* Template Info */}
        <div className="mt-4">
          <div className="flex items-center justify-between">
            <h3 className="font-bold text-slate-900">{template.name}</h3>
            {isSelected && (
              <span className="flex items-center gap-1 text-xs font-semibold text-blue-600">
                <CheckCircle2 className="h-4 w-4" /> Active
              </span>
            )}
          </div>
          <p className="mt-1 text-xs leading-relaxed text-slate-500">
            {template.description}
          </p>
        </div>
      </div>

      {/* Select CTA */}
      <div className="mt-5 pt-3 border-t border-slate-100">
        <button
          type="button"
          onClick={() => onSelect(template.id)}
          className={`inline-flex w-full items-center justify-center gap-1.5 rounded-xl px-4 py-2.5 text-xs font-semibold transition-all ${
            isSelected
              ? 'bg-blue-600 text-white shadow-md hover:bg-blue-700'
              : 'bg-slate-900 text-white hover:bg-blue-600'
          }`}
        >
          {isSelected ? 'Continue with this template' : 'Use this template'}
          <ArrowRight className="h-3.5 w-3.5" />
        </button>
      </div>
    </div>
  );
};