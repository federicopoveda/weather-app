import React from 'react';
import WeatherExtraInfo from './WeatherExtraInfo';
import WeatherTemperature from './WeatherTemperature';
import {
  SUN,
} from './../../../constants/weathers';
import './style.css';


  const WeatherData = () => (
    <div ClassName="wd-cont">
      <WeatherTemperature temperature={20} weatherState={SUN}></WeatherTemperature>
      <WeatherExtraInfo humidity={75} wind={' 20 m/h'}></WeatherExtraInfo>
    </div>
  );


export default WeatherData;
