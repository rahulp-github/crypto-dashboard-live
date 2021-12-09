import React from 'react'
import 'chart.js/auto';
import { useEffect,useState } from 'react';
import { Pie } from "react-chartjs-2";
import { getDataFromApi,populateDataPie} from './ChartFunctions';
/*------------------------------------------------------------------------------------------------
                                        End OF Imports                                          
------------------------------------------------------------------------------------------------*/

export default function PieChart({filters}) {
    let variables = [...filters];

    // Initial States
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
       getDataFromApi(variables,"USD")
      .then(res => populateDataPie(res,setData,data))
     
    },[]);


    return (
        <>
            <div className="pie-chart">
                <div className="card-header">
                    Pie Chart Comparing prices In USD $ 
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                            <Pie data={data} height={300} width={300}/>
                    </li>
                </ul>
            </div>
        </>
    )
}
