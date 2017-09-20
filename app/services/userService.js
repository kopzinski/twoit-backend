import db from '../../config/database'
import types from '../model/types'
import User from '../model/user'

class UserService {
    constructor() {}

    add(req, res) {
        const name = req.body.name
        const password = req.body.password

        let newUser = new User(name, password)

        db.insert(newUser, (err, user) => {
            if (err) 
                return console.log(err)
            res.json(user)
        })
    }
}

export default new UserService()
