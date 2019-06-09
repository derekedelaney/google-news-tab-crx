
const rssNewsUrl = 'https://api.rss2json.com/v1/api.json?rss_url=https://news.google.com/rss&count=38&api_key=uhvrh7g3aqgxmvoe3ehxnxl0r6rq8frx5wymysjn';
const rssNewsTopicUrl = 'https://api.rss2json.com/v1/api.json?rss_url=https://news.google.com/news/rss/headlines/section/topic/{topic}&count=38&api_key=uhvrh7g3aqgxmvoe3ehxnxl0r6rq8frx5wymysjn';
const rssNewsLocationUrl = 'https://api.rss2json.com/v1/api.json?rss_url=https://news.google.com/news/rss/headlines/section/geo/{location}&count=38&api_key=uhvrh7g3aqgxmvoe3ehxnxl0r6rq8frx5wymysjn';
const locationUrl = 'https://nominatim.openstreetmap.org/search/{lat,long}?format=json&addressdetails=1'

class NewsService {
    static async loadRssFeed(topic) {
        switch (topic) {
            case 'WORLD':
            case 'NATION':
            case 'BUSINESS':
            case 'TECHNOLOGY':
            case 'ENTERTAINMENT':
            case 'SPORTS':
            case 'SCIENCE':
            case 'HEALTH':
                return fetch(rssNewsTopicUrl.replace('{topic}', topic));
            case 'LOCAL':
                const [lat, long] = await getLatLong();
                const response = await fetch(locationUrl.replace('{lat,long}', `${lat},${long}`));
                const json = await response.json();
                const location = json.length > 0 ?
                    `${json[0].address.neighbourhood.toLowerCase()},${json[0].address.state.toLowerCase()}` : '';
                return fetch(rssNewsLocationUrl.replace('{location}', location))
            default:
                return fetch(rssNewsUrl);
        }
    }
}

async function getLatLong() {
    return new Promise((resolve, reject) => {
        if ('geolocation' in navigator){
            navigator.geolocation.getCurrentPosition(function(position) {
                resolve([position.coords.latitude, position.coords.longitude]);
            });
        } else {
            reject();
        }
    })
}

export default NewsService;
