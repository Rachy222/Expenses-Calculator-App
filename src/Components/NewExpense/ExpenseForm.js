import React, { useState} from 'react';
import './ExpenseForm.css';

const ExpenseForm = (props) => {
  // Here the 3 state are be created (Title, Amount & Time)
  const [enteredTitle, setEnteredTitle]= useState  ('');
  const [enteredAmount, setEnteredAmount]= useState ('');
  const [enteredDate, setEnteredDate]= useState ('');


  // The 3 above state can as well be written in one line state/const, but it's advisable each state are called individually
  //const [userInput, setUserInput] = useState ({
  //  enteredTitle: '',
  //  enteredAmount: '',
  //  enteredDate: '',
  // });
  // sample for the Eventhandler on using one line state/const
  // setUserInput((prevState) => {
  //   return { ...prevState, enteredTitle: event.target.value }
  // })
  // The EventHandler for the 3 states are created 
  const titleChangeHandler = (event) => {
  // console.log(event.target.value); The useState "setEnteredTitle" created is now replaced with console.log as seen below
    setEnteredTitle(event.target.value);
  };
  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };
   const dateChangeHandler = (event) => {
     setEnteredDate(event.target.value);
   };

   const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };
  
  props.onSaveExpenseData(expenseData);
  setEnteredTitle('');
  setEnteredAmount('');
  setEnteredDate('');

   };
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={enteredTitle} onChange={titleChangeHandler}></input>
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input type="number" min="0.01" step="0.01" value={enteredAmount} onChange={amountChangeHandler}></input>
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input type="date" min="2019-01-01" max="2022-12-31" value={enteredDate} onChange={dateChangeHandler}></input>
        </div>
      </div>
       <div className="new-expense__actions">
           <button type="button" onClick={props.onCancel}> Cancel</button>
           <button type="Submit">Add Expense</button>
           
       </div>
    </form>
  );
};

export default ExpenseForm;
