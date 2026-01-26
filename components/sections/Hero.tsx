export default function HeroSection() {
  return (
    <section id="accueil" className="relative min-h-screen flex items-center">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1544144433-d50bc5b9160b?q=80&w=2000&auto=format&fit=crop')" 
        }}
      >
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-terra-brown/80 via-terra-brown/60 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 py-32 pt-40">
        <div className="max-w-4xl">
          {/* Main Tagline */}
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight font-montserrat">
            Rangement, Nettoyage & Entretien
          </h1>

          {/* Sub-text: Context & Audience */}
          <div className="mb-8 space-y-2">
            <p className="text-xl md:text-2xl text-terra-gold font-semibold">
              Service exclusif pour Restaurants, Bars, Plages Privées & Clubs.
            </p>
            <p className="text-lg md:text-xl text-white/90 leading-relaxed">
              Mise en place quotidienne • Rangement • Entretien • Événementiel
            </p>
          </div>

          {/* B2B Trust Badge */}
          <div className="mb-4 inline-block border border-white/30 bg-terra-brown/50 backdrop-blur-sm px-4 py-1 rounded text-xs md:text-sm font-medium text-white tracking-wider uppercase">
            SERVICE RÉSERVÉ AUX PROFESSIONNELS
          </div>

          {/* CTA Button */}
          <div className="mb-8">
            <a
              href="#contact"
              className="inline-block bg-terra-gold text-white px-10 py-4 rounded-full hover:bg-terra-brown transition-all duration-300 font-semibold text-lg shadow-xl hover:shadow-2xl hover:scale-105"
            >
              Devis Professionnel Gratuit
            </a>
          </div>

          {/* Trust Badge / Location Info */}
          <div className="flex items-center gap-2 text-white/80">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            <p className="text-sm md:text-base font-medium">
              Nice • Cannes • Monaco • Antibes
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
