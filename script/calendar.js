function calendarDate() {
    fullDate = new Date();

    const weekDays = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
    const months = ["JAN","FEB","MAR","APR","MAY","JUN","July"]

    hourNow = fullDate.getHours();

    weekdayNow = fullDate.getDay()
    weekdayNow = weekDays[weekdayNow]
    
    monthNow = fullDate.getMonth()
    monthNow = months[monthNow]
    
    dateNow = fullDate.getDate();
    // console.log(fullDate)
    // calendarLog()

    if ((hourNow > 4) && (hourNow < 12)) {
        timeOfDay = "morning"
    } else if ((hourNow > 11) && (hourNow < 17)) {
        timeOfDay = "afternoon"
    }else if ((hourNow > 16) && (hourNow < 21)) {
        timeOfDay = "evening"
    } else if ((hourNow > 20) || (hourNow < 5)) {
        timeOfDay = "night"
    } else {
        console.log('time broken')
    }

    // timeOfDay = "afternoon"
}

// function calendarLog() {
//     console.log(hourNow)
//     console.log(weekdayNow)
// }