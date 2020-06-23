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

	// 显示模态框
	$('#about').click(function() {
		openModal(messageIndex.ABOUT)
	})
	$('#mysql').click(function() {
		openModal(messageIndex.MYSQL)
	})

	function openModal(index) {
		$('#modalTitle').html(message[index].title)
		$('.modal-body').html(message[index].content)
		$('#mymodal').modal('show')
	}
	// 正则渲染关键字
	$('#program').click(function() {
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
