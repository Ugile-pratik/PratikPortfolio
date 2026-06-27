import { motion } from 'motion/react';
import { useInView } from './useInView';
import { portfolioData } from '../data/portfolioData';

export function Social() {
  const [ref, isInView] = useInView({ threshold: 0.2 });
  const socials = portfolioData.socials;

  return (
    <section
      id="github"
      ref={ref}
      className="py-20 px-4 sm:px-6 lg:px-8 bg-[#050508]"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Connect{' '}
            <span className="bg-gradient-to-r from-[#3b82f6] to-[#6366f1] bg-clip-text text-transparent">
              With Me
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#3b82f6] to-[#6366f1] mx-auto rounded-full" />
          <p className="text-white/60 mt-4 max-w-2xl mx-auto">
            Let's collaborate and build something amazing together
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-6">
          {socials.map((social, index) => {
            const Icon = social.icon;

            return (
              <motion.a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative w-full sm:w-64 bg-[#0a0a0f]/60 backdrop-blur-md border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-[#3b82f6]/30 transition-all duration-300 text-center flex flex-col items-center"
              >
                {/* Icon Container */}
                <div className="relative inline-block mb-4 z-10">
                  <div
                    className="w-16 h-16 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-105"
                    style={{
                      background: `linear-gradient(135deg, ${social.color}15, ${social.color}05)`,
                      border: `1px solid ${social.color}30`,
                    }}
                  >
                    <Icon
                      size={28}
                      style={{ color: social.color }}
                      className="group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                </div>

                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#3b82f6] transition-colors z-10">
                  {social.name}
                </h3>
                <p className="text-xs text-white/50 z-10">{social.description}</p>

                {/* Accent Glow Backdrops */}
                <div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-5 blur-2xl transition-opacity duration-500 pointer-events-none"
                  style={{
                    background: `radial-gradient(circle at center, ${social.color}, transparent)`,
                  }}
                />
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}