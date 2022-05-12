import React from 'react';
import './ExpenseDate.css';

// The function below can be interpreted in a javacript syntax in line 6
// function ExpenseDate (props){
const ExpenseDate = (props) => {
    const month = props.date.toLocaleString('en-US', {month: 'long'});
    const day = props.date.toLocaleString('en-US' , {day: '2-digit'});
    const year = props.date.getFullYear();
  
    return (

    <div className="expense-date">
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__day">{day}</div>
      <div className="expense-date__year">{year}</div>
   </div>
    )
    
  

}

export default ExpenseDate;