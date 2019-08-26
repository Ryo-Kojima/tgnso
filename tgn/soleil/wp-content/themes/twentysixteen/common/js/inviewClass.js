function initInView(){
  $(function(){
  	
  	$('.margintop20').each(function(index,elem){
  	  var a = $(elem);
  	  var top = parseInt( a.css('marginTop') ); 
  	  a.css('marginTop', (top+20) + 'px');
  	});
  	
    $('.inview0').on('inview', function(event, isInView, visiblePartX, visiblePartY){
      //alert('test');
      if(isInView){
      	var a = $(this);
        var top = parseInt( a.css('marginTop') ); 
	    a.animate({marginTop: (top-20) + "px", opacity: 1.0}, 1500);
	    a.off('inview');
      }
    });
    
    $('.inview500').on('inview', function(event, isInView, visiblePartX, visiblePartY){
      if(isInView){
        var a = $(this);
        var top = parseInt( a.css('marginTop') ); 
	    a.delay(500).animate({marginTop: (top-20) + "px", opacity: 1.0}, 1500);
        a.off('inview');
      }
      
    });
    
    $('.inview1000').on('inview', function(event, isInView, visiblePartX, visiblePartY){
      if(isInView){
      	var a = $(this);
        var top = parseInt( a.css('marginTop') ); 
	    a.delay(1000).animate({marginTop: (top-20) + "px", opacity: 1.0}, 1500);
        a.off('inview');
      }
      
    });
    
    $('.inview1500').on('inview', function(event, isInView, visiblePartX, visiblePartY){
      if(isInView){
      	var a = $(this);
        var top = parseInt( a.css('marginTop') ); 
	    a.delay(1500).animate({marginTop: (top-20) + "px", opacity: 1.0}, 1500);
	    a.off('inview');
      }
      
    });
    
    $('.inview2000').on('inview', function(event, isInView, visiblePartX, visiblePartY){
      if(isInView){
        var a = $(this);
        var top = parseInt( a.css('marginTop') ); 
	    a.delay(2000).animate({marginTop: (top-20) + "px", opacity: 1.0}, 1500);
	    a.off('inview');
      }
      
    });
    
    // show later 
    $('.showLate').on('inview', function(event, isInView, visiblePartX, visiblePartY){
      if(isInView){
	    $(this).animate({opacity: 1.0}, 600);
      }
    });
  });
}