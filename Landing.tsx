import React from "react";
// Default Exports
import Navbar from "./src/components/landing/Navbar";
import Hero from "./src/components/landing/Hero";
import About from "./src/components/landing/About";

// Named Exports (Updated with relative paths)
import { Services } from "./src/components/landing/Services";
import { WhyUs } from "./src/components/landing/WhyUs";
import { Portfolio } from "./src/components/landing/Portfolio";
import { Pricing } from "./src/components/landing/Pricing";
import { CTABanner } from "./src/components/landing/CTABanner";
import { Contact } from "./src/components/landing/Contact";
import { Footer } from "./src/components/landing/Footer";
import { ChatbotWidget } from "./src/components/landing/ChatbotWidget";

const Landing = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <WhyUs />
      <Portfolio />
      <Pricing />
      <CTABanner />
      <Contact />
      <Footer />
      <ChatbotWidget />
    </>
  );
};

export default Landing;
