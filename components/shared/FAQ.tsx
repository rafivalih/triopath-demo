'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import { faqItems } from '@/constants/faqs';

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return <div className="w-full divide-y divide-border rounded-2xl border border-border bg-white px-6">
    {faqItems.map((item, index) => <div key={item.question}>
      <button type="button" onClick={() => setOpen(open === index ? null : index)} className="flex w-full items-center justify-between gap-6 py-5 text-left text-base font-semibold text-primary" aria-expanded={open === index}>
        <span>{item.question}</span><ChevronDown className={`h-5 w-5 shrink-0 text-accent transition-transform ${open === index ? 'rotate-180' : ''}`} />
      </button>
      <AnimatePresence initial={false}>{open === index && <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden"><p className="pb-5 pr-10 text-sm leading-relaxed text-muted-foreground">{item.answer}</p></motion.div>}</AnimatePresence>
    </div>)}
  </div>;
}
