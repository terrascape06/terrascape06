import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/Hero";
import ServicesSection from "@/components/sections/Services";
import AboutSection from "@/components/sections/About";
import Testimonials from "@/components/sections/Testimonials";
import ContactSection from "@/components/sections/Contact";
import IntroLoader from "@/components/ui/IntroLoader";

export default function Home() {
  return (
    <IntroLoader>
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <AboutSection />
        <Testimonials />
        <ContactSection />
      </main>
      <Footer />
    </IntroLoader>
  );
}
