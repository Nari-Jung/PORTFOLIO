// header
var scrollValue = 0;

$(window).on('scroll resize', function(){
    scrollValue = $(document).scrollTop();
    headerColorOn();
});

function headerColorOn(){
    if(scrollValue > 450) {
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
