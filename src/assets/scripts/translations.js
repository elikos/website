$.ajaxSetup({
  beforeSend: function(xhr){
    if (xhr.overrideMimeType)
    {
      xhr.overrideMimeType("application/json");
    }
  }
});

$.getJSON("assets/locales/fr/translation.json", function(frTranslation) {
  // use plugins and options as needed, for options, detail see
  // http://i18next.com/docs/
  i18next.init({
    lng: 'fr', // evtl. use language-detector https://github.com/i18next/i18next-browser-languageDetector
    resources: { // evtl. load via xhr https://github.com/i18next/i18next-xhr-backend
      fr: {
        translation: frTranslation
      }
    }
  }, function(err, t) {
    // for options see
    // https://github.com/i18next/jquery-i18next#initialize-the-plugin
    jqueryI18next.init(i18next, $);
    // start localizing, details:
    // https://github.com/i18next/jquery-i18next#usage-of-selector-function
    $('body').localize();
  });
});