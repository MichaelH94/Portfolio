import React, { Component } from "react";
import './portfolio.css';
import { Button } from 'react-bootstrap'
import ProjectHome from './projecthome.js'
import projects from "./projects.json"

class Portfolio extends Component {
    constructor() {
        super() 
        this.state = {
            projectName: "",
            projectDesc: "",
            projectPicture: "",
            projectDemo: "",
            projectRepo: "",
            isHome: true
        }
    }


    render() {
        return( <div className="Portfolio">
        <div className="Project">
        {this.state.isHome ? <ProjectHome />
        : ""}
        </div>
        <div className="Sidebar">
        <Button>Portfolio Home</Button>
        <Button>Aestheticize</Button>
        <Button>CatchAll</Button>
        <Button>Test Button</Button>
        </div>
        
        </div>
        
        
            )}
    }
  

  export default Portfolio;