import React, { useEffect } from 'react';
import { WeatherService } from '../helper';

export default function Weather(props) {
    console.log(props.weather);
    if (!props.weather.properties){
        return null;
    }
    const { weather: { properties: { periods: [currentForecast] } } } = props;
    const [dayNight, key] = WeatherService.getIconKey(currentForecast.icon);
    return (
        <div className="weather">{currentForecast.temperature}&deg; {currentForecast.temperatureUnit}</div>
    );
}
