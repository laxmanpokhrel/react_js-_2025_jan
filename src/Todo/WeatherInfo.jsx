import { useContext } from "react";
import Layout from "../components/Containers/Layout";
import { ThemeContext } from "../components/component/ThemeContext";
import { WeatherContext } from "../components/component/WeatherContext";
import { RoundedContainers } from "../components/Containers/RoundedContainers";
import Button from "./Button"

const WeatherInfo = () => {
  const { themeMode, toggleTheme } = useContext(ThemeContext);
  const { weatherInfo } = useContext(WeatherContext);

  const keyBeautify = (key) => {
    const capitalizedKey = key
      .split("_")
      .map((value) => value.charAt(0).toUpperCase() + value.slice(1))
      .join(" ");
    return capitalizedKey;
  };
const changeThemeHandler=()=>{
   toggleTheme();
}
  return (
    <Layout>
      <RoundedContainers>
        {console.log("Theme Mode: ", JSON.stringify(themeMode))}

        <div
          className={`card-head ${
            themeMode === "light" ? "card-head-light" : "card-head-dark"
          }`}
        >
          <span>Weather Today</span>
          <Button   className="btn-toggle" onClick={changeThemeHandler}>
            {themeMode === "light" ? 'Dark':'Light'}
          
          </Button>
        </div>
        <div className={`card-body ${
            themeMode === "light" ? "card-body-light" : "card-body-dark"
          }`}>
          {weatherInfo ? (
            <>
              {Object.entries(weatherInfo).map(([key, value], index) => {
                return (
                  <div key={index}>
                    <span className="info-title"> {keyBeautify(key)} : </span>{" "}
                    {/* {weatherInfo[key]} */}
                    {value}
                  </div>
                );
              })}
            </>
          ) : (
            "Loading..."
          )}
        </div>
      </RoundedContainers>
    </Layout>
  );
};

export default WeatherInfo;
