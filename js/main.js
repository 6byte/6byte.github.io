$(document).ready(function() {
	// 再次访问不弹出提示框
	let review = localStorage.getItem("review")
	if(func.isEmpty(review)){
		console.log(review);
		openModal(messageIndex.INDEX)
		localStorage.setItem("review","true")
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
