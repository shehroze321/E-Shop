import axios from 'axios';

const isLocalhost = true; // Set this variable based on  condit

const request = axios.create({
  // baseURL: isLocalhost
  //   ? 'http://localhost:4100/api/v1'
  //   : 'http://3.110.107.87/api/v1',
  baseURL: 'http://localhost:8000/api/v2',
  withCredentials: true,
});

export default request;

export const backend_url='http://localhost:8000/'