import React from "react";

const Home = ({ user, dispatch }) => {

    return(
        <>
            <h1> Home </h1> 
            <h2> Hello {user.name} </h2>
        </>
    );

};

export default Home;