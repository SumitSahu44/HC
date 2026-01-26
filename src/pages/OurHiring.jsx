import React, { useState } from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import { Megaphone, Instagram, Facebook, Linkedin, Youtube, Mail, Info } from 'lucide-react';

export default function OurHiring() {
    const [isSidebarOpen, setSidebarOpen] = useState(false);

    const sectors = [
        "Textile & Garments",
        "Pulp & Paper Industry",
        "Medical & Healthcare",
        "F.M.C.G.",
        "Industrial & Corporate Projects",
        "Tenders and M.O.U."
    ];

    const platforms = [
        { name: "LinkedIn", icon: Linkedin, color: "text-blue-700" },
        { name: "Facebook", icon: Facebook, color: "text-blue-600" },
        { name: "Instagram", icon: Instagram, color: "text-pink-600" },
        { name: "Youtube", icon: Youtube, color: "text-red-600" },
        { name: "Other Platforms", icon: Megaphone, color: "text-slate-600" }
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
                                <span className="bg-purple-100 text-purple-700 p-2 rounded-lg">
                                    <Megaphone size={24} />
                                </span>
                                <span className="text-purple-700 font-bold tracking-wider text-sm uppercase">Join Our Campaign</span>
                            </div>
                            <h1 className="text-3xl md:text-5xl font-black text-slate-900 mb-4">
                                OUR HIRING
                            </h1>
                            <p className="text-xl text-slate-600 font-medium">
                                Social Media Influencer <span className="text-slate-400">|</span> Brand Promotion
                            </p>
                        </div>

                        {/* Main Content */}
                        <div className="space-y-10">

                            {/* Introduction */}
                            <div className="prose prose-slate max-w-none">
                                <p className="text-lg leading-relaxed text-slate-700">
                                    The experienced <strong className="text-slate-900">Social Media Influencers</strong> irrespective of locations are required for our long term On-line Business Advertisements (informative) on their own Social Media Platforms for our tangible and intangible products.
                                </p>
                            </div>

                            {/* Sectors & Platforms Grid */}
                            <div className="grid md:grid-cols-2 gap-8">

                                {/* Sectors */}
                                <div className="bg-purple-50 p-6 rounded-2xl border border-purple-100">
                                    <h3 className="font-bold text-slate-900 mb-4 text-lg">Target Sectors</h3>
                                    <ul className="space-y-3">
                                        {sectors.map((sector, idx) => (
                                            <li key={idx} className="flex items-center gap-3 bg-white p-3 rounded-xl border border-purple-100 shadow-sm">
                                                <span className="w-6 h-6 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center text-xs font-bold">
                                                    {idx + 1}
                                                </span>
                                                <span className="text-slate-700 font-medium">{sector}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Platforms */}
                                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                                    <h3 className="font-bold text-slate-900 mb-4 text-lg">Required Platforms</h3>
                                    <p className="text-sm text-slate-500 mb-4">Good connections / followers / subscribers required on:</p>
                                    <div className="grid grid-cols-2 gap-3">
                                        {platforms.map((p, idx) => (
                                            <div key={idx} className="flex items-center gap-2 bg-white p-3 rounded-xl border border-slate-100 hover:shadow-md transition-shadow">
                                                <p.icon size={20} className={p.color} />
                                                <span className="font-semibold text-slate-700">{p.name}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Application Process */}
                            <div className="bg-slate-900 text-white p-8 rounded-2xl relative overflow-hidden">
                                <div className="relative z-10">
                                    <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                                        <Mail className="text-purple-400" /> Submission Details
                                    </h3>
                                    <p className="text-slate-300 mb-6 leading-relaxed">
                                        Interested Influencers may submit their clear <strong>Quotation</strong> for each platform for each advertisement with its live duration, along with their number of connections/followers.
                                    </p>

                                    <div className="bg-white/10 p-6 rounded-xl border border-white/10 mb-6">
                                        <ul className="space-y-2 text-sm text-slate-300">
                                            <li className="flex gap-2"><span className="text-purple-400">•</span> Quotation must be in PDF format.</li>
                                            <li className="flex gap-2"><span className="text-purple-400">•</span> Excludes 3rd Party & GST.</li>
                                            <li className="flex gap-2"><span className="text-purple-400">•</span> Include Payment Terms & Conditions.</li>
                                        </ul>
                                    </div>

                                    <div className="flex flex-col md:flex-row items-center gap-4 bg-white text-slate-900 p-4 rounded-xl">
                                        <span className="font-bold text-sm uppercase tracking-wider text-slate-500">Send To:</span>
                                        <span className="font-mono font-bold text-lg">hemant.parekh2012@gmail.com</span>
                                    </div>
                                </div>

                                {/* Doodles */}
                                <div className="absolute top-0 right-0 w-64 h-64 bg-purple-600 blur-[80px] opacity-20 rounded-full"></div>
                            </div>

                            {/* Important Note */}
                            <div className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-lg flex items-start gap-3">
                                <Info className="text-amber-500 mt-1 flex-shrink-0" />
                                <div>
                                    <h4 className="font-bold text-amber-800">Important Note</h4>
                                    <ul className="list-disc list-inside text-sm text-amber-700 mt-1 space-y-1">
                                        <li>Influencers are <strong>not responsible</strong> for marketing our products.</li>
                                        <li>We will provide well-designed advertisements ready for posting.</li>
                                    </ul>
                                </div>
                            </div>

                        </div>
                    </div>
                </main>
            </div>
            <Footer />
        </div>
    );
}
