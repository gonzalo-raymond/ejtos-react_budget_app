import React, { useContext, useState} from 'react';
import { AppContext } from '../context/AppContext';

const CurrencyDropdown = (props) => {

    const { dispatch, currency } = useContext(AppContext);

    const [name, setName] = useState("Pound");

    


    const chgCurrency = (newCurrency, newName) => {

        dispatch({
            type: 'CHG_CURRENCY',
            payload: newCurrency
        })

        setName(newName);

    };

    return (
        

        <div className="btn-group">
                
            <button type="button" style={{backgroundColor: "#93e499", color: "white", marginTop: "3px"}} className="btn btn-lg dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                Currency ({currency} {name})
            </button>

            <ul className="dropdown-menu" style={{backgroundColor: "#93e499", border: "2px solid green", width: "195px", fontSize: "18px", padding: "5px 0"}}>
                <li><button style={{padding: "5px 25px"}} className="dropdown-item" value="$" name="Dollar" onClick={(e) => chgCurrency(e.target.value, e.target.name)}>$ Dollar</button></li>
                <li><button style={{padding: "5px 25px"}} className="dropdown-item" value="£" name="Pound" onClick={(e) => chgCurrency(e.target.value, e.target.name)}>£ Pound</button></li>
                <li><button style={{padding: "5px 25px"}} className="dropdown-item" value="€" name="Euro" onClick={(e) => chgCurrency(e.target.value, e.target.name)}>€ Euro</button></li>
                <li><button style={{padding: "5px 25px"}} className="dropdown-item" value="₹" name="Ruppee" onClick={(e) => chgCurrency(e.target.value, e.target.name)}>₹ Ruppee</button></li>
            </ul>

        </div>
        
    );

};

export default CurrencyDropdown;