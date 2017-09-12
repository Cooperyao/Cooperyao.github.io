$(function(){
    var time="";
    var now=$("img[class=current]").index();
    function autoPlay(){
        time = setInterval(function(){
            if(now<3) {
                now++;
            }else{
                now=0;
            }
            $(".floor1_bg img:eq("+now+")").addClass("current").siblings().removeClass();
        },5000);
    }
    autoPlay();
    // 封面轮播动画
    $(window).scroll(function(){
        var scrollH = $(document).scrollTop();
        var alist = $("nav").find("a");
        var nowFloor = Math.floor((scrollH-600)/800);
        if(scrollH >= 800){
            $("nav").css({
                "position":"fixed",
                "top":"0",
            });
        }else{
            $("nav").css({
                "position":"static",
                "top":"800px",
            })
        }
        // 导航条触发fixed效果
        if(scrollH <= 600){
            $(alist).removeClass();
        }else{
            $(alist).eq(nowFloor)
            .addClass("active").parent()
            .siblings().children().removeClass();
        }
        // 滚动条触发导航高亮
    })
    $("nav").find("a").click(function(){
        $(this).addClass("active")
        .parent().siblings()
        .children().removeClass();
    })
    //导航条当前位置效果
})