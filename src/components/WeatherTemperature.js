import React from 'react';
import WeatherIcons from 'react-weathericons';
import {
  SUN,
  CLOUD,
} from './../constants/weathers';
import PropTypes from 'prop-types';


const icons ={
  sun:"day-sunny",
  cloudy:"cloudy",
};

const getWeatherIcon = weatherState =>{
  const icon = icons[weatherState];

  if (icon)
    return <WeatherIcons name={icon} size="2x"></WeatherIcons>;
  else
    return <WeatherIcons name={CLOUD} size="2x"></WeatherIcons>;
};

const WeatherTemperature = ({temperature, weatherState}) => (

  <div>
    {
      getWeatherIcon(weatherState)
    }
    <span>{` ${temperature} C°`}</span>
  </div>
);

WeatherTemperature.protoTypes = {
  temperature: PropTypes.number,
  weatherState: PropTypes.string.isRequired,
};
export default WeatherTemperature;
