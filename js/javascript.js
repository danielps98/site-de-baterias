document.addEventListener('DOMContentLoaded', function () {
    var myCarousel = document.getElementById('mainCarousel');
    var carousel = new bootstrap.Carousel(myCarousel, {
        interval: 500, // Intervalo de 1 segundo para cada slide
        ride: 'carousel' // Inicia automaticamente o carrossel
    });
});
