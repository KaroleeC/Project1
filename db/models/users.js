const Sequelize = require('sequelize');
const db = require('../');

const Users = db.define('Users', {
    userID: {
      type: Sequelize.STRING
    },
    username: {
      type: Sequelize.STRING
    }
});

module.exports = Users;