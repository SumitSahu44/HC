import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { SLIDER_CONTENT } from '../data';

export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setIndex((prev) => (prev + 1) % SLIDER_CONTENT.length), 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-[450px] md:h-[500px] rounded-3xl overflow-hidden shadow-2xl shadow-slate-200 group">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 bg-slate-900">
        <img
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2069"
          alt="Office"
          className="w-full h-full object-cover opacity-30 group-hover:scale-105 transition-transform duration-[2s]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-transparent" />
      </div>

      <div className="absolute inset-0 flex flex-col justify-center px-8 md:px-16 z-10 max-w-4xl">
        <AnimatePresence mode='wait'>
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 30 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-rose-500/20 border border-rose-500/30 text-rose-300 text-xs font-bold tracking-wider mb-6">
              {SLIDER_CONTENT[index].title.toUpperCase()}
            </span>
            <h2 className="text-4xl md:text-6xl font-black text-white leading-tight mb-4">
              {SLIDER_CONTENT[index].subtitle}
            </h2>
            <p className="text-lg text-slate-300 mb-8 max-w-xl leading-relaxed">
              {SLIDER_CONTENT[index].desc}
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/services" className="bg-rose-600 hover:bg-rose-700 text-white px-8 py-3.5 rounded-full font-bold transition-all flex items-center gap-2 shadow-lg shadow-rose-900/50">
                Explore Services <ArrowRight size={18} />
              </Link>
              <Link to="/photo-gallery" className="bg-white/10 hover:bg-white/20 text-white px-8 py-3.5 rounded-full font-bold backdrop-blur-md transition-all border border-white/10">
                View Projects
              </Link>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Slider Indicators */}
      <div className="absolute bottom-8 left-8 md:left-16 flex gap-2">
        {SLIDER_CONTENT.map((_, idx) => (
          <div key={idx} className={`h-1 rounded-full transition-all duration-300 ${idx === index ? 'w-8 bg-rose-500' : 'w-2 bg-slate-600'}`} />
        ))}
      </div>
    </div>
  );
}