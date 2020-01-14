const axios = require('axios')

beforeAll(() => console.log("Initializing..."));
afterAll(() => console.log("Closing..."));

const fetchStrapiData = {
    fetchNews: () =>
        axios
            .get(`https://strapi-gatsby-postgresql-temp.herokuapp.com/news/1`)
            .then(res => res.data)
            .catch(err => "error"),
    fetchJobs: () =>
        axios
            .get(`https://strapi-gatsby-postgresql-temp.herokuapp.com/jobs/1`)
            .then(res => res.data)
            .catch(err => "error")
};

module.exports = fetchStrapiData;