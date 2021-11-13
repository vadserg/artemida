// затеняем кнопку "НАВЕРХ" вначале
$('#upbutton').stop(true, false).fadeOut('fast');

// показываем кнопку только на экранах шире 1200 и при прокрутке более 300
$(window).scroll(function() {
    if ($(window).width() > 1200) {
        if ($(window).scrollTop() > 300) {
            if ($('#upbutton').is(':hidden')) {
                $('#upbutton').css({ opacity: 1 }).fadeIn('slow');
            }
        } else {
            $('#upbutton').stop(true, false).fadeOut('fast');
        }
    }
});

// скроллинг вверх при нажатии на кнопку
$('#upbutton').click(function() {
    $('html, body').stop().animate({ scrollTop: 0 }, 1000);
});

// прокрутка до нужного раздела при переходе на другую страницу 
// по якорной ссылке с коррекцией отступа под навигационную панель
$(window).on('load', function() { // ждем загрузки страницы
    var hash = location.hash;  // оствляем якорь #xxxxxx
    $('html, body').animate({  // собственно прокрутка
    scrollTop: $(hash).offset().top - 70}, 1000);  // отступ от якоря 70пикселей, время прокрутки 1сек.
  });


    


   