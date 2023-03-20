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

function Incomes() {
  const [data, setData] = useState([]);
  const [modalOpen, openModal, closeModal] =
    useActive(false);

  const [incomeForm, setIncomeForm] = useState({});
  const [errors, setErrors] = useState({});
  const onInput = useCallback(
    (value, name) => {
      setIncomeForm({ ...incomeForm, [name]: value });
    },
    [incomeForm]
  );
  const onDelete= useCallback((id)=>{
    axios.delete(`/api/incomes/${id}`).then(()=>{
      axios.get("/api/incomes").then((res) => {
        setData(res.data)
      });
    })
  },[])

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
      incomeForm
    );
    console.log(errors);
    setErrors(errors);
  }, [incomeForm]);

  const onModalClose = useCallback(() => {
    closeModal();
    setIncomeForm({});
  }, []);

  const onModalConfirm = useCallback(() => {
    axios.post("/api/incomes", incomeForm).then(() => {
      axios.get("/api/incomes").then((res) => {

        setData(res.data);

      });
    });
    closeModal();
  }, [incomeForm]);

  useEffect(() => {
    axios.get("/api/incomes").then((res) => {
      console.log(res)
      setData(res.data);
    });
  }, []);
  return (
    <div>
      <Container>
        <div className="heading">
          <Title>Incomes</Title>
          <Button onClick={openModal}>Add new</Button>
        </div>
        <TransactionList transactions={data} onDelete={onDelete} />
      </Container>
      <AddExpense
        open={modalOpen}
        onClose={onModalClose}
        title={"Add income"}
      >
        <TextField
          label="Amount"
          id="amount"
          name="amount"
          placeholder="enter amount..."
          type="number"
          value={incomeForm.amount}
          onChange={onInput}
          error={errors.amount}
        />
        <TextField
          label="Name Incomes"
          id="NameIncomes"
          name="title"
          placeholder="enter name incomes..."
          value={incomeForm.title}
          onChange={onInput}
          error={errors.title}
        />
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

export default Incomes;
