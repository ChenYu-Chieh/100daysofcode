window.onload = function(){

	//alert('Hello World!')
	$(document).ready(function(){
		$("#facebook").tooltip({ title:"go to FB",placement:"right"});
		$("#instagram").tooltip({title:"go to instagram",placement:"right"});
		$("#Github").tooltip({title:"go to Github",placement:"right"});
		$("#call").tooltip({title:"0916166002" ,placement:"top"});
	//頁首導覽區
//作品引導按鈕
	$("#guidebtn:nth-child(1)").click(function(){

	});
	$("#guidebtn:nth-child(2)").click(function(){
		$("#Carousel").show();
	});

	//PS作品輪播區
		// Activate Carousel
		$('#myCarousel').carousel();

		// Enable Carousel Indicators
		$(".item1").click(function(){
			$("#myCarousel").carousel(0);
		});
		$(".item2").click(function(){
			$("#myCarousel").carousel(1);
		});
		$(".item3").click(function(){
			$("#myCarousel").carousel(2);
		});
		// Enable Carousel Controls
		$(".carousel-control-prev").click(function(){
			$("#myCarousel").carousel("prev");
		});
		$(".carousel-control-next").click(function(){
			$("#myCarousel").carousel("next");
		});
	//Ai作品輪播區
		$("#myCarousel1").carousel();
			
		$(".item4").click(function(){
			$("#myCarousel1").carousel(0);
		});
		$(".item5").click(function(){
			$("#myCarousel1").carousel(1);
		});
		$(".item6").click(function(){
			$("#myCarousel1").carousel(2);
		});
		// Enable Carousel Controls
		$(".carousel-control-prev").click(function(){
			$("#myCarousel1").carousel("prev");
		});
		$(".carousel-control-next").click(function(){
			$("#myCarousel1").carousel("next");
		});
	//Certifacation輪播區
		
		
	
	//浮動選單 取消按鈕事件
		$("#x1").click(function(){
	//加callback就不會有自動回復問題
			$("#menu-float").hide("slow",function(){
				$(this).remove();
			});
		});
	
		// $(window).scroll(function(){
		// 	var scrollVal = $(this).scrollTop();
		// 	if (scrollVal > 200){ 
		// 	$("#menu-float").animate({top:"150px"},500);
		// 	$("#menu-float").animate({top:"0px"},"slow");
		// 	if ($(window).scrollTop(0,10)){
		// 		$("#menu-float").animate({top:"-50px"},"slow")
		// 		.animate({top:"0px"},"slow");
		// 		} else ($(documnet).scrollBy(0,-10)){
		// 	} else if (scrollVal < 200){
		// 		$("#menu-float").animate({top:"50px"},500);
		// 	}
		// });
		//點選導覽
		//footer
		$("#backToTop,#BackToTop").on("click", function(){
			$('html,body').animate({scrollTop:$("#header").offset().top}, 1000, "swing");
		});
		$("#psBtn").on("click", function(){
			$('html,body').animate({scrollTop:$("#Carousel").offset().top}, 800, "swing");
		});
		$("#IllBtn").on("click", function(){
			$('html,body').animate({scrollTop:$("#Carousel1").offset().top}, 800, "swing");
		});


		

	});
	
	

	
};