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
	$(".visual > .roundBox > .pi").move(-5, e);

    $(".brain > .roundBox > .hpi").move(10, e);
    $(".brain > .roundBox > .oran").move(-5, e);

	$(".mind > .roundBox > .pur").move(5, e);

    $(".style > .roundBox > .pi").move(10, e);

	$(".idea > .roundBox > .wh").move(-5, e);

	$(".wire > .roundBox > .hpi").move(10, e);
	$(".wire > .roundBox > .yell").move(-5, e);

	$(".mockup > .roundBox > .pur").move(10, e);
    $(".mockup > .roundBox > .oran").move(-5, e);
	$(".mockup > .roundBox > .pi").move(-10, e);

	$(".menuWrap > .roundBox > .pi").move(-5, e);
	$(".menuWrap > .roundBox > .yell").move(10, e);
	$(".menuWrap > .roundBox > .pur").move(-15, e);
});
