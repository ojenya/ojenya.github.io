$(document).ready(function() {

    //ID блока с ссылками #prime_nav
    $("a").on("click", function(event) {
        //отменяем стандартную обработку нажатия по ссылке
        event.preventDefault();
        //забираем идентификатор бока с атрибута href
        var id = $(this).attr('href'),

            //узнаем высоту от начала страницы до блока на который ссылается якорь
            top = $(id).offset().top;

        //анимируем переход на расстояние - top за 1500 мс
        $('body,html').animate({ scrollTop: top }, 2500);
        // $('.intro').addClass('hide');
    });

    $(document).keydown(function(e) {
        // console.log(document.body.clientHeight)
        if (e.keyCode === 38 || e.keyCode === 37) {
            console.log('up')
            $('html,body').animate({ scrollTop: 0 }, 400);
        } else if (e.keyCode === 40 || e.keyCode === 39) {

            $('body,html').animate({ scrollTop: document.body.clientHeight }, 2500);

        }
    })

});