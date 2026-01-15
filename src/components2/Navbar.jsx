import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, Globe } from 'lucide-react';
import { SIDEBAR_LINKS } from '../data';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg border-b border-slate-200">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Brand Logo */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-rose-600 text-white rounded-lg flex items-center justify-center font-black text-xl shadow-lg shadow-rose-500/30">
            HC
          </div>
          <div>
            <h1 className="text-xl font-bold text-slate-900 leading-none">HC Parekh</h1>
            <p className="text-[10px] tracking-widest font-bold text-slate-500 uppercase">Consultants</p>
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-8">
          {SIDEBAR_LINKS.slice(0, 5).map((link, idx) => (
            <a key={idx} href={link.href} className="text-sm font-medium text-slate-600 hover:text-rose-600 transition-colors">
              {link.label}
            </a>
          ))}
          <button className="bg-slate-900 text-white px-5 py-2 rounded-full text-sm font-bold hover:bg-slate-800 transition-all flex items-center gap-2">
            <Phone size={14} /> Contact
          </button>
        </div>

        {/* Mobile Toggle */}
        <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden p-2 text-slate-800">
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="lg:hidden bg-white border-b border-slate-200 overflow-hidden"
          >
            <div className="flex flex-col p-6 space-y-4">
              {SIDEBAR_LINKS.map((link, idx) => (
                <a key={idx} href="#" className="text-lg font-medium text-slate-700 hover:text-rose-600">
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}