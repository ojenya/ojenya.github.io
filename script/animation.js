$(document).ready(function () { // Ждём загрузки страницы
    var intro = document.querySelector("#intro")
    var about = document.querySelector("#about")



    function interval() {
        if (intro.classList.contains("active")) {
            effectFirst();
        } else if (about.classList.contains("active")) {
            effectSecond();
        }
    }
	setInterval(interval, 1);

});


function effectFirst() {
    $(".intro .wrapper").css("animation", "fadein 3s");
    $(".about__title-wrap").css("animation", "fadeout 1s");
    $(".about__title-img").css("animation", "fadeout 1s");
    $(".about__title-img").css("animation", "pulsing_out 1s");
    
}

function effectSecond() {
    $(".intro .wrapper").css("animation", "fadeout 0.7s");
    $(".about__title-wrap").css("animation", "fadein 3s");
    $(".about__title-img").css("animation", "fadein 3s");
    $(".about__title-img").css("animation", "pulsing 1s");
   
}