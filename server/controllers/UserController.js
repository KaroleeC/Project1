const  User = require('../../db/models/users');

const UserController = {
    CreateUser: (req, res) => {
        User.create({username: req.username,
        password: req.password 
        });
    }
}

module.exports = UserController;