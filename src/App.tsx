/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Header from "./components/Header";
import Hero from "./components/Hero";
import Specialties from "./components/Specialties";
import About from "./components/About";
import Differentials from "./components/Differentials";
import Testimonials from "./components/Testimonials";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";

export default function App() {
  return (
    <div className="relative min-h-screen bg-white font-sans antialiased selection:bg-brand-primary/20 selection:text-brand-primary">
      {/* Sticky Header */}
      <Header />

      {/* Main Sections */}
      <main>
        {/* 1. Hero Section */}
        <Hero />

        {/* 2. Specialties Section */}
        <Specialties />

        {/* 3. About Section */}
        <About />

        {/* 4. Differentials Section */}
        <Differentials />

        {/* 5. Testimonials Section */}
        <Testimonials />

        {/* 6. CTA final Section */}
        <CTA />
      </main>

      {/* Footer Section */}
      <Footer />

      {/* Floating CTA FAB */}
      <WhatsAppButton />
    </div>
  );
}

