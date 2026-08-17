'use client';

import { useState } from 'react';
import { ArrowRight, Check, Mail } from 'lucide-react';

export function NewsletterForm() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!email.trim()) return;
    setSubmitted(true);
    setEmail('');
  }

  if (submitted) {
    return <div className="flex items-center gap-2 rounded-xl border border-emerald-400/30 bg-emerald-400/10 px-4 py-3 text-sm text-emerald-300"><Check className="h-4 w-4" /> You are on the list.</div>;
  }

  return (
    <form onSubmit={handleSubmit} className="flex rounded-xl border border-white/15 bg-white/5 p-1.5 focus-within:border-accent/60">
      <Mail className="ml-2.5 mt-2 h-4 w-4 shrink-0 text-white/40" />
      <input type="email" required value={email} onChange={(event) => setEmail(event.target.value)} placeholder="Your email address" aria-label="Email address" className="min-w-0 flex-1 bg-transparent px-2.5 text-sm text-white placeholder:text-white/35 focus:outline-none" />
      <button type="submit" aria-label="Subscribe" className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white text-primary transition-colors hover:bg-accent hover:text-white"><ArrowRight className="h-4 w-4" /></button>
    </form>
  );
}
