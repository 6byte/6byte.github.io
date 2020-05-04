/**
 * 该文件存放所有可复用函数
 * 
 */
let func = {
    // 
    showTips: function (msg) {
        $('.login').show()
        $('.login b').text(msg)
    },
    /**
 * @desc 函数防抖
 * @param func 函数
 * @param wait 延迟执行毫秒数
 * @param immediate true 表立即执行，false 表非立即执行
 */
    debounce: function debounce(func, wait, immediate) {
        let timeout;

        return function () {
            let context = this;
            let args = arguments;

            if (timeout) clearTimeout(timeout);
            if (immediate) {
                var callNow = !timeout;
                timeout = setTimeout(() => {
                    timeout = null;
                }, wait)
                if (callNow) func.apply(context, args)
            }
            else {
                timeout = setTimeout(function () {
                    func.apply(context, args)
                }, wait);
            }
        }
    },
    ajax: function (url, data) {
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

    },
    html2Escape: function (sHtml) {
        return sHtml.replace(/[<>&"]/g, function (c) {
            return {
                '<': '&lt;', '>': '&gt;', '&': '&amp;', '"': '&quot;'
            }[c];
        });
    },

    scrollFun: function (e) {
        startTime = new Date().getTime();
        var event = e || window.event;
        var dir = event.detail || -event.wheelDelta;
        $('.msidebar').find('li').eq(globalScroll.flag).addClass('active').siblings().removeClass('active')
        if (startTime - endTime > 200) {
            if (dir > 0 && now > -3 * len) {
                globalScroll.flag++
                now -= len;
                $('#main').animate({top:now},200)
                // main.style.top = now + "px";
                endTime = new Date().getTime();
            } else if (dir < 0 && now < 0) {
                globalScroll.flag--
                now += len;
                // main.style.top = now + "px";
                $('#main').animate({top:now},200)
                endTime = new Date().getTime();

            }
        }
    }
}