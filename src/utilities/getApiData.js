import Config from "react-native-config";
import axios from 'axios';

const apiKey = Config.MONGO_DB_API_KEY;

const url = 'https://us-east-1.aws.data.mongodb-api.com/app/data-pngam/endpoint/data/v1/action/find';
const headers = {
    'Content-Type': 'application/json',
    'api-key': apiKey,
    'Accept': 'application/ejson'
};
const data = {
    collection: 'clinics',
    database: 'veterinarian_clinics',
    dataSource: 'Cluster0'
};

const fetchData = () => {
    return axios.post(url, data, {headers: headers})
        .then(response => {
            console.log(`Response Size: ${JSON.stringify(response.data).length}`);
            return response.data;
        })
        .catch(error => {
            console.log(`Error: ${error}`);
        });
}

module.exports = fetchData;
