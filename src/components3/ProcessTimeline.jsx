import React from 'react';
import { Search, PenTool, TrendingUp, CheckCircle } from 'lucide-react';

const STEPS = [
  { id: "01", title: "Discovery", desc: "We analyze your requirements and industrial feasibility.", icon: Search },
  { id: "02", title: "Strategy", desc: "Developing a roadmap including legal and financial planning.", icon: PenTool },
  { id: "03", title: "Execution", desc: "Implementation of the project with our expert team.", icon: CheckCircle },
  { id: "04", title: "Growth", desc: "Post-setup support to ensure scalable operations.", icon: TrendingUp },
];

export default function ProcessTimeline() {
  return (
    <section id="process" className="py-24 bg-white border-y border-slate-100">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">How We Work</h2>
          <p className="text-slate-500">A simplified four-step process to bring your vision to life.</p>
        </div>

        <div className="grid md:grid-cols-4 gap-8 relative">
          {/* Connector Line (Desktop only) */}
          <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-slate-100 -z-10"></div>

          {STEPS.map((step, idx) => (
            <div key={idx} className="bg-white p-4 text-center">
              <div className="w-24 h-24 mx-auto bg-white border-4 border-slate-50 rounded-full flex items-center justify-center mb-6 text-rose-700 shadow-sm">
                <step.icon size={32} />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">{step.title}</h3>
              <p className="text-sm text-slate-500 leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}