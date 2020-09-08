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
                Austin Area </div>
            </div>

            <div className="About-words">
            <p>
            I'm a 26 year old independent programmer currently based out of Killeen, Texas. 
            I have countless hours of independent study, an Associate's in Computer Science 
            from Northern Oklahoma College, 
            and have been through a rigorous Full Stack Web Development Bootcamp at the University of Kansas. 
            As a developer, I'm driven by challenge over everything.
            I believe in pushing my coding skills to the limit to achieve the results I need, and to never stop learning new ideas.
            I have experience in a variety of languages and applications - from business to video games, though I consider myself primarily a web and app developer.
            Right now, I'm mostly focused on JavaScript and Java (specifically Android development) but hope to expand my language portfolio greatly in the future.
            </p>
            <br />
            <p>
            In my personal life, I'm the proud father of four wonderful children - three sons (two of which are twins!) and a daughter. 
            Most of my free time is spent with my children (when they're around), but my other hobbies include a passionate 
            love for music, creative writing, an enjoyment of history, 
            cartography and worldbuilding, and, as standard among programmers, I enjoy video games. 
            I've gone through a lot of changes in the last year, but I'm constantly growing and becoming a better man.<br />
            
            </p>
            </div>

            <div className="About-bottom">
            <img src={img2} alt="Oldest Son & Daughter" />
            <img src={img1} alt="All 3 Boys in the Pool" />
            <img src={img3} alt="All 4 Children" />
            </div>
            
        </div>
    }
}

export default About;