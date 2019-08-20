var axios = require('axios');

var axiosInstance = axios.create({
    baseURL: process.env.NODE_ENV == 'development' ? 'http://localhost:9090' : 'https://domain.com/foo/bar'
});

module.exports = axiosInstance;