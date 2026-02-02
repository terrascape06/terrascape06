"use client";

import Link from "next/link";
import { useState } from "react";
import LanguageSwitcher from "@/components/ui/LanguageSwitcher";

interface NavigationDict {
  home: string;
  services: string;
  about: string;
  contact: string;
  references?: string;
}

interface HeaderProps {
  dict: NavigationDict;
  lang: string;
}

export default function Header({ dict, lang }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-terra-white/95 backdrop-blur-sm shadow-sm">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href={`/${lang}`} className="group">
            {/* Ajout de 'items-center' pour l'alignement vertical global */}
            <div className="flex items-center font-montserrat font-bold tracking-widest cursor-pointer relative transform scale-90 md:scale-100 origin-left">

              {/* BLOC GAUCHE: TERRA + Ligne dessous */}
              <div className="flex flex-col justify-end transform -translate-y-1 md:-translate-y-2">
                <span className="text-terra-brown text-xl md:text-2xl leading-none">TERRA</span>
                {/* Fixed mobile spacing: mt-0 on mobile, mt-[-1px] on desktop */}
                <span className="w-full h-[2px] bg-terra-brown mt-0 md:mt-[-1px] group-hover:bg-terra-gold transition-colors duration-300"></span>
              </div>

              {/* BLOC CENTRE: S (Doré) */}
              <span className="text-terra-gold text-3xl md:text-4xl mx-1 leading-none self-center scale-110 pb-1">
                S
              </span>

              {/* BLOC DROITE: Ligne dessus + CAPE */}
              <div className="flex flex-col justify-start transform translate-y-1 md:translate-y-3">
                {/* Fixed mobile spacing: mb-0 on mobile, mb-[-4px] on desktop */}
                <span className="w-full h-[2px] bg-terra-brown mb-0 md:mb-[-4px] group-hover:bg-terra-gold transition-colors duration-300"></span>
                <span className="text-terra-brown text-xl md:text-2xl leading-none">CAPE</span>
              </div>

            </div>
          </Link>

          {/* Navigation Links (Desktop) */}
          <ul className="hidden md:flex items-center space-x-8">
            <li>
              <Link 
                href={`/${lang}`}
                className="text-terra-brown hover:text-terra-gold transition-colors duration-300 font-medium"
              >
                {dict.home}
              </Link>
            </li>
            <li>
              <Link 
                href={`/${lang}/services`}
                className="text-terra-brown hover:text-terra-gold transition-colors duration-300 font-medium"
              >
                {dict.services}
              </Link>
            </li>
            {/* <li>
              <Link 
                href={`/${lang}/references`}
                className="text-terra-brown hover:text-terra-gold transition-colors duration-300 font-medium"
              >
                {dict.references}
              </Link>
            </li> */}
            <li>
              <Link 
                href={`/${lang}/about`}
                className="text-terra-brown hover:text-terra-gold transition-colors duration-300 font-medium"
              >
                {dict.about}
              </Link>
            </li>
            
            <li>
              <Link 
                href={`/${lang}/contact`}
                className="bg-terra-gold text-white px-6 py-2 rounded-md hover:bg-terra-brown transition-colors duration-300 font-medium"
              >
                {dict.contact}
              </Link>
            </li>
            
            <li>
              <LanguageSwitcher />
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-terra-brown p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white border-t border-terra-sand/20 shadow-xl py-6 px-6 flex flex-col space-y-4 h-screen md:h-auto animate-fadeIn">
             <Link 
                href={`/${lang}`}
                className="text-terra-brown hover:text-terra-gold font-medium text-lg py-3 border-b border-gray-50"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {dict.home}
              </Link>
              <Link 
                href={`/${lang}/services`}
                className="text-terra-brown hover:text-terra-gold font-medium text-lg py-3 border-b border-gray-50"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {dict.services}
              </Link>
              
              <Link 
                href={`/${lang}/about`}
                className="text-terra-brown hover:text-terra-gold font-medium text-lg py-3 border-b border-gray-50"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {dict.about}
              </Link>
              <Link 
                href={`/${lang}/contact`}
                className="text-terra-gold font-bold text-lg py-3"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {dict.contact}
              </Link>
              
              <div className="pt-4 border-t border-gray-100">
                <LanguageSwitcher />
              </div>
          </div>
        )}
      </nav>
    </header>
  );
}
