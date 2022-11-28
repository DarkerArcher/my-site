import React from "react";
import { Link, useNavigate } from "react-router-dom";


function GetHome() {

    const navigatehome = useNavigate();

    const handleNavigateHome = (event) => {
        event.preventDefault();
        navigatehome("/");
    };

    return (
        <div className="nav">
            <Link onClick={handleNavigateHome} className="home-btn"><img src={require("../assets/icons8-home-48.png")} alt="Home Button"></img> </Link>
        </div>
    )
}

export default GetHome;