import React, { useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, ArrowRight, Menu, X, Play, Globe, Shield, Zap } from 'lucide-react';

// --- DATA ---
const SERVICES = [
  { id: "01", title: "Industrial Strategy", desc: "Feasibility studies & land acquisition.", img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80" },
  { id: "02", title: "Legal Frameworks", desc: "Corporate law & government tenders.", img: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800&q=80" },
  { id: "03", title: "Capital Structuring", desc: "Private equity & debt management.", img: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80" },
  { id: "04", title: "Global Expansion", desc: "Cross-border trade partnerships.", img: "https://images.unsplash.com/photo-1526304640152-d4619684e484?w=800&q=80" }
];

// --- COMPONENTS ---

const FloatingNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <motion.nav 
        initial={{ y: -100 }} animate={{ y: 0 }}
        className="fixed top-6 left-1/2 -translate-x-1/2 z-50 bg-emerald-950 text-white px-2 py-2 rounded-full flex items-center gap-2 shadow-2xl"
      >
        <div className="bg-white text-emerald-950 w-10 h-10 rounded-full flex items-center justify-center font-serif font-bold text-xl">
          H
        </div>
        
        <div className="hidden md:flex items-center gap-1 px-4">
          {['Work', 'Agency', 'Insights'].map((link) => (
            <a key={link} href={`#${link.toLowerCase()}`} className="px-4 py-2 text-sm font-medium hover:bg-white/10 rounded-full transition-colors">
              {link}
            </a>
          ))}
        </div>

        <button 
          onClick={() => setIsOpen(true)}
          className="bg-emerald-800 hover:bg-emerald-700 w-10 h-10 rounded-full flex items-center justify-center transition-colors"
        >
          <Menu size={18} />
        </button>
      </motion.nav>

      {/* Full Screen Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 bg-emerald-950 z-[60] flex flex-col justify-center items-center text-white"
          >
            <button onClick={() => setIsOpen(false)} className="absolute top-8 right-8 p-4 bg-white/10 rounded-full hover:bg-white/20">
              <X size={24} />
            </button>
            <div className="space-y-6 text-center">
              {['Home', 'Expertise', 'Projects', 'Careers', 'Contact'].map((item, i) => (
                <motion.a 
                  key={item}
                  href="#"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: i * 0.1 }}
                  className="block text-5xl md:text-7xl font-serif hover:text-emerald-400 transition-colors cursor-pointer"
                >
                  {item}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

const HeroV6 = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center px-6 pt-32 pb-12 relative overflow-hidden">
      {/* Editorial Layout */}
      <div className="container mx-auto grid lg:grid-cols-12 gap-12 items-end">
        
        <div className="lg:col-span-8 relative z-10">
          <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
            <h1 className="text-6xl md:text-9xl font-serif text-emerald-950 leading-[0.9] mb-8">
              Corporate <br/> 
              <span className="italic font-light">Catalysts.</span>
            </h1>
            <div className="h-px w-full bg-emerald-900/20 mb-8"></div>
            <div className="flex flex-col md:flex-row gap-8 justify-between items-start">
              <p className="text-emerald-800/70 max-w-sm text-lg leading-relaxed">
                Since 2007, defining the industrial landscape of India through precision consulting and strategic execution.
              </p>
              <button className="group flex items-center gap-4 text-emerald-950 font-bold uppercase tracking-widest text-xs border border-emerald-900/20 px-8 py-4 rounded-full hover:bg-emerald-950 hover:text-white transition-all">
                View Showreel <Play size={14} className="fill-current" />
              </button>
            </div>
          </motion.div>
        </div>

        <div className="lg:col-span-4 h-full relative">
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }} 
            animate={{ scale: 1, opacity: 1 }} 
            transition={{ duration: 1.2, delay: 0.2 }}
            className="relative rounded-t-[10rem] overflow-hidden h-[500px] w-full"
          >
             <img 
               src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1000" 
               alt="Architecture" 
               className="object-cover w-full h-full hover:scale-110 transition-transform duration-[2s]"
             />
             <div className="absolute bottom-6 left-6 bg-white/80 backdrop-blur px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider">
               Mumbai HQ
             </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const MarqueeText = () => (
  <div className="py-12 bg-emerald-950 overflow-hidden whitespace-nowrap border-y border-emerald-900">
    <motion.div 
      animate={{ x: [0, -1000] }} 
      transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
      className="inline-block text-white/20 font-serif text-8xl md:text-9xl leading-none"
    >
      STRATEGY • EXECUTION • GROWTH • LEGACY • STRATEGY • EXECUTION • GROWTH • LEGACY •
    </motion.div>
  </div>
);

const InteractiveServiceList = () => {
  const [activeImg, setActiveImg] = useState(SERVICES[0].img);

  return (
    <section className="py-24 bg-stone-100">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          
          {/* List */}
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-emerald-600 mb-8">Our Expertise</p>
            <div className="space-y-0">
              {SERVICES.map((s, i) => (
                <motion.div 
                  key={i}
                  onMouseEnter={() => setActiveImg(s.img)}
                  className="group py-10 border-t border-emerald-900/10 cursor-pointer flex justify-between items-center"
                >
                  <div>
                    <span className="text-xs font-mono text-emerald-400 mb-2 block">{s.id}</span>
                    <h3 className="text-3xl md:text-5xl font-serif text-emerald-950 group-hover:italic transition-all duration-300">
                      {s.title}
                    </h3>
                    <p className="text-emerald-800/60 mt-2 opacity-0 group-hover:opacity-100 transition-opacity h-0 group-hover:h-auto overflow-hidden">
                      {s.desc}
                    </p>
                  </div>
                  <ArrowUpRight className="text-emerald-950 opacity-0 group-hover:opacity-100 transition-opacity transform group-hover:translate-x-2 group-hover:-translate-y-2" />
                </motion.div>
              ))}
              <div className="border-t border-emerald-900/10"></div>
            </div>
          </div>

          {/* Dynamic Image */}
          <div className="hidden lg:block relative h-[600px] w-full">
            <motion.div 
              key={activeImg}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              className="absolute inset-0 rounded-3xl overflow-hidden shadow-2xl"
            >
              <img src={activeImg} alt="Service" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-emerald-950/20"></div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

const StatsSection = () => (
  <section className="py-24 bg-emerald-950 text-stone-100">
    <div className="container mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-12 text-center md:text-left">
      {[
        { val: "120+", label: "Projects Completed" },
        { val: "₹500Cr", label: "Value Managed" },
        { val: "18", label: "Years Active" },
        { val: "100%", label: "Client Retention" }
      ].map((s, i) => (
        <div key={i} className="border-l border-emerald-800 pl-8">
          <h4 className="text-5xl font-serif mb-2">{s.val}</h4>
          <p className="text-xs uppercase tracking-widest text-emerald-400">{s.label}</p>
        </div>
      ))}
    </div>
  </section>
);

const FooterEditorial = () => (
  <footer className="bg-stone-200 py-24 border-t border-stone-300">
    <div className="container mx-auto px-6">
      <div className="grid lg:grid-cols-12 gap-12">
        
        <div className="lg:col-span-8">
          <h2 className="text-6xl md:text-8xl font-serif text-emerald-950 leading-none mb-12">
            Let's build <br/> the <span className="italic text-emerald-700">future.</span>
          </h2>
          <div className="flex flex-col md:flex-row gap-8">
            <button className="bg-emerald-950 text-white px-12 py-5 rounded-full text-lg font-bold hover:bg-emerald-900 transition-all">
              Start Project
            </button>
            <button className="border border-emerald-950 text-emerald-950 px-12 py-5 rounded-full text-lg font-bold hover:bg-emerald-950 hover:text-white transition-all">
              info@hcparekh.com
            </button>
          </div>
        </div>

        <div className="lg:col-span-4 flex flex-col justify-between">
          <div className="space-y-2">
            <p className="text-sm font-bold uppercase tracking-widest text-emerald-900">Headquarters</p>
            <p className="text-emerald-800 text-lg leading-relaxed">
              12, Corporate Park,<br/>
              Ambli-Bopal Road,<br/>
              Ahmedabad, Gujarat.
            </p>
          </div>
          <div className="flex gap-6 mt-12 md:mt-0 text-emerald-950 font-bold underline">
            <a href="#">LinkedIn</a>
            <a href="#">Instagram</a>
            <a href="#">Twitter</a>
          </div>
        </div>

      </div>
      <div className="mt-24 pt-8 border-t border-stone-300 flex justify-between text-xs text-emerald-800/60 uppercase font-bold tracking-widest">
        <span>© 2026 HC Parekh</span>
        <span>Made with Excellence</span>
      </div>
    </div>
  </footer>
);

export default function HomeV6() {
  return (
    <div className="bg-stone-50 min-h-screen text-emerald-950 selection:bg-emerald-900 selection:text-white font-sans">
      <FloatingNav />
      <HeroV6 />
      <MarqueeText />
      
      {/* About Brief */}
      <section className="py-32 container mx-auto px-6 max-w-5xl">
        <p className="text-3xl md:text-5xl font-serif leading-tight text-center">
          "We don't just provide advice; we provide <span className="italic text-emerald-600">architecture</span> for your ambition. From the first signature to the final ribbon cutting."
        </p>
      </section>

      <InteractiveServiceList />
      <StatsSection />
      
      {/* Visual Break */}
      <section className="h-[80vh] w-full relative overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&q=80&w=2070" 
          alt="Office" 
          className="w-full h-full object-cover fixed-bg"
        />
        <div className="absolute inset-0 bg-emerald-950/40 flex items-center justify-center">
           <div className="w-24 h-24 rounded-full border-2 border-white flex items-center justify-center text-white cursor-pointer hover:scale-110 transition-transform backdrop-blur-sm">
             <Play fill="white" />
           </div>
        </div>
      </section>

      <FooterEditorial />
    </div>
  );
}