import React from "react";
import './myStyles.css';

const Home = () => {

    return(
        <>
            <div class="container">

                <h1 class="title">App Name</h1>

                <div class="body">

                    <div class="left">

                        <div class="btn-group" role="group" aria-label="Basic radio toggle button group">
                            <input type="radio" class="btn-check" name="btnradio" id="btnradio1" autocomplete="off" />
                            <label class="btn green" for="btnradio1">Walk/Bike</label>

                            <input type="radio" class="btn-check" name="btnradio" id="btnradio2" autocomplete="off" />
                            <label class="btn" for="btnradio2">Car</label>

                            <input type="radio" class="btn-check" name="btnradio" id="btnradio3" autocomplete="off" />
                            <label class="btn" for="btnradio3">Bus</label>
                        </div>

                        <form>
                            <div class="form-group">
                                <input type="text" class="form-control" id="fromInput" placeholder="From..." />
                            </div>
                            <div class="form-group">
                                <input type="text" class="form-control" id="toInput" placeholder="To..."/>
                            </div>
                            <button type="submit" class="btn btn-primary">Go!</button>
                        </form>

                        <div class="stats">
                            stats go here
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
