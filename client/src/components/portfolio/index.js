import React, { Component } from "react";
import './portfolio.css';
import { Button } from 'react-bootstrap'
import ProjectHome from './projecthome.js'
import ProjectPage from './projectpage.js'
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
        this.portfolioChange = this.portfolioChange.bind(this)
    }

    portfolioChange(x) {
        if(x === "home") {
            this.setState({
                isHome: true
            })
        } else {
            let data = projects[x]
            this.setState({
                isHome: false,
                projectName: data.name,
                projectDesc: data.description,
                projectPicture: data.picture,
                projectDemo: data.demo,
                projectRepo: data.repo
            })
        }
    }

    render() {
        return( <div className="Portfolio">
        <div className="Project">
        {this.state.isHome ? <ProjectHome />
        : <ProjectPage name={this.state.projectName} description={this.state.projectDesc}
            picture={this.state.projectPicture} demo={this.state.projectDemo} repo={this.state.projectRepo} /> }
        </div>
        <div className="Sidebar">
        <Button onClick={() => this.portfolioChange("home")}>Portfolio Home</Button>
        <Button onClick={() => this.portfolioChange(0)}>Aestheticize</Button>
        <Button onClick={() => this.portfolioChange(1)}>Catch-All</Button>
        <Button onClick={() => this.portfolioChange(2)}>WiredIn</Button>
        <Button onClick={() => this.portfolioChange(3)}>NYT Scraper</Button>
        <Button onClick={() => this.portfolioChange(4)}>EatDaBurger!</Button>
        <Button onClick={() => this.portfolioChange(5)}>Friend Finder</Button>
        <Button onClick={() => this.portfolioChange(6)}>Bamazon</Button>
        <Button onClick={() => this.portfolioChange(7)}>LIRI</Button>
        </div>
        
        </div>
        
        
            )}
    }
  

  export default Portfolio;