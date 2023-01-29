import React, { useState, useRef, useEffect } from "react";
import './myStyles.css';
import { Autocomplete, GoogleMap, useJsApiLoader, DirectionsRenderer } from '@react-google-maps/api';
import Map from "./Map";
import axios from "axios";
import api from "../api/api";
import { Server } from "../utils/config";
import { useGetData } from "../api/hooks";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { InputGroup } from "react-bootstrap";
import { ToastContainer, toast } from 'react-toastify';

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

    let routeIsCreated = useRef(false)

    const [origin, setOrigin] = useState('')
    const [destination, setDestination] = useState('')
    const [distance, setDistance] = useState('')
    const [duration, setDuration] = useState('')
    const [data, setData] = useState('')
    const [emissionAmount, setEmissionAmount] = useState('')
    const [travelMethod, setTravelMethod] = useState('')

    useEffect(() => {
        calculateEmissions();
    }, [travelMethod])

    const calculateEmissions = () => {
        if (routeIsCreated.current === true) {
            if (travelMethod == "WalkOrBike") {
                setEmissionAmount(0)
            } else if (travelMethod == "Car") {
                let waste = distance * 650 / 1000;
                setEmissionAmount(waste);
            } else if (travelMethod == "Bus") {
                let waste = distance * 90 / 1000
                setEmissionAmount(waste)
            } 
        }
    }

    const handleOrigin = async (e) => {
        setOrigin(e.target.value)
    }

    const handleDestination = async (e) => {
        setDestination(e.target.value)
    }
    
    async function calculateRoute() {

        if (origin === '' || destination === '') {
        toast.error('Select a valid route', {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
            return;
        } else if (travelMethod === '') {
            toast.error('Choose a method of tranportation', {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
            return;
        } 
        
        let url = encodeURI(`https://maps.googleapis.com/maps/api/directions/json?origin=${origin}&destination=${destination}&key=${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}`);
        config.url = url
        axios.get(config.url, config.headers)
        .then(
            (res) => {
                let data = res.data.routes[0].legs[0]
                let distance = data.distance.value
                let duration = data.duration.value
                if(data){ 
                    setData(res.data.routes)
                }
                if(distance){
                    setDistance(distance)
                }
                if(duration){
                    setDuration(duration)
                }
            }
        )
        routeIsCreated.current = true;
        calculateEmissions();
    }


    const renderStats = () =>  {
        if (routeIsCreated.current === true) {
            if (travelMethod === "WalkOrBike") {
                return (
                    <div className="stats">
                    This trip will produce <b>0</b> kg's of CO2. Congratulations!
                    </div> 
                )
            } else {
                return (
                    <div className="stats">
                    This trip will produce <b>{emissionAmount}</b> kg's of CO2
                    </div> 
                )
            }

        }  
    }

    return(
        <>
            <div className="container">
                <h1 className="title">Green Travel</h1>

                <div className="body">

                    <div className="left">
                        <ButtonGroup className="mb-4" aria-label="Basic example">
                            <Button variant="primary" onClick={() => {setTravelMethod("WalkOrBike")}}>
                                <i class="las la-walking"></i>
                            </Button>
                            <Button variant="primary" onClick={() => {setTravelMethod("Car")}}>Car</Button>
                            <Button variant="primary" onClick={() => {setTravelMethod("Bus")}}>Bus</Button>
                        </ButtonGroup>
                        
                        <Form.Group className="mb-4">
                            <Form.Control placeholder="Choose a starting point" onChange={handleOrigin}/>
                        </Form.Group>
                        <Form.Group className="mb-4">
                            <Form.Control placeholder="Choose a destination" onChange={handleDestination}/>
                        </Form.Group>
                        <Button className="btn btn-primary mb-4" onClick={calculateRoute}>Go!</Button>

                        {renderStats()}
                        {/* {(routeIsCreated.current) &&
                            <div className="stats">
                                This trip will have <b>{emissionAmount}</b> kg's of CO2
                            </div> 
                        } */}

                    </div>

                    <div className="right">
                        <div className="mapMask"></div>
                        <div className="map"><Map /></div>
                    </div>

                </div>

                <ToastContainer
                    position="bottom-right"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="dark"
                />
            </div>

        </>
    );

};

export default Home;
