$(document).ready(function() {


    $('.little').each(function(i) {
        $(this).attr('num', i)
    })
    $('.hidden').each(function(i) {
        $(this).attr('num', i)
    })
    $('p').each(function(i) {
        $(this).attr('num', i)
    })
    $('.moreText').each(function(i) {
        $(this).attr('num', i)
    })
    $('.more').each(function(i) {
        $(this).attr('num', i)
    })
    $('.hide').each(function(i) {
        $(this).attr('num', i)
    })


    $('.little').click(function() {
        $('body').addClass('opacity')
        $('.hidden').hide()

        var thisNum = $(this).attr('num')
        $('.hidden[num="' + thisNum + '"]')
            .show()                   //делаем блок видимым
            .animate({               //на центр с анимцией
                "top": "50%",
                "left": "50%",
                "margin-top": "-300px",
                "margin-left": "-300px",
                "width": "600px",
                "height": "auto",               

            }, 300, function(){
                    $('.close').click(function() {
                        $('body').removeClass('opacity')
                        $('.hidden').hide()
                    })     //добавляем кнопочку Закрыть
            })

        var txt = $('p[num="' + thisNum + '"]').text()   //вычисляем весь текст
        var less = txt.substr(0,100)        // обрезаем
        var endTxt = txt.substr(101) /// получаем обрезанный текст

        $('p[num=' + thisNum + ']').html(less+'<span class="moreText" num="' + thisNum + '"></span>')   //выводим обрезанный параграф с пустым span
        $('.more').show()      // при обрезанном тексте отображаем только ссылки read more
        $('.hide').hide()      // и прячем все ссылки hide
        $('.moreText[num=' + thisNum + ']').text(endTxt).hide() //заносим в span то, что обрезали, и прячем
        
        $('.more[num=' + thisNum + ']').click(function(){           // при клике на ссылку read more 
            $('.more[num=' + thisNum + ']').hide()                  // прячем ссылку
            $('.moreText[num=' + thisNum + ']').show()              // отображаем отсеченный текст
            $('.hide[num=' + thisNum + ']').show()                  // показываем ссылку hide
        })
        $('.hide[num=' + thisNum + ']').click(function(){           // при клике на ссылку hide 
            $('.hide[num=' + thisNum + ']').hide()                  // прячем ссылку
            $('.moreText[num=' + thisNum + ']').hide()              // прячем отсеченный текст
            $('.more[num=' + thisNum + ']').show()                  // показываем ссылку read more
        })

    })      //конец







})
