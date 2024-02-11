import express from 'express';
import { createClient } from '@google/maps';
import cors from 'cors';
import axios from 'axios';

const app = express();
app.use(cors());

const googleMapsClient = createClient({
    key: 'AIzaSyB_n34-IOXe5h1mNGiSKKf2kWf-DD1KrZ0' // Ensure to use your actual API key here
});

app.get('/placeDetails', (req, res) => {
    console.log("Request received for place details:", req.query);
    const placeName = req.query.placeName;

    if (!placeName) {
        return res.status(400).json({ error: 'Place name parameter is required' });
    }

    const textSearchRequest = {
        query: placeName
    };

    googleMapsClient.places(textSearchRequest, (err, response) => {
        if (err) {
            console.error("Error searching for place:", err);
            return res.status(500).json({ error: 'Error searching for place' });
        }

        const results = response.json.results;
        console.log("Search results:", results);

        if (!results || results.length === 0) {
            return res.status(404).json({ error: 'Place not found' });
        }

        // Extract the place ID from the first result
        const placeId = results[0].place_id;

        // Fetch details for the extracted place ID
        fetchPlaceDetails(placeId)
            .then(placeDetails => res.status(200).json(placeDetails))
            .catch(error => {
                console.error("Error fetching place details:", error);
                res.status(500).json({ error: 'Error fetching place details', details: error.message });
            });
    });
});

async function fetchPlaceDetails(placeId) {
    const apiKey = 'AIzaSyB_n34-IOXe5h1mNGiSKKf2kWf-DD1KrZ0';
    const url = `https://maps.googleapis.com/maps/api/place/details/json?placeid=${placeId}&fields=name,rating,price_level,opening_hours,formatted_phone_number,formatted_address,photos&key=${apiKey}`;

    try {
        const response = await axios.get(url);
        return response.data.result; // Adjust according to the actual response structure
    } catch (error) {
        console.error("Error fetching place details:", error);
        throw error; // Rethrow or handle as needed
    }
}

const PORT = process.env.PORT || 5500;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
