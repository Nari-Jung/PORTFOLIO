'use strict';

// a 클릭했을때 위로 튕기는 이벤트제거
$(document).on('click', 'a[href="#"]', function(e){
    e.preventDefault();
});


AOS.init();


//다른제품 더보기 (슬라이드)
const slides = document.querySelector('.slides'); //전체 슬라이드 컨테이너
const slideImg = document.querySelectorAll('.slides li'); //모든 슬라이드들
let currentIdx = 0; //현재 슬라이드 index
const slideCount = slideImg.length; // 슬라이드 개수
const prev = document.querySelector('.prev'); //이전 버튼
const next = document.querySelector('.next'); //다음 버튼
const slideWidth = 394; //한개의 슬라이드 넓이
const slideMargin = 119; //슬라이드간의 margin 값

//전체 슬라이드 컨테이너 넓이 설정 
slides.style.width = (slideWidth + slideMargin) * slideCount + 'px';

function moveSlide(num) { 
    slides.style.left = -num * 503 + 'px'; 
    currentIdx = num; 
}

next.addEventListener('click', function () { 
    if (currentIdx < slideCount - 3){
        moveSlide(currentIdx + 1);
        console.log(currentIdx);
    }else{
        moveSlide(0);
    }
});


prev.addEventListener('click', function () { 
    if (currentIdx > 0){
        moveSlide(currentIdx - 1);
    }else{
        moveSlide(slideCount - 3);
    }
});

