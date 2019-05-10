const googleDoodleURL =  'https://api.apify.com/v2/actor-tasks/c5Q4NFS3ETSQRxTgG/runs/last/dataset/items?token=nqjKtXckNRxeRYNivYEvJbCZ9'

class DoodleService {

    static getRecentDoodles () {
        return fetch(googleDoodleURL);
    }
}

export default DoodleService;
