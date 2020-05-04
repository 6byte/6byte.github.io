/**
 * 本文件用于初始化页面
 */

document.addEventListener('contextmenu', function (e) {
    e.preventDefault()
})
// DOM元素完成后触发
$(window).ready(function () {
    $('.global').show()
    $('.mbody').show()
    $('.loading').hide()
    // 初始化高度
    let height = $(document.body).height()
    $('#first').height(height)
    $('#second').height(height)
    $('#third').height(height)
    $('#fourth').height(height)

    // 禁止拖拽图片
    function imgdragstart() {
        return false;
    }
    for (i in document.images) document.images[i].ondragstart = imgdragstart;

})

// 给侧边栏添加事件
$('.msidebar').find('li').each((i, e) => {
    $(e).on('click', function () {
        $(this).addClass('animated pulse active').siblings().removeClass('animated pulse active')

        // 添加样式
    })
})


/* 全屏滚动 */

{
    var pages = document.getElementsByClassName("page");
    var wrap = document.getElementById("wrap");
    var len = document.documentElement.clientHeight;
    var main = document.getElementById("main");
    wrap.style.height = len + "px";
    $('.msidebar').find('li').eq(globalScroll.flag).addClass('animated pulse active').siblings().removeClass('animated pulse active')
    for (var i = 0; i < pages.length; i++) {
        pages[i].style.height = len + "px";

    }
    if (navigator.userAgent.toLowerCase().indexOf("firefox") != -1) {
        document.addEventListener("DOMMouseScroll", func.scrollFun);
    } else if (document.addEventListener) {
        document.addEventListener("mousewheel", func.scrollFun, false);
    } else if (document.attachEvent) {

        document.attachEvent("onmousewheel", func.scrollFun);
    } else {

        document.onmousewheel = scrollFun;
    }
    var startTime = 0;
    var endTime = 0;
    var now = 0;
}





