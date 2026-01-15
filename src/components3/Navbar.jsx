import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight } from 'lucide-react';

const NAV_LINKS = [
  { label: "Home", href: "#hero" },
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Notices", href: "#notices" },
  { label: "Contact", href: "#contact" }
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-slate-100">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Logo - Minimal */}
        <a href="#hero" className="flex items-center gap-3 group">
          <div className="w-10 h-10 bg-slate-900 text-white rounded flex items-center justify-center font-bold text-lg group-hover:bg-rose-700 transition-colors">
            HC
          </div>
          <div>
            <h1 className="text-lg font-bold text-slate-900 leading-none">HC Parekh</h1>
            <p className="text-[10px] tracking-widest font-semibold text-slate-400 uppercase">Consulting</p>
          </div>
        </a>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map((link, idx) => (
            <a key={idx} href={link.href} className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors">
              {link.label}
            </a>
          ))}
          <a href="#contact" className="bg-slate-900 text-white px-6 py-2.5 rounded text-sm font-medium hover:bg-rose-700 transition-all flex items-center gap-2">
            Get in Touch <ArrowRight size={14} />
          </a>
        </div>

        {/* Mobile Toggle */}
        <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden p-2 text-slate-800">
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="lg:hidden bg-white border-b border-slate-100 overflow-hidden"
          >
            <div className="flex flex-col p-6 space-y-4">
              {NAV_LINKS.map((link, idx) => (
                <a key={idx} href={link.href} onClick={() => setIsOpen(false)} className="text-lg font-medium text-slate-600 hover:text-rose-700">
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