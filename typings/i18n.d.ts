// type TranslationSchema = {
//   "nav.home": string;
// };

// type TranslationKey = keyof TranslationSchema;
declare global {
  namespace i18n {
    type TranslationSchema = {
      "nav.home": string;
      "nav.about": string;
      "nav.mission": string;
      "nav.donate": string;
      "header.overline": string;
      "header.title": string;
      "header.contact": string;
      "header.mission": string;
      "intro.description": string;
      "challenge.title": string;
      "challenge.description": string;
      "stats.item1.title": string;
      "stats.item1.description": string;
      "stats.item2.title": string;
      "stats.item2.description": string;
      "stats.item3.title": string;
      "stats.item3.description": string;
      "stats.source": string;
      "footer.legal": string;
      "footer.description": string;
    };

    type TranslationKey = keyof TranslationSchema;

    type AvailableLanguage = "en" | "es";
  }
}

export {};
