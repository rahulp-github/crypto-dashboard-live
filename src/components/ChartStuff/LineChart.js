import React from 'react'
import 'chart.js/auto';
import { useEffect,useState } from 'react';
import { Line } from "react-chartjs-2";
import { getDataFromApi ,populateDataLine } from './ChartFunctions';

/*------------------------------------------------------------------------------------------------
                                        End OF Imports                                          
------------------------------------------------------------------------------------------------*/

export default function LineChart({filters}) {
    let variables = [...filters];

    // Initial states
    const [data,setData] = useState({
      labels:'',
      datasets:[],
      options:{
        responsive:true,
        maintainAspectRatio:false
      }
    });

    // Get And Populate Data
    useEffect(() => {
       getDataFromApi(variables,"USD,EUR")
      .then(res => populateDataLine(res,setData))
    },[]);


    return (
        <>
            <div className="line-chart">
                <div className="card-header">
                    Line Chart Comparing prices in USD and EUR
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                        <Line data={data} height={300} width={300}/>
                    </li>
                </ul>
            </div>
        </>
    )
}
