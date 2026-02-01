import Script from "next/script";

export default function WebSiteSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Terrascape",
    "alternateName": ["Terrascape Azur", "Terrascape 06"],
    "url": "https://www.terrascape06.com"
  };

  return (
    <Script id="website-schema" type="application/ld+json">
      {JSON.stringify(schema)}
    </Script>
  );
}
