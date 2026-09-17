(function () {
  $(`<div id="preloader"><div id="loader"></div></div>`).appendTo(
    document.body,
  );

  window.addEventListener("load", () => {
    stopLoading();
  });

  const internalization = new Internationalization("es");
  const pageRouter = new PageRouter(internalization);

  internalization.applyTranslation();

  $(Internationalization.LANGUAGE_SELECTOR).on(
    "change",
    internalization.translateWebsiteWithSelected.bind(internalization),
  );

  pageRouter.goTo(window.location.hash);
  pageRouter.setLocalAnchorHandlers();

  function stopLoading() {
    $("#preloader").hide(1000);
  }
})();
