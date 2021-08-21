import React from 'react';
import { baseUrlImage } from '../api';
import './WeatherDetails.css'; 

const WeatherDetails = (props) => {
    if(props.weather){
        return (
            <div className="col-12 p-3">
                <div className="card col-10 col-md-6 mx-auto">                        
                    <div className="card-body">
                            <img src={baseUrlImage + props.weather.icon + '@4x.png'} alt="background" />                                                        
                        <div>                                    
                        <h2> Today </h2> 
                        <i class="fas fa-map-marker-alt">  {props.city} </i>                         
                           <ul className="details">
                           {props.weather.weather_main},                             
                            
                           <li> <i class="fas fa-temperature-low ">  max: {Math.round(props.weather.max-273.15)}°C</i></li>
                            <li><i class="fas fa-temperature-low ">  min:{Math.round(props.weather.min-273.15)}°C</i></li>
                            <li>Pressure : {props.weather.pressure}</li>
                            <li> Humidity : {props.weather.humidity}</li>
                            <li> <i class="fas fa-wind"> Wind-speed : {props.weather.wind_speed}</i></li>
                        </ul>
                        </div> 
                    </div>
                </div>
            </div>
        );
    }
    else{
        return (
            <div>

            </div>
        );
    }
}
 

export default WeatherDetails;