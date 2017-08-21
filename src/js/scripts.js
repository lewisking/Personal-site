(function ($, window, document, undefined) {

	'use strict';

	$(function () {

		// Set time and add a colour difference to site

		var currentDate = new Date();
		var currentHour = currentDate.getHours();
		var siteClass = null;

		if (currentHour <= 6) {
			siteClass = 'nighttime';
		} else if (currentHour <= 10) {
			siteClass = 'morning';
		} else if (currentHour <= 15) {
			siteClass = 'afternoon';
		} else if (currentHour <= 20) {
			siteClass = 'early-evening';
		} else if (currentHour <= 24) {
			siteClass = 'nighttime';
		}

		$('html').addClass(siteClass);

		// Set month + 1 to text

		var currentMonth = new Date();
		var monthArray = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

		var monthArraySet = monthArray[currentMonth.getMonth()+1];

		$('#currentMonth').text(monthArraySet);

	});

})(jQuery, window, document);
