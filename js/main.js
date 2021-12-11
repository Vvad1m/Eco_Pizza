$(function(){
    $('.slider-1').slick({
        arrows: false,
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1
    });
    $('.slider-2').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: '<button type="button" class="slick-btn slick-prev"> <img src="images/slider-2_left.svg" alt=""></button>',
        nextArrow: '<button type="button" class="slick-btn slick-next"> <img src="./images/slider-2_right.svg" alt=""></button>',
    });

    $('.info-tabs__item').on('click', function(e){
        e.preventDefault();
 
        $('.info-tabs__item').removeClass('info-tabs__item--active');
        $(this).addClass('info-tabs__item--active');
 
        $('.info-tabs__content').removeClass('info-tabs__content--active');
        $($(this).attr('href')).addClass('info-tabs__content--active');
 
     });
     $('.swith-btn').click(function(){
        $(this).toggleClass('switch-on');
    });
});