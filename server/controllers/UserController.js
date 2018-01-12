const  User = require('../../db/models/users');

const UserController = {
    CreateUser: (req, res) => {
        User.create(User.create({}))
    }
}

module.exports = UserController;