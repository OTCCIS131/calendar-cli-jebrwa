const _ = require("lodash")
const M = require("moment")
const chalk = require('chalk')
const MomentRange = require('moment-range')

const moment = MomentRange.extendMoment(M)

let year = moment().range('year')


for (const month of year. by('month'))
{
    console.log(_.pad(month.format('MMMM'), 26, '_'))
    console.log('S   M   T   W   Th   F   S ')

    let days = Array.from(month.range('month').by('days'))
   
    let paddedDays = _.map(days, day => 

    {
       
        let date = day.date()
        if (day.month() == 9 && day.date() == 10) 
       
        {
            date = chalk.red(date)
   
        }

       if (day.month() == 6 && day.date() == 21) 

        {
            date = chalk.magenta(date)
   
        }
        
        return _.padEnd(date, 2 )

    })
    
    paddedDays = _.chunk(paddedDays, 7);
    paddedDays.forEach(week => {console.log(week.join("  "))})


}


[]