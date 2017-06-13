requirejs.config({
	baseUrl : '/public/assets',
	paths : {
		jquery : 'jquery/jquery.min',
		bootstrap : 'bootstrap/js/bootstrap.min',
		cookie : 'jquery-cookie/jquery.cookie',
		template : 'artTemplate/template-web',
		teacher: '../js/teacher-list',
		teaadd: '../js/teacher-add',
		nprogress : 'nprogress/nprogress',
		index : '../js/index',
		common : '../js/common',
		login : '../js/login',
		util : '../js/util',
		courseadd : '../js/course-add'
	},
	shim : {
		bootstrap : {
			deps : ['jquery']
		}
	}
});