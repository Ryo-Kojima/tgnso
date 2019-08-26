if( window.addEventListener ) {
  window.addEventListener("load", initMenu, false);
}
else if( window.attachEvent )
{
  window.attachEvent( 'onload', initMenu );
}

function initMenu() {
  $(function(){
      // headerLink1
      $('#headerLink1').hover(function(){
        var a = $('#headerLinkUnder1');
        a.stop();
        a.animate({paddingRight:1},{
	      //1秒かけてアニメーション
          duration:1000,
          step:function(now){
		    a.css({transform:'translate(-'+ (50 - now*50).toString()  + '%, 0) scaleX(' + now  + ') '});
	      }
        });
      }, function(){
        var a = $('#headerLinkUnder1');
        a.stop();
        a.animate({paddingRight:0},{
          duration:1000,
          step:function(now){
            a.css({transform:'translate(-'+ (50 - now*50).toString()  + '%, 0) scaleX(' + now  + ') '});
          }
        });
      });
      // headerLink2
      $('#headerLink2').hover(function(){
        var a = $('#headerLinkUnder2');
        a.stop();
        a.animate({paddingRight:1},{
          duration:1000,
          step:function(now){
		    a.css({transform:'translate(-'+ (50 - now*50).toString()  + '%, 0) scaleX(' + now  + ') '});
	      }
        });
      }, function(){
        var a = $('#headerLinkUnder2');
        a.stop();
        a.animate({paddingRight:0},{
          duration:1000,
          step:function(now){
            a.css({transform:'translate(-'+ (50 - now*50).toString()  + '%, 0) scaleX(' + now  + ') '});
          }
        });
      });
      // headerLink3
      $('#headerLink3').hover(function(){
        var a = $('#headerLinkUnder3');
        a.stop();
        a.animate({paddingRight:1},{
          duration:1000,
          step:function(now){
		    a.css({transform:'translate(-'+ (50 - now*50).toString()  + '%, 0) scaleX(' + now  + ') '});
	      }
        });
      }, function(){
        var a = $('#headerLinkUnder3');
        a.stop();
        a.animate({paddingRight:0},{
          duration:1000,
          step:function(now){
            a.css({transform:'translate(-'+ (50 - now*50).toString()  + '%, 0) scaleX(' + now  + ') '});
          }
        });
      });
      // headerLink4
      $('#headerLink4').hover(function(){
        var a = $('#headerLinkUnder4');
        a.stop();
        a.animate({paddingRight:1},{
          duration:1000,
          step:function(now){
		    a.css({transform:'translate(-'+ (50 - now*50).toString()  + '%, 0) scaleX(' + now  + ') '});
	      }
        });
      }, function(){
          var a = $('#headerLinkUnder4');
          a.stop();
          a.animate({paddingRight:0},{
          duration:1000,
          step:function(now){
            a.css({transform:'translate(-'+ (50 - now*50).toString()  + '%, 0) scaleX(' + now  + ') '});
          }
        });
      });
      // headerLink5
      $('#headerLink5').hover(function(){
        var a = $('#headerLinkUnder5');
        a.stop();
        a.animate({paddingRight:1},{
          duration:1000,
          step:function(now){
		    a.css({transform:'translate(-'+ (50 - now*50).toString()  + '%, 0) scaleX(' + now  + ') '});
	      }
        });
      }, function(){
        var a = $('#headerLinkUnder5');
        a.stop();
        a.animate({paddingRight:0},{
          duration:1000,
          step:function(now){
            a.css({transform:'translate(-'+ (50 - now*50).toString()  + '%, 0) scaleX(' + now  + ') '});
          }
        });
      });
      // headerLink6
      $('#headerLink6').hover(function(){
        var a = $('#headerLinkUnder6');
        a.stop();
        a.animate({paddingRight:1},{
          duration:1000,
          step:function(now){
		    a.css({transform:'translate(-'+ (50 - now*50).toString()  + '%, 0) scaleX(' + now  + ') '});
	      }
        });
      }, function(){
        var a = $('#headerLinkUnder6');
        a.stop();
        a.animate({paddingRight:0},{
          duration:1000,
          step:function(now){
            a.css({transform:'translate(-'+ (50 - now*50).toString()  + '%, 0) scaleX(' + now  + ') '});
          }
        });
      });
  });
}