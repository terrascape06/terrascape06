import { Metadata } from "next";
import ContactContent from "@/components/pages/ContactContent";
import { getDictionary } from "@/get-dictionary";

export const metadata: Metadata = {
  title: "Demander un Devis Gratuit | Terrascape",
};

export default async function Page({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang as 'fr' | 'en');
  
  return <ContactContent 
    navigationDict={dict.navigation} 
    footerDict={dict.footer}
    contactDict={dict.contactPage}
    lang={lang} 
  />;
}
