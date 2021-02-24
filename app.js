const Koa = require('koa');
const path = require('path');

const app = new Koa();


app.use(require('koa-bodyparser')());
app.use(require('koa-static')(path.join(__dirname, 'public')));

app.use(require('./middlewares/error'));

app.use(require('./router').routes());

module.exports = app;