import React, { Component } from 'react';
import Header from './components/header';
import Footer from './components/footer';
import About from './components/about';
import Blog from './components/blog';
import Portfolio from './components/portfolio';
import "./App.css";

class App extends Component {

  constructor() {
    super()
    this.state = {
      redirectPath: "about"
    }

    this.routeChange = this.routeChange.bind(this)

  }

  routeChange(x) {
    this.setState({
      redirectPath: x
    })
  }


  render() {
    return (
      <div className="App">
      <div className="App-header">
      <Header routeChange={this.routeChange} />
      </div>

      <div className="main">
      {this.state.redirectPath == "about" ? <About />  
      : this.state.redirectPath == "blog" ? <Blog />
      : this.state.redirectPath == "portfolio" ? <Portfolio /> : "" }

      </div>
 
      <Footer />
      </div>
    );
  }
}

export default App;
