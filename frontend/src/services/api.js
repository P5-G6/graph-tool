import axios from 'axios';

import {baseURL} from '../utils/constants';

const api = axios.create({baseURL, timeout: 1000 });

export default api;