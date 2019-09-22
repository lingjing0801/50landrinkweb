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
    // 城市連動區域
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
            case 5:
                $("#dist option").remove();
                var array = ["北區", "東區", "香山區", "新竹縣"];
                //利用each遍歷array中的值並將每個值新增到Select中
                $.each(array, function (i, val) {
                    $("#dist").append($("<option value='" + array[i] + "'>" + array[i] + "</option>"));
                });
                break;
            case 6:
                $("#dist option").remove();
                var array = ["苗栗市", "苗栗縣"];
                //利用each遍歷array中的值並將每個值新增到Select中
                $.each(array, function (i, val) {
                    $("#dist").append($("<option value='" + array[i] + "'>" + array[i] + "</option>"));
                });
                break;
            case 7:
                $("#dist option").remove();
                var array = ["北區", "北屯區", "南屯區", "東區", "西區", "中區", "大里區", "霧峰區", "烏日區", "太平區", "后里區", "大雅區", "豐原區", "神岡區", "潭子區", "東勢區", "新社區", "大肚區", "大甲區", "沙鹿區", "清水區", "梧棲區"];
                //利用each遍歷array中的值並將每個值新增到Select中
                $.each(array, function (i, val) {
                    $("#dist").append($("<option value='" + array[i] + "'>" + array[i] + "</option>"));
                });
                break;
            case 8:
                $("#dist option").remove();
                var array = ["南投市", "南投縣"];
                //利用each遍歷array中的值並將每個值新增到Select中
                $.each(array, function (i, val) {
                    $("#dist").append($("<option value='" + array[i] + "'>" + array[i] + "</option>"));
                });
                break;
            case 9:
                $("#dist option").remove();
                var array = ["彰化市", "彰化縣"];
                //利用each遍歷array中的值並將每個值新增到Select中
                $.each(array, function (i, val) {
                    $("#dist").append($("<option value='" + array[i] + "'>" + array[i] + "</option>"));
                });
                break;
            case 10:
                $("#dist option").remove();
                var array = ["雲林縣"];
                //利用each遍歷array中的值並將每個值新增到Select中
                $.each(array, function (i, val) {
                    $("#dist").append($("<option value='" + array[i] + "'>" + array[i] + "</option>"));
                });
                break;
            case 11:
                $("#dist option").remove();
                var array = ["嘉義市", "嘉義縣"];
                //利用each遍歷array中的值並將每個值新增到Select中
                $.each(array, function (i, val) {
                    $("#dist").append($("<option value='" + array[i] + "'>" + array[i] + "</option>"));
                });
                break;
            case 12:
                $("#dist option").remove();
                var array = ["北區", "東區", "永康區", "中西區", "安平區", "南區"];
                //利用each遍歷array中的值並將每個值新增到Select中
                $.each(array, function (i, val) {
                    $("#dist").append($("<option value='" + array[i] + "'>" + array[i] + "</option>"));
                });
                break;
            case 13:
                $("#dist option").remove();
                var array = ["三民區", "大寮區", "林園區", "小港區", "大社區", "仁武區", "左營區", "前金區", "前鎮區", "苓雅區", "新興區", "楠梓區", "鼓山區", "旗山區", "旗津區", "鳳山區", "鳥松區", "橋頭區", "阿蓮區", "燕巢區", "岡山區", "大樹區", "鹽埕區"];
                //利用each遍歷array中的值並將每個值新增到Select中
                $.each(array, function (i, val) {
                    $("#dist").append($("<option value='" + array[i] + "'>" + array[i] + "</option>"));
                });
                break;
            case 14:
                $("#dist option").remove();
                var array = ["屏東市"];
                //利用each遍歷array中的值並將每個值新增到Select中
                $.each(array, function (i, val) {
                    $("#dist").append($("<option value='" + array[i] + "'>" + array[i] + "</option>"));
                });
                break;
            case 15:
                $("#dist option").remove();
                var array = ["台東市"];
                //利用each遍歷array中的值並將每個值新增到Select中
                $.each(array, function (i, val) {
                    $("#dist").append($("<option value='" + array[i] + "'>" + array[i] + "</option>"));
                });
                break;
            case 16:
                $("#dist option").remove();
                var array = ["馬公市"];
                //利用each遍歷array中的值並將每個值新增到Select中
                $.each(array, function (i, val) {
                    $("#dist").append($("<option value='" + array[i] + "'>" + array[i] + "</option>"));
                });
                break;
            case 17:
                $("#dist option").remove();
                var array = ["金門縣"];
                //利用each遍歷array中的值並將每個值新增到Select中
                $.each(array, function (i, val) {
                    $("#dist").append($("<option value='" + array[i] + "'>" + array[i] + "</option>"));
                });
                break;
        }
    });
});
