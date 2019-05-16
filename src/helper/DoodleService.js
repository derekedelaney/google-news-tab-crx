const googleDoodleURL =  'https://api.apify.com/v2/actor-tasks/c5Q4NFS3ETSQRxTgG/runs/last/dataset/items?token=nqjKtXckNRxeRYNivYEvJbCZ9';
const apifyGetLastRunURL = 'https://api.apify.com/v2/actor-tasks/c5Q4NFS3ETSQRxTgG/runs/last?token=nqjKtXckNRxeRYNivYEvJbCZ9';
const apifyRunTaskURL = 'https://api.apify.com/v2/actor-tasks/c5Q4NFS3ETSQRxTgG/runs?token=nqjKtXckNRxeRYNivYEvJbCZ9';

class DoodleService {
    static getRecentDoodles() {
        return fetch(googleDoodleURL);
    }

    static getLastRunDoodleTask() {
        return fetch(apifyGetLastRunURL);
    }

    static runDoodleTask() {
        return fetch(apifyRunTaskURL, { method: 'POST' });
    }
}

export default DoodleService;
