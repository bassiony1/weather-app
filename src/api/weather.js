import axios from "axios";

const getWeather = async (latitude, longitude, settings) => {
  let params = {
    latitude,
    longitude,
    daily: "temperature_2m_max,temperature_2m_min,weather_code",
    hourly: "temperature_2m,weather_code",
    current:
      "temperature_2m,relative_humidity_2m,precipitation,weather_code,wind_speed_10m,apparent_temperature",
    timezone: "auto",
  };
  if (settings === "imperial") {
    params = {
      ...params,
      wind_speed_unit: "mph",
      temperature_unit: "fahrenheit",
      precipitation_unit: "inch",
    };
  }
  let respone = await axios.get("https://api.open-meteo.com/v1/forecast", {
    params,
  });
  return respone.data;
};

export default getWeather;

// https://api.open-meteo.com/v1/forecast?latitude=27&longitude=30&daily=temperature_2m_max,temperature_2m_min,weather_code&hourly=temperature_2m,weather_code&current=temperature_2m,relative_humidity_2m,precipitation,weather_code,wind_speed_10m,apparent_temperature&timezone=auto&
