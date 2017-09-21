import db from '../../config/database'
import types from '../constants/types'
import User from '../model/user'

class UserService {
    constructor() {}

    add(req, res) {
        console.log('dentro do db user add...')

        const name = req.body.name
        const password = req.body.password

        let newUser = new User(name, password)

        db.insert(newUser, (err, user) => {
            if (err) 
                return console.log(err)

            console.log('dentro do db insert...')

            res.json(user)
        })
    }
}

export default new UserService()
