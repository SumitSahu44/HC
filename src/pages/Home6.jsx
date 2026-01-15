import React, { useState, useEffect, useRef } from 'react';
import { 
  motion, 
  useScroll, 
  useTransform, 
  useSpring, 
  useMotionValue, 
  AnimatePresence 
} from 'framer-motion';
import { 
  ArrowRight, ArrowUpRight, Menu, X, ChevronDown, 
  Play, Globe, Shield, Zap, TrendingUp, Users, 
  FileText, CheckCircle, Mail, MapPin, Phone, 
  Facebook, Twitter, Linkedin, Instagram, Plus
} from 'lucide-react';

// ==========================================
// 1. DATA & CONTENT REPOSITORY
// ==========================================

const APP_DATA = {
  name: "HC PAREKH",
  tagline: "Architects of Industrial Ambition",
  contact: {
    phone: "+91 98765 43210",
    email: "consult@hcparekh.com",
    address: "1204, Titanium Business Park, Corporate Road, Ahmedabad, India."
  },
  nav: [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'Agency' },
    { id: 'services', label: 'Expertise' },
    { id: 'projects', label: 'Case Studies' },
    { id: 'process', label: 'Methodology' },
    { id: 'contact', label: 'Contact' },
  ],
  stats: [
    { val: "18+", label: "Years of Legacy" },
    { val: "₹500Cr", label: "Capital Deployed" },
    { val: "120+", label: "Industrial Setups" },
    { val: "100%", label: "Compliance Score" },
  ],
  services: [
    {
      id: "s1",
      title: "Strategic Consultation",
      subtitle: "The Blueprint",
      desc: "We analyze market feasibility, land acquisition strategies, and regulatory landscapes to create a foolproof roadmap for your industrial setup.",
      features: ["Feasibility Reports", "Land Scouting", "Risk Assessment"],
      img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=1000"
    },
    {
      id: "s2",
      title: "Financial Structuring",
      subtitle: "Capital & Growth",
      desc: "From private equity fundraising to debt restructuring, we ensure your project is financially viable and attractive to investors.",
      features: ["Debt Syndication", "PE Funding", "Valuation Services"],
      img: "https://images.unsplash.com/photo-1553729459-efe14ef6055d?auto=format&fit=crop&q=80&w=1000"
    },
    {
      id: "s3",
      title: "Legal & Compliance",
      subtitle: "Regulatory Shield",
      desc: "Navigating the labyrinth of Indian corporate law. We handle government tenders, MOUs, and all statutory compliances.",
      features: ["Tender Bidding", "MOU Drafting", "Licensing"],
      img: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80&w=1000"
    },
    {
      id: "s4",
      title: "Global Expansion",
      subtitle: "Beyond Borders",
      desc: "Helping Indian firms go global and international firms enter India. We bridge the gap with cross-border trade consulting.",
      features: ["Import/Export", "FDI Advisory", "JV Formation"],
      img: "https://images.unsplash.com/photo-1529101091760-61df6be59f08?auto=format&fit=crop&q=80&w=1000"
    }
  ],
  projects: [
    { title: "Solar Gigafactory", cat: "Renewable Energy", year: "2024", img: "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&q=80&w=800" },
    { title: "Textile Park Hub", cat: "Manufacturing", year: "2023", img: "https://images.unsplash.com/photo-1620799140408-ed5341cd2431?auto=format&fit=crop&q=80&w=800" },
    { title: "Pharma SEZ Unit", cat: "Healthcare", year: "2022", img: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=800" },
    { title: "Auto Assembly Line", cat: "Automobile", year: "2025", img: "https://images.unsplash.com/photo-1622352827103-68d2b349d799?auto=format&fit=crop&q=80&w=800" },
  ],
  process: [
    { step: "01", title: "Discovery", desc: "Understanding the core vision and requirements." },
    { step: "02", title: "Strategy", desc: "Developing the financial and legal framework." },
    { step: "03", title: "Execution", desc: "On-ground implementation and setup." },
    { step: "04", title: "Handover", desc: "Operational training and final delivery." },
  ],
  faq: [
    { q: "Do you handle government liaising?", a: "Yes, we have a dedicated team for government relations and licensing." },
    { q: "What is the typical project size?", a: "We generally handle projects with a capital outlay of ₹5Cr to ₹500Cr." },
    { q: "Can you assist with foreign funding?", a: "Absolutely. We specialize in FDI norms and international fundraising." }
  ]
};

// ==========================================
// 2. UTILITY COMPONENTS (UI KIT)
// ==========================================

// Custom Mouse Cursor
const CustomCursor = () => {
  const cursorRef = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const moveCursor = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', moveCursor);
    return () => window.removeEventListener('mousemove', moveCursor);
  }, []);

  return (
    <div 
      className="fixed w-6 h-6 border-2 border-indigo-500 rounded-full pointer-events-none z-[9999] transition-transform duration-75 mix-blend-difference hidden md:block"
      style={{ left: position.x, top: position.y, transform: 'translate(-50%, -50%)' }}
    >
      <div className="w-1 h-1 bg-indigo-500 rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
    </div>
  );
};

// Preloader
const Preloader = ({ setLoading }) => {
  return (
    <motion.div 
      initial={{ y: 0 }}
      animate={{ y: "-100%" }}
      transition={{ duration: 1, delay: 2.5, ease: [0.76, 0, 0.24, 1] }}
      onAnimationComplete={() => setLoading(false)}
      className="fixed inset-0 z-[100] bg-slate-950 flex items-center justify-center text-white"
    >
      <motion.div 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <div className="overflow-hidden mb-2">
          <motion.h1 
            initial={{ y: 100 }} animate={{ y: 0 }} 
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="text-6xl md:text-8xl font-black tracking-tighter"
          >
            HC PAREKH
          </motion.h1>
        </div>
        <div className="h-1 w-full bg-slate-800 rounded-full overflow-hidden mt-4 max-w-xs mx-auto">
          <motion.div 
            initial={{ width: 0 }} animate={{ width: "100%" }} 
            transition={{ duration: 2, ease: "easeInOut" }}
            className="h-full bg-indigo-500"
          />
        </div>
        <p className="text-slate-500 text-xs mt-4 font-mono uppercase">Initializing Industrial Protocol...</p>
      </motion.div>
    </motion.div>
  );
};

// Section Header Reusable
const SectionTitle = ({ sub, title, light = false }) => (
  <div className="mb-16">
    <motion.div 
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="flex items-center gap-3 mb-4"
    >
      <div className={`h-[2px] w-8 ${light ? 'bg-indigo-400' : 'bg-indigo-600'}`}></div>
      <span className={`text-xs font-bold uppercase tracking-[0.2em] ${light ? 'text-indigo-300' : 'text-indigo-600'}`}>
        {sub}
      </span>
    </motion.div>
    <motion.h2 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.1 }}
      className={`text-4xl md:text-6xl font-black leading-tight ${light ? 'text-white' : 'text-slate-900'}`}
    >
      {title}
    </motion.h2>
  </div>
);

// Primary Button
const PrimaryBtn = ({ children, onClick, href, className = "" }) => {
  const Component = href ? 'a' : 'button';
  return (
    <Component 
      href={href} 
      onClick={onClick}
      className={`relative overflow-hidden group bg-slate-900 text-white px-8 py-4 rounded-full font-bold text-sm tracking-wide inline-flex items-center gap-2 ${className}`}
    >
      <span className="relative z-10 flex items-center gap-2">{children}</span>
      <div className="absolute inset-0 bg-indigo-600 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 ease-out z-0"></div>
    </Component>
  );
};

// ==========================================
// 3. PAGE SECTIONS (MODULES)
// ==========================================

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.nav 
        className={`fixed top-0 w-full z-50 transition-all duration-300 border-b ${scrolled ? 'bg-white/80 backdrop-blur-lg border-slate-200 py-4' : 'bg-transparent border-transparent py-6'}`}
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          <a href="#" className="text-2xl font-black tracking-tighter flex items-center gap-2 z-50 relative">
            <div className="w-8 h-8 bg-indigo-600 rounded flex items-center justify-center text-white text-sm">H</div>
            <span className={scrolled || isOpen ? "text-slate-900" : "text-slate-900"}>HC PAREKH</span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {APP_DATA.nav.map(item => (
              <a key={item.id} href={`#${item.id}`} className="text-sm font-bold text-slate-600 hover:text-indigo-600 transition-colors uppercase text-[11px] tracking-widest">
                {item.label}
              </a>
            ))}
            <PrimaryBtn href="#contact">Start Project <ArrowRight size={16}/></PrimaryBtn>
          </div>

          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden z-50 relative p-2">
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </motion.nav>

      {/* Full Screen Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, clipPath: "circle(0% at 100% 0)" }}
            animate={{ opacity: 1, clipPath: "circle(150% at 100% 0)" }}
            exit={{ opacity: 0, clipPath: "circle(0% at 100% 0)" }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="fixed inset-0 bg-slate-950 z-40 flex items-center justify-center text-white"
          >
            <div className="text-center space-y-6">
              {APP_DATA.nav.map((item, i) => (
                <motion.a 
                  key={item.id}
                  href={`#${item.id}`} 
                  onClick={() => setIsOpen(false)}
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: i * 0.1 }}
                  className="block text-5xl font-black hover:text-indigo-500 transition-colors"
                >
                  {item.label}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-slate-50">
      <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-indigo-200/50 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2"></div>
      
      <div className="container mx-auto px-6 grid lg:grid-cols-12 gap-12 items-center relative z-10">
        <div className="lg:col-span-7">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 3 }}>
            <div className="flex items-center gap-3 mb-6">
              <span className="flex h-3 w-3 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-indigo-500"></span>
              </span>
              <span className="text-xs font-bold uppercase tracking-widest text-slate-500">Consulting Since 2007</span>
            </div>
            
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-black text-slate-950 leading-[0.9] tracking-tighter mb-8">
              INDUSTRY <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-500">
                EVOLVED.
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-slate-500 max-w-xl leading-relaxed mb-10 border-l-4 border-indigo-500 pl-6">
              We bridge the gap between vision and execution. The most trusted name in corporate strategy and industrial setups in India.
            </p>

            <div className="flex flex-wrap gap-4">
              <PrimaryBtn href="#contact">Schedule Consultation</PrimaryBtn>
              <button className="px-8 py-4 rounded-full border border-slate-300 font-bold hover:bg-white hover:shadow-lg transition-all flex items-center gap-2">
                <Play size={18} fill="currentColor" /> Watch Showreel
              </button>
            </div>
          </motion.div>
        </div>

        <div className="lg:col-span-5 relative hidden lg:block">
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 3.2 }}
            className="relative z-10"
          >
            <div className="aspect-[4/5] bg-slate-900 rounded-[2rem] overflow-hidden shadow-2xl rotate-3 hover:rotate-0 transition-all duration-700 relative group">
              <img 
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800" 
                alt="Building" 
                className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-1000"
              />
              <div className="absolute bottom-0 left-0 w-full p-8 bg-gradient-to-t from-black/80 to-transparent">
                <div className="bg-white/20 backdrop-blur-md p-4 rounded-xl border border-white/10">
                  <p className="text-white font-bold text-lg">Capital Management</p>
                  <p className="text-indigo-300 text-sm">₹500Cr+ Portfolio</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Marquee = () => {
  return (
    <div className="bg-slate-950 text-white py-8 border-y border-slate-800 overflow-hidden">
      <div className="flex whitespace-nowrap overflow-hidden">
        <motion.div 
          className="flex gap-16 items-center"
          animate={{ x: [0, -1000] }}
          transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
        >
          {[...Array(12)].map((_, i) => (
            <div key={i} className="flex items-center gap-4 text-2xl font-black text-slate-700 uppercase">
              <Shield size={32} className="text-indigo-900" /> TRUSTED PARTNER
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

const AboutStats = () => {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 mb-20">
          <div>
            <SectionTitle sub="Who We Are" title="Architects of Modern Industry" />
          </div>
          <div className="pt-8">
            <p className="text-xl text-slate-600 leading-relaxed mb-6">
              Founded in 2007, HC Parekh has evolved from a small advisory firm to a powerhouse of industrial consulting. We don't just offer advice; we engineer success.
            </p>
            <p className="text-slate-500">
              With a team of 50+ experts ranging from legal veterans to financial wizards, we provide a 360-degree ecosystem for businesses looking to scale in India.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {APP_DATA.stats.map((stat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 bg-slate-50 rounded-2xl border border-slate-100 hover:border-indigo-500 transition-colors group"
            >
              <h3 className="text-5xl font-black text-slate-900 mb-2 group-hover:text-indigo-600 transition-colors">{stat.val}</h3>
              <p className="text-xs font-bold uppercase tracking-widest text-slate-400">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ServicesTabbed = () => {
  const [activeTab, setActiveTab] = useState(APP_DATA.services[0].id);

  return (
    <section id="services" className="py-32 bg-slate-950 text-white relative overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px] opacity-20"></div>

      <div className="container mx-auto px-6 relative z-10">
        <SectionTitle sub="Expertise" title="Comprehensive Solutions" light />

        <div className="grid lg:grid-cols-12 gap-12 mt-12">
          {/* Tabs Menu */}
          <div className="lg:col-span-4 flex flex-col gap-2">
            {APP_DATA.services.map((service) => (
              <button
                key={service.id}
                onClick={() => setActiveTab(service.id)}
                className={`text-left p-6 rounded-xl transition-all duration-300 flex items-center justify-between group ${activeTab === service.id ? 'bg-indigo-600 text-white shadow-xl scale-105' : 'bg-slate-900 text-slate-400 hover:bg-slate-800'}`}
              >
                <span className="font-bold text-lg">{service.title}</span>
                {activeTab === service.id && <ArrowRight size={20} />}
              </button>
            ))}
          </div>

          {/* Content Area */}
          <div className="lg:col-span-8">
            <AnimatePresence mode="wait">
              {APP_DATA.services.map((service) => (
                service.id === activeTab && (
                  <motion.div
                    key={service.id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.4 }}
                    className="bg-slate-900 border border-slate-800 rounded-3xl p-8 md:p-12 h-full"
                  >
                    <div className="flex flex-col md:flex-row gap-8 items-start">
                      <div className="flex-1">
                        <span className="text-indigo-400 font-mono text-sm mb-2 block">{service.subtitle}</span>
                        <h3 className="text-3xl font-bold mb-6">{service.title}</h3>
                        <p className="text-slate-400 text-lg leading-relaxed mb-8">{service.desc}</p>
                        
                        <div className="grid grid-cols-2 gap-4">
                          {service.features.map((feat, i) => (
                            <div key={i} className="flex items-center gap-2 text-sm font-bold text-slate-300">
                              <CheckCircle size={16} className="text-indigo-500" /> {feat}
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="w-full md:w-64 h-64 bg-slate-800 rounded-xl overflow-hidden shrink-0">
                        <img src={service.img} alt={service.title} className="w-full h-full object-cover" />
                      </div>
                    </div>
                  </motion.div>
                )
              ))}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

// Horizontal Scroll Projects
const HorizontalProjects = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: targetRef });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-75%"]);

  return (
    <section ref={targetRef} id="projects" className="relative h-[300vh] bg-white">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <div className="absolute top-12 left-6 md:left-20 z-10">
          <SectionTitle sub="Case Studies" title="Featured Projects" />
        </div>
        
        <motion.div style={{ x }} className="flex gap-8 px-6 md:px-20">
          {APP_DATA.projects.map((project, i) => (
            <div key={i} className="group relative h-[50vh] w-[80vw] md:w-[40vw] flex-shrink-0 overflow-hidden rounded-3xl bg-slate-200">
              <img src={project.img} alt={project.title} className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent">
                <div className="absolute bottom-0 p-8 text-white">
                   <p className="text-indigo-400 text-sm font-bold uppercase mb-2">{project.cat} • {project.year}</p>
                   <h3 className="text-4xl font-black">{project.title}</h3>
                </div>
              </div>
              <div className="absolute top-6 right-6 w-12 h-12 bg-white rounded-full flex items-center justify-center text-slate-900 opacity-0 group-hover:opacity-100 transition-opacity">
                <ArrowUpRight />
              </div>
            </div>
          ))}
          {/* Ending Card */}
          <div className="h-[50vh] w-[40vw] flex-shrink-0 flex items-center justify-center bg-slate-900 text-white rounded-3xl">
            <div className="text-center">
              <h3 className="text-3xl font-bold mb-4">View All Projects</h3>
              <PrimaryBtn>Portfolio</PrimaryBtn>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const ProcessSticky = () => {
  return (
    <section id="process" className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          <div className="lg:sticky lg:top-32 h-fit">
            <SectionTitle sub="Workflow" title="The Process" />
            <p className="text-xl text-slate-500 max-w-md">
              A systematic approach honed over 18 years to ensure precision and speed in execution.
            </p>
            <div className="mt-8 p-6 bg-indigo-50 rounded-2xl border border-indigo-100">
               <div className="flex items-center gap-4 text-indigo-900 font-bold mb-2">
                 <Zap className="fill-indigo-500 text-indigo-500" /> Fast-Track Protocol
               </div>
               <p className="text-sm text-indigo-700">We offer expedited services for urgent industrial setups requiring immediate compliance clearance.</p>
            </div>
          </div>
          <div className="space-y-8">
            {APP_DATA.process.map((step, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ margin: "-50px" }}
                className="bg-white p-8 rounded-3xl shadow-lg border border-slate-100"
              >
                <span className="text-6xl font-black text-slate-100 mb-4 block">{step.step}</span>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">{step.title}</h3>
                <p className="text-slate-500">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const FaqSection = () => {
  const [open, setOpen] = useState(0);
  return (
    <section className="py-24 bg-white border-t border-slate-100">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-16">
          <SectionTitle sub="Q&A" title="Common Queries" />
        </div>
        <div className="space-y-4">
          {APP_DATA.faq.map((item, i) => (
             <div key={i} className="border border-slate-200 rounded-2xl overflow-hidden">
               <button onClick={() => setOpen(i === open ? null : i)} className="w-full flex justify-between items-center p-6 text-left font-bold text-slate-900 hover:bg-slate-50">
                 {item.q}
                 <ChevronDown className={`transition-transform duration-300 ${open === i ? 'rotate-180' : ''}`} />
               </button>
               <AnimatePresence>
                 {open === i && (
                   <motion.div initial={{ height: 0 }} animate={{ height: 'auto' }} exit={{ height: 0 }} className="overflow-hidden bg-slate-50">
                     <p className="p-6 pt-0 text-slate-500">{item.a}</p>
                   </motion.div>
                 )}
               </AnimatePresence>
             </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ContactFooter = () => {
  return (
    <footer id="contact" className="bg-slate-950 text-white pt-24 pb-12 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,rgba(79,70,229,0.15),transparent_40%)]"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 mb-24">
          <div>
            <h2 className="text-6xl md:text-8xl font-black leading-none mb-8 tracking-tighter">
              LET'S <br/> TALK.
            </h2>
            <p className="text-xl text-slate-400 mb-12 max-w-md">
              Ready to scale your business? Drop us a line or visit our HQ.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <MapPin className="text-indigo-500 mt-1" />
                <p className="text-lg font-medium">{APP_DATA.contact.address}</p>
              </div>
              <a href={`mailto:${APP_DATA.contact.email}`} className="flex items-center gap-4 text-2xl font-bold hover:text-indigo-500 transition-colors">
                <Mail className="text-indigo-500" /> {APP_DATA.contact.email}
              </a>
              <a href={`tel:${APP_DATA.contact.phone}`} className="flex items-center gap-4 text-2xl font-bold hover:text-indigo-500 transition-colors">
                <Phone className="text-indigo-500" /> {APP_DATA.contact.phone}
              </a>
            </div>
            
            <div className="flex gap-6 mt-12">
              {[Facebook, Twitter, Linkedin, Instagram].map((Icon, i) => (
                <a key={i} href="#" className="w-12 h-12 rounded-full border border-slate-700 flex items-center justify-center hover:bg-indigo-600 hover:border-indigo-600 transition-all">
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          <form className="bg-white/5 p-8 md:p-12 rounded-3xl border border-white/10 backdrop-blur-sm">
             <div className="grid md:grid-cols-2 gap-6 mb-6">
               <div className="space-y-2">
                 <label className="text-xs font-bold uppercase tracking-widest text-slate-400">Name</label>
                 <input type="text" className="w-full bg-slate-900 border-b border-slate-700 py-3 focus:outline-none focus:border-indigo-500 transition-colors text-lg" placeholder="John Doe" />
               </div>
               <div className="space-y-2">
                 <label className="text-xs font-bold uppercase tracking-widest text-slate-400">Company</label>
                 <input type="text" className="w-full bg-slate-900 border-b border-slate-700 py-3 focus:outline-none focus:border-indigo-500 transition-colors text-lg" placeholder="Corp Inc." />
               </div>
             </div>
             <div className="space-y-2 mb-6">
                <label className="text-xs font-bold uppercase tracking-widest text-slate-400">Email</label>
                <input type="email" className="w-full bg-slate-900 border-b border-slate-700 py-3 focus:outline-none focus:border-indigo-500 transition-colors text-lg" placeholder="john@example.com" />
             </div>
             <div className="space-y-2 mb-10">
                <label className="text-xs font-bold uppercase tracking-widest text-slate-400">Message</label>
                <textarea rows="4" className="w-full bg-slate-900 border-b border-slate-700 py-3 focus:outline-none focus:border-indigo-500 transition-colors text-lg" placeholder="Tell us about your project..."></textarea>
             </div>
             <button className="w-full bg-indigo-600 py-5 rounded-full font-bold text-lg hover:bg-indigo-500 transition-all shadow-lg shadow-indigo-500/25">
               Send Request
             </button>
          </form>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500 uppercase tracking-widest font-bold">
          <p>© 2026 HC Parekh. All rights reserved.</p>
          <div className="flex gap-8 mt-4 md:mt-0">
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Terms</a>
            <a href="#" className="hover:text-white">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

// ==========================================
// 4. MAIN PAGE EXPORT
// ==========================================

export default function HomeV7() {
  const [loading, setLoading] = useState(true);

  return (
    <div className="font-sans bg-slate-50 text-slate-900 selection:bg-indigo-500 selection:text-white cursor-none">
      <CustomCursor />
      
      <AnimatePresence>
        {loading && <Preloader setLoading={setLoading} />}
      </AnimatePresence>

      {!loading && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
          <Navbar />
          <HeroSection />
          <Marquee />
          <AboutStats />
          <ServicesTabbed />
          <HorizontalProjects />
          <ProcessSticky />
          <FaqSection />
          <ContactFooter />
        </motion.div>
      )}
    </div>
  );
}