  import React from "react";
  import { motion } from "framer-motion";

  const features = [
    {
      title: "Midnight Hub",
      desc: "24/7 service in the heart of Anna Nagar.",
      icon: "🌙"
    },
    {
      title: "Gold Standard",
      desc: "Handpicked tea leaves & premium beans.",
      icon: "🏆"
    },
    {
      title: "True Value",
      desc: "Top-tier taste at everyday prices.",
      icon: "💎"
    }
  ];

  export default function SimplePremiumShowcase() {
    return (
      <section className="bg-white py-20 px-6">
        <div className="max-w-6xl mx-auto">
          
          {/* --- HEADER: CLEAN & BOLD --- */}
          <div className="mb-16 border-l-4 border-amber-500 pl-6">
            <h4 className="text-amber-600 font-bold uppercase tracking-widest text-xs mb-2">
              Why Tip Top?
            </h4>
            <h2 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tight">
              Not Just a Cafe. <br />
              <span className="text-slate-400">An Experience.</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* --- LEFT: SIMPLE IMAGE --- */}
            <div className="relative rounded-3xl overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=1200" 
                alt="Cafe" 
                className="w-full h-[450px] object-cover"
              />
              <div className="absolute inset-0 bg-black/10 hover:bg-transparent transition-all duration-500"></div>
            </div>

            {/* --- RIGHT: CLEAN CARDS --- */}
            <div className="space-y-6">
              {features.map((f, i) => (
                <div 
                  key={i}
                  className="flex gap-6 items-center p-6 rounded-2xl hover:bg-slate-50 transition-all border border-slate-100"
                >
                  <div className="w-14 h-14 bg-amber-50 rounded-full flex items-center justify-center text-2xl">
                    {f.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">{f.title}</h3>
                    <p className="text-slate-500 text-sm font-medium mt-1">{f.desc}</p>
                  </div>
                </div>
              ))}

              {/* SIMPLE CTA */}
              <div className="pt-6">
                <button className="bg-slate-900 text-white px-10 py-4 rounded-full font-bold uppercase tracking-widest text-xs hover:bg-amber-600 transition-colors">
                  Explore Story ↗
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>
    );
  }