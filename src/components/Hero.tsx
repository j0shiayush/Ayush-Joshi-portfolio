import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, ArrowDown } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Hero: React.FC = () => {
  const fullText = `Hi, I'm ${PERSONAL_INFO.name}`;
  const [typedText, setTypedText] = useState('');
  const [activeRoleIndex, setActiveRoleIndex] = useState(0);

  // Typewriter effect
  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setTypedText(fullText.slice(0, i + 1));
      i++;
      if (i === fullText.length) clearInterval(interval);
    }, 75);
    return () => clearInterval(interval);
  }, [fullText]);

  // 2-Second Looping Role Highlight Effect
  useEffect(() => {
    const roleInterval = setInterval(() => {
      setActiveRoleIndex((prev) => (prev + 1) % PERSONAL_INFO.roles.length);
    }, 2000);
    return () => clearInterval(roleInterval);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center items-center px-6 pt-28 pb-16 bg-obsidian-grid overflow-hidden"
    >
      {/* Subtle top radial spotlight */}
      <div className="pointer-events-none absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-white/[0.04] blur-[130px] rounded-full" />

      <div className="max-w-6xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center z-10">
        {/* Left / Center Content Column */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left"
        >
          {/* Achievement / Status Pill */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-xs text-neutral-300 mb-6">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>{PERSONAL_INFO.statusBadge}</span>
            <span className="text-neutral-600">•</span>
            <span className="text-neutral-400 hidden sm:inline">AIR 92 SRMJEEE Scholar</span>
          </div>

          {/* Typewriter Main Heading */}
          <h1 className="text-4xl sm:text-6xl xl:text-7xl font-bold tracking-tight text-neutral-300 leading-[1.12] mb-5">
            {typedText}
            <span className="inline-block w-[3px] h-10 sm:h-14 xl:h-16 bg-neutral-400 ml-1.5 align-middle animate-pulse" />
          </h1>

          {/* Animated Role Highlight Bar */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 sm:gap-3 text-base sm:text-xl font-medium mb-4">
            {PERSONAL_INFO.roles.map((role, idx) => (
              <React.Fragment key={role}>
                <span
                  className={`transition-colors duration-500 ${
                    activeRoleIndex === idx
                      ? 'text-white font-semibold'
                      : 'text-neutral-500'
                  }`}
                >
                  {role}
                </span>
                {idx < PERSONAL_INFO.roles.length - 1 && (
                  <span className="text-neutral-600">•</span>
                )}
              </React.Fragment>
            ))}
          </div>

          {/* Subtitle / Bio Tagline */}
          <p className="text-neutral-400 text-sm sm:text-base max-w-xl leading-relaxed mb-8">
            {PERSONAL_INFO.tagline}
          </p>

          {/* Minimalist Text Social Links */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 text-sm text-neutral-400 mb-8">
            <a href="https://github.com/j0shiayush" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-200">GitHub</a>
            <a href="https://www.linkedin.com/in/ayush-joshi-86b06a21b/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-200">LinkedIn</a>
            <a href={`mailto:${PERSONAL_INFO.email}`} className="hover:text-white transition-colors duration-200">{PERSONAL_INFO.email}</a>
            <span className="text-neutral-500">{PERSONAL_INFO.phone}</span>
          </div>

          {/* Resume Pill Button & Projects CTA */}
          <div className="flex flex-wrap items-center gap-4">
            <a
              href={PERSONAL_INFO.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2.5 px-6 py-2.5 rounded-full bg-[#121212] hover:bg-[#1c1c1c] text-neutral-200 hover:text-white border border-white/15 hover:border-white/35 text-sm font-medium transition-all duration-300 shadow-[0_0_25px_rgba(255,255,255,0.03)] hover:shadow-[0_0_30px_rgba(255,255,255,0.1)]"
            >
              <span>Resume</span>
              <ExternalLink className="w-3.5 h-3.5 text-neutral-400 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>

            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm text-neutral-400 hover:text-white transition-colors"
            >
              <span>View Projects</span>
            </a>
          </div>
        </motion.div>

        {/* Right Column: Clean Professional Portrait */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="lg:col-span-5 flex justify-center relative"
        >
          <div className="relative group">
            {/* Ambient Backlight Glow */}
            <div className="absolute -inset-2 rounded-3xl bg-gradient-to-tr from-white/10 via-white/5 to-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />

            {/* Single Professional Photo Card (No Badges) */}
            <motion.div
              whileHover={{ rotate: 0, scale: 1.02 }}
              initial={{ rotate: 2 }}
              transition={{ type: 'spring', stiffness: 260, damping: 20 }}
              className="relative w-72 h-80 sm:w-80 sm:h-96 rounded-3xl p-2.5 bg-[#121212] border border-white/15 shadow-2xl overflow-hidden"
            >
              <div className="w-full h-full rounded-2xl overflow-hidden relative bg-neutral-900">
                <img
                  src={PERSONAL_INFO.profileImage}
                  alt={PERSONAL_INFO.name}
                  onError={(e) => {
                    (e.target as HTMLImageElement).src =
                      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80';
                  }}
                  className="w-full h-full object-cover object-center grayscale-[15%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                />
                {/* Enhanced bottom gradient overlay inside portrait */}
                <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#050505] via-black/70 to-transparent flex items-end p-5">
                  <div className="w-full">
                    {/* Elegant Soft Gold color for the name with a drop shadow */}
                    <p className="text-amber-300 text-base font-bold tracking-wide drop-shadow-lg">
                      {PERSONAL_INFO.name}
                    </p>
                    {/* Crisp Ice Blue/Cyan for the subtitle to ensure high contrast */}
                    <p className="text-cyan-50 text-xs font-medium mt-1 drop-shadow-md">
                      B.Tech CSE • SRM University (8.1 CGPA)
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Bottom Scroll Indicator */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 6, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-xs text-neutral-500 hover:text-neutral-300 transition-colors"
      >
        <span>Scroll</span>
        <ArrowDown className="w-3.5 h-3.5" />
      </motion.a>
    </section>
  );
};