import React from "react";
import './myStyles.css';
import { Autocomplete, GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import Map from "./Map";


async function calculateRoute() {
    if (originRef.current.value === '' || destinationRef.current.value === '') {
      return
    }
    // eslint-disable-next-line no-undef
    const directionsService = new google.maps.DirectionsService()
    const results = await directionsService.route({
      origin: originRef.current.value,
      destination: destinationRef.current.value,
      // eslint-disable-next-line no-undef
      travelMode: google.maps.TravelMode.DRIVING,
    })
    setDirectionsResponse(results)
    setDistance(results.routes[0].legs[0].distance.text)
    setDuration(results.routes[0].legs[0].duration.text)
  }

  function clearRoute() {
    setDirectionsResponse(null)
    setDistance('')
    setDuration('')
    originRef.current.value = ''
    destinationRef.current.value = ''
  }

  directionsService.route(
    {
      origin: origin,
      destination: destination,
      travelMode: google.maps.TravelMode.DRIVING
    },
    (result, status) => {
      if (status === google.maps.DirectionsStatus.OK) {
        this.setState({
          directions: result
        });
      } else {
        console.error(`error fetching directions ${result}`);
      }
    }
  );





const Home = ({ user, dispatch }) => {

    return(
        <>
            <div class="container">

                <h1 class="title">App Name</h1>

                <div class="body">

                    <div class="left">
                        {/* <form>
                            <Autocomplete>
                            <input type="text" ref  ={originRef} name="from" placeholder="From..."/>
                            </Autocomplete>
                            <Autocomplete>
                            <input type="text" ref = {destinationRef} name="to" placeholder="To..."/>
                            </Autocomplete> */}

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
                        <div class="map"><Map /></div>
                    </div>

                </div>

            </div>
        </>
    );

};

export default Home;
