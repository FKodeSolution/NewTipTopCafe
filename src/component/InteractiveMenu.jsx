import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiArrowRight, FiArrowLeft } from "react-icons/fi";

const slides = [
  {
    id: "Food",
    title: "Crispy Chicken",
    price: "180",
    desc: "Golden-brown perfection with our secret spice blend. Served hot and fresh 24/7 in Anna Nagar.",
    // Unsplash தளம் மூலம் 100% வேலை செய்யக்கூடிய பிரீமியம் பிசிபிஎஸ் இமேஜ்
    img: "https://images.unsplash.com/photo-1562967914-608f82629710?w=500&auto=format&fit=crop&q=80",
    tag: "Chef's Special",
    color: "#f59e0b"
  },
  {
    id: "Salad",
    title: "Healthy Salad",
    price: "140",
    desc: "A nutrient-packed delight, bursting with vibrant vegetables, leafy greens, and wholesome ingredients.",
    img: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=500&auto=format&fit=crop&q=80",
    tag: "Fresh & Light",
    color: "#10b981"
  },
  {
    id: "Drinks",
    title: "Mango Smoothie",
    price: "120",
    desc: "Creamy, chilled, and made with 100% real mango pulp to beat the Chennai heat.",
    img: "https://images.unsplash.com/photo-1553530666-ba11a7da3888?w=500&auto=format&fit=crop&q=80",
    tag: "Summer Essential",
    color: "#fbbf24"
  },
  {
    id: "Tea",
    title: "Masala Tea",
    price: "40",
    desc: "Authentic ginger-infused chai to refresh your senses anytime of the day.",
    img: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?w=500&auto=format&fit=crop&q=80",
    tag: "Evening Special",
    color: "#b45309"
  }
];

export default function TipTopPremiumHero() {
  const [index, setIndex] = useState(0);
  const current = slides[index];

  const nextSlide = () => setIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  const prevSlide = () => setIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));

  return (
    <section className="relative min-h-screen bg-[#fafaf9] font-sans overflow-hidden select-none">
      
      {/* --- LAYER 1: ANIMATED BACKGROUND DESIGN --- */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          animate={{ x: [0, 100, 0], y: [0, 50, 0] }}
          transition={{ duration: 20, repeat: Infinity }}
          className="absolute -top-[10%] -left-[10%] w-[50%] h-[50%] bg-amber-200/40 blur-[120px] rounded-full" 
        />
        <motion.div 
          animate={{ x: [0, -80, 0], y: [0, 100, 0] }}
          transition={{ duration: 15, repeat: Infinity, delay: 2 }}
          className="absolute top-[40%] -right-[5%] w-[40%] h-[40%] bg-orange-100/50 blur-[100px] rounded-full" 
        />
        
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: `radial-gradient(#000 0.5px, transparent 0.5px)`, backgroundSize: '24px 24px' }} />
        
        <h1 className="absolute -bottom-10 left-1/2 -translate-x-1/2 text-[20vw] font-black text-black/[0.02] whitespace-nowrap uppercase">
          {current.id}
        </h1>
      </div>

      {/* --- LAYER 2: SIDE NAV (LEFT) --- */}
      <div className="absolute left-0 top-0 h-full w-24 hidden lg:flex flex-col justify-center items-center gap-16 z-40 border-r border-black/[0.03] bg-white/40 backdrop-blur-md">
        <div className="absolute top-10 flex flex-col items-center gap-2">
            <div className="w-10 h-10 bg-black rounded-xl flex items-center justify-center text-white font-black italic">T</div>
            <div className="w-[1px] h-20 bg-gradient-to-b from-black/20 to-transparent" />
        </div>
        
        {slides.map((slide, i) => (
          <button
            key={slide.id}
            onClick={() => setIndex(i)}
            className={`rotate-[-90deg] origin-center text-[11px] font-black uppercase tracking-[0.4em] transition-all duration-500 relative group ${
              index === i ? "text-black scale-110" : "text-slate-300 hover:text-slate-500"
            }`}
          >
            {slide.id}
            {index === i && <motion.span layoutId="activeLine" className="absolute -bottom-4 left-0 w-full h-[3px] bg-amber-500" />}
          </button>
        ))}
      </div>

      {/* --- LAYER 3: MAIN HERO CONTENT --- */}
      <div className="flex flex-col lg:flex-row items-center min-h-screen px-6 md:px-20 lg:pl-56 lg:pr-32 relative">
        
        {/* Image Section */}
        <div className="w-full lg:w-1/2 relative flex justify-center items-center order-2 lg:order-1 mt-10 lg:mt-0">
          {/* Black Polygon Backdrop */}
          <div className="absolute -left-20 lg:-left-32 top-[-5%] w-[120%] h-[110%] bg-[#0a0a0a] rounded-r-[5rem] lg:rounded-r-[8rem] z-0 shadow-2xl overflow-hidden">
             {/* உடைந்த கார்பன் ஃபைபர் லிங்கிற்குப் பதிலாக CSS கிராஸ் க்ரிட் பின்னணி */}
             <div className="absolute top-0 right-0 w-full h-full opacity-5 bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:14px_24px]" />
             <div className="absolute bottom-[-10%] left-[-10%] w-64 h-64 border-[40px] border-white/[0.03] rounded-full" />
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ x: -100, rotate: -15, opacity: 0, scale: 0.8 }}
              animate={{ x: 0, rotate: 0, opacity: 1, scale: 1 }}
              exit={{ x: 100, rotate: 15, opacity: 0, scale: 0.8 }}
              transition={{ type: "spring", damping: 18, stiffness: 90 }}
              className="relative z-10"
            >
              <img 
                src={current.img} 
                className="w-[280px] md:w-[400px] lg:w-[440px] h-[280px] md:h-[400px] lg:h-[440px] object-cover rounded-[3rem] shadow-2xl border-4 border-amber-500/20" 
                alt={current.title} 
              />
              
              {/* Floating Price Tag for Mobile/Tablet */}
              <motion.div 
                animate={{ y: [0, -10, 0] }} 
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -top-5 -right-5 bg-amber-500 text-black p-4 rounded-2xl font-black shadow-2xl lg:hidden"
              >
                ₹{current.price}
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Text Section */}
        <div className="w-full lg:w-1/2 lg:pl-16 z-10 text-center lg:text-left order-1 lg:order-2 py-10 lg:py-0 ">
          <AnimatePresence mode="wait">
            <motion.div key={index} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -30 }}>
              <h4 className="text-amber-600 font-black uppercase tracking-[0.5em] text-[10px] mb-6 flex items-center justify-center lg:justify-start gap-3">
                <span className="w-12 h-[1px] bg-amber-600/40"></span> {current.tag}
              </h4>
              
              <h1 className="text-5xl md:text-7xl lg:text-[6rem] font-black text-slate-900 leading-[0.95] mb-8 tracking-tighter uppercase relative">
                {current.title.split(' ')[0]} <br />
                <span className="font-serif italic font-light text-slate-400 normal-case ml-2">{current.title.split(' ')[1]}</span>
                <div className="absolute -top-10 -left-10 w-32 h-32 bg-amber-100 rounded-full -z-10 blur-2xl" />
              </h1>
        
              <p className="text-slate-400 text-sm md:text-base max-w-sm leading-relaxed mb-10 mx-auto lg:mx-0 font-medium italic border-l-2 border-amber-500/20 pl-6">
                {current.desc}
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-10">
                 <div className="relative group bottom-2">
                    <span className="text-slate-900 font-black text-6xl tracking-tighter italic">₹{current.price}</span>
                    <div className="absolute -bottom-2 left-0 w-full h-1 bg-amber-500/10 rounded-full overflow-hidden">
                        <motion.div initial={{ x: '-100%' }} animate={{ x: '100%' }} transition={{ repeat: Infinity, duration: 2 }} className="w-full h-full bg-amber-500" />
                    </div>
                 </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* --- LAYER 4: VERTICAL NAVIGATION CONTROLS --- */}
      <div className="absolute right-10 top-1/2 -translate-y-1/2 hidden xl:flex flex-col items-center gap-10 z-50">
        <div className="flex flex-col gap-5 bg-white/60 backdrop-blur-xl p-3 rounded-full border border-white shadow-[0_30px_60px_rgba(0,0,0,0.08)]">
          <button onClick={prevSlide} className="w-14 h-14 rounded-full border border-slate-100 flex items-center justify-center hover:bg-amber-500 hover:text-white transition-all bg-white shadow-sm">
            <FiArrowLeft className="rotate-90" />
          </button>
          
          <div className="flex flex-col gap-3 py-4 items-center">
            {slides.map((_, i) => (
              <motion.div 
                key={i} 
                animate={{ height: index === i ? 40 : 6, backgroundColor: index === i ? "#f59e0b" : "#e2e8f0" }}
                className="w-1.5 rounded-full transition-all duration-500" 
              />
            ))}
          </div>

          <button onClick={nextSlide} className="w-14 h-14 rounded-full border border-slate-100 flex items-center justify-center hover:bg-amber-500 hover:text-white transition-all bg-white shadow-sm">
            <FiArrowRight className="rotate-90" />
          </button>
        </div>
      </div>
        
      {/* --- LAYER 5: BOTTOM THUMBNAILS --- */}
      <div className="lg:absolute bottom-4 right-24 z-20">
        <div className="flex gap-6 px-6 overflow-x-auto lg:overflow-visible pb-10 scrollbar-hide">
          {slides.map((item, i) => (
            <motion.div
              key={item.id}
              onClick={() => setIndex(i)}
              whileHover={{ y: -10 }}
              className={`
                min-w-[220px] p-4 rounded-[2rem] cursor-pointer relative transition-all duration-700
                ${index === i ? "bg-white shadow-[0_40px_80px_rgba(0,0,0,0.1)] scale-105 z-10" : "bg-white/40 backdrop-blur-sm opacity-60 hover:opacity-100"}
              `}
            >
              <div className="flex items-center gap-4">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center overflow-hidden ${index === i ? "bg-amber-500 shadow-lg shadow-amber-500/30" : "bg-slate-100"}`}>
                  <img src={item.img} alt="" className="w-full h-full object-cover" />
                </div>
                <div className="text-left">
                  <h5 className={`text-[11px] font-black uppercase tracking-tighter ${index === i ? "text-slate-900" : "text-slate-400"}`}>{item.title}</h5>
                  <p className="text-amber-600 font-black text-xs">₹{item.price}</p>
                </div>
              </div>
              {index === i && (
                <motion.div layoutId="thumbIndicator" className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-12 h-1.5 bg-amber-500 rounded-full" />
              )}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Decorative Corner Label */}
      <div className="absolute bottom-10 left-10 hidden lg:block opacity-20">
         <p className="text-[10px] font-black uppercase tracking-[1em] rotate-[-90deg] origin-left">Premium Dining Experience</p>
      </div>

    </section>
  );
}