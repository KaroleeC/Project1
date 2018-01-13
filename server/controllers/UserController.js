const  User = require('../../db/models/users');

const UserController = {
    CreateUser: (req, res) => {
        User.create(User.create({}))
    },
    getUserInfo: ()=> {}
}

module.exports = UserController;