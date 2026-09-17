const PAGES = Object.freeze({
  "/": `<h1 data-i18n="nav.home"></h1>`,
  "/about": `<h1 data-i18n="nav.about"></h1>`,
  "/mission": `<h1 data-i18n="nav.mission"></h1>`,
});

/**
 * @typedef {keyof typeof PAGES} PagePath
 */

/**
 * Handles routing and navigation for the website pages.
 */
class PageRouter {
  /**
   * Helper class for handling translations and applying them to the page content.
   *
   * @type {Internationalization}
   */
  internalization;

  /**
   * Creates a new instance of the PageRouter class.
   *
   * @param {Internationalization} internalization - The instance of the Internationalization class used for applying translations.
   */
  constructor(internalization) {
    this.internalization = internalization;
  }

  /**
   * Sets up click event handlers for local anchor links that start with `#/`.
   */
  setLocalAnchorHandlers() {
    $('a[href^="#/"]').on("click", this.handleAnchorClick.bind(this));
  }

  /**
   * Handles the click event for local anchor links and navigates to the corresponding page.
   *
   * @protected
   *
   * @param {JQuery.ClickEvent} event - The click event triggered by the anchor link.
   *
   * @returns {void}
   */
  handleAnchorClick(event) {
    const el = /** @type {HTMLAnchorElement} */ (event.currentTarget);
    const href = el.getAttribute("href");

    if (!href) return;

    return this.goTo(href);
  }

  /**
   * Cleans and validates the given path, ensuring it corresponds to a valid page.
   *
   * @protected
   * @todo Implement proper error handling for invalid paths.
   *
   * @param {string} path - The path to be cleaned and validated.
   *
   * @returns {PagePath} The cleaned and validated page path.
   */
  parsePath(path) {
    path = path.replace("#/", "/");

    if (path in PAGES) {
      return /** @type {PagePath} */ (path);
    }

    return "/";
  }

  /**
   * Navigates to the specified page based on the given href.
   *
   * @param {string} href - The href attribute of the anchor link representing the target page.
   */
  goTo(href) {
    const path = this.parsePath(href);

    $("main").html(PAGES[path]);
    this.internalization.applyTranslation($("main"));
  }
}
