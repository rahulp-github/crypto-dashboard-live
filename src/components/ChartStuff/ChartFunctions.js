/*------------------------------------------------------------------------------------------------
                                All Chart Related Functions Here                                        
------------------------------------------------------------------------------------------------*/


// Fetch Data from cryptoCompare api and return response object
async function getDataFromApi(variables,currency){
    let query = variables.toString();
    let res = await  fetch(`https://min-api.cryptocompare.com/data/pricemulti?fsyms=${query}&tsyms=${currency}&api_key=
    1df1aa65eb8d81605d977c7c1822b879e907e605ffba20c657432d2dbb84efb9`);
    let resJson = await res.json();
    return resJson
}

// Function for populating Line Chart data
function populateDataLine(val,setData){
    let dataset = []
    for(var key in val){
       let obj = {};
       obj.label = key;
       obj.data = [];
       obj.data.push(val[key]["USD"]);
       obj.data.push(val[key]["EUR"]);
       obj.borderColor = randomColor();
       dataset.push(obj);
    }
    setData({
      labels:["USD","EUR"],
      datasets:dataset
    })
}

// Function For Populating Pie Chart Data
function populateDataPie(val,setData,prevData){
    let dataset = []
    let data = []
    let backgroundColor = []
    for(var key in val){
       data.push(val[key]["USD"]);
       backgroundColor.push(randomColor());
    }
    dataset.push({data,backgroundColor});
    setData({...prevData,
      datasets:dataset
    })
}

// Function For Populating Bar Chart Data
function populateDataBar(val,setData,prevData){
    let dataset = []
    let usd = []
    let eur = []
    for(var key in val){
       usd.push(val[key]["USD"]);
       eur.push(val[key]["EUR"]);
    }
    dataset.push(
        {
            label:"USD",
            backgroundColor: "rgba(255,99,132)",
            data:usd
        },
        {
            label:"EUR",
            backgroundColor: "rgba(155,231,91)",
            data:eur
        }
    )
    setData({
        ...prevData,
        datasets:dataset
    })
}

// Function for Generating Random RGB color
function randomColor(){
    return `rgb(${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)})`
}

module.exports = {getDataFromApi,populateDataLine,populateDataPie,populateDataBar}