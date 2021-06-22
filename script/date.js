


function date(){
    var fullDate = new Date();

    var weekDays = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
    var months = ["JAN","FEB","MAR","APR","MAY","JUN","JUL"]

    dayNow = fullDate.getDay()
    dayNow = weekDays[dayNow]

    monthNow = fullDate.getMonth()
    monthNow = months[monthNow]

    dateNow = fullDate.getDate()

    
    // document.getElementById("day").innerHTML = dayNow
    document.getElementById("date-month").innerHTML = monthNow
    document.getElementById("date-number").innerHTML = dateNow
}