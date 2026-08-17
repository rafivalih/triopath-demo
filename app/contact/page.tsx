'use client';

import { useState } from 'react';
import { Mail, MapPin, Phone, Send, Linkedin, MessageCircle, Facebook, Instagram, Github, Twitter } from 'lucide-react';
import { siteConfig } from '@/constants/site';
import { Reveal } from '@/components/shared/Reveal';

type LocationKey = 'hyderabad' | 'bengaluru';

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', phone: '', linkedin: '', message: '' });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [location, setLocation] = useState<LocationKey>('hyderabad');

  function validate() {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = 'Name is required';
    if (!form.phone.trim()) e.phone = 'Phone number is required';
    if (!form.message.trim()) e.message = 'Message is required';
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!validate()) return;
    const subject = encodeURIComponent('Career Consultation Request');
    const body = encodeURIComponent(
      `Hi Hiring Team,\n\nName: ${form.name}\n\nPhone: ${form.phone}\n\nLinkedIn: ${form.linkedin || 'N/A'}\n\nMessage: ${form.message}\n\nThank you.`
    );
    window.location.href = `mailto:${siteConfig.contact.hrEmail}?subject=${subject}&body=${body}`;
  }

  const socialLinks = [
    { icon: Linkedin, href: siteConfig.social.linkedin, label: 'LinkedIn' },
    { icon: Mail, href: siteConfig.social.email, label: 'Email' },
    { icon: MessageCircle, href: siteConfig.social.whatsapp, label: 'WhatsApp' },
    { icon: Twitter, href: siteConfig.social.x, label: 'X' },
    { icon: Facebook, href: siteConfig.social.facebook, label: 'Facebook' },
    { icon: Instagram, href: siteConfig.social.instagram, label: 'Instagram' },
  ];

  return (
    <div className="pt-28">
      <section className="premium-page-hero relative overflow-hidden py-14 sm:py-20">
        <div className="pointer-events-none absolute -left-40 top-10 h-96 w-96 rounded-full bg-blue-200/30 blur-3xl" />
        <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <Reveal>
            <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-accent">Contact Us</p>
            <h1 className="text-4xl font-bold tracking-tight text-primary sm:text-5xl">Let's talk about your career.</h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">Have a question or ready to schedule a consultation? Reach out and our team will get back to you within 24 hours.</p>
          </Reveal>
        </div>
      </section>

      <section className="section-tight bg-white" id="contact-form">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2">
            <Reveal>
              <div className="rounded-3xl border border-border bg-[#f8fafc] p-6 sm:p-8">
                <h2 className="text-xl font-bold text-primary">Send us a message</h2>
                <p className="mt-2 text-sm text-muted-foreground">Fill out the form below and we'll open your email client with a prepared message.</p>
                <form onSubmit={handleSubmit} className="mt-6 space-y-5">
                  <div>
                    <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-primary">Name</label>
                    <input id="name" type="text" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="w-full rounded-xl border border-border bg-white px-4 py-2.5 text-sm focus:border-accent focus:outline-none" placeholder="Your full name" />
                    {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name}</p>}
                  </div>
                  <div>
                    <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-primary">Phone Number</label>
                    <input id="phone" type="tel" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className="w-full rounded-xl border border-border bg-white px-4 py-2.5 text-sm focus:border-accent focus:outline-none" placeholder="+1 (555) 000-0000" />
                    {errors.phone && <p className="mt-1 text-xs text-red-500">{errors.phone}</p>}
                  </div>
                  <div>
                    <label htmlFor="linkedin" className="mb-1.5 block text-sm font-medium text-primary">LinkedIn URL</label>
                    <input id="linkedin" type="url" value={form.linkedin} onChange={(e) => setForm({ ...form, linkedin: e.target.value })} className="w-full rounded-xl border border-border bg-white px-4 py-2.5 text-sm focus:border-accent focus:outline-none" placeholder="https://linkedin.com/in/yourname" />
                  </div>
                  <div>
                    <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-primary">Message</label>
                    <textarea id="message" rows={4} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className="w-full rounded-xl border border-border bg-white px-4 py-2.5 text-sm focus:border-accent focus:outline-none" placeholder="Tell us about your career goals..." />
                    {errors.message && <p className="mt-1 text-xs text-red-500">{errors.message}</p>}
                  </div>
                  <button type="submit" className="slide-hover inline-flex h-11 items-center justify-center rounded-xl bg-primary px-6 text-sm font-semibold text-white transition-colors hover:bg-primary/90">
                    <span className="slide-hover-label">Send Us <Send className="ml-2 h-4 w-4" /></span>
                  </button>
                </form>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="space-y-6">
                <div className="rounded-3xl border border-border bg-[#f8fafc] p-6 sm:p-8">
                  <h3 className="text-lg font-bold text-primary">Follow us</h3>
                  <p className="mt-2 text-sm text-muted-foreground">Connect with us on social media for career tips and updates.</p>
                  <div className="mt-5 flex flex-wrap gap-3">
                    {socialLinks.map((s) => (
                      <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label} className="flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-white text-primary transition-all hover:bg-accent hover:text-white hover:border-accent">
                        <s.icon className="h-5 w-5" />
                      </a>
                    ))}
                  </div>
                </div>

                <div className="rounded-3xl border border-border bg-[#f8fafc] p-6 sm:p-8">
                  <h3 className="text-lg font-bold text-primary">Phone</h3>
                  <div className="mt-4 space-y-3">
                    <a href={`tel:${siteConfig.contact.usaPhone}`} className="flex items-center gap-3 text-sm text-muted-foreground hover:text-accent">
                      <Phone className="h-4 w-4 text-accent" /> {siteConfig.contact.usaPhone} <span className="text-xs text-muted-foreground/60">(USA)</span>
                    </a>
                    <a href={`tel:${siteConfig.contact.indiaPhone}`} className="flex items-center gap-3 text-sm text-muted-foreground hover:text-accent">
                      <Phone className="h-4 w-4 text-accent" /> {siteConfig.contact.indiaPhone} <span className="text-xs text-muted-foreground/60">(India)</span>
                    </a>
                  </div>
                </div>

                <div className="rounded-3xl border border-border bg-[#f8fafc] p-6 sm:p-8">
                  <h3 className="text-lg font-bold text-primary">Our Locations</h3>
                  <div className="mt-4 flex gap-2">
                    <button type="button" onClick={() => setLocation('hyderabad')} className={`rounded-lg px-3 py-1.5 text-xs font-medium transition-colors ${location === 'hyderabad' ? 'bg-primary text-white' : 'bg-white text-muted-foreground hover:bg-secondary'}`}>Hyderabad</button>
                    <button type="button" onClick={() => setLocation('bengaluru')} className={`rounded-lg px-3 py-1.5 text-xs font-medium transition-colors ${location === 'bengaluru' ? 'bg-primary text-white' : 'bg-white text-muted-foreground hover:bg-secondary'}`}>Bengaluru</button>
                  </div>
                  <div className="mt-4 flex items-start gap-3">
                    <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                    <p className="text-sm text-muted-foreground">{siteConfig.locations[location]}</p>
                  </div>
                  <div className="mt-4 overflow-hidden rounded-2xl border border-border">
                    <iframe title={`Map of ${location}`} src={siteConfig.mapUrls[location]} width="100%" height="200" style={{ border: 0 }} loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  );
}
