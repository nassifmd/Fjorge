// Slick JS
$(document).ready(function () {
  $(".home__slider").slick({
    autoplay: true,
    speed: 800,
    arrows: true,
    dots: true,
    cssEase: "linear",
    fade: true,
  });

  $(".home__slider").on("afterChange", () => {
    changeSlideOnArrowClick();
  });
});

// -------------

// JS for slider functionality

let cSlide = 1;
let autoSlide = true;

document
  .getElementById("fa-chevron-left-1")
  .addEventListener("click", function () {
    document.querySelector(".slick-prev").click();
    // changeSlideOnArrowClick();
  });

document.getElementById("fa-chevron-right-1").addEventListener("click", () => {
  document.querySelector(".slick-next").click();
  //   changeSlideOnArrowClick();
});

document.getElementById("slide-bar-1").addEventListener("click", () => {
  autoSlide = false;
  changeSlide("slide-bar-1", "slick-slide-control00", 1);
});

document.getElementById("slide-bar-2").addEventListener("click", () => {
  autoSlide = false;
  changeSlide("slide-bar-2", "slick-slide-control01", 2);
});

const changeSlide = (dASlide, slickElemId, sNum) => {
  changeSlideColor(dASlide, sNum);
  document.getElementById(slickElemId).click();
};

const changeSlideColor = (dASlide, sNum) => {
  cSlide = sNum;
  document.querySelector(".bar--active").classList.remove("bar--active");
  document.getElementById(dASlide).classList.add("bar--active");
};

const changeSlideOnArrowClick = () => {
  if (!autoSlide) return;
  if (cSlide === 1) changeSlideColor("slide-bar-2", 2);
  else changeSlideColor("slide-bar-1", 1);
  autoSlide = true;
};

// Menu
document.getElementById("burger").addEventListener("click", () => {
  let menu = document.getElementById("smallNav");

  console.log(menu);
  menu.style.display = "block";
});
document.getElementById("crossIcon").addEventListener("click", () => {
  let menu = document.getElementById("smallNav");
  menu.style.display = "none";
});
