import React, { Component } from "react"
import { Button } from "react-bootstrap";
import './header-buttons.css';

class HeaderButtons extends Component {
    render() {
        return <div className="buttons-section">

            <Button>About</Button>
            <div className="dx"></div>
            <Button>Portfolio</Button>
            <div className="dx"></div>
            <Button>Blog</Button>
            
        </div>
    }
}

export default HeaderButtons;