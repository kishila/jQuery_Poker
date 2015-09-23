/* ============================================================================
	Color Overlay ver 1.12.0
	Copyright(c) 2015, ShanaBrian
	Dual licensed under the MIT and GPL licenses.

2015/09/23 ƒƒ‚
‰æ‘œ‚Ìã‚É”wŒiF‚ğ‚Â‚¯‚éƒ‰ƒCƒuƒ‰ƒŠ
Ú‚µ‚­‚Í‚±‚± http://shanabrian.com/web/jquery/image01.php
============================================================================ */
(function($) {
	$.fn.colorOverlay = function(settings) {
		settings = $.extend({
			bgColor : '#000',
			opacity : 0.7
		}, settings);

		var $span;

		$(this).on({
			'mouseenter' : function() {
				var w       = $(this).width(),
					h       = $(this).height(),
					ie6only = settings.opacity * 100;

				$(this).css({
					'position' : 'relative'
				});

				$span = $('<span>').css({
					'width'            : w,
					'height'           : h,
					'display'          : 'block',
					'position'         : 'absolute',
					'top'              : 0,
					'left'             : 0,
					'background-color' : settings.bgColor,
					'filter'           : 'alpha(opacity=' + ie6only + ')',
					'-webkit-opacity'  : settings.opacity,
					'-moz-opacity'     : settings.opacity,
					'-ms-opacity'      : settings.opacity,
					'-o-opacity'       : settings.opacity,
					'opacity'          : settings.opacity,
					'cursor'           : 'pointer'
				});

				$(this).append($span);
			},
			'mouseleave' : function() {
				$span.remove();
			}
		});
		return this;
	}
})(jQuery);
