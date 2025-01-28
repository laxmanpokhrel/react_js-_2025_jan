import { useEffect, useState } from "react";
import Layout from "../components/component/Layout";

const WeatherInfo = () => {
    const [weatherInfo, setWeatherInfo] = useState(null)
   const apiData = async () =>
   {
    const response = (await fetch('https://api.sunrisesunset.io/json?lat=38.907192&lng=-77.036873')).json()
    const loadedResults = await response
    return loadedResults.results
   }

   useEffect(()=>{
    (async () => {
        const responseData  = await apiData();
        setWeatherInfo(responseData);
        console.log(weatherInfo)
    })()
   }, [])
   
    return (
        <Layout>
            <div className="card">
                <div className="card-head">Weather Today</div>
                <div className="card-body">
                    {weatherInfo?(
                        <>
                        
                        <div><span className="info-title">Date: </span>{weatherInfo.date}</div>   
                        <div><span className="info-title">Dawn: </span>{weatherInfo.dawn}</div>   
                        <div><span className="info-title">Day Length: </span>{weatherInfo.day_length}</div>
                        <div><span className="info-title">Dusk: </span>{weatherInfo.dusk}</div>                     
                        <div><span className="info-title">First Light: </span>{weatherInfo.first_light}</div>
                        <div><span className="info-title">Golden Hour: </span>{weatherInfo.golden_hour}</div>
                        <div><span className="info-title">Last Light: </span>{weatherInfo.last_light}</div>
                        <div><span className="info-title">Solar Noon: </span>{weatherInfo.solar_noon}</div>
                        <div><span className="info-title">Sunrise: </span>{weatherInfo.sunrise}</div>                
                        <div><span className="info-title">Sunset: </span>{weatherInfo.sunset}</div>                        
                        <div><span className="info-title">Timezone: </span>{weatherInfo.timezone}</div>   
                        </>
                    )
                  : ("Loading...")}
                        
                </div>
            </div>
        </Layout>
    );
};

export default WeatherInfo;
