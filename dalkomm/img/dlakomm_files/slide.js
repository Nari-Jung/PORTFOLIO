'use strict';

// a 클릭했을때 위로 튕기는 이벤트제거
$(document).on('click', 'a[href="#"]', function (e) {
	e.preventDefault();
});

//메뉴
$(function () {
	setGnb();

	function setGnb() {
		$('.innerHeader .menu > li').on('mouseenter focus', function (e) {
			var _li = $(e.currentTarget)

			if (_li.index() != 4) {
				$('.innerHeader').addClass('on');
				_li.children('ul').show()
			}

		});
		$('.innerHeader .menu > li').on('mouseleave', function (e) {
			var _li = $(e.currentTarget)

			if (_li.index() != 4) {
				$('.innerHeader').removeClass('on');
				_li.children('ul').hide()
			}

		});
	}
});

//슬라이드
$(function () {
	$(".visual .slide,.visual .textSlide").slick({
		arrows: false, //화살표 사용안함
		dots: true, //닷츠
		autoplay: true, //자동재생
		fade: false, //페이드인 효과        
		autoplaySpeed: 5000, //재생시간
		pauseOnHover: false, //마우스 오버시 슬라이드 멈춤 해제
		pauseOnFocus: false //포커스시 슬라이드 멈춤 해제
	});
	$('.slick-dots button').text("");
	// On before slide change
	$('.visual .slide').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
		console.log(nextSlide);
		$('.visual .textSlide').slick('slickGoTo', nextSlide);

	});
});


//scroll
var headerFix = 120,
	gnbScrollTop = 0,
	delta = 80,
	windowWidth = $(window).width();
if (windowWidth < 1200) {
	var headerFix = 80;
}

$(window).on("load scroll", function (e) {
	var st = $(this).scrollTop();

	scrollCheck();

	if (Math.abs(gnbScrollTop - st) <= delta) return;


	//header Tix
	if (st > headerFix) {
		$("header").addClass("fixed");
	} else {
		$("header").removeClass("fixed");
	}

	//scroll up/down
	if ((st > gnbScrollTop) && (gnbScrollTop > 0)) {
		$("body").addClass("scroll-down").removeClass("scroll-up");
	} else {
		$("body").addClass("scroll-up").removeClass("scroll-down");
	}
	gnbScrollTop = st;
});

//scrollCheck
function scrollCheck() {
	var winsc = $(this).scrollTop();
	if (winsc == 0) {
		$("body").addClass("scroll-zero").removeClass("scroll-has");
	} else {
		$("body").addClass("scroll-has").removeClass("scroll-zero");
	}
}

// scroll animation
$(function () {
	$('.animate').scrolla({
		mobile: true, //모바일버전시 활성화
		once: false //스크롤시 딱 한번만 하고싶을땐 true

	});
});

//상단으로 이동
$(window).scroll(function () {
	if ($(this).scrollTop() > 300) {
		$('.goTop').fadeIn();
	} else {
		$('.goTop').fadeOut();
	}
});

$(function () {
	$('.goTop').on('click', function () {
		var top = $('body').offset().top; //offset함수()는 top, left등 위치를 반환함
		$('html, body').animate({
			scrollTop: (top)
		}, 300);
	});
});

//splitting.js
$(function () {
    Splitting();
});
