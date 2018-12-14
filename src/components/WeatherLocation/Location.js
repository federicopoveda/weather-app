import React from 'react';
import './style.css';

const Location = (props) => {
  //destructuring
  //Tambien puese hacerse dentro de los primeros parentesis
  //cuando se envia los parametros.

  const {city} = props;

  return (
    <div className="loc-cont">
      <h1>{city}</h1>
    </div>);
};

export default Location;
