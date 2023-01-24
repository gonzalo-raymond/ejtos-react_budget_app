import React, { useContext } from 'react';
import { TiDelete } from 'react-icons/ti';
import {FcPlus} from "react-icons/fc"
import {FaMinusCircle} from "react-icons/fa"
import { AppContext } from '../context/AppContext';

const ExpenseItem = (props) => {

    const { dispatch, currency } = useContext(AppContext);

    const handleDeleteExpense = () => {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: props.id,
        });
    };

    const increaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };

        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        });

    }

    const decreaseAllocation = (name) => {

        const expense = {
            name: name,
            cost: 10,
        };

        dispatch({
            type: 'RED_EXPENSE',
            payload: expense
        });

    }


    return (
        <tr>
            <td>{props.name}</td>
            <td>{currency}{props.cost}</td>
            <td style={{textAlign: "center", paddingTop: "5px"}}><FcPlus size="3em" onClick={event=> increaseAllocation(props.name)}></FcPlus></td>
            <td style={{textAlign: "center", paddingTop: "5px"}}><FaMinusCircle size="3em" style={{color: "#b01e11"}} onClick={event=> decreaseAllocation(props.name)}></FaMinusCircle></td>
            <td style={{textAlign: "center", alignItems: "center"}}><TiDelete size='1.5em' style={{marginTop: "10px"}} onClick={handleDeleteExpense}></TiDelete></td>
        </tr>
    );
};

export default ExpenseItem;