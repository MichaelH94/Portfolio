import React, { Component } from "react";
import './about.css';
import avatar from "./avatar.jpg"
import img1 from './img1.jpg'
import img2 from './img2.jpg'
import img3 from './img3.jpg'

class About extends Component {
    render() {
        return <div className="About">
            <div className="About-avi">
            <img src={avatar} alt="Avatar" />
            </div>
            <div className="About-top">
                <div className="Name">Michael Haggard </div>
                <div className="About-subheaders"> 
                Full Stack Web Developer <br />
                Kansas City Area </div>
            </div>
            <div className="About-words">
            <p>
            I'm a 24 year old independent programmer based out of Kansas. 
            I have countless hours of independent study, an Associate's in Computer Science 
            from Northern Oklahoma College, 
            and have been through a rigorous Coding Bootcamp at the University of Kansas. 
            As a developer, I'm driven by challenge over everything. 
            I value hard work and constant learning over everything else. I believe in pushing my coding skills to the limit to achieve the results I need. 
            I'm primarily a web developer, but I have experience in a variety of languages and applications - from business to video games.
            </p>
            <br />
            <p>
            In my personal life, I'm the proud father of four wonderful children - three sons (two of which are twins!) and a daughter. 
            I'm also married to a beautiful woman and enjoying my life in small-town America. 
            Most of my free time is spent with my children, but my other hobbies include a passionate 
            love for music, creative writing, an enjoyment of history, 
            cartography and worldbuilding, and, as standard among programmers, I enjoy video games.
            </p>
            </div>
            <div className="About-bottom">
            <img src={img2} alt="Image" />
            <img src={img1} alt="Image" />
            <img src={img3} alt="Image" />
            </div>
        </div>
    }
}

export default About;