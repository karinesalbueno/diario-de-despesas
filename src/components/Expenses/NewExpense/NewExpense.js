import './NewExpense.css';
import ExpenseForm from './ExpenseForm';
import { useState } from 'react';

const NewExpense = (props) => {
    const [isToShow, setIsToShow] = useState(false)

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        props.onAddExpense(expenseData)
        setIsToShow(false)
    }
    const clickButton = () => {
        setIsToShow(true)
    }
    const buttonNewExpense = <button onClick={clickButton}> Add new expense </button>
    const contentNewExpense = <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />

    const baseCondition = isToShow ? contentNewExpense : buttonNewExpense;

    return (
        <div className='new-expense'>
            {baseCondition}
        </div>
    )
}

export default NewExpense