import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "./header";
import Nav from "./nav";
import SEO from "./SEO";

function MainPage() {

    const navigate = useNavigate();

    const handleNavigate = (event) => {
        event.preventDefault();
        navigate("/projects");
    };

    return (
        <>
            <SEO
                title={"Archer's Portfolio."}
                description={"A Portfolio website for Ayo Otutuloro."}
                name={"Ayo Otutuloro."} />
            <Header />
            <Nav />
            <main>
                <div className="section-header">
                    <h2>About Me</h2>
                    <img src={require("../assets/Snapchat-headshot.jpg")} width="200" height="200" alt="Ayo" id="archer-headshot" />
                </div>
                <div className="section-content">
                    <p>Hi there! My name is Ayo Otutuloro, but some people call me Archer. I am a 23-year-old software engineer in training, with a focus on frontend engineering.
                        I am proficient with HTML, CSS, and JavaScript, mainly ReactJS. Links to my various socials are in the nav.
                    </p>
                </div>
                <div className="project">
                    <button onClick={handleNavigate} className="project-btn">Things I've Done.</button>
                </div>
            </main>
        </>
    )
}

export default MainPage;