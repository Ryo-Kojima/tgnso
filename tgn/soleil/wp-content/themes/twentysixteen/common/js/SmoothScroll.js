$(function() {
  $('a[href*="#"]:not([href="#"]):not(.noSmooth)').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 800);
        return false;
      }
    }
  });
  
  $('.noSmooth').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 100);
        return false;
      }
    }
  });
});

$(function() {
    var topBtn = $('#btnGoToTop');
    //topBtn.css("opacity", "0");
    topBtn.hide();
    $(window).scroll(function () {
      if ($(this).scrollTop() > 1000) {
        topBtn.fadeIn();
        //topBtn.animate({opacity: "0.7"}, 1000);
      }
      else {
        topBtn.fadeOut();
        //topBtn.animate({opacity: "0"}, 100);
      }
    });
    topBtn.click(function () {
      $('body,html').animate({
        scrollTop: 0
      }, 500);
        return false;
    });
    
    /*topBtn.hover(function(){
      topBtn.animate({opacity: "1.0"}, 200);
    },function(){
      topBtn.animate({opacity: "0.7"}, 200);
    });*/
});
