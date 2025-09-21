// Fungsi ini akan dijalankan setelah halaman siap
$(document).ready(function () {

    // Karena YouTube adalah Single Page App, elemen logo mungkin tidak langsung ada.
    // Kita perlu menunggu elemen logo termuat di halaman.
    const interval = setInterval(function () {
        // Cari elemen logo YouTube. Selector ini menargetkan link <a> di dalam div dengan id="logo"
        const logo = $('#logo');

        // Jika logo sudah ditemukan
        if (logo.length > 0) {
            console.log('YouTube Logo Scroll Fix: Logo ditemukan dan siap digunakan.');

            // Hentikan pengecekan berulang
            clearInterval(interval);    

            // Tambahkan event click pada logo
            logo.on('click', function (event) {
                // Cek apakah kita sedang berada di halaman utama YouTube
                if (window.location.href === 'https://www.youtube.com/') {

                    // Mencegah link berpindah halaman (karena kita hanya ingin scroll)
                    event.preventDefault();

                    // Lakukan animasi scroll ke atas dengan jQuery
                    $('html, body').animate({ scrollTop: 0 }, 'smooth');

                    console.log('YouTube Logo Scroll Fix: Kembali ke atas!');
                }
            });
        }
    }, 500); // Cek setiap 500 milidetik
});