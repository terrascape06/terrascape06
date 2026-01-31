"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, Clock, Shield, Warehouse, Armchair, Sun, ClipboardCheck } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function GestionContent() {
  return (
    <main className="min-h-screen bg-terra-white">
      <Header />
      
      {/* 1. Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://plus.unsplash.com/premium_photo-1724754742948-ba73240d9ab9?q=80&w=987&auto=format&fit=crop"
            alt="Gestion Terrasse"
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
            Gestion & Mise en place de terrasses
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-terra-gold text-xl md:text-2xl font-light tracking-widest uppercase mb-8"
          >
            Nice – Cannes – Monaco – Côte d’Azur
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
                "Garantir une terrasse parfaitement rangée, propre et prête à accueillir vos clients, <br className="hidden md:block"/> <span className="text-terra-gold font-bold">sans mobiliser votre personnel.</span>"
              </h2>
           </motion.div>
        </div>
      </section>

      {/* 3. Mode de Fonctionnement (Workflow) */}
      <section className="py-20 px-6 bg-terra-white relative overflow-hidden">
        <div className="container mx-auto max-w-6xl">
           <div className="text-center mb-16">
             <h3 className="text-3xl md:text-5xl font-bold text-terra-brown font-montserrat uppercase tracking-wider">
               Mode de Fonctionnement
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
                   Avant Ouverture
                 </div>
                 <div className="mt-6 mb-6 flex justify-center">
                    <div className="p-4 bg-terra-gold/10 rounded-full">
                       <Sun className="w-8 h-8 text-terra-gold" />
                    </div>
                 </div>
                 <ul className="space-y-3 text-gray-600 mb-6 min-h-[140px]">
                    <li className="flex gap-2"><span className="text-terra-gold">•</span> Mise en place complète du mobilier</li>
                    <li className="flex gap-2"><span className="text-terra-gold">•</span> Alignement des tables et chaises</li>
                    <li className="flex gap-2"><span className="text-terra-gold">•</span> Installation parasols, barrières, chauffages</li>
                    <li className="flex gap-2"><span className="text-terra-gold">•</span> Vérification stabilité et propreté</li>
                 </ul>
                 <div className="bg-terra-sand/20 p-3 rounded-lg text-center text-terra-brown font-bold text-sm">
                   Terrasse prête dès l'ouverture
                 </div>
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
                   Pendant le Service
                 </div>
                 <div className="mt-6 mb-6 flex justify-center">
                    <div className="p-4 bg-terra-brown/10 rounded-full">
                       <Clock className="w-8 h-8 text-terra-brown" />
                    </div>
                 </div>
                 <ul className="space-y-3 text-gray-600 mb-6 min-h-[140px]">
                    <li className="flex gap-2"><span className="text-terra-brown">•</span> Ajustement rapide du mobilier</li>
                    <li className="flex gap-2"><span className="text-terra-brown">•</span> Remise en ordre discrète</li>
                    <li className="flex gap-2"><span className="text-terra-brown">•</span> Intervention sans gêner les clients</li>
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
                   Après Service
                 </div>
                 <div className="mt-6 mb-6 flex justify-center">
                    <div className="p-4 bg-terra-gold/10 rounded-full">
                       <Warehouse className="w-8 h-8 text-terra-gold" />
                    </div>
                 </div>
                 <ul className="space-y-3 text-gray-600 mb-6 min-h-[140px]">
                    <li className="flex gap-2"><span className="text-terra-gold">•</span> Rangement sécurisé du mobilier</li>
                    <li className="flex gap-2"><span className="text-terra-gold">•</span> Nettoyage de surface</li>
                    <li className="flex gap-2"><span className="text-terra-gold">•</span> Sécurisation de la terrasse</li>
                    <li className="flex gap-2"><span className="text-terra-gold">•</span> Fermeture complète selon consignes</li>
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
                    <Armchair className="text-terra-gold h-8 w-8" />
                    Matériel Utilisé
                  </h3>
                  <ul className="space-y-4">
                     {[
                       "Chariots professionnels",
                       "Produits nettoyants normes CHR",
                       "Désinfectants homologués",
                       "Microfibres professionnelles",
                       "Matériel antidérapant",
                       "Équipement de Protection Individuelle"
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
                    <ClipboardCheck className="text-terra-gold h-8 w-8" />
                    Notre Approche
                  </h3>
                  <ul className="space-y-4">
                     {[
                       "Personnel formé et expérimenté",
                       "Tenue discrète et professionnelle",
                       "Intervention silencieuse",
                       "Respect de l’image de l’établissement",
                       "Autonomie totale"
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
              "Terrasse propre",
              "Mobilier parfaitement aligné",
              "Gain de temps pour votre équipe",
              "Image premium pour vos clients"
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
            href="/contact?subject=gestion"
            className="inline-flex items-center gap-3 bg-terra-gold text-white px-10 py-4 rounded-full font-bold hover:bg-white hover:text-terra-brown transition-all duration-300 shadow-xl"
          >
            Demander un devis
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
