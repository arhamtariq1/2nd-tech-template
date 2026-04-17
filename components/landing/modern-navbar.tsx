'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Menu, Sparkles } from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from '@/components/ui/navigation-menu';

const navItems = [
  ['Services', '#services'],
  ['Work', '#work'],
  ['About', '#about'],
  ['Contact', '#contact'],
] as const;

export function ModernNavbar() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const currentIndex = hoveredIndex ?? activeIndex;

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto max-w-7xl px-5 py-5 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          className="relative overflow-hidden rounded-[1.2rem] border border-white/15 bg-black/35 shadow-[0_10px_60px_-22px_rgba(99,102,241,0.5)] backdrop-blur-2xl"
        >
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(115deg,rgba(255,255,255,0.14),rgba(255,255,255,0.02)_42%,rgba(255,255,255,0.02)_100%)]" />
          <div className="pointer-events-none absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />

          <div className="relative flex h-[4.35rem] items-center justify-between gap-3 px-3 md:px-5">
            <a
              href="#top"
              className="group inline-flex items-center rounded-full px-3 py-2 text-zinc-200 transition hover:border-white/35 hover:text-white"
            >
              <span className="text-[1.5rem] leading-none font-semibold tracking-[-0.03em] text-white">
                technak
                <span className="text-amber-300">.</span>
              </span>
            </a>

            <div className="hidden md:block">
              <NavigationMenu>
                <NavigationMenuList className="rounded-full bg-transparent p-0.5">
                  {navItems.map(([label, href], index) => (
                    <NavigationMenuItem key={label}>
                      <NavigationMenuLink
                        href={href}
                        onMouseEnter={() => setHoveredIndex(index)}
                        onMouseLeave={() => setHoveredIndex(null)}
                        onFocus={() => setHoveredIndex(index)}
                        onBlur={() => setHoveredIndex(null)}
                        onClick={() => setActiveIndex(index)}
                        className={`group relative px-4 py-2 text-sm font-medium tracking-[0.01em] transition duration-300 ${currentIndex === index ? 'text-white' : 'text-zinc-300 hover:text-zinc-100'
                          }`}
                      >
                        {label}
                        {currentIndex === index ? (
                          <motion.span
                            layoutId="nav-moving-underline"
                            transition={{ type: 'spring', stiffness: 520, damping: 42 }}
                            className="pointer-events-none absolute left-3 right-3 -bottom-0.5 h-px bg-white"
                          />
                        ) : null}
                      </NavigationMenuLink>
                    </NavigationMenuItem>
                  ))}
                </NavigationMenuList>
              </NavigationMenu>
            </div>

            <div className="flex items-center gap-2">
              <Button
                className="group hidden h-10 rounded-full border border-white/20 bg-white/[0.06] px-4 text-zinc-100 backdrop-blur-md transition-colors hover:bg-white/[0.12] md:inline-flex"
                size="sm"
              >
                <Sparkles className="mr-1.5 h-3.5 w-3.5 text-zinc-300" />
                Let&apos;s talk
                <ArrowUpRight className="ml-1 h-3.5 w-3.5 text-zinc-300 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Button>
              <Button
                size="icon"
                variant="outline"
                className="h-9 w-9 rounded-full border-white/20 bg-white/[0.04] text-zinc-200 backdrop-blur-md hover:bg-white/[0.1] md:hidden"
                aria-label="Open menu"
              >
                <Menu className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </header>
  );
}
