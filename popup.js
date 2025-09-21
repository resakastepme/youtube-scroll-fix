$(document).ready(function () {
    const toggleSwitch = $('#toggle-switch');
    const langSelect = $('#lang-select');

    function applyTranslations(lang) {
        $('[data-i18n]').each(function () {
            const key = $(this).attr('data-i18n');
            $(this).text(chrome.i18n.getMessage(key));
        });
        $('html').attr('lang', lang);
    }

    chrome.storage.sync.get(['isEnabled', 'language'], function (data) {
        toggleSwitch.prop('checked', data.isEnabled !== false);

        const currentLang = data.language || 'en';
        langSelect.val(currentLang);
        applyTranslations(currentLang);
    });

    toggleSwitch.on('change', function () {
        chrome.storage.sync.set({ isEnabled: $(this).prop('checked') });
    });

    langSelect.on('change', function () {
        const selectedLang = $(this).val();
        chrome.storage.sync.set({ language: selectedLang });
        applyTranslations(selectedLang);
    });
});