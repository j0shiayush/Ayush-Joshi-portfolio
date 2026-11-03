import React from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { SpotlightCard } from './SpotlightCard';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="relative min-h-screen flex flex-col px-6 pt-32 pb-6 bg-[#0a0a0a] border-t border-white/[0.06]">
      
      <div className="flex-grow flex flex-col justify-center max-w-3xl mx-auto w-full">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-neutral-300 mb-4">
            Contact
          </h2>
          <p className="text-neutral-500 text-sm sm:text-base">
            The scroll ends here, but the story continues. Say Hello.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <SpotlightCard className="p-6 sm:p-10 rounded-3xl bg-[#0d0d0d]/80 backdrop-blur-xl border border-white/10 shadow-2xl">
            <div className="mb-8">
              <h3 className="text-2xl font-medium text-neutral-200 mb-2">Let's get in touch</h3>
              <p className="text-neutral-400 text-sm">
                Reach me at <a href={`mailto:${PERSONAL_INFO.email}`} className="text-white hover:underline underline-offset-4">{PERSONAL_INFO.email}</a> or use the form below.
              </p>
            </div>

            <form className="space-y-6" action="https://formspree.io/f/mzeevnjn" method="POST">
              <div className="space-y-2">
                <label htmlFor="email" className="block text-xs font-medium text-neutral-400">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="your-email@gmail.com"
                  required
                  className="w-full px-4 py-3 bg-[#161616] border border-white/10 rounded-xl text-white placeholder-neutral-600 focus:outline-none focus:border-neutral-400 focus:ring-1 focus:ring-neutral-400 transition-all"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="block text-xs font-medium text-neutral-400">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  placeholder="Your message..."
                  required
                  className="w-full px-4 py-3 bg-[#161616] border border-white/10 rounded-xl text-white placeholder-neutral-600 focus:outline-none focus:border-neutral-400 focus:ring-1 focus:ring-neutral-400 transition-all resize-none"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="group flex items-center justify-center gap-2 w-full sm:w-auto ml-auto px-7 py-3 rounded-full bg-[#1c1c1c] text-neutral-200 hover:text-white border border-white/10 hover:border-white/30 text-sm font-medium transition-all shadow-[0_0_20px_rgba(255,255,255,0.02)] hover:shadow-[0_0_25px_rgba(255,255,255,0.08)]"
                >
                  <span>Submit</span>
                  <Send className="w-4 h-4 text-neutral-500 group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                </button>
              </div>
            </form>
          </SpotlightCard>
        </motion.div>
      </div>

      <footer className="w-full border-t border-white/[0.04] pt-6 mt-12 sm:mt-16">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 text-xs sm:text-sm text-neutral-500 font-medium tracking-wide text-center">
          <p>Architecting scalable logic and intelligent systems.</p>
          <span className="hidden sm:inline text-neutral-700">•</span>
          <p>© {new Date().getFullYear()} {PERSONAL_INFO.name}</p>
        </div>
      </footer>
    </section>
  );
};