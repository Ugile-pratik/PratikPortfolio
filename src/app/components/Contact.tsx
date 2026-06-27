import { useState } from 'react';
import { motion } from 'motion/react';
import { useInView } from './useInView';
import { Send, MapPin, Phone, Mail, MessageCircle } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export function Contact() {
  const [ref, isInView] = useInView({ threshold: 0.2 });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitType, setSubmitType] = useState<'email' | 'whatsapp'>('email');
  const data = portfolioData.personalInfo;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (submitType === 'email') {
      const subject = encodeURIComponent(`Portfolio Inquiry from ${formData.name}`);
      const body = encodeURIComponent(
        `Hi Pratik,\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      );
      window.location.href = `mailto:${data.email}?subject=${subject}&body=${body}`;
    } else {
      // Clean phone number (leave only digits, e.g. from +91 98765 43210 -> 919876543210)
      const cleanPhone = data.phone.replace(/[^\d]/g, '');
      const text = encodeURIComponent(
        `Hi Pratik,\n\nI am *${formData.name}* (${formData.email}).\n\n${formData.message}`
      );
      window.open(`https://wa.me/${cleanPhone}?text=${text}`, '_blank');
    }

    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Location',
      value: data.location,
      color: '#3b82f6', // Slate Blue
    },
    {
      icon: Phone,
      title: 'Phone',
      value: data.phone,
      color: '#6366f1', // Indigo
    },
    {
      icon: Mail,
      title: 'Email',
      value: data.email,
      color: '#0d9488', // Muted Teal
    },
  ];

  return (
    <section
      id="contact"
      ref={ref}
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#090d16] to-[#050811]"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Get In{' '}
            <span className="bg-gradient-to-r from-[#3b82f6] to-[#6366f1] bg-clip-text text-transparent">
              Touch
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#3b82f6] to-[#6366f1] mx-auto rounded-full" />
          <p className="text-white/60 mt-4 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Drop me a message!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-white/80 mb-2 text-sm font-medium"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3.5 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/30 focus:border-[#3b82f6] focus:outline-none focus:ring-2 focus:ring-[#3b82f6]/10 transition-all font-sans"
                  placeholder="Enter your name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-white/80 mb-2 text-sm font-medium"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3.5 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/30 focus:border-[#6366f1] focus:outline-none focus:ring-2 focus:ring-[#6366f1]/10 transition-all font-sans"
                  placeholder="Enter your email"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-white/80 mb-2 text-sm font-medium"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3.5 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/30 focus:border-[#8b5cf6] focus:outline-none focus:ring-2 focus:ring-[#8b5cf6]/10 transition-all resize-none font-sans"
                  placeholder="Tell me about your project..."
                />
              </div>

              {/* Multi-Channel Submission Buttons */}
              <div className="grid sm:grid-cols-2 gap-4">
                <button
                  type="submit"
                  onClick={() => setSubmitType('email')}
                  disabled={isSubmitted}
                  className="px-6 py-4 bg-gradient-to-r from-[#3b82f6] to-[#6366f1] text-white rounded-xl font-semibold hover:shadow-md hover:shadow-[#6366f1]/20 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer text-sm"
                >
                  <Mail size={18} />
                  Send via Email
                </button>

                <button
                  type="submit"
                  onClick={() => setSubmitType('whatsapp')}
                  disabled={isSubmitted}
                  className="px-6 py-4 bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white rounded-xl font-semibold hover:shadow-md hover:shadow-[#25D366]/20 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer text-sm"
                >
                  <MessageCircle size={18} />
                  Send via WhatsApp
                </button>
              </div>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            <div className="bg-[#0a0a0f]/60 backdrop-blur-md border border-white/10 rounded-2xl p-8 relative overflow-hidden shadow-xl">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#3b82f6]" />
                Contact Information
              </h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <div key={index} className="flex items-start gap-4">
                      <div
                        className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0"
                        style={{
                          background: `linear-gradient(135deg, ${info.color}15, ${info.color}05)`,
                          border: `1px solid ${info.color}30`,
                        }}
                      >
                        <Icon size={22} style={{ color: info.color }} />
                      </div>
                      <div>
                        <h4 className="text-white font-bold mb-1 text-sm tracking-wide uppercase opacity-50">
                          {info.title}
                        </h4>
                        <p className="text-white/80 font-sans text-base">{info.value}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Additional Info Card */}
            <div className="bg-gradient-to-br from-[#6366f1]/10 to-[#3b82f6]/10 backdrop-blur-md border border-[#6366f1]/20 rounded-2xl p-8 shadow-xl relative overflow-hidden">
              <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                <span>🚀</span>
                Let's Build Something Great!
              </h3>
              <p className="text-white/70 leading-relaxed font-sans">
                I'm always open to discussing new projects, creative ideas, or
                opportunities to be part of your vision. Whether it's an internship 
                role, freelance collab, or just a quick tech chat, feel free to reach out.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}