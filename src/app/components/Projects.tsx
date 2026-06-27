import { motion } from 'motion/react';
import { useInView } from './useInView';
import { ExternalLink, Github } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { portfolioData } from '../data/portfolioData';

export function Projects() {
  const [ref, isInView] = useInView({ threshold: 0.1 });
  const projects = portfolioData.projects;

  return (
    <section
      id="projects"
      ref={ref}
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#0a0a0f] to-[#050508]"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Featured{' '}
            <span className="bg-gradient-to-r from-[#3b82f6] to-[#6366f1] bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#3b82f6] to-[#6366f1] mx-auto rounded-full" />
          <p className="text-white/60 mt-4 max-w-2xl mx-auto font-sans">
            A showcase of innovative systems and web platforms built with robust database backends and modern client frameworks
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 35 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group relative bg-[#0a0a0f]/60 backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden hover:border-[#3b82f6]/30 transition-all duration-300"
            >
              {/* Project Image */}
              <div className="relative h-60 overflow-hidden">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                
                {/* Overlay Mask with Gradients */}
                <div
                  className={`absolute inset-0 bg-gradient-to-t ${project.gradient} opacity-50 group-hover:opacity-30 transition-opacity`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] to-transparent opacity-80" />
                
                {/* Hover Quick Actions */}
                <div className="absolute top-4 right-4 flex gap-2.5 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-[-10px] group-hover:translate-y-0">
                  {project.github !== '#' && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-xl bg-[#0a0a0f]/80 backdrop-blur-md border border-white/20 flex items-center justify-center hover:bg-white/10 hover:border-[#3b82f6] transition-all"
                      title="View Source Code"
                    >
                      <Github size={18} className="text-white" />
                    </a>
                  )}
                  {project.demo !== '#' && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-xl bg-[#0a0a0f]/80 backdrop-blur-md border border-white/20 flex items-center justify-center hover:bg-white/10 hover:border-[#6366f1] transition-all"
                      title="Live Demo"
                    >
                      <ExternalLink size={18} className="text-white" />
                    </a>
                  )}
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6 relative z-10">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#3b82f6] transition-colors flex items-center justify-between">
                  {project.title}
                </h3>
                <p className="text-white/70 text-sm leading-relaxed mb-5 h-20 overflow-y-auto pr-1 select-none">
                  {project.description}
                </p>

                {/* Tech Stack Badges */}
                <div className="flex flex-wrap gap-2 pt-2 border-t border-white/5">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 text-xs font-mono rounded-lg bg-white/5 border border-white/10 text-white/80"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Accent Glow Backdrops */}
              <div
                className={`absolute inset-0 bg-gradient-to-r ${project.gradient} opacity-0 group-hover:opacity-5 blur-3xl transition-opacity duration-500 pointer-events-none`}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}