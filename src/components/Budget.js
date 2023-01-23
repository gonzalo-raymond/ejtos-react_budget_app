import React, { useContext} from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    
    const { dispatch, budget, expenses} = useContext(AppContext);

    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0);

    const editBudget = (newBudget) => {

        if(newBudget > 20000){

            alert("The value of the budget cannot exceed 20.000");

        }else if(newBudget < totalExpenses){

            alert("You cannot reduce the budget value lower than the spending");

        }else{

            dispatch({
                type: "SET_BUDGET",
                payload: parseInt(newBudget) 
            });
        }

    }

    return (
        <div className='alert alert-secondary'>
            <label for="budget">Budget: £</label>
            <input type="number" id="budget" value={budget} step="10" max="20000" onChange={(e) => editBudget(e.target.value)}/>
        </div>
    );
};

export default Budget;