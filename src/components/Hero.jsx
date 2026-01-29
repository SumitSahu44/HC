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
    // Change 1: Height reduced (h-[380px] md:h-[420px])
    <div className="relative w-full h-[380px] rounded-2xl overflow-hidden shadow-xl shadow-slate-200 group">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 bg-slate-900">
        <img
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2069"
          alt="Office"
          className="w-full h-full object-cover opacity-30 group-hover:scale-105 transition-transform duration-[2s]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-transparent" />
      </div>

      <div className="absolute inset-0 flex flex-col justify-center px-6 md:px-12 z-10 max-w-4xl">
        <AnimatePresence mode='wait'>
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.5 }}
          >
            {/* Change 2: Reduced margin (mb-4) */}
            <span className="inline-block py-1 px-2.5 rounded-full bg-rose-600 border border-rose-500/30 text-white text-[10px] md:text-xs font-bold tracking-wider mb-4">
              {SLIDER_CONTENT[index].title}
            </span>

            {/* Change 3: Smaller Heading Text (text-3xl md:text-5xl) and reduced line height */}
            <h2 className="text-3xl md:text-5xl font-black text-white leading-tight mb-3">
              {SLIDER_CONTENT[index].subtitle}
            </h2>

            {/* Change 4: Smaller Description Text (text-sm md:text-base) and reduced margin */}
            <p className="text-sm md:text-base text-slate-300 mb-6 max-w-lg leading-relaxed line-clamp-2 md:line-clamp-none">
              {SLIDER_CONTENT[index].desc}
            </p>

            {/* Change 5: Smaller Buttons (padding reduced) */}
            <div className="flex flex-wrap gap-3">
              <Link to="/services" className="bg-rose-600 hover:bg-rose-700 text-white px-6 py-2.5 text-sm md:text-base rounded-full font-bold transition-all flex items-center gap-2 shadow-lg shadow-rose-900/50">
                Explore Services <ArrowRight size={16} />
              </Link>
              <Link to="/photo-gallery" className="bg-white/10 hover:bg-white/20 text-white px-6 py-2.5 text-sm md:text-base rounded-full font-bold backdrop-blur-md transition-all border border-white/10">
                View Projects
              </Link>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Slider Indicators */}
      <div className="absolute bottom-6 left-6 md:left-12 flex gap-2">
        {SLIDER_CONTENT.map((_, idx) => (
          <div key={idx} className={`h-1 rounded-full transition-all duration-300 ${idx === index ? 'w-6 bg-rose-500' : 'w-1.5 bg-slate-600'}`} />
        ))}
      </div>
    </div>
  );
}