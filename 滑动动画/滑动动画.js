$(function () {
    $(".header").on("click","li",function () {
        var curIndex = $(this).index(), mlValue = "-" + curIndex * 100 + "%";
        /*index()获取header里的li，并确定为第几个然后返回数字*/
        if ($(".big").hasClass("active")) {
            $(".main").animate({marginLeft: mlValue});
        }
        else{
            $(".main").css({marginLeft:mlValue});
            $(".big").animate({height:"200px"}).addClass("active");
        }
    });
});