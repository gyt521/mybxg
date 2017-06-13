define(['jquery','util','validate','form'],function ($,util) {
	// 设置菜单选中
	util.setMenu(location.pathname);

	$('#courseAddForm').validate({
		sendForm : false;
		valid : function () {
			type : 'post',
			url : '/api/course/create',
			success : function(date) {
				// 创建课程之后跳转到下一步
				location.href = '/course/basic?cs_id=' + data.result.cs_id; 
			}
		}
	});
});