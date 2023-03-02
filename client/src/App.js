import './App.css';
import React from 'react';
import { useEffect, useState, useRef } from 'react';

function App() {

  const [countriesData, setCountriesData] = useState([]);
  const [featuredCountryOne, setFeaturedCountryOne] = useState(0);
  const [featuredCountryTwo, setFeaturedCountryTwo] = useState(0);

  useEffect(() => {
    setFeaturedCountryOne(Math.floor(Math.random() * Math.floor(250)));
    setFeaturedCountryTwo(Math.floor(Math.random() * Math.floor(250)));
    fetch("https://restcountries.com/v3.1/all")
      .then(response => response.json())
      .then(data => setCountriesData(data))  
  }, [])

  const showCountries = () => {
    console.log(countriesData[0].flag);
  }

  const handleFeaturedCountryOne = () => {
    setFeaturedCountryOne(Math.floor(Math.random() * Math.floor(250)));
  }

  const handleFeaturedCountryTwo = () => {
    setFeaturedCountryTwo(Math.floor(Math.random() * Math.floor(250)));
  }

  if (countriesData.length > 0) {
    return (
    <div className="game-container">
    <div className="half-container" onClick={handleFeaturedCountryOne}>
    <div className="info-container">
    <h1 className="country-name">{countriesData[featuredCountryOne].name.common}</h1>
    <div className="capital-city">{countriesData[featuredCountryOne].capital}</div>
    <div className="population">{countriesData[featuredCountryOne].population}</div>
    <div className="flag-container-left" onClick={showCountries}>
    <img src={countriesData[featuredCountryOne].flags.png}></img>
    </div>
    </div>
    </div>
    <div className="half-container" onClick={handleFeaturedCountryTwo}>
    <div className="info-container">
    <h1 className="country-name">{countriesData[featuredCountryTwo].name.common}</h1>
    <div className="capital-city">{countriesData[featuredCountryTwo].capital}</div>
    <div className="population">{countriesData[featuredCountryTwo].population}</div>
    <div className="flag-container-right">
    <img src={countriesData[featuredCountryTwo].flags.png}></img>  
    </div>
    </div>
    </div>
    </div>
    )
  } else {
    return (
      <div className="page-loading-container">
      <div>Page loading</div>
      </div>
    )
  }
    
 
}

export default App;
