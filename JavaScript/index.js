window.onload = function(){

	//alert('Hello World!')
	$(document).ready(function(){
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

		// Enable Caarousel Controls
		$(".carousel-control-prev").click(function(){
			$("#myCarousel").carousel("prev");
		});
		$(".carousel-control-next").click(function(){
			$("#myCarousel").carousel("next");
		});

		//取消按鈕事件
		$("#x1").click(function(){
	//加callback就不會有自動回復問題
			$("#menu-float").hide("slow",function(){
				$(this).remove();
			});
		});

	});
	
	

	
};