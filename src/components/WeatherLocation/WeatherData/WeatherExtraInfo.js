import React from 'react';

  const WeatherExtraInfo = ({humidity,wind}) => (
    <div className="wExInf-cont">
    <span>{`${humidity} % -`}</span>
    <span>{` ${wind} viento`}</span>
    </div>
  );

export default WeatherExtraInfo;
