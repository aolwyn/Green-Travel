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
            <div className="container">
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
            </div>
        </>
    );

};

export default Home;
