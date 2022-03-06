import { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = () => {
    const [userInput, setUserInput] = useState({
        enteredTitle: '',
        enteredAmount: '',
        enteredDate: ''
    });

    const titleChangeHandler = (event) => {
        setUserInput((prevState) => {
            return { ...prevState, enteredTitle: event.target.value }
        })
    }
    const amountChangeHandler = (event) => {
        setUserInput((prevState) => {
            return { ...prevState, enteredAmount: event.target.value }
        })
    }
    const dateChangeHandler = (event) => {
        setUserInput((prevState) => {
            return { ...prevState, enteredDate: event.target.value }
        })
    }
    //prevState, que depende do estado anterior. Essa é uma forma de usar varios useState juntos, permitindo varios estados juntos.  


    return <form>
        <div className='new-expense__controls'>

            <div className='new-expense__control'>
                <label>Tittle</label>
                <input type="text" onChange={titleChangeHandler} />
            </div>
            <div className='new-expense__control'>
                <label>Amount</label>
                <input type="number" min="0.01" step="0.01" />
            </div>
            <div className='new-expense__control'>
                <label>Date</label>
                <input type="date" min="2020-01-01" max="2022-05-03" />
            </div>
        </div>
        <div className='new-expense__actions'>
            <button>Add expense</button>
        </div>
    </form>
}

export default ExpenseForm