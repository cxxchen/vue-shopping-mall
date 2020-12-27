let Koa = require('koa');
let app = new Koa();


let Router = require('koa-router');
let router = new Router();

let mailData = require('./mail-data');
let goodsInfo = require('./detail');
for (let key in mailData) {
    router.get(`/mailApi/${key}`, async (ctx) => {
        ctx.body = mailData[key];
    });

}
//TODO:地址进行了修改
router.get(`/mailApi/goodsInfo`, async (ctx) => {
    let goodId = ctx.request.query.goodId;
    let data = goodsInfo.filter(g => g.goodId === goodId);
    ctx.body = data;
});


// 开始服务并生成路由
app.use(router.routes())
.use(router.allowedMethods());
app.listen(3000);