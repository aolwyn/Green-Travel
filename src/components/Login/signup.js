import React, { useState } from "react";
import api from "../../api/api";
import { FetchState } from "../../api/hooks";


const SignUp = ({ setRegister, dispatch }) => {
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
  
    const handleSignup = async (e) => {
      e.preventDefault();
      dispatch({ type: FetchState.FETCH_INIT });
     
      try {
        const user = await api.createAccount(email, password, name);
        await api.createSession(email, password);
        dispatch({ type: FetchState.FETCH_SUCCESS, payload: user });
      } catch (e) {
        dispatch({ type: FetchState.FETCH_FAILURE });
      }
    };

    return(
        <>
            <h1> Sign Up </h1>

            <p> 
                {" "} Already have an account? {" "} 
                <button onClick={() => setRegister(false)}> Log In </button> 
                {" "}
            </p>

            <form id="signupForm" onSubmit={handleSignup}>
                <label> Name </label>
                <input type="text" name="name" autoComplete="name" onChange={(e) => setName(e.target.value)} />
                
                <label> Email </label>
                <input type="text" name="email" autoComplete="email" onChange={(e) => setEmail(e.target.value)} />
                
                <label> Password </label>
                <input type="password" name="password" autoComplete="password" onChange={(e) => setPassword(e.target.value)} />
                
                <button type="submit" form="signupForm" disabled={!name || !email || !password}> Sign Up </button>
            </form>
        </>
    );
};

export default SignUp;