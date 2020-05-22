$(document).ready(function() {
	var clipboard = new ClipboardJS('.btn');

	clipboard.on('success', function(e) {
		console.info('Action:', e.action);
		console.info('Text:', e.text);
		console.info('Trigger:', e.trigger);

		e.clearSelection();
	});

	clipboard.on('error', function(e) {
		console.error('Action:', e.action);
		console.error('Trigger:', e.trigger);
	});

	$('.img-close').click(function() {
		$(this).hide().siblings().hide()
	})
})

// window.onresize = function() {
// 	console.log(document.body.offsetWidth);
// }
