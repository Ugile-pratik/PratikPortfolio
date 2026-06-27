import { motion } from 'motion/react';
import { useInView } from './useInView';
import { Calendar, Compass } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { portfolioData } from '../data/portfolioData';

export function Activities() {
  const [ref, isInView] = useInView({ threshold: 0.15 });
  const activities = portfolioData.activities;

  return (
    <section
      id="activities"
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
            Co-Curricular{' '}
            <span className="bg-gradient-to-r from-[#3b82f6] to-[#6366f1] bg-clip-text text-transparent">
              Activities
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#3b82f6] to-[#6366f1] mx-auto rounded-full" />
          <p className="text-white/60 mt-4 max-w-2xl mx-auto font-sans">
            Events and activities that encourage innovation, collaboration, and personal growth while building valuable experiences.
          </p>
        </motion.div>

        <div className="space-y-12">
          {activities.map((activity, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="bg-[#0d1527]/40 border border-white/10 rounded-2xl p-6 sm:p-8 relative overflow-hidden shadow-xl"
            >
              {/* Event Info Header */}
              <div className="mb-6 relative z-10">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-[#3b82f6]/10 border border-[#3b82f6]/20 text-[#3b82f6] text-xs font-mono mb-3">
                  <Calendar size={12} />
                  Event
                </span>
                <h3 className="text-2xl font-bold text-white mb-2 tracking-tight">
                  {activity.eventName}
                </h3>
                <p className="text-white/70 text-sm leading-relaxed max-w-4xl font-sans">
                  {activity.description}
                </p>
              </div>

              {/* Side-by-Side Photos Gallery */}
              <div className="relative z-10">
                {/* Horizontal scroll container (flex) on mobile, grid on md+ screens */}
                <div className="flex overflow-x-auto gap-4 pb-4 md:pb-0 md:grid md:grid-cols-3 scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent rounded-xl snap-x snap-mandatory">
                  {activity.photos.map((photo, pIdx) => (
                    <div
                      key={pIdx}
                      className="w-72 sm:w-80 md:w-auto h-48 md:h-56 rounded-xl overflow-hidden flex-shrink-0 snap-start border border-white/5 shadow-lg group/photo relative"
                    >
                      <ImageWithFallback
                        src={photo}
                        alt={`${activity.eventName} Photo ${pIdx + 1}`}
                        className="w-full h-full object-cover group-hover/photo:scale-105 transition-transform duration-500"
                      />
                      
                      {/* Soft gradient hover border */}
                      <div className="absolute inset-0 border-2 border-transparent group-hover/photo:border-[#3b82f6]/20 rounded-xl transition-all duration-300" />
                    </div>
                  ))}
                </div>
                
                {/* Scroll Prompt for Mobile */}
                <div className="flex items-center justify-center gap-1.5 mt-3 text-xs text-white/30 md:hidden font-mono">
                  <Compass size={12} />
                  <span>Swipe to view more photos</span>
                </div>
              </div>

              {/* Card Subtle Grid Backdrop */}
              <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.005)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.005)_1px,transparent_1px)] bg-[size:30px_30px] pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
