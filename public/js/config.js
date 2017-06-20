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
		validate : 'validate/jquery-validate',
		form : 'jquery-form/jquery.form',
		datepicker : 'bootstrap-datepicker/js/bootstrap-datepicker.min',
		language : 'bootstrap-datepicker/locales/bootstrap-datepicker.zh-CN.min',
		uploadify : 'uploadify/jquery.uploadify.min',
		region : 'jquery-region/jquery.region',
		ckeditor : 'ckeditor/ckeditor',
		index : '../js/index',
		common : '../js/common',
		login : '../js/login',
		util : '../js/util',
		settings : '../js/settings',
		courselist : '../js/course-list',
		courseadd : '../js/course-add',
		coursebasic : '../js/course-basic'

	},
	shim : {
		bootstrap : {
			deps : ['jquery']
		},
		validate : {
			deps : ['jquery']
		},
		language : {
			deps : ['jquery','datepicker']
		},
		uploadify : {
			deps : ['jquery']
		},
		ckeditor : {
			exports : 'CKEDITOR'
		}
	}
});