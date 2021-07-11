"use strict";

//顶部内容
var topbar={
	template:'\
	<div class="topbar">\
		<div class="topbar_left">\
			<a href="index.html" target="_self">LOFTER</a>\
			<a href="index.html" target="_self">首页</a>\
			<a href="more.html" target="_self">发现</a>\
			<a href="#">APP</a>\
			<div class="topbar_search">\
				<input type="text" name="" placeholder="搜索用户、标签">\
			</div>\
		</div>\
		<div class="topbar_right">\
			<a href="#"><div class="topbar_right_one"></div></a>\
			<a href="#"><div class="topbar_right_twe"></div></a>\
			<a href="#"><div class="topbar_right_three"></div></a>\
			<a class="topbar_right_four" href="#">Exit</a>\
		</div>\
	</div>\
	'
}
new Vue({
	el:'#topbar',
	components:{
		'topbar':topbar
	}
})




/*公共组件事件*/
$(function() {
	$(".topbar_right_four").click(function(){
		/*清空用户信息*/
		sessionStorage.setItem("userid",null);
	    sessionStorage.setItem("username",null);
		sessionStorage.setItem("userimg",null);

		/*跳转登录页*/
		window.location.href="login.html";
	})
})