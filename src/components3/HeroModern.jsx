import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

export default function HeroModern() {
  return (
    <section id="hero" className="relative min-h-[90vh] flex items-center pt-20 bg-white">
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <span className="text-rose-700 font-bold tracking-widest text-xs uppercase mb-4 block">
            Since 2007
          </span>
          <h1 className="text-5xl lg:text-7xl font-bold text-slate-900 leading-tight mb-6">
            Strategic <br/> 
            <span className="text-slate-400">Consulting.</span>
          </h1>
          <p className="text-lg text-slate-500 mb-10 max-w-md leading-relaxed">
            We simplify complex industrial setups. From legal tenders to operational execution, we are your partners in growth.
          </p>

          <div className="flex gap-4">
            <a href="#services" className="px-8 py-3 bg-slate-900 text-white font-medium rounded hover:bg-rose-700 transition-colors">
              Our Services
            </a>
            <a href="#process" className="px-8 py-3 border border-slate-200 text-slate-600 font-medium rounded hover:border-slate-900 hover:text-slate-900 transition-colors">
              How We Work
            </a>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 20 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative hidden lg:block h-[500px]"
        >
          {/* Simple Geometric Composition */}
          <div className="absolute inset-0 bg-slate-100 rounded-lg transform rotate-3"></div>
          <img 
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2070" 
            alt="Minimal Architecture" 
            className="absolute inset-0 w-full h-full object-cover rounded-lg shadow-2xl filter grayscale hover:grayscale-0 transition-all duration-700"
          />
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-slate-300">
        <ArrowDown size={24} />
      </div>
    </section>
  );
}