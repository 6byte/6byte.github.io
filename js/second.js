// 显示第一个

$(".skill-nav li").click(function (e) {
    $(".skill-content>.position-absolute").eq($(this).index()).show().siblings().hide()
});
$(".skill-content >.position-absolute").eq(0).show()

let skillCard = [{
    title: '0->1',
    imgSrc: 'https://sixbyte.oss-cn-shanghai.aliyuncs.com/src/second/img/1.png',
    content: '从UI设计到Linux部署发布',
    footer: '已完整上线项目'
},
{
    title: '主流技术栈',
    imgSrc: 'https://sixbyte.oss-cn-shanghai.aliyuncs.com/src/second/img/smart.png',
    content: 'SpringBoot,Vue,Mysql',
    footer: '适合大部分项目'
},
{
    title: '独立',
    imgSrc: 'https://sixbyte.oss-cn-shanghai.aliyuncs.com/src/second/img/full.png',
    content: '完全个人开发，减少沟通障碍',
    footer: ''
},
]
// v-for渲染页面
for (let key in skillCard) {

    $('#skill-card').append(
        `
<div class="col  pr-0 mb-2">
    <div class="card mb-3">
        <div class="row no-gutters">
            <div class="col-md-4 border-right">
                <img src="${skillCard[key].imgSrc}"
                    class="card-img img-fluid p-4">
            </div>
            <div class="col-md-8">
                <div class="card-body p-2">
                    <h5 class="card-title text-dark text-center">${skillCard[key].title}</h5>
                    <p class="card-text text-dark">${skillCard[key].content}</p>
                    <p class="card-text text-right text-muted pt-2">
                        <small>${skillCard[key].footer}</small>
                    </p>
                </div>
            </div>
        </div>
    </div>
</div>
`
    )
}
