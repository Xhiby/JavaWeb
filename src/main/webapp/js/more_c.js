"use strict";

/*More页组件*/
var moreitem={
	props:{
		src:String
	},
	template:'\
	<div id="moreitem">\
		<div class="moreitemtit">\
			<img src="img/user.jpg">\
			<span>用户昵称</span>\
			<button>关注</button>\
		</div>\
		<div class="moreitemcnt">\
			<img v-bind:src="src">\
			<p >动态描述动态描述动态描述</p>\
		</div>\
		<div class="moreitembottom">\
			<div class="likeicon"></div>\
			<span class="likenum">292人喜欢</span>\
		</div>\
	</div>\
	'
}

new Vue({
	el:'#morecontent',
	components:{
		'moreitem':moreitem
	}
})