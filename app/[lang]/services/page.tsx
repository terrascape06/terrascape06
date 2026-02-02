import ServicesHubContent from "@/components/pages/ServicesHubContent";
import { getDictionary } from "@/get-dictionary";

export default async function ServicesPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang as 'fr' | 'en');
  
  return <ServicesHubContent 
    navigationDict={dict.navigation} 
    footerDict={dict.footer}
    servicesDict={dict.servicesHub}
    lang={lang} 
  />;
}
