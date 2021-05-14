$(function () {
  $(".hero__left-slider").slick({
    arrows: false,
    fade: true,
    cssEase: "linear",
    draggable: false,
    swipe: false,
  });
});

var $slider = $(".hero__right-slider");
if ($slider.length) {
  var currentSlide;
  var sliderCounter = document.createElement("div");
  sliderCounter.classList.add("slider__counter");

  var updateSliderCounter = function (slick, currentIndex) {
    currentSlide = slick.slickCurrentSlide() + 1;
    $(sliderCounter).text("0" + currentSlide);
  };

  $slider.on("init", function (event, slick) {
    $slider.append(sliderCounter);
    updateSliderCounter(slick);
  });

  $slider.on("afterChange", function (event, slick, currentSlide) {
    updateSliderCounter(slick, currentSlide);
  });

  $slider.slick({
    slidesToShow: 3,
    asNavFor: ".hero__left-slider",
  });
}

$(".bg__slider").slick({
  arrows: false,
  draggable: false,
  swipe: false,
});

$(".tourism__slider").slick({
  slidesToShow: 4,
  infinite: true,
  arrows: true
});
