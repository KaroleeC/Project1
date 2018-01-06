const restaurant = require('../../db/models/restaurants.js');


const RestaurantsController = {
  CreateRestaurant: (req, res) => {
      restaurant.create()
                .then()
                .catch();
  }

};

module.exports = RestaurantsController;