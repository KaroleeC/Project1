const Users = require('./users');
const Restaurants = require('./restaurants');

Users.sync()
  .then(() => {
    console.log('Connected Users table');
  })
  .catch((err) => {
    console.log('Error connecting Users table: ', err);
  });


Restaurants.sync()
  .then(() => {
    console.log('Connected Restaurants table');
  })
  .catch((err) => {
    console.log('Error connecting Restaurants table: ', err);
  });



module.exports = { Users, Restaurants };