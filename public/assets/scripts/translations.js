/**
 * @type {i18n.TranslationSchema}
 */
const en = {
  "nav.home": "home",
  "nav.about": "who we are",
  "nav.mission": "what we do",
  "nav.donate": "donate",
  "header.overline": "Corporate advocacy program",
  "header.title": "ACCELERATING THE ADOPTION OF IN-OVO SEXING IN CHILE",
  "header.contact": "CONTACT US",
  "header.mission": "LEARN MORE",
  "intro.description":
    "In Chile, around 12 million male chicks are discarded each year on the same day they are born, because they lack a productive function; this generates ethical, economic, and sustainability challenges.<br />In ovo sexing technologies allow identifying the sex of the embryo during incubation, offering a practical and effective solution to this problem.",
  "challenge.title": "A structural challenge that can be solved",
  "challenge.description":
    "The egg industry uses selected lines of birds to produce eggs. In this system, for every female born for laying, a male is also born that does not lay eggs and is not profitable for meat production, so it is discarded at birth.<br />Currently, incubators use half of their productive capacity to incubate chicks that will never be part of a productive system until hatching. This implies a significant economic and sustainability cost, which can be avoided with in-ovo sexing.",
  "stats.item1.title": "11.8 M",
  "stats.item1.description": "male chicks discarded each year in Chile",
  "stats.item2.title": "3.2%",
  "stats.item2.description":
    "annual growth rate of egg production<br>(2014–2024)",
  "stats.item3.title": "R.M and Valparaíso",
  "stats.item3.description":
    "regions with the highest concentration of the problem",
  "stats.source": "Source",
  "cta.item1.title": "What We Do",
  "cta.item1.description":
    "We work jointly with incubators, producers, retail and technology suppliers in identifying and overcoming barriers for the adoption of in-ovo sexing.</br>We put national and international players in touch to facilitate the creation of strategic alliances that promote the cost-effectiveness of adopting these technologies. We also provide technical information, market research and lessons learned in other markets where these technologies have already been adopted and have proven their viability.",
  "cta.discover": "Discover the solution",
  "cta.item2.title": "Support Us",
  "cta.item2.description":
    "We are an independent non-profit organization with no commercial ties to these technologies. Our commitment is accelerating the transition towards in-ovo sexing, effectively and reliably.",
  "cta.donate": "Donate",
  "footer.legal":
    "DeNovo is a fiscally sponsored project of Anti Entropy (EIN: 88-0967420), a 501(c)(3) nonprofit organization. Donations are tax-deductible as allowed by law.",
  "footer.description":
    "Corporate advocacy program to accelerate the adoption of <i>in-ovo</i> sexing technologies in the poultry industry.",
};

/**
 * @type {i18n.TranslationSchema}
 */
const es = {
  "nav.home": "inicio",
  "nav.about": "quiénes somos",
  "nav.mission": "qué hacemos",
  "nav.donate": "donar",
  "header.overline": "Programa de incidencia corporativa",
  "header.title": "ACELERANDO LA ADOPCIÓN DE SEXADO IN OVO EN CHILE",
  "header.contact": "CONTÁCTANOS",
  "header.mission": "CONOCE MÁS",
  "intro.description":
    "En Chile, cerca de 12 millones de pollitos macho son descartados cada año el mismo día que nacen, porque carecen de una función productiva; esto genera desafíos éticos, económicos y de sustentabilidad.<br />Las tecnologías de sexado in ovo permiten identificar el sexo del embrión durante la incubación, lo que ofrece una solución práctica y eficaz a este problema.",
  "challenge.title": "Un desafío estructural que se puede resolver",
  "challenge.description":
    "La industria del huevo utiliza líneas de aves seleccionadas para producir huevos. En este sistema, por cada hembra nacida para postura, también nace un macho que no pone huevos y no es rentable para producción de carne, por lo que es descartado al nacer.<br />Actualmente, las incubadoras utilizan la mitad de su capacidad productiva en incubar hasta la eclosión pollitos que nunca serán parte de un sistema productivo. Esto implica un costo económico y de sustentabilidad significativo, que se puede evitar con el sexado in-ovo.",
  "stats.item1.title": "11,8 M",
  "stats.item1.description": "pollitos macho eliminados cada año en Chile",
  "stats.item2.title": "3,2%",
  "stats.item2.description":
    "tasa de crecimiento anual de la producción<br>(2014–2024)",
  "stats.item3.title": "R.M. y Valparaíso",
  "stats.item3.description": "regiones con mayor concentración del problema",
  "stats.source": "Fuente",
  "cta.item1.title": "¿Qué hacemos?",
  "cta.item1.description":
    "Trabajamos con incubadoras, productores, retail y proveedores tecnológicos para identificar y superar las barreras que dificultan la adopción del sexado in ovo. </br>Conectamos a actores nacionales e internacionales, facilitando la creación de alianzas estratégicas que potencien la rentabilidad de adoptar estas tecnologías. También entregamos información técnica, estudios de mercado y lecciones aprendidas en otros mercados que ya las han adoptado y demostrado su viabilidad.",
  "cta.discover": "Descubre la solución",
  "cta.item2.title": "Apóyanos",
  "cta.item2.description":
    "Somos una organización independiente, sin fines de lucro y sin vinculación comercial con las distintas tecnologías. Nuestro compromiso es acelerar la transición hacia el sexado in ovo de la manera más efectiva y confiable.",
  "cta.donate": "Donar",
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
    const translation = schema[key];

    if (isNotNullish(translation)) return translation;

    return "lorem ipsum";
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
