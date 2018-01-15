const Sequelize = require('sequelize');
const db = new Sequelize('FoodThoughts', 'root', '', {
  host: 'us-cdbr-iron-east-05.cleardb.net',
  user: 'bded3c0e6d36bd',
  password: '0428dc2c',
  database: 'heroku_919f88ddaa85c2b',
  port: 3306,
  dialect: 'mysql',
});
//mysql://bded3c0e6d36bd:0428dc2c@us-cdbr-iron-east-05.cleardb.net/heroku_919f88ddaa85c2b?reconnect=true
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