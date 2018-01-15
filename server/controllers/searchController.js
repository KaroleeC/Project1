const axios = require('axios');
const keys = require('.././config.js');

const searchController = {
  search: (req, res) =>{
    const arr = req.body.query;

    const url = "https://api.yelp.com/v3/businesses/search?" + arr.join('&') ;
    const options = {
      method: 'GET',
      url: url,
      headers: {Authorization: process.env.Authorization}
    }
     axios(options)
     .then(({ data }) => {
       res.send(data);
     })
     .catch((err) => {
       console.log('This is the error', err)
       res.sendStatus(500);
     })
  }
}

module.exports = searchController

