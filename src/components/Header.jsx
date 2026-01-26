import React from 'react';
import { motion } from 'framer-motion';
import { Menu, Award, ArrowRight } from 'lucide-react';
import { TOP_CATEGORIES } from '../data';

export default function Header({ toggleSidebar }) {
  return (
    <>
      {/* Top Navbar */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200 shadow-sm"
      >
        <div className="container mx-auto px-4 md:px-6 py-3 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <button onClick={toggleSidebar} className="p-2 hover:bg-gray-100 rounded-lg lg:hidden text-slate-700 transition-colors">
              <Menu size={24} />
            </button>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-rose-700 to-rose-900 text-white flex items-center justify-center rounded-xl shadow-lg shadow-rose-500/20">
                <span className="text-xl md:text-2xl font-black">
                  <img src="./images/HC logo.png" alt="" />
                </span>
              </div>
              <div>
                <h1 className="text-lg md:text-xl font-bold text-slate-900 tracking-tight leading-none">HC Parekh</h1>
                <p className="text-[10px] md:text-xs text-slate-500 font-bold uppercase tracking-wider">Project Consultant & Investor</p>
              </div>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <div className="bg-slate-100 px-4 py-1.5 rounded-full text-xs font-bold text-slate-600 flex items-center gap-2 border border-slate-200">
              <Award size={14} className="text-rose-600" />
              <span>Est. 2007</span>
            </div>
            <button className="bg-slate-900 hover:bg-slate-800 text-white px-5 py-2 rounded-full text-sm font-medium transition-all shadow-lg hover:shadow-xl flex items-center gap-2">
              Contact Us <ArrowRight size={14} />
            </button>
          </div>
        </div>
      </motion.header>

      {/* Categories Scroller */}
      <div className="bg-white border-b border-gray-100 overflow-x-auto no-scrollbar">
        <div className="container mx-auto flex px-4 md:px-6 py-2 gap-2">
          {TOP_CATEGORIES.map((cat, idx) => (
            <button key={idx} className="whitespace-nowrap px-4 py-1.5 text-[11px] font-bold text-slate-500 bg-slate-50 border border-slate-200 rounded-md hover:bg-rose-50 hover:text-rose-700 hover:border-rose-200 transition-all">
              {cat}
            </button>
          ))}
        </div>
      </div>
    </>
  );
}