import React from 'react'
const {data,sym} = require('../symbols')
/*------------------------------------------------------------------------------------------------
                                        End OF Imports                                          
------------------------------------------------------------------------------------------------*/

export default function Dropdown({setNewFilter,clearAll,handleCompare}) {
   
    // Display Dropdown With Options
    return (
        <div className="filterPanel">
            <select onChange={(e) => {setNewFilter(e.target.value)}} className="form-select" aria-label="Crypto Select">
                <option value="ignore" defaultValue>Choose crypto currency to compare</option>
                {data.map((currency,idx) => 
                    <option key={idx} value={sym[idx]}>{currency}</option>
                )}
               
            </select>
            <button type="button" onClick={handleCompare} class="btn btn-outline-primary">Compare</button>
            <button type="button" onClick={clearAll} class="btn btn-outline-danger">Clear</button>
        </div>
    )
}
