"use strict";

let userid_s = sessionStorage.getItem("userid");
let username_s = sessionStorage.getItem("username");
let userimg_s = sessionStorage.getItem("userimg");

//console.log(userimg_s);

//login页设置session时会把userimg_s赋值为null字符串
if(userimg_s == "null" || userimg_s == "")
	userimg_s = null;


//中部左部内容
var publishbararea={
	props:{
		topuserimg:String
	},
	template:'\
	<div id="publishbararea">\
		<div class="pareaitem pareaitemuser">\
			<div v-if="topuserimg">\
				<img v-bind:src="topuserimg" class="pareaitemuserimg">\
			</div>\
		</div>\
		<div class="pareaitem pareaitemtxt"></div>\
		<div class="pareaitem pareaitemimg"></div>\
		<div class="pareaitem pareaitemmusic"></div>\
		<div class="pareaitem pareaitemvideo"></div>\
		<div class="pareaitem pareaitemlink"></div>\
	</div>\
	'
}
//Tis列表
var mlist={
	props:{
		userid:Number,
		username:String,
		userimg:String,
		imgsrc:String,
		title:String,
		content:String
	},
	template:'\
	<div id="mlist">\
		<img class="mlistimg" v-bind:src="userimg">\
		<div class="mlistcnt">\
			<span class="mlistcntname">{{username}}</span>\
			\
			<div v-if="imgsrc" class="mlistcntmid_img">\
				<img v-bind:src="imgsrc">\
				<p class="mlistcnttxt">{{content}}</p>\
			</div>\
			<div v-if="title" class="mlistcntmid_text">\
				<p>{{title}}</p>\
				<span>{{content}}</span>\
			</div>\
			\
			<div class="mlistcntopt">\
				<div>\
					<span>热度(39)</span>\
					<span>评论</span>\
					<span>分享</span>\
					<span>推荐</span>\
					<div class="mlistcntopticon"></div>\
				</div>\
			</div>\
		</div>\
	</div>\
	'
}


//上传文本
var uploadtxt={
	props:{
		topuserimg:String
	},
	template:'\
	<div id="uploadtxt">\
		<img class="uploadtxtimg" v-bind:src="topuserimg">\
		<div class="uploadtxtcnt">\
			<span class="uploadtxtcntname">{{username}}</span>\
			<div class="uploadtxtcntmid">\
				<div class="uploadtxtwap">\
					<input id="uptxttit" type="text" placeholder="标题" \
					v-model="title"\
					><br>\
					<input id="uptxtcnt" type="text" placeholder="内容" \
					v-model="content"\
					>\
				</div>\
			</div>\
			<div class="uploadtxtcntopt">\
				<button id="uptxtcancelbtn">取消</button>\
				<button v-on:click="uploadtxtf" id="uptxtpublishbtn">发布</button>\
			</div>\
		</div>\
		<div style="clear: both;"></div>\
	</div>\
	',
	data:function(){
		return{
			userid:userid_s,
			username:username_s,
			title:"",
			content:""
		}
	},
	methods:{
		//点击发布
		uploadtxtf:function(){
			var uploadinfo = {
				//获取发布表单的内容
				username:this.username,
				title:this.title,
				content:this.content
			};
			//console.log(uploadinfo);
			
			$.ajax({
				url:'addTextTis',
				type:'POST',
				dataType:'text',
				contentType:'application/json',
				"data":JSON.stringify(uploadinfo),
				success:function(msg){
					alert(msg);
					location.reload();
				},
				error:function(msg){
					alert("发布失败");
					location.reload();
				}
			})
		}
	}
}


//上传图片文本
var uploadimgtxt={
	props:{
		topuserimg:String
	},
	template:'\
	<div id="uploadimgtxt">\
		<img class="uploadtxtimg" v-bind:src="topuserimg">\
		<div class="uploadtxtcnt">\
			<span class="uploadtxtcntname">{{username}}</span>\
			<div class="uploadtxtcntmid">\
				<div class="uploadimginwap">\
					<img class="uploadimgin" src="">\
				</div>\
				<div class="uploadimgwap">\
					<div>\
						<button class="uploadimgbtn" v-on:click="uploadimg_f" >选择图片</button>\
						<input id="photoFileimg" type="file">\
					</div>\
				</div>\
				<div class="uploadtxtwap">\
					<input id="upimgtxtcnt" type="text" placeholder="内容" \
					v-model="content"\
					>\
				</div>\
			</div>\
			<div class="uploadtxtcntopt">\
				<button id="upimgcancelbtn">取消</button>\
				<button id="upimgpublishbtn">发布</button>\
			</div>\
		</div>\
		<div style="clear: both;"></div>\
	</div>\
	',
	data:function(){
		return{
			userid:userid_s,
			username:username_s,
			imgsrc:"",
			content:""
		}
	},
	methods:{
		//点击选择图片
		uploadimg_f:function(){
			var _self = this;
			
			

			//上传相关
			$('#photoFileimg').click();
			$('#photoFileimg').change(function(){
				if ($("#photoFileimg").val() == '') {
					console.log("文件上传框没东西");
				}
				var formData = new FormData();
				formData.append('photo', document.getElementById('photoFileimg').files[0]);

				var uploadimgurl = "";

				$.ajax({
					url:"uploadTitImg",
					type:"post",
					data: formData,
					contentType: false,
					processData: false,
					success: function(data) {
						if (data.type == "success") {
							$(".uploadimgin").attr("src", data.filepath+data.filename);
							$('.uploadimgwap').hide();
							$(".uploadimgin").show();

							alert(data.msg);

							_self.imgsrc = data.filepath+data.filename;

							//点击发布
							$('#upimgpublishbtn').click(function(){
								var uploadinfo = {
										//获取发布表单的内容
										username:_self.username,
										imgsrc:_self.imgsrc,
										content:_self.content
									};

									console.log(uploadinfo);

									$.ajax(
									{
										url:'addTextTis',
										type:'POST',
										dataType:'text',
										contentType:'application/json',
										"data":JSON.stringify(uploadinfo),
										success:function(msg){
											alert(msg);
											location.reload();
										},
										error:function(msg){
											alert("发布失败");
											location.reload();
										}
									});
								});
						} else {
							alert(data.msg);
						}
					},
					error:function(data) {
						alert("上传失败")
					}
				});
			});
		}
	}
}




new Vue({
	el:'#contentleft',
	data: {
		mlistobjects:"",
		topuserimg:userimg_s
	},
	created:function(){
		var _self = this;
		$.post(
			"listTis",
			function(data) {
				var datalist = JSON.stringify(data);
				_self.mlistobjects = eval("(" + datalist +")");

				//console.log(_self.mlistobjects);

				//sessionStorage.setItem("userimg",_self.topuserimg);
				//_self.topuserimg
			});
	},
	components:{
		'publishbararea':publishbararea,
		'mlist':mlist,
		'uploadtxt':uploadtxt,
		'uploadimgtxt':uploadimgtxt
	}
})


















//中部右部内容
var rboxuser={
	template:'\
	<div id="rboxuser">\
		<a class="rboxuser" href="user.html" target="_blank">\
			<p>{{username_data}}</p>\
		</a>\
		<div class="rboxusermore">\
			<a href="#"></a>\
		</div>\
		<div class="rboxuserfan">\
			<a class="rboxuserfanf" href="#">\
				<span>关注</span>\
				<p>7</p>\
			</a>\
			<a class="rboxuserfans" href="#">\
				<span>粉丝</span>\
				<p>1</p>\
			</a>\
		</div>\
	</div>\
	',
	data:function(){		
		return{
			id_data:userid_s,
			username_data:username_s
		}
	}
}
var rboxcre={
	template:'\
	<div id="rboxcre">\
		<a href="#">\
			<span class="rboxcretitle">创作者中心</span>\
			<div class="rboxcretitlei icon"></div>\
		</a>\
		<a href="#">\
			<div class="rboxcretxt icon"></div>\
			<span>文章</span>\
		</a>\
		<a href="#">\
			<div class="rboxcrecon icon"></div>\
			<span>合集</span>\
		</a>\
		<a href="#">\
			<div class="rboxcremoney icon"></div>\
			<span>钱包</span>\
		</a>\
		<a href="#">\
			<div class="rboxcretext icon"></div>\
			<span>草稿</span>\
		</a>\
		<a id="rboxcresetcon" style="border-bottom: none;" href="#">\
			<div class="rboxcreseti icon"></div>\
			<span class="rboxcreset">个人主页设置</span>\
		</a>\
	</div>\
	'
}
var rbanner={
	props:{
		url:String
	},
	template:'\
	<div id="rbanner">\
		<img v-bind:src="url">\
	</div>\
	'
}
var download={
	template:'\
	<div id="download">\
		<div class="downloadtitle">\
			<p>使用手机访问 LOFTER</p>\
		</div>\
		<div class="downloaddiv">\
			<img src="img/download/app_android.jpg">\
			<div>\
				<p>安卓APP下载</p>\
				<span>扫码下载安卓</span><br>\
				<span>LOFTER APP</span>\
			</div>\
		</div>\
		<div class="downloaddiv">\
			<img src="img/download/mp_weixin.jpg">\
			<div>\
				<p>微信小程序</p>\
				<span>使用微信扫码打开LOFTER微信小程序</span>\
			</div>\
		</div>\
		<div class="downloaddiv">\
			<img src="img/download/mp_qq.jpg">\
			<div>\
				<p>QQ小程序</p>\
				<span>使用QQ扫码打开LOFTER QQ小程序</span>\
			</div>\
		</div>\
		<div class="downloaddiv">\
			<img src="img/download/app_ios.jpg">\
			<div>\
				<p>苹果APP下载</p>\
				<span>扫码下载iOS</span><br>\
				<span>LOFTER APP</span>\
			</div>\
		</div>\
		<div style="clear: both;"></div>\
	</div>\
	'
}

new Vue({
	el:'#contentright',
	components:{
		'rboxuser':rboxuser,
		'rboxcre':rboxcre,
		'rbanner':rbanner,
		'download':download
	}
})














/*其他内容*/
var watg={
	template:'\
		<div id="watg"></div>\
	'
}
var upload={
	template:'\
		<div id="upload">\
			<p class="uploadtit">上传头像</p>\
			<div class="uploadcnt">\
				<div class="uploadwarp">\
					<img class="uploadimg" src="">\
					<button class="uploadbtn" v-on:click="uploadimg_e" >选择图片</button>\
					<input id="photoFile" type="file">\
				</div>\
				<div class="preview">\
					<p>拖拽或缩放虚线框，生成自己满意的头像</p>\
					<img class="lpre">\
					<p>110*110像素</p>\
					<img class="mpre">\
					<p>64*64像素</p>\
					<img class="spre">\
					<p>30*30像素</p>\
				</div>\
			</div>\
			<button class="uploadsure">保存并关闭</button>\
		</div>\
		',
		methods:{
			uploadimg_e:function(){
			//上传相关
			$('#photoFile').click();
			$('#photoFile').change(function(){
				if ($("#photoFile").val() == '') {
					console.log("文件上传框没东西");
				}
				var formData = new FormData();
				formData.append('photo', document.getElementById('photoFile').files[0]);

				var uploadimgurl = "";

				$.ajax({
					url:"uploadUserImg",
					type:"post",
					data: formData,
					contentType: false,
					processData: false,
					success: function(data) {
						if (data.type == "success") {
							$(".uploadimg").attr("src", data.filepath+data.filename);
							$('.uploadbtn').hide();
							$(".uploadimg").show();

							$(".lpre").attr("src", data.filepath+data.filename);
							$(".mpre").attr("src", data.filepath+data.filename);
							$(".spre").attr("src", data.filepath+data.filename);

							alert(data.msg);

							$(".uploadsure").show();

							uploadimgurl = data.filepath+data.filename;
							$('.uploadsure').click(function(){
								$.post(
									"uploadUserSure",
									{"src":uploadimgurl,"userid":userid_s},
									function(msg) {
										alert(msg);

										//重设session
										sessionStorage.setItem("userimg",uploadimgurl);
										console.log(uploadimgurl);
										console.log(userimg_s);

										userimg_s = uploadimgurl;

										location.reload();
									});
							});
						} else {
							alert(data.msg);
						}
					},
					error:function(data) {
						alert("上传失败")
					}
				});
			})
		}
	}
}
var gotop={
	template:'\
	<a id="gotop"></a>\
	'
}

new Vue({
	el:'#other',
	components:{
		'watg':watg,
		'upload':upload,
		'gotop':gotop
	}
})