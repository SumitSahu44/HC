import React, { useState, useRef, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, Phone, Mail, FileText, Globe, Zap, 
  CheckCircle, TrendingUp, Menu, X, ChevronDown, 
  Linkedin, Twitter, Facebook, Instagram, Search, 
  MapPin, Clock, Shield, Users, Award, PlayCircle
} from 'lucide-react';

// ==========================================
// 1. DATA & CONSTANTS (Hardcoded for Completeness)
// ==========================================

const COMPANY_NAME = "HC PAREKH";
const THEME_COLOR = "blue"; // Theme Logic

const NAV_LINKS = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Expertise", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Insights", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

const NOTICES = [
  { text: "New Tender Released for Textile Sector - Gujarat Region.", urgent: true },
  { text: "Updated Corporate Tax Compliance Guidelines for FY 2026-27.", urgent: false },
  { text: "Invitation for Joint Venture in Renewable Energy Projects.", urgent: false },
  { text: "Annual General Meeting Scheduled for March 15th.", urgent: false },
  { text: "New Office Opening in Dubai International Financial Centre.", urgent: false },
];

const SERVICES = [
  {
    id: 1,
    title: "Project Consultation",
    desc: "End-to-end roadmap creation for new industrial setups, feasibility studies, and land acquisition support.",
    icon: Zap
  },
  {
    id: 2,
    title: "Financial Advisory",
    desc: "Structuring complex debts, private equity fundraising, and managing large-scale capital investments.",
    icon: TrendingUp
  },
  {
    id: 3,
    title: "Legal & Compliance",
    desc: "Navigating government tenders, MOUs, corporate law, and ensuring 100% regulatory compliance.",
    icon: Shield
  },
  {
    id: 4,
    title: "Global Trade",
    desc: "Assisting in Import/Export regulations, finding international partners, and logistics management.",
    icon: Globe
  },
  {
    id: 5,
    title: "Manpower Solutions",
    desc: "Executive search for C-suite leadership and mass recruitment for factory operations.",
    icon: Users
  },
  {
    id: 6,
    title: "Tender Management",
    desc: "Expert bidding strategies for government and private sector tenders to ensure high win rates.",
    icon: FileText
  }
];

const PROCESS_STEPS = [
  { id: "01", title: "Discovery Phase", desc: "We sit down to understand your vision, capital requirements, and market feasibility." },
  { id: "02", title: "Strategic Planning", desc: "Our experts draft a legal and financial blueprint tailored to your industry." },
  { id: "03", title: "Execution & Setup", desc: "On-ground implementation, licensing, and infrastructure setup begins." },
  { id: "04", title: "Operational Handoff", desc: "We ensure smooth operations and provide post-setup support for 12 months." },
];

const TESTIMONIALS = [
  { name: "Rajesh Kumar", role: "CEO, TexFab India", text: "HC Parekh transformed our manufacturing unit setup. Their knowledge of government subsidies is unmatched." },
  { name: "Sarah Jenkins", role: "Director, Global Logistics", text: "The most professional consulting firm we have worked with in India. Highly recommended for foreign investors." },
  { name: "Amitabh Verma", role: "MD, SolarFuture", text: "Their financial advisory team helped us secure funding when banks refused. They are true partners." },
];

const FAQS = [
  { q: "What industries do you specialize in?", a: "We specialize in Textile, FMCG, Heavy Engineering, Pharmaceuticals, and Renewable Energy sectors." },
  { q: "Do you help with government licensing?", a: "Yes, we handle all clearances including environmental, fire safety, and industrial licenses." },
  { q: "What is your typical project timeline?", a: "Small setups take 3-6 months, while large industrial complexes can take 12-18 months depending on scale." },
  { q: "Do you facilitate foreign investments?", a: "Absolutely. We guide foreign entities through FDI routes and local compliance requirements." },
];

const TEAM = [
  { name: "Hasmukh Parekh", role: "Founder & Chairman", img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400" },
  { name: "Anjali Mehta", role: "Head of Legal", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400" },
  { name: "Vikram Singh", role: "Chief Financial Officer", img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400" },
  { name: "Priya Sharma", role: "Operations Director", img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400" },
];

// ==========================================
// 2. HELPER COMPONENTS
// ==========================================

const SectionHeading = ({ sub, title, align = "center", light = false }) => (
  <div className={`mb-16 ${align === "center" ? "text-center" : "text-left"}`}>
    <motion.span 
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`inline-block py-1 px-3 rounded-full text-xs font-bold tracking-widest uppercase mb-4 ${light ? "bg-white/10 text-white" : "bg-blue-50 text-blue-600"}`}
    >
      {sub}
    </motion.span>
    <motion.h2 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.1 }}
      className={`text-4xl md:text-5xl font-black ${light ? "text-white" : "text-slate-900"}`}
    >
      {title}
    </motion.h2>
    <motion.div 
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 0.3, duration: 0.8 }}
      className={`h-1 w-24 bg-blue-600 mt-6 ${align === "center" ? "mx-auto" : ""}`}
    />
  </div>
);

const AccordionItem = ({ q, a, isOpen, onClick }) => (
  <div className="border-b border-slate-200">
    <button 
      onClick={onClick}
      className="w-full py-6 flex justify-between items-center text-left focus:outline-none group"
    >
      <span className={`text-lg font-bold transition-colors ${isOpen ? "text-blue-600" : "text-slate-900 group-hover:text-blue-600"}`}>
        {q}
      </span>
      <ChevronDown className={`transition-transform duration-300 ${isOpen ? "rotate-180 text-blue-600" : "text-slate-400"}`} />
    </button>
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          className="overflow-hidden"
        >
          <p className="pb-6 text-slate-500 leading-relaxed">
            {a}
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  </div>
);

// ==========================================
// 3. MAIN PAGE COMPONENT (HomeV4)
// ==========================================

export default function HomeV4() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState(0);
  const { scrollYProgress } = useScroll();
  const navBackground = useTransform(scrollYProgress, [0, 0.1], ["rgba(255,255,255,0)", "rgba(255,255,255,0.95)"]);
  const navShadow = useTransform(scrollYProgress, [0, 0.1], ["none", "0 4px 6px -1px rgba(0, 0, 0, 0.1)"]);

  // --- SUB-SECTIONS ---

  const Navbar = () => (
    <motion.nav 
      style={{ backgroundColor: navBackground, boxShadow: navShadow }}
      className="fixed top-0 w-full z-50 backdrop-blur-md border-b border-transparent transition-all"
    >
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Brand */}
        <a href="#" className="flex items-center gap-3 z-50">
          <div className="w-10 h-10 bg-blue-600 text-white rounded-lg flex items-center justify-center font-black text-xl shadow-lg shadow-blue-500/30">HC</div>
          <div className="leading-none">
            <h1 className="text-xl font-bold text-slate-900">{COMPANY_NAME}</h1>
            <p className="text-[10px] text-slate-500 font-bold tracking-wider uppercase">Consultants</p>
          </div>
        </a>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map((link, idx) => (
            <a 
              key={idx} 
              href={link.href} 
              className="text-sm font-bold text-slate-500 hover:text-blue-600 transition-colors uppercase tracking-wide"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden lg:flex items-center gap-4">
          <a href="tel:+919876543210" className="flex items-center gap-2 text-slate-900 font-bold text-sm">
             <Phone size={16} className="text-blue-600"/> +91 98765 43210
          </a>
          <button className="bg-slate-900 text-white px-6 py-2.5 rounded-full font-bold text-sm hover:bg-blue-600 transition-all shadow-lg">
            Book Consultation
          </button>
        </div>

        {/* Mobile Toggle */}
        <button className="lg:hidden z-50 p-2 text-slate-900" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={24}/> : <Menu size={24}/>}
        </button>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="fixed inset-0 bg-white z-40 flex flex-col pt-24 px-6 gap-6 lg:hidden"
            >
              {NAV_LINKS.map((link, idx) => (
                <a 
                  key={idx} 
                  href={link.href} 
                  onClick={() => setIsMenuOpen(false)}
                  className="text-2xl font-black text-slate-900 border-b border-slate-100 pb-4"
                >
                  {link.label}
                </a>
              ))}
              <button className="bg-blue-600 text-white w-full py-4 rounded-xl font-bold text-lg mt-4 shadow-xl">
                Start a Project
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );

  const Ticker = () => (
    <div className="bg-slate-900 text-white py-2.5 overflow-hidden whitespace-nowrap relative z-40 mt-[72px]">
      <motion.div 
        animate={{ x: [0, -1000] }}
        transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
        className="inline-block"
      >
        {[...NOTICES, ...NOTICES, ...NOTICES].map((note, i) => (
          <span key={i} className="mx-8 text-xs font-bold tracking-wider inline-flex items-center gap-2 opacity-90">
            {note.urgent && <span className="bg-blue-600 text-white px-1.5 py-0.5 rounded-[4px] text-[10px] font-black">NEW</span>}
            {note.text} <span className="text-slate-600 mx-2">|</span>
          </span>
        ))}
      </motion.div>
    </div>
  );

  const Hero = () => (
    <section id="hero" className="relative pt-20 pb-32 overflow-hidden bg-slate-50">
      {/* Background Decor */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl">
        <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-blue-200/40 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-sky-100/60 rounded-full blur-[80px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 bg-white border border-slate-200 px-4 py-1.5 rounded-full mb-8 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-xs font-bold text-slate-600 uppercase">Accepting Projects for FY 2026</span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-slate-900 leading-[1.1] mb-8 tracking-tight">
            Structure Your <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-sky-400">
              Corporate Vision.
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-slate-500 mb-10 leading-relaxed max-w-2xl mx-auto">
            India's premier industrial consultants. We turn complex regulatory frameworks into clear paths for growth.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-5 rounded-full font-bold text-lg shadow-xl shadow-blue-500/30 transition-all flex items-center gap-2 hover:-translate-y-1">
              Start Consultation <ArrowRight size={20}/>
            </button>
            <button className="flex items-center gap-3 px-8 py-5 rounded-full font-bold text-lg text-slate-700 bg-white border border-slate-200 hover:bg-slate-50 transition-all shadow-sm hover:shadow-md">
              <PlayCircle size={20} className="text-blue-600" /> Watch Our Process
            </button>
          </div>
        </motion.div>

        {/* Hero Image / Dashboard Mockup */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 1 }}
          className="mt-20 relative"
        >
          <div className="rounded-3xl overflow-hidden border-8 border-white shadow-2xl mx-auto max-w-5xl bg-slate-900 aspect-video relative group">
            <img 
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2070" 
              alt="Corporate Office" 
              className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-[2s]" 
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-transform">
                <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[20px] border-l-white border-b-[10px] border-b-transparent ml-1"></div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );

  const LogoMarquee = () => (
    <div className="bg-white border-y border-slate-100 py-10 overflow-hidden">
      <div className="container mx-auto px-6 mb-6 text-center">
        <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Trusted by Industry Leaders</p>
      </div>
      <div className="flex w-full whitespace-nowrap overflow-hidden relative">
         <div className="absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-white to-transparent z-10"></div>
         <div className="absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-white to-transparent z-10"></div>
         
         <motion.div 
           className="flex gap-16 items-center"
           animate={{ x: [0, -1000] }}
           transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
         >
           {[...Array(10)].map((_, i) => (
             <div key={i} className="text-2xl font-black text-slate-300 uppercase flex items-center gap-2">
               <Shield size={24} className="text-slate-200" /> CLIENT_LOGO_{i+1}
             </div>
           ))}
         </motion.div>
      </div>
    </div>
  );

  const AboutSection = () => (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
             <div className="absolute -top-4 -left-4 w-24 h-24 bg-blue-100 rounded-full blur-xl"></div>
             <img 
               src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=1632" 
               alt="Team Meeting" 
               className="rounded-2xl shadow-2xl relative z-10"
             />
             <div className="absolute -bottom-10 -right-10 bg-white p-6 rounded-xl shadow-xl border border-slate-100 z-20 max-w-xs">
               <div className="flex items-center gap-4 mb-2">
                 <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl">18</div>
                 <div>
                   <p className="text-sm font-bold text-slate-900">Years of</p>
                   <p className="text-sm text-slate-500">Excellence</p>
                 </div>
               </div>
               <p className="text-xs text-slate-400 leading-relaxed">Helping businesses grow since 2007 with zero compromise on quality.</p>
             </div>
          </div>
          
          <div>
            <SectionHeading sub="Who We Are" title="Bridging the Gap Between Vision & Reality" align="left" />
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              At HC Parekh, we don't just advise; we execute. Founded in 2007, we have grown into one of India's most trusted consultancy firms for industrial and corporate setups.
            </p>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Our team consists of former bankers, legal experts, and industrial engineers who understand the nuances of the Indian market.
            </p>
            <ul className="space-y-4 mb-8">
              {[
                "100% Transparency in Legal Processes",
                "Proven Track Record in 5+ Sectors",
                "End-to-End Project Management"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-slate-800 font-bold">
                  <CheckCircle className="text-blue-600" size={20} /> {item}
                </li>
              ))}
            </ul>
            <button className="text-blue-600 font-black border-b-2 border-blue-600 pb-1 hover:text-blue-800 transition-colors">
              Read Our Full Story
            </button>
          </div>
        </div>
      </div>
    </section>
  );

  const ServicesSection = () => (
    <section id="services" className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        <SectionHeading sub="Our Expertise" title="Comprehensive Corporate Solutions" />
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service) => (
            <motion.div 
              key={service.id}
              whileHover={{ y: -10 }}
              className="bg-white p-8 rounded-3xl border border-slate-100 shadow-lg shadow-slate-200/50 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300 group"
            >
              <div className="w-14 h-14 bg-sky-50 rounded-2xl flex items-center justify-center text-blue-600 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <service.icon size={28} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">{service.title}</h3>
              <p className="text-slate-500 leading-relaxed mb-6">
                {service.desc}
              </p>
              <a href="#" className="inline-flex items-center gap-2 text-sm font-bold text-slate-400 group-hover:text-blue-600 transition-colors">
                Learn More <ArrowRight size={16} />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );

  const ProcessSection = () => (
    <section id="process" className="py-24 bg-slate-900 text-white overflow-hidden relative">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[120px] translate-x-1/2 -translate-y-1/2"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <SectionHeading sub="Workflow" title="How We Execute Projects" light={true} />

        <div className="grid md:grid-cols-4 gap-8 relative">
          <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-slate-800 -z-10"></div>
          {PROCESS_STEPS.map((step, idx) => (
            <div key={idx} className="relative">
               <div className="w-24 h-24 bg-slate-800 border-4 border-slate-900 rounded-full flex items-center justify-center text-2xl font-black text-blue-500 mb-6 shadow-xl mx-auto md:mx-0 relative z-10">
                 {step.id}
               </div>
               <h3 className="text-xl font-bold mb-3 text-center md:text-left">{step.title}</h3>
               <p className="text-slate-400 text-sm leading-relaxed text-center md:text-left">
                 {step.desc}
               </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );

  const TeamSection = () => (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <SectionHeading sub="Leadership" title="Meet The Experts" />
        <div className="grid md:grid-cols-4 gap-8">
          {TEAM.map((member, idx) => (
            <div key={idx} className="group text-center">
              <div className="mb-6 relative overflow-hidden rounded-2xl aspect-[3/4]">
                <img src={member.img} alt={member.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-blue-600/80 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                  <Linkedin className="text-white hover:scale-125 transition-transform cursor-pointer" />
                  <Twitter className="text-white hover:scale-125 transition-transform cursor-pointer" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-slate-900">{member.name}</h3>
              <p className="text-sm text-blue-600 font-bold uppercase tracking-wide mt-1">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );

  const FaqSection = () => (
    <section id="faq" className="py-24 bg-slate-50">
      <div className="container mx-auto px-6 max-w-4xl">
        <SectionHeading sub="Insights" title="Frequently Asked Questions" />
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-slate-100">
          {FAQS.map((faq, idx) => (
            <AccordionItem 
              key={idx} 
              q={faq.q} 
              a={faq.a} 
              isOpen={openFaqIndex === idx} 
              onClick={() => setOpenFaqIndex(idx === openFaqIndex ? -1 : idx)}
            />
          ))}
        </div>
      </div>
    </section>
  );

  const CtaSection = () => (
    <section id="contact" className="py-24 container mx-auto px-6">
      <div className="bg-blue-600 rounded-[3rem] p-12 md:p-24 text-center relative overflow-hidden shadow-2xl shadow-blue-900/20 group">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white opacity-10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 group-hover:scale-150 transition-transform duration-1000"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-sky-300 opacity-20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
        
        <div className="relative z-10">
          <h2 className="text-4xl md:text-7xl font-black text-white mb-8">Ready to Scale?</h2>
          <p className="text-blue-100 text-xl md:text-2xl font-medium max-w-2xl mx-auto mb-12">
            Let's discuss how we can bring efficiency and growth to your industrial projects.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-900 px-12 py-6 rounded-full font-black text-lg hover:scale-105 shadow-xl transition-all">
              Book Appointment
            </button>
            <button className="bg-blue-700 text-white px-12 py-6 rounded-full font-black text-lg border border-blue-500 hover:bg-blue-800 transition-all">
              Download Brochure
            </button>
          </div>
        </div>
      </div>
    </section>
  );

  const Footer = () => (
    <footer className="bg-slate-900 text-white pt-24 pb-12 border-t border-slate-800">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-1">
             <div className="flex items-center gap-2 mb-6">
               <div className="w-10 h-10 bg-blue-600 rounded flex items-center justify-center font-bold text-lg">HC</div>
               <span className="font-bold text-xl">HC PAREKH</span>
             </div>
             <p className="text-slate-400 leading-relaxed mb-6">
               Structuring the industrial future of India since 2007. Your trusted partner in growth.
             </p>
             <div className="flex gap-4">
               {[Facebook, Twitter, Linkedin, Instagram].map((Icon, i) => (
                 <a key={i} href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-600 transition-colors">
                   <Icon size={18} />
                 </a>
               ))}
             </div>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-6">Services</h4>
            <ul className="space-y-4 text-slate-400">
              {SERVICES.slice(0,5).map(s => <li key={s.id}><a href="#" className="hover:text-white transition-colors">{s.title}</a></li>)}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-4 text-slate-400">
              <li><a href="#" className="hover:text-white">About Us</a></li>
              <li><a href="#" className="hover:text-white">Our Team</a></li>
              <li><a href="#" className="hover:text-white">Case Studies</a></li>
              <li><a href="#" className="hover:text-white">Contact</a></li>
              <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Contact Us</h4>
            <ul className="space-y-4 text-slate-400">
              <li className="flex items-start gap-3">
                <MapPin className="text-blue-500 mt-1 flex-shrink-0" size={18} />
                <span>1204, Corporate Park, Ambli Road, Ahmedabad, Gujarat - 380058</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-blue-500 flex-shrink-0" size={18} />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-blue-500 flex-shrink-0" size={18} />
                <span>info@hcparekh.com</span>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="text-blue-500 flex-shrink-0" size={18} />
                <span>Mon - Fri: 9:00 AM - 6:00 PM</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-slate-500 text-sm">
          <p>&copy; {new Date().getFullYear()} HC Parekh Consultants. All rights reserved.</p>
          <p>Designed with excellence.</p>
        </div>
      </div>
    </footer>
  );

  const FloatingDock = () => (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex gap-2 bg-white/90 backdrop-blur-xl border border-slate-200 p-2 rounded-2xl shadow-2xl">
      {[
        { icon: Phone, label: "Call", href: "tel:+919876543210" },
        { icon: Mail, label: "Email", href: "mailto:info@hc.com" },
        { icon: FileText, label: "Brochure", href: "#" },
        { icon: MapPin, label: "Visit", href: "#" },
      ].map((item, i) => (
        <motion.a 
          key={i}
          href={item.href}
          whileHover={{ scale: 1.2, y: -5 }}
          className="p-3 bg-slate-50 rounded-xl text-slate-600 hover:bg-blue-600 hover:text-white transition-colors relative group shadow-sm"
        >
          <item.icon size={20} />
          <span className="absolute -top-10 left-1/2 -translate-x-1/2 bg-slate-900 text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
            {item.label}
          </span>
        </motion.a>
      ))}
    </div>
  );

  return (
    <div className="bg-slate-50 min-h-screen text-slate-900 font-sans selection:bg-blue-200 selection:text-blue-900 pb-20">
      <Navbar />
      <Ticker />
      <Hero />
      <LogoMarquee />
      <AboutSection />
      <ServicesSection />
      <ProcessSection />
      <TeamSection />
      <FaqSection />
      <CtaSection />
      <Footer />
      <FloatingDock />
    </div>
  );
}