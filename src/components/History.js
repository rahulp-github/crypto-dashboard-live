import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom';
/*------------------------------------------------------------------------------------------------
                                        End OF Imports                                          
------------------------------------------------------------------------------------------------*/


export default function History({ handleSearchAgain }) {

    const [history, setHistory] = useState([]);
    const [isPending, setIsPending] = useState(true);

    // Get History Of the User
    async function getHistory() {
        try {
            //local http://localhost:5000/getHistory
            let res = await fetch("https://crypto-dashboard-api-server.herokuapp.com/getHistory", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "x-access-token": localStorage.getItem('token')
                }
            });
            let resJson = await res.json();
            if (resJson.status === "ok") {
                setHistory(resJson.history)
            }
            else alert(`Error ${resJson.message}`);
        }
        catch (e) {
            alert(`Error : ${e}`);
        }
        setIsPending(false);
    }

    useEffect(() => {
        getHistory()
    }, []);


    return (
        <div className="container">
            {isPending ? <h4 className="historyTitle">Loading..</h4>
                :
                <h4 className="historyTitle">Search History  [Total result(s)- {history.length}]</h4>}
            {history.map((his, idx) =>
                <div key={idx} className="card border-primary historyCard">
                    <div className="card-header">
                        Time and date - {his.date}
                    </div>
                    <div className="card-body text-primary historyCardBody">
                        <h5 className="card-title ">All Currencies Selected</h5>
                        <p className="card-text">
                            <div className="currency">
                                {his.currency.map((currency, i) =>
                                    <p key={i} className="historyFilter">{currency}</p>
                                )}
                            </div>

                        </p>
                        <div className="historyButton">
                            <Link to="/" onClick={() => handleSearchAgain(history, idx)} className="btn btn-outline-primary "><i class="bi bi-search"></i> Search again</Link>
                        </div>
                    </div>
                </div>
            )}


        </div>
    )


}
