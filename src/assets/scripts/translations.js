$.ajaxSetup({
  beforeSend: function(xhr){
    if (xhr.overrideMimeType) {
      xhr.overrideMimeType("application/json");
    }
  }
});

$.getJSON("assets/locales/en/translation.json", function(enTranslation) {
  $.getJSON("assets/locales/fr/translation.json", function(frTranslation) {
    // use plugins and options as needed, for options, detail see
    // http://i18next.com/docs/
    i18next.init({
      lng: 'fr', // evtl. use language-detector https://github.com/i18next/i18next-browser-languageDetector
      fallbackLng: ['fr'],
      preload: ['fr', 'en'],
      resources: { // evtl. load via xhr https://github.com/i18next/i18next-xhr-backend
        fr: {
          translation: frTranslation
        },
        en: {
          translation: enTranslation
        }
      }
    }, function(err, t) {
      // for options see
      // https://github.com/i18next/jquery-i18next#initialize-the-plugin
      jqueryI18next.init(i18next, $);
      // start localizing, details:
      // https://github.com/i18next/jquery-i18next#usage-of-selector-function
      $('body').localize();

      $('#change-language').click(() => {
        let newLanguage = 'en';
        if (i18next.language === 'en') {
          newLanguage = 'fr';
        }
        i18next.changeLanguage(newLanguage);
        $('body').localize();
      });
    });
  });
});


