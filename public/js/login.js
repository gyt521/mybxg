define(['jquery','cookie'],function ($) {
	$('#loginId').click(function () {
        $.ajax({
            type: 'post',
            url: '/api/login',
            data: $('#loginForm').serialize(), //获取表单的所有数据，获取的是有name属性的数据
            dataType: 'json',
            success: function (data) {
                if (data.code == 200) {
                    // 把登陆的用户信息存储到cookie里，方面页面间进行数据共享
                    $.cookie('loginInfo',JSON.stringify(data.result),{path:'/'});

                    // 跳转到主页面
                    location.href = '/index/index';
                }
            }
        });
        return false;
    });
});