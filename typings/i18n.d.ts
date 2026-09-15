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
    };

    type TranslationKey = keyof TranslationSchema;

    type AvailableLanguage = "en" | "es";
  }
}

export {};
