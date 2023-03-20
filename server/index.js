const Koa = require('koa');
const app = new Koa();
const serve = require('koa-static');
const path = require('path');
const config = require('config');
const Router = require('koa-router');
const router = new Router();
const views = require("koa-views-handlebars");
const bodyParser = require('koa-bodyparser');
const expensesRouter = require('./src/routes/expenses-route')
const incomesRouter =require('./src/routes/incomes-route')
const statisticRouter =require('./src/routes/statistic-route')
const database = require('./src/utils/database')


app.use(bodyParser());
app.use(views(path.join(__dirname, '../client/build'), { extension: 'html' }))

router.get("(.*)", async (ctx) => {
    await ctx.render("index", {});
})

const port = config.get('port') || 3000;
app.use(expensesRouter.routes())
app.use(incomesRouter.routes())
app.use(statisticRouter.routes())
app.use(serve(path.join(__dirname, '../client/build')))
app.use(router.routes());

app.listen(port, () => {
    console.log(`App successfully started http://localhost:${port}`)
});