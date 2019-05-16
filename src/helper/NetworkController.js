import { DoodleService, NewsService } from '.';

class NetworkController {
    static async loadDoodles() {
        try {
            const latestTaskRunResponse = await DoodleService.getLastRunDoodleTask();
            const latestTaskRun = await latestTaskRunResponse.json();
            const today = new Date().toLocaleDateString();
            const lastRunDate = new Date(latestTaskRun.data.startedAt).toLocaleDateString();
            if(lastRunDate < today) {
                await DoodleService.runDoodleTask();
            }
            const response = await DoodleService.getRecentDoodles();
            return response.json();
        } catch (error) {
            console.error('Cannot load doodles', error);
        }
    }

    static async loadNews() {
        try {
            const response = await NewsService.loadRssFeed();
            return response.json();
        } catch (error) {
            console.error('Cannot load news', error);
        }

    }
}

export default NetworkController;
