import React, { useState } from "react";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import "./ExpensesFilter.css";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2023");
  const filterChangedHandler = (selectedYear) => {
    const expenseYear = selectedYear;
    setFilteredYear(expenseYear);
    console.log(expenseYear);
  };
  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilterHandler={filterChangedHandler}
      />
      <ExpenseItem value={props.items[0]} />
      <ExpenseItem value={props.items[1]} />
      <ExpenseItem value={props.items[2]} />
      <ExpenseItem value={props.items[3]} />
    </Card>
  );
};

export default Expenses;
