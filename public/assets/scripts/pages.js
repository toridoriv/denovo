const home = `
<header>
  <h2 class="title" data-i18n="header.overline"></h2>
  <h1 class="title" data-i18n="header.title"></h1>
  <a class="button" href="#/contact" data-i18n="header.contact"></a>
  <a class="button" href="#/mission" data-i18n="header.mission"></a>
</header>
<section>
  <article id="intro">
    <p data-i18n="intro.description"></p>
  </article>
  <article id="challenge">
    <h2 data-i18n="challenge.title"></h2>
    <p data-i18n="challenge.description"></p>
  </article>
  <section id="stats">
    <figure>
      <h3 data-i18n="stats.item1.title"></h3>
      <p data-i18n="stats.item1.description"></p>
    </figure>
    <figure>
      <h3 data-i18n="stats.item2.title"></h3>
      <p data-i18n="stats.item2.description"></p>
    </figure>
    <figure>
      <h3 data-i18n="stats.item3.title"></h3>
      <p data-i18n="stats.item3.description"></p>
    </figure>
    <figcaption><span data-i18n="stats.source"></span>: ChileHuevos 2025, INE 2025</figcaption>
  </section>
</section>
<section id="cta">
  <article>
  </article>
  <article>
  </article>
</section>`;

const PAGES = Object.freeze({
  "/": home,
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
