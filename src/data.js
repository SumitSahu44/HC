// src/data.js
import { Zap, TrendingUp, Shield, Globe, Users, FileText } from 'lucide-react';

export const TOP_CATEGORIES = [
  "TEXTILE", "PULP & PAPER", "INFORMATION TECHNOLOGY", "MEDICAL & HEALTHCARE", "FMCG"
];

export const SIDEBAR_LINKS = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Contact Us", href: "/contact" },
  { label: "Professional Services", href: "/services" },
  { label: "Service Charges", href: "/service-charges" },
  { label: "Project Notice", href: "/project-notice" },
  { label: "Corporate Tenders", href: "/corporate-tenders" },
  { label: "Corporate MOU", href: "/corporate-mou" },
  { label: "Our Hiring", href: "/our-hiring" },
  { label: "Our Team", href: "/our-team" }
];

export const SLIDER_CONTENT = [
  {
    title: "Experience in the Government Sector",
    subtitle: "NPCIL & BARC",
    desc: "Experience in Nuclear Power Corporation of India Ltd. and Radiological Laboratory of Bhabha Atomic Research Centre (Govt. of India)."
  },
  {
    title: "Experience in the Medical & Healthcare",
    subtitle: "Government Hospital",
    desc: "(Government of India Undertaking)."
  },
  {
    title: "Experience in the Manufacturing Industries",
    subtitle: "Textile, Plastic, Pulp & Paper",
    desc: "Production and Procurement"
  },
  {
    title: "Experience in the Other Sectors",
    subtitle: "IT & FMCG",
    desc: "Services, Production and Procurement."
  }
];

export const NOTICES = [
  { text: "New tender released for Textile sector.", urgent: true, date: "Jan 14" },
  { text: "Revised Service Charges for FY 2025-26.", urgent: false, date: "Jan 10" },
  { text: "Annual Corporate meeting scheduled.", urgent: false, date: "Jan 05" },
  { text: "Project Auction:2026.", urgent: false, date: "Dec 28" },
  { text: "Refer our Project Manual", urgent: false, date: "Dec 20" }
];

export const SERVICES = [
  { title: "Project Consultation", icon: Zap, desc: "Complete roadmap from idea to execution for industrial setups." },
  { title: "Market Advisory", icon: TrendingUp, desc: "Investment planning and fundraising for large-scale projects." },
  { title: "Legal & Compliance", icon: Shield, desc: "Handling MOUs, Tenders, and Government regulations." },
  { title: "E-Trade Market", icon: Globe, desc: "Import/Export assistance and international partnership building." },
  // { title: "Manpower Solutions", icon: Users, desc: "Recruiting top-tier talent for corporate leadership roles." },
  { title: "Tender Management", icon: FileText, desc: "Expert handling of corporate and government tenders." },
  { title: "Web Market", icon: Globe, desc: "Expert handling of corporate and government tenders." }
];