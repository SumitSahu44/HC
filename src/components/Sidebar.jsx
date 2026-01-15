import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronRight, Phone } from 'lucide-react';
import { SIDEBAR_LINKS } from '../data';

export default function Sidebar({ isOpen, toggle }) {
  return (
    <>
      {/* Mobile Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={toggle}
            className="fixed inset-0 z-40 bg-slate-900/40 backdrop-blur-sm lg:hidden"
          />
        )}
      </AnimatePresence>

      {/* Sidebar Panel */}
      <motion.aside 
        className={`fixed lg:sticky top-0 lg:top-32 inset-y-0 left-0 z-50 w-72 bg-white border-r border-slate-100 shadow-2xl lg:shadow-none transform transition-transform duration-300 ease-in-out h-screen lg:h-[calc(100vh-140px)] flex flex-col ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}`}
      >
        <div className="p-5 flex justify-between items-center lg:hidden border-b border-slate-100">
          <span className="font-bold text-lg text-slate-800">Menu</span>
          <button onClick={toggle} className="p-1 hover:bg-slate-100 rounded"><X size={20}/></button>
        </div>
        
        <div className="flex-1 overflow-y-auto py-4 px-3 space-y-1">
          {SIDEBAR_LINKS.map((link, idx) => (
            <a 
              key={idx} href={link.href} 
              className="flex items-center gap-3 px-4 py-3 text-sm font-medium text-slate-600 hover:text-rose-700 hover:bg-rose-50 rounded-xl transition-all group"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-slate-300 group-hover:bg-rose-600 transition-colors" />
              {link.label}
              <ChevronRight size={14} className="ml-auto opacity-0 group-hover:opacity-100 text-rose-400 transition-opacity" />
            </a>
          ))}
        </div>

        <div className="p-5 mt-auto">
          <div className="bg-slate-900 rounded-2xl p-4 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-rose-500 blur-[40px] opacity-30" />
            <p className="text-xs text-slate-400 mb-1">Need Consultation?</p>
            <p className="font-bold text-lg mb-3">+91 98765 43210</p>
            <button className="w-full bg-white/10 hover:bg-white/20 py-2 rounded-lg text-xs font-semibold flex items-center justify-center gap-2 transition-colors">
              <Phone size={14} /> Call Now
            </button>
          </div>
        </div>
      </motion.aside>
    </>
  );
}