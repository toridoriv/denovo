/**
 * A simple wrapper around Web Storage APIs (`localStorage` and `sessionStorage`)
 * that provides a namespaced interface for storing and retrieving JSON-serializable data.
 */
class StorageWrapper {
  /**
   * @param {string} name - The name of the store, used as a prefix for keys.
   * @param {"persistent" | "temporary"} [kind="temporary"]
   */
  constructor(name, kind = "temporary") {
    /**
     * @type {Storage}
     * @protected
     */
    this.store = kind === "persistent" ? localStorage : sessionStorage;
    /**
     * @type {string}
     * @protected
     */
    this.name = `denovo:${name}`;

    this.clear = this.store.clear.bind(this.store);
    this.removeItem = this.store.removeItem.bind(this.store);
  }

  /**
   * @protected
   *
   * @param {string} key
   * @returns {string}
   */
  getPrefixedKey(key) {
    return `${this.name}:${key}`;
  }

  /**
   * Stores an item in storage after stringifying it as JSON.
   *
   * @param {string} key - The key of the item to store.
   * @param {*} value - The value to store.
   *
   * @returns {void}
   */
  setItem(key, value) {
    return this.store.setItem(this.getPrefixedKey(key), JSON.stringify(value));
  }

  /**
   * Retrieves an item from storage and parses it as JSON.
   *
   * @template T
   * @param {string} key - The key of the item to retrieve.
   * @param {{ parse: (value: string | null) => T}} [parser=JSON] - An optional parser object with a parse method to parse the stored string.
   *
   * @returns {T | null}
   */
  getItem(key, parser = JSON) {
    return parser.parse(this.store.getItem(this.getPrefixedKey(key)));
  }

  /**
   * Removes an item from storage.
   *
   * @param {string} key
   *
   * @returns {void}
   */
  removeItem(key) {
    return this.store.removeItem(this.getPrefixedKey(key));
  }
}

/**
 * @template T
 *
 * @param {T} value
 *
 * @returns {value is NotNUllish<T>}
 */
function isNotNullish(value) {
  return value !== undefined && value !== null;
}

/**
 * @template {HTMLElement} [T=HTMLElement]
 */
class BurgerMenu {
  /**
   * The jQuery-wrapped element representing the burger menu.
   *
   * @type {JQuery<T>}
   */
  $el;
  /**
   * The underlying DOM element representing the burger menu.
   *
   * @type {T}
   */
  el;
  /**
   * The jQuery-wrapped element representing the navigation links.
   *
   * @type {JQuery<HTMLUListElement>}
   */
  nav;

  /**
   * Initializes a new instance of the BurgerMenu class.
   *
   * @param {string} selector The CSS selector for the burger menu element.
   */
  constructor(selector) {
    this.selector = selector;
    this.$el = $(selector);
    this.el = this.$el[0];
    this.nav = this.$el.parent().find(".nav-links");
  }

  /**
   * Indicates whether the navigation links are currently visible.
   *
   * @returns {boolean}
   */
  get isVisible() {
    return this.nav.is(":visible");
  }

  /**
   * Registers event listeners for the burger menu interactions.
   */
  registerEvents() {
    this.$el.on("click", this.handleClick.bind(this));
    globalThis.addEventListener("click", this.handleGlobalClick.bind(this));
  }

  /**
   * Handles the click event on the burger menu, toggling the visibility of the navigation links.
   */
  handleClick() {
    this.nav.slideToggle("slow");
  }

  /**
   * Handles the global click event to close the navigation links if clicked outside.
   *
   * @param {PointerEvent} event - The pointer event triggered by the global click.
   */
  handleGlobalClick(event) {
    const target = /** @type {HTMLElement} */ (event.target);

    if (target === this.el) return;
    if (target === this.nav[0]) return;
    if (this.el.contains(target)) return;
    if (!this.isVisible) return;

    this.handleClick();
  }
}
