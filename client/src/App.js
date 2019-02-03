import React, { Component } from 'react';
import Header from './components/header'
import Footer from './components/footer'
import About from './components/about'
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
      <div className="App-header">
      <Header />
      </div>
      <div className="main">
      <About />
      </div>
 
      <Footer />
      </div>
    );
  }
}

export default App;
