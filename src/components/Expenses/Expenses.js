import React , { useState } from 'react';
import Card from '../UI/Card';
import './Expenses.css';
import ExpensesFilter from './ExpensesFilter';
import ExpenseList from './ExpensesList';
import ExpensesChart from './ExpensesChart';

function Expenses(props)
{
    const [filterYear,setFilterYear] = useState('2020');

    const filterChangeHandler = (data) => {
        setFilterYear(data);
    }

    const filteredExpenses = props.items.filter(expense => {
        return expense.date.getFullYear().toString() === filterYear;
    });

    

    return (

        <li>
         <Card className='expenses'>
            <ExpensesFilter selected = {filterYear} onChangeFilter = {filterChangeHandler} />
             <ExpensesChart expenses = {filteredExpenses} />
             <ExpenseList items = {filteredExpenses}/> 
         </Card>
        </li>
    )
}

export default Expenses;