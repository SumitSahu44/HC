import React from 'react';
import { Link, useLocation } from 'react-router-dom'; // 1. useLocation import kiya
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronRight } from 'lucide-react';
import { SIDEBAR_LINKS } from '../data';

export default function Sidebar({ isOpen, toggle }) {
  const location = useLocation(); // 2. Current path get karne ke liye

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
          <button onClick={toggle} className="p-1 hover:bg-slate-100 rounded"><X size={20} /></button>
        </div>

        <div className="flex-1 overflow-y-auto py-4 px-3 space-y-1">
          {SIDEBAR_LINKS.map((link, idx) => {
            // 3. Check karein ki kya ye link active hai
            const isActive = location.pathname === link.href;

            return (
              <Link
                key={idx}
                to={link.href}
                onClick={toggle}
                className={`flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-xl transition-all group ${isActive
                  ? 'text-rose-700 bg-rose-50' // Active Styles
                  : 'text-slate-600 hover:text-rose-700 hover:bg-rose-50' // Inactive/Hover Styles
                  }`}
              >
                {/* 4. Dot color change based on active state */}
                <div className={`w-1.5 h-1.5 rounded-full transition-colors ${isActive ? 'bg-rose-600' : 'bg-slate-300 group-hover:bg-rose-600'
                  }`} />

                {link.label}

                {/* 5. Arrow icon active state mein hamesha dikhega */}
                <ChevronRight
                  size={14}
                  className={`ml-auto transition-opacity ${isActive ? 'opacity-100 text-rose-600' : 'opacity-0 group-hover:opacity-100 text-rose-400'
                    }`}
                />
              </Link>
            );
          })}
        </div>
      </motion.aside>
    </>
  );
}