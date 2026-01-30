import React, { useState } from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import { MapPin, Mail, Phone, Send, Clock, Globe } from 'lucide-react';

const LOCATIONS = [
    {
        city: "Bengaluru, Karnataka",
        address: "Laxmipuram, Bengaluru 560008",
        color: "rose"
    },
    {
        city: "Bhubaneswar, Odisha",
        address: "Sundarpada, Bhubaneswar 751002",
        color: "blue"
    },
    {
        city: "Nagpur (Maharashtra)",
        address: "",
        color: "amber"
    }
];

const CONTACT_EMAILS = [
    { type: "Appointment", email: "appointment@hcparekh.com" },
    { type: "Project Services", email: "services@hcparekh.com" }
];

export default function Contact() {
    const [isSidebarOpen, setSidebarOpen] = useState(false);
    const [formState, setFormState] = useState({ name: '', email: '', subject: '', message: '' });

    const handleSubmit = (e) => {
        e.preventDefault();
        // In a real app, you would send this data to a backend
        alert("Thank you for your message. We will contact you shortly.");
        setFormState({ name: '', email: '', subject: '', message: '' });
    };

    const handleChange = (e) => {
        setFormState({ ...formState, [e.target.name]: e.target.value });
    };

    return (
        <div className="min-h-screen bg-slate-50/50 font-sans text-slate-800">
            <Header toggleSidebar={() => setSidebarOpen(!isSidebarOpen)} />

            <div className="container mx-auto flex gap-8 py-6 px-4 md:px-6 relative items-start">
                <Sidebar isOpen={isSidebarOpen} toggle={() => setSidebarOpen(false)} />

                <main className="flex-1 min-w-0 bg-white rounded-3xl shadow-xl border border-slate-100 overflow-hidden relative">

                    {/* Header Banner */}
                    <div className="bg-slate-900 text-white p-8 md:p-12 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-rose-600 blur-[80px] opacity-20 rounded-full" />
                        <div className="relative z-10">
                            <h1 className="text-3xl md:text-5xl font-black mb-4">Get in Touch</h1>
                            <p className="text-slate-400 text-lg max-w-2xl">
                                We are here to assist you with your industrial consultation needs. Reach out to us for appointments or service inquiries.
                            </p>
                        </div>
                    </div>

                    <div className="p-8 md:p-12 grid grid-cols-1 lg:grid-cols-2 gap-12">

                        {/* Left Column: Contact Info */}
                        <div className="space-y-10">

                            {/* Locations */}
                            <div>
                                <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2 mb-6">
                                    <MapPin className="text-rose-500" /> Our Locations
                                </h3>
                                <div className="space-y-4">
                                    {LOCATIONS.map((loc, idx) => (
                                        <motion.div
                                            key={idx}
                                            initial={{ opacity: 0, x: -10 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: idx * 0.1 }}
                                            className="p-5 rounded-xl border border-slate-100 bg-slate-50 hover:bg-white hover:shadow-md transition-all group"
                                        >
                                            <h4 className="font-bold text-slate-800 mb-1">{loc.city}</h4>
                                            {loc.address && <p className="text-slate-600 text-sm">{loc.address}</p>}
                                        </motion.div>
                                    ))}
                                </div>
                            </div>

                            {/* Emails */}
                            <div>
                                <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2 mb-6">
                                    <Mail className="text-rose-500" /> Email Contacts
                                </h3>
                                <div className="grid gap-4">
                                    {CONTACT_EMAILS.map((contact, idx) => (
                                        <a
                                            key={idx}
                                            href={`mailto:${contact.email}`}
                                            className="flex items-center gap-4 p-5 rounded-xl border border-slate-100 bg-rose-50/50 hover:bg-rose-50 transition-colors group"
                                        >
                                            <div className="p-3 bg-white text-rose-600 rounded-full shadow-sm group-hover:scale-110 transition-transform">
                                                <Mail size={20} />
                                            </div>
                                            <div>
                                                <p className="text-xs font-bold text-rose-800 uppercase tracking-wider">{contact.type}</p>
                                                <p className="text-slate-700 font-medium break-all">{contact.email}</p>
                                            </div>
                                        </a>
                                    ))}
                                    <p className="text-xs text-slate-500 italic mt-2 ml-1">
                                        * Email is preferred for prior appointments.
                                    </p>
                                </div>
                            </div>

                        </div>

                        {/* Right Column: Contact Form */}
                        <div className="bg-white rounded-2xl border border-slate-100 shadow-lg p-6 md:p-8">
                            <h3 className="text-xl font-bold text-slate-900 mb-6">Send us a Message</h3>

                            <form onSubmit={handleSubmit} className="space-y-5">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                    <div className="space-y-2">
                                        <label className="text-sm font-semibold text-slate-700">Your Name</label>
                                        <input
                                            type="text"
                                            name="name"
                                            required
                                            value={formState.name}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:border-rose-500 focus:ring-2 focus:ring-rose-200 outline-none transition-all"
                                            placeholder="John Doe"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-semibold text-slate-700">Email Address</label>
                                        <input
                                            type="email"
                                            name="email"
                                            required
                                            value={formState.email}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:border-rose-500 focus:ring-2 focus:ring-rose-200 outline-none transition-all"
                                            placeholder="john@example.com"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-slate-700">Subject</label>
                                    <select
                                        name="subject"
                                        value={formState.subject}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:border-rose-500 focus:ring-2 focus:ring-rose-200 outline-none transition-all"
                                    >
                                        <option value="">Select a Topic</option>
                                        <option value="appointment">Request Appointment</option>
                                        <option value="consultation">Project Consultation</option>
                                        <option value="service">Service Inquiry</option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-slate-700">Message</label>
                                    <textarea
                                        name="message"
                                        required
                                        value={formState.message}
                                        onChange={handleChange}
                                        rows={4}
                                        className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:border-rose-500 focus:ring-2 focus:ring-rose-200 outline-none transition-all resize-none"
                                        placeholder="How can we help you?"
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="w-full bg-slate-900 hover:bg-slate-800 text-white font-bold py-4 rounded-xl transition-all flex items-center justify-center gap-2 group"
                                >
                                    Send Message
                                    <Send size={18} className="group-hover:translate-x-1 transition-transform" />
                                </button>
                            </form>
                        </div>

                    </div>

                </main>
            </div>

            <Footer />
        </div>
    );
}
