const Router = require('@koa/router');
const fs = require('fs-extra');
const path = require('path');
const process = require('process');
const klawSync = require('klaw-sync');

const appConfigPath = path.resolve(process.cwd(), '../mp/app.json');

const router = new Router();

router.get('/app/config', ctx => {
  try {
    var json = fs.readJsonSync(appConfigPath);
    ctx.body = {
      code: 0,
      data: json,
      msg: 'success',
    };
  } catch (err) {
    ctx.body = err.toString();
  }
});

router.get('/app/pages', ctx => {
  try {
    var paths = klawSync(path.resolve(appConfigPath, '../pages'), {nodir: true});
    console.log(paths.map(item => path.basename(item.path)));
    ctx.body = {
      code: 0,
      data: paths,
      msg: 'success',
    };
  } catch (err) {
    ctx.body = err.toString();
  }
});

module.exports = router;
