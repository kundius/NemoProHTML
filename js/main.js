$('li.js-catalog-menu-lvl1').hover(function() {
    var $inner = $(this).find('.js-c-m-inner');
    $inner.stop().animate({height: 'show', opacity:1}, 300, 'linear', function() {
        $inner.css('height','auto');
    });
}, function() {
    var $inner = $(this).find('.js-c-m-inner');
    $inner.stop().animate({height: 'hide', opacity:0}, 200, 'linear', function() {
        $inner.css('height','auto');
    });
});
$('li.js-catalog-menu-lvl2').mouseenter(function() {
    var menu = $(this).find('.js-catalog-menu-outer').clone(),
        $right = $(this).parents('.js-catalog-menu-lvl1').find('.js-catalog-menu-right');

    $(this).addClass('active').siblings().removeClass('active');

    menu.hide();
    $right.html(menu);
    menu.fadeIn();
});
//$('.js-catalog-menu-right').mouseleave(function() {
//    $(this).html('');
//});
$('.js-slider').bxSlider({
    prevText: '<i class="uk-icon-angle-left"></i>',
    nextText: '<i class="uk-icon-angle-right"></i>'
});

$('.js-about-slider').bxSlider({
    controls: false
});
