let personInfo = {
    wechat: 'wechat15',
    phone: '13597564895',
    native: 'Hunan',
    level:'初级工程师'
}
for (let key in personInfo) {
    $('#personInfo').append(
        `
        <li>
            <div class="row text-center mt-4 mb-2 ">
                <div class="col p-0">${key}</div>
                <div class="col p-0">${personInfo[key]}</div>
            </div>
        </li>
        `
    );
}


