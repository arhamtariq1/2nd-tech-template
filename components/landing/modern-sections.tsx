'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { ArrowUpRight, Orbit, Radar, Sparkles, WandSparkles } from 'lucide-react';
import { useState } from 'react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const services = [
  {
    id: '01',
    title: 'Brand Systems',
    desc: 'Identity direction, messaging rhythm, and scalable visual rules for digital-first teams.',
    icon: Orbit,
    accent: 'from-indigo-400/25 via-violet-400/10 to-transparent',
    outcome: 'Clear market position',
    bullets: ['Voice and messaging', 'Visual language', 'Guideline kits'],
  },
  {
    id: '02',
    title: 'Experience Websites',
    desc: 'Cinematic landing pages with conversion-focused structure and premium motion behavior.',
    icon: Sparkles,
    accent: 'from-fuchsia-400/25 via-rose-400/10 to-transparent',
    outcome: 'Higher engagement + trust',
    bullets: ['Narrative UX structure', 'Motion direction', 'Component systems'],
  },
  {
    id: '03',
    title: 'Growth Launches',
    desc: 'Offer architecture, funnel surfaces, and analytics-ready releases for faster decisions.',
    icon: Radar,
    accent: 'from-cyan-400/25 via-blue-400/10 to-transparent',
    outcome: 'Faster growth loops',
    bullets: ['Offer architecture', 'Launch assets', 'Tracking and CRO'],
  },
];

const steps = [
  ['Discover', 'Audience, offer, and product story mapping.'],
  ['Design', 'High-clarity UI systems and interaction language.'],
  ['Develop', 'Fast frontend architecture with clean CMS handoff.'],
  ['Scale', 'A/B loops, iteration roadmap, and growth support.'],
] as const;

const marqueeItems = [
  '99.99% Uptime',
  'Precision Targeting',
  'AI Powered',
  'Lightning Fast',
  'Enterprise Security',
  'CRO Focused',
  'Realtime Insights',
] as const;

const faqs = [
  {
    q: 'How quickly can we launch a complete website?',
    a: 'Most launches run between 3-7 weeks depending on pages, integrations, and content readiness. We provide a clear weekly roadmap from day one.',
  },
  {
    q: 'Do you only design, or also build the website?',
    a: 'We handle both. Strategy, UI design, frontend development, and deployment are delivered as one coordinated system.',
  },
  {
    q: 'Can your team work with our in-house marketers?',
    a: 'Yes. We usually collaborate in shared channels, align on campaign goals, and ship iterative improvements every sprint.',
  },
  {
    q: 'What happens after launch?',
    a: 'We can continue with optimization cycles: conversion improvements, performance tuning, and new campaign sections as you scale.',
  },
] as const;

export function ModernSections() {
  const [openFaq, setOpenFaq] = useState<number>(0);

  return (
    <div className="relative z-10">
      <section className="px-0 py-4 md:py-6">
        <div className="relative overflow-hidden border-y border-white/10 bg-black/35 py-3 backdrop-blur-xl">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-black to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-black to-transparent" />
          <motion.div
            className="flex w-max items-center gap-3"
            animate={{ x: ['0%', '-50%'] }}
            transition={{ duration: 30, ease: 'linear', repeat: Infinity }}
          >
            {[...marqueeItems, ...marqueeItems].map((item, i) => (
              <div
                key={`${item}-${i}`}
                className="inline-flex items-center rounded-full border border-white/15 bg-white/[0.03] px-4 py-1.5 text-xs tracking-wide text-zinc-200"
              >
                <span className="mr-2 inline-block h-1.5 w-1.5 rounded-full bg-indigo-300" />
                {item}
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      <section id="services" className="px-6 py-20 md:px-10 md:pt-24 md:pb-12">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="lg:sticky lg:top-52 lg:self-start">
            <p className="text-xs uppercase tracking-[0.2em] text-zinc-400">Services</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-zinc-100 md:text-5xl">
              Crafted stacks, each with a measurable outcome.
            </h2>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-zinc-400 md:text-base">
              Different from a generic agency menu, every track is built as a focused growth
              unit with clear deliverables and launch velocity.
            </p>
            <Button
              variant="outline"
              className="mt-7 rounded-full border-white/25 bg-white/[0.03] text-zinc-100"
            >
              View full capabilities
            </Button>
          </div>

          <div className="space-y-4 md:space-y-5">
            {services.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.article
                  key={item.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="group relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-black/40 p-5 backdrop-blur-xl md:p-6"
                >
                  <div className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${item.accent} opacity-70`} />
                  <div className="relative flex flex-col gap-5 md:flex-row md:items-start md:justify-between">
                    <div className="flex items-start gap-4">
                      <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/20 bg-white/[0.05]">
                        <Icon className="h-5 w-5 text-zinc-200" />
                      </span>
                      <div>
                        <p className="text-[11px] uppercase tracking-[0.22em] text-zinc-400">
                          Service {item.id}
                        </p>
                        <h3 className="mt-1 text-xl font-medium text-zinc-100 md:text-2xl">
                          {item.title}
                        </h3>
                        <p className="mt-2 max-w-xl text-sm leading-relaxed text-zinc-300/90">
                          {item.desc}
                        </p>
                      </div>
                    </div>

                    <div className="rounded-2xl border border-white/15 bg-black/35 px-4 py-2 text-xs text-zinc-200">
                      Outcome: <span className="text-white">{item.outcome}</span>
                    </div>
                  </div>

                  <div className="relative mt-5 flex flex-wrap gap-2">
                    {item.bullets.map((point) => (
                      <span
                        key={point}
                        className="rounded-full border border-white/15 bg-white/[0.04] px-3 py-1 text-xs text-zinc-200"
                      >
                        {point}
                      </span>
                    ))}
                  </div>

                  <a
                    href="#contact"
                    className="relative mt-5 inline-flex items-center text-sm text-zinc-100 transition hover:text-white"
                  >
                    Build this track
                    <ArrowUpRight className="ml-1 h-4 w-4" />
                  </a>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      <section id="work" className="px-6 py-20 md:px-10">
        <div className="mx-auto grid max-w-7xl items-stretch gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/[0.08] to-white/[0.02] p-7 md:p-10"
          >
            <p className="text-xs uppercase tracking-[0.2em] text-zinc-400">Featured Work</p>
            <h3 className="mt-4 max-w-xl text-2xl font-semibold text-zinc-100 md:text-4xl">
              Launch surfaces designed to convert in the first 8 seconds.
            </h3>
            <p className="mt-4 max-w-xl text-sm text-zinc-400 md:text-base">
              We blend editorial storytelling with product clarity, so visitors immediately understand your value and take action.
            </p>
            <div className="mt-8 flex items-center gap-3">
              <Button className="rounded-full bg-zinc-100 text-black hover:bg-white">See case study</Button>
              <Button variant="ghost" className="rounded-full text-zinc-300 hover:bg-white/10 hover:text-white">
                All projects
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            className="rounded-[2rem] border border-white/10 bg-black/35 p-7 backdrop-blur-xl md:p-8"
          >
            <p className="text-xs uppercase tracking-[0.2em] text-zinc-400">Approach</p>
            <div className="mt-6 space-y-5">
              {steps.map(([name, text], i) => (
                <div key={name} className="flex gap-3">
                  <div className="mt-0.5 h-6 w-6 rounded-full border border-white/20 text-center text-xs leading-6 text-zinc-200">
                    {i + 1}
                  </div>
                  <div>
                    <p className="text-sm font-medium text-zinc-100">{name}</p>
                    <p className="text-sm text-zinc-400">{text}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section id="about" className="px-6 py-20 md:px-10">
        <div className="mx-auto max-w-7xl rounded-[2rem] border border-white/10 bg-black/30 p-8 backdrop-blur-xl md:p-10">
          <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-zinc-400">About</p>
              <h3 className="mt-3 text-2xl font-semibold text-zinc-100 md:text-4xl">
                A compact team for ambitious launches.
              </h3>
            </div>
            <WandSparkles className="h-7 w-7 text-zinc-300" />
          </div>
          <p className="mt-6 max-w-4xl text-sm leading-relaxed text-zinc-300 md:text-base">
            We are strategists, designers, and engineers working as one unit. That means less
            handoff friction, faster decisions, and a final website that looks sharp and performs cleanly.
          </p>
        </div>
      </section>

      <section id="faq" className="px-6 py-20 md:px-10">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[1fr_1.1fr]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-black/35 p-7 backdrop-blur-xl md:p-9"
          >
            <div className="pointer-events-none absolute -right-12 -top-12 h-44 w-44 rounded-full bg-indigo-400/20 blur-3xl" />
            <p className="text-xs uppercase tracking-[0.2em] text-zinc-400">FAQ</p>
            <h3 className="mt-3 text-2xl font-semibold text-zinc-100 md:text-4xl">
              Questions, with clear answers.
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-zinc-300 md:text-base">
              No vague promises. We keep scope, timelines, and handoff expectations transparent
              so your team knows exactly what is shipping and when.
            </p>
            <div className="mt-8 rounded-2xl border border-white/15 bg-white/[0.03] p-4">
              <p className="text-[11px] uppercase tracking-[0.2em] text-zinc-400">Most Asked</p>
              <p className="mt-2 text-sm font-medium text-zinc-100">How do we start?</p>
              <p className="mt-2 text-sm text-zinc-300">
                Book a 20-minute intro call. We map priorities, suggest the right track, and share
                a launch plan within 48 hours.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ delay: 0.05 }}
            className="space-y-3"
          >
            {faqs.map((item, index) => (
              <div
                key={item.q}
                className="overflow-hidden rounded-2xl border border-white/10 bg-black/30 backdrop-blur-xl"
              >
                <button
                  type="button"
                  onClick={() => setOpenFaq((prev) => (prev === index ? -1 : index))}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-sm font-medium text-zinc-100 md:text-base"
                >
                  {item.q}
                  <span
                    className={`inline-flex h-7 w-7 items-center justify-center rounded-full border border-white/20 text-zinc-300 transition duration-300 ${openFaq === index ? 'rotate-45 text-white' : ''
                      }`}
                  >
                    +
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {openFaq === index ? (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="border-t border-white/10 px-5 py-4 text-sm leading-relaxed text-zinc-300">
                        {item.a}
                      </div>
                    </motion.div>
                  ) : null}
                </AnimatePresence>
              </div>
            ))}
          </motion.div>
        </div>
      </section>
      <section id="features" className="px-6 py-20 md:px-10">
        <div className="mx-auto max-w-6xl">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            className="text-center text-xs font-medium tracking-[0.3em] text-zinc-300"
          >
            FEATURES
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            className="mt-7 border-y border-white/15"
          >
            {faqs.map((item, index) => (
              <div key={item.q} className="border-b border-white/10 last:border-b-0">
                <button
                  type="button"
                  onClick={() => setOpenFaq((prev) => (prev === index ? -1 : index))}
                  className="group flex w-full items-center justify-between gap-4 px-2 py-5 text-left md:px-4 md:py-6"
                >
                  <span className="text-2xl font-semibold text-zinc-100 md:text-[2rem]">
                    {item.q}
                  </span>
                  <span
                    className={`inline-flex h-8 w-8 shrink-0 items-center justify-center text-xl text-cyan-300 transition duration-300 ${openFaq === index ? 'rotate-45' : ''
                      }`}
                  >
                    +
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {openFaq === index ? (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="max-w-4xl px-2 pb-6 text-sm leading-relaxed text-zinc-300 md:px-4 md:text-base">
                        {item.a}
                      </p>
                    </motion.div>
                  ) : null}
                </AnimatePresence>
              </div>
            ))}
          </motion.div>
        </div>
      </section>
      <section id="contact" className="px-6 pb-24 pt-12 md:px-10">
        <div className="mx-auto grid max-w-7xl gap-6 rounded-[2rem] border border-white/10 bg-gradient-to-r from-white/[0.08] via-white/[0.03] to-indigo-400/[0.08] p-6 backdrop-blur-xl md:grid-cols-[0.9fr_1.1fr] md:p-10">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-zinc-400">Contact</p>
            <h3 className="mt-3 text-2xl font-semibold text-zinc-100 md:text-4xl">
              Let&apos;s build your next standout digital product.
            </h3>
            <p className="mt-4 max-w-md text-sm text-zinc-300 md:text-base">
              Tell us what you are launching, where you are stuck, and what success looks like.
              We will respond with a focused execution plan.
            </p>
            <div className="mt-6 space-y-2 text-sm text-zinc-300">
              <p>hello@technak.agency</p>
              <p>Mon-Fri / 9:00 AM - 7:00 PM</p>
            </div>
          </div>

          <form className="grid gap-4 rounded-2xl border border-white/15 bg-black/35 px-4 md:grid-cols-2 md:px-6">
            <div className="space-y-2">
              <label className="text-xs uppercase tracking-[0.14em] text-zinc-400">Full name</label>
              <Input
                placeholder="Enter your name"
                className="h-11 rounded-xl border-white/15 bg-white/[0.04] text-zinc-100 placeholder:text-zinc-500 focus-visible:ring-zinc-400/50"
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs uppercase tracking-[0.14em] text-zinc-400">Work email</label>
              <Input
                type="email"
                placeholder="name@company.com"
                className="h-11 rounded-xl border-white/15 bg-white/[0.04] text-zinc-100 placeholder:text-zinc-500 focus-visible:ring-zinc-400/50"
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs uppercase tracking-[0.14em] text-zinc-400">Company</label>
              <Input
                placeholder="Your company"
                className="h-11 rounded-xl border-white/15 bg-white/[0.04] text-zinc-100 placeholder:text-zinc-500 focus-visible:ring-zinc-400/50"
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs uppercase tracking-[0.14em] text-zinc-400">Budget range</label>
              <Input
                placeholder="$10k - $25k"
                className="h-11 rounded-xl border-white/15 bg-white/[0.04] text-zinc-100 placeholder:text-zinc-500 focus-visible:ring-zinc-400/50"
              />
            </div>
            <div className="space-y-2 md:col-span-2">
              <label className="text-xs uppercase tracking-[0.14em] text-zinc-400">Project brief</label>
              <Textarea
                placeholder="Tell us about your goals, timelines, and key requirements..."
                className="min-h-[130px] rounded-xl border-white/15 bg-white/[0.04] text-zinc-100 placeholder:text-zinc-500 focus-visible:ring-zinc-400/50"
              />
            </div>
            <div className="flex flex-wrap items-center gap-3 md:col-span-2">
              <Button
                type="submit"
                className="group rounded-full border border-white/30 bg-gradient-to-r from-white via-zinc-100 to-white px-6 text-black shadow-[0_10px_30px_-14px_rgba(255,255,255,0.9)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_16px_38px_-16px_rgba(255,255,255,0.95)]"
              >
                Send project inquiry
                <ArrowUpRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Button>
              <p className="text-xs text-zinc-400">Average reply time: under 24 hours</p>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}
