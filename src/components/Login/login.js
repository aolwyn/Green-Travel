import React from "react";
import { useState } from "react";
import api from "../../api/api";
import SignUp from "./signup";
import { FetchState } from "../../api/hooks";


const Login = ({ dispatch }) => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [register, setRegister] = useState(false);
    
    const handleLogin = async (e) => {
        e.preventDefault();
        dispatch({ type: FetchState.FETCH_INIT });
        try {
          await api.createSession(email, password);
          const data = await api.getAccount();
          dispatch({ type: FetchState.FETCH_SUCCESS, payload: data });
        } catch (e) {
          dispatch({ type: FetchState.FETCH_FAILURE });
        }
    };

    return register ? ( <SignUp setRegister={setRegister} dispatch={dispatch} /> ) : (
        <>
            <h1>Login</h1>
            <p>
                {" "}
                Don't have an account ?{" "}
                <button onClick={() => setRegister(true)}>
                    Sign Up
                </button>{" "}
            </p>
            <form onSubmit={handleLogin}>
            <label> Email </label>
            <input type="text" onChange={(e) => setEmail(e.target.value)} name="email" autoComplete="email"></input>
            <input type="password" onChange={(e) => setPassword(e.target.value)} name="password" autoComplete="password"></input>
            <button type="submit" disabled={!email || !password}> Login </button>
            </form>
        </>
    );

};

export default Login;