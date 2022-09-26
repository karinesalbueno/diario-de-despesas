import Card from '../UI/Card';
import { useState } from 'react';
import './ExpenseCard.css';
import ExpenseFilter from './Filter/ExpenseFilter';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState('All');

  const filteredChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear;
  })
  const baseCondition = filteredExpenses.length === 0 ? props.items : filteredExpenses;

  return (
    <Card className='expenses'>
      <ExpenseFilter selected={filteredYear} onChangeFilter={filteredChangeHandler} />
      <ExpensesChart expenses={filteredExpenses} />
      <ExpensesList items={filteredExpenses} baseCondition={baseCondition} />
    </Card>
  );
}

export default Expenses