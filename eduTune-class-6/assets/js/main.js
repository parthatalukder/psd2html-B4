(function ($) {
	"use strict";
	jQuery(document).ready(function($){
		$(".video_btn").modalVideo();
		$(".video_btn").on('click', function() {
			return false;
		});
		$('.box-btn').hover(function(){
			$('.box-btn').removeClass('active');
			$(this).addClass('active');
		});
		
		$('.count').counterUp({
			delay: 10,
			time: 2000,
		});
		


	});
	jQuery(window).load(function(){
		
	});
}(jQuery));