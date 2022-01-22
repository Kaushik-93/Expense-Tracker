import "./NewExpenses.css";
import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
const NewExpenses = (props) => {
  const [isEditing, setIsEditing] = useState(false);
  const SaveExpenseHandler = (enteredexpensedata) => {
    const expensedata = {
      ...enteredexpensedata,
      id: Math.random().toString(),
    };
    props.onAddExpense(expensedata);
    setIsEditing(false);
  };
  const startEditingHandler = () => {
    setIsEditing(true);
  };
  const stopEditingHandler = () => {
    setIsEditing(false);
  };

  return (
    <div className="new-expense">
      {!isEditing && (
        <button onClick={startEditingHandler}>Add New Expense</button>
      )}
      {isEditing && (
        <ExpenseForm
          onSaveExpenseHandler={SaveExpenseHandler}
          onCancel={stopEditingHandler}
        />
      )}
    </div>
  );
};
export default NewExpenses;
