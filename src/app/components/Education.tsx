import { motion } from 'motion/react';
import { useInView } from './useInView';
import { portfolioData } from '../data/portfolioData';

export function Education() {
  const [ref, isInView] = useInView({ threshold: 0.2 });
  const timeline = portfolioData.education;

  return (
    <section
      id="education"
      ref={ref}
      className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0a0a0f]"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Educational{' '}
            <span className="bg-gradient-to-r from-[#3b82f6] to-[#6366f1] bg-clip-text text-transparent">
              Journey
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#3b82f6] to-[#6366f1] mx-auto rounded-full" />
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#3b82f6] via-[#6366f1] to-[#8b5cf6] opacity-35" />

          {/* Timeline Items */}
          <div className="space-y-12">
            {timeline.map((item, index) => {
              const Icon = item.icon;
              const isLeft = index % 2 === 0;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className={`relative flex items-center ${
                    isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
                  } flex-row`}
                >
                  {/* Content Card */}
                  <div
                    className={`w-full md:w-[calc(50%-3rem)] ml-16 md:ml-0 ${
                      isLeft ? 'md:pr-12' : 'md:pl-12'
                    }`}
                  >
                    <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-[#6366f1]/35 transition-all duration-300 group relative">
                      {/* Year Badge */}
                      <div
                        className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mb-3 bg-gradient-to-r ${item.gradient} text-white`}
                      >
                        {item.year}
                      </div>

                      <h3 className="text-xl font-bold text-white mb-1">
                        {item.title}
                      </h3>
                      <p className="text-[#3b82f6] text-sm font-semibold mb-2">{item.institution}</p>
                      
                      {item.grade && (
                        <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-mono font-medium bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 mb-3">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                          {item.grade}
                        </div>
                      )}

                      <p className="text-white/70 text-sm leading-relaxed">
                        {item.description}
                      </p>

                      {/* Hover Glow Effect */}
                      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#3b82f6] via-[#6366f1] to-[#8b5cf6] opacity-0 group-hover:opacity-5 blur-xl transition-opacity duration-500 pointer-events-none" />
                    </div>
                  </div>

                  {/* Icon Circle */}
                  <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-gradient-to-br from-[#6366f1] to-[#3b82f6] flex items-center justify-center border-4 border-[#0a0a0f] shadow-lg shadow-[#6366f1]/20 z-10">
                    <Icon size={20} className="text-white" />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}