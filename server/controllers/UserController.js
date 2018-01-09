const  User = require('../../db/models/users');

const UserController = {
    CreateUser: (req, res) => {
<<<<<<< HEAD
        User.create(User.create({
            username: 'kari',
            password: 'password'
        }))
=======
        User.create(User.create({}))
>>>>>>> commit before merge
    }
}

module.exports = UserController;