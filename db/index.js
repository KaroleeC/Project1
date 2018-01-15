const Sequelize = require('sequelize');
//const keys = require('../config.js');

const db = new Sequelize(process.env.ELEPHANTSQL_URL);

db.authenticate()
  .then(() => {
    console.log('Connected to database: FoodThoughts');
  })
  .catch((err) => {
    console.log('Error connecting to database: FoodThoughts - ', err);
  })

module.exports = db;