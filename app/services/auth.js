import db from '../../config/database'
import twoitJwt from './twoit-jwt'

const login = (req, res) => {
    let name = ''
    let password = ''
    if (req.body.name && req.body.password) {
        name = req.body.name
        password = req.body.password
    }

    db.findOne({
        type: 'USER', //TODO: get from types.js
        name: name
    }, (err, user) => {
        if (!user) {
            res
                .status(401)
                .json({message: "no such user found"})
        }

        if (user.password === req.body.password) {
            // from now on we'll identify the user by the id and the id is the only
            // personalized value that goes into our token
            const payload = {
                id: user._id
            }
            const token = twoitJwt
                .jwt
                .sign(payload, twoitJwt.jwtOptions.secretOrKey)
            res.json({message: "ok", token: token})
        } else {
            res
                .status(401)
                .json({message: "passwords did not match"})
        }

    })

}

const authenticate = twoitJwt
        .passport
        .authenticate('jwt', {session: false})

export { login, authenticate }