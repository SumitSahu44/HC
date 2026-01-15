import React from 'react';
import { motion } from 'framer-motion';
import { BellRing, ChevronRight } from 'lucide-react';
import { NOTICES } from '../data';

export default function LiveNotices() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 flex flex-col lg:flex-row gap-12">
        
        {/* Header Text */}
        <div className="lg:w-1/3">
          <span className="text-rose-600 font-bold tracking-widest text-sm">NOTIFICATIONS</span>
          <h2 className="text-4xl font-black text-slate-900 mt-2 mb-4">Latest Corporate <br/> Updates</h2>
          <p className="text-slate-500 mb-6">Stay informed with the latest tenders, policy changes, and internal announcements from HC Parekh.</p>
          <button className="text-slate-900 font-bold underline hover:text-rose-600">View All Archive</button>
        </div>

        {/* Notice List */}
        <div className="lg:w-2/3 space-y-4">
          {NOTICES.map((note, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="flex items-start gap-4 p-5 rounded-2xl bg-slate-50 hover:bg-white border border-slate-100 hover:border-rose-100 hover:shadow-lg transition-all group cursor-pointer"
            >
              <div className={`mt-1 p-2 rounded-full ${note.urgent ? 'bg-rose-100 text-rose-600' : 'bg-slate-200 text-slate-600'}`}>
                <BellRing size={18} />
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-center mb-1">
                  <span className="text-xs font-bold text-slate-400">{note.date || 'Today'}</span>
                  {note.urgent && <span className="text-[10px] font-bold bg-rose-600 text-white px-2 py-0.5 rounded">URGENT</span>}
                </div>
                <h4 className="font-bold text-slate-800 group-hover:text-rose-700 transition-colors">{note.text}</h4>
              </div>
              <ChevronRight className="text-slate-300 group-hover:text-rose-500 transition-colors" />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}