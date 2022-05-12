import React, { useState } from 'react';
import Expenses from './Components/Expenses/Expenses';
import NewExpense from './Components/NewExpense/NewExpense';


const DUMMY_EXPENSES = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  {
     id: 'e2', 
     title: 'New TV',
    amount: 799.49, date: 
    new Date(2021, 2, 12)
   },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];


// An alternatibe way for function syntax in line 6 can be written in line 8 as seen below 
// function App() {  

const App = () => {
 const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

const addExpenseHandler = expense => {
 setExpenses((prevExpenses) => {
   return [expense, ...prevExpenses]
 });
};

// This comment section from line 38 - 43 is a sample of using React syntax to call up/ rewrite in JSX syntax in Line 46
// return React.createElement(
//  'div',
// {},
// React.createElement('h2', {},"Let's Get Started!"),
// React.createElement( Expenses, { items: expenses})
//  );

// The below is a JSX Syntax: JSX allows us to write HTML in React. JSX makes it easier to write and add HTML in React.cd my-app

return (
 <div>
     <NewExpense onAddExpense={addExpenseHandler}> </NewExpense>
     <Expenses items={expenses}></Expenses>
  </div>
  );
 

};

export default App;
