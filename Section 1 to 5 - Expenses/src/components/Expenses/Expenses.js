import "./Expenses.css"
import React, { useState } from 'react'
import Card from '../UI/Card/Card'
import ExpensesFilter from './ExpensesFilter'
import ExpensesList from "./ExpensesList"
import ExpensesChart from "./ExpensesChart"

const Expenses = ({ items }) => {

    const [filteredYear, setFilteredYear] = useState('2022')

    const filterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear);
    }

    const filteredExpenses = items.filter(expense =>
        expense.date.getFullYear().toString() === filteredYear
    );

    return (
        <Card className="expenses">
            <ExpensesFilter initialYear={filteredYear} onChangeFilter={filterChangeHandler} />
            <ExpensesChart expenses={filteredExpenses} />
            <ExpensesList items={filteredExpenses} />
        </Card>
    )
}

export default Expenses

