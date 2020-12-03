import React, { useState } from "react";

import "./App.css";
const API_KEY = "a1eaf28583d42c2f30fbfef8a6cd4b99";
const baseURL = "https://api.openweathermap.org/data/2.5/";
function App() {
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState({});
  const Dates = new Date().toLocaleDateString();
  const search = async (evt) => {
    if (evt.key === "Enter") {
      fetch(`${baseURL}weather?q=${query}&units=metric&appid=${API_KEY}`)
        .then((res) => res.json())
        .then((result) => {
          setWeather(result);
          setQuery("");
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  return (
    <div
      className={
        typeof weather.main != "undefined"? weather.main.temp > 12 ? "sunny" : "cloud" : "cloud"
      }
     >
      <header className="App-header mx-5">
        <h1 className="text-white logo pt-3">React Weather App</h1>
        <div className="form-fild">
        <input
          className="form-controls shadow"
          placeholder="Search...."
          aria-label="Search"
          type="search"
          onChange={(e) => setQuery(e.target.value)}
          onKeyPress={search}
          value={query}
        />
        </div>
      </header>
      {typeof weather.main != "undefined" ? (
        <div className="shadow-lg p-3 mb-5 rounded" style={{display:"inline-block"}}>
          <div className="location-box">
            <div className="location">
              <h6 className="text-white mt-4 country">
                {weather.name}, {weather.sys.country}
              </h6>
            </div>
            <p className="date mt-1 mb-3">{Dates}</p>
          </div>
          <div className="weather-box">
            <div className="temp text-white">
              <b className="temp-value">{Math.round(weather.main.temp)}°c</b>
            </div>
            <div className="weather text-dark">{weather.weather[0].main}</div>
          </div>
        </div>
      ) : ("")}
      <footer style={{position:"absolute",bottom:"0px" ,left:"10px"}}>
       <h6 style={{color:"black"}}> <b>☣ copyright &copy; 2021 || created by <span style={{fontSize:"18px"}}>Mr.Guddu !😎</span></b></h6>
      </footer>
    </div>
  );
}

export default App;
