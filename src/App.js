import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import SearchBox from './components/Searchbox/SearchBox';
import Result from './components/Result/Result';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Navbar/>
        <Header/>
        <SearchBox/>
        <Result/>
      </div>
    );
  }
}

export default App;
