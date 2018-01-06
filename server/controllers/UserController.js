

const UserController = {
    CreateUser: (req, res) => {
        User.create({
            username: 'kari',
            password: 'password'
        })
    }
}

