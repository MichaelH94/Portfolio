import React, { Component } from "react";
import './projectpage.css';
import github from '../footer/github.png'

class ProjectPage extends Component {
  
    render() {
        let name = this.props.name;
        let desc = this.props.description;
        let pic = this.props.picture;
        let demo = this.props.demo;
        let repo = this.props.repo;

        return ( 
            <div className="Project">
            <div className="Project-img">
            <img src={pic} alt="Project Picture" />
            </div>
            <div className="Project-top">
                <div className="Name">{name} <a href={repo} className="ghicon"><img src={github} alt="Github"/></a></div>
                <div className="Project-subheaders"> 
                {demo ? <a href={demo}>Demo</a> : "Demo unavailable"} 
                <a href={repo} className="ghlink">Github</a></div>
            </div>
            <div className="Project-words">
            <p>
            {desc}
            </p>
            </div>

        </div>
        )}
}

export default ProjectPage;