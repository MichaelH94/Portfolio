import React, { Component } from "react";
import ghlogo from './github.png';
import lilogo from './linkedin.png';
import mail from './mail.png';
import './footer.css';


class Footer extends Component {

    constructor() {
        super() 
        this.contactHandle = this.contactHandle.bind(this)
    }

    contactHandle(x) {
        this.props.routeChange(x);
    }

    render() {
        return (
            <div className="appFooter">
              <div className="footerIcons">

               <img src={mail} alt="Contact" onClick={() => this.contactHandle("contact")} />

               <div className="dx"></div>

               <a href="https://github.com/michaelh94/">
               <img src={ghlogo} alt="Github" />
               </a>

               <div className="dx"></div>
               <a href="https://www.linkedin.com/in/michaelhaggard94/">
               <img src={lilogo} alt="LinkedIn" />
               </a>
               </div>
               © Michael Haggard 2019
            </div>
        )
    }
}

export default Footer;