"user strict"

var loginbar = {
	template:'\
			<div class="logincon">\
				<div class="loginwarp">\
					<div class="logintit">\
						<p>LOFFTER</p>\
						<span>看 见 每 一 种 兴 趣</span>\
					</div>\
					<div class="loginformc">\
						<p>欢迎来到乐乎</p>\
						<input type="text" v-model="username_data" name="" placeholder="用户名">\
						<input type="password" v-model="password_data" name="" placeholder="密码">\
						<button v-on:click="login">登录/注册</button>\
						<br>\
						<span>Tips:未注册的用户登录后将会自动注册</span>\
					</div>\
				</div>\
			</div>\
	',
	data:function(){
		return{
			id_data:0,
			username_data:"",
			password_data:""
		}
	},
	methods:{
		//点击发布
		login:function(){
			var _self = this;

			var logininfo = {
				//获取发布表单的内容
				username:this.username_data,
				password:this.password_data
			};

			//console.log(logininfo);

			$.post(
				"userLogin",
				{
					"username":this.username_data,
					"password":this.password_data
				},
				function(data) {
					var datalist = JSON.stringify(data);
					//console.log(datalist);
					userlists = eval("(" + datalist +")");
					console.log(userlists);
					//console.log(userlists[0].id);

					sessionStorage.setItem("userid",userlists[0].userid);
					sessionStorage.setItem("username",userlists[0].username);
					sessionStorage.setItem("userimg",userlists[0].userimg);


					//console.log(userlists[0].userid);
					//console.log(userlists[0].username);
					//console.log(userlists[0].userimg);

					window.location.href="index.html";
				})
				.fail(function(){
					alert("用户名或密码错误");
				})
		}
	}
}


new Vue({
	el:'#login',
	components:{
		'loginbar':loginbar
	}
})
