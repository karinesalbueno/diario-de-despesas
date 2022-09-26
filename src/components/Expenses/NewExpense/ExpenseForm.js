import { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = (props) => {
    const [userInput, setUserInput] = useState({
        enteredDate: '',
        enteredAmount: '',
        enteredTitle: ''
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

    const submitHandler = (event) => {
        event.preventDefault();
        //evita que a pag seja recarregada ao enviar o formulário
        const expenseData = {
            title: userInput.enteredTitle,
            amount: +userInput.enteredAmount,
            date: new Date(userInput.enteredDate)
        }
        props.onSaveExpenseData(expenseData)
        /* pega a propriedade do newExpense gerando um id aleatorio e adicionando ao 
        componente ExpenseForm chamado e atribuindo a ele qnd o submit é feito*/
        /*passa o expenseData dentro para que possa unir os dados de id c titulo, preço e data */

        setUserInput({
            enteredDate: '',
            enteredAmount: '',
            enteredTitle:''
        })
    }

    return (
        <form onSubmit={submitHandler}>
            <div className='new-expense__controls'>

                <div className='new-expense__control'>
                    <input
                        type="text"
                        placeholder='tittle'
                        value={userInput.enteredTitle}
                        onChange={titleChangeHandler} />
                </div>

                <div className='new-expense__control'>
                    <input
                        placeholder='Amount'
                        type="number" min="0.01" step="0.01"
                        value={userInput.enteredAmount}
                        onChange={amountChangeHandler} />
                </div>

                <div className='new-expense__control'>
                    <input
                        type="date" min="2020-01-01" max="2022-05-03"
                        value={userInput.enteredDate}
                        onChange={dateChangeHandler} required />
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