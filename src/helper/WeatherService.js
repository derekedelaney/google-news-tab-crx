import { getLatLong } from './LocationService';

const weatherGovBase = 'https://api.weather.gov/points/{lat},{long}';

class WeatherService {
    static async getCurrentWeather() {
        const [lat, long] = await getLatLong();
        const response = await fetch(weatherGovBase.replace('{lat},{long}', `${lat.toFixed(4)},${long.toFixed(4)}`));
        const json = await response.json();
        return fetch(json.properties.forecast);
    }

    static async getWeatherIcons(day_night, key) {
        return fetch();
    }
    static getIconInfo(url) {
        const urlRegex = /(day|night)\/(\w{3,})(,?(\d{2,3})?)/gm
        const location = document.createElement('a');
        location.href = url
        const [, dayNight, imageKey, , precipitation] = urlRegex.exec(location.pathname)

        return [imageKey, dayNight, precipitation]
    }
}

export default WeatherService;
