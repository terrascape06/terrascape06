"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, Sparkles, Droplets, ShieldCheck, Trophy, Moon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function NettoyageContent() {
  return (
    <main className="min-h-screen bg-terra-white">
      <Header />
      
      {/* 1. Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1603712725038-e9334ae8f39f?q=80&w=2342&auto=format&fit=crop"
            alt="Nettoyage CHR"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-terra-white"></div>
        </div>

        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-4xl md:text-7xl font-bold font-montserrat uppercase tracking-wider text-white mb-6 leading-tight"
          >
            Nettoyage Professionnel CHR
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-terra-gold text-xl md:text-2xl font-light tracking-widest uppercase mb-8"
          >
            Restaurants – Bars – Clubs – Établissements de nuit
          </motion.p>
        </div>
      </section>

      {/* 2. Objectif Section */}
      <section className="py-20 px-6 bg-white relative">
        <div className="container mx-auto max-w-4xl text-center">
           <motion.div
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="relative z-10"
           >
              <div className="w-20 h-1 bg-terra-gold mx-auto mb-10 rounded-full"></div>
              <h2 className="text-2xl md:text-4xl font-medium text-terra-brown leading-relaxed font-montserrat">
                "Garantir une <span className="text-terra-gold font-bold">hygiène irréprochable</span> de vos espaces clients et professionnels, avant et après service."
              </h2>
           </motion.div>
        </div>
      </section>

      {/* 3. Mode de Fonctionnement (Workflow) */}
      <section className="py-20 px-6 bg-terra-white relative overflow-hidden">
        <div className="container mx-auto max-w-6xl">
           <div className="text-center mb-16">
             <h3 className="text-3xl md:text-5xl font-bold text-terra-brown font-montserrat uppercase tracking-wider">
               Protocole d'Intervention
             </h3>
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Step 1 */}
              <motion.div 
                 initial={{ opacity: 0, y: 30 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ delay: 0.1 }}
                 className="bg-white p-8 rounded-2xl shadow-xl border-t-4 border-terra-gold relative group hover:-translate-y-2 transition-transform duration-300"
              >
                 <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-terra-brown text-white px-4 py-1 rounded-full text-sm font-bold tracking-widest uppercase shadow-md">
                   Avant Service
                 </div>
                 <div className="mt-6 mb-6 flex justify-center">
                    <div className="p-4 bg-terra-gold/10 rounded-full">
                       <Sparkles className="w-8 h-8 text-terra-gold" />
                    </div>
                 </div>
                 <ul className="space-y-3 text-gray-600 mb-6 min-h-[140px]">
                    <li className="flex gap-2"><span className="text-terra-gold">•</span> Sols (aspiration / lavage)</li>
                    <li className="flex gap-2"><span className="text-terra-gold">•</span> Sanitaires</li>
                    <li className="flex gap-2"><span className="text-terra-gold">•</span> Espaces clients</li>
                    <li className="flex gap-2"><span className="text-terra-gold">•</span> Surfaces de contact</li>
                    <li className="flex gap-2"><span className="text-terra-gold">•</span> Vérification propreté générale</li>
                 </ul>
              </motion.div>

              {/* Step 2 */}
              <motion.div 
                 initial={{ opacity: 0, y: 30 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ delay: 0.2 }}
                 className="bg-white p-8 rounded-2xl shadow-xl border-t-4 border-terra-brown relative group hover:-translate-y-2 transition-transform duration-300"
              >
                 <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-terra-white text-terra-brown border border-terra-brown px-4 py-1 rounded-full text-sm font-bold tracking-widest uppercase shadow-md">
                   Après Service
                 </div>
                 <div className="mt-6 mb-6 flex justify-center">
                    <div className="p-4 bg-terra-brown/10 rounded-full">
                       <Droplets className="w-8 h-8 text-terra-brown" />
                    </div>
                 </div>
                 <ul className="space-y-3 text-gray-600 mb-6 min-h-[140px]">
                    <li className="flex gap-2"><span className="text-terra-brown">•</span> Débarrassage complet</li>
                    <li className="flex gap-2"><span className="text-terra-brown">•</span> Désinfection zones sensibles</li>
                    <li className="flex gap-2"><span className="text-terra-brown">•</span> Nettoyage sols intensif</li>
                    <li className="flex gap-2"><span className="text-terra-brown">•</span> Gestion des déchets</li>
                    <li className="flex gap-2"><span className="text-terra-brown">•</span> Remise à zéro de l'espace</li>
                 </ul>
              </motion.div>

              {/* Step 3 */}
              <motion.div 
                 initial={{ opacity: 0, y: 30 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ delay: 0.3 }}
                 className="bg-white p-8 rounded-2xl shadow-xl border-t-4 border-terra-gold relative group hover:-translate-y-2 transition-transform duration-300"
              >
                 <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-terra-brown text-white px-4 py-1 rounded-full text-sm font-bold tracking-widest uppercase shadow-md">
                   Nuit / Tôt Matin
                 </div>
                 <div className="mt-6 mb-6 flex justify-center">
                    <div className="p-4 bg-terra-gold/10 rounded-full">
                       <Moon className="w-8 h-8 text-terra-gold" />
                    </div>
                 </div>
                 <ul className="space-y-3 text-gray-600 mb-6 min-h-[140px]">
                    <li className="flex gap-2"><span className="text-terra-gold">•</span> Intervention sans déranger l'activité</li>
                    <li className="flex gap-2"><span className="text-terra-gold">•</span> Respect strict des horaires</li>
                    <li className="flex gap-2"><span className="text-terra-gold">•</span> Site prêt pour ouverture</li>
                 </ul>
              </motion.div>
           </div>
        </div>
      </section>

      {/* 4. Technical Section */}
      <section className="py-20 px-6 bg-white relative">
         <div className="container mx-auto max-w-6xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
               {/* Left: Matériel */}
               <motion.div 
                 initial={{ opacity: 0, x: -50 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 viewport={{ once: true }}
                 className="bg-terra-sand/10 p-10 rounded-3xl"
               >
                  <h3 className="text-2xl font-bold text-terra-brown mb-8 flex items-center gap-3 font-montserrat">
                    <ShieldCheck className="text-terra-gold h-8 w-8" />
                    Équipement Pro
                  </h3>
                  <ul className="space-y-4">
                     {[
                       "Autolaveuse professionnelle",
                       "Aspirateurs industriels",
                       "Produits désinfectants normes HACCP",
                       "Nettoyants écologiques",
                       "Microfibres codifiées (code couleur)",
                       "EPI (Équipement Protection Individuelle)"
                     ].map((item, i) => (
                       <li key={i} className="flex items-center gap-4 text-gray-700 font-medium">
                         <div className="h-2 w-2 bg-terra-gold rounded-full"></div>
                         {item}
                       </li>
                     ))}
                  </ul>
               </motion.div>

               {/* Right: Mode de Travail */}
               <motion.div 
                 initial={{ opacity: 0, x: 50 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 viewport={{ once: true }}
                 className="bg-terra-sand/10 p-10 rounded-3xl"
               >
                  <h3 className="text-2xl font-bold text-terra-brown mb-8 flex items-center gap-3 font-montserrat">
                    <Trophy className="text-terra-gold h-8 w-8" />
                    Standards de Qualité
                  </h3>
                  <ul className="space-y-4">
                     {[
                       "Respect normes hygiène CHR",
                       "Personnel discret et ponctuel",
                       "Aucune sous-traitance",
                       "Procédures internes strictes",
                       "Contrôle qualité régulier"
                     ].map((item, i) => (
                       <li key={i} className="flex items-center gap-4 text-gray-700 font-medium">
                         <div className="h-2 w-2 bg-terra-brown rounded-full"></div>
                         {item}
                       </li>
                     ))}
                  </ul>
               </motion.div>
            </div>
         </div>
      </section>

      {/* 5. Promise / Result */}
      <section className="py-24 px-6 bg-terra-brown relative overflow-hidden text-center text-white">
        <div className="container mx-auto max-w-4xl relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold font-montserrat mb-12">RÉSULTAT GARANTI</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            {[
              "Établissement propre et sain",
              "Image professionnelle",
              "Respect normes d’hygiène",
              "Sérénité totale pour le gérant"
            ].map((benefit, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col items-center gap-4"
              >
                <CheckCircle className="w-12 h-12 text-terra-gold" />
                <span className="text-lg font-medium">{benefit}</span>
              </motion.div>
            ))}
          </div>

          <Link
            href="/contact?subject=nettoyage"
            className="inline-flex items-center gap-3 bg-terra-gold text-white px-10 py-4 rounded-full font-bold hover:bg-white hover:text-terra-brown transition-all duration-300 shadow-xl"
          >
            Obtenir un devis nettoyage
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
