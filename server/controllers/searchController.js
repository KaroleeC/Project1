const axios = require('axios');
//const keys = require('../../config.js');
// changed keys to process.env
const searchController = {
  search: (req, res) =>{
    const arr = req.body.query;

    const url = "https://api.yelp.com/v3/businesses/search?" + arr.join('&') ;
    const options = {
      method: 'GET',
      url: url,
      headers: {Authorization: process.env.AUTHORIZATION}
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

