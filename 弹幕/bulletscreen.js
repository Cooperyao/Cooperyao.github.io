$(function () {
    $(".btn").click(function () {
        var text=$(".input_text").val();//获取文本
        var blurH = $(".blur").height();
        var top=Math.random()*(blurH/2);//随机高度
        $("<div class='float'>"+text+"</div>").css("top",top)
            .appendTo(".blur");//创建新的div并加入到blur
        $(".input_text").val("");//清空输入框
        $(".float").animate({left:"-400px"},13000,function () {
            $(this).remove();//超出范围删除该div
        });
    })
    // 弹幕效果
    $(".media a").click(function(){
        var link = $(this).data("src");
        var txt = $(this).text();
        console.log(txt);
        $(".content").attr("src",link);
        $(".content")[0].play();
        $(this).children(".media-body").addClass("active")
        .closest(".media").siblings().find(".media-body").removeClass("active");
        $(".mtitle small").text(txt);
    })
    //点播视频

})
