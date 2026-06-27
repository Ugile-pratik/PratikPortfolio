import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageCircle, X, Send, Bot } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

interface Message {
  text: string;
  isUser: boolean;
  timestamp: Date;
}

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      text: portfolioData.chatbot.greeting,
      isUser: false,
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const getBotResponse = (userMessage: string): string => {
    const message = userMessage.toLowerCase();
    const responses = portfolioData.chatbot.responses;

    if (
      message.includes('who') ||
      message.includes('about') ||
      message.includes('you') ||
      message.includes('profile')
    ) {
      return responses.about;
    } else if (
      message.includes('skill') ||
      message.includes('technology') ||
      message.includes('code') ||
      message.includes('language')
    ) {
      return responses.skills;
    } else if (
      message.includes('project') ||
      message.includes('work') ||
      message.includes('portfolio') ||
      message.includes('featured')
    ) {
      return responses.projects;
    } else if (
      message.includes('education') ||
      message.includes('study') ||
      message.includes('degree') ||
      message.includes('college') ||
      message.includes('university') ||
      message.includes('school')
    ) {
      return responses.education;
    } else if (
      message.includes('contact') ||
      message.includes('reach') ||
      message.includes('email') ||
      message.includes('phone') ||
      message.includes('address') ||
      message.includes('social')
    ) {
      return responses.contact;
    } else {
      return responses.default;
    }
  };

  const handleSend = () => {
    if (input.trim() === '') return;

    const userMessage: Message = {
      text: input,
      isUser: true,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);

    // Simulate typing delay
    setTimeout(() => {
      const botResponse: Message = {
        text: getBotResponse(input),
        isUser: false,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botResponse]);
      setIsTyping(false);
    }, 1000 + Math.random() * 800);
  };

  const handleChipClick = (chipText: string) => {
    const userMessage: Message = {
      text: chipText,
      isUser: true,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setIsTyping(true);

    setTimeout(() => {
      const botResponse: Message = {
        text: getBotResponse(chipText),
        isUser: false,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botResponse]);
      setIsTyping(false);
    }, 800 + Math.random() * 600);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      {/* Chatbot Button */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-gradient-to-r from-[#6366f1] to-[#4f46e5] rounded-full shadow-lg shadow-[#6366f1]/20 flex items-center justify-center cursor-pointer"
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
            >
              <X size={24} className="text-white" />
            </motion.div>
          ) : (
            <motion.div
              key="open"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
            >
              <MessageCircle size={24} className="text-white" />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Pulse Animation */}
        {!isOpen && (
          <motion.div
            animate={{ scale: [1, 1.25, 1], opacity: [0.3, 0, 0.3] }}
            transition={{ duration: 2.5, repeat: Infinity }}
            className="absolute inset-0 rounded-full bg-[#6366f1] -z-10"
          />
        )}
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-24 right-6 z-50 w-96 max-w-[calc(100vw-3rem)] h-[520px] bg-[#0a0a0f]/95 border border-white/10 rounded-2xl shadow-2xl overflow-hidden flex flex-col backdrop-blur-xl"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-[#6366f1] to-[#4f46e5] p-4 flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-white/15 flex items-center justify-center">
                <Bot size={22} className="text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-white font-bold text-sm tracking-wide">Assistant</h3>
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  <p className="text-white/70 text-xs font-medium">Ready to help</p>
                </div>
              </div>
            </div>

            {/* Messages Log */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 font-sans">
              {messages.map((message, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${
                    message.isUser ? 'justify-end' : 'justify-start'
                  }`}
                >
                  <div
                    className={`max-w-[85%] rounded-xl px-4 py-2.5 text-sm leading-relaxed ${
                      message.isUser
                        ? 'bg-gradient-to-r from-[#6366f1] to-[#4f46e5] text-white rounded-br-sm'
                        : 'bg-white/5 border border-white/10 text-white/90 rounded-bl-sm shadow-md'
                    }`}
                  >
                    <p className="whitespace-pre-line">{message.text}</p>
                    <p
                      className={`text-[10px] mt-1.5 font-medium ${
                        message.isUser ? 'text-white/50' : 'text-white/30'
                      }`}
                    >
                      {message.timestamp.toLocaleTimeString([], {
                        hour: '2-digit',
                        minute: '2-digit',
                      })}
                    </p>
                  </div>
                </motion.div>
              ))}

              {/* Typing Indicator */}
              {isTyping && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex justify-start"
                >
                  <div className="bg-white/5 border border-white/10 rounded-xl rounded-bl-sm px-4 py-3 shadow-md">
                    <div className="flex gap-1.5">
                      {[0, 1, 2].map((i) => (
                        <motion.div
                          key={i}
                          animate={{ y: [0, -4, 0] }}
                          transition={{
                            duration: 0.6,
                            repeat: Infinity,
                            delay: i * 0.15,
                          }}
                          className="w-1.5 h-1.5 rounded-full bg-white/50"
                        />
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* suggestion chips */}
            {messages.length === 1 && !isTyping && (
              <div className="px-4 py-2 flex flex-wrap gap-2 border-t border-white/5 bg-white/[0.01]">
                <p className="text-[10px] text-white/40 w-full mb-1 uppercase tracking-wider font-bold">Suggested Prompts:</p>
                {portfolioData.chatbot.suggestionChips.map((chip) => (
                  <button
                    key={chip}
                    onClick={() => handleChipClick(chip)}
                    className="text-xs px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 hover:border-[#6366f1]/40 hover:bg-[#6366f1]/10 text-white/80 transition-all cursor-pointer font-sans"
                  >
                    {chip}
                  </button>
                ))}
              </div>
            )}

            {/* Input Form */}
            <div className="p-4 border-t border-white/10 bg-[#0a0a0f]">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Ask a question..."
                  className="flex-1 px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/30 focus:border-[#6366f1] focus:outline-none focus:ring-2 focus:ring-[#6366f1]/10 transition-all text-sm font-sans"
                />
                <button
                  onClick={handleSend}
                  disabled={input.trim() === ''}
                  className="w-11 h-11 bg-gradient-to-r from-[#6366f1] to-[#4f46e5] rounded-xl flex items-center justify-center hover:shadow-lg hover:shadow-[#6366f1]/20 transition-all disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
                >
                  <Send size={16} className="text-white" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}