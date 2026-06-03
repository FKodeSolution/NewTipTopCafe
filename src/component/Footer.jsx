import React from "react";
import { FiPhoneCall, FiMail, FiMapPin } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { SiSwiggy, SiZomato } from "react-icons/si";

export default function Footer() {
  const phoneNumber = "919150282859";
  const shopName = "New Tip Top Cafe Anna Nagar";

  return (
    <footer className="bg-black text-slate-300 pt-20 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">

        {/* ===== TOP GRID ===== */}
        <div className="grid md:grid-cols-4 gap-12 pb-16 border-b border-white/10">

          {/* BRAND */}
          <div className="space-y-4">
            <h3 className="text-2xl font-black text-white italic tracking-tighter">
              New Tip Top <span className="text-amber-500">Cafe</span>
            </h3>
            <p className="text-sm leading-relaxed text-slate-400">
              A premium 24x7 café in Anna Nagar serving fresh tea, coffee,
              milkshakes, falooda, momos and crispy fried chicken.
            </p>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-[10px]">
              Quick Links
            </h4>
            <ul className="space-y-4 text-sm font-medium">
              <li><a href="#home" className="hover:text-amber-500 transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-amber-500 transition-colors">About Us</a></li>
              <li><a href="#menu" className="hover:text-amber-500 transition-colors">Menu</a></li>
              <li><a href="#contact" className="hover:text-amber-500 transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* CONTACT INFO */}
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-[10px]">
              Contact Info
            </h4>
            <div className="space-y-4 text-sm">
              <div className="flex items-center gap-3 group">
                <FiPhoneCall className="text-amber-500 group-hover:scale-110 transition-transform" />
                <a href={`tel:+${phoneNumber}`} className="hover:text-white transition-colors">+91 91502 82859</a>
              </div>
              <div className="flex items-center gap-3 group">
                <FiMail className="text-amber-500 group-hover:scale-110 transition-transform" />
                <a href="mailto:tiptopcafe@gmail.com" className="hover:text-white transition-colors">tiptopcafe@gmail.com</a>
              </div>
              <div className="flex items-center gap-3 group">
                <FiMapPin className="text-amber-500 group-hover:scale-110 transition-transform" />
                <span className="hover:text-white transition-colors">Anna Nagar, Chennai</span>
              </div>
            </div>
          </div>

          {/* DELIVERY PARTNERS */}
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-[10px]">
              Order From
            </h4>
            <div className="flex flex-col gap-3">
              {/* WHATSAPP */}
              <a
                href={`https://wa.me/${phoneNumber}?text=Hello%20Tip%20Top!%20I%20want%20to%20order.`}
                target="_blank" 
                rel="noreferrer"
                className="group flex items-center justify-between bg-[#25D366]/10 border border-[#25D366]/20 hover:bg-[#25D366] text-[#25D366] hover:text-white px-5 py-3 rounded-xl transition-all duration-300"
              >
                <span className="font-bold text-xs">WhatsApp</span>
                <FaWhatsapp className="text-xl group-hover:scale-110 transition-transform" />
              </a>

              {/* SWIGGY */}
              <a
                href={`https://www.swiggy.com/search?query=${encodeURIComponent(shopName)}`}
                target="_blank" 
                rel="noreferrer"
                className="group flex items-center justify-between bg-[#FC8019]/10 border border-[#FC8019]/20 hover:bg-[#FC8019] text-[#FC8019] hover:text-white px-5 py-3 rounded-xl transition-all duration-300"
              >
                <span className="font-bold text-xs">Swiggy</span>
                <SiSwiggy className="text-xl group-hover:scale-110 transition-transform" />
              </a>

              {/* ZOMATO */}
              <a
                href={`https://www.zomato.com/chennai/search?q=${encodeURIComponent(shopName)}`}
                target="_blank" 
                rel="noreferrer"
                className="group flex items-center justify-between bg-[#E23744]/10 border border-[#E23744]/20 hover:bg-[#E23744] text-[#E23744] hover:text-white px-5 py-3 rounded-xl transition-all duration-300"
              >
                <span className="font-bold text-xs">Zomato</span>
                <SiZomato className="text-xl group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>

        </div>

        {/* ===== BOTTOM BAR ===== */}
        <div className="py-8 flex flex-col md:flex-row items-center justify-between gap-4 text-[10px] text-slate-600 uppercase tracking-widest font-bold">
          <p>© {new Date().getFullYear()} New Tip Top Cafe.</p>

          <div className="flex gap-8">
            <span className="hover:text-amber-500 cursor-pointer transition-colors">Terms</span>
            <span className="hover:text-amber-500 cursor-pointer transition-colors">Privacy</span>
            <span className="hover:text-amber-500 cursor-pointer transition-colors">Cookies</span>
          </div>
        </div>
      </div>
    </footer>
  );
}