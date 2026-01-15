import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Mail, Phone, MapPin } from 'lucide-react';
import { NOTICES } from '../data';
import Navbar from '../components3/Navbar';
import ProcessTimeline from '../components3/ProcessTimeline';
import ServiceShowcase from '../components3/ServiceShowcase';
import Footer from '../components/Footer';

// --- Importing New Components ---
// ✅ Sahi Import (Pages folder se bahar nikal kar components mein jana)

// --- Local Bento Card Component (Layout ke liye) ---
const BentoCard = ({ children, className = "", title }) => (
  <motion.div 
    whileHover={{ y: -4 }}
    className={`bg-white border-2 border-slate-900 p-6 flex flex-col justify-between relative shadow-[4px_4px_0px_0px_rgba(15,23,42,1)] ${className}`}
  >
    {title && (
      <div className="mb-4 border-b-2 border-slate-100 pb-2">
        <h3 className="text-sm font-black text-slate-900 uppercase tracking-widest">{title}</h3>
      </div>
    )}
    <div className="relative z-10">{children}</div>
  </motion.div>
);

export default function HomeV3() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      
      {/* 1. NEW NAVBAR */}
      <Navbar />

      <main className="pt-24 pb-12 px-4 md:px-6 container mx-auto space-y-20">
        
        {/* 2. HERO SECTION (BENTO GRID STYLE - UNIQUE) */}
        <section id="hero" className="grid grid-cols-1 md:grid-cols-12 gap-6 min-h-[85vh]">
          
          {/* Main Headline Block */}
          <BentoCard className="md:col-span-8 bg-slate-900 !text-white !border-slate-900 md:row-span-2 justify-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <div className="inline-block bg-rose-600 text-white text-xs font-bold px-3 py-1 mb-6">
                EST. 2007
              </div>
              <h1 className="text-5xl md:text-7xl font-black leading-none tracking-tighter mb-6">
                BUILDING <br/>
                CORPORATE <br/>
                LEGACIES.
              </h1>
              <p className="text-slate-400 max-w-lg text-lg leading-relaxed mb-8">
                Your partner in Industrial setup, Legal Compliance, and Strategic Growth. We turn blueprints into operational realities.
              </p>
              <div className="flex gap-4">
                <a href="#contact" className="bg-white text-slate-900 px-8 py-3 font-bold flex items-center gap-2 hover:bg-rose-500 hover:text-white transition-colors">
                  Start Project <ArrowUpRight size={18} />
                </a>
              </div>
            </motion.div>
          </BentoCard>

          {/* Stats Block 1 */}
          <BentoCard className="md:col-span-4 justify-center items-center text-center bg-rose-600 !border-rose-600 !text-white">
            <div className="text-5xl font-black">18+</div>
            <p className="text-sm font-bold opacity-80 mt-2 uppercase">Years Experience</p>
          </BentoCard>

          {/* Quick Contact Block */}
          <BentoCard className="md:col-span-4" title="Quick Connect">
             <div className="space-y-4">
               <div className="flex items-center gap-3">
                 <div className="bg-slate-100 p-2 rounded-full"><Phone size={18}/></div>
                 <div>
                   <p className="text-xs text-slate-500 font-bold">CALL US</p>
                   <p className="font-bold">+91 98765 43210</p>
                 </div>
               </div>
               <div className="flex items-center gap-3">
                 <div className="bg-slate-100 p-2 rounded-full"><Mail size={18}/></div>
                 <div>
                   <p className="text-xs text-slate-500 font-bold">EMAIL US</p>
                   <p className="font-bold">info@hcparekh.com</p>
                 </div>
               </div>
             </div>
          </BentoCard>

          {/* Live Notices Widget (Integrated into Grid) */}
          <BentoCard className="md:col-span-6 h-64" title="Live Notice Board">
            <div className="overflow-y-auto h-40 custom-scrollbar pr-2 space-y-3">
              {NOTICES.map((note, idx) => (
                <div key={idx} className="flex gap-3 items-start border-b border-slate-100 pb-2 last:border-0 group cursor-pointer">
                  <div className={`w-2 h-2 mt-1.5 rounded-full flex-shrink-0 ${note.urgent ? 'bg-rose-600 animate-pulse' : 'bg-slate-300'}`} />
                  <div>
                    <p className="text-sm font-bold group-hover:text-rose-700 transition-colors">{note.text}</p>
                    <p className="text-[10px] text-slate-400">{note.date || 'Today'}</p>
                  </div>
                </div>
              ))}
            </div>
          </BentoCard>

          {/* Image/Visual Block */}
          <BentoCard className="md:col-span-6 p-0 overflow-hidden relative min-h-[250px] !border-0">
             <img 
               src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1000"
               className="absolute inset-0 w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
               alt="Office"
             />
             <div className="absolute inset-0 bg-slate-900/10 hover:bg-transparent transition-colors"></div>
          </BentoCard>

        </section>

        {/* 3. IMPORTED SECTIONS (Reuse of new components) */}
        
        {/* Timeline Section */}
        <div id="process">
           <ProcessTimeline />
        </div>

        {/* Services Section */}
        <div id="services">
           <ServiceShowcase />
        </div>

        {/* 4. CONTACT SECTION (Bento Style Footer Lead) */}
        <section id="contact" className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <BentoCard className="bg-slate-900 !text-white !border-slate-900">
             <h2 className="text-3xl font-black mb-4">Visit Our HQ</h2>
             <div className="flex items-start gap-4">
                <MapPin className="text-rose-500 mt-1" size={24} />
                <p className="text-slate-300 leading-relaxed">
                  HC Parekh Consultants, <br/>
                  12th Floor, Corporate Park, <br/>
                  Industrial Zone, Mumbai - 400001
                </p>
             </div>
          </BentoCard>

          <BentoCard title="Send a Message">
            <form className="space-y-3">
              <input type="text" placeholder="Your Name" className="w-full border-b-2 border-slate-200 py-2 focus:outline-none focus:border-rose-600 transition-colors bg-transparent font-bold" />
              <input type="email" placeholder="Your Email" className="w-full border-b-2 border-slate-200 py-2 focus:outline-none focus:border-rose-600 transition-colors bg-transparent font-bold" />
              <button className="mt-4 w-full bg-slate-900 text-white font-bold py-3 hover:bg-rose-600 transition-colors">
                Request Callback
              </button>
            </form>
          </BentoCard>
        </section>

      </main>

      {/* 5. FOOTER */}
      <Footer />
    </div>
  );
}