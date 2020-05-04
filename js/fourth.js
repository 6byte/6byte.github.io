// 发送留言
$('#msgSend').click(function () {
    let addComm = fourth.path.addCom
    let sname = $('#sname').val()
    let scomment = $('#scomment').val()
    $('#scomment').empty()
    data = {
        sname: func.html2Escape(sname),
        scomment: func.html2Escape(scomment)
    }
    func.ajax(reomateHost.ip + addComm, data).then(data => {
        $('#nextPage').click()

    }).catch(err => {

    })

})




