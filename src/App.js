import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import SearchBox from './components/Searchbox/SearchBox';
import Result from './components/Result/Result';

const nameGenerator = require('@rstacruz/startup-name-generator');

class App extends Component {

  constructor() {
    super() ;
      this.state = {
        suggestedNames : []
      }
  }

  handleChange = (inputText) => {
    this.setState({
      suggestedNames: inputText ? nameGenerator(inputText) : []
    })
    
  }
  
  render() {
    return (
      <div className="container">
        <Navbar/>
        <Header/>
        <SearchBox onInputChange = {this.handleChange}/>
        <Result suggestedNames = {this.state.suggestedNames}/>
      </div>
    );
  }
}

export default App;
