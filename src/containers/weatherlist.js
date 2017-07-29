import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';
import GoogleMap from '../components/googlemap';

class WeatherList extends Component {
  renderWeather(cityData) {
    const name = cityData.city.name;
    const temps = cityData.list.map(weather => weather.main.temp);
    const pressures = cityData.list.map(weather => weather.main.pressure);
    const humidities = cityData.list.map(weather => weather.main.humidity);
    const { lon, lat } = cityData.city.coord;

    return (
      <tr key={name}>
        <td><GoogleMap lat={lat} lon={lon}/></td>
        <td>
          <Chart data={temps} color='orange' units='K' />
        </td>
        <td>
          <Chart data={pressures} color='blue' units='hPa' />
        </td>
        <td>
          <Chart data={humidities} color='grey' units='%' />
        </td>
      </tr>
    );
  }
  render() {
    return (
      <table className="WeatherList table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature (K)</th>
            <th>Pressure (hPa)</th>
            <th>Humidity (%)</th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    );
  }
}

function mapStateToProps({weather}) {
  return { weather }; // equals weather: weather
}

export default connect(mapStateToProps)(WeatherList)
