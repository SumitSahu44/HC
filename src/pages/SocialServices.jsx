import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import { Heart, HandHeart, FileCheck } from 'lucide-react';

export default function SocialServices() {
    const [isSidebarOpen, setSidebarOpen] = useState(false);

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
                                <span className="bg-rose-100 text-rose-600 p-2 rounded-lg">
                                    <Heart size={24} />
                                </span>
                                <span className="text-rose-600 font-bold tracking-wider text-sm uppercase">Giving Back</span>
                            </div>
                            <h1 className="text-3xl md:text-5xl font-black text-slate-900 mb-4">
                                OUR SOCIAL SERVICES & DONATIONS
                            </h1>
                            <p className="text-xl text-slate-600 font-medium">
                                Supporting the Community
                            </p>
                        </div>

                        {/* Main Content */}
                        <div className="space-y-10">

                            {/* Core Statement */}
                            <div className="bg-rose-50 p-8 rounded-2xl border border-rose-100 relative overflow-hidden">
                                <div className="relative z-10">
                                    <h3 className="text-2xl font-bold text-slate-900 mb-4">Our Commitment</h3>
                                    <p className="text-xl leading-relaxed text-slate-700">
                                        We are glad to donate to the <span className="font-bold text-slate-900">Regd. Social Organizations</span> who are approved under <span className="font-bold text-slate-900">section 80 (G)</span> of the Income Tax.
                                    </p>
                                </div>
                                <div className="absolute top-0 right-0 w-40 h-40 bg-rose-200 rounded-full blur-3xl opacity-50 -mr-10 -mt-10"></div>
                            </div>

                            {/* Process & Criteria */}
                            <div className="grid md:grid-cols-2 gap-8">
                                <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex flex-col gap-4">
                                    <div className="bg-emerald-100 text-emerald-700 w-12 h-12 rounded-xl flex items-center justify-center">
                                        <FileCheck size={28} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-slate-900 text-lg mb-2">Eligibility Criteria</h4>
                                        <ul className="text-slate-600 list-disc list-inside space-y-2">
                                            <li>Must be a Registered Social Organization.</li>
                                            <li>Must satisfy Income Tax Section 80 (G) approval.</li>
                                            <li>Open to organizations irrespective of location or religion.</li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex flex-col gap-4">
                                    <div className="bg-blue-100 text-blue-700 w-12 h-12 rounded-xl flex items-center justify-center">
                                        <HandHeart size={28} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-slate-900 text-lg mb-2">How to Apply</h4>
                                        <p className="text-slate-600 mb-4"> Organizations may contact us with:</p>
                                        <ul className="text-slate-600 list-disc list-inside space-y-2">
                                            <li>Social Activities Plan</li>
                                            <li>Detailed Project Proposals</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            {/* Contact Callout */}
                            <div className="bg-slate-900 text-white p-8 rounded-2xl text-center">
                                <h3 className="text-xl font-bold mb-2">Submit Your Proposal</h3>
                                <p className="text-slate-400 mb-6">Let's work together to make a difference.</p>
                                <Link to="/contact" className="inline-block bg-rose-600 hover:bg-rose-700 text-white px-8 py-3 rounded-xl font-bold transition-colors">
                                    Contact Us
                                </Link>
                            </div>

                        </div>
                    </div>
                </main>
            </div>
            <Footer />
        </div>
    );
}
