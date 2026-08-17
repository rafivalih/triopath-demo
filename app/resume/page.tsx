
import React from 'react';
import Link from 'next/link';
import { ArrowRight, Sparkles, Layout, ShieldCheck, FileCheck } from 'lucide-react';
import { Reveal } from '@/components/shared/Reveal';

export default function ResumeLandingPage() {
  return (
    <div className="pt-28">
      <section className="relative overflow-hidden py-16 bg-slate-50">
        <div className="relative mx-auto max-w-4xl px-4 text-center">
          <Reveal>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-accent/10 px-3.5 py-1 text-xs font-semibold text-accent">
              <Sparkles className="h-3.5 w-3.5" /> AI Resume Studio
            </span>
            <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-primary sm:text-5xl">
              Build an ATS-optimized resume in minutes.
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-base text-muted-foreground">
              Choose from 10+ recruiter-approved templates, tailor your experience, and download in pristine high-resolution PDF format.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                href="/resume/templates"
                className="inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-white shadow-md hover:bg-primary/90"
              >
                Browse Templates <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/resume/builder"
                className="inline-flex items-center gap-2 rounded-xl border border-border bg-white px-6 py-3 text-sm font-semibold text-primary shadow-sm hover:bg-slate-50"
              >
                Open Editor
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}