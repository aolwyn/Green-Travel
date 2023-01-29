import React, { useState, useRef, useEffect } from "react";
import './myStyles.css';
import { Autocomplete, GoogleMap, useJsApiLoader, DirectionsRenderer } from '@react-google-maps/api';
import Map from "./Map";
import axios from "axios";
var config = {
    method: 'get',
    url: '',
    headers: { 
        post: {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json"
        } 
    }
};
const Home = ({ user, dispatch }) => {
    const [map, setMap] = useState(/** @type google.maps.Map */ (null))
    const [directionsResponse, setDirectionsResponse] = useState(null)
    const [distance, setDistance] = useState('')
    const [duration, setDuration] = useState('')
    const [url, setUrl] = useState('')
    const [data, setData] = useState('')
    /** @type React.MutableRefObject<HTMLInputElement> */
    const originRef = useRef()
    /** @type React.MutableRefObject<HTMLInputElement> */
    const destinationRef = useRef()
    const google = window.google;    
    const fetchData = React.useEffect(async () => {
        await axios(config).then((res) => {
            setData(res.data)
        })
    }, [url])

    useEffect(async() => {
        await fetchData()
    }, [fetchData])
    async function calculateRoute() {
        if (originRef.current.value === '' || destinationRef.current.value === '') {
            return

        }
        
        let url = encodeURI(`https://maps.googleapis.com/maps/api/directions/json?origin=${originRef.current.value}&destination=${destinationRef.current.value}&key=${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}`);
        setUrl(url)
        console.log(data)
        setDistance(data[0].legs[0].distance.value)
        setDuration(data[0].legs[0].duration.value)
    }
    
    function clearRoute() {
        setDirectionsResponse(null)
        setDistance('')
        setDuration('')
        originRef.current.value = ''
        destinationRef.current.value = ''
    }
    
    // directionsService.route(
    //     {
    //         origin: origin,
    //         destination: destination,
    //         travelMode: google.maps.TravelMode.DRIVING
    //     },
    //     (result, status) => {
    //         if (status === google.maps.DirectionsStatus.OK) {
    //         this.setState({
    //             directions: result
    //         });
    //         } else {
    //         console.error(`error fetching directions ${result}`);
    //         }
    //     }
    // );

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
                                <input 
                                    type="text" 
                                    class="form-control" 
                                    id="fromInput" 
                                    placeholder="Choose a starting point" 
                                    ref={originRef}
                                />
                            </div>
                            <div class="form-group">
                                <input 
                                    type="text" 
                                    class="form-control" 
                                    id="toInput" 
                                    placeholder="Choose a destination"
                                    ref={destinationRef}
                                />
                            </div>
                            <button 
                                type="submit" 
                                class="btn btn-primary"
                                onClick={calculateRoute}
                            >
                                Submit
                            </button>
                        </form>
                        <p>{ distance }</p>
                        <div class="stats">
                            stats go here
                        </div>
                    </div>
                    <div className="right">
                        <div className="map"><Map /></div>
                    </div>
                </div>
            </div>
            {/* <div className="container">
                <h1>App Name</h1>
                <div className="body">
                    <div className="left">
                       
                        <input type="text" ref={originRef} name="from" placeholder="Choose a starting point"/>
                        <input type="text" ref={destinationRef} name="to" placeholder="Choose a destination"/>
                        <button onClick={calculateRoute}>Submit</button>
                        <p>{ distance }</p>
                        <div className="statsDisplay">
                            Info about saving 
                        </div>
                    </div>
                    <div className="right">
                        <div className="map"><Map /></div>
                    </div>
                </div>
            </div> */}
        </>
    );

};

export default Home;
