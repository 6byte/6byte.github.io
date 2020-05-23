$(document).ready(function() {
	// 再次访问不弹出提示框
	localStorage.setItem("review","true")
	let review = localStorage.getItem("review")
	if(func.isEmpty(review)){
		openModal(messageIndex.INDEX)
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

})
