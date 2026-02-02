"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Send, ChevronDown, ChevronUp } from "lucide-react";
import Image from "next/image";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

interface ContactContentProps {
  navigationDict: any;
  footerDict: any;
  contactDict: any;
  lang: string;
}

export default function ContactContent({ navigationDict, footerDict, contactDict, lang }: ContactContentProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    establishment: "",
    phone: "",
    serviceType: "installation",
    message: ""
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({
          name: "",
          email: "",
          establishment: "",
          phone: "",
          serviceType: "installation",
          message: ""
        });
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <main className="min-h-screen bg-terra-white">
      <Header dict={navigationDict} lang={lang} />
      
      {/* 1. Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        {/* Parallax Background */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/contact/reception-hotel.jpg"
            alt="Réception établissement de luxe"
            fill
            className="object-cover"
            priority
          />
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center px-4">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-3xl md:text-5xl font-bold font-montserrat uppercase tracking-wider text-white mb-4"
          >
            {contactDict.hero.title}
          </motion.h1>
          <motion.div 
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             transition={{ duration: 0.8, delay: 0.3 }}
             className="text-white/80 text-lg md:text-xl font-light tracking-wide"
          >
            {contactDict.hero.subtitle}
          </motion.div>
        </div>
      </section>

      {/* 2. Main Content */}
      <section className="py-16 md:py-24 px-6">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            
            {/* Left Column: Contact Info & Map */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
               <h2 className="text-3xl font-bold text-terra-brown mb-8 font-montserrat">
                {contactDict.contact.title}
              </h2>
              <div className="space-y-8 mb-12">
                <a href="tel:+33766025027" className="flex items-center group">
                  <div className="w-14 h-14 bg-terra-gold/10 rounded-full flex items-center justify-center mr-6 group-hover:bg-terra-gold transition-colors duration-300">
                    <Phone className="w-6 h-6 text-terra-gold group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <p className="text-terra-brown/60 text-sm uppercase tracking-widest mb-1">{contactDict.contact.phoneLabel}</p>
                    <p className="text-2xl font-bold text-terra-brown group-hover:text-terra-gold transition-colors">
                      +33 7 66 02 50 27
                    </p>
                  </div>
                </a>

                <a href="mailto:contact@terrascape.fr" className="flex items-center group">
                  <div className="w-14 h-14 bg-terra-gold/10 rounded-full flex items-center justify-center mr-6 group-hover:bg-terra-gold transition-colors duration-300">
                    <Mail className="w-6 h-6 text-terra-gold group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <p className="text-terra-brown/60 text-sm uppercase tracking-widest mb-1">{contactDict.contact.emailLabel}</p>
                    <p className="text-xl text-terra-brown group-hover:text-terra-gold transition-colors">
                      terrascape06@gmail.com
                    </p>
                  </div>
                </a>
              </div>

               {/* New Zone d'Intervention Block */}
               <div className="bg-terra-sand/10 rounded-2xl p-8 border border-terra-gold/20">
                  <h3 className="text-xl font-bold text-terra-brown mb-2 font-montserrat">
                    {contactDict.contact.zoneTitle}
                  </h3>
                  <p className="text-gray-500 mb-6 font-medium">
                    {contactDict.contact.zoneDescription}
                  </p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-4">
                    {contactDict.contact.cities.map((city: string, index: number) => (
                      <div key={index} className="flex items-center space-x-2">
                        <MapPin className="w-4 h-4 text-terra-gold flex-shrink-0" />
                        <span className="text-terra-brown font-medium text-sm">{city}</span>
                      </div>
                    ))}
                  </div>
               </div>

            </motion.div>

            {/* Right Column: Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="bg-white p-8 md:p-10 rounded-2xl shadow-xl border border-gray-100">
                <h3 className="text-2xl font-bold text-terra-brown mb-6 font-montserrat">
                  {contactDict.form.title}
                </h3>
                 <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-terra-brown font-semibold mb-2 ml-1 text-sm uppercase tracking-wide">
                      {contactDict.form.nameLabel}
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-terra-gold focus:ring-1 focus:ring-terra-gold focus:outline-none transition-all duration-300"
                      placeholder={contactDict.form.namePlaceholder}
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-terra-brown font-semibold mb-2 ml-1 text-sm uppercase tracking-wide">
                      {contactDict.form.emailLabel}
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-terra-gold focus:ring-1 focus:ring-terra-gold focus:outline-none transition-all duration-300"
                      placeholder={contactDict.form.emailPlaceholder}
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="establishment" className="block text-terra-brown font-semibold mb-2 ml-1 text-sm uppercase tracking-wide">
                      {contactDict.form.establishmentLabel}
                    </label>
                    <input
                      type="text"
                      id="establishment"
                      name="establishment"
                      value={formData.establishment}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-terra-gold focus:ring-1 focus:ring-terra-gold focus:outline-none transition-all duration-300"
                      placeholder={contactDict.form.establishmentPlaceholder}
                      required
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="phone" className="block text-terra-brown font-semibold mb-2 ml-1 text-sm uppercase tracking-wide">
                          {contactDict.form.phoneLabel}
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-terra-gold focus:ring-1 focus:ring-terra-gold focus:outline-none transition-all duration-300"
                          placeholder={contactDict.form.phonePlaceholder}
                          required
                        />
                      </div>
                      
                      <div>
                         <label htmlFor="serviceType" className="block text-terra-brown font-semibold mb-2 ml-1 text-sm uppercase tracking-wide">
                          {contactDict.form.typeLabel}
                        </label>
                        <div className="relative">
                          <select
                            id="serviceType"
                            name="serviceType"
                            value={formData.serviceType}
                            onChange={handleChange}
                             className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-terra-gold focus:ring-1 focus:ring-terra-gold focus:outline-none transition-all duration-300 appearance-none text-gray-700"
                          >
                            <option value="installation">{contactDict.form.typeOptions.installation}</option>
                            <option value="nettoyage">{contactDict.form.typeOptions.nettoyage}</option>
                            <option value="evenementiel">{contactDict.form.typeOptions.evenementiel}</option>
                            <option value="autre">{contactDict.form.typeOptions.autre}</option>
                          </select>
                           <ChevronDown className="absolute right-4 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                        </div>
                      </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-terra-brown font-semibold mb-2 ml-1 text-sm uppercase tracking-wide">
                      {contactDict.form.messageLabel}
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-terra-gold focus:ring-1 focus:ring-terra-gold focus:outline-none resize-none transition-all duration-300"
                      placeholder={contactDict.form.messagePlaceholder}
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="w-full bg-terra-brown text-white py-4 rounded-xl hover:bg-terra-gold shadow-lg hover:shadow-xl transition-all duration-300 font-bold text-lg uppercase tracking-wide flex items-center justify-center gap-2 group disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {status === "loading" ? contactDict.form.submitting : contactDict.form.submitButton}
                    <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>

                  {status === "success" && (
                    <div className="p-4 bg-green-50 text-green-800 rounded-lg text-center font-medium border border-green-200">
                      {contactDict.form.successMessage}
                    </div>
                  )}

                  {status === "error" && (
                    <div className="p-4 bg-red-50 text-red-800 rounded-lg text-center font-medium border border-red-200">
                      {contactDict.form.errorMessage}
                    </div>
                  )}
                </form>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 3. FAQ Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-6 max-w-4xl">
           <div className="text-center mb-16">
             <span className="text-terra-gold font-bold tracking-widest uppercase text-sm mb-4 block">
                {contactDict.faq.eyebrow}
             </span>
             <h2 className="text-3xl md:text-4xl font-bold text-terra-brown font-montserrat">
               {contactDict.faq.title}
             </h2>
           </div>

           <div className="space-y-4">
             {contactDict.faq.items.map((faq: any, index: number) => (
               <div 
                 key={index} 
                 className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden cursor-pointer"
                 onClick={() => toggleFaq(index)}
               >
                 <div className="p-6 flex justify-between items-center hover:bg-gray-50 transition-colors">
                   <h3 className="font-bold text-terra-brown text-lg">{faq.question}</h3>
                   {openFaqIndex === index ? (
                     <ChevronUp className="w-5 h-5 text-terra-gold" />
                   ) : (
                     <ChevronDown className="w-5 h-5 text-terra-brown/50" />
                   )}
                 </div>
                 
                 <motion.div
                   initial={false}
                   animate={{ height: openFaqIndex === index ? "auto" : 0, opacity: openFaqIndex === index ? 1 : 0 }}
                   transition={{ duration: 0.3 }}
                   className="overflow-hidden"
                 >
                   <div className="px-6 pb-6 pt-0 text-gray-600 leading-relaxed border-t border-gray-100 mt-2 pt-4">
                     {faq.answer}
                   </div>
                 </motion.div>
               </div>
             ))}
           </div>

        </div>
      </section>

      <Footer dict={footerDict} lang={lang} />
    </main>
  );
}
