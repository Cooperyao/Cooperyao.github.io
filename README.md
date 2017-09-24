# resume
## 9/25/2017 更新表单验证demo(validate插件实现)
<img width="400" height="450" src="https://github.com/309318267/resume/raw/master/images/表单验证2.jpeg"/>

## 9/20/2017 更新响应式效果
![](https://github.com/309318267/resume/raw/master/images/响应式效果.jpg)
## 9/12/2017
1.封面轮播动画;    <br>
2.导航条触发fixed效果;<br>
3.滚动条触发导航高亮; <br>
4.导航条显示当前位置高亮； <br>  
## 9/12/2017优化滚动条触发导航高亮代码
```javascript
        //原始代码
        var scrollH = $(document).scrollTop();
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
```
```javascript
        var scrollH = $(document).scrollTop();
        var alist = $("nav").find("a");
        var nowFloor = Math.floor((scrollH-600)/800);
        if(scrollH <= 600){
            $(alist).removeClass();
        }else{
            $(alist).eq(nowFloor)
            .addClass("active").parent()
            .siblings().children().removeClass();
        }
        //优化后
```
