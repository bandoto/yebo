$(document).ready(function() {
    $('.menu__burger').click(function(event) {
        $('.menu__burger,.menu__body').toggleClass('active');
    });
});

$(document).ready(function() {
    $('.slider__body').slick({
        dots: true,
        arrows: false,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: true
    });
});

function ibg() {

    $.each($('.ibg'), function(index, val) {
        if ($(this).find('img').length > 0) {
            $(this).css('background-image', 'url("' + $(this).find('img').attr('src') + '")');
        }
    });
}

ibg();

var $page = $('html, body');
$('a[href*="#content"]').click(function() {
    $page.animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 400);
    return false;
});
