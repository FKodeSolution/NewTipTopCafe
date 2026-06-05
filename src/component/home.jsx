import React from "react";
import { motion } from "framer-motion"; 
import cafeBg from "../assets/cafe-bg1.jpg";
import AboutUs from "./AboutUs";
import MenuHighlights from "./MenuHighlights";
import WhyChooseUs from "./WhyChooseUs";
import ReviewPage from "./ReviewPage";
import InteractiveMenu from "./InteractiveMenu";
import ContactUs from "./contactus";


export default function LuxuryHeroSection() {
  return (
       <>
    <section 
      id="home" 
      className="relative min-h-screen w-full flex items-center justify-start overflow-hidden bg-black select-none"
    >
      
      {/* 🖼️ DYNAMIC BACKGROUND (RESPONSIVE ALIGNMENT) */}
      <div className="absolute inset-0 z-0 w-full h-full overflow-hidden pointer-events-none">
        <motion.div 
          initial={{ scale: 1.12, opacity: 0.8 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 8, ease: "easeOut" }}
          className="w-full h-full bg-cover bg-center md:bg-right-center"
          style={{ backgroundImage: `url(${cafeBg})` }}
        />
        {/* Multi-Layered Premium Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 sm:via-black/70 to-black/30 md:to-transparent z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/20 z-10" />
      </div>

      {/* ☕ CONTENT WRAPPER */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-8 md:px-16 w-full pt-20 pb-16 md:py-0 flex items-center">
        
        <div className="max-w-full md:max-w-4xl lg:max-w-5xl">
          {/* TOP BADGE */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 sm:px-5 sm:py-2 rounded-full bg-white/5 backdrop-blur-xl border border-white/10 text-amber-400 text-[10px] sm:text-xs font-black uppercase tracking-[0.2em] mb-5 sm:mb-8 shadow-2xl"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            Anna Nagar • Open 24/7
          </motion.div>

          {/* TITANIC HEADING (SCALED PERFECTLY FOR LAPTOPS & MOBILE) */}
          <motion.h1 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[7rem] font-black text-white leading-[1.1] sm:leading-[0.95] mb-6 sm:mb-8 tracking-tighter uppercase"
          >
            AWAKEN <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-600">
              YOUR SENSES.
            </span>
          </motion.h1>

          {/* ELEGANT DESCRIPTION */}
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="max-w-md sm:max-w-xl text-sm sm:text-base md:text-xl lg:text-2xl text-gray-400 font-light leading-relaxed mb-8 sm:mb-10"
          >
            Experience <span className="text-white font-bold italic underline decoration-amber-500 decoration-2 underline-offset-4 sm:underline-offset-8">New Tip Top Cafe</span>. 
            A sanctuary in Chennai for those who crave premium craftsmanship in every sip and bite.
          </motion.p>

          {/* MODERN CTA SECTION */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-start sm:items-center w-full sm:w-auto"
          >
            <a
              href="#menu"
              className="group relative w-full sm:w-auto text-center px-8 py-4 sm:px-10 sm:py-5 bg-amber-500 rounded-xl md:rounded-2xl font-black text-black uppercase tracking-widest text-xs transition-all hover:bg-amber-400 shadow-[0_15px_30px_-10px_rgba(245,158,11,0.35)] active:scale-95"
            >
              Explore Menu
            </a>

            <a
              href="#contact"
              className="group flex items-center gap-3 text-white font-bold tracking-widest uppercase text-xs hover:text-amber-400 transition-all py-2 mx-0"
            >
              <span className="hidden sm:block w-8 h-[1px] bg-white group-hover:w-12 group-hover:bg-amber-400 transition-all duration-500"></span>
              Visit Us Today
            </a>
          </motion.div>

          {/* FLOATING SERVICES (GRID SAFE) */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
            className="grid grid-cols-3 gap-2 sm:gap-6 mt-12 sm:mt-16 max-w-xs sm:max-w-md border-t border-white/10 pt-4"
          >
            {[
              { label: "Dine-In", val: "Premium" },
              { label: "Takeaway", val: "Instant" },
              { label: "Delivery", val: "24 Hours" }
            ].map((item) => (
              <div key={item.label} className="text-left">
                <p className="text-[9px] text-amber-500 font-black uppercase tracking-wider mb-0.5">{item.val}</p>
                <p className="text-white font-bold text-xs sm:text-sm tracking-tight">{item.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* 🖱️ SCROLL INDICATOR (LAPTOP & DESKTOP ONLY) */}
      <div className="absolute bottom-10 right-10 z-20 hidden lg:block pointer-events-none">
        <div className="flex flex-col items-center gap-3">
          <span className="text-white/20 [writing-mode:vertical-lr] uppercase tracking-[0.4em] text-[9px] font-black">Scroll</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-amber-500 to-transparent"></div>
        </div>
      </div>

    </section>
     <AboutUs />
      <MenuHighlights />
      <WhyChooseUs />
      <InteractiveMenu />
      <ReviewPage />
       < ContactUs/>
      </>
  );
}