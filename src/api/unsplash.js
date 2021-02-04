import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers:{
        Authorization:
        'Client-ID 3JTXAFRgWJTgi5re1KL4mkz8wM-YHZdVq85Eo2Gw0Ik'

    }

});