"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin } from "lucide-react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    establishment: "",
    phone: "",
    serviceType: "installation",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-24 bg-terra-brown relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-terra-gold/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-terra-gold/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Contact Info & Vibe */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-white space-y-8 pt-8"
          >
            <div>
              <h2 className="text-3xl md:text-5xl font-bold font-montserrat mb-4 text-white leading-tight">
                Prêt à sublimer votre établissement ?
              </h2>
              <p className="text-xl text-terra-sand/80">
                Devis gratuit sous 24h pour les professionnels de la Côte d&apos;Azur.
              </p>
            </div>

            <div className="space-y-6 pt-8">
              {/* Phone */}
              <a 
                href="tel:+33766025027" 
                className="flex items-center group"
              >
                <div className="w-12 h-12 bg-terra-gold/10 rounded-full flex items-center justify-center mr-4 group-hover:bg-terra-gold transition-colors duration-300">
                  <Phone className="w-6 h-6 text-terra-gold group-hover:text-white transition-colors duration-300" />
                </div>
                <div>
                  <p className="text-sm text-terra-sand/60 mb-1 tracking-wider uppercase">Nous appeler</p>
                  <p className="text-2xl font-bold text-terra-gold group-hover:text-white transition-colors duration-300">
                    +33 7 66 02 50 27
                  </p>
                </div>
              </a>

              {/* Email */}
              <a 
                href="mailto:contact@terrascape.fr" 
                className="flex items-center group"
              >
                <div className="w-12 h-12 bg-terra-gold/10 rounded-full flex items-center justify-center mr-4 group-hover:bg-terra-gold transition-colors duration-300">
                  <Mail className="w-6 h-6 text-terra-gold group-hover:text-white transition-colors duration-300" />
                </div>
                <div>
                  <p className="text-sm text-terra-sand/60 mb-1 tracking-wider uppercase">Nous écrire</p>
                  <p className="text-lg text-white group-hover:text-terra-gold transition-colors duration-300">
                    contact@terrascape.fr
                  </p>
                </div>
              </a>

              {/* Location */}
              <div className="flex items-center">
                <div className="w-12 h-12 bg-terra-gold/10 rounded-full flex items-center justify-center mr-4">
                  <MapPin className="w-6 h-6 text-terra-gold" />
                </div>
                <div>
                  <p className="text-sm text-terra-sand/60 mb-1 tracking-wider uppercase">Zone d&apos;intervention</p>
                  <p className="text-lg text-white">
                    Nice • Cannes • Monaco • Antibes
                  </p>
                </div>
              </div>
            </div>

            {/* Placeholder QR Code / Map Visual */}
            <div className="mt-12 p-1 rounded-xl border border-terra-gold/30 inline-block">
              <div className="bg-terra-white/5 rounded-lg p-6 backdrop-blur-sm">
                <p className="text-terra-gold text-lg font-semibold tracking-wider text-center">
                  SCANNEZ POUR ENREGISTRER<br />LA FICHE CONTACT
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Pro Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white p-8 md:p-10 rounded-2xl shadow-2xl"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-terra-brown font-bold mb-2 ml-1">
                  Nom & Prénom
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border-b-2 border-slate-200 bg-slate-50 focus:border-terra-gold focus:outline-none focus:bg-white transition-all duration-300"
                  placeholder="Votre nom complet"
                  required
                />
              </div>

              <div>
                <label htmlFor="establishment" className="block text-terra-brown font-bold mb-2 ml-1">
                  Nom de l&apos;établissement
                </label>
                <input
                  type="text"
                  id="establishment"
                  name="establishment"
                  value={formData.establishment}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border-b-2 border-slate-200 bg-slate-50 focus:border-terra-gold focus:outline-none focus:bg-white transition-all duration-300"
                  placeholder="Restaurant, Plage, Club..."
                  required
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-terra-brown font-bold mb-2 ml-1">
                  Téléphone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border-b-2 border-slate-200 bg-slate-50 focus:border-terra-gold focus:outline-none focus:bg-white transition-all duration-300"
                  placeholder="06 00 00 00 00"
                  required
                />
              </div>

              <div>
                <label htmlFor="serviceType" className="block text-terra-brown font-bold mb-2 ml-1">
                  Type de prestation
                </label>
                <div className="relative">
                  <select
                    id="serviceType"
                    name="serviceType"
                    value={formData.serviceType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border-b-2 border-slate-200 bg-slate-50 focus:border-terra-gold focus:outline-none focus:bg-white transition-all duration-300 appearance-none text-terra-brown"
                  >
                    <option value="installation">Installation & Rangement</option>
                    <option value="nettoyage">Nettoyage Haute-Pression</option>
                    <option value="evenementiel">Événementiel & Décoration</option>
                    <option value="autre">Autre demande</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-terra-brown">
                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
                    </svg>
                  </div>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-terra-brown font-bold mb-2 ml-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border-b-2 border-slate-200 bg-slate-50 focus:border-terra-gold focus:outline-none focus:bg-white resize-none transition-all duration-300"
                  placeholder="Détaillez votre besoin..."
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-terra-gold text-white py-4 rounded-xl hover:bg-terra-brown hover:shadow-lg transition-all duration-300 font-bold text-lg uppercase tracking-wide transform hover:-translate-y-1"
              >
                Recevoir mon devis
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
