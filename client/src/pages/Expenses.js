import React, {
  useCallback,
  useEffect,
  useState,
} from "react";
import Button from "../components/Button/Button";
import Container from "../components/Container/Container";
import TextField from "../components/Textfield/Textfield";
import Title from "../components/Title/Title";
import TransactionList from "../components/TransactionList/TransactionList";
import useActive from "../hooks/UseAktive";
import AddExpense from "./AddExpense";
import "./expenses.scss";
import validator from "../helpers/validator";
import axios from "axios";
import * as categories from "../constans/ExpensesCategories";
import CategoryIcons from "../components/CategoryIcons/CategoryIcons";

function Expenses() {
  const [data, setData] = useState([]);
  const [modalOpen, openModal, closeModal] =
    useActive(false);

  const [expenseForm, setExpenseForm] = useState({});
  const [errors, setErrors] = useState({});
  const onInput = useCallback(
    (value, name) => {
      setExpenseForm({ ...expenseForm, [name]: value });
    },
    [expenseForm]
  );

  useEffect(() => {
    const errors = validator(
      [
        {
          field: "amount",
          callback: (value) => value,
          message: "amount required",
        },
        {
          field: "amount",
          callback: (value) => value > 0 && value < 100000,
          message:
            "Amount must be in range between 0 and 100,000",
        },
        {
          field: "title",
          callback: (value) => value?.trim(),
          message: "name required",
        },
        {
          field: "title",
          callback: (value) => value?.length <= 20,
          message: "Name length must be less than 20 chars",
        },
      ],
      expenseForm
    );
    console.log(errors);
    setErrors(errors);
  }, [expenseForm]);

  const onModalClose = useCallback(() => {
    closeModal();
    setExpenseForm({});
  }, []);

  const onModalConfirm = useCallback(() => {
    axios.post("/api/expenses", expenseForm).then(() => {
      axios.get("/api/expenses").then((res) => {
        setData(res.data);
      });
    });
    closeModal();
  }, [expenseForm]);

  const onDelete = useCallback((id) => {
    axios.delete(`/api/expenses/${id}`).then(() => {
      axios.get("/api/expenses").then((res) => {
        setData(res.data);
      });
    });
  }, []);
  useEffect(() => {
    axios.get("/api/expenses").then((res) => {
      setData(res.data);
    });
  }, []);
  return (
    <div>
      <Container>
        <div className="heading">
          <Title>Expenses</Title>
          <Button onClick={openModal}>Add new</Button>
        </div>
        <TransactionList
          transactions={data}
          onDelete={onDelete}
        />
      </Container>
      <AddExpense
        open={modalOpen}
        onClose={onModalClose}
        title={"Add expense"}
      >
        <TextField
          label="Amount"
          id="amount"
          name="amount"
          placeholder="enter amount..."
          type="number"
          value={expenseForm.amount}
          onChange={onInput}
          error={errors.amount}
        />
        <TextField
          label="Name Expenses"
          id="NameExpenses"
          name="title"
          placeholder="enter name expenses..."
          value={expenseForm.title}
          onChange={onInput}
          error={errors.title}
        />
        <div className="category">
          {Object.values(categories).map((cat) => (
            <div
              className={`category-icon ${
                expenseForm.type === cat
                  ? "category-icon-active"
                  : ""
              }`}
              onClick={() => onInput(cat, "type")}
            >
              {" "}
              <CategoryIcons
                category={cat}
                width={25}
                height={25}
                fill="#fff"
              />
            </div>
          ))}
        </div>
        <Button
          onClick={onModalConfirm}
          dissabled={Object.keys(errors).length > 0}
          className="add_button"
        >
          Add
        </Button>
      </AddExpense>
    </div>
  );
}

export default Expenses;
