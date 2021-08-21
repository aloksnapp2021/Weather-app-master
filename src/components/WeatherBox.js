import React from 'react';
import { baseUrlImage } from '../api';
import './WeatherBox.css';

const getDay = (date) => {
    let weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return weekdays[new Date(date).getDay()];
};

const WeatherBox = (props) => {
    
    if(props.weather){
        return (
            <div className="">
                <h2 className="days">
                    {getDay(props.weather.date)}
                </h2>
                <h5>
                    <img src={baseUrlImage + props.weather.icon + '@2x.png'} alt="icon" />
                    {props.weather.weather_main}
                </h5>
                <ul className="weatherBoxDetails">
               <li><i class="fas fa-temperature-low "> max: {Math.round(props.weather.max-273.15)}°C</i></li>
               <li><i class="fas fa-temperature-low "> min:{Math.round(props.weather.min-273.15)}°C</i></li>
               <li>Pressure : {props.weather.pressure}</li>
               <li> Humidity : {props.weather.humidity}</li>            
               <li><i class="fas fa-wind">  Wind-speed:{props.weather.wind_speed}</i> </li>  
                </ul>               
            </div>
        );
    }
    else{
        return(
            <div></div>
        );
    }

}

export default WeatherBox;