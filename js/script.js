$(function(){

    //slider
    $('.slider').slick({
        autoplay: true,
        autoplaySpeed: 2000,
        speed: 1000,
        fade: true,
        cssEase: 'linear'
    });


    //ハンバーガーメニューの開閉
    $('.burger-btn').click(function(){
        $('.burger-btn').toggleClass('click');
        $('.header-nav').fadeToggle(300);
        $('body').toggleClass('noscroll');
    });


    //sticky header
    var $win = $(window),
        $fv = $('.fv'),
        $header = $('.header'),
        fvHeight = $fv.outerHeight(),  //outerHeight()で要素の高さを取得
        fixedClass = 'fixed';

    $win.on('load scroll',function(){
        var value = $(this).scrollTop();
         if($win.width()>768)

          if ( value > fvHeight) {
              $header.addClass(fixedClass);

          } else{
              $header.removeClass(fixedClass);

          }
    });





});