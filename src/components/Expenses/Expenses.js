import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import { useState } from 'react';
import './Expenses.css';
import ExpenseFilter from './Filter/ExpenseFilter';

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState(props.date);

  const filteredChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear;
  })

  return (
    <Card className='expenses'>
      <ExpenseFilter selected={filteredYear} onChangeFilter={filteredChangeHandler} />
      {filteredExpenses.length === 0 ?

        props.items.map(expense => <ExpenseItem
          key={expense.id}
          title={expense.title}
          price={expense.amount}
          date={expense.date} />)
        :
        filteredExpenses.map(expense => <ExpenseItem
          key={expense.id}
          title={expense.title}
          price={expense.amount}
          date={expense.date} />
        )
      }
    </Card>
  );
}

export default Expenses