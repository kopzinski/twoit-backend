import _ from 'lodash'
import db from '../../config/database'
import types from '../constants/types'
import Vote from '../model/vote'
import  { startTodayAsTime, endTodayAsTime, startAsTime, endAsTime } from '../services/cronoService'

class PlaceRepository {
    constructor() {}

    addVote(placeId, userId, callback) {
        let currentVote = new Vote(userId)
        db.update({_id: placeId },{ $addToSet : { votes : currentVote} }, {}, (err, place) => {
            if(err) return console.log(err)
            callback(place)
        })
    }

    checkUserVoted(userId, callback) {
        const queryCheckUserVoted = {
            type: types.place,
            votes : { 
                $elemMatch: { 
                    userId: userId, 
                    date: { $gte : startTodayAsTime(), $lte: endTodayAsTime() } 
                } 
            }
        }
        db.find(queryCheckUserVoted, (err, places) => {
            callback(places)
        })
    }

    getWinner(date, callback) {
        const start = startAsTime(date)
        const end = endAsTime(date)
        db.find({
            type: types.place,
            "votes.date": {
                $gte: start,
                $lte: end
            }
        }, (err, places) => {
            if (err) throw err
            
            if(places[0] != null) {
                _.forEach(places, (place) => {
                    
                    var allowedVotes = _.remove(place.votes, (vote) => {
                        const dateIsOk = start < vote.date && vote.date < end
                        return dateIsOk
                    })

                    const qtyVotes = allowedVotes.length
                    place.qtyVotes = qtyVotes
                })
                let sorted = _.sortBy(places, ['qtyVotes'])
                const winner = _.last(sorted)
                callback(winner)

            } 
        })
    }
}

export default new PlaceRepository()