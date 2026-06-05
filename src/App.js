import React from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./component/Navbar";
import HeroSection from "./component/home";
import AboutUs from "./component/AboutUs";
import MenuHighlights from "./component/MenuHighlights";
import ContactUs from "./component/contactus";
import Footer from "./component/Footer";
import ScrollToTop from "./component/ScrollToTop";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <ScrollToTop />

      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<HeroSection />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/menu" element={<MenuHighlights />} />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;