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

//swiper
var swiper = new Swiper('.swiper-container', {
	effect: "fade",
	slidesPerView: 1,
	autoplay: {
		delay: 2500,
		disableOnInteraction: false,
	},
	// If we need pagination
	pagination: {
		el: '.swiper-pagination',
		type: 'bullets',
		clickable: true,
	},
});

