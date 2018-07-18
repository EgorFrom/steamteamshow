$(document).ready(function(){
	$('#last-menu_item').css('color','#ce9a05');
	
	$('.about_slide-slider-arrow_right').click(function(){
		$('.about_slider').slick('slickNext');
	});
	$('.about_slide-slider-arrow_left').click(function(){
		$('.about_slider').slick('slickPrev');
	});

	function clearAboutBullit() {
		$('.about_slide-slider-bullit_1').removeClass('active');
		$('.about_slide-slider-bullit_2').removeClass('active');
		$('.about_slide-slider-bullit_3').removeClass('active');
	}
	$('.about_slide-slider-bullit_3').click(function(){
		clearAboutBullit();
		$(this).addClass('active');
		$('.about_slider').slick('slickGoTo',2);
	});
	$('.about_slide-slider-bullit_2').click(function(){
		clearAboutBullit();
		$(this).addClass('active');
		$('.about_slider').slick('slickGoTo',1);
	});
	$('.about_slide-slider-bullit_1').click(function(){
		clearAboutBullit();
		$(this).addClass('active');
		$('.about_slider').slick('slickGoTo',0);
	});
	$('.about_slider').on('afterChange', function(event, slick, currentSlide){
	  if (currentSlide == 0) {
			clearAboutBullit();
			$('.about_slide-slider-bullit_1').addClass('active');
	  }
	  if (currentSlide == 1) {
			clearAboutBullit();
			$('.about_slide-slider-bullit_2').addClass('active');
	  }
	  if (currentSlide == 2) {
			clearAboutBullit();
			$('.about_slide-slider-bullit_3').addClass('active');
	  }
	});

	$('.features-block_more').click(function(){
		$('.features-popup').show();
	});
	$('.features-popup_close').click(function(){
		$('.features-popup').hide();
	});
});