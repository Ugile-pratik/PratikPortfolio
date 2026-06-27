import { motion } from 'motion/react';
import { useInView } from './useInView';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { portfolioData } from '../data/portfolioData';

export function About() {
  const [ref, isInView] = useInView({ threshold: 0.2 });
  const data = portfolioData.personalInfo;

  return (
    <section id="about" ref={ref} className="py-20 px-4 sm:px-6 lg:px-8 bg-[#050508]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About <span className="bg-gradient-to-r from-[#3b82f6] to-[#6366f1] bg-clip-text text-transparent">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#3b82f6] to-[#6366f1] mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-12 gap-12 items-center">
          {/* Profile Image (4 columns on desktop) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:col-span-5 relative"
          >
            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-3 group">
              <div className="relative aspect-square rounded-xl overflow-hidden bg-gradient-to-tr from-[#6366f1]/15 to-[#3b82f6]/15">
                <ImageWithFallback
                  src={data.profilePhoto}
                  alt={data.name}
                  className="w-full h-full object-cover transition-all duration-700"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#050508] via-transparent to-transparent opacity-75" />
              </div>

              {/* Decorative Corner Borders */}
              <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-[#3b82f6]" />
              <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-[#6366f1]" />
              <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-[#6366f1]" />
              <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-[#8b5cf6]" />
            </div>

            {/* Glowing Orbs */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#3b82f6] rounded-full blur-3xl opacity-15 animate-pulse" />
            <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-[#6366f1] rounded-full blur-3xl opacity-15 animate-pulse" style={{ animationDelay: '1.5s' }} />
          </motion.div>

          {/* Content (7 columns on desktop) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="md:col-span-7 space-y-6"
          >
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 shadow-xl relative overflow-hidden">
              {/* Subtle grid backdrop inside card */}
              <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none" />

              <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#3b82f6]" />
                Professional Journey
              </h3>
              
              <div className="space-y-4 text-white/70 leading-relaxed font-sans text-base">
                <p>{data.bio}</p>
                <p>
                  Specializing in React/TypeScript frontend interfaces, Java/Python backends, 
                  and database integration (NoSQL, Relational, and Graph), I build software 
                  that balances clean user experience with solid performance architecture.
                </p>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-3 gap-4 mt-8 pt-8 border-t border-white/10 relative z-10">
                {data.stats.map((stat, idx) => (
                  <div key={idx} className="text-center">
                    <div className="text-3xl font-extrabold bg-gradient-to-r from-[#00d4ff] to-[#9d4eff] bg-clip-text text-transparent">
                      {stat.value}
                    </div>
                    <div className="text-xs sm:text-sm text-white/60 mt-1 font-medium">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}