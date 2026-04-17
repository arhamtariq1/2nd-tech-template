'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { ArrowUpRight, Check, Orbit, Radar, Sparkles } from 'lucide-react';
import { useRef, useState } from 'react';
import { useMotionTemplate, useReducedMotion, useScroll, useTransform } from 'framer-motion';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { RadialScrollGallery } from '@/components/ui/portfolio-and-image-gallery';
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

const processSteps = [
  {
    step: '05',
    title: 'Launch',
    desc: 'Deployment + optimization loop',
    image:
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
  },
  {
    step: '04',
    title: 'Build',
    desc: 'Frontend development and QA',
    image:
      'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=1200&q=80',
  },
  {
    step: '03',
    title: 'Design',
    desc: 'Interface and interaction system',
    image:
      'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1200&q=80',
  },
  {
    step: '02',
    title: 'Strategy',
    desc: 'Roadmap and growth blueprint',
    image:
      'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80',
  },
  {
    step: '01',
    title: 'Discovery',
    desc: 'Requirements + goals alignment',
    image:
      'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80',
  },
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

const circleColors = {
  black: '#09090B',
  blue: '#27272A',
  blueDeep: '#18181B',
  teal: '#3F3F46',
  tealDeep: '#A1A1AA',
};

const clamp01 = (x: number) => Math.max(0, Math.min(1, x));
const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
const easeOut = (t: number) => 1 - Math.pow(1 - t, 3);
const easeInOut = (t: number) => (t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2);

export function ModernSections() {
  const [openFaq, setOpenFaq] = useState<number>(0);
  const aboutRef = useRef<HTMLElement | null>(null);
  const shouldReduceMotion = useReducedMotion();

  const { scrollYProgress: aboutHeadingProgress } = useScroll({
    target: aboutRef,
    offset: ['start 85%', 'end 60%'],
  });
  const insetRight = useTransform(aboutHeadingProgress, [0, 1], [100, 0]);
  const headingClipPath = useTransform(insetRight, (v) => `inset(0 ${v}% 0 0)`);

  const { scrollYProgress: aboutBodyProgress } = useScroll({
    target: aboutRef,
    offset: ['start 80%', 'end 52%'],
  });
  const aboutBodyOpacity = useTransform(aboutBodyProgress, [0, 1], [0, 1]);
  const aboutBodyY = useTransform(aboutBodyProgress, [0, 1], [18, 0]);

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

      <section id="about" ref={aboutRef} className="px-6 py-20 md:px-10">
        <div className="mx-auto max-w-7xl p-8 md:p-10">
          <p className="text-center text-sm font-medium uppercase tracking-[0.2em] text-zinc-200">About</p>
          <div className="relative mt-5">
            <p
              aria-hidden="true"
              className="pointer-events-none select-none text-center font-semibold tracking-[-0.02em] text-zinc-600 md:text-[3.25rem] text-[2rem] leading-[1.08]"
            >
              We design and build conversion-first digital experiences that blend strategy,
              visual polish, and engineering precision to help ambitious teams launch faster
              and scale with clarity.
            </p>
            <motion.p
              style={{ clipPath: shouldReduceMotion ? 'inset(0 0% 0 0)' : headingClipPath }}
              className="pointer-events-none absolute inset-0 select-none text-center font-semibold tracking-[-0.02em] text-zinc-100 md:text-[3.25rem] text-[2rem] leading-[1.08]"
            >
              We design and build conversion-first digital experiences that blend strategy,
              visual polish, and engineering precision to help ambitious teams launch faster
              and scale with clarity.
            </motion.p>
          </div>
        </div>
      </section>

      <section id="process" className="px-6 py-20 md:px-10">
        <div className="mx-auto max-w-7xl overflow-hidden">
          <div className="px-6 pt-10 text-center md:px-10">
            <p className="text-xs uppercase tracking-[0.2em] text-zinc-400">Our Process</p>
            <h3 className="mt-3 text-2xl font-semibold text-zinc-100 md:text-4xl">
              A systemized workflow from idea to launch.
            </h3>
            <p className="mx-auto mt-3 max-w-xl text-sm text-zinc-300 md:text-base">
              Scroll to see how each stage builds momentum for your product and marketing launch.
            </p>
          </div>

          <RadialScrollGallery
            className="!min-h-[640px] -mt-4"
            baseRadius={360}
            mobileRadius={230}
            scrollDuration={1600}
            visiblePercentage={42}
            startTrigger="top top"
            angleOffsetDeg={-72}
          >
            {(hoveredIndex) =>
              processSteps.map((item, index) => {
                const isActive = hoveredIndex === index;
                return (
                  <div
                    key={item.step}
                    className={`
                      relative h-[230px] w-[160px] overflow-hidden rounded-2xl border p-5 sm:h-[280px] sm:w-[200px]
                      flex flex-col items-start justify-between transition-all duration-500
                      ${isActive
                        ? 'scale-100 border-white/35 text-zinc-100 shadow-[0_18px_45px_-20px_rgba(0,0,0,0.6)]'
                        : 'scale-90 border-white/20 text-zinc-100'}
                    `}
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      className="absolute inset-0 h-full w-full object-cover opacity-85 transition duration-500"
                    />
                    <div
                      className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/40 to-black/20 transition duration-500"
                    />
                    <div className="relative z-10 flex w-full items-start justify-between">
                      <span className="font-mono text-lg text-zinc-200">
                        {item.step}
                      </span>
                      {isActive ? <Check className="h-5 w-5 text-zinc-100" /> : null}
                    </div>

                    <div className="relative z-10">
                      <h4 className="text-xl font-semibold">{item.title}</h4>
                      <p className="mt-1 text-xs text-zinc-300">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                );
              })
            }
          </RadialScrollGallery>
        </div>
      </section>

      <ScrollCircleRevealSection />

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
                  <span className="text-2xl font-medium text-zinc-100 md:text-[2.1rem]">
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

function ScrollCircleRevealSection() {
  const outerRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: outerRef,
    offset: ['start start', 'end end'],
  });

  const scale1 = useTransform(scrollYProgress, (p) => {
    const growT = easeOut(clamp01((p - 0.04) / 0.68));
    return lerp(0, 1.5, growT) * 1.0;
  });
  const opacity1 = useTransform(scrollYProgress, (p) => {
    if (p < 0.68) return 1;
    return lerp(1, 0, easeOut(clamp01((p - 0.68) / 0.12)));
  });

  const scale2 = useTransform(scrollYProgress, (p) => {
    const growT = easeOut(clamp01((p - 0.04) / 0.68));
    return lerp(0, 1.5, growT) * 0.56;
  });
  const opacity2 = opacity1;

  const scale3 = useTransform(scrollYProgress, (p) => {
    const growT = easeOut(clamp01((p - 0.04) / 0.68));
    return lerp(0, 1.5, growT) * 0.22;
  });
  const opacity3 = opacity1;

  const scaleDot = useTransform(scrollYProgress, (p) => {
    const growT = easeOut(clamp01((p - 0.04) / 0.68));
    return lerp(0, 1.5, growT) * 0.07;
  });
  const opacityDot = opacity1;

  const scale4 = useTransform(scrollYProgress, (p) => {
    const lastT = easeOut(clamp01((p - 0.68) / 0.26));
    return lerp(0, 1.55, lastT);
  });
  const opacity4 = useTransform(scrollYProgress, (p) => (p >= 0.68 ? 1 : 0));

  const maskPct = useTransform(scrollYProgress, (p) => {
    const removeT = easeInOut(clamp01((p - 0.82) / 0.16));
    return lerp(0, 100, removeT);
  });
  const maskEdge = useTransform(maskPct, (v) => Math.min(100, v + 0.8));
  const maskImage = useMotionTemplate`radial-gradient(circle at 50% 50%, rgba(0,0,0,0) 0%, rgba(0,0,0,0) ${maskPct}%, rgba(0,0,0,1) ${maskEdge}%)`;

  const labelOpacity = useTransform(scrollYProgress, (p) => 1 - easeOut(clamp01((p - 0.32) / 0.18)));
  const ctaOpacity = useTransform(scrollYProgress, (p) => clamp01((p - 0.74) / 0.14));
  const ctaY = useTransform(scrollYProgress, (p) => {
    const t = clamp01((p - 0.74) / 0.14);
    return lerp(14, 0, easeOut(t));
  });

  if (shouldReduceMotion) {
    return (
      <section className="relative px-6 py-20 md:px-10">
        <div className="mx-auto max-w-6xl rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/[0.08] to-white/[0.02] p-8 text-center backdrop-blur-xl md:p-10">
          <RevealCtaContent />
        </div>
      </section>
    );
  }

  return (
    <section className="w-full">
      <div ref={outerRef} className="relative w-full" style={{ height: '420vh' }}>
        <div className="sticky top-0 h-screen w-full overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-transparent to-black/30" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.07),transparent_62%)]" />
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.07] mix-blend-soft-light"
            style={{
              backgroundImage:
                'radial-gradient(circle at 20% 20%, rgba(255,255,255,0.35) 0.5px, transparent 0.6px), radial-gradient(circle at 80% 30%, rgba(255,255,255,0.25) 0.5px, transparent 0.6px), radial-gradient(circle at 35% 75%, rgba(255,255,255,0.25) 0.5px, transparent 0.6px), radial-gradient(circle at 70% 85%, rgba(255,255,255,0.2) 0.5px, transparent 0.6px)',
              backgroundSize: '3px 3px, 4px 4px, 3px 3px, 5px 5px',
            }}
          />
          <motion.div
            style={{ opacity: labelOpacity }}
            className="pointer-events-none absolute inset-0 z-10 flex items-center justify-center text-center"
          >
            <div
              className="inline-block font-extrabold uppercase text-zinc-300"
              style={{

                fontSize: 'clamp(30px, 7vw, 86px)',
                letterSpacing: '0.07em',
                lineHeight: 0.95,
                textShadow: '0 0 30px rgba(161,161,170,0.25)',
              }}
            >
              Explore
            </div>
          </motion.div>

          <div className="pointer-events-none absolute inset-0 z-20">
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              <motion.div
                style={{ scale: scale1, opacity: opacity1, backgroundColor: circleColors.black }}
                className="h-[120vmax] w-[120vmax] rounded-full"
              />
            </div>
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              <motion.div
                style={{ scale: scale2, opacity: opacity2, backgroundColor: circleColors.blue }}
                className="h-[120vmax] w-[120vmax] rounded-full"
              />
            </div>
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              <motion.div
                style={{ scale: scale3, opacity: opacity3, backgroundColor: circleColors.teal }}
                className="h-[120vmax] w-[120vmax] rounded-full"
              />
            </div>
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              <motion.div
                style={{ scale: scaleDot, opacity: opacityDot, backgroundColor: circleColors.tealDeep }}
                className="h-8 w-8 rounded-full"
              />
            </div>
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              <motion.div
                style={{
                  scale: scale4,
                  opacity: opacity4,
                  maskImage,
                  WebkitMaskImage: maskImage,
                  backgroundColor: circleColors.blueDeep,
                }}
                className="h-[120vmax] w-[120vmax] rounded-full"
              />
            </div>
          </div>

          <motion.div
            style={{ opacity: ctaOpacity, y: ctaY }}
            className="relative z-10 flex h-full items-center justify-center px-6"
          >
            <RevealCtaContent />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function RevealCtaContent() {
  return (
    <div className="mx-auto flex w-full max-w-[900px] flex-col items-center text-center">
      <div className="w-full rounded-[2rem] border border-white/10 bg-black/35 px-6 py-10 backdrop-blur-xl md:px-10 md:py-12">
        <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-zinc-300 md:text-xs">
          Continue exploring
        </p>
        <h2 className="mt-4 text-balance text-[clamp(1.75rem,4.5vw,2.75rem)] font-extrabold leading-[1.08] tracking-[-0.03em] text-zinc-100">
          See our systems in context
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-sm font-medium leading-relaxed text-zinc-300 md:text-base">
          Browse the gallery for product visuals, launch highlights, and references before
          starting your next project.
        </p>
        <div className="mt-9 flex w-full max-w-md flex-col gap-3 sm:mx-auto sm:max-w-none sm:flex-row sm:flex-wrap sm:justify-center sm:gap-4">
          <a
            href="#work"
            className="inline-flex min-h-[52px] items-center justify-center rounded-full border border-white/25 bg-gradient-to-r from-white via-zinc-100 to-white px-8 text-sm font-bold uppercase tracking-[0.14em] text-black shadow-[0_10px_30px_-14px_rgba(255,255,255,0.9)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_16px_38px_-16px_rgba(255,255,255,0.95)] md:min-h-[56px] md:px-10"
          >
            View work
          </a>
          <a
            href="#services"
            className="inline-flex min-h-[52px] items-center justify-center rounded-full border border-white/20 bg-white/[0.04] px-8 text-sm font-bold uppercase tracking-[0.14em] text-zinc-100 backdrop-blur-sm transition-colors hover:bg-white/[0.1] md:min-h-[56px] md:px-10"
          >
            Full capabilities
          </a>
        </div>
      </div>
    </div>
  );
}
