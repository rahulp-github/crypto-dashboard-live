import React from 'react'
/*------------------------------------------------------------------------------------------------
                                        End OF Imports                                          
------------------------------------------------------------------------------------------------*/

export default function Filter({allFilters,removeFilter}) {
    
    const data = [...allFilters]

    // Displaying Filters
    return (
        <div className="allFilters">
            {data.map((filter,idx) => 
                <div key={idx} className="filter">
                    <p>{filter} <i id={filter} onClick={(e) => {removeFilter(e.target.id)}} className="bi bi-x-lg"></i></p>
                </div>
            )}
           
        </div>
    )
}
