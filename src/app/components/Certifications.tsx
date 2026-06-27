import { motion } from 'motion/react';
import { useInView } from './useInView';
import { Award, ExternalLink, ShieldCheck } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export function Certifications() {
  const [ref, isInView] = useInView({ threshold: 0.15 });
  const certifications = portfolioData.certifications;

  return (
    <section
      id="certifications"
      ref={ref}
      className="py-20 px-4 sm:px-6 lg:px-8 bg-[#090d16]"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Professional{' '}
            <span className="bg-gradient-to-r from-[#3b82f6] to-[#6366f1] bg-clip-text text-transparent">
              Certifications
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#3b82f6] to-[#6366f1] mx-auto rounded-full" />
          <p className="text-white/60 mt-4 max-w-2xl mx-auto font-sans">
            Specialized credentials and technical courses validated by industry-leading academic and corporate platforms
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative w-full md:w-[350px] bg-[#0d1527]/50 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:bg-white/5 hover:border-[#3b82f6]/30 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Icon & Date Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-[#3b82f6]/10 to-[#6366f1]/10 border border-[#6366f1]/20 flex items-center justify-center text-[#3b82f6] group-hover:text-white group-hover:from-[#3b82f6] group-hover:to-[#6366f1] transition-all duration-300">
                    <Award size={24} />
                  </div>
                  <span className="text-xs font-mono text-white/40 group-hover:text-white/60 transition-colors">
                    Issued {cert.date}
                  </span>
                </div>

                {/* Info */}
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#3b82f6] transition-colors leading-snug">
                  {cert.name}
                </h3>
                <p className="text-sm text-white/60 font-medium mb-4 flex items-center gap-1.5">
                  <ShieldCheck size={14} className="text-[#3b82f6]" />
                  {cert.issuer}
                </p>
              </div>

              {/* Action Link */}
              <div className="mt-4 pt-4 border-t border-white/5">
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-mono text-[#3b82f6] hover:text-[#6366f1] hover:underline transition-colors"
                >
                  Verify Certificate
                  <ExternalLink size={12} />
                </a>
              </div>

              {/* Card Accent Border Glow */}
              <div
                className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${cert.gradient} opacity-0 group-hover:opacity-5 blur-xl transition-opacity duration-500 pointer-events-none`}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
