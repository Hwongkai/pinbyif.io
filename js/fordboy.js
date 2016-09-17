//video
var videobutton = $(".banner-button");
var videobox = $(".videobox");
var closex  = $(".closex");

var total = $(".banner ul").children().length;
var now = 0;

function clock() {
	if(now == total - 1) {
		now = 0;
	} else {
		now = now + 1;
	}
	for(i = 0; i < total; i++) {
		$(".banner ul li").eq(i).css("display", "none");
		$(".btt span").eq(i).css("background", "#FEFEFE");
	}

	$(".banner ul li").eq(now).fadeIn(600);
	$(".btt span").eq(now).css("background", "#F4D93E");
}
$(document).ready(function() {
	$(".banner ul li").eq(0).fadeIn(600);
	$(".btt span").eq(0).css("background", "#F4D93E");
	$(".banner ul li,.btt span").mouseenter(function() {
		window.clearInterval(int);
	});
	$(".btt span").mouseenter(function() {
		if($(this).index() != now) {
			now = $(this).index() - 1;
			clock();
		}
	});
	var int = self.setInterval("clock()", 3000)
	$(".banner ul li,.banner span").mouseleave(function() {
		int = self.setInterval("clock()", 3000)
	});
	$(".btt span").eq(1).css("margin-left", "84px");
	$(".btt span").eq(2).css("margin-left", "150px");
    $(".btt span").eq(3).css("margin-left", "216px");
    
   
    videobutton.mousedown(function(){  	
    	videobox.css("display", "block");
        $('.myvideo').get(0).play();
    });
    
    closex.mousedown(function(){
    	videobox.css("display", "none"); 
    	$('.myvideo').get(0).pause();
    });
});