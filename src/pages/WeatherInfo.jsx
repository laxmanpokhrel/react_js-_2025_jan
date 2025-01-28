import { useContext, useEffect, useState } from 'react';
import Layout from '../components/component/Layout';
import { ThemeContext } from '../components/ThemeContext';
import { WeatherContext } from '../components/WeatherContext';

const WeatherInfo = () => {
  const { themeMode, setThemeMode } = useContext(ThemeContext);
  const { weatherInfo } = useContext(WeatherContext);

  const keyBeautify = (key) => {
    const capitalizedKey = key
      .split('_')
      .map((value, index) => value.charAt(0).toUpperCase() + value.slice(1))
      .join(' ');
    return capitalizedKey;
  };

  return (
    <Layout>
      <div className="card">
        {console.log('Theme Mode: ', JSON.stringify(themeMode))}

        <div className="card-head">Weather Today</div>
        <div className="card-body">
          {weatherInfo ? (
            <>
              {Object.entries(weatherInfo).map(([key, value], index) => {
                return (
                  <div key={index}>
                    <span className="info-title"> {keyBeautify(key)} : </span>{' '}
                    {/* {weatherInfo[key]} */}
                    {value}
                  </div>
                );
              })}
            </>
          ) : (
            'Loading...'
          )}
        </div>
      </div>
    </Layout>
  );
};

export default WeatherInfo;
