import React, { useState } from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import { Image, Camera } from 'lucide-react';

export default function PhotoGallery() {
    const [isSidebarOpen, setSidebarOpen] = useState(false);

    // Placeholder images - using gradients or Unsplash random IDs if possible, 
    // but for reliability we will use styled divs with icons/text for now 
    // until real images are provided.
    const photos = [
        { title: "Corporate Meeting", size: "large", color: "bg-rose-100" },
        { title: "Industrial Review", size: "small", color: "bg-blue-100" },
        { title: "Site Visit", size: "small", color: "bg-emerald-100" },
        { title: "Awards Ceremony", size: "wide", color: "bg-purple-100" },
        { title: "Team Building", size: "small", color: "bg-amber-100" },
        { title: "New Office Opening", size: "large", color: "bg-indigo-100" },
        { title: "Client Presentation", size: "small", color: "bg-cyan-100" },
        { title: "Project Launch", size: "small", color: "bg-rose-50" },
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
                                <span className="bg-rose-100 text-rose-600 p-2 rounded-lg">
                                    <Camera size={24} />
                                </span>
                                <span className="text-rose-600 font-bold tracking-wider text-sm uppercase">Visual Journey</span>
                            </div>
                            <h1 className="text-3xl md:text-5xl font-black text-slate-900 mb-4">
                                PHOTO GALLERY
                            </h1>
                            <p className="text-xl text-slate-600 font-medium">
                                Glimpses of our events, projects, and achievements.
                            </p>
                        </div>

                        {/* Gallery Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[200px]">
                            {photos.map((photo, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    whileHover={{ scale: 1.02 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1 }}
                                    className={`relative rounded-2xl overflow-hidden shadow-sm group cursor-pointer ${photo.size === "large" ? "md:col-span-2 md:row-span-2" :
                                            photo.size === "wide" ? "md:col-span-2" : ""
                                        }`}
                                >
                                    {/* Image Placeholder */}
                                    <div className={`w-full h-full ${photo.color} flex flex-col items-center justify-center p-6 text-center transition-colors hover:opacity-90`}>
                                        <Image size={48} className="text-slate-400 mb-3 opacity-50" />
                                        <span className="font-bold text-slate-700/50 text-xl">{photo.title}</span>
                                    </div>

                                    {/* Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                                        <p className="text-white font-bold text-lg">{photo.title}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        <div className="mt-12 text-center">
                            <p className="text-slate-400 text-sm">More memories being created every day...</p>
                        </div>

                    </div>
                </main>
            </div>
            <Footer />
        </div>
    );
}
