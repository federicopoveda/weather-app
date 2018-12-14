import React from 'react';

  const WeatherExtraInfo = ({humidity,wind}) => (
    <div className="wExInf-cont">
    <span className="exInfo-text">{`Humedad: ${humidity} % -`}</span>
    <span className="exInfo-text">{`Viento: ${wind} `}</span>
    </div>
  );

export default WeatherExtraInfo;
