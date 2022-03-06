import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';
import Card from '../UI/Card'
import { useState } from 'react';

const ExpenseItem = (props) => {

  const [ title, setTitle] = useState(props.title);

  const OnClickHandle = () =>{
    setTitle ("mudei");
  };

  return (

    <Card className='expense-item'>
      <ExpenseDate date={props.date} />
      
      <div className='expense-item__description'>
        <h2>{title}</h2>
        <div className='expense-item__price'>
          $ {props.price}
        </div>
      </div>
      <button onClick={OnClickHandle}>Change Tittle</button>

    </Card>
  );
}

export default ExpenseItem