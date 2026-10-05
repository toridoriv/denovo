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
      "header.lead": string;
      "header.title": string;
      "header.contact": string;
      "header.mission": string;
      "intro.column1.description": string;
      "intro.column2.description": string;
      "intro.column3.description": string;
      "challenge.title": string;
      "challenge.description": string;
      "stats.item1.title": string;
      "stats.item1.description": string;
      "stats.item2.title": string;
      "stats.item2.description": string;
      "stats.item3.title": string;
      "stats.item3.description": string;
      "stats.source": string;
      "cta.item1.title": string;
      "cta.item1.description": string;
      "cta.discover": string;
      "cta.item2.title": string;
      "cta.item2.description": string;
      "cta.donate": string;
      "footer.legal": string;
      "footer.description": string;
      "team.about": string;
      "team.samuel.name": string;
      "team.samuel.title": string;
      "team.samuel.description": string;
      "team.diego.name": string;
      "team.diego.title": string;
      "team.diego.description": string;
    };

    type TranslationKey = keyof TranslationSchema;

    type AvailableLanguage = "en" | "es" | "pt";
  }
}

export {};
