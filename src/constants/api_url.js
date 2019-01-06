const location = "San José,cr";
const api_key = "689f79191fbb4adb04b7793568ebd296";
const url_base_weather = "http://api.openweathermap.org/data/2.5/weather";
//URL completa, utilizando las variables anteriores
export const api_weather= `${url_base_weather}?q=${location}&appid=${api_key}`;
