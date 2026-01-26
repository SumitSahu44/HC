import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import { FileSignature, Monitor, Scissors, ScrollText, CheckCircle2 } from 'lucide-react';

export default function CorporateMOU() {
    const [isSidebarOpen, setSidebarOpen] = useState(false);

    const sections = [
        {
            title: "Information Technology",
            icon: Monitor,
            color: "text-blue-600",
            bg: "bg-blue-50",
            border: "border-blue-100",
            items: [
                "The Social Media Marketing",
                "Dynamic Website Development",
                "Digital Marketing",
                "Software Development",
                "Mobile App Development",
                "Outdoor Publicity & Advertisement"
            ]
        },
        {
            title: "Textile & Garments",
            icon: Scissors,
            color: "text-rose-600",
            bg: "bg-rose-50",
            border: "border-rose-100",
            items: [
                "Supply and Installation of Sewing Machines (Industrial & Domestic)",
                "Supply of Cotton Fabrics in different TC",
                "Supply of Poplin, in different TC",
                "Supply of Cotton Bedsheets (White)"
            ]
        },
        {
            title: "Pulp & Paper",
            icon: ScrollText,
            color: "text-amber-600",
            bg: "bg-amber-50",
            border: "border-amber-100",
            items: [
                "Supply of Andhra Tulip Papers in different GSM"
            ]
        }
    ];

    return (
        <div className="min-h-screen bg-slate-50/50 font-sans text-slate-800">
            <Header toggleSidebar={() => setSidebarOpen(!isSidebarOpen)} />

            <div className="container mx-auto flex gap-8 py-6 px-4 md:px-6 relative items-start">
                <Sidebar isOpen={isSidebarOpen} toggle={() => setSidebarOpen(false)} />

                <main className="flex-1 min-w-0 bg-white rounded-3xl shadow-xl border border-slate-100 overflow-hidden">
                    <div className="p-8 md:p-12">

                        {/* Header Section */}
                        <div className="border-b border-slate-200 pb-8 mb-8">
                            <div className="flex items-center gap-3 mb-4">
                                <span className="bg-emerald-100 text-emerald-700 p-2 rounded-lg">
                                    <FileSignature size={24} />
                                </span>
                                <span className="text-emerald-700 font-bold tracking-wider text-sm uppercase">Business Partnership</span>
                            </div>
                            <h1 className="text-3xl md:text-5xl font-black text-slate-900 mb-4">
                                CORPORATE MOU
                            </h1>
                            <p className="text-xl text-slate-600 font-medium leading-relaxed">
                                Indian Companies and Agencies are invited for the <span className="font-bold text-slate-800">Memorandum of Understanding (M.O.U.)</span> for the following Projects.
                            </p>
                        </div>

                        {/* Main Content */}
                        <div className="space-y-8">

                            {sections.map((section, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1 }}
                                    className={`p-6 rounded-2xl border ${section.bg} ${section.border}`}
                                >
                                    <div className="flex items-start gap-4 mb-4">
                                        <div className={`p-3 bg-white rounded-xl shadow-sm ${section.color}`}>
                                            <section.icon size={24} />
                                        </div>
                                        <div>
                                            <h3 className="text-2xl font-bold text-slate-900">{section.title}</h3>
                                            <p className="text-slate-500 text-sm font-medium uppercase tracking-wider">Project Requirements</p>
                                        </div>
                                    </div>

                                    <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-100/50">
                                        <ul className="grid md:grid-cols-2 gap-4">
                                            {section.items.map((item, itemIdx) => (
                                                <li key={itemIdx} className="flex items-start gap-3">
                                                    <CheckCircle2 size={18} className={`flex-shrink-0 mt-1 ${section.color}`} />
                                                    <span className="text-slate-700 font-medium">{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </motion.div>
                            ))}

                            {/* Call to Action */}
                            <div className="bg-slate-900 text-white p-8 rounded-2xl relative overflow-hidden text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-6">
                                <div className="relative z-10 max-w-2xl">
                                    <h3 className="text-xl font-bold mb-2">Interested in Collaboration?</h3>
                                    <p className="text-slate-300">
                                        We invite eligible agencies to discuss the roadmap and execution strategy.
                                    </p>
                                </div>
                                <div className='relative z-10'>
                                    <Link to="/contact" className="inline-block bg-white text-slate-900 hover:bg-slate-200 px-6 py-3 rounded-xl font-bold transition-colors shadow-lg">
                                        Contact for MOU
                                    </Link>
                                </div>

                                {/* Decorative background */}
                                <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500 blur-[80px] opacity-20 rounded-full"></div>
                            </div>

                        </div>
                    </div>
                </main>
            </div>
            <Footer />
        </div>
    );
}
