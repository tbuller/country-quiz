import './App.css';
import React from 'react';
import { useEffect, useState, useRef } from 'react';

function App() {

  const [countriesData, setCountriesData] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then(response => response.json())
      .then(data => setCountriesData(data))  
  }, [])

  const showCountries = () => {
    console.log(countriesData[0].flag);
  }

  return (
    <div className="game-container">
    <div className="half-container">
    <div className="flag-container-left" onClick={showCountries}>
    <img src={countriesData[0].flags.png}></img>
    </div>
    </div>
    <div className="half-container">
    <div className="flag-container-right">

    </div>
    </div>
    </div>
  );
}

export default App;
