import React, { useState, useRef, useEffect } from "react";
import './myStyles.css';
import { Autocomplete, GoogleMap, useJsApiLoader, DirectionsRenderer } from '@react-google-maps/api';
import Map from "./Map";
import axios from "axios";

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
const config = {
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

    const [origin, setOrigin] = useState('')
    const [destination, setDestination] = useState('')
    const [distance, setDistance] = useState('')
    const [duration, setDuration] = useState('')
    const [data, setData] = useState('')

    const handleOrigin = async (e) => {
        setOrigin(e.target.value)
    }

    const handleDestination = async (e) => {
        setDestination(e.target.value)
    }
    
    async function calculateRoute() {
        if (origin === '' || destination === '') {
            return
        }

        console.log(origin)
        console.log(destination)
        
        let url = encodeURI(`https://maps.googleapis.com/maps/api/directions/json?origin=${origin}&destination=${destination}&key=${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}`);
        config.url = url
        let data = await axios.get(config.url, config.headers)
        console.log(data)
        setData(data.data.routes)
        setDistance(data.data.routes[0].legs[0].distance.value)
        setDuration(data.data.routes[0].legs[0].duration.value)
        console.log(distance)
        console.log(duration)
    }
  
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
                        
                        
                        <Form.Group className="mb-4">
                            <Form.Control placeholder="Choose a starting point" onChange={handleOrigin}/>
                        </Form.Group>
                        <Form.Group className="mb-4">
                            <Form.Control placeholder="Choose a destination" onChange={handleDestination}/>
                        </Form.Group>
                        <Button className="btn btn-primary mb-4" onClick={calculateRoute}>Go!</Button>
                        

                        <div className="stats">
                            stats go here
                        </div> 

                    </div>

                    <div className="right">
                        <div className="mapMask"></div>
                        <div className="map"><Map /></div>
                    </div>

                </div>
            </div>

        </>
    );

};

export default Home;
