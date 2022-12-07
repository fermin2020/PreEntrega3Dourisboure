$(document).ready(function(){

    $('#search-icon').click(function(){
        $(this).toggleClass('fa-times'); /*cambio de lupa a cruz en buscador */
        $('#search-box').toggleClass('active');/*mostrar y ocultar buscador */
    });

    $('#menu').click(function(){
    $(this).toggleClass('fa-times'); /*cambio de lupa a cruz en menu */
    $('.navbar').toggleClass('nav-toggle');
});

$(window).on('scroll load',function(){

    $('#search-icon').removeClass('fa-times');
    $('#search-box').removeClass('active');

    $('#menu').removeClass('fa-times');
    $('.navbar').removeClass('nav-toggle');

remove;
})
});

/* --- js carousel --- */ 
document.addEventListener('DOMContentLoad', () => {
    const elementosCarousel = document.querySelectorAll('.carousel');
    M.Carousel.init(elementosCarousel, {
        duration: 150,
        dist: -80,
        shift: 5,
        padding: 5,
        numVisible: 5,
        indicators: true,
        noWrap: false,
    });
});
/* --- js carousel end --- */ 

