//stories mainpage
const swiperStories = new Swiper(".stories-slider", {
  slidesPerView: "auto",
});
//categories mainpage
const swiperMainCategories = new Swiper(".main-cat-slider", {
  slidesPerView: 1,
  navigation: {
    nextEl: ".main-cat-slider .swiper-button-next",
    prevEl: ".main-cat-slider .swiper-button-prev",
  },
  breakpoints: {
    1024: {
      slidesPerView: 2,
    },
  },
});
//slider new goods mainpage
const swiperMainNew = new Swiper(".main-new-slider", {
  slidesPerView: 2,
  spaceBetween: 10,
  breakpoints: {
    750: {
      slidesPerView: "auto",
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    1160: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
    1540: {
      slidesPerView: 5,
      spaceBetween: 20,
    },
  },
});
//slider hits mainpage
const swiperMainHit = new Swiper(".main-hit-slider", {
  slidesPerView: 2,
  spaceBetween: 10,
  breakpoints: {
    750: {
      slidesPerView: "auto",
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    1160: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
    1540: {
      slidesPerView: 5,
      spaceBetween: 20,
    },
  },
});
//slider actions mainpage
const swiperMainActions = new Swiper(".main-actions-slider", {
  slidesPerView: "auto",
  spaceBetween: 20,
  breakpoints: {
    1024: {
      slidesPerView: 4,
    },
  },
});
//photo slider catalog item
const catalogItemSlider = document.querySelectorAll(".catalog-item-photo");
for (i = 0; i < catalogItemSlider.length; i++) {
  catalogItemSlider[i].classList.add("catalog-item-photo-" + i);

  var slider = new Swiper(".catalog-item-photo-" + i, {
    slidesPerView: 1,
    spaceBetween: 10,
    navigation: {
      nextEl: ".catalog-item-photo-" + i + " .swiper-button-next",
      prevEl: ".catalog-item-photo-" + i + " .swiper-button-prev",
    },
    pagination: {
      el: ".catalog-item-photo-" + i + " .swiper-pagination",
      type: "bullets",
    },
  });
}
//header scroll trigger
window.addEventListener("scroll", function () {
  if (window.pageYOffset > 200) {
    header.classList.remove("header-main");
  } else {
    header.classList.add("header-main");
  }
});
// jquery menu
$(function () {
  function burgerInit() {
    if (window.innerWidth <= 1024) {
      $(".js-menu-trigger").on("click", function () {
        $(".js-menu").toggleClass("menu-active");
        $(".page").toggleClass("no-scroll");

        $(".js-submenu-active").removeClass("js-submenu-active");
        $('.hide-siblings').removeClass('hide-siblings');
        $('.submenu-parent').removeClass('submenu-parent');
        $(".js-menu").removeClass("submenu-active");
        $(".on-top").removeClass("on-top");
      });
      $(".js-submenu-trigger").on("click", function () {
        $(this).siblings(".js-submenu").addClass("js-submenu-active");
        $('.header-navigation').addClass("on-top");
        $(".js-menu").addClass("submenu-active");

        $(this).closest('.header-categories-item').addClass('hide-siblings');
        $(this).closest('.js-submenu-active').addClass('submenu-parent');
        $(this).closest('.js-submenu-active div').addClass('hide-siblings');
      });

      $(".js-back-trigger").on("click", function () {
        $(this).closest(".js-submenu").removeClass("js-submenu-active");
        $(this).closest('.hide-siblings').removeClass('hide-siblings');
        $(this).closest('.submenu-parent').removeClass('submenu-parent');

        if($(this).closest(".js-submenu").is(".dropdown-1")) {
          $('.header-navigation').removeClass("on-top");
          $(".js-menu").removeClass("submenu-active");
          $('.header-categories-item').removeClass('hide-siblings');
        }
      });
    }
  }

  burgerInit();
});
