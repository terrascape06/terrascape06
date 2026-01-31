import Script from "next/script";

export default function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Terrascape",
    "image": "https://terrascape.fr/images/hero/image-parasol-plage.jpg", 
    "description": "Experts en logistique de terrasse, nettoyage professionnel (HACCP) et aménagement événementiel pour restaurants, hôtels et plages privées sur la Côte d'Azur.",
    "telephone": "+33 7 66 02 50 27",
    "email": "contact@terrascape.fr",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Nice",
      "addressRegion": "Provence-Alpes-Côte d'Azur",
      "addressCountry": "FR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 43.7102,
      "longitude": 7.2620
    },
    "url": "https://terrascape.fr",
    "priceRange": "$$",
    "areaServed": [
      "Nice",
      "Cannes",
      "Antibes",
      "Monaco",
      "Juan-les-Pins",
      "Saint-Jean-Cap-Ferrat"
    ],
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      "opens": "00:00",
      "closes": "23:59"
    }
  };

  return (
    <Script id="local-business-schema" type="application/ld+json">
      {JSON.stringify(schema)}
    </Script>
  );
}
