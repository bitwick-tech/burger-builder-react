import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-f84af.firebaseio.com/'
});

export default instance;