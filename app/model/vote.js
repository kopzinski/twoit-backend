export default class Vote {
    constructor(userId) {
        this.userId = userId
        this.date = Date.now()
    }
}
