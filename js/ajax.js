// 该js用于获取网络请求
$(function () {


    ajax( reomateHost.ip + '/view',null).then(data=>{
        console.log(data.view);
        $('.view span').text(data.view)
    })
    setInterval(function () {
        ajax(reomateHost.ip + '/view', null).then(data => {
            console.log(data);
        }).catch(err=>{
            func.showTips("网络异常")
            $('login').hide()
        })
    }, 5000)

})

function ajax(url, data) {
    return new Promise((res, rej) => {
        $.ajax({
            type: "get",
            url: url,
            data: data,
            dataType: "json",
            success: function (data) {  
                res(data)
            },
            error: function (err) {
                rej(err)
            }
        });
    })

}