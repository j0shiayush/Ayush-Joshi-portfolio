import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, MapPin, Calendar } from 'lucide-react';
import { SKILL_CATEGORIES, EDUCATION_DATA, PERSONAL_INFO } from '../data/portfolioData';
import { SpotlightCard } from './SpotlightCard';

export const About: React.FC = () => {
  return (
    <section
      id="about"
      className="relative py-28 px-6 bg-[#0a0a0a] border-t border-white/[0.06]"
    >
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-neutral-300 mb-10">
            About
          </h2>

          <p className="text-base sm:text-lg md:text-xl text-neutral-400 max-w-3xl mx-auto leading-relaxed font-normal">
            I architect{' '}
            <span className="text-white font-medium hover:underline decoration-white/40 underline-offset-4 transition-all">
              scalable full-stack systems
            </span>{' '}
            where low-latency{' '}
            <span className="text-white font-medium hover:underline decoration-white/40 underline-offset-4 transition-all">
              backend engineering
            </span>{' '}
            meets intelligent{' '}
            <span className="text-white font-medium hover:underline decoration-white/40 underline-offset-4 transition-all">
              AI & RAG pipelines
            </span>
            . With hands-on experience across{' '}
            <span className="text-white font-medium">React.js, Next.js, FastAPI,</span> and{' '}
            <span className="text-white font-medium">LLM orchestration</span>, I transform complex
            problems into high-performance production applications. Graduated with a B.Tech in CSE from{' '}
            <span className="text-white font-medium">SRM University (8.1 CGPA)</span> on a{' '}
            <span className="text-white font-medium">100% Founders Scholarship (AIR 92)</span>.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-16"
        >
          <div className="mb-6 p-4 sm:px-6 rounded-2xl bg-gradient-to-r from-white/[0.05] via-white/[0.02] to-transparent border border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3.5">
              <div className="p-2.5 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400">
                <Award className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider text-amber-400/90 font-semibold">
                  Key Achievement
                </p>
                <p className="text-sm sm:text-base text-neutral-200 font-medium">
                  {PERSONAL_INFO.achievementBanner}
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {EDUCATION_DATA.map((edu, index) => (
              <SpotlightCard key={index} className="p-6">
                <div className="flex items-start justify-between gap-4 mb-3">
                  <div className="flex items-center gap-2.5 text-neutral-300 font-semibold text-base">
                    <GraduationCap className="w-5 h-5 text-neutral-400 shrink-0" />
                    <span>{edu.institution}</span>
                  </div>
                </div>
                <p className="text-white text-sm font-medium mb-2">{edu.degree}</p>
                <p className="text-xs sm:text-sm text-emerald-400/90 font-medium mb-4">
                  {edu.score}
                </p>
                <div className="flex flex-wrap items-center justify-between text-xs text-neutral-500 pt-3 border-t border-white/[0.06]">
                  <span className="inline-flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    {edu.period}
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5" />
                    {edu.location}
                  </span>
                </div>
              </SpotlightCard>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <h3 className="text-xl sm:text-2xl font-medium text-neutral-300">
            Skills
          </h3>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {SKILL_CATEGORIES.map((category, idx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: idx * 0.1 }}
            >
              <SpotlightCard className="p-7 h-full flex flex-col items-center text-center">
                <h4 className="text-lg font-medium text-neutral-400 mb-6">
                  {category.title}
                </h4>
                <div className="flex flex-wrap justify-center gap-2.5">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-medium bg-[#161616] text-neutral-300 border border-white/10 hover:border-white/30 hover:text-white hover:bg-[#1f1f1f] hover:-translate-y-0.5 transition-all duration-200 cursor-default shadow-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};