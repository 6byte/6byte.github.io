// 该类用于创建对象

class soldier {
    constructor(x = 0, y = 0, name) {
        this.x = x
        this.y = y
        // 根节点
        this.objParentNode = $('.girl')
        this.name = name
        this.id = '#' + name
        // 技能施放速度
        this.speed = 80
        this.host = reomateHost.host
    }
    // 初始化
    init() {
        let that = this
        this.create(that)
        func.debounce(that.event(that), 200, true)
    }
    // 创建
    create(that) {

        that.objParentNode.append(`<div id=${that.name}><img src="https://sixbyte.oss-cn-shanghai.aliyuncs.com/game/normal/1933_0.png" ></div> `)

    }
    // 通过一个event接收键盘事件，并传给其他动作
    event(that) {



        window.onkeydown = function (e) {
            console.log(that);
            that.filterKey(e, that)
            that.skill(e, that)
            that.action(e)
        }
    }
    // 移动
    filterKey(e, that) {
        if (e.which == 38 || e.which == 40) {
            e.preventDefault()
        }

    }
    //释放技能
    skill(e, that) {
        switch (e.which) {
            // J键
            case 74: {
                let tmp = 0
                let imgAction = setInterval(function () {
                    $(that.id).find('img').attr('src', 'https://sixbyte.oss-cn-shanghai.aliyuncs.com/game/normal/1933_' + tmp++ + '.png')
                    if (tmp == 8) {
                        window.clearInterval(imgAction)
                    }
                    console.log('执行');
                }, that.speed)
                break;
            }

            case 75: {
                let tmp = 0
                let imgAction = setInterval(function () {
                    $(that.id).find('img').attr('src', 'https://sixbyte.oss-cn-shanghai.aliyuncs.com//game/axe/1931_' + tmp++ + '.png')
                    if (tmp == 8) {
                        window.clearInterval(imgAction)
                    }
                    console.log('执行');
                }, that.speed)
                break;
            }
            default:
                break;
        }


    }
    // 动作,切换图片
    action() {

    }
}

let msoldier = new soldier(20, -20, "soldier");
msoldier.init()