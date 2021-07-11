"use strict";

$(function() {
	/*上传头像*/
	/*点击user显示上传组件*/
	$(".pareaitemuser").click(function(){
		$("#watg").show();
		$("#upload").show();
	});
	/*点击遮罩层隐藏上传组件*/
	$("#watg").click(function(){
		$("#watg").hide();
		$("#upload").hide();
	});



	/*上传文字*/
	/*点击文字显示上传组件*/
	$(".pareaitemtxt").click(function(){

		$("#publishbararea").hide();

		$("#watg").show();

		$("#uploadtxt").show();
	});
	/*点击遮罩层隐藏上传组件*/
	$("#watg").click(function(){

		$("#watg").hide();

		$("#uploadtxt").hide();

		$("#publishbararea").show();
	});
	/*点击取消按钮隐藏上传组件*/
	$("#uptxtcancelbtn").click(function(){

		$("#watg").hide();

		$("#uploadtxt").hide();

		$("#publishbararea").show();
	});



	/*上传文字图片*/
	/*点击文字显示上传组件*/
	$(".pareaitemimg").click(function(){

		$("#publishbararea").hide();

		$("#watg").show();

		$("#uploadimgtxt").show();
	});
	/*点击遮罩层隐藏上传组件*/
	$("#watg").click(function(){

		$("#watg").hide();

		$("#uploadimgtxt").hide();

		$("#publishbararea").show();
	});
	/*点击取消按钮隐藏上传组件*/
	$("#upimgcancelbtn").click(function(){

		$("#watg").hide();

		$("#uploadimgtxt").hide();

		$("#publishbararea").show();
	});
	


	/*检测右部内容是否已不可见 若不可见 将其设为粘性定位*/
	setInterval(function(){
		var ws_height = $(window).scrollTop();
		var w_height = $(window).height();

		var zs = $("#contentright");
		var zs_height = zs.outerHeight();
		var z_top = zs.offset().top;

		var t1 = $("#contentleft").outerWidth();
		var t2 = $("#contentleft").offset().left;

		if(ws_height > 1195){
			zs.css("position","fixed");
			zs.css("left",t1+t2+30);
			zs.css("top",30);
		}else{
			zs.css("position","static");
			zs.css("left","auto");
			zs.css("top","auto");
		}
	},500)


	/*回到顶部按钮相关事件*/
	/*向下滚动距离大于1080px显示返回顶部按钮*/
	$(window).scroll(function(){
		let ws_height = $(window).scrollTop();

		if (ws_height > 900) {
			$("#gotop").show();
		} else {
			$("#gotop").hide();
		}
	});
	

	/*点击按钮*/
	$("#gotop").click(function(){
		$('html').animate({scrollTop:0},300);
	});
})

