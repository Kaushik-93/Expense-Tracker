import React, { useState } from "react";

import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import ExpensesList from "./ExpensesList";
import "./Expenses.css";
import ExpenseChart from "./ExpenseChart";
const Expenses = (props) => {
  const [filteredyear, setfilteredyear] = useState("2020");
  const filterChangeHandler = (selectedyear) => {
    setfilteredyear(selectedyear);
  };
  const filteredExpense = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredyear;
  });

  return (
    <Card className="expenses">
      <ExpenseFilter
        selected={filteredyear}
        onChangeFilter={filterChangeHandler}
      />
      <ExpenseChart expense={filteredExpense}></ExpenseChart>
      <ExpensesList items={filteredExpense} />
    </Card>
  );
};
export default Expenses;
