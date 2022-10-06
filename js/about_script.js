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

// gsap
$.fn.move = function (resistance, mouse) {
    $el = $(this);
    TweenLite.to($el, 0.5, {
        x: -((mouse.clientX - window.innerWidth / 2) / resistance),
        y: -((mouse.clientY - window.innerHeight / 2) / resistance)
    });
};

$(document).bind("mousemove touchmove", function(e){
    $(".visual > .roundBox > .pur").move(5, e);
	$(".visual > .roundBox > .yell").move(-5, e);

    $(".me > .roundBox > .gr").move(10, e);

    $(".skills > .roundBox > .hpi").move(-5, e);

	$(".interest > .roundBox > .yell").move(5, e);

    $(".log > .roundBox > .gr").move(10, e);
	$(".log > .roundBox > .pur").move(-5, e);

	$(".ncs > .roundBox > .wh").move(10, e);
	$(".ncs > .roundBox > .yell").move(-5, e);

	$(".menuWrap > .roundBox > .pi").move(-5, e);
	$(".menuWrap > .roundBox > .yell").move(10, e);
	$(".menuWrap > .roundBox > .pur").move(-15, e);
});

// header change
var scrollValue = 0;    //var은 변수//
scrollValue = $(document).scrollTop(); 

fixHeader();

$(window).on('scroll resize', function(){
 scrollValue = $(document).scrollTop(); 
 fixHeader();
});

function fixHeader(){
  if(scrollValue > 450) {
	   $('header').addClass('on');
   } else {
	  $('header').removeClass('on');}
 }

  //메뉴
$(function(){
    $('.menuOpen button.open').on('click', function(){
        $('.menuWrap').addClass('on2');
    });
    $('.menuOpen .menuWrap .close').on('click', function(){
        $('.menuOpen .menuWrap').removeClass('on2');
    });

	$(".logo").on("mouseover", function() {
		$(".logo a").html('GO HOME')

		$(".logo").on("mouseout", function() {
			$(".logo a").html('nari')
		});
	});
});

const msg = "%c봐주셔서 감사합니다! 제 코드에 대해 궁금한 점이 있으시면 언제든지 연락주세요:)";
const css = "font-size: 1.5em; color: #fe526a; background-color: #fff; font-weight: bold; font-family: 'Noto Sans KR', sans-serif;";
console.log(msg, css);