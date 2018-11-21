import React from 'react';

const Location = (props) => {
  //destructuring
  //Tambien puese hacerse dentro de los primeros parentesis
  //cuando se envia los parametros.

  const {city} = props;

  return (<div><h1>{city}</h1></div>);
};

export default Location;
