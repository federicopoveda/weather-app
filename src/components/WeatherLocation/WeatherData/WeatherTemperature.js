import React from 'react';
import WeatherIcons from 'react-weathericons';
import {
  SUN,
  CLOUD,
} from './../../../constants/weathers';
import PropTypes from 'prop-types';

const icons = {
  [SUN]:"day-sunny",
  [CLOUD]:"cloud",
};

const getWeatherIcon = weatherState =>{
  const sizeIcon= "4x";
  const icon = icons[weatherState];

  if (icon)
    return <WeatherIcons className="wicon" name={icon} size={sizeIcon}></WeatherIcons>;
  else
    return <WeatherIcons className="wicon" name={CLOUD} size={sizeIcon}></WeatherIcons>;
};

const WeatherTemperature = ({temperature, weatherState}) => (

  <div className="wt-cont">
    {
      getWeatherIcon(weatherState)
    }
    <span className="temperature">{` ${temperature} `}</span>
    <span className="temperatureType">{`C°`}</span>
  </div>
);

WeatherTemperature.protoTypes = {
  temperature: PropTypes.number,
  weatherState: PropTypes.string.isRequired,
};
export default WeatherTemperature;
