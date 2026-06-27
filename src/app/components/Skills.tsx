import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { useInView } from './useInView';
import { portfolioData } from '../data/portfolioData';

export function Skills() {
  const [ref, isInView] = useInView({ threshold: 0.1 });
  const [animatedProgress, setAnimatedProgress] = useState<{
    [key: string]: number;
  }>({});

  const categories = portfolioData.skills.categories;

  useEffect(() => {
    if (isInView) {
      categories.forEach((cat) => {
        cat.skillsList.forEach((skill, index) => {
          setTimeout(() => {
            setAnimatedProgress((prev) => ({
              ...prev,
              [skill.name]: skill.level,
            }));
          }, index * 100);
        });
      });
    }
  }, [isInView]);

  return (
    <section id="skills" ref={ref} className="py-20 px-4 sm:px-6 lg:px-8 bg-[#050508]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Technical{' '}
            <span className="bg-gradient-to-r from-[#3b82f6] to-[#6366f1] bg-clip-text text-transparent">
              Skills
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#3b82f6] to-[#6366f1] mx-auto rounded-full" />
          <p className="text-white/60 mt-4 max-w-2xl mx-auto font-sans">
            A comprehensive toolkit of modern technologies, languages, and frameworks I use to build robust applications
          </p>
        </motion.div>

        <div className="space-y-12">
          {categories.map((category, catIdx) => (
            <div key={category.name} className="space-y-6">
              <motion.h3
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: catIdx * 0.1 }}
                className="text-xl font-bold text-white flex items-center gap-2 border-b border-white/10 pb-2"
              >
                <span className="w-2 h-2 rounded-full bg-[#3b82f6]" />
                {category.name}
              </motion.h3>

              <div className="grid md:grid-cols-2 gap-6">
                {category.skillsList.map((skill, index) => {
                  const Icon = skill.icon;
                  const progress = animatedProgress[skill.name] || 0;

                  return (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.5, delay: index * 0.05 + catIdx * 0.1 }}
                      className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-5 hover:bg-white/10 hover:border-[#6366f1]/20 transition-all duration-300 group relative overflow-hidden"
                    >
                      {/* Skill Header */}
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-3">
                          <div
                            className="w-10 h-10 rounded-lg flex items-center justify-center"
                            style={{
                              background: `linear-gradient(135deg, ${skill.color}15, ${skill.color}05)`,
                              border: `1px solid ${skill.color}30`,
                            }}
                          >
                            <Icon size={20} style={{ color: skill.color }} />
                          </div>
                          <div>
                            <h4 className="text-base font-bold text-white">
                              {skill.name}
                            </h4>
                          </div>
                        </div>
                        <div
                          className="text-lg font-bold"
                          style={{ color: skill.color }}
                        >
                          {progress}%
                        </div>
                      </div>

                      {/* Progress Bar */}
                      <div className="relative h-2 bg-white/5 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${progress}%` }}
                          transition={{ duration: 1, delay: index * 0.05 }}
                          className="absolute top-0 left-0 h-full rounded-full"
                          style={{
                            background: `linear-gradient(90deg, ${skill.color}, ${skill.color}cc)`,
                            boxShadow: `0 0 8px ${skill.color}60`,
                          }}
                        />

                        {/* Animated Shimmer Effect */}
                        <motion.div
                          animate={{
                            x: ['-100%', '200%'],
                          }}
                          transition={{
                            duration: 2.5,
                            repeat: Infinity,
                            ease: 'linear',
                          }}
                          className="absolute top-0 left-0 h-full w-1/3 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                        />
                      </div>

                      {/* Hover Glow Effect */}
                      <div
                        className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-5 blur-xl transition-opacity duration-500 pointer-events-none"
                        style={{
                          background: `linear-gradient(135deg, ${skill.color}, transparent)`,
                        }}
                      />
                    </motion.div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}