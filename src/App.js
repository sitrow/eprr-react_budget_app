import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

//Code to import Budget.js
import Budget from './components/Budget';
import Remaining from './components/Remaining';
import ExpenseTotal from './components/ExpenseTotal';
import ExpenseList from './components/ExpenseList';
import AllocationForm from './components/AllocationForm';
import Currency from './components/Currency';

import { AppProvider } from './context/AppContext';

const App = () => {
    return (
        <AppProvider>
            <div className='container'>
                <h1 className='mt-3'>Company's Budget Allocation</h1>
                    <div className='row mt-3'>
                        {
                            // Budget component
                            <div className='col-sm'>
                                <Budget />
                            </div>
                        }        

                        {
                            //Remaining component
                            <div className='col-sm'>
                                <Remaining />
                            </div>
                        }        

                        {
                            /* Add ExpenseTotal component here */
                                             //ExpenseTotal component
                            <div className='col-sm'>
                                <ExpenseTotal />
                            </div>
                        } 
                        {
                            /* Add ExpenseTotal component here */
                                             //ExpenseTotal component
                            <div className='col-sm'>
                                <Currency />
                            </div>
                        }        
                        <h3 className='mt-3'>Allocation</h3>
                        {
                            /* Add ExpenseList component here */
                            <div className='row mt-3'>
                                <div className='col-sm'>
                                    <ExpenseList />
                                </div>
                            </div>
                        }  
                               
                        <h3 className='mt-3'>Change allocation</h3>
                        {
                            /* Add ExpenseItem component here */
                            <div className='row mt-3'>
                                <div className='col-sm'>
                                    <AllocationForm/>
                                </div>
                            </div>
                        }        

                        {
                            /* Add AllocationForm component here under */
                        }        

                </div>
            </div>
        </AppProvider>
    );
};
export default App;
