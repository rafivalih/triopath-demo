'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Check } from 'lucide-react';
import { SectionHeading } from '@/components/shared/SectionHeading';
import { Reveal } from '@/components/shared/Reveal';
import { Icon } from '@/components/shared/Icon';
import { pricingPlans, pricingByRegion } from '@/constants/pricing';

type Region = 'USA' | 'India';

export default function PricingPage() {
  const [region, setRegion] = useState<Region>('USA');
  const currency = region === 'USA' ? '$' : '₹';

  return (
    <div className="pt-28">
      <section className=" relative overflow-hidden py-14 sm:py-20">
        <div className="pointer-events-none absolute -left-40 top-10 h-96 w-96 rounded-full bg-blue-200/30 blur-3xl" />
        <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <Reveal>
            <p className="mb-4 mt-2 text-sm font-semibold uppercase tracking-wider text-accent">Pricing</p>
            <h1 className="text-4xl font-bold tracking-tight text-primary sm:text-[41px]">Affordable career services for every stage.</h1>
            <p className="mx-auto mt-2 max-w-2xl text-[14px] leading-relaxed text-muted-foreground">Choose the plan that fits where you are in your career. Upgrade, downgrade, or cancel anytime.</p>
          </Reveal>
        </div>
      </section>

      <section className="bg-[#f7f9fc] pb-14 sm:pb-20">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-primary p-6 sm:p-10 lg:p-14">
            <div className="flex flex-col items-center gap-6">
              <div className="flex items-center gap-3">
                <span className={`text-sm font-medium transition-colors ${region === 'USA' ? 'text-white' : 'text-white/40'}`}>USA</span>
                <button
                  type="button"
                  onClick={() => setRegion(region === 'USA' ? 'India' : 'USA')}
                  aria-label={`Switch to ${region === 'USA' ? 'India' : 'USA'} pricing`}
                  className="relative h-8 w-16 rounded-full bg-white/15 transition-colors"
                >
                  <motion.span
                    layout
                    transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                    className={`absolute top-1 flex h-6 w-6 items-center justify-center rounded-full text-xs font-bold ${region === 'USA' ? 'left-1 bg-white text-primary' : 'left-9 bg-accent text-white'}`}
                  >
                    {region === 'USA' ? '$' : '₹'}
                  </motion.span>
                </button>
                <span className={`text-sm font-medium transition-colors ${region === 'India' ? 'text-white' : 'text-white/40'}`}>India</span>
              </div>

              <div className="grid w-full gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
                {pricingPlans.map((plan, i) => {
                  const price = pricingByRegion[region][plan.id as keyof typeof pricingByRegion[typeof region]];
                  return (
                    <Reveal key={plan.id} delay={i * 0.05}>
                      <div className={`relative h-full rounded-2xl border p-5 transition-all ${plan.popular ? 'border-accent bg-white shadow-premium' : 'border-white/10 bg-white/5'}`}>
                        {plan.popular && (
                          <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-accent px-3 py-1 text-xs font-bold text-white">Most Popular</span>
                        )}
                        <div className={`flex h-10 w-10 items-center justify-center rounded-xl ${plan.popular ? 'bg-accent/10 text-accent' : 'bg-white/10 text-white'}`}>
                          <Icon name={plan.icon} className="h-5 w-5" />
                        </div>
                        <h3 className={`mt-4 font-bold ${plan.popular ? 'text-primary' : 'text-white'}`}>{plan.name}</h3>
                        <p className={`mt-1 text-xs leading-relaxed ${plan.popular ? 'text-muted-foreground' : 'text-white/50'}`}>{plan.description}</p>
                        <div className="mt-4">
                          <AnimatePresence mode="wait">
                            <motion.div
                              key={region + plan.id}
                              initial={{ opacity: 0, y: 8 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: -8 }}
                              transition={{ duration: 0.2 }}
                            >
                              <span className={`text-3xl font-bold ${plan.popular ? 'text-primary' : 'text-white'}`}>{currency}{price.toLocaleString()}</span>
                              <span className={`text-xs ${plan.popular ? 'text-muted-foreground' : 'text-white/40'}`}>/mo</span>
                            </motion.div>
                          </AnimatePresence>
                        </div>
                        <ul className="mt-5 space-y-2">
                          {plan.features.map((f) => (
                            <li key={f} className={`flex items-start gap-2 text-xs ${plan.popular ? 'text-muted-foreground' : 'text-white/60'}`}>
                              <Check className={`mt-0.5 h-3.5 w-3.5 shrink-0 ${plan.popular ? 'text-emerald-500' : 'text-emerald-400'}`} /> {f}
                            </li>
                          ))}
                        </ul>
                        <a
                          href="/contact#contact-form"
                          className={`slide-hover mt-6 flex h-10 items-center justify-center rounded-lg text-xs font-semibold transition-all ${plan.popular ? 'bg-primary text-white hover:bg-primary/90' : 'bg-white/10 text-white hover:bg-white/20'}`}
                        >
                          <span className="slide-hover-label">Get Started <ArrowRight className="ml-1.5 h-3.5 w-3.5" /></span>
                        </a>
                      </div>
                    </Reveal>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
