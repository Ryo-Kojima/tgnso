$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});

$(function() {
    var topBtn = $('#btnGoToTop');
    topBtn.hide();
    $(window).scroll(function () {
      if ($(this).scrollTop() > 950) {
        topBtn.fadeIn();
      }
      else {
        topBtn.fadeOut();
      }
    });
    topBtn.click(function () {
      $('body,html').animate({
        scrollTop: 0
      }, 1000);
        return false;
    });
});
