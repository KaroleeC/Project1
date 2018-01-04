const Sequelize = require('sequelize');
const db = require('../');

const Reviews = db.define('Reviews', {
  rating: {
    type: Sequelize.DECIMAL(3, 2)
  }
});

module.exports = Reviews;