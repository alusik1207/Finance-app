const Koa = require('koa');
const app = new Koa();
const serve = require('koa-static');
const path = require('path');
const config = require('config');

const port = config.get('port') || 3000;

app.use(serve(path.join(__dirname, '../client/build')))

app.listen(port, () => {
    console.log(`App successfully started http://localhost:${port}`)
});