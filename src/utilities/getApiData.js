// Import necessary libraries and configurations
import Config from "react-native-config";
import axios from 'axios';

// Extracting the MongoDB API Key from environmental variables
const apiKey = Config.MONGO_DB_API_KEY;

// Endpoint for the MongoDB API
const url = 'https://us-east-1.aws.data.mongodb-api.com/app/data-pngam/endpoint/data/v1/action/find';

// Define headers for the request.
// Includes the content type, API key, and accepted response type.
const headers = {
    'Content-Type': 'application/json',
    'api-key': apiKey,
    'Accept': 'application/ejson'
};

// Parameters that specify the database, collection, and datasource to fetch from.
const data = {
    collection: 'clinics',
    database: 'veterinarian_clinics',
    dataSource: 'Cluster0'
};

/**
 * @function fetchData
 * This function makes a POST request to the MongoDB API to fetch the data of veterinary clinics.
 * @returns {Promise<Object>} - A promise that resolves to the response data from the API.
 */
const fetchData = () => {
    return axios.post(url, data, {headers: headers})
        .then(response => {
            // Return the data retrieved from MongoDB
            return response.data;
        })
        .catch(error => {
            // Log any errors encountered during the request
            console.log(`Error: ${error}`);
        });
}

// Export the fetchData function to be used in other parts of the application
module.exports = fetchData;
