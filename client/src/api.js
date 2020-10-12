import axios from 'axios';

const api = axios.create({
    baseURL: 'https://stacey-personal-website.herokuapp.com/api',
});

export const createResponse = (time, name, email, message) => {
    var promise = api.post('/newResponse', {
        time: time,
        name: name,
        email: email, 
        message: message
    })
        .then(() => {
            console.log('Client: response created');
            
        })
        .catch(err => {
            console.log('Client: cannot create response');
            promise = err;
        });
    return promise;
}

const apis = {
    createResponse,
}

export default apis;