const Router = require('@koa/router');
const fs = require('fs-extra');
const path = require('path');
const process = require('process');

const projectConfigPath = path.resolve(process.cwd(), '../mp/project.config.json');

const router = new Router();

router.get('/project/config', ctx => {
  try {
    var json = fs.readJsonSync(projectConfigPath);
    ctx.body = {
      code: 0,
      data: json,
      msg: 'success',
    };
  } catch (err) {
    ctx.body = err.toString();
  }
});

module.exports = router;
