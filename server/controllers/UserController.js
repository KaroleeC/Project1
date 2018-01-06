const  User = require('../../db/models/users');

const UserController = {
    CreateUser: (req, res) => {
        User.create()
    }
}

module.exports = UserController;