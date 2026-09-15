(function () {
  function startLoading() {
    $(`<div id="preloader"><div id="loader"></div></div>`).appendTo(
      document.body,
    );

    translateWebsite(getSelectedLanguage());
  }

  function stopLoading() {
    // Pace.stop();
    $("#preloader").hide(1000);
  }

  /**
   *
   * @returns {i18n.AvailableLanguage}
   */
  function getSelectedLanguage() {
    return coerce(
      `${$("#language-selector").val() || document.documentElement.lang}`,
    );
  }

  /**
   * @template T
   * @param {unknown} value
   *
   * @returns {T}
   */
  function coerce(value) {
    return /** @type {T} */ (value);
  }

  /**
   *
   * @param {i18n.AvailableLanguage} selectedLanguage
   */
  function translateWebsite(selectedLanguage) {
    const translations = TRANSLATIONS[selectedLanguage];

    $("[data-i18n]").each(function () {
      // Get the translation key value (e.g., "button.submit")
      const el = $(this);
      /**
       * @type {i18n.TranslationKey}
       */
      const translationKey = coerce(el.attr("data-i18n"));

      el.text(translations[translationKey] || translationKey);
    });
  }

  startLoading();

  document.addEventListener("DOMContentLoaded", async function () {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    stopLoading();
    // console.log();

    $("#language-selector").on("change", function () {
      translateWebsite(getSelectedLanguage());
    });
  });
})();
