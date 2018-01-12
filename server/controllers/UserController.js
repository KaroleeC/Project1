const  User = require('../../db/models/users');

const UserController = {
    CreateUser: (req, res) => {
<<<<<<< HEAD
        User.create({username: req.username,
        password: req.password 
        });
=======
        User.create(User.create({}))
>>>>>>> --
    }
}

module.exports = UserController;