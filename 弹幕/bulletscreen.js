$(function () {
    $(".btn").click(function () {
        text=$(".input_text").val();//获取文本
        var top=Math.random()*$(".content").height();//随机高度
        $("<div class='float'>"+text+"</div>").css("top",top)
            .appendTo(".content");//创建新的div并加入到content
        $(".input_text").val("");//清空输入框
        $(".float").animate({left:"-400px"},13000,function () {
            $(this).remove();//超出范围删除该div
        });
    })
})
