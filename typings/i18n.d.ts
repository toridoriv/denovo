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
      "footer.legal": string;
      "footer.description": string;
    };

    type TranslationKey = keyof TranslationSchema;

    type AvailableLanguage = "en" | "es";
  }
}

export {};
