"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { Globe } from "lucide-react";

export default function LanguageSwitcher() {
  const pathname = usePathname();
  
  // Extraire la langue actuelle de l'URL
  const currentLang = pathname.startsWith('/fr') ? 'fr' : 'en';
  const otherLang = currentLang === 'fr' ? 'en' : 'fr';
  
  // Construire l'URL de l'autre langue
  const switchUrl = pathname.replace(`/${currentLang}`, `/${otherLang}`);
  
  return (
    <Link
      href={switchUrl}
      className="flex items-center gap-2 px-3 py-2 rounded-full bg-terra-gold/10 hover:bg-terra-gold/20 transition-colors duration-300 text-terra-brown hover:text-terra-gold group"
      aria-label={`Switch to ${otherLang === 'fr' ? 'French' : 'English'}`}
    >
      <Globe className="w-4 h-4 transition-transform group-hover:rotate-12" />
      <span className="font-semibold text-sm uppercase">
        {otherLang}
      </span>
    </Link>
  );
}
