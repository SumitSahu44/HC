import React, { useState } from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import { FileText, Calendar, Box, Scissors, Truck, Wallet } from 'lucide-react';

export default function CorporateTenders() {
    const [isSidebarOpen, setSidebarOpen] = useState(false);

    const tenderDetails = [
        { label: "Name of Work", value: "Double Bedsheets, Pillowcover Stitching, Packing", icon: FileText },
        { label: "Quantity", value: "30,000 Sets per EOI (1 Set = 1 Double Bedsheet + 2 Pillowcovers)", icon: Box },
        { label: "Tenure", value: "01 Year", icon: Calendar },
    ];

    const specs = [
        { label: "Double Bedsheets", value: '90” x 100”' },
        { label: "Pillowcover", value: '18” x 24”' },
        { label: "Inner Lid", value: '6”' },
    ];

    const technicalDetails = [
        { label: "Stitching Quality", value: "Double lined Simple stitch OR Single lined zigzag Stitch", icon: Scissors },
        { label: "Thread", value: "Moon Brand or any equivalent Brand", icon: Scissors },
        { label: "Fabrics Issued", value: "Pure Fine Cotton, Printed, 144 TC and above (Supplied to Tailoring Agencies)", icon: Box },
        { label: "Packing Size", value: 'Corrugated Box, 3-Ply, Laminated, Multi-colour (14” x 11” x 1.5“)', icon: Box },
    ];

    const terms = [
        { label: "Transportation", value: "To be borne by the Company upto Transporters. Local Transport to be borne by the Tailoring Agency.", icon: Truck },
        { label: "Payment Terms", value: "50% Advance with each W.O. | 50% on Inspection and L.R.", icon: Wallet },
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
                                <span className="bg-amber-100 text-amber-700 p-2 rounded-lg">
                                    <FileText size={24} />
                                </span>
                                <span className="text-amber-700 font-bold tracking-wider text-sm uppercase">Expression of Interest</span>
                            </div>
                            <h1 className="text-3xl md:text-5xl font-black text-slate-900 mb-4">
                                CORPORATE TENDERS
                            </h1>
                            <p className="text-xl text-slate-600 font-medium">
                                Textile Sector <span className="text-slate-400">|</span> Rate Contract
                            </p>
                        </div>

                        {/* Main Content */}
                        <div className="space-y-10">

                            {/* Introduction */}
                            <div className="prose prose-slate max-w-none">
                                <p className="text-lg leading-relaxed text-slate-700">
                                    Sealed Tenders are invited from the reputed and registered <strong className="text-slate-900">Tailoring Agencies</strong> for the work as detailed below under the Rate Contract.
                                </p>
                            </div>

                            {/* Key Details Grid */}
                            <div className="grid md:grid-cols-3 gap-6">
                                {tenderDetails.map((detail, idx) => (
                                    <div key={idx} className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                                        <detail.icon className="text-rose-500 mb-3" size={24} />
                                        <p className="text-sm text-slate-500 uppercase font-bold mb-1">{detail.label}</p>
                                        <p className="font-semibold text-slate-900">{detail.value}</p>
                                    </div>
                                ))}
                            </div>

                            {/* Specs & Tech Details */}
                            <div className="grid md:grid-cols-2 gap-8">

                                {/* Dimensions */}
                                <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                                    <h3 className="font-bold text-slate-900 mb-4 text-lg border-b border-slate-100 pb-2">Dimensions & Sizes</h3>
                                    <div className="space-y-4">
                                        {specs.map((spec, idx) => (
                                            <div key={idx} className="flex justify-between items-center bg-slate-50 p-3 rounded-lg">
                                                <span className="text-slate-600 font-medium">{spec.label}</span>
                                                <span className="font-bold text-slate-900 bg-white px-2 py-1 rounded shadow-sm border border-slate-100">{spec.value}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Technical Specs */}
                                <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                                    <h3 className="font-bold text-slate-900 mb-4 text-lg border-b border-slate-100 pb-2">Technical Specifications</h3>
                                    <div className="space-y-4">
                                        {technicalDetails.map((item, idx) => (
                                            <div key={idx}>
                                                <p className="text-xs text-slate-500 uppercase font-bold mb-1">{item.label}</p>
                                                <p className="text-slate-800 text-sm leading-relaxed">{item.value}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Commercial Terms */}
                            <div className="bg-rose-50 p-8 rounded-2xl border border-red-100">
                                <h3 className="text-xl font-bold text-slate-900 mb-6">Commercial Terms</h3>
                                <div className="grid md:grid-cols-2 gap-8">
                                    {terms.map((term, idx) => (
                                        <div key={idx} className="flex gap-4">
                                            <div className="bg-white p-3 rounded-xl h-fit shadow-sm text-rose-600">
                                                <term.icon size={20} />
                                            </div>
                                            <div>
                                                <p className="font-bold text-slate-900 mb-1">{term.label}</p>
                                                <p className="text-slate-700 text-sm leading-relaxed">{term.value}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Dates Table */}
                            <div className="overflow-hidden rounded-xl border border-slate-200">
                                <table className="w-full text-sm text-left">
                                    <thead className="bg-slate-100 text-slate-600 font-bold uppercase">
                                        <tr>
                                            <th className="px-6 py-4">Event</th>
                                            <th className="px-6 py-4 text-right">Date</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-slate-100">
                                        <tr className="bg-white">
                                            <td className="px-6 py-4 font-medium text-slate-900">Commencement of issuance of the Tender Documents</td>
                                            <td className="px-6 py-4 text-right text-slate-500 font-mono">--</td>
                                        </tr>
                                        <tr className="bg-white">
                                            <td className="px-6 py-4 font-medium text-slate-900">Last date of obtaining the Tender Documents</td>
                                            <td className="px-6 py-4 text-right text-slate-500 font-mono">--</td>
                                        </tr>
                                        <tr className="bg-white">
                                            <td className="px-6 py-4 font-medium text-slate-900">Last date of submission of Bid</td>
                                            <td className="px-6 py-4 text-right text-slate-500 font-mono">--</td>
                                        </tr>
                                        <tr className="bg-white">
                                            <td className="px-6 py-4 font-medium text-slate-900">Tentative Date of Opening the Bids</td>
                                            <td className="px-6 py-4 text-right text-slate-500 font-mono">--</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            {/* Footer Note */}
                            <div className="bg-slate-900 text-white p-6 rounded-xl text-center">
                                <p className="text-slate-300 text-sm">
                                    Tender Documents can be obtained <strong>In-person</strong> on payment of prescribed fee (Non-refundable).
                                </p>
                            </div>

                        </div>
                    </div>
                </main>
            </div>
            <Footer />
        </div>
    );
}
