import React from 'react';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image'
import './myStyles.css';
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import Green_Travel from '../Assets/Green_Travel.png';
import CO2_Graph from '../Assets/CO2 Emissions in Transportation industry.jpg';
import  Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const LandingPage = () =>
{
    return(
        <>
        <div style={{backgroundColor: '#F4F3EE'}}>
        <div className='container mp-'>
        <img src= {Green_Travel} class="rounded mx-auto d-block align-top" alt="team logo" height = '400' width='400' />
        </div>
    <div className="container mp-0">
                <h1 className="title"><strong><u>The World Needs a Shield</u></strong></h1>
                    <div className="d-grid gap-3">
                        <Row>
                        <Col>
                        <br/>
                        <br/>
                        <br/>
                        <div class ="pp-2 bd-highlight"><p>5 days ago, a giant iceberg nearly the size of Greater London began to break off in Antarctica due to a natural process called calving, accelerated by the world's global warming - <strong>climate change</strong>.</p></div>
                       
                        <div class ="pp-2 bd-highlight"><p>The leading cause of greenhouse gas emissions in the economic sector is the <strong>transportation industry</strong>, dominated by the use of commercial passenger vehicles.</p></div>
                        <div class ="pp-2 bd-highlight"><p>Greenhouse gases have been linked to extreme weather, food supply disruptions, and increased wildfires.</p></div>
                        <div class ="pp-2 bd-highlight"><p><u>Canada had the 7th highest CO<sub>2</sub> emissions per capita and had the 10th most emissions total</u>, producing nearly 21 tons yearly per person.</p></div>
                        <div class ="pp-2 bd-highlight"><p>Canada is home to some of the most beautiful wildlife, and the Canadian government recognizes the <strong>real threat</strong> global warming poses.</p></div>
                        <div class ="pp-2 bd-highlight"><p>As <strong>team Aegis</strong>, it is our mission and the goal of our product, Green Travel, to show you how much changing the way you travel could cut down on your greenhouse emissions.</p></div>
                        <Button className="btn btn-primary mb-4" type="submit">Find Your Contribution</Button>
                        </Col>
                        <Col>
                        <img class="ml-3" src={CO2_Graph} alt="Generic placeholder image" width="700" height ="600"/>
                        </Col>
                        </Row>
                        <br/>
                        <br/>
                        <br/>
                    </div>
            </div>  
            </div>  
        </>
    );

}

export default LandingPage;




{/* 
<>
        <div className='container'>
        <img src= {Green_Travel} class="rounded mx-auto d-block aling" alt="team logo"/>
        </div>
            <div className="container">
                <h1 className="title"><strong>The World Needs a Shield</strong></h1>
                    <div className="d-grid gap-3">
                        <div class ="pp-2 bd-highlight"><p>5 days ago, a giant iceberg nearly the size of Greater London began to break off in Antarctica due to a natural process called calving, accelerated by the world's global warming - <strong>climate change</strong>.</p></div>
                        <div class ="pp-2 bd-highlight"><p>The leading cause of greenhouse gas emissions in the economic sector is the <strong>transportation industry</strong>, dominated by the use of commercial passenger vehicles.</p></div>
                        <div class ="pp-2 bd-highlight"><p><u>Canada had the 7th highest CO<sub>2</sub> emissions per capita and had the 10th most emissions total</u>, producing nearly 21 tons yearly per person.</p></div>
                        <div class ="pp-2 bd-highlight"><p>As <strong>team Aegis</strong>, it is our mission and the goal of our product, Green Travel, to show you how much changing the way you travel could cut down on greenhouse emissions.</p></div>
                        <Button className="btn btn-primary mb-4" type="submit">Find Your Contribution</Button>
                    </div>
            </div>  
        </> */}