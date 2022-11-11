
var swiper = new Swiper(".mySwiper", {
  navigation: {
    nextEl: ".s1",
    prevEl: ".s2",
  },
    slidesPerView: 5,
    spaceBetween: 60,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    breakpoints: {
      "@0.00": {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      "@0.75": {
        slidesPerView: 3,
        spaceBetween: 40,
      },
  
      "@1.50": {
        slidesPerView: 5,
        spaceBetween: 60,
      },
    },
  });


