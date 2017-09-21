$(function(){
    $("button").click(function(){
        var cur = $(this).index();
        $(this).addClass("active")
        .siblings().removeClass();
        // botton增加active
        var skin = $("div[class*=blur]").attr("class");
        var now = "blur"+cur;
        if(skin!="blur"+cur){
            $("."+skin).removeClass().addClass(now);
        }
        if(cur==3){
            $(".blur3").css({"top":"30%"})
        }else{
            $("div[class*=blur]").css({"top":"0"})
        }
    })
})
