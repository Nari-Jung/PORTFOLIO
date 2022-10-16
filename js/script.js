// a 클릭했을때 위로 튕기는 이벤트제거
$(document).on('click', 'a[href="#"]', function (e) {
	e.preventDefault();
});

// scroll animation
$(function () {
	$('.animate').scrolla({
		mobile: true, //모바일버전시 활성화
		once: false //스크롤시 딱 한번만 하고싶을땐 true
	});
});

// goTop
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
		// console.log(top)
		$('html, body').animate({
			scrollTop: (top)
		}, 300);
	});
});

// gsap
$.fn.move = function (resistance, mouse) {
    $el = $(this);
    TweenLite.to($el, 0.5, {
        x: -((mouse.clientX - window.innerWidth / 2) / resistance),
        y: -((mouse.clientY - window.innerHeight / 2) / resistance)
    });
};

$(document).bind("mousemove touchmove", function(e){
    $(".visual > .roundBox > .bl").move(5, e);
    $(".visual > .roundBox > .yell").move(10, e);
    $(".visual > .roundBox > .pur").move(-5, e);
	$(".visual > .roundBox > .pi").move(5, e);
    $(".visual > .roundBox > .oran").move(10, e);

	$(".skills > .roundBox > .pi").move(5, e);
    $(".skills > .roundBox > .bl").move(10, e);
    $(".skills > .roundBox > .yell").move(-5, e);

	$(".ncs > .roundBox > .pur").move(5, e);

    $(".log > .roundBox > .bl").move(10, e);

	$(".graphic > .roundBox > .yell").move(-5, e);
	$(".graphic > .roundBox > .pi").move(5, e);
    $(".graphic > .roundBox > .wh").move(10, e);

	$(".menuWrap > .roundBox > .pi").move(-5, e);
	$(".menuWrap > .roundBox > .yell").move(10, e);
	$(".menuWrap > .roundBox > .pur").move(-15, e);
});

// header
var scrollValue = 0; 

	$(window).on('scroll resize', function(){
	scrollValue = $(document).scrollTop(); 
	fixHeader();
	});

function fixHeader(){
	if(scrollValue > 800) {
		$('header').addClass('on');
	} else {
		$('header').removeClass('on');
		}
	}

// menu 
$(function(){
	$('.menuOpen button.open').on('click', function(){
		$('.menuWrap').addClass('on2');
		$(".menuWrap").css('opacity', '1');	
	});
	$('.menuOpen .menuWrap .close').on('click', function(){

		$(".menuWrap").css('opacity', '0');
		
		setTimeout(() => {
			$('.menuOpen .menuWrap').removeClass('on2');	
		}, 200);
		
	});
	
	// header text change
	$(".logo a").on("mouseover", function() {
		$(".logo a").html('GO HOME')

		$(".logo a").on("mouseout", function() {
			$(".logo a").html('nari')
		});
	});
});

const msg = "%c봐주셔서 감사합니다! 제 코드에 대해 궁금한 점이 있으시면 언제든지 연락주세요:)";
const css = "font-size: 1.5em; color: #fe526a; background-color: #fff; font-weight: bold; font-family: 'Noto Sans KR', sans-serif;";
console.log(msg, css);

