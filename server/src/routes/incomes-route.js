const Router = require("koa-router");
const incomesRouter = new Router();
const { Validator } = require("node-input-validator");
const Incomes = require("../models/Incomes");
const Expenses = require("../models/Expenses");

incomesRouter.post("/api/incomes", async (ctx) => {
  const data = ctx.request.body;
  const validator = new Validator(data, {
    amount: "required|decimal|between:0,100000",
    title: "required|string|maxLength:20",
  });
  const matched = await validator.check();
  if (!matched) {
    ctx.status = 422;
    ctx.body = validator.errors;
    return;
  }

  const income = await Incomes.create({
    type: "default",
    userId: 1,
    ...data,
  });
  ctx.body = income;
  console.log(income);
});

incomesRouter.get("/api/incomes", async (ctx) => {
  const incomes = await Incomes.findAll();
  ctx.body = incomes;
});

incomesRouter.delete("/api/incomes/:id", async (ctx) => {
  const id = ctx.params.id;
  const income=await Incomes.findOne({where:{id:id}});
  await income.destroy();
  ctx.body = income;
});
module.exports = incomesRouter;
