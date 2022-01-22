import React from "react";
import "./ExpensesList.css";
import ExpenseItems from "./ExpenseItems";
const ExpenseList = (props) => {
  if (props.items.length === 0) {
    return <h2 className="expense-list__fallback">Found no expenses</h2>;
  }

  return (
    <ul className="expense-list">
      {props.items.map((expenses) => (
        <ExpenseItems
          key={expenses.id}
          title={expenses.title}
          amount={expenses.amount}
          date={expenses.date}
        />
      ))}
    </ul>
  );
};
export default ExpenseList;
