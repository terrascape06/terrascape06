"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

interface ServicesHubContentProps {
  navigationDict: any;
  footerDict: any;
  servicesDict: any;
  lang: string;
}

export default function ServicesHubContent({ navigationDict, footerDict, servicesDict, lang }: ServicesHubContentProps) {
  return (
    <main className="min-h-screen bg-terra-white">
      <Header dict={navigationDict} lang={lang} />
      
      {/* 1. Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        {/* Parallax Background */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/services/plage.jpg"
            alt="Atmosphère luxe en soirée"
            fill
            className="object-cover"
            priority
          />
          {/* Dark Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-terra-white"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center px-4">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-3xl md:text-6xl font-bold font-montserrat uppercase tracking-wider text-white mb-6"
          >
            {servicesDict.hero.title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-white/90 text-xl md:text-2xl font-light tracking-wide max-w-3xl mx-auto mb-8"
          >
            {servicesDict.hero.subtitle}
          </motion.p>
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: "100px" }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="h-1 bg-terra-gold mx-auto rounded-full"
          />
        </div>
      </section>

      {/* 2. Service Hub Grid */}
      <section className="py-16 md:py-24 px-6 relative">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {servicesDict.items.map((service: any, index: number) => {
              const imageMap: Record<string, string> = {
                gestion: "/images/services/gestion/image-terasse-plage.jpeg",
                nettoyage: "/images/services/nettoyage/nettoyage.jpg",
                events: "/images/services/evenements/fete.jpg"
              };
              
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="group relative h-[500px] md:h-[600px] rounded-2xl overflow-hidden cursor-pointer shadow-2xl"
                >
                  <Link href={`/${lang}${service.link}`} className="block h-full w-full">
                    {/* Background Image with Zoom Effect */}
                    <div className="absolute inset-0 z-0">
                      <Image
                        src={imageMap[service.id]}
                        alt={service.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent transition-opacity duration-300 group-hover:opacity-90"></div>
                    </div>

                    {/* Content */}
                    <div className="absolute inset-0 z-10 flex flex-col justify-end p-8 md:p-12 text-white">
                      

                      <h2 className="text-3xl font-bold font-montserrat mb-3 group-hover:text-terra-gold transition-colors duration-300">
                        {service.title}
                      </h2>
                      
                      <p className="text-xl font-medium text-white/90 mb-4 border-l-4 border-terra-gold pl-4">
                        {service.subtitle}
                      </p>

                      <p className="text-gray-300 leading-relaxed mb-8 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-100 hidden md:block">
                        {service.description}
                      </p>

                      <div className="flex items-center gap-2 text-terra-gold font-bold uppercase tracking-widest text-sm group-hover:gap-4 transition-all duration-300">
                        {servicesDict.ctaLink}
                        <ArrowRight className="w-5 h-5" />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. Global Call to Action */}
      <section className="py-16 md:py-24 bg-terra-brown text-white text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold font-montserrat mb-6">
            {servicesDict.callToAction.title}
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto mb-10">
            {servicesDict.callToAction.description}
          </p>
          <Link
            href={`/${lang}/contact`}
            className="inline-flex items-center gap-3 bg-terra-gold text-white px-10 py-4 rounded-full font-bold hover:bg-white hover:text-terra-brown transition-all duration-300 shadow-xl"
          >
            {servicesDict.callToAction.button}
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      <Footer dict={footerDict} lang={lang} />
    </main>
  );
}
