const axios = require('axios');
const keys = require('../../config.js');

const searchController = {
  search: (req, res) =>{
    console.log('here is the req.body', req.body);
    const arr = ['term=buggers', 'location=Los+angeles'];
    const url = "https://api.yelp.com/v3/businesses/search?" + arr.join('&') ;
    const options = {
      method: 'GET',
      url: url,
      headers: {Authorization: keys.Authorization}
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

