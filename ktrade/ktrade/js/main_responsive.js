'use strict';

// a 클릭했을때 위로 튕기는 이벤트제거
$(document).on('click', 'a[href="#"]', function (e) {
	e.preventDefault();
});

//gnb 메뉴 
$(function() {
   $('.submenu').on('click', function(){
	
	  if($('.category .menu').hasClass('on'))
	  {
		$('.category .menu').removeClass('on');//선택한 요소의 클래스 속성에서 지정한 값만 제ㄱ거
	  }
	  else
	  {
		$('.category .menu').addClass('on'); //선택한 요소에 클래스 속성값을 추가
	  }
   });
});

$(document).ready(function(){
	
	$('.submenu').click(function(){
		var tab_id = $(this).attr('data-tab');

		$('.submenu').removeClass('on');
		$('.tab-content').removeClass('on');

		$(this).addClass('on');
		$("#"+tab_id).addClass('on');
	})
});


// scroll animation
$(function () {
	$('.animate').scrolla({
		mobile: true, //모바일버전시 활성화
		once: false //스크롤시 딱 한번만 하고싶을땐 true
	});
});

$(function () {
	$(".visual .slide,.visual_mo .slide" ).slick({
		arrows: true, //화살표 사용안함
		dots: true, //닷츠
		autoplay: true, //자동재생
		fade: true, //페이드인 효과        
		autoplaySpeed: 4000, //재생시간
		pauseOnHover: false, //마우스 오버시 슬라이드 멈춤 해제
		pauseOnFocus: false //포커스시 슬라이드 멈춤 해제
	});
	$('.slick-prev').text("");
	$('.slick-next').text("");
	$('.slick-dots button').text("");
});



var scrollValue = 0; //var은 변수//
scrollValue = $(document).scrollTop();

fixHeader();
$(window).on('scroll resize', function () {
	scrollValue = $(document).scrollTop();
	fixHeader();
});

function fixHeader() {
	if (scrollValue > 150) {
		$('header').addClass('on');
	} else {
		$('header').removeClass('on');
	}
}

//splitting.js
$(function () {
    Splitting();
});

//상단으로 이동
$( window ).scroll( function() {
	if ( $( this ).scrollTop() > 300 ) {
		$( '.goTop' ).fadeIn();
	} else {
		$( '.goTop' ).fadeOut();
	}
} );



$(function() {            
    $('.goTop').on('click', function() {
        var top = $('body').offset().top;  //offset함수()는 top, left등 위치를 반환함
       $('html, body').animate( { scrollTop : (top) }, 300 );  
    });     
 });  


 //메뉴
$(function(){
    $('.menuOpen button.open').on('click', function(){
        $('.menuOpen .menuWrap').addClass('on');
    });
    $('.menuOpen .menuWrap .close').on('click', function(){
        $('.menuOpen .menuWrap').removeClass('on');
    });
});