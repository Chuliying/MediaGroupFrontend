$(document).ready(function () {
    var $window = $(window);
    var $header = $('.header');
    var $hamburger = $('.hamburger');
    var $navi = $('.navi');
    var $dropdown = $('.dropdown');
    var _w = $window.width();

    if( _w){
        $window.on('scroll', function () {
            var _top = $window.scrollTop();
            if (_top > 30) {
                $header.addClass('scrolled');
            }
            else {
                $header.removeClass('scrolled');
            }
        });
    }

    $hamburger.on('click', function () {
        $('.hamburger-menu').toggleClass('animate');
        $navi.fadeToggle(300);
    });

    $dropdown.on('click', function(){
        var $ul = $(this).find('>ul');
        if($ul.length < 1 ){
            $(this).parent().find('>ul').toggleClass('show');
        }
        else{
            $ul.toggleClass('show');
        }
    })
});