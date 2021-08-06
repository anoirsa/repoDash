import React, {useState, useEffect} from 'react'
import './HomePage.css'
import styled , {css}from 'styled-components/macro'
import { fetchWeather } from './subComponents/HopeApi';
import WContainer from './subComponents/WContainer';

const customProps = css`
    height : 100%;
    width : 100%;
    background: #fff;
    border-radius: 5px;
    border : 0.5px solid black;
`;


const LeftSection = styled.div`
    flex: 1;
    display: flex;
    padding: 10px 0;
    flex-direction: column;

    
    
`;
const RightSection = styled.div`
    flex: 1.5;
    
    display:flex;
    padding: 14px 6px;
    
`;
const CurrentWeather = styled.div`
    flex : 2;
    
    padding: 4px;
`;

const CurrentTime = styled.div`
    flex : 1;
    padding: 4px;
`;

const CurrentWatherWrapper = styled.div`
    ${customProps}

`;

const CurrentTimeWrapper = styled.div`
    ${customProps}
`;
const CryptoCurrency = styled.div`
    ${customProps}
`;



const HomePage = () => {
    
    return (
        <div className="home--section">
            <div className="home--wrapper">
                <LeftSection>
                    <CurrentWeather>
                        <CurrentWatherWrapper>
                            <WContainer />
                        </CurrentWatherWrapper>

                    </CurrentWeather>
                    <CurrentTime>
                        <CurrentTimeWrapper>

                        </CurrentTimeWrapper>

                    </CurrentTime>

                </LeftSection>
                <RightSection>
                    <CryptoCurrency>

                    </CryptoCurrency>

                </RightSection>

            </div>
        </div>
    )
}

export default HomePage
