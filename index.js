window.addEventListener('load', ()=> {
    $('.carousel').owlCarousel({
        rewind: true,
        autoplay: true,
        autoplayTimeout: 2500,
        autoplayHoverPause: true,
        margin: 10,
        dots: true,
        responsive: {
            0: {
                items: 1
            },
            480: {
                items: 2
            },
            768: {
                items: 3
            },
            1200: {
                items: 4
            }
        }
    });
})