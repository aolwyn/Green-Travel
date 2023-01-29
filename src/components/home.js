import React, { useState, useRef, useEffect } from "react";
import './myStyles.css';
import { Autocomplete, GoogleMap, useJsApiLoader, DirectionsRenderer } from '@react-google-maps/api';
import Map from "./Map";
import axios from "axios";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

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

                <h1 className="title">Green Travel</h1>

                <div className="body">

                    <div className="left">

                        <ButtonGroup className="mb-4" aria-label="Basic example">
                            <Button variant="primary">W/B</Button>
                            <Button variant="primary">Car</Button>
                            <Button variant="primary">Bus</Button>
                        </ButtonGroup>
                        
                        <form onSubmit={calculateRoute}>
                            <Form.Group className="mb-4">
                                <Form.Control placeholder="Choose a starting point"/>
                            </Form.Group>
                            <Form.Group className="mb-4">
                                <Form.Control placeholder="Choose a destination"/>
                            </Form.Group>
                            <Button className="btn btn-primary mb-4" type="submit">Go!</Button>
                        </form>

                        <div className="stats">
                            stats go here
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
