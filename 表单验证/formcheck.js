$(function(){
    var flist = $(".form-control");
    flist.focus(function(){
        fholder = $(this).attr("placeholder");
        replace = $(this).siblings().html();
        $(this).attr('placeholder',replace);
    });
    flist.blur(function(){
        var str = $(this).val();
        var reg = /^[a-zA-Z][a-zA-Z0-9_]{5,17}$/;
        if(reg.text(str)){
            alert("ok");
        }
        $(this).attr('placeholder',fholder);
    });
})