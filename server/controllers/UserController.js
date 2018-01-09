const  User = require('../../db/models/users');

const UserController = {
    CreateUser: (req, res) => {
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> userpage
        User.create(User.create({
            username: 'kari',
            password: 'password'
        }))
<<<<<<< HEAD
=======
        User.create(User.create({}))
>>>>>>> commit before merge
=======
>>>>>>> userpage
    }
}

module.exports = UserController;