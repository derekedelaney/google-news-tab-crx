import { DoodleService, NewsService, WeatherService } from '.';

function isDateBeforeToday(date) {
    return new Date(date.toLocaleDateString()) < new Date(new Date().toLocaleDateString());
}
class NetworkController {
    static async loadDoodles() {
        try {
            let latestTaskRun;
            const latestTaskRunResponse = await DoodleService.getLastRunDoodleTask();
            if (latestTaskRunResponse.ok) {
                latestTaskRun = await latestTaskRunResponse.json();
            } else {
                console.error(
                    (await latestTaskRunResponse.json()).error.message
                );
            }
            if (latestTaskRun) {
                const lastRunDate = new Date(latestTaskRun.data.startedAt);
                if (isDateBeforeToday(lastRunDate)) {
                    await DoodleService.runDoodleTask();
                }
            }
            const response = await DoodleService.getRecentDoodles();
            if (response.ok) {
                return response.json();
            }
        } catch (error) {
            console.error('Cannot load doodles', error);
        }
    }

    static async loadNews(topic) {
        try {
            const response = await NewsService.loadRssFeed(topic);
            return response.json();
        } catch (error) {
            console.error('Cannot load news', error);
        }
    }

    static async loadWeather() {
        try {
            const response = await WeatherService.getCurrentWeather();
            return response.json();
        } catch (error) {
            console.error('Cannot load weather', error);
        }
    }
}

export default NetworkController;
