import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { ChevronDown, FileDown, Briefcase, Mail, Terminal } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export function Hero() {
  const [displayText, setDisplayText] = useState('');
  const titles = portfolioData.personalInfo.titles;
  const [titleIndex, setTitleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  // Typing animation effect
  useEffect(() => {
    const currentTitle = titles[titleIndex];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (displayText.length < currentTitle.length) {
            setDisplayText(currentTitle.slice(0, displayText.length + 1));
          } else {
            setTimeout(() => setIsDeleting(true), 2000);
          }
        } else {
          if (displayText.length > 0) {
            setDisplayText(currentTitle.slice(0, displayText.length - 1));
          } else {
            setIsDeleting(false);
            setTitleIndex((prev) => (prev + 1) % titles.length);
          }
        }
      },
      isDeleting ? 50 : 100
    );

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, titleIndex]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen relative flex items-center justify-center pt-24 pb-12 overflow-hidden bg-[#090d16]"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 z-0">
        {/* Animated Gradient Orbs */}
        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.1, 0.18, 0.1],
          }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-10 left-[10%] w-[500px] h-[500px] bg-[#6366f1] rounded-full blur-[140px]"
        />
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.18, 0.1],
          }}
          transition={{ duration: 10, repeat: Infinity, delay: 1 }}
          className="absolute bottom-10 right-[10%] w-[500px] h-[500px] bg-[#0ea5e9] rounded-full blur-[140px]"
        />

        {/* Grid Pattern Overlay */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `linear-gradient(rgba(99, 102, 241, 0.05) 1px, transparent 1px),
              linear-gradient(90deg, rgba(99, 102, 241, 0.05) 1px, transparent 1px)`,
            backgroundSize: '45px 45px',
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Heading and intro */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 text-left space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-[#3b82f6] animate-pulse" />
              <span className="text-xs text-white/80 font-medium tracking-wide">
                Available for Collaboration
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white leading-none">
              Hi, I'm{' '}
              <span className="block mt-2 bg-gradient-to-r from-[#3b82f6] via-[#6366f1] to-[#8b5cf6] bg-clip-text text-transparent">
                {portfolioData.personalInfo.name}
              </span>
            </h1>

            {/* Dynamic Typing Subheader */}
            <div className="h-10">
              <p className="text-xl sm:text-2xl font-medium text-[#6366f1] flex items-center gap-2">
                <span>&gt;</span>
                <span>{displayText}</span>
                <span className="w-1.5 h-6 bg-[#3b82f6] animate-pulse" />
              </p>
            </div>

            <p className="text-base sm:text-lg text-white/70 max-w-xl leading-relaxed">
              {portfolioData.personalInfo.bio}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => scrollToSection('projects')}
                className="px-6 py-3.5 bg-gradient-to-r from-[#4f46e5] to-[#6366f1] text-white rounded-xl font-semibold hover:shadow-md hover:shadow-[#6366f1]/20 transition-all duration-300 flex items-center gap-2 group border border-[#6366f1]/20 cursor-pointer"
              >
                <Briefcase size={18} />
                View My Projects
                <ChevronDown
                  size={16}
                  className="group-hover:translate-y-0.5 transition-transform"
                />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => scrollToSection('contact')}
                className="px-6 py-3.5 bg-white/5 hover:bg-white/10 backdrop-blur-md border border-white/10 text-white rounded-xl font-semibold transition-all duration-300 flex items-center gap-2 cursor-pointer"
              >
                <Mail size={18} />
                Get In Touch
              </motion.button>

              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                href={portfolioData.personalInfo.resumeUrl}
                className="px-6 py-3.5 bg-white/5 hover:bg-white/10 backdrop-blur-md border border-white/10 text-white rounded-xl font-semibold transition-all duration-300 flex items-center gap-2 cursor-pointer"
              >
                <FileDown size={18} />
                Resume
              </motion.a>
            </div>
          </motion.div>

          {/* Right Column: Sleek HUD / Terminal Panel */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 w-full"
          >
            <div className="w-full bg-[#0d1527]/80 border border-white/10 rounded-2xl overflow-hidden shadow-2xl backdrop-blur-xl">
              {/* Terminal Header */}
              <div className="flex items-center justify-between px-4 py-3 bg-white/5 border-b border-white/10">
                <div className="flex items-center gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                  <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                  <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
                </div>
                <div className="flex items-center gap-1.5 text-xs text-white/50 font-mono">
                  <Terminal size={12} />
                  <span>pratikugile.sh</span>
                </div>
                <div className="w-12" /> {/* spacer */}
              </div>

              {/* Terminal Body */}
              <div className="p-6 font-mono text-sm leading-relaxed text-left space-y-4">
                <div>
                  <span className="text-[#ec4899]">~/portfolio</span>
                  <span className="text-white/40"> (main)</span>
                  <span className="text-white"> $</span>
                  <span className="text-[#3b82f6] ml-2">your developer.json</span>
                </div>
                
                <div className="text-white/80 pl-4 border-l-2 border-[#6366f1]/30 space-y-2">
                  <p>
                    <span className="text-[#818cf8]">const</span> <span className="text-white">developer</span> = &#123;
                  </p>
                  <p className="pl-4">
                    <span className="text-[#60a5fa]">name</span>: <span className="text-[#34d399]">"{portfolioData.personalInfo.name}"</span>,
                  </p>
                  <p className="pl-4">
                    <span className="text-[#60a5fa]">role</span>: <span className="text-[#34d399]">"MCA Student & Full Stack Developer"</span>,
                  </p>
                  <p className="pl-4">
                    <span className="text-[#60a5fa]">location</span>: <span className="text-[#34d399]">"Pune, India"</span>,
                  </p>
                  <p className="pl-4">
                    <span className="text-[#60a5fa]">interests</span>: [
                    <span className="text-[#34d399]">"Web Apps"</span>, 
                    <span className="text-[#34d399]">"AI/ML"</span>, 
                    <span className="text-[#34d399]">"Databases"</span>
                    ],
                  </p>
                  <p className="pl-4">
                    <span className="text-[#60a5fa]">focus</span>: <span className="text-[#34d399]">"Writing Clean, Scalable Code"</span>
                  </p>
                  <p>&#125;;</p>
                </div>

                <div className="pt-2">
                  <span className="text-[#ec4899]">~/portfolio</span>
                  <span className="text-white"> $</span>
                  <span className="text-[#3b82f6] ml-2">npm run status</span>
                </div>

                <div className="text-xs text-white/50 pl-4 space-y-1">
                  <p className="text-[#34d399]">✔ Environment configured successfully</p>
                  <p className="text-[#34d399]">✔ 2nd year MCA coursework in progress</p>
                  <p>⚡ High performance computing mode active</p>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}