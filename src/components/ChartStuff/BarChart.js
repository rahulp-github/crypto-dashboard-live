import React from 'react'
import 'chart.js/auto';
import { useEffect,useState } from 'react';
import { Bar } from "react-chartjs-2";
import { getDataFromApi,populateDataBar} from './ChartFunctions';
/*------------------------------------------------------------------------------------------------
                                        End OF Imports                                          
------------------------------------------------------------------------------------------------*/

export default function BarChart({filters}) {
    let variables = [...filters];

    // Initial State
    const [data,setData] = useState({
      labels:variables,
      datasets:[],
      options:{
        responsive:true,
        maintainAspectRatio:false
      }
    });

    // Get and Populate Data
    useEffect(() => {
       getDataFromApi(variables,"USD,EUR")
      .then(res => populateDataBar(res,setData,data))
     
    },[]);

    return (
        <>
            <div className="bar-chart">
                <div className="card-header">
                    Bar Chart showing prices in USD and EUR
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                        <Bar data={data} />
                    </li>
                </ul>
            </div>
        </>
    )
}
