const home = `
<header class="bg-darkgrey-text-almost-white hero">
  <h1 data-i18n="header.title"></h1>
  <h2 data-i18n="header.lead"></h2>
  <div class="hero-buttons">
    <a class="button" href="#/contact" data-i18n="header.contact"></a>
    <a class="button" href="#/mission" data-i18n="header.mission"></a>
  </div>
</header>
<section class="bg-almost-white-text-darkgrey main-section">
  <article id="intro" class="intro">
    <p data-i18n="intro.description"></p>
    <div id="decorative-image"></div>
  </article>
  <article id="challenge" class="bg-destiny-text-darkgrey card topography">
    <h2 data-i18n="challenge.title"></h2>
    <p data-i18n="challenge.description"></p>
  </article>
  <section id="stats" class="stats">
    <figure class="stats-card">
      <img src="assets/images/EU-000.png" alt="" />
      <h3 data-i18n="stats.item1.title"></h3>
      <p data-i18n="stats.item1.description"></p>
    </figure>
    <figure class="stats-card">
      <img src="assets/images/chic-002.png">
      <h3 data-i18n="stats.item2.title"></h3>
      <p data-i18n="stats.item2.description"></p>
    </figure>
    <figure class="stats-card">
      <img src="assets/images/brasil-000.png" alt="" />
      <h3 data-i18n="stats.item3.title"></h3>
      <p data-i18n="stats.item3.description"></p>
    </figure>
    <figcaption class="centered"><span data-i18n="stats.source"></span>: ChileHuevos 2025, INE 2025</figcaption>
  </section>
</section>
<section id="cta" class="circuit">
  <article class="bg-darkgrey-text-almost-white description">
    <img src="assets/images/eggs-001.jpg" alt="" />
    <h3 data-i18n="cta.item1.title"></h3>
    <p data-i18n="cta.item1.description"></p>
  </article>
  <article class="bg-almost-white-text-darkgrey card">
    <h3 data-i18n="cta.item2.title"></h3>
    <p data-i18n="cta.item2.description"></p>
    <a data-i18n="cta.donate" class="button" href="https://www.every.org/laboratory-of-social-entrepreneurship/f/denovo-ending-the-killing"
          target="_blank"></a>
  </article>
</section>`;

const about = `
<section id="people" class="people">
  <h1 data-i18n="team.about"></h1>
    <figure class="person melt">
      <img src="" alt="" />
      <h3 data-i18n="team.samuel.name"></h3>
      <h4 data-i18n="team.samuel.title"></h4>
      <p data-i18n="team.samuel.description"></p>
    </figure>
    <figure class="person melt">
      <img src="">
      <h3 data-i18n="team.diego.name"></h3>
      <h4 data-i18n="team.diego.title"></h4>
      <p data-i18n="team.diego.description"></p>
    </figure>
  </section>
`;

const PAGES = Object.freeze({
  "/": home,
  "/about": about,
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
