/**
 * 本文件用于初始化页面
 */

document.addEventListener('contextmenu',function(e){
    e.preventDefault()
})
// DOM元素完成后触发
$(window).ready(function () {
    $('.level').hide()
   // 初始化高度
   setTimeout(function () {
       $('.mbody').show()
       $('.level').show()
       $('.loading').hide()
      
   }, 100)
   $('#first').height($(document.body).height())
   $('#second').height($(document.body).height())
   $('#third').height($(document.body).height())
   $('#fourth').height($(document.body).height())
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

        $('body,html').animate({
            scrollTop: $(document.body).height() * --globalScroll.flag
        }, 500);
    } else if (delta < 0 && globalScroll.flag < 3) {
        $('body,html').animate({
            scrollTop: $(document.body).height() * ++globalScroll.flag
        },
            500
        );
        // 向下滚
    }
    $('.msidebar').find('li').eq(globalScroll.flag).addClass('animated pulse active').siblings().removeClass('animated pulse active')
    switch (globalScroll.flag) {
        case 1: {
            $('.msidebar').css({ 'background-color': "white" })
            setTimeout(function () { $('#second').addClass('animated pulse active') },1000)
            
            break;
        }
        case 2: {
            $('.msidebar').css({ 'background-color': "white" })
            setTimeout(function () { $('#third').addClass('animated rubberBand active') },1000)
            
            break;
        }
    }

// 全屏滚动结束

// fourth开始

// fourth结束

}



