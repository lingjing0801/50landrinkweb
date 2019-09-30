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

    // 城市連到區域
    $(function () {
        var $dist = $('#dist');
        var original = $dist.html();

        $('#location').change(function () {
            var val1 = $(this).val();

            $dist.html(original).find('option').each(function () {
                var val2 = $(this).data('val');
                if (val1 != val2) {
                    // 請選擇區域 不刪除 (如果刪了每筆第一選項就連不到資料 ) 以及 value 對應不到data-val的都刪掉
                    $(this).not('.msg').remove();
                }
            });

        });
    });

    // 區域和按鈕 連到資料
    $(function () {
        var $info = $('.info');
        var next = $info.html();

        $('#dist').change(function () {
            var info1 = $(this).val();

            $('.btn').click(function (e) {
                // display 要改 flex 要不然會跑版 , bootstrap 裡 grid 是用flex 不是 inline-block
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

