const M = require('moment')
const _ = require('lodash')
const chalk = require('chalk')
const MomentRange = require('moment-range')

const moment = MomentRange.extendMoment(M)

let year = moment().range('year')

_.forEach(Array.from(year.by('months')), month => {
    console.log(_.pad(month.format('MMMM'), 26, ' '))
    console.log('S   M   T   W   Th  F   S   ')
    console.log()
    let days = Array.from(month.dayOfYear('days'))
    let paddeddays = _.map(days, day=> {
        let date = day.date()
        if(day.month() == 9 && day.date() == 10) {
        date = chalk.red(date)
}
return_.padEnd(date, 2, '' )
})
let monthRange = month.range('month')
let firstDay = monthRange.start.day()

Array.from(month.dayOfYear('days'))

console.log(firstDay)
    
})