import React, { Component } from "react";
import ghlogo from './github.png';
import lilogo from './linkedin.png';
import mail from './mail.png';
import './footer.css';


class Footer extends Component {
    render() {
        return (
            <div className="appFooter">
              <div className="footerIcons">

               <img src={mail} alt="Contact" />

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