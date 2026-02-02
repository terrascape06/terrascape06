import 'server-only';

const dictionaries = {
  fr: () => import('./dictionaries/fr.json').then((module) => module.default),
  en: () => import('./dictionaries/en.json').then((module) => module.default),
};

export type Locale = 'fr' | 'en';

export const getDictionary = async (locale: Locale) => {
  return dictionaries[locale]?.() ?? dictionaries.fr();
};
