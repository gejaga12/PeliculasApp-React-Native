import axios from 'axios';

const movieDB = axios.create({
  baseURL: 'https://api.themoviedb.org/3/movie',
  params: {
    api_key: 'dcf2955e2df50f6a0e255e175a984f84',
    language: 'es-ES',
  },
});

export default movieDB;
