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
        var scrollH= $(document).scrollTop();
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
        var alist = $("nav").find("a");
        if(scrollH >= 600 && scrollH <= 1400){
            $(alist).eq(0)
            .addClass("active").parent()
            .siblings().children().removeClass();
        }
        else if(scrollH >= 1400 && scrollH <= 2200){
            $(alist).eq(1)
            .addClass("active").parent()
            .siblings().children().removeClass();
        }
        else if(scrollH >= 2200 && scrollH <= 3000){
            $(alist).eq(2)
            .addClass("active").parent()
            .siblings().children().removeClass();
        }
        else if(scrollH >= 3000 && scrollH <= 3800){
            $(alist).eq(3)
            .addClass("active").parent()
            .siblings().children().removeClass();
        }
        else if(scrollH >= 3800 && scrollH <= 4600){
            $(alist).eq(4)
            .addClass("active").parent()
            .siblings().children().removeClass();
        }
        else{
            $(alist).removeClass();
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