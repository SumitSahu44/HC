import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function ProjectMarquee() {
    const marqueeText = [
        "Implement your own Project",
        "Contact us for our Projects"
    ];

    return (
        <div className="relative flex overflow-x-hidden bg-slate-900 py-6 border-y border-slate-800">
            <motion.div
                className="flex whitespace-nowrap"
                animate={{ x: ["0%", "-50%"] }} // Adhe raste tak move karega phir loop hoga
                transition={{
                    repeat: Infinity,
                    ease: "linear",
                    duration: 20, // Speed control: Kam number matlab fast, zyada matlab slow
                }}
            >
                {/* Do baar map karna zaroori hai infinite effect ke liye */}
                {[...Array(2)].map((_, i) => (
                    <div key={i} className="flex items-center gap-12 px-6">
                        <span className="flex items-center gap-4 text-2xl md:text-3xl font-extrabold text-white tracking-tight">
                            <span className="h-3 w-3 rounded-full bg-rose-500" /> {/* Marker dot */}
                            Implement your own Project
                        </span>

                        <Link
                            to="/contact"
                            className="flex items-center gap-4 text-2xl md:text-3xl font-extrabold text-white hover:text-rose-400 transition-colors tracking-tight"
                        >
                            <span className="h-3 w-3 rounded-full bg-rose-500" /> {/* Marker dot */}
                            Contact us for our Project
                        </Link>
                    </div>
                ))}
            </motion.div>

            {/* Side mein halka sa gradient shadow taaki edges smooth lagein (Optional) */}
            <div className="pointer-events-none absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-slate-900 to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-slate-900 to-transparent" />
        </div>
    );
}