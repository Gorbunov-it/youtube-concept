const swiper = new Swiper('.channel-slider', {
  // Optional parameters
  loop: true,
  slidesPerView: 1,
  spaceBetween: 20,
  breakpoints: {
    1900: {
      slidesPerView: 6
    },
    1600: {
      slidesPerView: 5
    },
    1300: {
      slidesPerView: 4
    },
    1100: {
      slidesPerView: 3
    },
    800: {
      slidesPerView: 2
    }
  },
  // Navigation arrows
  navigation: {
    nextEl: '.channel-button-next',
    prevEl: '.channel-button-prev',
  }
});

const recommended_swiper = new Swiper('.recommended-slider', {
  // Optional parameters
  loop: true,
  slidesPerView: 1,
  spaceBetween: 20,
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
  slidesPerView: 1,
  spaceBetween: 20,
  breakpoints: {
    1900: {
      slidesPerView: 6
    },
    1600: {
      slidesPerView: 5
    },
    1300: {
      slidesPerView: 4
    },
    1100: {
      slidesPerView: 3
    },
    800: {
      slidesPerView: 2
    }
  },
  // Navigation arrows
  navigation: {
    nextEl: '.foodDrink-button-next',
    prevEl: '.foodDrink-button-prev',
  }
});

const searchButton = document.querySelector('.mobile-search');
const mobileSearch = document.querySelector('.input-group');
searchButton.addEventListener('click', () => {
  mobileSearch.classList.toggle('is-open');
});

if (document.documentElement.scrollWidth <= 640) {
  swiper.destroy();
  recommended_swiper.destroy();
  foodDrink_swiper.destroy();
}
