$("document").ready(function(){
    $(".image-wrap").enlarge();
});
(function($) {
	$.fn.enlarge = function(options){
            var defaults = {
	        cursor:"image-cursor",//放大镜的class名
                cursorW:218,//放大镜的宽度
                cursorH:218,//放大镜的高度
                imageW:420,//放大前的宽度
                imageH:420,
		imageLW:800,//放大后的宽度
                imageLH:800,
                overlay:"image-overlay"//放大后的遮罩层class名
	    };
            var opts = $.extend(defaults,options);
	    var $cursor = $(this).find("."+opts.cursor);
            var $overlay = $("."+opts.overlay);
	    var Xratio = opts.imageLW/opts.imageW;
	    var Yratio = opts.imageLH/opts.imageH;
            var gapX = opts.imageW - opts.cursorW; 
            var gapY = opts.imageH - opts.cursorH; 
            $(this).hover(function(){
            	$cursor.css("display","block");
                $overlay.css("visibility","visible");
    		$(this).mousemove(function(event){
         		var x = event.pageX;
	 		var y = event.pageY;
			if(x<gapX && y<gapY){
         		        $cursor.css("left",x+"px");
	 			$cursor.css("top",y+"px");
         		        $overlay.find("img").css("left",-Xratio*x+"px");
         			$overlay.find("img").css("top",-Yratio*y+"px");
        		 }
    	       });
	    },function(){
            	$cursor.css("display","none");
         	$overlay.css("visibility","hidden");
            });  
        };
})(jQuery);
