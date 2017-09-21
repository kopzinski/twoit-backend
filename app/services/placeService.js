import _ from 'lodash'
import db from '../../config/database'
import types from '../constants/types'
import constants from '../constants/common'
import Place from '../model/place'
import Vote from '../model/vote'
import placeRepository from '../repositories/placeRepository'
import  { timeIsOver, startAsTime, endAsTime} from './cronoService'

class PlaceService {
    constructor(){
        this.self = this
    }

    add (req, res) {
        const placeName = req.body.name
        const userId = req.user._id
        let currentPlace = new Place(placeName)

        db.findOne({type: types.place, name: placeName}, (err,place) => {
            if(place) {
                res.json({error: "This place already exists!"})
                res.status(400)
            }
        })
        let currentVote = new Vote(userId)

        currentPlace.votes.push(currentVote)

        db.insert(currentPlace, function(err, place) {
            if(err) throw err
            res.json(place)
        })

    }

    vote(req, res) {
        const userId = req.user._id
        const placeId = req.params.placeId

        if(timeIsOver(constants.limitHour, constants.limitMinute)) {
            res.status(400).send({error: "Time is over."})
        }

        this.checkAlreadyWon(placeId,(won) => {
            if(won) {
                res.status(400).send({error:'place already won this week'})
            }
        })

        placeRepository.checkUserVoted(placeId, (placesUserVoted) => {
            if (placesUserVoted[0] != null) {
                return res.status(400).send({error: "User already voted today. "})
            } else {
                placeRepository.addVote(placeId, userId, (placeSaved) => {
                    res.json(placeSaved)
                })                
            }
        })
    }

    winner(req, res) {
        const today = new Date()
        const lunchDay = new Date(today)
        lunchDay.setDate(today.getDate() - 1)
        placeRepository.getWinner(lunchDay, (winner) => {
            res.json(winner)
        })
    }

    checkAlreadyWon(placeId, callback) {
        const lunchDay = new Date()
        const day = lunchDay.getDay() //3
        const diff = lunchDay.getDate() - day

        for(let i = 0; i <= day; i++) {
            const dateToCheck = new Date(lunchDay.setDate(diff + i))
            placeRepository.getWinner(dateToCheck, (winner) => {
                if(winner != undefined) {
                    if(winner._id == placeId) {
                        callback(true)
                    }
                }
            })
        }
    }

    list(req, res) {

        db.find({type : types.place}).sort({votes: -1}).exec(function(err, doc) {
            if (err) return console.log(err)


                //TODO remove all old winners


            res.json(doc)
        })
    }    

}

export default new PlaceService()

