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
}

// function calendarLog() {
//     console.log(hourNow)
//     console.log(weekdayNow)
// }