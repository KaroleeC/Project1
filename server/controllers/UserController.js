const  User = require('../../db/models/users');

const UserController = {
    CreateUser: (req, res) => {
        User.create(User.create({
            username: 'kari',
            password: 'password'
        }))
    }
}

module.exports = UserController;