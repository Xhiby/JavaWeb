"use strict";

let userid_s = sessionStorage.getItem("userid");
let username_s = sessionStorage.getItem("username");
let userimg_s = sessionStorage.getItem("userimg");

//console.log(userimg_s);

var umnitem = {
	props:{
		id:Number,
		imgsrc:String,
		title:String,
		content:String
	},
	template:'\
	<div class="umnitem">\
		<div class="umnitemmask"></div>\
		<img \
		class="umnitemimg"\
		v-if="imgsrc" \
		v-bind:src="imgsrc"\
		>\
		<div \
		class="umnitemtxt"\
		v-if="title" \
		>\
			<p>{{title}}</p>\
			<div class="umnitemtwap">\
				<span>{{content}}</span>\
			</div>\
		</div>\
		<div class="umnitemdel">\
			<button v-on:click="deletByid(id)">删除</button>\
		</div>\
	</div>\
	',
	methods:{
		deletByid:function(id){
			$.post(
			"deleteTis",
			{"id":id},
			function(msg) {
				alert(msg);
				location.reload();
			});
		}
	}
}


var usd = {
	template:'\
		<div class="usd">\
			<div class="usdimg">\
				<img v-if="userimg_data" v-bind:src="userimg_data">\
			</div>\
			<div class="usdabout">\
				<p>{{username_data}}</p>\
			</div>\
			<div class="usdbotm">\
				<span>私信</span>\
				<span>归档</span>\
				<span>搜索</span>\
			</div>\
		</div>\
	',
	data:function(){
		return{
			username_data:username_s,
			userimg_data:userimg_s
		}
	}
}


new Vue({
	el:'#usd',
	components:{
		'usd':usd
	}
})



new Vue({
	el:'#umnitem',
	data: {
		userlists:"",
		userlists1:[],
		userlists2:[],
		userlists3:[],
		userlists4:[]
	},
	
	created:function(){
		//可能是数据请求太慢了 数据还没请求完 DOM就渲染好了
		//所以要把Ajax设为同步请求 请求完了再做别的事
		$.ajaxSettings.async = false;

		//保留外层的this
		var _self = this;

		//post请求 获取指定用户的全部记录
		$.post(
			"userTis",
			{"username":username_s},
			function(data) {
				var datalist = JSON.stringify(data);
				_self.userlists = eval("(" + datalist +")");
				console.log(_self.userlists);
			});

		//记录总数
		var listnum = Object.keys(this.userlists).length;
		
		//每列放置的记录数
		var colnum = (listnum-1)/4;

		//i是userlists的索引 将会在4个循环中从1直到listnum
		//j是每个userlist1234的索引 每次循环都会重置为0
		var i = 0;
		var j = 0;

		//这4个循环的作用是将userlists中的项均匀的分配给每个userlist1234
		for (j=0; i < colnum; i++,j++) {
			this.userlists1[j] = this.userlists[i];
		}
		for (j=0; i < colnum*2; i++,j++) {
			this.userlists2[j] = this.userlists[i];
		}
		for (j=0; i < colnum*3; i++,j++) {
			this.userlists3[j] = this.userlists[i];
		}
		for (j=0; i <= colnum*4; i++,j++) {
			this.userlists4[j] = this.userlists[i];
			
		}

		//把Ajax请求方式设回异步
		$.ajaxSettings.async = true;
	},
	components:{
		'umnitem':umnitem
	}
})
