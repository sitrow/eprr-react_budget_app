
import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { dispatch, expenses, budget,currency } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    const upperLimit = 20000;
    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0);
    
    const handleBudgetChange = (event) => {
        setNewBudget(event.target.value);        
        
    }
    const handleSend = (event) => {
        if(event.key === 'Enter' && newBudget <= upperLimit && newBudget >= totalExpenses) {
            dispatch({
                type: 'SET_BUDGET',
                payload: newBudget,
            })
        } else if(event.key === 'Enter' && newBudget > 20000){
            alert("You cannot exceed the "+upperLimit+" Upper Limit")
        } else if(event.key === 'Enter' && newBudget < totalExpenses) {
            alert("You cannot reduce the budget lower than the spending!")
        }
    }
    return (
<div className='alert alert-secondary'>
<span>Budget: {currency}</span>
<input 
    type="number" 
    step="10" 
    value={newBudget} 
    onChange={handleBudgetChange}
    onKeyDown={handleSend} 
    max="20000"></input>
</div>
    );
};
export default Budget;