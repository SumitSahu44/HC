import React from 'react';
import { SERVICES } from '../data';

export default function ServiceShowcase() {
  return (
    <section id="services" className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="mb-16 border-b border-slate-200 pb-8 flex flex-col md:flex-row justify-between items-end gap-4">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-2">Our Expertise</h2>
            <p className="text-slate-500">Comprehensive solutions for the modern industry.</p>
          </div>
          <a href="#" className="text-rose-700 font-medium hover:text-slate-900 transition-colors">View All Services -></a>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, idx) => (
            <div key={idx} className="bg-white p-8 border border-slate-100 hover:border-slate-300 transition-colors group">
              <div className="w-12 h-12 bg-slate-50 rounded flex items-center justify-center mb-6 text-slate-900 group-hover:bg-rose-700 group-hover:text-white transition-colors">
                <service.icon size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}