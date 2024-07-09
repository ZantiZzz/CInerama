// Función para abrir el modal y cargar el video de YouTube
function openTrailerModal(videoUrl) {
    const modal = document.getElementById('trailerModal');
    const iframe = document.getElementById('trailerFrame');
    iframe.src = getYouTubeEmbedUrl(videoUrl);
    modal.style.display = 'block';
}

// Función para cerrar el modal
function closeTrailerModal() {
    const modal = document.getElementById('trailerModal');
    const iframe = document.getElementById('trailerFrame');
    iframe.src = '';
    modal.style.display = 'none';
}

// Función para obtener la URL de incrustación de YouTube
function getYouTubeEmbedUrl(url) {
    let video_id = url.split('v=')[1];
    if (!video_id) {
        return '';
    }
    const ampersandPosition = video_id.indexOf('&');
    if (ampersandPosition !== -1) {
        video_id = video_id.substring(0, ampersandPosition);
    }
    return 'https://www.youtube.com/embed/' + video_id;
}

// Cerrar modal al hacer clic fuera de él
window.onclick = function(event) {
    const modal = document.getElementById('trailerModal');
    if (event.target === modal) {
        closeTrailerModal();
    }
}


