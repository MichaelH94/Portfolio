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
            projectLang: "",
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
                projectRepo: data.repo,
                projectLang: data.lang
            })
        }
    }
    
    render() {
        return( <div className="Portfolio">
        <div className="Project">
        {this.state.isHome ? <ProjectHome />
        : <ProjectPage name={this.state.projectName} description={this.state.projectDesc}
            picture={this.state.projectPicture} demo={this.state.projectDemo} repo={this.state.projectRepo} lang={this.state.projectLang} /> }
        </div>
        <div className="Sidebar">
        <Button type="home" onClick={() => this.portfolioChange("home")}>Portfolio Home</Button>
        <Button type="j" onClick={() => this.portfolioChange(12)}>MikeHub</Button>
        <Button type="js" onClick={() => this.portfolioChange(0)}>Aestheticize</Button>
        <Button type="js" onClick={() => this.portfolioChange(11)}>zxcvBot</Button> 
        <Button type="js" onClick={() => this.portfolioChange(1)}>Catch-All</Button>
        <Button type="js" onClick={() => this.portfolioChange(2)}>WiredIn</Button>
        <Button type="js" onClick={() => this.portfolioChange(3)}>NYT Scraper</Button>
        <Button type="js" onClick={() => this.portfolioChange(4)}>EatDaBurger!</Button>
        <Button type="js" onClick={() => this.portfolioChange(5)}>Friend Finder</Button>
        <Button type="js" onClick={() => this.portfolioChange(6)}>Bamazon</Button>
        <Button type="js" onClick={() => this.portfolioChange(7)}>LIRI</Button>
        <Button type="j" onClick={() => this.portfolioChange(8)}>Connect 3</Button>
        <Button type="j" onClick={() => this.portfolioChange(9)}>Basic Phrases</Button>
        <Button type="j" onClick={() => this.portfolioChange(10)}>Times Table</Button>
        <Button type="j" onClick={() => this.portfolioChange(13)}>Brain Tester</Button>
        </div>
        
        </div>
        
        
            )}
    }
  

  export default Portfolio;