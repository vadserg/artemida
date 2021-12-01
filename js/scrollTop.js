// затеняем кнопку "НАВЕРХ" вначале
$('.upbutton').stop().fadeOut('fast');
//const upBtn = document.getElementById('upbutton')
//upBtn.style.display = 'none'

// показываем кнопку только на экранах шире 1200 и при прокрутке более 300
$(window).scroll(function () {
    if ($(window).width() > 1200) {
        if ($(window).scrollTop() > 600) {
            //$('#upbutton').css({ opacity: 1 }).fadeIn('slow');
            $('.upbutton').css({ opacity: 1 }).fadeIn('slow');
        } else {
            $('.upbutton').stop().fadeOut('fast');
            //upBtn.style.display = 'none'
        }
    }
});

// скроллинг вверх при нажатии на кнопку
$('.upbutton').click(function () {
    $('html, body').stop().animate({ scrollTop: 0 }, 1000);
});
