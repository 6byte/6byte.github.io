$(document).ready(function() {


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
})

// window.onresize = function() {
// 	console.log(document.body.offsetWidth);
// }
