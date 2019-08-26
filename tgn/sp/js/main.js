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

	$(".pro_li").click(function(){
		$(this).toggleClass('open');
		$(this).find(".toggle_sec").slideToggle();
	})

	$(".checkbox").click(function(){
		$(this).toggleClass('on_click');
	})

	// スムース設定
	var scroll;
	var mis_h, com_h, vo_h, inc_h, co_h;
	var sce;
	var windowWidth;
	var windowHeight;

	var functions = function(){
		mis_h = $(".sec02").offset().top;
		com_h = $(".sec03").offset().top;
		vo_h = $(".sec04").offset().top;
		inc_h = $(".sec05").offset().top;
		co_h = $(".sec06").offset().top;

		windowWidth = $(window).width();
		windowHeight = $(window).height();

		if(windowWidth >= windowHeight){
			$("body").addClass("sly");
		}else if(windowWidth < windowHeight){
			$("body").removeClass("sly");
		}
	};

	setTimeout(function(){
		functions();
	},500);

	// リサイズ
	$(window).resize(function(){
		functions();
	});

	// スムース

	$(window).scroll(function(){
		vo_h = $(".sec04").offset().top;
		inc_h = $(".sec05").offset().top;
		co_h = $(".sec06").offset().top;
	});

	$(function(){
		var speed = 600;
		sce = 20;
		$("h1 img").click(function() {
			$('body,html').animate({scrollTop:0}, speed, 'swing');
			return false;
		});

		$(".mis_link").click(function() {
			mis_h = $(".sec02").offset().top;
			$('body,html').animate({scrollTop:mis_h - sce}, speed, 'swing');
			return false;
		});

		$(".com_link").click(function() {
			com_h = $(".sec03").offset().top;
			$('body,html').animate({scrollTop:com_h - sce}, speed, 'swing');
			return false;
		});

		$(".vo_link").click(function() {
			vo_h = $(".sec04").offset().top;
			$('body,html').animate({scrollTop:vo_h - sce}, speed, 'swing');
			return false;
		});

		$(".inc_link").click(function() {
			inc_h = $(".sec05").offset().top;
			$('body,html').animate({scrollTop:inc_h - sce}, speed, 'swing');
			return false;
		});

		$(".co_link").click(function() {
			co_h = $(".sec06").offset().top;
			$('body,html').animate({scrollTop:co_h - sce}, speed, 'swing');
			return false;
		});
	});




});
