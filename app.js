const Koa = require('koa');
const path = require('path');
const Router = require('koa-router');

const app = new Koa();
const router = new Router({ prefix: '/api' });


app.use(require('koa-bodyparser')());
app.use(require('koa-static')(path.join(__dirname, 'public')));

app.use(require('./middlewares/error'));


app.use(router.routes());

module.exports = app;