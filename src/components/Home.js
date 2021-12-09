import React from 'react'
import Dropdown from './Dropdown'
import Filter from './Filter'
import BarChart from './ChartStuff/BarChart'
import PieChart from './ChartStuff/PieChart'
import LineChart from './ChartStuff/LineChart.js'
import { useState, useEffect } from 'react'
/*------------------------------------------------------------------------------------------------
                                        End OF Imports                                          
------------------------------------------------------------------------------------------------*/

export default function Home({ historyFilters, toggleHistory, isAuthenticated }) {

    const [filters, setFilters] = useState(new Set());
    const [isCompared, setIsCompared] = useState(false);

    // Check if user clicked on search again in history section
    useEffect(() => {
        if (historyFilters.length > 1) {
            setFilters(new Set(historyFilters));
            setIsCompared(true);
            toggleHistory();
        }
    }, []);

    return (
        <> 
            <div className="alertMsg">
                {!isAuthenticated && 
                <div class="alert alert-warning alert-dismissible fade show" role="alert">
                    <strong>Tip: </strong> SignIn To store your comparisons in history
                    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                </div>}
            </div>
            
            <div className="container">
                <Dropdown setNewFilter={setNewFilter} clearAll={clearAll} handleCompare={handleCompare} />
                <Filter allFilters={filters} removeFilter={removeFilter} />
                {isCompared ?
                    <div className="row">
                        <div className="col-sm-6 pie">
                            <PieChart filters={filters} />
                        </div>
                        <div className="col-sm-6 line ">
                            <LineChart filters={filters} />
                        </div>
                        <div className="col-sm-6 bar">
                            <BarChart filters={filters} />
                        </div>
                    </div>
                    :
                    <div className="notCompared">
                        <h4>Select crypto currencies to compare and click on compare button </h4>
                    </div>
                }
            </div>
        </>
    )

    // Add new Filter to State
    function setNewFilter(val) {
        if (val !== "ignore")
            setFilters(new Set(filters.add(val)))
    }

    // Remove Filter from state
    function removeFilter(val) {
        let newState = new Set();
        newState = filters;
        newState.delete(val);
        setFilters(new Set(newState));
    }

    // Clear All The Filters from state
    function clearAll() {
        setFilters(new Set());
        setIsCompared(false);
    }

    // Handler When clicked on Compare Button
    async function handleCompare() {
        if (filters.size <= 1) return alert('Choose atleast two currencies to compare');
        if (isCompared) setIsCompared(false)
        if (isAuthenticated) {
            let date = new Date();
            let allCurrencies = [...filters];

            const newHistoryRecord = {
                "currency": allCurrencies,
                "date": date
            }
            try {
                // Local http://localhost:5000/addHistory
                let res = await fetch("https://crypto-dashboard-api-server.herokuapp.com/addHistory", {
                    method: "POST",
                    headers: {
                        "x-access-token": localStorage.getItem("token"),
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(newHistoryRecord)
                });
                let resJson = await res.json();
            }
            catch (e) {
                alert(`Error ${e}`);
            }
        }
        setTimeout(() => {
            setIsCompared(true);
        }, 1);

    }

}
