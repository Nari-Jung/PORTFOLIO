'use strict';

// a 클릭했을때 위로 튕기는 이벤트제거
$(document).on('click', 'a[href="#"]', function(e){
    e.preventDefault();
});

$(function () {
    $('.animate').scrolla({
        mobile: true, //모바일일때 활성
        once: false //스크롤시 딱 한번만 하고싶을 때 true
    });
});

// 배경색 변경
$(window).on('scroll resize', function () {
    var scrollTop = 0;
    scrollTop = $(document).scrollTop();
    bgColor();

    function bgColor() {
        if (scrollTop > 1400) {
            $('body').addClass('on');
        } else {
            $('body').removeClass('on');
        }
        if (scrollTop > 2700) {
            $('body').removeClass('on');
        }
    }
});


//4.햄버거메뉴
$(function(){
    $('.menuOpen button.open').on('click', function(){
        $('.menuOpen .menuWrap').addClass('on');
    });
    $('.menuOpen .menuWrap .close').on('click', function(){
        $('.menuOpen .menuWrap').removeClass('on');
    });
});


$(function(){
    $('.svgAni').find('path').each(function(i, path){
        var length = path.getTotalLength();
        //alert(length);
    });
});

//each();
//오브젝트와 배열 모두 사용할 수 있는 반복 함수. 배열과 length속성을 갖는 배열과 유사 객체들에 사용되는데
//첫번째 매개변수는 배열이나 객체를 받고, 두번째 매개변수는 index의 값을 가져옴