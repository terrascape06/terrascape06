import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/Hero";
import ServicesSection from "@/components/sections/Services";
import AboutSection from "@/components/sections/About";
import ContactSection from "@/components/sections/Contact";
import IntroLoader from "@/components/ui/IntroLoader";
import { getDictionary } from "@/get-dictionary";

export default async function Home({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang as 'fr' | 'en');

  return (
    <IntroLoader>
      <Header dict={dict.navigation} lang={lang} />
      <main>
        <HeroSection dict={dict.hero} lang={lang} />
        <ServicesSection dict={dict.services} lang={lang} />
        <AboutSection dict={dict.about} lang={lang} />
        <ContactSection dict={dict.contact} />
      </main>
      <Footer dict={dict.footer} lang={lang} />
    </IntroLoader>
  );
}
