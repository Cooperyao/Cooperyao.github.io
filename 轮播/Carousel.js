$(function () {
    //点击上翻显示上一张图片
    $("#prev").click(function () {
        clearInterval(time);
        now=(now-1+4)%4;
        autoPlay();
        $(".pic li:eq("+now+")").addClass("active").siblings().removeClass();
        $(".num li:eq("+now+")").addClass("visited").siblings().removeClass();
    })
    //点击下翻显示下一张图片
    $("#next").click(function () {
        clearInterval(time);
        now=(now+1+4)%4;
        autoPlay();
        $(".pic li:eq("+now+")").addClass("active").siblings().removeClass();
        $(".num li:eq("+now+")").addClass("visited").siblings().removeClass();
    })
    //自动播放
    var time="";
    var now=0;
    function autoPlay(){
        time = setInterval(function(){
            if(now<3) {
                now++;
            }else{
                now=0;
            }
            $(".pic li:eq("+now+")").addClass("active").siblings().removeClass();
            $(".num li:eq("+now+")").addClass("visited").siblings().removeClass();
        },1500);
    }
    autoPlay();
    //点击数字显示对应图片
    $(".num li").click(function () {
        clearInterval(time);
        numIndex=$(this).index();
        now=numIndex;
        autoPlay();
        $(this).addClass("visited").siblings().removeClass();
        $(".pic li:eq("+numIndex+")").addClass("active").siblings().removeClass();
    })
    //鼠标经过是停止轮播
    $(".pic img").mouseover(function () {
        clearInterval(time);
    })
    //鼠标离开时继续轮播
    $(".pic img").mouseout(function () {
        autoPlay();
    })
})
