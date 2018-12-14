import React,{ Component } from 'react';
import Location from './Location';
import WeatherData from './WeatherData';
import {
  SUN,
  WINDY,
} from './../../constants/weathers';
import './style.css';

const data={
  temperature:25,
  weatherState:SUN,
  humidity:10,
  wind:'10 km/h',
}

const data2={
  temperature:15,
  weatherState:WINDY,
  humidity:20,
  wind:'30 km/h',
}

class WeatherLocation extends Component{
constructor(){
    super();
    this.state = {
      city:'San José (SJO)',
      data: data,
    };
}

handleUpdateClick= () => {
  console.log("Actualizando ...");
  this.setState({
    // city:'Panamá (PTY)',
    data:data2,
  });
}

render(){
  const {city, data} = this.state;
  return(
    <div className="wLoc-cont">
        <Location city={city}></Location>
        <WeatherData data={data}></WeatherData>
        <button onClick={this.handleUpdateClick}>Actualizar</button>
    </div>
  );
}
}

export default WeatherLocation;
