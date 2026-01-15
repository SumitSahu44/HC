import React from 'react';
import { motion } from 'framer-motion';
import { SERVICES } from '../data';

export default function ServiceShowcase() {
  return (
    <section className="py-24 bg-slate-950 text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-rose-500 to-transparent opacity-30"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-black mb-4">Our Expertise</h2>
          <p className="text-slate-400">Comprehensive industrial solutions tailored for maximum efficiency and growth.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ y: -10 }}
              className="bg-slate-900/50 p-8 rounded-2xl border border-slate-800 hover:border-rose-500/50 transition-colors group"
            >
              <div className="w-14 h-14 bg-slate-800 rounded-xl flex items-center justify-center mb-6 text-rose-500 group-hover:bg-rose-600 group-hover:text-white transition-all">
                <service.icon size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}