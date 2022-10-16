// header
var scrollValue = 0;

$(window).on('scroll resize', function(){
    scrollValue = $(document).scrollTop();
    headerColorOn();
});

function headerColorOn(){
    if(scrollValue > 750) {
        $('header').addClass('on');
    } else {
        $('header').removeClass('on');
    }
}

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
	$(".visual > .roundBox > .oran").move(-5, e);
    $(".visual > .roundBox > .gr").move(-10, e);

    $(".coding > .roundBox > .oran").move(-5, e);
	$(".coding > .roundBox > .hpi").move(5, e);
    $(".coding > .roundBox > .pi").move(10, e);

	$(".graphic > .roundBox > .wh").move(-5, e);
	$(".graphic > .roundBox > .pi").move(10, e);
	$(".graphic > .roundBox > .gr").move(-5, e);

	$(".menuWrap > .roundBox > .pi").move(-5, e);
	$(".menuWrap > .roundBox > .yell").move(10, e);
	$(".menuWrap > .roundBox > .pur").move(-15, e);
});

//MODAL
$(function(){
	$(".graphic .inner .graphicBox .box .txtBox .btn2").click(function() {

		// 타겟
		var _target = $(this).data('target')
		
		// 컨텐츠 삭제
		$(".modal_content").empty()
	
		// 해당 모달 이미지 삽입
		$(".modal_content").append('<p class="img"><img src="img/gall_gra_'+ _target + '.png" alt=""></p>')

		$('.modal').fadeIn();
		$('body').addClass('no_scroll_body');
	});
		
	$(".modal_close").click(function() {
		$('.modal').fadeOut();
		$('body').removeClass('no_scroll_body');
	});
});

//스크롤 이동
$(function(){
	if(location.search == '?graphic')
	{
		$('html, body').animate({
			scrollTop: $(".graphic").offset().top
		}, 500);
	}
});