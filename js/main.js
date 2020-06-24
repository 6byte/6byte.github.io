$(document).ready(function() {
	// 再次访问不弹出提示框
	let review = localStorage.getItem("review")
	if (func.isEmpty(review)) {
		openModal(messageIndex.INDEX)
		localStorage.setItem("review", "true")
	}

	$('.img-close').click(function() {
		$(this).hide().siblings().hide()
	})


	
	$('#program').click(function() {
		console.log('---');
		$('#mypro').modal('show')
	})
	
	//定义变量获取屏幕视口宽度
	var windowWidth = $(window).width();
	if (windowWidth < 500) {
		$('#toBili button').attr('disabled', 'disabled').text('请在电脑上打开')
	}
	window.onresize = function() {
		var windowWidth = $(window).width();
		if (windowWidth > 700) {
			$('#toBili button').removeAttr('disabled').text('前往')
		}
		if (windowWidth < 500) {
			$('#toBili button').attr('disabled', 'disabled').text('请在电脑上打开')
		}
	}
})
