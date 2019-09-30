// 按下回到頂端按鈕時回到頂端
// click
// animate 動畫 fadein
// scrollTop 元素的上方
// jqready tab
$(document).ready(function () {
    $('#back-to-top').click(function (e) {
        $('html,body').animate({ scrollTop: 0 }, 1000);

    });
    $(window).scroll(function () {
        // 輸出訊息至控制台
        // console.log('捲動中...');
        // scrollTop() 元素的上方位置
        // console.log($(window).scrollTop());

        // 如果螢幕高度 >=230 就顯示按鈕 否則就隱藏按鈕
        if ($(window).scrollTop() >= 230) {
            $('#back-to-top').fadeIn(500);
        } else {
            $('#back-to-top').fadeOut(500);
        }
    });

    $(function () {
        var $dist = $('#dist');
        var original = $dist.html();

        $('#location').change(function () {
            var val1 = $(this).val();

            $dist.html(original).find('option').each(function () {
                var val2 = $(this).data('val');
                if (val1 != val2) {
                    $(this).not('.msg').remove();
                }
            });

        });
    });


    $(function () {
        var $info = $('.info');
        var next = $info.html();

        $('#dist').change(function () {
            var info1 = $(this).val();

            $('.btn').click(function (e) {
                $('.info').css('display','flex');    
                       
                $info.html(next).find('div').each(function () {
                    var info2 = $(this).data('val');
                    if (info1 != info2) {
                        $(this).remove();
                    }
                });
            });
        });
    });



});

