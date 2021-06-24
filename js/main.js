// Search
const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');

searchEl.addEventListener('click', function() {
  searchInputEl.focus();
});
searchInputEl.addEventListener('focus', function() {
  searchEl.classList.add('focused');
  searchInputEl.setAttribute('placeholder', '통합검색');
});
searchInputEl.addEventListener('blur', function() {
  searchEl.classList.remove('focused');
  searchInputEl.setAttribute('placeholder', '')
});

// Swiper
new Swiper('.promotion .swiper-container', {
  autoplay: {
    delay: 4000
  },
  loop: true,
  slidesPerView: 1,
  spaceBetween: 10,
  centeredSlides: true,
  pagenation: {
    el: '.promotion .swiper-pagenation',
    clickable: true
  },
  navigation: {
    prevEl: '.promotion .swiper-prev',
    nextEl: '.promotion .swiper-next'
  }
});

// scroll-spy 스크롤감지
const spyEls = document.querySelectorAll('section.scroll-spy');
spyEls.forEach(function(spyEl){
  new ScrollMagic
  .Scene({
    triggerElement: spyEl, // 보여짐 여부를 감시할 요소를 지정
    triggerHook: .8, // 뷰포트 세로축 0~1사이 위치
  })
  .setClassToggle(spyEl, 'show') // spyEl에 show라는 클래스를
  .addTo(new ScrollMagic.Controller());
});

// thisYear
const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear();

// to-top 버튼
const toTopEl = document.querySelector('#to-top')

window.addEventListener('scroll', _.throttle(function() {
  if(window.scrollY > 500) {
    gsap.to(toTopEl, .2, {
      x: 0
    });
  } else {
    gsap.to(toTopEl, .2, {
      x: 100
    })
  }
}, 300));

toTopEl.addEventListener('click', function() {
  gsap.to(window, .7, {
    scrollTo: 0,
    ease: Power1.easeInOuteaseInOut
  })
})

