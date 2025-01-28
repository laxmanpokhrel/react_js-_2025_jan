import { createContext, useEffect, useState } from 'react';

export const WeatherContext = createContext();

const apiData = async () => {
  const response = await fetch(
    'https://api.sunrisesunset.io/json?lat=38.907192&lng=-77.036873'
  );
  const loadedResults = await response.json();
  return loadedResults.results;
};

export const WeatherContextProvider = ({ children }) => {
  const [weatherInfo, setWeatherInfo] = useState(null);

  useEffect(() => {
    (async () => {
      const responseData = await apiData();
      setWeatherInfo(responseData);
    })();
  }, []);

  return (
    <WeatherContext.Provider value={{ weatherInfo }}>
      {children}
    </WeatherContext.Provider>
  );
};
