


function date(){
    var fullDate = new Date();

    // var weekDays = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]

    var weekDays = ["SUN","MON","TUE","WED","THU","FRI","SAT"]
    // var months = ["JAN","FEB","MAR","APR","MAY","JUN","JUL"]

    dayNow = fullDate.getDay()
    dayNow = weekDays[dayNow]

    // monthNow = fullDate.getMonth()
    // monthNow = months[monthNow]

    dateNow = fullDate.getDate()

    
    document.getElementById("date-text").innerHTML = dayNow
    // document.getElementById("date-month").innerHTML = monthNow
    document.getElementById("date-number").innerHTML = dateNow

    position = getCurrentPosition()
    latitude = position.coords.latitude
    // latitude = "300"


    document.getElementById("test").innerHTML = latitude
}

// let apiKey = '****************************';
// let city = 'portland';
// let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`

// api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}