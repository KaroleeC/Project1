const Sequelize = require('sequelize');
const db = require('../');

const Users = db.define('Users', {
  username: {
    type: Sequelize.STRING
  },
  password: {
    type: Sequelize.STRING
  },
  
});

module.exports = Users;