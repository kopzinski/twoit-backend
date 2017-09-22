import _ from 'lodash'
import express from 'express'
import session from 'express-session'
import multer from 'multer'
import bodyParser from 'body-parser'
import twoitJwt from './app/services/twoit-jwt'
import placeService from './app/services/placeService'
import userService from './app/services/userService'

import { login, authenticate } from './app/services/auth'

let app = express()
app.use(twoitJwt.passport.initialize())

app.use(multer())
app.use(bodyParser.json())

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization")
  next()
})



app
    .route('/login')
    .post(login)

app
    .route('/places')
    .put(authenticate, placeService.add)
    .get(authenticate, placeService.list)

app
    .route('/places/:placeId/votes')
    .post(authenticate, placeService.vote.bind(placeService))

app
    .route('/winner')
    .get(authenticate, placeService.winner)

app
    .route('/users')
    .put(userService.add)

app.all('\\/*', function (req, res) {
    res.json({status:"Unauthorized"})
    res.status(401).end()
})

module.exports = app