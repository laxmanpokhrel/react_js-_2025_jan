import { useContext, useEffect, useState } from "react";
import Layout from "../components/component/Layout";
import { ThemeContext } from "../components/ThemeContext";
import { WeatherContext } from "../components/WeatherContext";
import Button from "../components/Button";

const WeatherInfo = () => {
  const { themeMode, setTheme } = useContext(ThemeContext);
  const { weatherInfo } = useContext(WeatherContext);
  const keyBeautify = (key) => {
    const capitalizedKey = key
      .split("_")
      .map((value, index) => value.charAt(0).toUpperCase() + value.slice(1))
      .join(" ");
    return capitalizedKey;
  };

  const changeThemeHandler = () =>{
    themeMode==='light'?setTheme('dark'):setTheme('light');
  }

  return (
    <Layout>
      <div className="card">
        <div className={`${themeMode==='light'?"card-head-light": "card-head-dark"}`}>
          <span>Weather Today</span>
          <Button label={themeMode} btn_type={'btn-primary'} action={changeThemeHandler}/>
          </div>
        <div className="card-body">
          {!weatherInfo ? (
            "Loading..."
          ) : (
            <>
              {Object.entries(weatherInfo).map(([key, value], index) => {
                return (
                  <div key={index}>
                    <span className="info-title"> {keyBeautify(key)} : </span>{" "}
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
