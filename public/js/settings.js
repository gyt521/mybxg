define(['jquery','template','ckeditor','util','datepicker','language','uploadify','region','validate','form'],function ($,template,CKEDITOR,util) {
	// 左侧菜单选中
	util.setMenu('/index/index');

	// 查询个人信息
	$.ajax({
		type : 'get',
		url : '/api/teacher/profile',
		dataType : 'json',
		success : function (data) {
			// console.log(data);
			var html = template('settingsTpl',data.result);
			$('#settingsInfo').html(html);

			// 处理头像上传
			$('#upfile').uploadify({
				itemTemplate:'<span></span>',
				width : '120',
				height : '120',
				buttonText : '',
				fileObjName : 'tc_avatar',  //需要的参数
				swf : '/public/assets/uploadify/uploadify.swf',
				uploader : '/api/uploader/avatar',
				onUploadSuccess : function (file,data) {
					// console.log(data);
					data = JSON.parse(data);
					$('.preview img:eq(0)').attr('src', data.result.path);
				}
			});

			// 处理三级联动
			$('#hometown').region({
				url : '/public/assets/jquery-region/region.json'
			});

			// 处理富文本
			CKEDITOR.replace('editor');

			// 处理表单验证
			$('#settingsForm').validate({
				sendForm : false,
				valid : function () {
					// 更新富文本内容
					for (var instance in CKEDITOR.instances) {
						CKEDITOR.instances[instance].updateElement();
					}
					// 处理省市县内容
					var p = $('#p option:selected').text();
					var c = $('#c option:selected').text();
					var d = $('#d option:selected').text();
					var hometown = p + '|' + c + '|' + d;
					// 验证通过执行提交动作
					$(this).ajaxSubmit({
						type : 'post',
						data : {tc_hometown : hometown}, 
						url : '/api/teacher/modify',
						success : function (data) {
							// 更新加载当前页面
							location.reload();
							// location.href = '/index/settings'
						}
					});
				}
			});
		}
	});
});