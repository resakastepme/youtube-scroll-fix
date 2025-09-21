chrome.storage.sync.get('isEnabled', function (data) {
    if (data.isEnabled !== false) {

        const interval = setInterval(function () {
            const logo = $('#logo a');

            if (logo.length > 0) {
                console.log('YouTube Logo Scroll Fix: Aktif.');

                clearInterval(interval);

                logo.on('click', function (event) {
                    if (window.location.href === 'https://www.youtube.com/') {
                        event.preventDefault();
                        $('html, body').animate({ scrollTop: 0 }, 'smooth');
                        console.log('YouTube Logo Scroll Fix: Kembali ke atas!');
                    }
                });
            }
        }, 500);
    } else {
        console.log('YouTube Logo Scroll Fix: Nonaktif.');
    }
});