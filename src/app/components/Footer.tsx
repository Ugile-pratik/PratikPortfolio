import { motion } from 'motion/react';
import { ChevronUp, Heart } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();
  const data = portfolioData.personalInfo;

  return (
    <footer className="relative bg-[#050508] border-t border-white/10">
      {/* Decorative Top Border */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#3b82f6] via-[#6366f1] to-[#8b5cf6]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          {/* Logo/Name */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-6"
          >
            <h3 className="text-2xl font-bold bg-gradient-to-r from-[#3b82f6] via-[#6366f1] to-[#8b5cf6] bg-clip-text text-transparent">
              {data.name}
            </h3>
            <p className="text-white/50 mt-2 text-sm">
              Full Stack Developer | AI Enthusiast | MCA Student
            </p>
          </motion.div>

          {/* Divider */}
          <div className="w-16 h-[2px] bg-gradient-to-r from-[#3b82f6] to-[#6366f1] mx-auto rounded-full mb-6" />

          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="space-y-2"
          >
            <p className="text-white/60 text-xs sm:text-sm font-sans">
              © {currentYear} {data.name}. All rights reserved.
            </p>
            <p className="text-white/40 text-xs sm:text-sm flex items-center justify-center gap-1.5 font-sans">
              Designed & Developed with{' '}
              <Heart size={13} className="text-[#ff006e] fill-[#ff006e]" /> by{' '}
              <span className="text-white/60 font-medium">{data.name}</span>
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-8 flex flex-wrap justify-center gap-6 text-xs sm:text-sm font-sans font-medium"
          >
            {['Home', 'About', 'Projects', 'Contact'].map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-white/40 hover:text-[#3b82f6] transition-colors"
              >
                {link}
              </a>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Back to Top Button */}
      <motion.button
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        onClick={scrollToTop}
        className="absolute bottom-8 right-8 w-11 h-11 bg-gradient-to-r from-[#3b82f6] to-[#6366f1] rounded-full shadow-lg shadow-[#3b82f6]/20 flex items-center justify-center hover:scale-105 transition-transform group cursor-pointer border border-[#3b82f6]/10"
      >
        <ChevronUp
          size={20}
          className="text-white group-hover:-translate-y-0.5 transition-transform"
        />
      </motion.button>
    </footer>
  );
}
