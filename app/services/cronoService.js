const weekdays = {
    sunday : 0,
    monday: 1,
    tuesday: 2,
    wednesday: 3,
    thursday: 4,
    friday: 5,
    saturday: 6
}

const startTodayAsTime = () => {
    const today = new Date()
    return startAsTime(today)
}

const endTodayAsTime = () => {
    const today = new Date()
    return endAsTime(today)
}

const timeIsOver = (limitHour, limitMinute) => {
    const now = new Date()
    const limit = new Date()
    limit.setHours(limitHour, limitMinute, 0, 0)
    return limit.getTime() < now.getTime()
}

const startAsTime = (date) => {
    date.setHours(0, 0, 1, 0)
    return date.getTime()
}

const endAsTime = (date) => {
    date.setHours(23, 59, 59, 0)
    return date.getTime()
}

const getSunday = (date) => {
    return getWeekDate(date, weekdays.sunday)
}
const getMonday = (date) => {
    return getWeekDate(date, weekdays.monday)
}
const getTuesday = (date) => {
    return getWeekDate(date, weekdays.tuesday)
}
const getWednesday = (date) => {
    return getWeekDate(date, weekdays.wednesday)
}
const getThursday = (date) => {
    return getWeekDate(date, weekdays.thursday)
}
const getSaturday = (date) => {
    return getWeekDate(date, weekdays.saturday)
}

const getWeekDate = (date, weekDayNumber) => {
    const day = date.getDay()
    const diff = date.getDate() - day + weekDayNumber
    const weekDate = new Date(date.setDate(diff))
    return weekDate
}

export {startTodayAsTime, endTodayAsTime, timeIsOver, startAsTime, endAsTime, getWeekDate}