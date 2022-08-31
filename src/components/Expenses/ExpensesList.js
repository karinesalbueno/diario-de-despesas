import ExpenseItem from "./ExpenseItem";
import './ExpensesList.css'

const ExpensesList = (props) => {

    const expensesContent = (
        props.baseCondition.map(expense => <ExpenseItem
            key={expense.id}
            title={expense.title}
            price={expense.amount}
            date={expense.date} />))

    return (
        <ul className="list"> {expensesContent}</ul>
    )
}

export default ExpensesList;