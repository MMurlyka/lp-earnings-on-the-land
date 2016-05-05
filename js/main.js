$(window).load(function() {
	if(!isMobile.any) {
		new WOW().init();
	}
});

$(window).ready(function() {

	/* Timer  Start */
	if($.cookie('timer')) {
		$timer = new Date(+$.cookie('timer'));

		if($timer < new Date()) {
			$.cookie('timer', null);
		}
		
	} 

	if(!$.cookie('timer') || $.cookie('timer') == "null") {
		$date = new Date();
		$timer = new Date($date.setMinutes($date.getMinutes() + 30));
		$.cookie('timer', $timer.getTime());
	}

	$('#clock').countdown($timer, function(event) {
		$(this).html(event.strftime('<span class="circle"><span class="nn">%M</span></span> : <span class="circle"><span class="nn">%S</span></span>'));
	});

	/* Timer End*/
	/* Slick slider Start*/
		$(".slick").slick({
			slidesToShow: 1,
			arrows: true,
			dots: true,
			autoplay: true,
			 responsive: [
			{
				breakpoint: 768,
				settings: {
					dots: false,
					arrows: false,
					adaptiveHeight: true,
					autoplay: false
				}
			}]
		});
	/* Slick slider End*/
	/* Form star */
	$("form").submit(function() {
		var $email = $(this).find(".in-email"),
			reg = /.+@.+\..+/i;

		if(!~$email.val().search(reg)) {
			$email.addClass("invalid");

			return false;
		} 

		yaCounter36798385.reachGoal('form');
		$email.removeClass("invalid");			

	});
	/* Form end */
	/* Popup start */
	$(".link-mgf").magnificPopup();
	/* Popup end */

});

