# resume
## 9/12/2017
1.封面轮播动画;    <br>
2.导航条触发fixed效果;<br>
3.滚动条触发导航高亮; <br>
4.导航条显示当前位置高亮； <br>  
## 9/12/2017
···
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
···
