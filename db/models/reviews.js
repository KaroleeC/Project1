const Sequelize = require('sequelize');
const db = require('../');

const Reviews = db.define('Reviews', {
  rating: {
    type: Sequelize.DECIMAL(3, 2)
  },
  userid: {
    type: Sequelize.DECIMAL(3, 2)
  },
  restaurantid: {
    type: Sequelize.DECIMAL(3, 2)
  },

});

module.exports = Reviews;