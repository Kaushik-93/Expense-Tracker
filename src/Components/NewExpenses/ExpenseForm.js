import React, { useState } from "react";
import "./ExpenseForm.css";
const ExpenseForm = (props) => {
  const [enteredtitle, setenteredtitle] = useState("");
  const [enteredamount, setenteredamount] = useState("");
  const [entereddate, setentereddate] = useState("");
  const titleChangeHandler = (event) => {
    setenteredtitle(event.target.value);
  };
  const amountChangeHandler = (event) => {
    setenteredamount(event.target.value);
  };
  const dateChangeHandler = (event) => {
    setentereddate(event.target.value);
  };
  const Submithandler = (event) => {
    event.preventDefault();
    const ExpenseData = {
      title: enteredtitle,
      amount: enteredamount,
      date: new Date(entereddate),
    };
    props.onSaveExpenseHandler(ExpenseData);
    setenteredtitle("");
    setenteredamount("");
    setentereddate("");
  };

  return (
    <form onSubmit={Submithandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredtitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredamount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-1-1"
            max="2021-12-31"
            value={entereddate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};
export default ExpenseForm;
