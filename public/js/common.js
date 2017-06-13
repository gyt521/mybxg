	define(['jquery','template','nprogress','cookie'],function ($,template,nprogress) {
		// 控制左侧菜单的展开和折叠

		$('.navs ul').prev('a').on('click', function () {
			$(this).next().slideToggle();
		});


		// 退出功能
		$('#logout').click(function(){    
	       $.ajax({
	           type : 'post',
	           url : '/api/logout',
	            dataType : 'json',
	           success : function(data){
	           		// 清空用户cookie
	           		// $.removeCookie('loginInfo',{path:'/'});
	                location.href = '/login'; 
	           }
	       });
	    });

		// 获取当前请求的路径
		var pathname = location.pathname;
		if (pathname != '/login' && !$.cookie('PHPSESSID')) {
			// 没有登录的情况要跳转到登陆页面
			location.href = '/login';

		}

		//获取登录用户的cookie信息  如果有$.cookie('loginInfo')值，，就转成json格式的字符串
		var loginInfo = $.cookie('loginInfo') && JSON.parse($.cookie('loginInfo'));
		if (loginInfo) {
			var loginTpl = '<div class="avatar img-circle"><img src="{{tc_avatar}}"></div><h4>{{tc_name}}</h4>';

			var html = template.render(loginTpl,loginInfo);
			$('#loginInfoTpl').html(html);

			// 渲染页面
			// $('.aside .profile').find('img').attr('src',loginInfo.tc_avatar);
			// $('.aside .profile').find('h4').text(loginInfo.tc_name);

		}

		// 加载遮罩效果
		$(document).ajaxStart(function () {
			// 显示遮罩效果
			$('.overlay').show();
		});

		$(document).ajaxStop(function () {
			// 隐藏遮罩效果
			$('.overlay').hide();
		});

		// 进度条控制
		nprogress.start();
		nprogress.done();

	});


	
