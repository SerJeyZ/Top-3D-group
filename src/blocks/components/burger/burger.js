import $ from 'jquery';

$(document).ready(function () {
    $('.burger').click(function (event) {
        $('.burger').toggleClass('burger__active');
        $('.mobile-menu').toggleClass('mobile-menu--active');
        $('.overlay').toggleClass('overlay--active');
        $('body').toggleClass('lock');
    })
    $(window).resize(function (event) {
        if (event.target.innerWidth > 900) {
            $('.burger').removeClass('burger__active');
            $('.mobile-menu').removeClass('mobile-menu--active');
            $('.overlay').removeClass('overlay--active');
            $('body').removeClass('lock');
        }
    });
});