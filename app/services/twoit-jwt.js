import jwt from 'jsonwebtoken'
import passport from 'passport'
import passportJWT from 'passport-jwt'
import db from '../../config/database'

let ExtractJwt = passportJWT.ExtractJwt
let JwtStrategy = passportJWT.Strategy

let jwtOptions = {}
jwtOptions.jwtFromRequest = ExtractJwt.fromAuthHeaderWithScheme('jwt')
jwtOptions.secretOrKey = 'kopzinskionaustraliaprojects'

let strategy = new JwtStrategy(jwtOptions, function (jwt_payload, next) {
    db.findOne( { _id: jwt_payload.id }, (err, doc) => {
        if (doc) {
            next(null, doc)
        } else {
            next(null, false)
        }
    })
    
})
passport.use(strategy)

const twoitJwt = { passport, jwtOptions, jwt }
export default twoitJwt