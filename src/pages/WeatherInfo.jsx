import { useContext } from 'react';
import Button from '../components/Button';
import Layout from '../components/component/Layout';
import { ThemeContext } from '../components/ThemeContext';
import { WeatherContext } from '../components/WeatherContext';

const WeatherInfo = () => {
  const { themeMode, toggleTheme } = useContext(ThemeContext);
  const { weatherInfo } = useContext(WeatherContext);
  const keyBeautify = (key) => {
    const capitalizedKey = key
      .split('_')
      .map((value) => value.charAt(0).toUpperCase() + value.slice(1))
      .join(' ');
    return capitalizedKey;
  };

  const changeThemeHandler = () => {
    toggleTheme();
  };

  return (
    <Layout>
      <div className="card">
        <div
          className={`card-head ${
            themeMode === 'light' ? 'card-head-light' : 'card-head-dark'
          }`}
        >
          <span>Weather Today</span>
          <Button btnType="btn-primary btn-toggle" onClick={changeThemeHandler}>
            {themeMode === 'light' ? (
              <span>
                <i className="fa-regular fa-moon"></i> Dark
              </span>
            ) : (
              <span>
                <i className="fa-regular fa-lightbulb"></i> Light
              </span>
            )}
          </Button>
        </div>
        <div
          className={`card-body ${
            themeMode === 'light' ? 'card-body-light' : 'card-body-dark'
          }`}
        >
          {!weatherInfo ? (
            'Loading...'
          ) : (
            <>
              {Object.entries(weatherInfo).map(([key, value], index) => {
                return (
                  <div key={index}>
                    <span
                      style={{ backgroundColor: 'red' }}
                      className="info-title"
                    >
                      {' '}
                      {keyBeautify(key)} :{' '}
                    </span>{' '}
                    {value}
                  </div>
                );
              })}
            </>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default WeatherInfo;
