


// function date(){
//     var fullDate = new Date();

//     // var weekDays = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]

//     var weekDays = ["SUN","MON","TUE","WED","THU","FRI","SAT"]
//     // var months = ["JAN","FEB","MAR","APR","MAY","JUN","JUL"]

//     dayNow = fullDate.getDay()
//     dayNow = weekDays[dayNow]

//     // monthNow = fullDate.getMonth()
//     // monthNow = months[monthNow]

//     dateNow = fullDate.getDate();

//     hourNow = fullDate.getHours();
//     minsNow = fullDate.getMinutes();
//     var timeNow=('0'  + hourNow).slice(-2)+':'+('0' + minsNow).slice(-2);


//     // timeNow = `${hourNow}:${minsNow}`;
//     // timeNow = "00:00";
    
//     document.getElementById("date-text").innerHTML = dayNow
//     // document.getElementById("date-month").innerHTML = monthNow
//     document.getElementById("date-number").innerHTML = dateNow
//     document.getElementById("time-now").innerHTML = timeNow
// }

    // var x = document.getElementById("demo");

    // getCurrentPosition(showPosition);
      
    
    // function showPosition(position) {
    //     document.getElementById("test").innerHTML = "Latitude: " + position.coords.latitude + 
    //     "<br>Longitude: " + position.coords.longitude;
    // }






    // position = getCurrentPosition();
    // latitude = position.coords.latitude;
    // // latitude = "300"





    // document.getElementById("test").innerHTML = latitude;


// let apiKey = '****************************';
// let city = 'portland';
// let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`

// api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}

// api.openweathermap.org/data/2.5/weather?lat=22.385664283262717&lon=114.18739932759547&appid=2c11424ffd5a3ed7be3f73e6b9960fbe&units=metric&type=accurate&mode=xml
// api.openweathermap.org/data/2.5/find?q=Palo+Alto&units=imperial&type=accurate&mode=xml&APPID=api-key

// fetch('api.openweathermap.org/data/2.5/weather?lat=22.385664283262717&lon=114.18739932759547&appid=2c11424ffd5a3ed7be3f73e6b9960fbe&units=metric&type=accurate')
// .then(data)

var x = document.getElementById("demo");

// function getLocation() {
//   if (navigator.geolocation) {
//     navigator.geolocation.getCurrentPosition(showPosition);
//   } else { 
//     x.innerHTML = "Geolocation is not supported by this browser.";
//   }
// }

function atHome(){

    // navigator.geolocation.getCurrentPosition();
    // console.log(position.coords.latitude)
    // var lat = position.coords.latitude;
    // var lon = position.coords.longitude;
    var lat = 22.262;
    var lon = 114.133;

    // x.innerHTML = "Latitude: " + lat + "<br>Longitude: " + lon;

    if ((lat > 22.260) && (lat < 22.264) && (lon > 114.131) && (lon < 114.135)) {
        document.getElementById("home-card").className = "tap-action-container"
    } else{
        document.getElementById("home-card").className = "tap-action-container hidden-always"
    }
}


// 22.260, 114.131
// 22.264, 114.135


// function showPosition(lat,lon) {
  
// }

// x.innerHTML = "Latitude: ";