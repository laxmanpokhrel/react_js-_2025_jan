import { useContext, useEffect, useState } from "react";
import Layout from "../components/component/Layout";
import { ThemeContext } from "../components/ThemeContext";

const WeatherInfo = () => {
  const [weatherInfo, setWeatherInfo] = useState(null);
  const {themeMode, setThemeMode} = useContext(ThemeContext);
  const apiData = async () => {
    const response = await fetch(
      "https://api.sunrisesunset.io/json?lat=38.907192&lng=-77.036873"
    );
    const loadedResults = await response.json();
    return loadedResults.results;
  };

  useEffect(() => {
    (async () => {
      const responseData = await apiData();
      setWeatherInfo(responseData);
    })();
  }, []);

  const keyBeautify = (key) => {
    const capitalizedKey = key.split('_').map((value, index) => value.charAt(0).toUpperCase()+ value.slice(1)).join(' ')
    return capitalizedKey
  }

  return (
    <Layout>
      <div className="card">

        {console.log("Theme Mode: ", JSON.stringify(themeMode))}

        <div className="card-head">Weather Today</div>
        <div className="card-body">
          {weatherInfo ? (
            <>
              {Object.keys(weatherInfo).map((key, index) => {
                return (
                  <div key={index}>
                    <span className="info-title"> {keyBeautify(key)} : </span> {weatherInfo[`${key}`]}
                  </div>
                );
              })}
            </>
          ) : (
            "Loading..."
          )}
        </div>
      </div>
    </Layout>
  );
};

export default WeatherInfo;
