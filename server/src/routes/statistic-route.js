const Router = require("koa-router");
const statisticRouter = new Router();
const {Validator} = require("node-input-validator");
const database = require('../utils/database')
const {QueryTypes} = require("sequelize");

statisticRouter.get("/api/stat/expenses", async (ctx) => {
    const res = await database.query(
        'SELECT type,SUM(amount)AS value FROM expenses GROUP BY type',
        {type: QueryTypes.SELECT}
    )
    ctx.body = res
})
module.exports=statisticRouter