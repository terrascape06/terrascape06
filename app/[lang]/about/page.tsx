import { Metadata } from "next";
import AboutContent from "@/components/pages/AboutContent";
import { getDictionary } from "@/get-dictionary";

export const metadata: Metadata = {
  title: "Notre Expertise & Zone d'Intervention | Terrascape",
};

export default async function Page({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang as 'fr' | 'en');
  
  return <AboutContent 
    navigationDict={dict.navigation} 
    footerDict={dict.footer}
    aboutDict={dict.aboutPage}
    lang={lang} 
  />;
}
