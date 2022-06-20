import React, { useState } from 'react';
import ExpenseForm from './ExpenseForm'

import './NewExpense.css';

function NewExpense(props)
{
    const [isEditing , setIsEditing] = useState(false);

    const saveExpenseDataHandler = (enteredExpenseData) => {
      const expenseData = {

          id : Math.random().toString(),
          ...enteredExpenseData
      };
      
      props.onAddExpense(expenseData);
      setIsEditing(false);
    }

    const startIsEditingHandler = () =>{
      setIsEditing(true);
    };

    const stopIsEditingHandler = () =>{
        setIsEditing(false);
    }

    return (
        <div className='new-expense'>
           { !isEditing && <button onClick={startIsEditingHandler}>Add New Expense</button> }
          { isEditing && < ExpenseForm onSaveExpenseData = {saveExpenseDataHandler} onCancel = {stopIsEditingHandler}/> }
        </div>
    );
}

export default NewExpense;