import React from "react";
import './myStyles.css';

const Home = () => {

    return(
        <>
            <div class="container">
                <h1>App Name</h1>

                <div class="body">

                    <div class="left">

                        <form>
                            <input type="text" name="from" placeholder="From..."/>
                            <input type="text" name="to" placeholder="To..."/>
                        </form>

                        <div class="statsDisplay">
                            Info about saving 
                        </div>

                    </div>


                    <div class="right">
                        <div class="map">map goes here</div>
                    </div>

                </div>

            </div>
        </>
    );

};

export default Home;
