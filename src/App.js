import React from 'react';
import './App.css';
import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom"
import LogIn from './components/Login/login'
import Home from "./components/home"
import { useGetUser } from "./api/hooks";
import Login from './components/Login/login';
function App() {
  const [{ user, isLoading, isError }, dispatch] = useGetUser();
  const Test = () => {
    console.log(process.env.REACT_APP_ENDPOINT)
  }
  return (
   <>
    <BrowserRouter>
      {/* <button onClick={Test}> Test </button> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/login' element={<LogIn dispatch={dispatch}/> } /> 
      </Routes>
    </BrowserRouter>
   </>
  );
}

export default App;
