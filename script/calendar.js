const weekDays = {
    long: ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],
    short: ["SUN","MON","TUE","WED","THU","FRI","SAT"]
}


function calendarDate() {
    fullDate = new Date();

    
    const months = ["JAN","FEB","MAR","APR","MAY","JUN","July","August","September"]

    minuteNow = fullDate.getMinutes();

    hourNow = fullDate.getHours();

    weekdayNow = fullDate.getDay()

    
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