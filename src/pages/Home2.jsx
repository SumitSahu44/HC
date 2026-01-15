import React from 'react';
import Navbar from '../components2/Navbar';
import Hero from '../components2/Hero';
import StatsRow from '../components2/StatsRow';
import LiveNotices from '../components2/LiveNotices';
import ServiceShowcase from '../components2/ServiceShowcase';
import Footer from '../components/Footer'; // Pichla wala footer reuse kar lo

export default function App() {
  return (
    <div className="font-sans antialiased text-slate-900 bg-white selection:bg-rose-500 selection:text-white">
      <Navbar />
      
      <main>
        <Hero />
        <StatsRow />
        <LiveNotices />
        <ServiceShowcase />
        
        {/* Call to Action Section */}
        <section className="py-24 bg-rose-600 text-white text-center">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl md:text-5xl font-black mb-6">Ready to Scale Your Business?</h2>
            <p className="text-rose-100 text-lg mb-10 max-w-2xl mx-auto">
              Partner with HC Parekh for world-class consultation and industrial setup. Let's build the future together.
            </p>
            <button className="bg-white text-rose-700 px-10 py-4 rounded-full font-bold text-lg hover:bg-rose-50 hover:shadow-2xl hover:-translate-y-1 transition-all">
              Schedule a Consultation
            </button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}