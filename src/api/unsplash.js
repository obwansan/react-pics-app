import axios from 'axios';

// Creates an instance of the axios client with a couple of defaulted properties.
export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID 746af259ec449cd27e683513f8d561f25869fb0123d756e56f28ca81f31c32d1' 
  }
});