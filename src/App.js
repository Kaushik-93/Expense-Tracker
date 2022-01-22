import React, { useState } from "react";

import Expenses from "./Components/Expenses/Expenses";
import NewExpenses from "./Components/NewExpenses/NewExpenses";
const Dummy_Expenses = [
  {
    id: "e1",
    title: "Car Insurance",
    date: new Date(2021, 5, 13),
    amount: 200,
  },
  {
    id: "e2",
    title: "toilet paper",
    date: new Date(2021, 3, 13),
    amount: 500,
  },
];
const App = () => {
  const [expenses, setexpenses] = useState(Dummy_Expenses);
  const AddExpenseHandler = (Expense) => {
    setexpenses((prevExpenses) => {
      return [Expense, ...prevExpenses];
    });
  };
  return (
    <div className="App">
      <NewExpenses onAddExpense={AddExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
