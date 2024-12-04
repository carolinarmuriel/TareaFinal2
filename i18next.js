
  i18next
    .use(i18nextHttpBackend)
    .use(i18nextBrowserLanguageDetector)
    .init({
      fallbackLng: 'es',
      backend: {
        loadPath: '/locales/{{lng}}/translation.json'
      }
    }, function(err, t) {
      updateContent();
    });

  function updateContent() {
    document.querySelectorAll('[data-translate]').forEach(function(element) {
      element.innerText = i18next.t(element.getAttribute('data-translate'));
    });
  }

  document.getElementById('languageSelector').addEventListener('change', function() {
    i18next.changeLanguage(this.value, updateContent);
  });
