import React, {Component} from 'react';
import City from './City';
import {API_KEY} from "../api";
import WeatherBox from './WeatherBox';
import WeatherDetails from './WeatherDetails';
import './Today.css';
// import { Sunny, Cloudy, Rain, Snow } from 'weather-styled-icon';

// const styledIcons = () => (
//     <div>
//       <Sunny />
//       <Cloudy />
//       <Rain />
//       <Snow />
//     </div>
//   );

class Today extends Component{
    constructor(props){
        super(props);

        this.state = {
            city: '',
            days: [],
        }
        this.fetchWeatherDetails = this.fetchWeatherDetails.bind(this);
    }

    fetchWeatherDetails(){
        fetch(`https://api.openweathermap.org/data/2.5/forecast?q=delhi&APPID=85e86f4a417c726e0c1c5178cf0194f5`)
        .then(response => response.json())
        .then(response => {
            console.log(response);            
        })
        .catch(err => {
            console.log(err);
        });
    }

    updateState = (data) => {
        let days = [];
        for(let i=0;i<5;i++){
            days.push({
                date: data.list[8*i].dt_txt,
                weather_main: data.list[8*i].weather[0].main,
                max: data.list[8*i].main.temp_max,                
                min: data.list[8*i].main.temp_min, 
                weather_desc: data.list[8*i].weather[0].description,
                pressure: data.list[8*i].main.pressure,
                wind_speed: data.list[8*i].wind.speed,
                humidity: data.list[8*i].main.humidity,
                icon: data.list[8*i].weather[0].icon,
            });
        }
        this.setState({
            ...this.state,
            city: data.city.name,
            days: days,
        });
    }
    makeApiCall = async (city) => {        
        await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&APPID=${API_KEY}`)
        .then(response => response.json())
        .then(response => {
            console.log(response);
            this.updateState(response);
        })
        .catch(err => {
            console.log(err);
            return false;
        });
    }
    
    render(){

        const WeatherBoxes = () => {
            const weatherBoxes = this.state.days.slice(1).map(day => (
              <li key={day.date} className="weather-box">
                <WeatherBox weather={day} />
              </li>
            ));
      
            return <ul className='weather-box-list'>{weatherBoxes}</ul>;
        };

        return (
            <div className="main"> 
                <City makeApiCall={this.makeApiCall} />
                <WeatherDetails weather={this.state.days[0]} city={this.state.city} />
                <WeatherBoxes />
                </div>           
        );
    }
}

export default Today;