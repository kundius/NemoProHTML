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

$('.js-product-gallery').bxSlider({
    pager: false,
    minSlides: 3,
    maxSlides: 10,
    slideWidth: 85,
    slideMargin: 5,
    prevText: '<i class="uk-icon-chevron-left"></i>',
    nextText: '<i class="uk-icon-chevron-right"></i>'
});


/** Выравнивание высоты блоков **/
$(window).load(function() {
    ;( function( $, window, document, undefined )
    {
        'use strict';
        var $list       = $( '.js-equal-list' ),
            $items      = $list.find( '.js-equal-item' ),
            setHeights  = function()
            {
                $items.css( 'height', 'auto' );

                var perRow = Math.floor( $list.width() / $items.width() );
                if( perRow == null || perRow < 2 ) return true;

                for( var i = 0, j = $items.length; i < j; i += perRow )
                {
                    var maxHeight   = 0,
                        $row        = $items.slice( i, i + perRow );

                    $row.each( function()
                    {
                        var itemHeight = parseInt( $( this ).outerHeight() );
                        if ( itemHeight > maxHeight ) maxHeight = itemHeight;
                    });
                    $row.css( 'height', maxHeight );
                }
            };

        setHeights();
        $( window ).on( 'resize', setHeights );
    })( jQuery, window, document );
});

/* слайд меню */
var slideout = new Slideout({
    'panel': document.getElementById('slideout-panel'),
    'menu': document.getElementById('slideout-menu'),
    'padding': 280,
    'tolerance': 100
});
$('.js-slideout-toggle').click(function() {
    slideout.toggle();
});

$('.js-left-menu-toggle').click(function() {
    $(this).nextAll('ul').slideToggle(300);
});

$.ionTabs("#products-tabs");

$('.js-input-number-up').click(function() {
    var input = $(this).prevAll('input');
    var val = Number(input.val())+1;
    input.val(val);
});
$('.js-input-number-down').click(function() {
    var input = $(this).prevAll('input');
    var val = Number(input.val())-1;
    if(val >= input.attr('min')) {
        input.val(val);
    }
});