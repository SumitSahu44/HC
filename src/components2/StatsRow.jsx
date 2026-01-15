import React from 'react';
import { TrendingUp, Users, Award, Globe } from 'lucide-react';

const stats = [
  { label: "Market Experience", value: "19 Years", icon: TrendingUp },
  { label: "Active Investors", value: "250+", icon: Users },
  { label: "Industry Awards", value: "14", icon: Award },
  { label: "Global Partners", value: "40+", icon: Globe },
];

export default function StatsRow() {
  return (
    <div className="bg-slate-900 py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, idx) => (
            <div key={idx} className="text-center group cursor-pointer">
              <div className="flex justify-center mb-3 text-rose-500 group-hover:scale-110 transition-transform">
                <stat.icon size={32} />
              </div>
              <h3 className="text-3xl font-black text-white mb-1">{stat.value}</h3>
              <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}