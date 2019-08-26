(function($) {
  $.fn.slide = function(){

    var slideChangeTime = 1500;
    var slideShowTime = 3000;
    var slideAllTime = 15000;
    var animationType = 'swing';

     	var slideWrap = this;
    var own = slideWrap.attr('id');
    var slideContent = slideWrap.find('ul');
    var slideList = slideContent.find('li');
    var slideWidth = slideList.find('img').width();
    var slideHeight = slideList.find('img').height();
    var slideNum  = slideList.length;
    var slideWrapInner = slideWrap.children($('.sliders'));

      slideWrapInner.after('<ul class="pager"></ul>');
      for (i = 1; i <= slideNum; i++) {
        var list = '<li><a href="#">' + i +'</a></li>';
        slideWrapInner.next('.pager').append(list);
      };
      $('.pager').each(function(index, el) {
        $(this).children('li:first').addClass('current');
      });
      var pager = slideWrapInner.next('.pager');
      var pagerList = slideWrapInner.next('.pager').find('li');

      slideContent.wrapAll('<div class="loop"></div>');
      slideWrapInner.before('<div class="prev">前へ</div>');
      slideWrapInner.after('<div class="next">次へ</div>');

      slideWrapInner.css({
        'margin-right': 'auto',
        'margin-left': 'auto',
        'overflow' : 'hidden',
        'width' : slideWidth,
        'height' : slideHeight
      });
      slideContent.css({
        'float' : 'left',
        'overflow' : 'hidden',
        'width' : (slideWidth * slideNum)
      });
      slideList.css({
        'float' : 'left'
      });

      slideContent.clone().prependTo(slideWrapInner.children('.loop'));
      slideContent.clone().appendTo(slideWrapInner.children('.loop'));

      slideWrapInner.children('.loop').css({
        'width' : (slideList.width() * slideNum) * 3,
        'position' : 'relative',
        'left' : (slideList.width() * slideNum) * (-1)
      });

      var firstPos = (slideList.width() * slideNum) * (-1);//初期位置
      var currentIndex = 1;//現在表示枚数
      var index = slideNum + 1;//初期位置

      start();

      //前へをクリックした時
      slideWrapInner.prev($('.prev')).click(function() {
        if(clickFlg) {
          stop();
          clickFlg = false;
          index = index - 1;
          leftSlide(index);
          if(slideNum >= index){
            index = index + slideNum;
          }
          start();
        }else {
          return false;
        }
      });

      //次へをクリックした時
      slideWrapInner.next($('.next')).click(function() {
        if(clickFlg) {
          stop();
          clickFlg = false;
          index = index + 1;
          rightSlide(index);
          if(slideNum * 2 < index){
            index = (index % slideNum) + slideNum;
          }
          start();
        }else {
          return false;
        }
      });

      var clickFlg = true;
      //ページャーをクリックした時
      pagerList.click(function() {
        if(clickFlg){
          stop();
          clickFlg = false;
          pagerIndex = $(this).index() + 1 + slideNum;
          index = pagerIndex;
          rightSlide(index);
          start();
        }
        return false;
      });

      function leftSlide(index){
        //ループまで行かない場合
        if(slideNum < index){
          slideWrapInner.children('.loop').stop().animate({
            'left' : parseInt(slideWidth * (index - 1) * (- 1))+ 'px'
          },slideChangeTime,animationType,function() {
            clickFlg = true;
          });

          currentIndex = index % slideNum;
        }
        //ループする場合
        if(slideNum > index || slideNum == index){
          slideWrapInner.children('.loop').stop().animate({
            'left' : parseInt(slideWidth * (index - 1) * (- 1))+ 'px'
          },slideChangeTime,animationType).animate({
            'left' : parseInt(slideWidth * ((index - 1) % slideNum + slideNum) * (-1))+ 'px'
          },0, function() {
            clickFlg = true;
          });

          currentIndex = index % slideNum;
          if(currentIndex == 0){
            currentIndex = slideNum;
          }
        }

        // //ページャーの処理
        pagerList.removeClass('current');
        pagerList.eq(index % slideNum - 1).addClass('current');
      };

      function rightSlide(index){
        //ループまで行かない場合
        if(slideNum * 2 > index - 1){
          slideWrapInner.children('.loop').stop().animate({
            'left' : parseInt(slideWidth * (index - 1) * (- 1))+ 'px'
          },slideChangeTime,animationType,function() {
            clickFlg = true;
          });

          currentIndex = index % slideNum;
          if(currentIndex == 0){
            currentIndex = slideNum;
          }
        }
        //ループする場合
        if(slideNum * 2 < index){
          slideWrapInner.children('.loop').stop().animate({
            'left' : parseInt(slideWidth * (index - 1) * (- 1))+ 'px'
          },slideChangeTime,animationType).animate({
            'left' : parseInt(slideWidth * ((index - 1) % slideNum + slideNum) * (-1))+ 'px'
          },0, function() {
            clickFlg = true;
          });

          currentIndex = index % slideNum;
        }

        //ページャーの処理
        pagerList.removeClass('current');
        pagerList.eq(index % slideNum - 1).addClass('current');
      }

      function start(){
         own = setInterval(function() {
            clickFlg = false;
            if(slideNum * 2 >= index){
              index++;
              console.log(index);
            }
            rightSlide(index);
            if(slideNum * 2 + 1 == index){
              index = slideNum + 1;
            }
          }, slideShowTime);
      }

      function stop () {
        clearInterval(own);
      }

    }

})(jQuery);
