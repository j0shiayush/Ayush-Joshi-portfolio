import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ExternalLink, Code2, ChevronRight, ChevronLeft } from 'lucide-react';
import { PROJECTS_DATA } from '../data/portfolioData';

export const Projects: React.FC = () => {
  const carouselRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -400, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 400, behavior: 'smooth' });
    }
  };

  return (
    <section id="projects" className="relative py-28 bg-[#0a0a0a] border-t border-white/[0.06] overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6">
        {/* Section Heading & Controls */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-neutral-300">
              Projects
            </h2>
          </motion.div>

          <div className="flex items-center gap-3">
            <button
              onClick={scrollLeft}
              className="p-2.5 rounded-full bg-[#111111] border border-white/10 text-neutral-400 hover:text-white hover:border-white/25 transition-all"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={scrollRight}
              className="p-2.5 rounded-full bg-[#111111] border border-white/10 text-neutral-400 hover:text-white hover:border-white/25 transition-all"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Horizontal Snapping Carousel */}
        <div 
          ref={carouselRef}
          className="flex overflow-x-auto snap-x snap-mandatory gap-6 sm:gap-8 pb-10 hide-scrollbar"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {/* Spacer for initial alignment */}
          <div className="w-[calc((100vw-72rem)/2)] shrink-0 hidden xl:block" />

          {PROJECTS_DATA.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative shrink-0 w-[320px] sm:w-[450px] lg:w-[550px] snap-center sm:snap-start group rounded-3xl overflow-hidden bg-[#111] border border-white/10"
            >
              {/* Project Image Full Wrapper */}
              <div className="relative h-[450px] sm:h-[550px] w-full overflow-hidden bg-neutral-900">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out opacity-60 group-hover:opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/60 to-transparent" />
              </div>

              {/* Floating Glass Info Card */}
              <div className="absolute inset-x-4 sm:inset-x-6 bottom-4 sm:bottom-6 p-6 rounded-2xl bg-[#0a0a0a]/80 backdrop-blur-xl border border-white/10 shadow-2xl transform group-hover:-translate-y-2 transition-transform duration-500">
                <div className="flex flex-wrap items-start justify-between gap-4 mb-3">
                  <h3 className="text-xl sm:text-2xl font-semibold text-neutral-200">
                    {project.title}
                  </h3>
                  
                  {/* Action Links */}
                  <div className="flex items-center gap-2.5">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-full bg-white/5 hover:bg-white/15 text-neutral-400 hover:text-white transition-colors"
                      title="View Source Code"
                    >
                      <Code2 className="w-4 h-4" />
                    </a>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white text-black text-xs font-semibold hover:bg-neutral-200 transition-colors"
                    >
                      <span>View</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>

                <p className="text-sm text-neutral-400 leading-relaxed mb-4">
                  {project.description}
                </p>
                
                <p className="text-xs font-semibold text-emerald-400 mb-5">
                  Metrics: {project.metricsHighlight}
                </p>

                <div className="flex flex-wrap gap-2 pt-4 border-t border-white/[0.08]">
                  {project.technologies.map(tech => (
                    <span key={tech} className="px-2.5 py-1 rounded-md text-[11px] font-medium bg-white/5 text-neutral-300">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
          
          {/* End Spacer */}
          <div className="w-[calc((100vw-72rem)/2)] shrink-0 hidden xl:block" />
        </div>
      </div>

      <style>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};