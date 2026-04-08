'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';

import { Button } from '@/components/ui/button';

export function HeroStructured() {
  return (
    <section className="relative min-h-screen px-6 pb-10 pt-36 md:px-10 md:pt-40">
      <div className="mx-auto flex min-h-[calc(100vh-10rem)] w-full max-w-[1350px] flex-col justify-between">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl"
        >
          <p className="mb-5 inline-flex rounded-full border border-white/20 bg-white/[0.04] px-3 py-1 text-[11px] uppercase tracking-[0.2em] text-zinc-300">
            Creative Digital Agency
          </p>
          <h1 className="text-4xl font-semibold leading-[0.95] tracking-[-0.03em] text-zinc-100 md:text-4xl lg:text-5xl">
            We build bold digital experiences for modern brands,
            <span className="block bg-gradient-to-r from-white via-zinc-300 to-zinc-500 bg-clip-text text-transparent">
              faster and smarter.
            </span>
          </h1>
          <p className="mt-4 max-w-2xl text-sm text-zinc-300/90 md:text-base">
            From strategy and UX to high-performance development, we design
            websites that feel cinematic, convert better, and scale with your
            business roadmap.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="ml-auto mt-10 w-full max-w-md rounded-3xl border border-white/15 bg-black/35 p-5 backdrop-blur-xl md:py-6 md:px-2"
        >
          <p className="text-sm leading-relaxed text-zinc-300">
            We partner with startups and established teams to craft premium
            web experiences, eCommerce platforms, and growth-ready marketing
            systems with clean execution.
          </p>
          <div className="mt-5 flex flex-wrap items-center gap-3">
            <Button className="rounded-full bg-white text-black hover:bg-zinc-200">
              Start a project
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              className="rounded-full border-white/25 bg-white/[0.03] text-zinc-100 hover:bg-white/[0.1]"
            >
              <Play className="mr-2 h-4 w-4" />
              View reel
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
