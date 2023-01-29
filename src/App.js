import React from 'react';
import './App.css';
import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom"
import Home from "./components/home"
import { useGetUser } from "./api/hooks";
import Login from './components/Login/login';
import Map from './components/Map';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import './line-awesome/1.3.0/css/line-awesome.min.css'

function App() {
  const [{ user, isLoading, isError }, dispatch] = useGetUser();
  return (
   <>
    <BrowserRouter>
      <Routes>        
        <Route path="/" element={user ? <Home user={user} dispatch={dispatch} /> : <Navigate to="/login" replace />} />
        <Route path='/login' element={user ? <Navigate to="/" replace /> : <Login dispatch={dispatch} /> } /> 
      </Routes>
    </BrowserRouter>
   </>
  );
}

export default App;
