import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, PlayCircle } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-slate-50">
      
      {/* Abstract Background Shapes */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-rose-200 rounded-full blur-[120px] opacity-30 -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-100 rounded-full blur-[100px] opacity-40 translate-y-1/3 -translate-x-1/4"></div>

      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        
        {/* Text Content */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 shadow-sm mb-6">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
            <span className="text-xs font-bold text-slate-600 uppercase tracking-wide">Accepting New Projects 2026</span>
          </div>

          <h1 className="text-5xl lg:text-7xl font-black text-slate-900 leading-[1.1] mb-6">
            Build Your <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-600 to-purple-600">
              Corporate Legacy
            </span>
          </h1>
          
          <p className="text-lg text-slate-600 mb-8 max-w-lg leading-relaxed">
            Leading project consultants in India since 2007. We transform industrial visions into operational realities with precision and expertise.
          </p>

          <div className="flex flex-wrap gap-4">
            <button className="bg-rose-600 hover:bg-rose-700 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-xl shadow-rose-500/20 transition-all flex items-center gap-2">
              Start Project <ArrowRight size={20} />
            </button>
            <button className="bg-white hover:bg-slate-50 text-slate-800 px-8 py-4 rounded-xl font-bold text-lg border border-slate-200 shadow-sm transition-all flex items-center gap-2">
              <PlayCircle size={20} className="text-rose-600" /> Watch Reel
            </button>
          </div>
        </motion.div>

        {/* Right Side Visual */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative hidden lg:block"
        >
          <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-4 border-white rotate-2 hover:rotate-0 transition-all duration-500">
            <img 
              src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=1000" 
              alt="Corporate Building" 
              className="w-full h-auto object-cover"
            />
            {/* Floating Card */}
            <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-md p-4 rounded-xl shadow-lg border border-white/20 max-w-[200px]">
               <p className="text-sm font-bold text-slate-900">Trade Partnership</p>
               <p className="text-xs text-slate-500">Open for Pan-India sectors</p>
            </div>
          </div>
          {/* Decorative Back Box */}
          <div className="absolute inset-0 bg-slate-900 rounded-3xl -rotate-2 transform translate-x-4 translate-y-4 -z-10"></div>
        </motion.div>

      </div>
    </section>
  );
}