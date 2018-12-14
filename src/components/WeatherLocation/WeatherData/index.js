import React from 'react';
import PropTypes from 'prop-types'
import WeatherExtraInfo from './WeatherExtraInfo';
import WeatherTemperature from './WeatherTemperature';


import './style.css';


  const WeatherData = ({data: {temperature, weatherState, humidity, wind}}) => (

      <div className="wd-cont">
        <WeatherTemperature temperature={temperature} weatherState={weatherState}/>
        <WeatherExtraInfo humidity={humidity} wind={wind}/>
      </div>
  );

WeatherData.protoType = {
  data: PropTypes.shape({
    temperature: PropTypes.number.isRequired,
    weatherState: PropTypes.string.isRequired,
    humidity: PropTypes.number.isRequired,
    wind: PropTypes.string.isRequired,
  }),
};
export default WeatherData;
