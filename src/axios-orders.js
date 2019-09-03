import axios from 'axios';
import { API_GIPHY } from './config';

const instance = axios.create({
    baseURL: API_GIPHY.url,
});

export default instance;