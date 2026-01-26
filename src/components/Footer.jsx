import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="mt-16 bg-white border-t border-slate-200 pt-12 pb-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-black text-slate-900">HC Parekh</h2>
            <p className="text-slate-500 text-sm mt-2">Leading Industrial Consultants Since 2007</p>
          </div>
          <div className="flex gap-8 text-sm font-bold text-slate-600">
            <Link to="/our-hiring" className="hover:text-rose-600">Our Hiring</Link>
            <Link to="/corporate-tenders" className="hover:text-rose-600">Our Trade Invitation</Link>
            <Link to="/social-services" className="hover:text-rose-600">Our Social Services & Donations</Link>
            <Link to="/photo-gallery" className="hover:text-rose-600">Photo Gallery</Link>
          </div>
        </div>
        <div className="border-t border-slate-100 mt-8 pt-8 text-center text-xs text-slate-400 font-medium">
          © 2026 HC Parekh & Associates. All rights reserved.
        </div>
      </div>
    </footer>
  );
}