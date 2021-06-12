//stop carousel auto slide
window.addEventListener('load', function () {
    var myCarousel = document.querySelector('#carouselExampleIndicators');
    var carousel = new bootstrap.Carousel(myCarousel, {
        pause: true,
        interval: false
    });
})