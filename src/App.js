import React, { useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import SearchBox from './components/Searchbox/SearchBox';
import Result from './components/Result/Result';

const nameGenerator = require('@rstacruz/startup-name-generator');

function App() {

  const [suggestedNames, setSuggestedNames] = useState([]);

  const handleChange = (inputText) => {
    setSuggestedNames(inputText ? nameGenerator(inputText) : [])
  }

  return (
    <div className="container">
      <Navbar/>
      <Header/>
      <SearchBox onInputChange = {handleChange}/>
      <Result suggestedNames = {suggestedNames}/>
    </div>
  );
}

export default App;
