import React from 'react';
import { WeatherService } from '../helper';
import weatherIcons from '../helper/WeatherIcons.json';

export default function Weather(props) {
    console.log(props.weather);
    if (!props.weather.properties){
        return null;
    }
    const { weather: { properties: { periods: [currentForecast] } } } = props;
    const [key, dayNight] = WeatherService.getIconKey(currentForecast.icon);
    const iconObject = weatherIcons[key];

    return [
        <div className="weather">
            <img src={iconObject.icons[dayNight]} alt={iconObject.description} />
            <div className="flex-column ml-5">
                <div>
                    {currentForecast.temperature}&deg; {currentForecast.temperatureUnit}
                </div>
                <div>
                    {iconObject.description}
                </div>
            </div>
        </div>
    ];
}
