let swiper = new Swiper(".centered-slide-carousel", {
  centeredSlides: true,
  slidesPerView: "auto", // للسماح بعرض أكثر من بطاقة
  direction: "horizontal",
  paginationClickable: true,
  loop: true,
  spaceBetween: 40,
  slideToClickedSlide: true,
  rtl: true,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
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
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
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
  autoplay: {
    delay: 2000,
  },
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
  // sidebar
  document.addEventListener("DOMContentLoaded", function () {
    console.log(document.getElementById("menu-btn")); // للتأكد من وجود العنصر
  
    const menuBtn = document.getElementById("menu-btn");
    const sidebar = document.getElementById("sidebar");
    const overlay = document.getElementById("overlay");
    const mainContent = document.getElementById("main-content");
  
    function toggleSidebar() {
        menuBtn.classList.toggle("active");
        sidebar.classList.toggle("active");
        overlay.classList.toggle("active");
        mainContent.classList.toggle("blur-effect");
        
        document.body.style.overflow = sidebar.classList.contains("active") 
            ? "hidden" 
            : "";
    }
  
    menuBtn.addEventListener("click", function (e) {
        e.stopPropagation();
        toggleSidebar();
    });
  
    overlay.addEventListener("click", toggleSidebar);
  
    document.addEventListener("click", function (e) {
        if (!sidebar.contains(e.target) && e.target !== menuBtn) {
            sidebar.classList.remove("active");
            overlay.classList.remove("active");
            menuBtn.classList.remove("active");
            mainContent.classList.remove("blur-effect");
            document.body.style.overflow = "";
        }
    });
  });
// ............................................
function toggleSubMenu() {
  const menu = document.getElementById("subMenu");
  const arrow = document.getElementById("arrow");
  menu.classList.toggle("hidden");
  arrow.classList.toggle("rotate-180");
}
