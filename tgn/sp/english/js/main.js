$(document).ready(function(){
	
	// slick
	$('.slide').slick({
		slidesToShow:1,
		slidesToScroll:1,
		autoplay:true,
		autoplaySpeed:3500,
		fade:true,
		arrows:false,
		speed:600
	});

	// toggle
	$('.menu_box').on('click', function () {
			$("body").toggleClass('active_nav');
			$(".nav_list_box").slideToggle();
	});


	$(".nav_li").on("click", function() {
		 $("body").removeClass('active_nav');
		 $(".nav_list_box").slideToggle();
  	});

	$(".toggle_sec").css({
		display : "none"
	});

	$(".ser_li_inner").click(function(){
		$(this).toggleClass('open');
		$(this).find(".toggle_sec").slideToggle();
	})

	$(".checkbox").click(function(){
		$(this).toggleClass('on_click');
	})

	// スムース設定
	var scroll;
	var se_h, pri_h, abo_h, co_h;
	var sce;
	var windowWidth;
	var windowHeight;

	var functions = function(){
		se_h = $(".sec02").offset().top;
		pri_h = $(".sec03").offset().top;
		abo_h = $(".sec04").offset().top;
		co_h = $(".sec05").offset().top;

		windowWidth = $(window).width();
		windowHeight = $(window).height();

		if(windowWidth >= windowHeight){
			$("body").addClass("sly");
		}else if(windowWidth < windowHeight){
			$("body").removeClass("sly");
		}
	};
	functions();

	// リサイズ
	$(window).resize(function(){
		functions();
	});

	// スムース

	$(window).scroll(function(){
		se_h = $(".sec02").offset().top;
		pri_h = $(".sec03").offset().top;
		abo_h = $(".sec04").offset().top;
		co_h = $(".sec05").offset().top;
	});

	$(function(){
		var speed = 600;
		sce = 20;
		$("h1 img").click(function() {
			$('body,html').animate({scrollTop:0}, speed, 'swing');
			return false;
		});

		$(".se_link").click(function() {
			se_h = $(".sec02").offset().top;
			$('body,html').animate({scrollTop:se_h - sce}, speed, 'swing');
			return false;
		});

		$(".pri_link").click(function() {
			pri_h = $(".sec03").offset().top;
			$('body,html').animate({scrollTop:pri_h - sce}, speed, 'swing');
			return false;
		});

		$(".abo_link").click(function() {
			abo_h = $(".sec04").offset().top;
			$('body,html').animate({scrollTop:abo_h - sce}, speed, 'swing');
			return false;
		});

		$(".co_link").click(function() {
			co_h = $(".sec05").offset().top;
			$('body,html').animate({scrollTop:co_h - sce}, speed, 'swing');
			return false;
		});


	});




});
