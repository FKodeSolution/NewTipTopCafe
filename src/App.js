import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

/* ===== COMPONENTS ===== */
import Navbar from "./component/Navbar";
import HeroSection from "./component/home";
import AboutUs from "./component/AboutUs";
import MenuHighlights from "./component/MenuHighlights";
import WhyChooseUs from "./component/WhyChooseUs";
import ReviewPage from "./component/ReviewPage";
import ContactUs from "./component/contactus";
import Footer from "./component/Footer";
import InteractiveMenu from "./component/InteractiveMenu"; // ✅ Capital letter

/* ===== HOME PAGE ===== */
function Home() {
  return (
    <>
      <Navbar />

      <HeroSection />
      <AboutUs />
      <InteractiveMenu />   {/* ✅ Correct usage */}
      <MenuHighlights />
      <WhyChooseUs />
      <ReviewPage />
      <ContactUs />
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        {/* HOME / LANDING PAGE */}
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}
