import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const reviews = [
  { id: 1, name: "Anitha", image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=600&q=80", text: "Gift romba unique ah irundhuchu ❤️", rotate: "-5deg" },
  { id: 2, name: "Priya", image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=600&q=80", text: "Finishing super, romba pidichiduchu 😍", rotate: "3deg" },
  { id: 3, name: "Karthika", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80", text: "Customization perfect ah irundhuchu 💝", rotate: "-2deg" },
  { id: 4, name: "Divya", image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=600&q=80", text: "Quality top class 👌", rotate: "4deg" },
  { id: 5, name: "Sneha", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=600&q=80", text: "Best experience ever! ✨", rotate: "-4deg" },
];

export default function ReviewPage() {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  // Scroll panna panna cards left-la irundhu right-ku nagarum
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);

  return (
    <div ref={targetRef} className="relative h-[300vh] bg-[#050505]">
      
      {/* 1. ANIMATED MESH GRADIENT BACKGROUND */}
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        <div className="absolute inset-0 z-0">
          <motion.div 
            animate={{ 
              scale: [1, 1.2, 1],
              rotate: [0, 90, 0],
            }}
            transition={{ duration: 20, repeat: Infinity }}
            className="absolute top-[-20%] left-[-10%] w-[70%] h-[70%] bg-gradient-to-br from-purple-900/40 via-amber-500/20 to-transparent blur-[120px] rounded-full" 
          />
          <motion.div 
            animate={{ 
              scale: [1.2, 1, 1.2],
              rotate: [0, -90, 0],
            }}
            transition={{ duration: 15, repeat: Infinity }}
            className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-gradient-to-tr from-blue-900/30 via-emerald-500/10 to-transparent blur-[120px] rounded-full" 
          />
        </div>

        {/* 2. SECTION CONTENT */}
        <div className="relative z-10 h-full flex flex-col justify-center">
          
          <div className="px-10 mb-10">
            <motion.h2 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="text-6xl md:text-8xl font-black text-white tracking-tighter"
            >
              TRUSTED BY <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">THOUSANDS.</span>
            </motion.h2>
            <p className="text-slate-500 mt-4 tracking-[0.5em] text-xs font-bold uppercase">Swipe to see the love ↓</p>
          </div>

          {/* 3. HORIZONTAL SCROLL CARDS */}
          <div className="flex items-center overflow-hidden">
            <motion.div style={{ x }} className="flex gap-12 px-10">
              {reviews.map((r) => (
                <motion.div
                  key={r.id}
                  whileHover={{ y: -20, rotate: 0 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="relative flex-shrink-0"
                >
                  {/* Glass Tape Effect */}
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-20 h-8 bg-white/10 backdrop-blur-md z-30 border border-white/5 rotate-[-2deg]" />
                  
                  {/* Polaroid Card */}
                  <div 
                    style={{ rotate: r.rotate }}
                    className="bg-[#fdfdfd] p-4 pb-10 shadow-[20px_20px_60px_rgba(0,0,0,0.8)] border border-white/20 w-[300px]"
                  >
                    <div className="w-full h-[280px] overflow-hidden bg-slate-100">
                      <img
                        src={r.image}
                        alt={r.name}
                        className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                      />
                    </div>
                    
                    <div className="mt-6">
                      <p className="text-lg font-serif text-slate-800 leading-tight italic">
                        "{r.text}"
                      </p>
                      <div className="mt-4 flex items-center justify-between">
                         <span className="text-[10px] font-black tracking-widest text-amber-600 uppercase italic">— {r.name}</span>
                         <div className="flex text-amber-400 text-[10px]">★★★★★</div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* 4. PROGRESS BAR */}
        <motion.div 
          style={{ scaleX: scrollYProgress }}
          className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-500 to-purple-600 origin-left z-50"
        />
      </div>

      {/* FOOTER SPACER */}
      <div className="h-screen flex items-center justify-center">
         <h3 className="text-white/10 text-9xl font-black uppercase">Your Story?</h3>
      </div>
    </div>
  );
}