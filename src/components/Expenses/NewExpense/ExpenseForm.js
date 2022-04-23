import { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = (props) => {
    const [enteredTitle, SetEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

    const titleChangeHandler = (event) => {
        SetEnteredTitle(event.target.value)
    }
    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value)
    }
    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value)
    }

    const submitHandler = (event) => {
        event.preventDefault();
        //evita que a pag seja recarregada ao enviar o formulário
        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        }


       props.onSaveExpenseData(expenseData)
    /* pega a propriedade do newExpense gerando um id aleatorio e adicionando ao 
    componente ExpenseForm chamado e atribuindo a ele qnd o submit é feito*/
    /*passa o expenseData dentro para que possa unir os dados de id c titulo, preço e data */
    

        SetEnteredTitle('')
        setEnteredAmount('')
        setEnteredDate('')
    }

    return (
        <form onSubmit={submitHandler}>
            <div className='new-expense__controls'>

                <div className='new-expense__control'>
                    <label>Tittle</label>
                    <input
                        type="text"
                        value={enteredTitle}
                        onChange={titleChangeHandler} />
                </div>

                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input
                        type="number" min="0.01" step="0.01"
                        value={enteredAmount}
                        onChange={amountChangeHandler}/>
                </div>

                <div className='new-expense__control'>
                    <label>Date</label>
                    <input
                        type="date" min="2020-01-01" max="2022-05-03"
                        value={enteredDate} 
                        onChange={dateChangeHandler} />
                </div>

            </div>
            <div className='new-expense__actions'>
                <button>Add expense</button>
            </div>

        </form>
    )
    //adicionar o VALUE dentro do input, faz com que limpe a entrada do input após submeter o formulário,
    //p.s: para isso é necessário colocar o setState ('') novamente após o resultado q vc quer
}

export default ExpenseForm