import React, { Component } from 'react';

import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';
import Result from './components/Result/Result';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Navbar/>
        <Header/>
        <Result/>
      </div>
    );
  }
}

export default App;
