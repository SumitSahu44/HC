// src/data.js
import { Zap, TrendingUp, Shield, Globe, Users, FileText } from 'lucide-react';

export const TOP_CATEGORIES = [
  "TEXTILE", "PULP & PAPERS", "IT SECTOR", "HEALTHCARE", "FMCG"
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
  { label: "Our Ethics", href: "#" },
  { label: "Our Team", href: "#" }
];

export const SLIDER_CONTENT = [
  {
    title: "Experience in Government Sector",
    subtitle: "NPCIL & BARC",
    desc: "Experience in Nuclear Power Corporation of India Ltd and Radiological Laboratory of Bhabha Atomic Research Centre (Govt. of India)."
  },
  {
    title: "Experience in Healthcare",
    subtitle: "Government Hospital",
    desc: "Experience in Hospital (Government of India)."
  },
  {
    title: "Experience in Industries",
    subtitle: "Textile, Plastic & Pulp",
    desc: "Experience in Textile Industry, Plastic Manufacturing Industry, and Pulp & Paper Industry."
  },
  {
    title: "Experience in Technology & FMCG",
    subtitle: "IT & FMCG",
    desc: "Experience in Information Technology and FMCG."
  }
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