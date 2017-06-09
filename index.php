<?php 
	
	// var_dump($_SERVER);

	// 路径
	$path = 'index';

	// 文件名称
	$filename = 'index';

	// 判断数组中是否包含对应的key
	if (array_key_exists('PATH_INFO', $_SERVER)) {
		// 获取url中的路径(域名开始后面是路径)
		$url = $_SERVER['PATH_INFO']; // /index/login
		// 从索引为1，截取字符串
		$str = substr($url, 1);
		// 以/作为分隔符截取，结果是数组
		$pathinfo = explode('/', $str);
		// 如果路径是两层  index/login
		if (count($pathinfo) == 2) {
			$path = $pathinfo[0];
			$filename = $pathinfo[1];
		}else {
			// 如果路径是一层,本来默认是index,如果是login,就直接覆盖上面的$filename = 'index';
			$filename = 'login';
		}
	}

	include('/view/'.$path.'/'.$filename.'.html');

 ?>