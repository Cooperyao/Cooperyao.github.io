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
        var alist = $(".navbar").find("a");
        var nowFloor = Math.floor((scrollH-500)/800);
        if(scrollH >= 800){
            $(".navbar").css({
                "position":"fixed",
                "top":"0",
                "width":"100%",
            });
        }else{
            $(".navbar").css({
                "position":"static",
            })
        }
        // 导航条触发fixed效果
        if(scrollH <= 500){
            $(alist).removeClass("active");
        }else{
            $(alist).eq(nowFloor)
            .addClass("active").parent()
            .siblings().children().removeClass("active");
        }
        // 滚动条触发导航高亮
    })
    $(".navbar").find("a").click(function(){
        $(this).addClass("active")
        .parent().siblings()
        .children().removeClass("active");
    })
    //导航条当前位置效果
})