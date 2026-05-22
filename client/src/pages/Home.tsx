import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { AboutSection } from "@/components/sections/AboutSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { MenuSection } from "@/components/sections/MenuSection";
import { ReviewsSection } from "@/components/sections/ReviewsSection";

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-stone-950 text-white">
      <Header />

      <main>
        <HeroSection />

        <div className="site-textured-background">
          <AboutSection />
          <MenuSection />
          <ReviewsSection />
          <ContactSection />
        </div>
      </main>

      <Footer />
    </div>
  );
}
