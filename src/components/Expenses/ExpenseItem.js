import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  const expenseItem = props.value;
  return (
    <Card className="expense-item">
      <ExpenseDate date={expenseItem.date} />
      <div className="expense-item__description">
        <h2>{props.value.title}</h2>
        <div className="expense-item__price">{expenseItem.amount}€</div>
      </div>
    </Card>
  );
};

export default ExpenseItem;
