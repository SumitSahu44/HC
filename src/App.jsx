import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import HomeV1 from './pages/Home1';
import HomeV2 from './pages/Home2';
import HomeV3 from './pages/Home3';
import HomeV4 from './pages/Home4';
import HomeV5 from './pages/Home5';
import HomeV6 from './pages/Home6';
import About from './pages/About';
import Contact from './pages/Contact';
import Services from './pages/Services';
import ServiceCharges from './pages/ServiceCharges';
import ProjectNotice from './pages/ProjectNotice';
import CorporateTenders from './pages/CorporateTenders';
import CorporateMOU from './pages/CorporateMOU';
import OurTeam from './pages/OurTeam';
import OurHiring from './pages/OurHiring';
import SocialServices from './pages/SocialServices';
import PhotoGallery from './pages/PhotoGallery';


import ScrollToTop from './components/ScrollToTop';

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="relative">

        {/* Helper Navigation (Temp) - Taaki tum switch kar sako */}
        <div className="fixed bottom-4 right-4 z-[9999] bg-black/80 text-white p-2 rounded-lg flex gap-4 text-xs backdrop-blur-md">
          <Link to="/" className="hover:text-rose-400 font-bold">Version 1 (Sidebar)</Link>
          <span className="text-gray-500">|</span>
          <Link to="/home2" className="hover:text-rose-400 font-bold">Version 2 (Modern)</Link>
        </div>

        <Routes>
          <Route path="/" element={<HomeV1 />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
          <Route path="/service-charges" element={<ServiceCharges />} />
          <Route path="/project-notice" element={<ProjectNotice />} />
          <Route path="/corporate-tenders" element={<CorporateTenders />} />
          <Route path="/corporate-mou" element={<CorporateMOU />} />
          <Route path="/our-team" element={<OurTeam />} />
          <Route path="/our-hiring" element={<OurHiring />} />
          <Route path="/social-services" element={<SocialServices />} />
          <Route path="/photo-gallery" element={<PhotoGallery />} />
          <Route path="/home2" element={<HomeV2 />} />
          <Route path="/home3" element={<HomeV3 />} />
          <Route path="/home4" element={<HomeV4 />} />
          <Route path="/home5" element={<HomeV5 />} />
          <Route path="/home6" element={<HomeV6 />} />
        </Routes>

      </div>
    </BrowserRouter>
  );
}