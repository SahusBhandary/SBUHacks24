const axios = require('axios');

// Server-side function to retrieve location using Google Geolocation API
async function getLocation(apiKey, wifiAccessPoints) {
    const url = `https://www.googleapis.com/geolocation/v1/geolocate?key=${apiKey}`;
    const requestBody = { wifiAccessPoints };
    
    try {
        const response = await axios.post(url, requestBody);
        return response.data.location;
    } catch (error) {
        console.error('Error fetching location:', error);
        throw error;
    }
}

// Function to retrieve elevation using Google Elevation API
async function getElevation(apiKey, latitude, longitude) {
    const elevationUrl = `https://maps.googleapis.com/maps/api/elevation/json?locations=${latitude},${longitude}&key=${apiKey}`;
    
    try {
        const response = await axios.get(elevationUrl);
        return response.data.results[0].elevation;
    } catch (error) {
        console.error('Error fetching elevation:', error);
        throw error;
    }
}

// Example usage of server-side function
const apiKey = 'AIzaSyB_n34-IOXe5h1mNGiSKKf2kWf-DD1KrZ0';
const wifiAccessPoints = [
    { macAddress: '01:23:45:67:89:AB', signalStrength: -65, signalToNoiseRatio: 40 },
    // Add more Wi-Fi access points as needed
];

// Retrieve location using Google Geolocation API
getLocation(apiKey, wifiAccessPoints)
    .then(location => {
        console.log('Location:', location);
        
        // Once location is obtained, retrieve elevation
        getElevation(apiKey, location.lat, location.lng)
            .then(elevation => {
                console.log('Elevation:', elevation);
            })
            .catch(error => {
                console.error('Error:', error);
            });
    })
    .catch(error => {
        console.error('Error:', error);
    });

// Client-side code to retrieve elevation using HTML5 Geolocation API
if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(async (position) => {
        const { latitude, longitude } = position.coords;
        
        // Retrieve elevation using Google Elevation API
        getElevation(apiKey, latitude, longitude)
            .then(elevation => {
                console.log('Elevation:', elevation);
            })
            .catch(error => {
                console.error('Error fetching elevation:', error);
            });
    }, (error) => {
        console.error('Error getting user location:', error);
    });
} else {
    console.error('Geolocation is not supported by this browser.');
}
