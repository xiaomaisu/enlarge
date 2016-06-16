$("document").ready(function(){
    $(".image-wrap").mouseenter(function(event){
         $(this).find(".image-cursor").css("display","block");
         $(".image-overlay").css("visibility","visible");
    });
    $(".image-wrap").mousemove(function(event){
         var x = event.pageX;
	 var y = event.pageY;
	 if(x<202 && y<202){
         	$(this).find(".image-cursor").css("left",x+"px");
	 	$(this).find(".image-cursor").css("top",y+"px");
         	$(".image-overlay img").css("left",-1.905*x+"px");
         	$(".image-overlay img").css("top",-1.905*y+"px");
         }
    });
    $(".image-wrap").mouseleave(function(event){
         $(this).find(".image-cursor").css("display","none");
         $(".image-overlay").css("visibility","hidden");
    });
});
