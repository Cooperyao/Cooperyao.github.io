$(function () {
    //单选
    $("tbody .cbox").click(function () {
        var flag = true;
        $("tbody .cbox").each(function () {
            if (!this.checked) {
                flag = false;
                $(this).closest("tr").removeClass("on");//是否高亮
            } else {
                $(this).closest("tr").addClass("on");//是否高亮
            }
        })
        calculate();
        $("#check-all").prop("checked", flag);
    })

    //全选
    $("#check-all").click(function () {
        $("tbody .cbox").prop("checked", this.checked);
        if (this.checked) {
            $("tbody>tr").addClass("on");//是否高亮
        } else {
            $("tbody>tr").removeClass("on");//是否高亮
        }
        calculate();
    })

    //计算       
    function calculate() {
        var priceTotal = 0;
        var selectedTotal = 0;
        $.each($(".on>.sub"), function (idx, obj) {
            priceTotal += parseFloat($(obj).text())
        });
        $.each($(".on .num"), function (idx, obj) {
            selectedTotal += parseFloat($(obj).val());
        });
        $("#priceTotal span").text(priceTotal.toFixed(2));
        $("#selectedTotal").text(selectedTotal);
    }

    //隐藏减号
    $(".num").each(function (idx, obj) {
        var num = $(this).val();
        if (num <= 1) {
            $(this).prev().addClass("active");
        } else {
            $(this).prev().removeClass("active");
        }
    })

    //数量加减
    $(".plus").click(function () {
        var $tr = $(this).closest("tr");
        var price = parseFloat($tr.find(".price").text());
        var num = parseFloat($tr.find(".num").val());
        num++;
        var sub = price * num;
        $tr.find(".num").val(num);
        $tr.find(".sub").text(sub.toFixed(2));
        $(this).siblings(".minus").removeClass("active");
    })
    $(".minus").click(function () {
        var $tr = $(this).closest("tr");
        var price = parseFloat($tr.find(".price").text());
        var num = parseFloat($tr.find(".num").val());
        num--;
        var sub = price * num;
        $tr.find(".num").val(num);
        $tr.find(".sub").text(sub.toFixed(2));
        if (num <= 1) {
            $(this).addClass("active");
        } else {
            $(this).removeClass("active");
        }
    });
    //单删
    $("tbody .delete").click(function(){
        $(this).closest("tr").remove();
    })
    //多删
    $("#deleteAll").click(function(){
        $(".on").remove();
    })

})