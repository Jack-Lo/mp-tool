const Router = require('@koa/router');
const projectRouter = require('./project.js');
const appRouter = require('./app.js');

const router = new Router({
  prefix: '/api'
});

router.use(projectRouter.routes(), projectRouter.allowedMethods());
router.use(appRouter.routes(), appRouter.allowedMethods());

module.exports = router;
