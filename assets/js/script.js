/* load */
$(window).on('load', function() {
  $(".loading").delay(300).fadeOut(500);
});

/* modal */
modal();
$(window).resize(function () {
  modal();
});
function modal() {
  var wid = $(window).width();
  if (wid < 769) {
    $('.js_prof').colorbox({
      iframe: true,
      width: '100%',
      height: '100%',
      scrolling: true,
      opacity: 0.8,
      fixed: true
    });
  } else {
    $('.js_prof').colorbox({
      iframe: true,
      width: '80%',
      height: '70%',
      maxWidth: 900,
      maxHeight: 550,
      scrolling: true,
      opacity: 0.8,
      fixed: true
    });
  }
};

/* page scroll */
$('.main_menu_item_link').on('click', function(){
  var elmHash = $(this).attr('href');
  var pos = $(elmHash).offset().top;// - 60;
  $('body,html').animate({scrollTop: pos}, 500);
  return false;
});

/* sp watch button scroll fix */
$(function(){
  var $win = $(window),
      $main = $('.main_contents'),
      $nav = $('.main_btn_watch'),
      navHeight = $nav.outerHeight(),
      navPos = $nav.offset().top,
      fixedClass = 'is-fixed',
      winWidth = $win.width();

  $win.on('load scroll', function(){
    if(winWidth < 769){
      var value = $(this).scrollTop();
      if ( value > navPos ) {
        $nav.addClass(fixedClass);
        $main.css('margin-top', navHeight);
      } else {
        $nav.removeClass(fixedClass);
        $main.css('margin-top', '0');
      }
    }
  });
});

/* header bgcolor scroll on */
$(function(){
  $(window).on('scroll', function (){
    $('.keyvisual_title').each(function(){
      var position = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > position - 60){
        $('.header').addClass('bgcolor');
      } else {
        $('.header').removeClass('bgcolor');
      }
    });
  });
});

/* coming soon */
$(function(){
  $('.comingsoon').on('click', function(){
    return false;
  });
});
