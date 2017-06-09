define(['jquery','template'],function ($,template) {
	// 加载列表数据
	$.ajax({
		type : 'get',
		url : '/api/teacher',
		dataType : 'json',
		success : function (data) {
			// 解析数据，渲染页面
			var html = template('teacherInfoTpl',{list : data.result});  //data.result是想要的数据，是一个数组
			$('#teacherInfo').html(html);
		}
	});
});