import React from 'react';
import { motion } from 'framer-motion';
import { EXPERIENCE_DATA } from '../data/portfolioData';
import { SpotlightCard } from './SpotlightCard';

export const Experience: React.FC = () => {
  return (
    <section
      id="experience"
      className="relative py-28 px-6 bg-[#0a0a0a] border-t border-white/[0.06] overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-neutral-300">
            Experience
          </h2>
        </motion.div>

        <div className="relative">
          <div className="absolute left-4 md:left-1/2 top-2 bottom-2 w-[1px] -translate-x-1/2 bg-gradient-to-b from-white/25 via-white/10 to-transparent" />

          <div className="space-y-16 md:space-y-24">
            {EXPERIENCE_DATA.map((exp, index) => {
              const isLeft = index % 2 === 0;

              return (
                <div
                  key={exp.id}
                  className="relative grid grid-cols-1 md:grid-cols-12 items-start"
                >
                  <motion.div
                    initial={{ scale: 0.5, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true, margin: '-80px' }}
                    transition={{ duration: 0.4 }}
                    className="absolute left-4 md:left-1/2 top-1 -translate-x-1/2 z-20 flex items-center justify-center w-6 h-6 rounded-full bg-[#0a0a0a] border border-white/40 shadow-[0_0_16px_rgba(255,255,255,0.35)]"
                  >
                    <span className="w-2.5 h-2.5 rounded-full bg-white" />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: isLeft ? -30 : 30, y: 15 }}
                    whileInView={{ opacity: 1, x: 0, y: 0 }}
                    viewport={{ once: true, margin: '-60px' }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className={`pl-12 md:pl-0 md:col-span-5 ${
                      isLeft
                        ? 'md:col-start-1 md:pr-8'
                        : 'md:col-start-8 md:pl-8'
                    }`}
                  >
                    <SpotlightCard className="p-6 sm:p-8 rounded-2xl bg-[#0e0e0e]/95 border border-white/10 hover:border-white/25 shadow-2xl">
                      <div className="flex flex-wrap items-center justify-between gap-3 mb-2">
                        <h3 className="text-xl sm:text-2xl font-medium text-neutral-400">
                          {exp.company}
                        </h3>
                        <span className="px-3.5 py-1 rounded-full text-xs font-medium bg-[#171717] text-neutral-300 border border-white/10">
                          {exp.period}
                        </span>
                      </div>

                      <div className="mb-5">
                        <h4 className="text-base sm:text-lg font-semibold text-white">
                          {exp.role}
                        </h4>
                        <p className="text-xs text-neutral-500 mt-0.5">
                          {exp.location}
                        </p>
                      </div>

                      <ul className="space-y-3.5 text-sm text-neutral-400 leading-relaxed mb-7 list-disc pl-4 marker:text-neutral-500">
                        {exp.highlights.map((item, idx) => (
                          <li key={idx}>
                            <span>{item.text}</span>
                            {item.metric && (
                              <strong className="text-white font-semibold">
                                {item.metric}
                              </strong>
                            )}
                          </li>
                        ))}
                      </ul>

                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 rounded-full text-xs font-medium bg-[#151515] text-neutral-300 border border-white/10 hover:border-white/30 hover:text-white transition-colors duration-200"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </SpotlightCard>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};