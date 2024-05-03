$(document).ready(function () {

    // main
    setInterval(function () {
        $('.main>ul').animate({
            left: '-=100%'
        }, 'slow', function () {
            $('.main>ul>li').first().appendTo('.main>ul');
            $('.main>ul').css('left', 0);
        })
    }, 5000);

    // 스크롤 양 확인
    $(document.body).scroll(function () {
        // var window = $(this).scrollTop();
        // console.log(window);
    });

    // menu
    $('.menu>div:nth-child(1) a').hover(function(){
        $('.img-1').css("animation", "img 1s ease-in-out forwards");
    }, function(){
        $('.img-1').css("animation", "0");
    });

    $('.menu>div:nth-child(2) a').hover(function(){
        $('.img-2').css("animation", "img2 1s ease-in-out forwards");
    }, function(){
        $('.img-2').css("animation", "0");
    });

    $('.menu>div:nth-child(3) a').hover(function(){
        $('.img-3').css("animation", "img3 1s ease-in-out forwards");
    }, function(){
        $('.img-3').css("animation", "0");
    });

    $('.menu>div:nth-child(4) a').hover(function(){
        $('.img-4').css("animation", "img2 1s ease-in-out forwards");
    }, function(){
        $('.img-4').css("animation", "0");
    });

    $('.menu>div:nth-child(5) a').hover(function(){
        $('.img-5').css("animation", "img 1s ease-in-out forwards");
    }, function(){
        $('.img-5').css("animation", "0");
    });

    // menu > h1, p
    $(document.body).scroll(function(){
        if($(this).scrollTop() >= 100){
            $('.menu-wrap h1>img').css("animation","h1 1.5s ease-in-out forwards");
            $('.menu-wrap p').css("animation","p 1.5s ease-in-out forwards");
        }else{
            $('.menu-wrap h1>img').css("animation","0");
            $('.menu-wrap p').css("animation","0");
        }
    });
});   // ready end