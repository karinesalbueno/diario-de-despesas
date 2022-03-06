import { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = () => {
    const [enteredTitle, SetEnteredTitle] = useState('');
            
    const titleChangeHandler = (event) =>{
        SetEnteredTitle(event.target.value)
    }
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