function date(){
    var fullDate = new Date();

    var weekDays = ["Sunday","Mon","Tue","Wed","Thu","Fri","Sat"]
    var months = ["Jan","Feb","Mar","Apr","May","June","July"]

    dayNow = fullDate.getDay()
    dayNow = weekDays[dayNow]

    monthNow = fullDate.getMonth()
    monthNow = months[monthNow]

    dateNow = fullDate.getDate()

    
    document.getElementById("day").innerHTML = dayNow
    document.getElementById("month").innerHTML = monthNow
    document.getElementById("date").innerHTML = dateNow
}