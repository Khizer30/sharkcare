import { AboutSection } from "@shared/components/home/AboutSection";
import { Hero } from "@shared/components/home/Hero";
import { WhatWeDoSection } from "@shared/components/home/WhatWeDoSection";

export default function Home() {
  return (
    <main className="flex flex-1 flex-col">
      <Hero />
      <AboutSection />
      <WhatWeDoSection />
    </main>
  );
}
