$(function(){
    $('.design__slider').slick({
        slidesToShow: 4,
            autoplay:true,
            autoplaySpeed:2500,
        //   responsive:[
        //       {
        //           breakpoint: 1009,
        //           settings: {
        //            slidesToShow: 1 
        //           }
        //       }
        //   ]
    });
});
$(function(){
    $('.quize__slider').slick({
        slidesToShow: 1,
            // autoplay:true,
            // autoplaySpeed:1500,
        //   responsive:[
        //       {
        //           breakpoint: 1009,
        //           settings: {
        //            slidesToShow: 1 
        //           }
        //       }
        //   ]
    });
});
$(function(){
    $(".quize__slider").on('afterChange', function(event, slick, currentSlide){
        $("#cp").text(currentSlide + 1);
    });
});
$(document).ready(function() {
    $('.card__arow-href').click(function(event) {
        $('.card__arow-href, .design__slider-card, .design__card-image, .design__card-desk, .card__hover-1').toggleClass('active');
        // $('.body').toggleClass('lock');
    });
});
$(document).ready(function() {
    $('.card__arow-href2').click(function(event) {
        $('.card__arow-href2, .design__slider-card2, .design__card-image2, .design__card-desk2, .card__hover-2').toggleClass('active');
        // $('.body').toggleClass('lock');
    });
});
$(document).ready(function() {
    $('.card__arow-href3').click(function(event) {
        $('.card__arow-href3, .design__slider-card3, .design__card-image3, .design__card-desk3, .card__hover-3').toggleClass('active');
        // $('.body').toggleClass('lock');
    });
});
$(document).ready(function() {
    $('.card__arow-href4').click(function(event) {
        $('.card__arow-href4, .design__slider-card4, .design__card-image4, .design__card-desk4, .card__hover-4').toggleClass('active');
        // $('.body').toggleClass('lock');
    });
});
$(document).ready(function() {
    $('.card__arow-href5').click(function(event) {
        $('.card__arow-href5, .design__slider-card5, .design__card-image5, .design__card-desk5, .card__hover-5').toggleClass('active');
        // $('.body').toggleClass('lock');
    });
});

