define(['jquery'],function ($) {
	// 设置导航菜单选中
	// var pathname = location.pathname;
	// $('.aside .navs a').removeClass('active');
	// $('.aside .navs a[href="'+pathname+'"]').addClass('active');

	util.setMenu(location.pathname);
});