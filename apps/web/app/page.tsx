import { AboutSection } from "@shared/components/home/AboutSection";
import { ContactSection } from "@shared/components/home/ContactSection";
import { GallerySection } from "@shared/components/home/GallerySection";
import { Hero } from "@shared/components/home/Hero";
import { WhatWeDoSection } from "@shared/components/home/WhatWeDoSection";
import { Footer } from "@shared/components/layout/Footer";
import { Navbar } from "@shared/components/layout/Navbar";

export default function Home() {
  return (
    <div id="top" className="flex min-h-full flex-col bg-[#FAFAF7] text-[#12151A]">
      <Navbar />
      <main className="flex flex-1 flex-col">
        <Hero />
        <AboutSection />
        <WhatWeDoSection />
        <GallerySection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
