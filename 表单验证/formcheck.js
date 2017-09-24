$(function () {
    var flist = $(".form-control");
    flist.focus(function () {
        fholder = $(this).attr("placeholder");
        replace = $(this).siblings(".replace").html();
        $(this).attr('placeholder', replace);
    });
    flist.blur(function () {
        $(this).attr('placeholder', fholder);
    });

    //提交事件
    $.validator.setDefaults({
        submitHandler: function(form) { 
            alert("提交事件!");
            form.submit();
         }
      });
    //登录验证
    $("#loginForm").validate({
        rules: {
            user: {
                required: true,
                minlength: 6
            },
            password: {
                required: true,
                minlength: 6,
            },
        },
        messages: {
            user: {
                required: "请输入用户名",
                minlength: "帐号必需由6-18位字符组成"
            },
            password: {
                required: "请输入密码",
                minlength: "密码长度不能小于 6 个字符"
            },
        }
    });
    //注册验证
    $("#signupForm").validate({
        rules: {
            cuser: {
                required: true,
                minlength: 6
            },
            cpassword: {
                required: true,
                minlength: 6,
            },
            confirm_password: {
                required: true,
                minlength: 6,
                equalTo: "#cpassword"
            },
            truename: {
                required: true,
                minlength: 5
            },
            idnum: {
                required: true,
                minlength: 16,
                maxlength: 18
            },
            email: {
                required: true,
                email: true
            },
        },
        messages: {
            cuser: {
                required: "请输入用户名",
                minlength: "帐号必需由6-18位字符组成"
            },
            cpassword: {
                required: "请输入密码",
                minlength: "密码长度不能小于 6 个字符"
            },
            confirm_password: {
                required: "请输入密码",
                minlength: "密码长度不能小于 6 个字符",
                equalTo: "两次密码输入不一致"
            },
            truename: {
                required: "请输入真实姓名",
                minlength: "请输入正确的名字"
            },
            idnum: {
                required: "请输入身份证号码",
                minlength: "请输入正确的身份证",
                maxlength: "请输入正确的身份证"
            },
            email: "请输入一个正确的邮箱",
        }
    });
});
