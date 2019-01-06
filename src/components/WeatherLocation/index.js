import React,{ Component } from 'react';
import Location from './Location';
import WeatherData from './WeatherData';
import transformWeather from './../../services/transformWeather';
import { api_weather } from './../../constants/api_url';
import {
  SUN,
} from './../../constants/weathers';
import './style.css';



const data={
  temperature:25,
  weatherState:SUN,
  humidity:10,
  wind:'10 km/h',
}

class WeatherLocation extends Component{
constructor(){
    super();
    this.state = {
      city:'San José, CRC',
      data: data,
    };
}


handleUpdateClick= () => {
  fetch(api_weather).then(response=>{
    return response.json();
  }).then(data => {
    const newWeather = transformWeather(data);
    this.setState({
      data: newWeather
    });
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
