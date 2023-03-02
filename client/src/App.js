import './App.css';
import React from 'react';
import { useEffect, useState, useRef } from 'react';

function App() {

  const [countriesData, setCountriesData] = useState([]);
  const [featuredCountryOne, setFeaturedCountryOne] = useState(0);
  const [featuredCountryTwo, setFeaturedCountryTwo] = useState(0);
  const [gameover, setGameover] = useState(false);
  const [streak, setStreak] = useState(0);

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
    if (countriesData[featuredCountryTwo].population > countriesData[featuredCountryOne].population) {
      setGameover(true);
    }
    setStreak(streak + 1);
    if (Math.random() < 0.5) {
      setFeaturedCountryOne(Math.floor(Math.random() * Math.floor(250)));
    } else {
      setFeaturedCountryTwo(Math.floor(Math.random() * Math.floor(250)));
    }
  }

  const handleFeaturedCountryTwo = () => {
    if (countriesData[featuredCountryOne].population > countriesData[featuredCountryTwo].population) {
      setGameover(true);
    }
    setStreak(streak + 1);
    if (Math.random() < 0.5) {
      setFeaturedCountryOne(Math.floor(Math.random() * Math.floor(250)));
    } else {
      setFeaturedCountryTwo(Math.floor(Math.random() * Math.floor(250)));
    }
  }

  if (gameover) {
    return (
      <div>Game over</div>
    )
  }
  else if (countriesData.length > 0) {
    return (
    <div className="game-container">
    <div className="half-container" onClick={handleFeaturedCountryOne}>
    <div className="info-container">
    <h1 className="country-name-left">{countriesData[featuredCountryOne].name.common}</h1>
    <div className="capital-city-left">Capital: {countriesData[featuredCountryOne].capital}</div>
    <div className="population">{countriesData[featuredCountryOne].population}</div>
    <div className="land-area">{countriesData[featuredCountryOne].area} km²</div>
    <div className="flag-container-left" onClick={showCountries}>
    <img src={countriesData[featuredCountryOne].flags.png} className="flag"></img>
    </div>
    </div>
    </div>
    <div className="streak">{streak}</div>
    <div className="half-container" onClick={handleFeaturedCountryTwo}>
    <div className="info-container">
    <h1 className="country-name-right">{countriesData[featuredCountryTwo].name.common}</h1>
    <div className="capital-city-right">Capital: {countriesData[featuredCountryTwo].capital}</div>
    <div className="population">{countriesData[featuredCountryTwo].population}</div>
    <div className="land-area">{countriesData[featuredCountryTwo].area} km²</div>
    <div className="flag-container-right">
    <img src={countriesData[featuredCountryTwo].flags.png} className="flag"></img>  
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
