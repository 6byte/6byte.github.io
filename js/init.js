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
        // 跳转
        switch (i) {
            case 0: { location.href = "#first"; break; }
            case 1: { location.href = "#second"; break }
            case 2: { location.href = "#third"; break }
            case 3: { location.href = "#fourth"; break }
        }
        // 添加样式
    })
})


/* 全屏滚动 */
$(document).on("mousewheel DOMMouseScroll", func.debounce(mscroll, 200, false));
function mscroll(e) {
    var delta = (e.originalEvent.wheelDelta && (e.originalEvent.wheelDelta > 0 ? 1 : -1)) ||
        (e.originalEvent.detail && (e.originalEvent.detail > 0 ? -1 : 1));
    // 给导航条添加特效

    if (delta > 0 && globalScroll.flag > 0) {
        // 向上滚

        $('body,html').scrollTop($(document.body).height() * --globalScroll.flag)
    } else if (delta < 0 && globalScroll.flag < 3) {
        $('body,html').scrollTop($(document.body).height() * ++globalScroll.flag)
       
        // 向下滚
    }
    $('.msidebar').find('li').eq(globalScroll.flag).addClass('animated pulse active').siblings().removeClass('animated pulse active')
    switch (globalScroll.flag) {
        case 1: {
            
            $('.msidebar').css({ 'background-color': "white" })
            break;
        }
        case 2: {
            $('.msidebar').css({ 'background-color': "white" })
            break;
        }
        case 3:{
            $('.page-info').fadeIn(2000)
            break;
        }

    }

    // 全屏滚动结束

}





