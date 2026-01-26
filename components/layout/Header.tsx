"use client";

import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-terra-white/95 backdrop-blur-sm shadow-sm">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-terra-brown tracking-wider">
            TERRA<span className="text-terra-gold">S</span>CAPE
          </Link>

          {/* Navigation Links */}
          <ul className="hidden md:flex items-center space-x-8">
            <li>
              <Link 
                href="#accueil" 
                className="text-terra-brown hover:text-terra-gold transition-colors duration-300 font-medium"
              >
                Accueil
              </Link>
            </li>
            <li>
              <Link 
                href="#services" 
                className="text-terra-brown hover:text-terra-gold transition-colors duration-300 font-medium"
              >
                Services
              </Link>
            </li>
            <li>
              <Link 
                href="#apropos" 
                className="text-terra-brown hover:text-terra-gold transition-colors duration-300 font-medium"
              >
                À Propos
              </Link>
            </li>
            <li>
              <Link 
                href="#contact" 
                className="bg-terra-gold text-white px-6 py-2 rounded-md hover:bg-terra-brown transition-colors duration-300 font-medium"
              >
                Contact
              </Link>
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-terra-brown">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>
    </header>
  );
}
