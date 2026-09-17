/**
 * @type {i18n.TranslationSchema}
 */
const en = {
  "nav.home": "home",
  "nav.about": "who we are",
  "nav.mission": "what we do",
  "nav.donate": "donate",
  "footer.legal":
    "DeNovo is a fiscally sponsored project of Anti Entropy (EIN: 88-0967420), a 501(c)(3) nonprofit organization. Donations are tax-deductible as allowed by law.",
  "footer.description":
    "Corporate advocacy program to accelerate the adoption of <i>in ovo</i> sexing technologies in the poultry sector.",
};

/**
 * @type {i18n.TranslationSchema}
 */
const es = {
  "nav.home": "inicio",
  "nav.about": "quiénes somos",
  "nav.mission": "qué hacemos",
  "nav.donate": "donar",
  "footer.legal":
    "DeNovo es un proyecto patrocinado fiscalmente por Anti Entropy (EIN: 88-0967420), una organización sin fines de lucro 501(c)(3). Las donaciones son deducibles de impuestos según lo permitido por la ley.",
  "footer.description":
    "Programa de incidencia corporativa para acelerar la adopción de tecnologías de sexado <i>in ovo</i> en el sector avícola.",
};

/**
 * @type {Record<i18n.AvailableLanguage, i18n.TranslationSchema>}
 */
const TRANSLATIONS = Object.freeze({
  en,
  es,
});

/**
 * @callback ElementTranslator
 * @this HTMLElement
 * @returns {void}
 */

/**
 * Internationalization class for handling translations and language selection.
 */
class Internationalization {
  /**
   * The name of the attribute used for translation keys.
   */
  static ATTRIBUTE = "data-i18n";
  /**
   * The CSS selector for elements with translation keys.
   */
  static I18N_ATTRIBUTE_SELECTOR = `[${Internationalization.ATTRIBUTE}]`;
  /**
   * The CSS selector for the language selection dropdown.
   */
  static LANGUAGE_SELECTOR = "#language-selector";

  /**
   * Checks if the given value is a valid available language.
   *
   * @protected
   *
   * @param {*} value - The value to check for validity as an available language.
   *
   * @returns {value is i18n.AvailableLanguage} `true` if the value is a valid available language, `false` otherwise.
   */
  static isValidLanguage(value) {
    if (!isNotNullish(value)) return false;

    return Object.hasOwn(TRANSLATIONS, /** @type {PropertyKey} **/ (value));
  }

  /**
   * The default language to use if no other language is selected.
   *
   * @todo Consider adding validation to ensure the default language is a valid available language.
   * @type {i18n.AvailableLanguage}
   */
  defaultLanguage;

  /**
   * The storage wrapper instance for persisting the selected language.
   *
   * @type {StorageWrapper}
   */
  storage;

  /**
   * Creates an instance of the Internationalization class.
   *
   * @param {i18n.AvailableLanguage} defaultLanguage - The default language to use if no other language is selected.
   * @param {StorageWrapper} storage - The storage wrapper instance for persisting the selected language.
   */
  constructor(
    defaultLanguage = "es",
    storage = new StorageWrapper("i18n", "persistent"),
  ) {
    this.defaultLanguage = defaultLanguage;
    this.storage = storage;
  }

  /**
   * The currently selected language from the language selection dropdown.
   *
   * @type {i18n.AvailableLanguage}
   */
  get selectedLanguage() {
    return /** @type {i18n.AvailableLanguage} */ (
      $(Internationalization.LANGUAGE_SELECTOR).val()
    );
  }

  /**
   * The currently active language, determined in the following order of precedence:
   *
   * 1. The language stored in the storage wrapper (if any).
   * 2. The browser's default language (navigator.language).
   * 3. The default language specified in the Internationalization instance.
   *
   * @type {i18n.AvailableLanguage}
   */
  get currentLanguage() {
    // @ts-ignore: ¯\_(ツ)_/¯
    return [
      this.storage.getItem("language"),
      navigator.language.split("-")[0],
      this.defaultLanguage,
    ].find(Internationalization.isValidLanguage);
  }

  /**
   * The translation schema for the currently active language.
   *
   * @type {i18n.TranslationSchema}
   */
  get translationSchema() {
    return TRANSLATIONS[this.currentLanguage];
  }

  /**
   * Retrieves the translation for a given key from the specified translation schema.
   *
   * @protected
   *
   * @param {i18n.TranslationKey} key - The translation key to look up.
   * @param {i18n.TranslationSchema} [schema] - The translation schema to use. Defaults to the current language's schema.
   *
   * @returns {string} The translation corresponding to the given key, or a placeholder if the translation is missing.
   */
  getTranslation(key, schema = this.translationSchema) {
    return schema[key] || "<missing translation>";
  }

  /**
   * Creates a function that translates the text content of an element based on the current translation schema.
   *
   * @protected
   *
   * @returns {ElementTranslator} A function that translates the text content of an element based on the current translation schema.
   */
  createElementTranslator() {
    const self = this;
    const schema = this.translationSchema;

    return function translateElement() {
      const el = $(this);
      const key = self.getKey(el);
      const translation = self.getTranslation(key, schema);

      el.html(translation);
    };
  }

  /**
   * Applies translations to the specified element and its descendants based on the current translation schema.
   *
   * @param {HTMLElement | Document | JQuery<HTMLElement>} [el=document] The element to which translations should be applied. Defaults to the entire document.
   */
  applyTranslation(el = document) {
    $(el)
      .find(`${Internationalization.I18N_ATTRIBUTE_SELECTOR}`)
      .each(this.createElementTranslator());

    const lang = this.currentLanguage;

    $(Internationalization.LANGUAGE_SELECTOR).val(lang);
    document.documentElement.setAttribute("lang", lang);
    this.storage.setItem("language", lang);
  }

  /**
   * Translates the website using the currently selected language.
   *
   * @returns {void}
   */
  translateWebsiteWithSelected() {
    this.storage.setItem("language", this.selectedLanguage);
    return this.applyTranslation();
  }

  /**
   * Retrieves the translation key for the specified element.
   *
   * @protected
   *
   * @param {HTMLElement | JQuery<HTMLElement>} element
   *
   * @returns {i18n.TranslationKey}
   */
  getKey(element) {
    const key = /** @type {i18n.TranslationKey} */ (
      $(element).attr(Internationalization.ATTRIBUTE)
    );

    return key || "";
  }
}
