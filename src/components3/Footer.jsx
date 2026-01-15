import React from 'react';
import Navbar from '../components/Navbar';
import HeroModern from '../components/HeroModern';
import ServiceShowcase from '../components/ServiceShowcase';
import ProcessTimeline from '../components/ProcessTimeline'; // NEW Section
import LiveNotices from '../components/LiveNotices'; // Same as before, just ensure white background
import Footer from '../components/Footer'; 

export default function HomeV2() {
  return (
    <div className="font-sans antialiased text-slate-900 bg-white selection:bg-rose-200 selection:text-rose-900">
      <Navbar />
      
      <main>
        {/* Sections with IDs for scrolling */}
        <HeroModern />
        
        <ProcessTimeline />
        
        <ServiceShowcase />

        {/* Why Choose Us - Simple Stats Grid */}
        <section className="py-20 bg-slate-900 text-white">
          <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
             <div>
               <h2 className="text-3xl font-bold mb-6">Why Partner With Us?</h2>
               <div className="space-y-4">
                 <div className="flex gap-4 items-start">
                   <div className="w-1 h-12 bg-rose-600"></div>
                   <p className="text-slate-300">Over 18 years of proven track record in Indian Industrial sectors.</p>
                 </div>
                 <div className="flex gap-4 items-start">
                   <div className="w-1 h-12 bg-rose-600"></div>
                   <p className="text-slate-300">Complete transparency in Tenders, MOUs, and Legal compliance.</p>
                 </div>
               </div>
             </div>
             <div className="grid grid-cols-2 gap-4">
               <div className="bg-white/5 p-6 rounded border border-white/10 text-center">
                  <h3 className="text-4xl font-bold text-rose-500">120+</h3>
                  <p className="text-xs uppercase tracking-widest mt-2">Projects</p>
               </div>
               <div className="bg-white/5 p-6 rounded border border-white/10 text-center">
                  <h3 className="text-4xl font-bold text-rose-500">500Cr</h3>
                  <p className="text-xs uppercase tracking-widest mt-2">Value Managed</p>
               </div>
             </div>
          </div>
        </section>

        {/* Notices Section */}
        <div id="notices">
           <LiveNotices />
        </div>

        {/* Contact Section */}
        <section id="contact" className="py-24 bg-slate-50 border-t border-slate-200">
          <div className="container mx-auto px-6 text-center max-w-2xl">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Let's Discuss Your Project</h2>
            <p className="text-slate-500 mb-8">Ready to move forward? Schedule a free 30-minute consultation with our senior experts.</p>
            <form className="space-y-4 text-left bg-white p-8 rounded-lg shadow-sm border border-slate-100">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">NAME</label>
                  <input type="text" className="w-full bg-slate-50 border border-slate-200 p-3 rounded focus:outline-none focus:border-slate-900" placeholder="John Doe"/>
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">EMAIL</label>
                  <input type="email" className="w-full bg-slate-50 border border-slate-200 p-3 rounded focus:outline-none focus:border-slate-900" placeholder="john@company.com"/>
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">MESSAGE</label>
                <textarea className="w-full bg-slate-50 border border-slate-200 p-3 rounded focus:outline-none focus:border-slate-900 h-32" placeholder="Tell us about your project..."></textarea>
              </div>
              <button className="w-full bg-slate-900 text-white py-4 font-bold rounded hover:bg-rose-700 transition-colors">Send Message</button>
            </form>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}