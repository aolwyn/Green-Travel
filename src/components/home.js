import React, { useState, useRef, useEffect } from "react";
import './myStyles.css';
import { Autocomplete, GoogleMap, useJsApiLoader, DirectionsRenderer } from '@react-google-maps/api';
import Map from "./Map";
import axios from "axios";

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
        
        let url = encodeURI(`https://maps.googleapis.com/maps/api/directions/json?origin=${origin}&destination=${destination}&key=${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}`);
        config.url = url
        let data = await axios.get(config.url, config.headers)

        setData(data.data.routes)
        setDistance(data.data.routes[0].legs[0].distance.value)
        setDuration(data.data.routes[0].legs[0].duration.value)
    }
  
    return(
        <>
            <div className="container">
                <h1>App Name</h1>
                <div className="body">
                    <div className="left">
                        <input type="text" onChange={handleOrigin} name="from" placeholder="Choose a starting point"/>
                        <input type="text" onChange={handleDestination} name="to" placeholder="Choose a destination"/>
                        <button onClick={calculateRoute}>Submit</button>
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
