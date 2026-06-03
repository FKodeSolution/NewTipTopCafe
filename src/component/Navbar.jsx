import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function SideLuxuryNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: "Home", href: "#home", label: "Start Here" },
    { name: "About", href: "#about", label: "Who We Are" },
    { name: "Menu", href: "#menu", label: "Freshly Crafted" },
    { name: "Contact", href: "#contact", label: "Visit Us" },
  ];

  // Smooth Scroll Function
  const scrollToSection = (e, href) => {
    e.preventDefault();
    setIsOpen(false); // Close menu first
    const targetId = href.replace("#", "");
    const elem = document.getElementById(targetId);
    if (elem) {
      window.scrollTo({
        top: elem.offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      {/* --- SIDE TRIGGER BAR (Desktop: Left, Mobile: Bottom) --- */}
      <nav className="fixed bottom-0 left-0 w-full h-16 md:top-0 md:h-screen md:w-24 bg-black/95 backdrop-blur-xl border-t md:border-t-0 md:border-r border-white/10 z-[130] flex flex-row md:flex-col items-center justify-between px-6 py-0 md:py-10">
        
        {/* LOGO (Hidden on Mobile) */}
        <motion.div 
          whileHover={{ rotate: 180 }}
          className="text-2xl cursor-pointer hidden md:block"
        >
          ☕
        </motion.div>

        {/* ROTATED BRAND NAME (Hidden on Mobile) */}
        <div className="hidden md:flex items-center gap-2 -rotate-90 origin-center">
          <span className="text-[10px] font-black uppercase tracking-[0.5em] text-white/30 whitespace-nowrap">
            ESTB. 2024 — TIP TOP
          </span>
        </div>

        {/* MOBILE BRAND (Visible only on Mobile) */}
        <div className="md:hidden">
          <span className="text-white font-black italic tracking-tighter text-base uppercase">TIP TOP.</span>
        </div>

        {/* HAMBURGER TRIGGER (Optimized Padding for Mobile Touch) */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="group flex items-center gap-3 md:flex-col md:gap-2 transition-all outline-none py-2 px-1 rounded-lg"
        >
          <span className="text-[10px] md:text-[10px] font-black text-amber-500 uppercase tracking-widest min-w-[45px] text-right md:text-center">
            {isOpen ? "Close" : "Explore"}
          </span>
          <div className="space-y-1.5 flex flex-col items-end w-6">
            <motion.div 
              animate={isOpen ? { rotate: 45, y: 5, width: "20px" } : { rotate: 0, y: 0, width: "24px" }}
              className="h-[2px] bg-white group-hover:bg-amber-500 transition-colors origin-center"
            />
            <motion.div 
              animate={isOpen ? { rotate: -45, y: -3, width: "20px" } : { rotate: 0, y: 0, width: "16px" }}
              className="h-[2px] bg-white group-hover:w-6 group-hover:bg-amber-500 transition-all origin-center"
            />
          </div>
        </button>
      </nav>

      {/* --- FULL SCREEN OVERLAY MENU --- */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, x: "-100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "-100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 200 }}
            // h-[100dvh] used for perfect mobile browser height scaling
            className="fixed inset-0 h-[100dvh] w-full z-[120] bg-[#050505] flex flex-col md:flex-row overflow-hidden"
          >
            {/* LEFT SIDE: IMAGE (Hidden on Mobile for fast performance) */}
            <div className="hidden md:block w-1/3 h-full relative overflow-hidden border-r border-white/5 bg-[#0a0a0a]">
              <img 
                src="https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&q=80&w=1000" 
                alt="Cafe Gallery" 
                className="w-full h-full object-cover opacity-30 scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-black" />
            </div>

            {/* RIGHT SIDE: LINKS */}
            <div className="flex-1 h-full flex flex-col justify-between px-6 sm:px-12 md:px-24 py-8 md:py-20 relative overflow-y-auto no-scrollbar pb-24 md:pb-20">
              
              {/* DESKTOP-ONLY CLOSE BUTTON (Hidden on mobile because bottom bar has "Close") */}
              <div className="hidden md:flex justify-end w-full absolute top-8 right-8 z-50">
                <button 
                  onClick={() => setIsOpen(false)}
                  className="text-white/40 hover:text-amber-500 transition-all p-3 text-2xl font-light active:scale-95"
                >
                  ✕
                </button>
              </div>

              {/* NAV ITEMS HOLDER */}
              <div className="space-y-5 sm:space-y-8 md:space-y-12 my-auto pt-4 md:pt-0">
                {menuItems.map((item, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.05 + (i * 0.06), ease: "easeOut" }}
                    className="group"
                  >
                    <a 
                      href={item.href}
                      onClick={(e) => scrollToSection(e, item.href)}
                      className="inline-block"
                    >
                      <p className="text-amber-500 font-black text-[9px] md:text-[10px] uppercase tracking-[0.3em] mb-1 sm:mb-2 opacity-100 md:opacity-0 group-hover:opacity-100 transition-all duration-300">
                        {item.label}
                      </p>
                      <h2 className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-black text-white group-hover:text-amber-500 transition-colors duration-300 tracking-tighter uppercase leading-none">
                        {item.name}
                      </h2>
                    </a>
                  </motion.div>
                ))}
              </div>

              {/* MENU FOOTER INFO */}
              <div className="pt-6 border-t border-white/5 flex flex-col sm:flex-row gap-5 items-start sm:items-center justify-between mt-auto">
                <a 
                  href="https://wa.me/919150282859" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto text-center px-8 py-3.5 bg-amber-500 text-black font-black uppercase text-[10px] tracking-widest rounded-xl sm:rounded-full hover:bg-white transition-colors shadow-2xl active:scale-95"
                >
                  Order on WhatsApp
                </a>
                <div className="text-white/30 text-[9px] uppercase tracking-[0.2em] leading-relaxed font-medium">
                  Anna Nagar, Chennai <br className="hidden sm:block" /> Open 24x7 for your cravings.
                </div>
              </div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Global Style for Body Padding & Smooth Scroll */}
      <style>{`
        html { scroll-behavior: smooth; }
        body { 
          padding-bottom: 4rem; 
        }
        @media (min-width: 768px) { 
          body { 
            padding-bottom: 0;
            padding-left: 6rem; 
          } 
        }
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </>
  );
}