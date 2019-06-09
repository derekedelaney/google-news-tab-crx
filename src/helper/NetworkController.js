import { DoodleService, NewsService } from '.';

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
                const today = new Date().toLocaleDateString();
                const lastRunDate = new Date(
                    latestTaskRun.data.startedAt
                ).toLocaleDateString();
                if (lastRunDate < today) {
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
}

export default NetworkController;
