import React, { useContext} from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    
    const { dispatch, budget, expenses, currency} = useContext(AppContext);

    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0);

    const editBudget = (newBudget) => {

        if(newBudget > 20000){

            alert("The value of the budget cannot exceed " + currency + "20.000");

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
        <div style={{paddingRight: "0", display: "flex", alignItems: "center", justifyContent: "space-evenly"}} className='alert alert-secondary'>
            
            <label htmlFor="budget">Budget: </label>
            <div>
                <span style={{fontSize: "18px", fontWeight: "600", marginInlineStart: "15px", marginRight: "2px", paddingTop: "3px"}}>{currency}</span>
                <input type="number" id="budget" style={{padding: "2px", marginRight: "0"}} 
                    value={budget} 
                    step="10" 
                    max="20000" 
                    onChange={(e) => editBudget(e.target.value)}
                />
            </div>
            
        
        </div>
    );
};

export default Budget;