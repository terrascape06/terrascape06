import Link from "next/link";

interface FooterDict {
  brandName: string;
  brandDescription: string;
  contactTitle: string;
  phone: string;
  location: string;
  email: string;
  quickLinksTitle: string;
  quickLinks: {
    services: string;
    about: string;
    contact: string;
  };
  copyright: string;
}

interface FooterProps {
  dict: FooterDict;
  lang: string;
}

export default function Footer({ dict, lang }: FooterProps) {
  return (
    <footer className="bg-[#1a1510] text-terra-white py-16 border-t border-terra-gold/20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-4 text-terra-gold">{dict.brandName}</h3>
            <p className="text-terra-white/80">
              {dict.brandDescription}
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-terra-gold">{dict.contactTitle}</h4>
            <ul className="space-y-2 text-terra-white/80">
              <li>📞 {dict.phone}</li>
              <li>📍 {dict.location}</li>
              <li>✉️ {dict.email}</li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-terra-gold">{dict.quickLinksTitle}</h4>
            <ul className="space-y-2">
              <li>
                <Link href={`/${lang}/services`} className="text-terra-white/80 hover:text-terra-gold transition-colors">
                  {dict.quickLinks.services}
                </Link>
              </li>
              <li>
                <Link href={`/${lang}/about`} className="text-terra-white/80 hover:text-terra-gold transition-colors">
                  {dict.quickLinks.about}
                </Link>
              </li>
              <li>
                <Link href={`/${lang}/contact`} className="text-terra-white/80 hover:text-terra-gold transition-colors">
                  {dict.quickLinks.contact}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-terra-white/10 mt-12 pt-8 text-center text-terra-white/30 text-sm">
          <p>&copy; {new Date().getFullYear()} Terrascape. {dict.copyright}</p>
        </div>
      </div>
    </footer>
  );
}
