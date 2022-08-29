import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpenses/NewExpense";

function App() {
  const expenses = [
    {
      id: "e1",
      title: "Papier toilettes",
      amount: 10,
      date: new Date(2020, 7, 14),
    },
    {
      id: "e2",
      title: "Nouvelle télé",
      amount: 799.49,
      date: new Date(2021, 2, 12),
    },
    {
      id: "e3",
      title: "Assurance voiture",
      amount: 80,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "Nouveau bureau (en bois)",
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];
  const addExpenseHandler = (expense) => {
    console.log(expense);
  };
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
