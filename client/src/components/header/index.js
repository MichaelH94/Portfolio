import React, { Component } from "react";
import { Container, Jumbotron } from 'react-bootstrap';
import './header.css';
import HeaderButtons from '../header-buttons'

class Header extends Component {
    constructor() {
        super()
        this.buttonHandle = this.buttonHandle.bind(this)
    }


    buttonHandle(x) {
        this.props.routeChange(x)
    }

render() {

    return <div>
       <nav className="Nav">
          <div className="Nav-menus">
              <div className="Nav-brand">
                <a className="Nav-brand-logo" href="/">
                    Portfolio
                  </a>
              </div>
              <HeaderButtons buttonHandle = {this.buttonHandle} />
          </div>
      </nav>
  </div>
    }
}

export default Header;