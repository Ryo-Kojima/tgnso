// 


  	//slick
$(function(){  	
　　$('#slider').on('afterChange', function(event, slick, currentSlide, nextSlide){
      var str = "";
      //alert("text");
      switch( currentSlide ){
  	    case 1:
  	      str = '<span class="mvTextA">グループ経営における<br>業績管理の高度化をご提案</span>';
          $('#mainVisualText').removeClass('mvTextB');
          $('#mainVisualText').addClass('mvTextA');
  	      break;
  	    case 0:
  	      str ='<span class="mvTextB">会計は経営者ご自身のために</span>';
  	      $('#mainVisualText').removeClass('mvTextA');
  	      $('#mainVisualText').addClass('mvTextB');
  	      break;
  	    case 2:
  	      str ='<span class="mvTextB">数字で未来を語れますか？</span>';
  	      $('#mainVisualText').removeClass('mvTextA');
  	      $('#mainVisualText').addClass('mvTextB');
          break;
  }
  
  $('#mainVisualText').html( str);
});
 
  $('#slider').slick({ autoplay:true, 
  	                   autoplaySpeed: 4000,
  	                   speed: 1200,
                       pauseOnHover:true,
                       dots: true}); 
});

/*---------------------------------------------
  function onLoadA()
  window.onLoadから飛んできた関数
/*-------------------------------------------*/

function onLoadA(){
	 //alert('test');
  $(function(){
  	  
  	 
  	  
  	$('.showLate').css('opacity','0.2');
  	
  	//事業案内のホバー worksArrow
  	$('#worksArrow .panel1').hover(function(){
  	  $('#worksNeeds .panel1').children('.panelInner').css('backgroundColor', 'rgba(255,255,255,0.98)');
  	  //$('#worksArrow .panel1').css('opacity', '0.2');
    }, function(){
      $('#worksNeeds .panel1').children('.panelInner').css('backgroundColor', '#fffbd0');
      //$('#worksArrow .panel1').css('opacity', '0');
    });
    
    $('#worksArrow .panel2').hover(function(){
  	  $('#worksNeeds .panel2').children('.panelInner').css('backgroundColor', 'rgba(255,255,255,0.98)');
  	  //$('#worksArrow .panel2').css('opacity', '0.2');
    }, function(){
      $('#worksNeeds .panel2').children('.panelInner').css('backgroundColor', '#c4e9fa');
      //$('#worksArrow .panel2').css('opacity', '0');
    });
    
    $('#worksArrow .panel3').hover(function(){
  	  $('#worksNeeds .panel3').children('.panelInner').css('backgroundColor', 'rgba(255,255,255,0.98)');
  	  //$('#worksArrow .panel3').css('opacity', '0.2');
    }, function(){
      $('#worksNeeds .panel3').children('.panelInner').css('backgroundColor', '#e8f1d0');
      //$('#worksArrow .panel3').css('opacity', '0');
    });
    
    $('#worksNeeds .panel1').hover(function(){
  	  $('#worksNeeds .panel1').children('.panelInner').css('backgroundColor', 'rgba(255,255,255,0.98)');
  	  //$('#worksArrow .panel1').css('opacity', '0.2');
    }, function(){
      $('#worksNeeds .panel1').children('.panelInner').css('backgroundColor', '#fffbd0');
      //$('#worksArrow .panel1').css('opacity', '0');
    });
    
    $('#worksNeeds .panel2').hover(function(){
  	  $('#worksNeeds .panel2').children('.panelInner').css('backgroundColor', 'rgba(255,255,255,0.98)');
  	  //$('#worksArrow .panel2').css('opacity', '0.2');
    }, function(){
      $('#worksNeeds .panel2').children('.panelInner').css('backgroundColor', '#c4e9fa');
      //$('#worksArrow .panel2').css('opacity', '0');
    });
    
    $('#worksNeeds .panel3').hover(function(){
  	  $('#worksNeeds .panel3').children('.panelInner').css('backgroundColor', 'rgba(255,255,255,0.98)');
  	  //$('#worksArrow .panel3').css('opacity', '0.2');
    }, function(){
      $('#worksNeeds .panel3').children('.panelInner').css('backgroundColor', '#e8f1d0');
      //$('#worksArrow .panel3').css('opacity', '0');
    });
    
    //以上ニーズの部分のアニメーション
  	
  	// 回転コード　スタートアップ企業
  	$('#voiceBox1').hover(function(){
      $('#voiceBox1_rotate').animate({zIndex:1},{
          duration:600,
          step:function(now){
		    $('#voiceBox1_rotate').css('transform', 'rotateY('+ (now)*180 +'deg)');
		    
		    if(now > 0.5){
		    	$('#voiceBox1_head').css('opacity', '0');
                $('#voiceBox1_tail').css('opacity', '1');
		    }
	      },
	      complete:function(){
	            //
	            $('#voiceBox1_rotate').css({zIndex: 0});
	      }
      });
    }, function(){
      $('#voiceBox1_rotate').animate({zIndex:1},{
          duration:600,
          step:function(now){
		    $('#voiceBox1_rotate').css('transform', 'rotateY('+ ((now)*180+180) +'deg)');
		    
		    if(now > 0.5){
		    	$('#voiceBox1_tail').css('opacity', '0');
		    	$('#voiceBox1_head').css('opacity', '1');
		    }
	      },
	      complete:function(){
	            //
	            $('#voiceBox1_rotate').css({zIndex: 0});
	      }
      });
    });
    //回転用コード終わり
    
    // 回転コード　中小企業
    $('#voiceBox5').hover(function(){
      $('#voiceBox5_rotate').animate({zIndex:1},{
          duration:600,
          step:function(now){
		    $('#voiceBox5_rotate').css('transform', 'rotateX('+ (now)*180 +'deg)');
		    
		    if(now > 0.5){
		    	/*$('#voiceBox5_head').css('display', 'none');
                $('#voiceBox5_tail').css('display', 'block');*/
                $('#voiceBox5_head').css('opacity', '0');
		    	$('#voiceBox5_tail').css('opacity', '1');
		    }
	      },
	      complete:function(){
	            //
	            $('#voiceBox5_rotate').css({zIndex: 0});
	      }
      });
    }, function(){
      $('#voiceBox5_rotate').animate({zIndex:1},{
          duration:600,
          step:function(now){
		    $('#voiceBox5_rotate').css('transform', 'rotateX('+ ((now)*180+180) +'deg)');
		    
		    if(now > 0.5){
		    	/*$('#voiceBox5_tail').css('display', 'none');
		    	$('#voiceBox5_head').css('display', 'block');*/
		    	$('#voiceBox5_tail').css('opacity', '0');
		    	$('#voiceBox5_head').css('opacity', '1');
		    }
	      },
	      complete:function(){
	            //
	            $('#voiceBox5_rotate').css({zIndex: 0});
	      }
      });
    });
    
    //回転用コード終わり
    
    // 回転コード　中堅企業
    $('#voiceBox3').hover(function(){
      $('#voiceBox3_rotate').animate({zIndex:1},{
          duration:600,
          step:function(now){
		    $('#voiceBox3_rotate').css('transform', 'rotateY('+ (now)*180 +'deg)');
		    
		    if(now > 0.5){
		    	/*$('#voiceBox3_head').css('display', 'none');
                $('#voiceBox3_tail').css('display', 'block');*/
                $('#voiceBox3_head').css('opacity', '0');
		    	$('#voiceBox3_tail').css('opacity', '1');
		    }
	      },
	      complete:function(){
	            //
	            $('#voiceBox3_rotate').css({zIndex: 0});
	      }
      });
    }, function(){
      $('#voiceBox3_rotate').animate({zIndex:1},{
          duration:600,
          step:function(now){
		    $('#voiceBox3_rotate').css('transform', 'rotateY('+ ((now)*180+180) +'deg)');
		    
		    if(now > 0.5){
		    	/*$('#voiceBox3_tail').css('display', 'none');
		    	$('#voiceBox3_head').css('display', 'block');*/
		    	$('#voiceBox3_tail').css('opacity', '0');
		    	$('#voiceBox3_head').css('opacity', '1');
		    }
	      },
	      complete:function(){
	            //
	            $('#voiceBox3_rotate').css({zIndex: 0});
	      }
      });
    });
    //回転用コード終わり
    
  });
}

/*---------------------------------------------
  function worksChangeColor(_num, _from)
  事業案内のニーズのリンクから指定位置へ移動した時におこるエフェクト
  _num:  リンク先の番号
  _from: リンク元の番号
/*-------------------------------------------*/

function worksChangeColor(_num, _from){
  $(function(){
  	var elem;
    switch(_num){
      case 0:
        elem = $('#kichou');
        break;
      case 1:
        elem = $('#getsuji');
        break;
      case 2:
        elem = $('#kentoukai');
        break;
      case 3:
        elem = $('#shikinhaaku');
        break;
      case 4:
        elem = $('#keikakusakutei');
        break;
      case 5:
        elem = $('#kaigai');
        break;
      case 6:
        elem = $('#groupKeiei');
        break;
    }
      //elem.animate({marginLeft: '-20px'}, 200);
      //elem.animate({marginLeft: '20px'}, 600)
      // titleの背景
       elem.children('.worksTitle').animate({zIndex:1},{
          duration:600,
          step:function(now){
		    $(this).css({backgroundColor: "rgba(147,180,138,"+ (now) +")"});
		    elem.children('.worksTitle').css({color: "rgba(" + mixColor(254,147,now) + "," + mixColor(254,180,now)  + "," + mixColor(254,147,now) + ",1)"});
		    $(this).children('h3').css({borderBottom: "1px solid rgba(254,254,254,"+ (now) +")"});
		    
	      },
	      complete:function(){
            $(this).css({zIndex:0});
	      	//1.5秒後に消える
	      	
	        $(this).delay(1500).animate({zIndex:1},{
              duration:1000,
              step:function(now){
	            $(this).css({backgroundColor: "rgba(147,180,138,"+ ((-now +1)) +")"});
	            elem.children('.worksTitle').css({color: "rgba(" + mixColor(147,254,now) + "," + mixColor(180,254,now)  + "," + mixColor(147,254,now) + ",1)"});
	            $(this).children('h3').css({backgroundColor: "1px solid rgba(147,180,138,"+ ((-now +1)) +")"});
	           
		      },
	          complete:function(){
	            $(this).css({zIndex:0});
	            
	          }
            });
        }
    });
    
    //articleの背景
      elem.animate({zIndex:1},{
          duration:600,
          step:function(now){
		    $(this).css({backgroundColor: "rgba(188,205,171,"+ (now) +")"});
		    $(this).css({boxShadow: "8px 8px 10px 2px rgba(64,64,64,"+ (now*0.2) +")"});
		    //elem.children('.worksTitle').css({color: "rgba(" + mixColor(254,147,now) + "," + mixColor(254,180,now)  + "," + mixColor(254,147,now) + ",1)"});
	      },
	      complete:function(){
            $(this).css({zIndex:0});
	      	//1.5秒後に消える
	      	
	        $(this).delay(1500).animate({zIndex:1},{
              duration:1000,
              step:function(now){
	            $(this).css({backgroundColor: "rgba(188,205,171,"+ ((-now +1)) +")"});
	            //elem.children('.worksTitle').css({color: "rgba(" + mixColor(147,254,now) + "," + mixColor(180,254,now)  + "," + mixColor(147,254,now) + ",1)"});
	            $(this).css({boxShadow: "8px 8px 10px 2px rgba(64,64,64,"+ ((-now +1)*0.2) +")"});
		      },
	          complete:function(){
	            $(this).css({zIndex:0});
	            
	          }
            });
        }
    });
    /*  
          elem.find('.worksOnepoint').animate({zIndex:1},{
          duration:600,
          step:function(now){
		    $(this).css({boxShadow: "8px 8px 10px 2px rgba(0,0,0,"+ (now*0.2) +")"});
	      },
	      complete:function(){
            $(this).css({zIndex:0});
	      	//1.5秒後に消える
	        $(this).delay(1500).animate({zIndex:1},{
              duration:600,
              step:function(now){
	            $(this).css({boxShadow: "8px 8px 10px 2px rgba(0,0,0,"+ ((-now +1)*0.2) +")"});
	          },
	          complete:function(){
	            $(this).css({zIndex:0});
	          }
            });
          }
      });
      
      */
    });

}

function mixColor( col1, col2, now) {
  return parseInt(col1 * now + col2 * (1.0 - now) );
}