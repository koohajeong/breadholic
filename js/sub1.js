$(document).ready(function () {

  // header 고정
    // var menu = $(".header").offset().top;

    $(document.body).scroll(function () {
  
      // var window = $(this).scrollTop();
      // console.log(window);
  
      if ($(this).scrollTop() > 0) {
        $(".header").addClass("fixed");
      } else {
        $(".header").removeClass("fixed");
      }
    });

    // brandname
    $(document.body).scroll(function () {
  
      if ($(this).scrollTop() >= 20) {
        $(".brandname>.text>h1").css("animation", "slide 1s ease-in-out forwards");
        $(".brandname>.text>h2").css("animation", "slide 1s 0.3s ease-in-out forwards");
        $(".name1").css("animation", "slide 1s 0.6s ease-in-out forwards");
        $(".name2").css("animation", "slide 1s 0.9s ease-in-out forwards");
      } else {
        $(".brandname>.text>h1").css("animation", "0");
        $(".brandname>.text>h2").css("animation", "0");
        $(".name1").css("animation", "0");
        $(".name2").css("animation", "0");
      }
    });

    // brandpromise
    $(document.body).scroll(function () {
  
      if ($(this).scrollTop() >= 600) {
        $(".brandpromise>.text>h1").css("animation", "slide 1s ease-in-out forwards");
        $(".brandpromise>.text>h2").css("animation", "slide 1s 0.3s ease-in-out forwards");
        $(".promise1").css("animation", "slide 1s 0.6s ease-in-out forwards");
        $(".promise2").css("animation", "slide 1s 0.9s ease-in-out forwards");
        $(".promise3").css("animation", "slide 1s 0.9s ease-in-out forwards");
      } else {
        $(".brandpromise>.text>h1").css("animation", "0");
        $(".brandpromise>.text>h2").css("animation", "0");
        $(".promise1").css("animation", "0");
        $(".promise2").css("animation", "0");
        $(".promise3").css("animation", "0");
      }
    });

    // history
    $(document.body).scroll(function () {
  
      if ($(this).scrollTop() >= 1200) {
        $(".history>.text>h1").css("animation", "slide 1s ease-in-out forwards");
        $(".history>.text>h2").css("animation", "slide 1s 0.3s ease-in-out forwards");
        $(".orderba").addClass("orderba-slide");
        $(".order-1").css("animation", "orderslide 0.5s 0.6s ease-in forwards");
        $(".order-2").css("animation", "orderslide 0.5s 1.6s ease-in forwards");
        $(".order-3").css("animation", "orderslide 0.5s 2.6s ease-in forwards");
        $(".order-4").css("animation", "orderslide 0.5s 3.6s ease-in forwards");
      } else {
        $(".history>.text>h1").css("animation", "0");
        $(".history>.text>h2").css("animation", "0");
        $(".orderba").removeClass("orderba-slide");
        $(".order-1").css("animation", "0");
        $(".order-2").css("animation", "0");
        $(".order-3").css("animation", "0");
        $(".order-4").css("animation", "0");
      }
    });

});  //ready 끝