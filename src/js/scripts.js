(function ($, window, document, undefined) {

	'use strict';

	$(function () {

		$('.logo').click(function(e){
			$('body').toggleClass('body-click-active');
			e.preventDefault();
		});

	});

})(jQuery, window, document);
