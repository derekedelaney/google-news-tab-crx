export async function getLatLong() {
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
