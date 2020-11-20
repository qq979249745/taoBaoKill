let host = location.host;

if (host.match('buy')) {
    document.querySelector('#submitOrderPC_1 > div.wrapper > a').click();
} else if (host.match('detail')) {
    waitTime(clickBuy)
} else if (host.match('cashiergan')) {
    document.querySelector("#payPassword_rsainput").value = 123456;//支付宝密码
    document.querySelector("#J_authSubmit").click();
}else if(host.match('cart')){
    waitTime(clickCar);
}
function waitTime(fun){
    let time = new Date().getTime() - new Date('2020-11-10 23:59:59').getTime();
    if (time < -1000) {
        setTimeout(() => {
            location.reload();
        }, -time - 1000);
    } else if (time < 0) {
        if (document.getElementsByClassName('tb-action tm-clear')[0].style.display === 'none') {
            setTimeout(() => {
                location.reload();
            }, -time);
        } else {
            fun();
        }
    } else {
        fun();
    }
}
//点击购物里的宝贝，快速下单
function clickCar(){
    setTimeout(()=>{
        document.querySelector("#J_Order_s_749240762_1 > div.J_ItemHead.shop.clearfix > div > div > label").click();
        setTimeout(()=>{
            if(document.querySelector("#J_SelectedItemsCount").textContent>1){
                console.log(111)
            }else {
                location.reload();
            }
        },300);
    },300);
}
//点击立即购买
function clickBuy() {
    console.log("buy")
    document.getElementById('J_LinkBuy').click();
    setInterval(()=>{
        document.getElementById('J_LinkBuy').click();
    },500);
}

