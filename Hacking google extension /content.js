$(document).ready(function(){
	
$('img').css({'position':'static'})


function runIt(){ 
$("img").show("slow").animate(
{top:"+=" + 500})
.hide('slow')
.show(1200)
runIt(); 
	}

 
runIt();

}) 


// complete: function(){
// 		var top;
// 		if(parseInt($('img').css('top'), 10)> ($(window).scrollTop()+ $(window).height())){
// 			top= $(window).scrollTop()- 50; 
// 			if (top<0){
// 				top= 0;
// 			}
// 			$('img').css('top',top+ 'px');
// 		} else if (parseInt($('img').css('top'),10)<$(window).scrollTop()){
// 			top= $(window).scrollTop() -50; 
// 			if (top<0){
// 				top=0; 
// 			}
// 			$('img').css('top',top + 'px');