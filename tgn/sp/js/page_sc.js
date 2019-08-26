$(function(){
	$(window).on('load', function() {
	    var url = $(location).attr('href');
		var id = url.split("?id=");
        var $target = $('#' + id[id.length - 1]);
        if($target.length){
            var pos = $target.offset().top - 70;
            $("html, body").animate({scrollTop:pos}, 1400 ,'swing');
        }
	});
});
