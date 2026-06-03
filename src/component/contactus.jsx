import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import { SiSwiggy, SiZomato } from "react-icons/si";

export default function ContactAndCTA() {
  const [showOrderOptions, setShowOrderOptions] = useState(false);
  
  const phoneNumber = "919150282859";
  const shopName = "New Tip Top Cafe Anna Nagar";
  const mapLink = "https://www.google.com/maps/dir//New+Tip+Top+Cafe+Anna+Nagar+Chennai";

  const platforms = [
    {
      name: "WhatsApp",
      icon: <FaWhatsapp />,
      color: "bg-[#25D366]",
      link: `https://wa.me/${phoneNumber}?text=Hello%20Tip%20Top!%20I%20want%20to%20order.`,
    },
    {
      name: "Swiggy",
      icon: <SiSwiggy />,
      color: "bg-[#FC8019]",
      link: `https://www.swiggy.com/search?query=${encodeURIComponent(shopName)}`,
    },
    {
      name: "Zomato",
      icon: <SiZomato />,
      color: "bg-[#E23744]",
      link: `https://www.zomato.com/chennai/search?q=${encodeURIComponent(shopName)}`,
    },
  ];

  return (
    <section id="contact" className="bg-slate-50 py-24 px-6 overflow-hidden relative">
      <div className="max-w-7xl mx-auto">
        
        {/* --- LOCATION & CONTACT GRID --- */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          
          {/* LEFT: MAP CARD */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative h-[500px] rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white group"
          >
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.297434934149!2d80.2104163!3d13.080556!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52641f6920f663%3A0xc6c76673577d61b!2sNew%20Tip%20Top%20Cafe!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
              className="w-full h-full border-0 grayscale group-hover:grayscale-0 transition-all duration-700"
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>

            <div className="absolute top-8 left-8 bg-white/90 backdrop-blur-md p-6 rounded-3xl shadow-xl max-w-xs border border-white/50">
              <h4 className="font-black text-slate-900 mb-1 tracking-tighter uppercase text-xs">Our Spot</h4>
              <p className="text-slate-600 font-medium text-sm leading-relaxed">
                New Tip Top Cafe, Anna Nagar, Chennai (Near Pathmavathi Travels)
              </p>
            </div>
          </motion.div>

          {/* RIGHT: CONTACT DETAILS */}
          <div className="flex flex-col justify-center space-y-10 lg:pl-10">
            <div>
              <motion.h4 className="text-amber-600 font-black uppercase tracking-[0.4em] text-xs mb-4">Reach Out</motion.h4>
              <motion.h2 className="text-4xl md:text-6xl font-black text-slate-900 leading-tight tracking-tighter">
                Visit Us in <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-700">Anna Nagar.</span>
              </motion.h2>
              <p className="mt-6 text-slate-500 text-lg font-medium leading-relaxed">
                Easy to reach, perfect hangout spot. Open 24x7 for all your food cravings.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <motion.a 
                href={`tel:+${phoneNumber}`}
                whileHover={{ y: -5 }}
                className="p-8 bg-white rounded-[2.5rem] shadow-sm hover:shadow-xl transition-all border border-slate-100 group"
              >
                <div className="w-12 h-12 bg-green-100 rounded-2xl flex items-center justify-center text-2xl mb-4 group-hover:bg-green-500 group-hover:text-white transition-colors">📞</div>
                <h5 className="font-black text-slate-900 uppercase tracking-widest text-[10px] mb-1">Call Us</h5>
                <p className="text-xl font-black text-slate-700">+91 91502 82859</p>
              </motion.a>

              <motion.div 
                whileHover={{ y: -5 }}
                className="p-8 bg-white rounded-[2.5rem] shadow-sm hover:shadow-xl transition-all border border-slate-100 group cursor-default"
              >
                <div className="w-12 h-12 bg-amber-100 rounded-2xl flex items-center justify-center text-2xl mb-4 group-hover:bg-amber-500 group-hover:text-white transition-colors">⚡</div>
                <h5 className="font-black text-slate-900 uppercase tracking-widest text-[10px] mb-1">Status</h5>
                <p className="text-xl font-black text-slate-700">Open 24/7</p>
              </motion.div>
            </div>
          </div>
        </div>

        {/* --- CALL TO ACTION (CTA) BAR --- */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="relative bg-slate-900 rounded-[3.5rem] p-10 md:p-16 overflow-hidden text-center"
        >
          <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/20 blur-[100px] rounded-full" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-green-500/10 blur-[100px] rounded-full" />

          <div className="relative z-10 space-y-8">
            <h3 className="text-amber-400 font-black uppercase tracking-[0.3em] text-xs">Ready to taste?</h3>
            <h2 className="text-3xl md:text-6xl font-black text-white tracking-tighter max-w-4xl mx-auto leading-tight">
              Looking for the <span className="underline decoration-amber-500 decoration-4 underline-offset-8">Best Cafe Near You?</span>
            </h2>

            <div className="flex flex-wrap justify-center gap-6 pt-6">
              <a href={`tel:+${phoneNumber}`} className="px-10 py-5 bg-amber-500 hover:bg-amber-400 text-black font-black uppercase tracking-widest text-xs rounded-2xl transition-all">
                Call Now
              </a>
              <a href={mapLink} target="_blank" rel="noreferrer" className="px-10 py-5 bg-white hover:bg-slate-100 text-black font-black uppercase tracking-widest text-xs rounded-2xl transition-all">
                Get Directions
              </a>
              <button 
                onClick={() => setShowOrderOptions(true)}
                className="px-10 py-5 bg-green-600 hover:bg-green-500 text-white font-black uppercase tracking-widest text-xs rounded-2xl transition-all shadow-2xl shadow-green-600/20"
              >
                Order Online
              </button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* --- ORDER OPTIONS POPUP MODAL --- */}
      <AnimatePresence>
        {showOrderOptions && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] flex items-center justify-center p-6 bg-black/90 backdrop-blur-md"
            onClick={() => setShowOrderOptions(false)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-[#111] border border-white/10 p-8 rounded-[2.5rem] w-full max-w-sm text-center"
            >
              <h3 className="text-white font-black italic text-xl mb-2 uppercase tracking-tighter">Order From</h3>
              <p className="text-white/40 text-[10px] uppercase tracking-widest mb-8">Fastest Delivery in Anna Nagar</p>
              
              <div className="flex flex-col gap-4">
                {platforms.map((p) => (
                  <a
                    key={p.name}
                    href={p.link}
                    target="_blank"
                    rel="noreferrer"
                    className={`${p.color} flex items-center justify-between px-8 py-5 rounded-2xl text-white font-black uppercase tracking-widest text-[10px] hover:scale-105 transition-all shadow-lg`}
                  >
                    <span>{p.name}</span>
                    <span className="text-xl">{p.icon}</span>
                  </a>
                ))}
              </div>

              <button 
                onClick={() => setShowOrderOptions(false)}
                className="mt-8 text-white/30 text-[10px] uppercase font-bold hover:text-white transition-colors"
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}