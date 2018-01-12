const restaurant = require('../../db/models/restaurants.js');


const RestaurantsController = {
  getRestaurantReviews: (req, res) => {
    console.log('inside of getRestaurant here is the req.id', req.query.ID)
    res.send('suppose to be the restaurant reviews....');
  }

};

module.exports = RestaurantsController;