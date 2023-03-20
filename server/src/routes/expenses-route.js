const Router = require("koa-router");
const expensesRouter = new Router();
const { Validator } = require("node-input-validator");
const Expenses = require("../models/Expenses");

expensesRouter.post("/api/expenses", async (ctx) => {
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


  const expense = await Expenses.create({
    type: "default",
    userId: 1,
    ...data,

  });
  ctx.body = expense;
  console.log(expense);
});

expensesRouter.get("/api/expenses", async (ctx) => {
  const expenses = await Expenses.findAll();
  ctx.body = expenses;
});

expensesRouter.delete("/api/expenses/:id", async (ctx) => {
  const id = ctx.params.id;
  const expense=await Expenses.findOne({where:{id:id}});
  await expense.destroy();
  ctx.body = expense;
});
module.exports = expensesRouter;
