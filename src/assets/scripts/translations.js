$.ajaxSetup({
  beforeSend: function(xhr){
    if (xhr.overrideMimeType) {
      xhr.overrideMimeType("application/json");
    }
  }
});

$.getJSON("assets/locales/en/translation.json", function(enTranslation) {
  $.getJSON("assets/locales/fr/translation.json", function(frTranslation) {

    const detectionOptions = {
      // order and from where user language should be detected
      order: ['querystring', 'cookie', 'localStorage', 'navigator', 'htmlTag', 'path', 'subdomain'],
    
      // keys or params to lookup language from
      lookupQuerystring: 'lng',
      lookupCookie: 'i18next',
      lookupLocalStorage: 'i18nextLng',
      lookupFromPathIndex: 0,
      lookupFromSubdomainIndex: 0,
    
      // cache user language on
      caches: ['localStorage', 'cookie'],
      excludeCacheFor: ['cimode'], // languages to not persist (cookie, localStorage)
    
      // optional expire and domain for set cookie
      cookieMinutes: 10,
      cookieDomain: 'myDomain',
    
      // optional htmlTag with lang attribute, the default is:
      htmlTag: document.documentElement
    }

    const i18nextOptions = {
      detection: detectionOptions,
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
    }

    // use plugins and options as needed, for options, detail see
    // http://i18next.com/docs/
    i18next.use(window.i18nextBrowserLanguageDetector).init(i18nextOptions, function(err, t) {
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
        $('html').attr('lang', newLanguage);
      });
    });
  });
});


