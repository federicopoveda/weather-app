import React from 'react';
import WeatherExtraInfo from './WeatherExtraInfo';
import WeatherTemperature from './WeatherTemperature';
import {
  SUN,
  CLOUD,
} from './../../../constants/weathers';


  const WeatherData = () => (
    <div>
      <WeatherTemperature temperature={20} weatherState={SUN}></WeatherTemperature>
      <WeatherExtraInfo humidity={75} wind={' 20 m/h'}></WeatherExtraInfo>
    </div>
  );


export default WeatherData;
