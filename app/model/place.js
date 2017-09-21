import types from '../constants/types'

export default class Place {
    constructor(name) {
        this.name = name
        this.type = types.place
        this.votes = []
    }
}
