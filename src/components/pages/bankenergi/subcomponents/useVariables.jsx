import {useState, useEffect} from 'react';
import { fetchApi } from '../Api';


const useVariables = () => {
    //variables that contains data fetched through API : 
    const [elexon, setElexon] = useState([]);
    const [windOn, setWindOn] = useState([]);
    const [windOff, setWindOff] = useState([]);
    const[allWind, setAllWind] = useState([]);
    const [solar, setSolar] = useState([]);
    const [temp, setTemp] = useState([]);
    var [intensities, setIntensities] = useState([])
    // Exlen
    const [graphElexonId, setGraphElexonId] = useState(0)
    const nextGraphId = () => {
        setGraphElexonId(graphElexonId == 3 ? 0 : graphElexonId+ 1);
    }
    const prevGraphId = () => {
        setGraphElexonId(graphElexonId == 0 ? 3 : graphElexonId- 1);
    }
    // Solar
    const [graphSolarId, setGraphSolarId] = useState(1)
    const nextSolarGraphId = () => {
        setGraphSolarId(graphSolarId == 3 ? 0 : graphSolarId+ 1);
    }
    const prevSolarGraphId = () => {
        setGraphSolarId(graphSolarId == 0 ? 3 : graphSolarId- 1);
    } 
    //Temp
    const [graphTempId, setGraphTempId] = useState(2)
    const nextTempGraphId = () => {
        setGraphTempId(graphTempId == 3 ? 0 : graphTempId+ 1);
    }
    const prevTempGraphId = () => {
        setGraphTempId(graphTempId == 0 ? 3 : graphTempId- 1);
    } 
    //Wind
    const [graphWindId, setGraphWindId] = useState(0)
    const nextWindGraphId = () => {
        setGraphWindId(graphWindId == 3 ? 0 : graphWindId+ 1);
    }
    const prevWindGraphId = () => {
        setGraphWindId(graphWindId == 0 ? 3 : graphWindId- 1);
    }

    useEffect(() => {
        
            fetchApi('exlexon').then(data => {
                setElexon(data);
            })
            fetchApi('solar').then(data => {
                setSolar(data);
            })
            fetchApi('temp').then(data => {
                setTemp(data);
            })
            fetchApi('wind_on').then(dataX => {
                fetchApi('wind_off').then(data => {
                    setAllWind(mergeData(dataX,data))
                 })
            })
            fetchApi('carbon_intensity').then(dataX => {
                var values = getMaxMinAvgIntensity(dataX);
                setIntensities(values)
                console.log(intensities)
            })
            
        }, [])


    return {graphElexonId, nextGraphId, prevGraphId ,allWind, elexon,windOn,setAllWind  , solar,temp,setTemp,
        graphSolarId ,nextSolarGraphId, prevSolarGraphId,graphTempId,nextTempGraphId,prevTempGraphId, graphWindId,
        nextWindGraphId, prevWindGraphId, intensities};
}




const mergeData = (data1, data2) => {
    var AllWindTemp = []
    data1.map((value, index) => {
        var obj = {};
        obj.quantitysettlementDateWindOn = value.quantitysettlementDate;
        obj.quantitysettlementDateWindOff = data2[index].quantitysettlementDate
        obj.period = value.period;
        AllWindTemp.push(obj);
    })
    return AllWindTemp;
}

const getMaxMinAvgIntensity = (array) => {
    console.log(array.length)
    var sorted =  array.sort((a, b) => a.Intensity -  b.Intensity)
    var sum = 0;
    array.map((value, index) => {
      sum += value.Intensity;
    })
    let arrayTobeReturned = [
        {
            value : sorted[array.length - 1].Intensity,
            name : 'Max Intensity',

        },
        {
            value : sorted[0].Intensity,
            name : 'Min Intensity',

        },
        {
            value : sum/array.length,
            name : 'Average Intensity',

        },
    ]
    console.log(arrayTobeReturned.length)
    return  arrayTobeReturned;
}
export default useVariables;