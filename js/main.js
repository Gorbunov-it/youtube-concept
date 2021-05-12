const swiper = new Swiper('.channel-slider', {
  // Optional parameters
  loop: true,
  slidesPerView: 6,

  // Navigation arrows
  navigation: {
    nextEl: '.channel-button-next',
    prevEl: '.channel-button-prev',
  }
});

const recommended_swiper = new Swiper('.recommended-slider', {
  // Optional parameters
  loop: true,
  slidesPerView: 3,
  breakpoints: {
    1600: {
      slidesPerView: 3
    },

    1100: {
      slidesPerView: 2
    },
  } ,
  // Navigation arrows
  navigation: {
    nextEl: '.recommended-button-next',
    prevEl: '.recommended-button-prev',
  }
});

const foodDrink_swiper = new Swiper('.foodDrink-slider', {
  // Optional parameters
  loop: true,
  slidesPerView: 6,
  // Navigation arrows
  navigation: {
    nextEl: '.foodDrink-button-next',
    prevEl: '.foodDrink-button-prev',
  }
});
