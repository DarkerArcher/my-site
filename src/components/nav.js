import React from "react";

function Nav() {
    return (
        <nav className="topnav">
        <ul>
            <a href="https://twitter.com/DarkerArcher" target="_blank" rel="noreferrer">
                <li>
                    <img src={require("../assets/icons8-twitter-48.png")} alt="Twitter Icon" />
                </li>
            </a>
            <a href="https://www.instagram.com/darkerarcher/?hl=en" target="_blank" rel="noreferrer">
                <li>
                    <img src={require("../assets/icons8-instagram-48.png")} alt="Instagram Icon" />
                </li>
            </a>
            <a href="https://github.com/DarkerArcher" target="_blank" rel="noreferrer">
                <li>
                    <img src={require("../assets/icons8-github-48.png")} alt="GitHub Icon" />
                </li>
            </a>
            <a href="https://darkerarcher.medium.com/" target="_blank" rel="noreferrer">
                <li>
                    <img src={require("../assets/icons8-medium-48.png")} alt="Medium Icon" />
                </li>
            </a>
        </ul>
    </nav>
    )
}

export default Nav