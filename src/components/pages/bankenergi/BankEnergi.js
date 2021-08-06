import React, { useState, useEffect } from 'react'
import { fetchApi } from './Api';
import './BankEnergi.css';
import styled, { css } from 'styled-components/macro';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import Elexon from './subcomponents/Elexon';
import { IoArrowForward, IoArrowBack } from 'react-icons/io5';
import useVariables from './subcomponents/useVariables';

// styled components 



const customStyleArrows = css`
    padding: 20px;
    
`;



const IoArrowBackIcon = styled(IoArrowBack)`
    ${customStyleArrows}
`
const IoArrowForwardIcon = styled(IoArrowForward)`
    ${customStyleArrows}
`
//
const BankEnergi = () => {
    //const [elexon, setElexon] = useState([]);

    const { graphElexonId, prevGraphId, nextGraphId, graphSolarId, nextSolarGraphId, prevSolarGraphId
        , elexon,allWind,solar,temp,intensities,graphTempId,
        nextTempGraphId,prevTempGraphId, graphWindId, nextWindGraphId, prevWindGraphId  } = useVariables();
        
    return (
        <div className="bank--section ">
            <div className="bank--wrapper">
                <div>
                    <section className="button--section">
                        <IoArrowBack className="forwardBack" onClick={prevGraphId} />
                        <IoArrowForward className="forwardBack" onClick={nextGraphId} />
                    </section>
                    <h4>Elexon</h4>
                    <Elexon graphId={graphElexonId}
                        dataGiven={elexon}
                        datakeyOne="Time"
                        datakeyTwo="Demand" 
                        />
                </div>

                <div>
                    <section className="button--section">
                        <IoArrowBack className="forwardBack" onClick={nextSolarGraphId} />
                        <IoArrowForward className="forwardBack" onClick={prevSolarGraphId} />
                    </section>
                    <h4>Solar</h4>
                    <Elexon graphId={graphSolarId}
                        dataGiven={solar}
                        datakeyOne="Time1"
                        datakeyTwo="generation_mw" />
                </div>
                <div>
                    <section className="button--section">
                        <IoArrowBack className="forwardBack" onClick={nextTempGraphId} />
                        <IoArrowForward className="forwardBack" onClick={prevTempGraphId} />
                    </section>
                    <h4>Temperature</h4>
                    <Elexon graphId={graphTempId}
                        dataGiven={temp}
                        datakeyOne="Time"
                        datakeyTwo="Temperature" />
                </div>
                <div>
                    <section className="button--section">
                        <IoArrowBack className="forwardBack" onClick={nextWindGraphId} />
                        <IoArrowForward className="forwardBack" onClick={prevWindGraphId} />
                    </section>
                    <h4>Wind</h4>
                    <p>{graphWindId}</p>
                    <Elexon graphId={graphWindId}
                        dataGiven={allWind}
                        datakeyOne="period"
                        datakeyTwo="quantitysettlementDateWindOn"
                        dataKeyOneX="quantitysettlementDateWindOff"
                        
                         />
                </div>
                
                <div>
                    <h4>Carbon Intensity</h4>
                    
                    <Elexon graphId={2}
                        dataGiven={intensities}
                        datakeyOne="name"
                        datakeyTwo="value"
                        />
                </div> 
                
            </div>
        </div>
    )
}

export default BankEnergi
