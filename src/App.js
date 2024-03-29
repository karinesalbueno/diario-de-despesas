import Expenses from './components/Expenses/ExpenseCard';
import NewExpense from './components/Expenses/NewExpense/NewExpense';
import  { useState } from 'react';

function App() {

  const DUMMY_EXPENSES = [

    {
      id: 'e2',
      title: 'New TV',
      amount: 799.49,
      date: new Date(2020, 2, 12),
    },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2022, 2, 28),
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseDataHandler = expense => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <header className="App-header">
        <NewExpense onAddExpense={addExpenseDataHandler} />
        <Expenses items={expenses} />
      </header>
    </div>
  );
}

export default App;
