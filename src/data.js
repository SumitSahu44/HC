// src/data.js
import { Zap, TrendingUp, Shield, Globe, Users, FileText } from 'lucide-react';

export const TOP_CATEGORIES = [
  "TEXTILE", "PULP & PAPERS", "IT SECTOR", "HEALTHCARE", "FMCG"
];

export const SIDEBAR_LINKS = [
  { label: "Home", href: "#" },
  { label: "About Us", href: "#" },
  { label: "Contact Us", href: "#" },
  { label: "Professional Services", href: "#" },
  { label: "Service Charges", href: "#" },
  { label: "Project Notice", href: "#" },
  { label: "Corporate Tenders", href: "#" },
  { label: "Our Ethics", href: "#" },
  { label: "Our Team", href: "#" }
];

export const SLIDER_CONTENT = [
  { title: "Trade Partnership", subtitle: "Implement Your Vision in India", desc: "End-to-end industrial setup and consultation." },
  { title: "Expert Consultation", subtitle: "Strategic Industrial Solutions", desc: "Navigating complex corporate landscapes since 2007." },
  { title: "Global Reach", subtitle: "Connecting Business to Future", desc: "Expanding horizons for local and international markets." }
];

export const NOTICES = [
  { text: "New tender released for Textile sector.", urgent: true, date: "Jan 14" },
  { text: "Updated service charges from April 2026.", urgent: false, date: "Jan 10" },
  { text: "Annual Corporate meeting scheduled.", urgent: false, date: "Jan 05" },
  { text: "ISO 9001:2015 Certification Renewal.", urgent: false, date: "Dec 28" },
  { text: "Read our latest professional ethics guidelines.", urgent: false, date: "Dec 20" }
];

export const SERVICES = [
  { title: "Project Consultation", icon: Zap, desc: "Complete roadmap from idea to execution for industrial setups." },
  { title: "Financial Advisory", icon: TrendingUp, desc: "Investment planning and fundraising for large-scale projects." },
  { title: "Legal & Compliance", icon: Shield, desc: "Handling MOUs, Tenders, and Government regulations." },
  { title: "Global Trade", icon: Globe, desc: "Import/Export assistance and international partnership building." },
  { title: "Manpower Solutions", icon: Users, desc: "Recruiting top-tier talent for corporate leadership roles." },
  { title: "Tender Management", icon: FileText, desc: "Expert handling of corporate and government tenders." }
];