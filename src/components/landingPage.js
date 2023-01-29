import React from 'react';
import Button from 'react-bootstrap/Button';

const landing = () =>
{
    return(
        <>
            <div className = "Header">
            <img src={banner} alt="" />
            </div>
            <h1><strong>The World Needs a Shield</strong></h1>
            <p>5 days ago, a giant iceberg nearly the size of Greater London began to break off in Antarctica due to a natural process called calving, accelerated by the world's global warming - <strong>climate change</strong>.</p>
            <br />
            <p>The leading cause of greenhouse gas emissions in the economic sector is the transportation industry, dominated by the use of commercial passenger vehicles.</p>
            <br />
            <p>Canada has the 7th highest CO <sub>2</sub> emissions per capita, producing nearly 21 tons yearly per person. </p>
            <br />
            <p>As <u><strong>team Aegis</strong></u>, it is our mission and the goal of our product, Green Travel, to show you how much changing the way you travel could cut down on 
                 greenhouse emissions.</p>
                 <button>Click here to find out how</button>
            
        </>
    );

}

export default landingPage;