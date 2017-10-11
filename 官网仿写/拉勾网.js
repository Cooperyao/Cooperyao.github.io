$(function(){
    $(".newJob").click(function(){
        $(this).addClass("active").siblings().removeClass("active");
        $(".newJob-list").css("display","block")
        .siblings(".hotJob-list").css("display","none");
    })
    $(".hotJob").click(function(){
        $(this).addClass("active").siblings().removeClass("active");        
        $(".hotJob-list").css("display","block")
        .siblings(".newJob-list").css("display","none");
    })
    $(".citybox .btn").click(function(e){
        e.preventDefault();
        var city = $(this).text();
        $(".city h4").text(city);
    })
    $(".menu").mouseover(function(){
        $(this).children(".list-inline").addClass("current");
        $(this).children(".menu-d").css("display","block");
    })
    $(".menu").mouseout(function(){
        $(this).children(".list-inline").removeClass("current");
        $(this).children(".menu-d").css("display","none");
    })
})