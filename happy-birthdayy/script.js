let currentPage = 1;
let musicPlayer = document.getElementById('background-music');
let videoPlayer = document.querySelectorAll('video');

function openAlbum() {
    // Menghilangkan halaman cover dan menampilkan album
    document.getElementById('album-cover').style.display = 'none';
    document.getElementById('album-content').style.display = 'block';
    
    // Tampilkan halaman pertama
    showPage(currentPage);

    // Memulai pemutar musik
    musicPlayer.play();
}

// Menampilkan halaman berdasarkan nomor
function showPage(pageNumber) {
    // Menyembunyikan semua halaman
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => {
        page.style.display = 'none';
    });
    
    // Menampilkan halaman yang sesuai
    const currentPage = document.getElementById(`page-${pageNumber}`);
    currentPage.style.display = 'block';

    // Jika halaman ini berisi video, hentikan musik
    const video = currentPage.querySelector('video');
    if (video) {
        // Hentikan musik saat video diputar
        musicPlayer.pause();

        
        // Putar video
        video.play();

         // Ketika video dipause, musik diputar kembali
         video.onpause = function() {
            musicPlayer.play();
        };

       // Saat video diputar (unpause), musik akan berhenti
       video.onplay = function() {
        musicPlayer.pause(); // Musik berhenti saat video diputar
    };


        // Ketika video selesai, putar kembali musik
        video.onended = function() {
            musicPlayer.play();
        };
    }
}

// Fungsi untuk tombol Next
function nextPage() {
    // Menambah nomor halaman, reset ke halaman pertama jika mencapai halaman terakhir
    if (currentPage < 5) {
        currentPage++;
    } else {
        currentPage = 1; // Kembali ke halaman pertama
    }

    showPage(currentPage);
}
