const Sequelize = require('sequelize');
const db = require('../');

const Restaurants = db.define('Restaurants', {
  name: {
    type: Sequelize.STRING
  },
  rating: {
    type: Sequelize.DECIMAL(3, 2)
  }
});

module.exports = Restaurants;