import React from "react";
import { motion } from "framer-motion";

export default function AboutUs() {
  return (
    <section id="about" className="py-16 md:py-24 bg-white overflow-hidden select-none">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          
          {/* --- LEFT SIDE: VISUAL ELEMENT (RESPONSIVE IMAGE & BADGE) --- */}
          <motion.div 
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 relative"
          >
            {/* Main Image Wrapper */}
            <div className="relative z-10 rounded-[2rem] overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800&auto=format&fit=crop&q=80" 
                alt="Cafe Atmosphere" 
                className="w-full h-[320px] sm:h-[420px] md:h-[500px] object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            
            {/* Design Decorative Elements (Hidden on tiny screens for clean layout) */}
            <div className="absolute -bottom-6 -right-4 sm:-right-6 w-36 h-36 sm:w-48 sm:h-48 bg-amber-100 rounded-full -z-0 blur-3xl opacity-60"></div>
            <div className="absolute -top-6 -left-4 sm:-top-10 sm:-left-10 w-24 h-24 sm:w-32 sm:h-32 border-[8px] sm:border-[12px] border-amber-500/10 rounded-full"></div>
            
            {/* Floating Experience Badge (Responsive alignment) */}
            <div className="absolute bottom-6 right-4 sm:-right-4 bg-amber-500 p-4 sm:p-6 rounded-2xl shadow-2xl text-white z-20 min-w-[110px] sm:min-w-[130px] text-center">
              <p className="text-2xl sm:text-3xl font-black尊 leading-none mb-1">24/7</p>
              <p className="text-[9px] sm:text-xs uppercase tracking-widest font-bold text-amber-100">Open Hours</p>
            </div>
          </motion.div>

          {/* --- RIGHT SIDE: CONTENT (RESPONSIVE TYPOGRAPHY) --- */}
          <div className="w-full lg:w-1/2 space-y-6 sm:space-y-8 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h4 className="text-amber-600 font-black uppercase tracking-[0.3em] text-xs mb-3 flex items-center justify-center lg:justify-start gap-2">
                <span className="w-8 h-[2px] bg-amber-600"></span> About Us
              </h4>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 leading-tight tracking-tight">
                New Tip Top Cafe – Your Favorite <span className="text-amber-500">Cafe in Anna Nagar</span>
              </h2>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-4 sm:space-y-6 text-slate-600 text-base sm:text-lg leading-relaxed font-medium"
            >
              <p>
                <strong className="text-slate-900">New Tip Top Cafe</strong> is a popular café located in 
                <span className="text-slate-900 font-semibold"> Anna Nagar, Chennai</span>, serving a wide 
                variety of hot and cold beverages along with delicious snacks. We are known for our 
                quality ingredients, hygienic preparation, and quick service.
              </p>
              
              <p className="bg-slate-50 p-5 sm:p-6 rounded-2xl border-l-4 border-amber-500 italic text-left text-sm sm:text-base shadow-sm">
                Whether you are searching for a <span className="text-amber-600 font-semibold">tea shop near me</span>, 
                a late-night cafe in Anna Nagar, or a place to enjoy snacks with friends, 
                New Tip Top Cafe is the perfect choice.
              </p>
            </motion.div>

            {/* --- CORE FEATURES ICONS (GRID SAFE FOR ALL SCREENS) --- */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="grid grid-cols-3 gap-3 sm:gap-4 pt-4"
            >
              {[
                { label: "Quality Ingredients", icon: "✨" },
                { label: "Hygienic Prep", icon: "🧼" },
                { label: "Quick Service", icon: "⚡" }
              ].map((item) => (
                <div key={item.label} className="flex flex-col items-center justify-center text-center p-3 sm:p-4 rounded-2xl border border-slate-100 bg-white shadow-sm hover:shadow-md transition-shadow duration-300">
                  <div className="text-xl sm:text-2xl mb-1.5 sm:mb-2">{item.icon}</div>
                  <p className="text-[9px] sm:text-[10px] font-black uppercase tracking-tighter text-slate-500 leading-tight max-w-[90px] sm:max-w-none">
                    {item.label}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}