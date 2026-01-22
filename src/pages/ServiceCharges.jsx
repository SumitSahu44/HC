import React, { useState } from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import { IndianRupee, FileText, Scale, Info } from 'lucide-react';

export default function ServiceCharges() {
    const [isSidebarOpen, setSidebarOpen] = useState(false);

    return (
        <div className="min-h-screen bg-slate-50/50 font-sans text-slate-800">
            <Header toggleSidebar={() => setSidebarOpen(!isSidebarOpen)} />

            <div className="container mx-auto flex gap-8 py-6 px-4 md:px-6 relative items-start">
                <Sidebar isOpen={isSidebarOpen} toggle={() => setSidebarOpen(false)} />

                <main className="flex-1 min-w-0">

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="bg-white rounded-3xl shadow-xl border border-slate-100 overflow-hidden"
                    >
                        {/* Hero Banner */}
                        <div className="bg-slate-900 text-white p-8 md:p-12 relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500 blur-[100px] opacity-20 rounded-full translate-x-1/3 -translate-y-1/3" />
                            <div className="relative z-10">
                                <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 rounded-full text-xs font-semibold mb-4 backdrop-blur-sm border border-white/10">
                                    <IndianRupee size={14} className="text-amber-400" /> Transparent Pricing
                                </div>
                                <h1 className="text-3xl md:text-5xl font-black mb-4">Service Charges</h1>
                                <p className="text-slate-400 text-lg max-w-2xl">
                                    Understanding our fee structure and professional charges.
                                </p>
                            </div>
                        </div>

                        {/* Content Area */}
                        <div className="p-8 md:p-12 space-y-8">

                            {/* Variable Charges Section */}
                            <div className="flex gap-6 items-start">
                                <div className="p-4 bg-amber-50 rounded-2xl text-amber-600 hidden md:block">
                                    <Scale size={32} />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-slate-900 mb-3">Variable Fee Structure</h3>
                                    <p className="text-lg text-slate-700 leading-relaxed">
                                        Our Service charges are subject to the nature of <span className="font-semibold text-slate-900">Services, Consultation, and Projects</span>.
                                        It varies from <span className="text-amber-700 font-medium">Sector to Sector</span>, <span className="text-amber-700 font-medium">Industry to Industry</span>,
                                        as well as the Service Tenure and Professional Responsibilities involved.
                                    </p>
                                </div>
                            </div>

                            <div className="h-px bg-slate-100 w-full" />

                            {/* Notice Section */}
                            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 md:p-8 flex gap-6 items-start">
                                <div className="p-4 bg-white rounded-xl text-slate-800 shadow-sm border border-slate-100 hidden md:block">
                                    <FileText size={28} />
                                </div>
                                <div>
                                    <div className="flex items-center gap-2 mb-3">
                                        <Info size={18} className="text-slate-400" />
                                        <h3 className="text-lg font-bold text-slate-900">Specific Advertisements</h3>
                                    </div>
                                    <p className="text-slate-600 leading-relaxed">
                                        Our Service Charges are generally clearly mentioned in our each of the <span className="font-semibold text-slate-900">Advertisements and Notices</span> for the specific works, tenure, and jurisdiction.
                                        Please refer to the specific project documentation for detailed pricing information.
                                    </p>
                                </div>
                            </div>

                        </div>

                    </motion.div>

                </main>
            </div>

            <Footer />
        </div>
    );
}
