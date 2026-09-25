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
 * Sets up the burger menu toggle functionality for navigation links.
 */
function setBurgerMenu() {
  $(".burger").on("click", function () {
    $(this).parent().find(".nav-links").slideToggle("slow");
  });
}
