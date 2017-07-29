import React, { Component } from 'react';
import Navbar from './navbar';
import SearchBar from './containers/searchbar';
import WeatherList from './containers/weatherlist';
import './App.css';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <div className="container">
          <h1 className="text-center">Weather Forecast</h1>
          <SearchBar />
          <WeatherList />
        </div>
      </div>
    );
  }
}
