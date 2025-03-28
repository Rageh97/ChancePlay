

let swiper = new Swiper(".centered-slide-carousel", {
  centeredSlides: true,
  slidesPerView: "auto", // للسماح بعرض أكثر من بطاقة
  direction: "horizontal",
  paginationClickable: true,
  loop: true,
  spaceBetween: 40,
  slideToClickedSlide: true,
  rtl: true,

  pagination: {
    el: ".centered-slide-carousel .swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1.8,
    },
    480: {
      slidesPerView: 1.9,
    },
    768: {
      slidesPerView: 2.2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

// .....................................
let valuecarousel = new Swiper(".value-carousel", {
  centeredSlides: true,
  slidesPerView: "auto",
  effect: "slide",
  paginationClickable: true,
  loop: true,
  spaceBetween: 40,
  slideToClickedSlide: true,

  pagination: {
    el: ".value-carousel .swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1.7,
    },
    480: {
      slidesPerView: 2.2,
    },
    768: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});
// ........................................................
let clientSwiper = new Swiper(".client-carousel", {
  centeredSlides: true,
  slidesPerView: "auto",
  effect: "slide",
  paginationClickable: true,
  loop: true,
  spaceBetween: 40,
  slideToClickedSlide: true,

  pagination: {
    el: ".client-carousel .swiper-pagination",
    clickable: true,
  },
  // autoplay: {
  //   delay: 2000,
  // },
  breakpoints: {
    0: {
      slidesPerView: 1.7,
      spaceBetween: 60,
    },
    480: {
      slidesPerView: 2.2,
    },
    768: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});
// ....................................
const iconswiper = new Swiper(".iconsSwiper", {
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 5,
  loop: true,
  loopedSlides: 5,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 2.5,
    slideShadows: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 5,
    },
    480: {
      slidesPerView: 5,
    },
    768: {
      slidesPerView: 5,
    },
    1024: {
      slidesPerView: 5,
    },
  },
});
