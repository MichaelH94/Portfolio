import React, { Component } from "react"
import { Button } from "react-bootstrap";
import './header-buttons.css';

class HeaderButtons extends Component {

    constructor() {
        super()
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(x) {
        this.props.buttonHandle(x)
    }


    render() {
        return <div className="buttons-section">

            <Button onClick={() => this.handleClick("about")}>About</Button>
            <div className="dx"></div>
            <Button onClick={() => this.handleClick("portfolio")}>Portfolio</Button>
            <div className="dx"></div>
            <Button onClick={() => this.handleClick("blog")}>Blog</Button>
            
        </div>
    }
}

export default HeaderButtons;