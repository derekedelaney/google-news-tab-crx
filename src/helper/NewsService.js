
const rssNewsUrl = 'https://api.rss2json.com/v1/api.json?rss_url=https://news.google.com/rss&count=38&api_key=uhvrh7g3aqgxmvoe3ehxnxl0r6rq8frx5wymysjn';
class NewsService {
    static async loadRssFeed() {
        return fetch(rssNewsUrl);
    }
}

export default NewsService;
