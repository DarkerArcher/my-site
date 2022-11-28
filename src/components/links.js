import React from 'react';
import GetHome from './home';
import SEO from './SEO';

function ProjectLinks() {
    return (
        <>
            <SEO
                title={"Archer's Projects."}
                description={"A list of projects built by Ayo Otutuloro."}
                name={"Ayo Otutuloro."} />
            <main>
                <div className="header">
                    <h1>
                        PROJECTS
                    </h1>
                </div>
                <div className="section-content">
                    <p>
                        Here are links to some projects that I built. The source code for all of these projects are in my <a href='https://github.com/DarkerArcher' target="_blank" rel="noreferrer">GitHub profile</a>.
                    </p>
                </div>
                <div className='home-btn'>
                    <GetHome />
                </div>
                <div className="project-list">
                    <a href="https://darkerarcher.github.io/Rock-Paper-Scissors/" target="_blank" rel="noreferrer">
                        Rock Paper Scissors
                    </a>
                    <a href='https://archers-altschool-pagination.netlify.app/' target="_blank" rel="noreferrer">
                        Simple Pagination
                    </a>
                    <a href='https://archers-calculator.netlify.app/' target="_blank" rel="noreferrer">
                        A Calculator App
                    </a>
                    <a href='https://darkerarcher.github.io/intro-component-with-signup-form-master/' target="_blank" rel="noreferrer">
                        A Signup component with simple authentication
                    </a>
                </div>
            </main >
        </>
    )
}

export default ProjectLinks