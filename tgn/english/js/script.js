(function(document , window , $) {
  $("document").ready(function() {
    $(".slider").slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      speed: 2000,
      autoplay: true,
      autoplaySpeed: 3000,
    });
  });
})(document,window,jQuery);
