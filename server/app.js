const Koa = require('koa');
const Router = require('@koa/router');
const cors = require('koa2-cors');
const app = new Koa();
const apiRouter = require('./api/index.js');

const router = new Router();

router.get('/', (ctx, next) => {
  ctx.body = 'Hello';
  next();
});

app.use(cors());
app.use(router.routes());
app.use(router.allowedMethods());
app.use(apiRouter.routes());
app.use(apiRouter.allowedMethods());

app.listen(3000);
