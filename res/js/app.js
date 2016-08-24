// JavaScript Document
	function bgZoom(){
	var winW = document.documentElement.clientWidth;//屏幕宽度
	var winH = document.documentElement.clientHeight;//屏幕高度
	var allH=document.documentElement.scrollHeight;//网页实际内容的高度
	var bg=document.getElementById("bg");	
	var pop_box=document.getElementById("pop_box");
	if(allH>winH){
		bg.style.height=allH+"px";
		bg.style.backgroundSize=winW+"px "+allH+"px";
		pop_box.style.maxHeight=allH-0.03*allH+"px";	
	}else{
		bg.style.height=winH+"px";
		bg.style.backgroundSize=winW+"px "+winH+"px";
		pop_box.style.maxHeight=winH+"px";	
	}
}

