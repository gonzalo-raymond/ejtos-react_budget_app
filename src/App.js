import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap"
import AllocationForm from "./components/AllocationForm";
// eslint-disable-next-line
import ExpenseItem from "./components/ExpenseItem";
import ExpenseList from "./components/ExpenseList";
import CurrencyDropdown from "./components/CurrencyDropdown";
import ExpenseTotal from "./components/ExpenseTotal";
import RemainingBudget from "./components/Remaining";
import Budget from "./components/Budget";
import { AppProvider } from './context/AppContext';

const App = () => {

    return (
        <AppProvider>
            <div className='container'>

                <h1 className='mt-3'>Company's Budget Allocation</h1>

                <div className='row mt-3 '>

                    <div className='col-sm'>
                        <Budget />
                    </div> 

                    <div className='col-sm'>
                        <RemainingBudget />
                    </div>

                    <div className='col-sm'>
                        <ExpenseTotal />
                    </div>

                    <div className='col-sm'>
                        <CurrencyDropdown />
                    </div>

                </div>

                <h3 className='mt-3'>Allocation</h3>

                <div className='row '>
                    <div className='col-sm'>
                        <ExpenseList />
                    </div>
                </div>

                <h3 className='mt-3'>Change allocation</h3>

                <div className='row mt-3'>
                    <div className='col-sm'>
                        <AllocationForm/>
                    </div>   
                </div>
            </div>
        </AppProvider>
    );
};

export default App;