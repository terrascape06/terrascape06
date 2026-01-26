import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-terra-brown text-terra-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-4 text-terra-gold">TERRASCAPE</h3>
            <p className="text-terra-white/80">
              Installation et entretien de mobilier de terrasse premium sur la Côte d&apos;Azur
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-terra-gold">Contact</h4>
            <ul className="space-y-2 text-terra-white/80">
              <li>📞 +33 6 XX XX XX XX</li>
              <li>📍 Nice - Côte d&apos;Azur</li>
              <li>✉️ contact@terrascape.fr</li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-terra-gold">Liens Rapides</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#services" className="text-terra-white/80 hover:text-terra-gold transition-colors">
                  Nos Services
                </Link>
              </li>
              <li>
                <Link href="#apropos" className="text-terra-white/80 hover:text-terra-gold transition-colors">
                  À Propos
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-terra-white/80 hover:text-terra-gold transition-colors">
                  Nous Contacter
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-terra-white/20 mt-8 pt-8 text-center text-terra-white/60">
          <p>&copy; {new Date().getFullYear()} Terrascape. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}
