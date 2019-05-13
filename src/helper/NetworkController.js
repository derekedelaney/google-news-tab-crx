import { DoodleService, NewsService } from '.';

class NetworkController {
    static async loadDoodles() {
        try {
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
