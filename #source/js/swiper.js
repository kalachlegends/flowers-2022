var swiper = new Swiper('.mySwiper', {
  navigation: {
          nextEl: ".swiper-button-next-swiper",
          prevEl: ".swiper-button-prev-swiper",
        },
  autoplay: {
   delay: 4000,
 },
  effect: 'coverflow',
  coverflowEffect: {
    rotate: 30,
    slideShadows: false,
  },
});
   


    var swiper = new Swiper(".swiper-cart", {
    	 navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        slidesPerView: 1,
        spaceBetween: 10,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        breakpoints: {
          640: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        },
      });