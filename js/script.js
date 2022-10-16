// a 클릭했을때 위로 튕기는 이벤트제거
$(document).on('click', 'a[href="#"]', function (e) {
	e.preventDefault();
});

// scroll animation
$(function(){
    $('.animate').scrolla({
        mobile: true,
        once: false
    });
});

// goTop
$(window).scroll(function(){
    if($(this).scrollTop() > 300) {
        $('.goTop').fadeIn();
    } else {
        $('.goTop').fadeOut();
    }
});

$(function(){
    $('.goTop').on('click', function(){
        var top = $('body').offset().top;
        $('html, body').animate({
            scrollTop: (top)
        }, 300);
    });
});

// menu
$(function(){
    $('.menuOpen button.open').on('click', function(){
        $('.menuWrap').addClass('on2');
        $('.menuWrap').css('opacity', '1');
    });

    $('.menuOpen .menuWrap .close').on('click', function(){
        $('.menuWrap').css('opacity', '0');

        setTimeout(() => {
            $('.menuWrap').removeClass('on2');
        }, 200);
    });

    // header text change
    $('.logo a').on('mouseover', function(){
        $('.logo a').html('GO HOME')

        $('.logo a').on('mouseout', function(){
            $('.logo a').html('nari')
        });
    });
});

const msg = "%c봐주셔서 감사합니다! 제 코드에 대해 궁금한 점이 있으시면 언제든지 연락주세요:)";
const css = "font-size: 1.5em; color: #fe526a; background-color: #fff; font-weight: bold; font-family: 'Noto Sans KR', sans-serif;";
console.log(msg, css);