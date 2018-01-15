const Sequelize = require('sequelize');
const db = new Sequelize('FoodThoughts', 'root', '', {
  host: 'localhost',
  port: 3306,
  dialect: 'mysql',
  port: 3306,
  dialect: 'mysql',
});

// host: 'localhost',
// port: 3306,
// dialect: 'mysql',

db.authenticate()
  .then(() => {
    console.log('Connected to database: FoodThoughts');
  })
  .catch((err) => {
    console.log('Error connecting to database: FoodThoughts - ', err);
  })

module.exports = db;