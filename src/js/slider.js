const swiper = new Swiper('.swiper', {
  // Optional parameters
  loop: true,

  // If we need pagination
  pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true,
  },
//  autoplay: {
//    delay: 1500,
//     },
    slidesPerView: 1.3,
 
    spaceBetween: 10,

    speed: 2000,
 
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
//   scrollbar: {
//     el: '.swiper-scrollbar',
//   },
   breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    // when window width is >= 428px
    428: {
      slidesPerView: 3,
      spaceBetween: 30
    },
    // when window width is >= 768px
    768: {
      slidesPerView: 4,
      spaceBetween: 40
       },
    // when window width is >= 1158px
    1158: {
      slidesPerView: 5,
      spaceBetween: 50
    }
  }
});