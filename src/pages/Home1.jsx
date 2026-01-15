import React, { useState } from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Hero from '../components/Hero';
import NoticeBoard from '../components/NoticeBoard';
import Services from '../components/Services';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';

export default function App() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50/50 font-sans text-slate-800 selection:bg-rose-100 selection:text-rose-900">
      
      <Header toggleSidebar={() => setSidebarOpen(!isSidebarOpen)} />

      <div className="container mx-auto flex gap-8 py-6 px-4 md:px-6 relative items-start">
        
        {/* Sticky Sidebar */}
        <Sidebar isOpen={isSidebarOpen} toggle={() => setSidebarOpen(false)} />
        
        {/* Main Content Area */}
        <main className="flex-1 min-w-0 space-y-12">
          
          {/* Top Section: Hero + Notice Board */}
          <section className="grid grid-cols-1 xl:grid-cols-3 gap-8">
            <div className="xl:col-span-2">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                <Hero />
              </motion.div>
            </div>
            <div className="xl:col-span-1 h-full">
               <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.2 }} className="h-full">
                <NoticeBoard />
              </motion.div>
            </div>
          </section>

          {/* Stats Banner */}
          <section className="bg-slate-900 rounded-3xl p-8 md:p-12 text-white shadow-2xl relative overflow-hidden">
             <div className="absolute top-0 right-0 w-64 h-64 bg-rose-600 blur-[80px] opacity-20 rounded-full"></div>
             <div className="grid grid-cols-2 md:grid-cols-4 gap-8 relative z-10 text-center md:text-left">
                {[
                  { label: "Years Exp.", val: "18+" },
                  { label: "Projects", val: "120+" },
                  { label: "Awards", val: "15" },
                  { label: "Clients", val: "500+" }
                ].map((stat, i) => (
                  <div key={i}>
                    <h4 className="text-3xl md:text-4xl font-black text-white mb-1">{stat.val}</h4>
                    <p className="text-sm text-slate-400 font-medium uppercase tracking-wider">{stat.label}</p>
                  </div>
                ))}
             </div>
          </section>

          {/* Services Section */}
          <Services />

        </main>
      </div>

      <Footer />
    </div>
  );
}