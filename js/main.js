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
    $("#location").change(function () {
        switch (parseInt($(this).val())) {

            case 0:
                $("#dist option").remove();
                var array = ["請選擇區域"];
                //利用each遍歷array中的值並將每個值新增到Select中
                $.each(array, function (i, val) {
                    $("#dist").append($("<option value='" + array[i] + "'>" + array[i] + "</option>"));
                });
                break;
            case 1:
                $("#dist option").remove();
                var array = ["仁愛區"];
                //利用each遍歷array中的值並將每個值新增到Select中
                $.each(array, function (i, val) {
                    $("#dist").append($("<option value='" + array[i] + "'>" + array[i] + "</option>"));
                });
                break;
            case 2:
                $("#dist option").remove();
                var array = ["士林區", "大同區", "大安區", "中山區", "中正區", "內湖區", "文山區", "北投區", "松山區", "信義區", "南港區", "萬華區"];
                //利用each遍歷array中的值並將每個值新增到Select中
                $.each(array, function (i, val) {
                    $("#dist").append($("<option value='" + array[i] + "'>" + array[i] + "</option>"));
                });
                break;
            case 3:
                $("#dist option").remove();
                var array = ["板橋區", "汐止區", "深坑區", "瑞芳區", "新店區", "永和區", "中和區", "土城區", "三峽區", "樹林區", "鶯歌區", "三重區", "新莊區", "泰山區", "林口區", "蘆洲區", "五股區", "淡水區", "八里區"];
                //利用each遍歷array中的值並將每個值新增到Select中
                $.each(array, function (i, val) {
                    $("#dist").append($("<option value='" + array[i] + "'>" + array[i] + "</option>"));
                });
                break;
            case 4:
                $("#dist option").remove();
                var array = ["桃園區", "龜山區", "蘆竹區", "大園區", "八德區", "大溪區", "中壢區", "北投區", "龍潭區", "平鎮區", "楊梅區"];
                //利用each遍歷array中的值並將每個值新增到Select中
                $.each(array, function (i, val) {
                    $("#dist").append($("<option value='" + array[i] + "'>" + array[i] + "</option>"));
                });
                break;
        }
    });
});
