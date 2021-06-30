


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

// var x = document.getElementById("demo");

// function getLocation() {
//   if (navigator.geolocation) {
//     navigator.geolocation.getCurrentPosition(showPosition);
//   } else { 
//     x.innerHTML = "Geolocation is not supported by this browser.";
//   }
// }

function locationSmartCards(){

    const successCallback = (position) => {
        var lat = position.coords.latitude;
        var lon = position.coords.longitude;
        console.log(lat)
        console.log(lon)

        // HOME
        // var lat = 22.262;
        // var lon = 114.133;

        // Tuen Mun
        // var lat = 22.391
        // var lon = 113.970

        if ((lat > 22.260) && (lat < 22.264) && (lon > 114.131) && (lon < 114.135)) {
            document.getElementById("smarthome-card").className = "smart-card-show content-container"
            console.log("at home")
        } else{
            document.getElementById("smarthome-card").className = "smart-card-hide content-container"
            console.log("not at home")
        }

        if ((lat > 22.389) && (lat < 22.393) && (lon > 113.968) && (lon < 113.972)) {
            document.getElementById("office-card").className = "smart-card-show content-container"
            console.log("at office")
        } else{
            document.getElementById("office-card").className = "smart-card-hide content-container"
            console.log("not at office")
        }
    }

    navigator.geolocation.getCurrentPosition(successCallback);
    
    // var test = Geolocation.getCurrentPosition;
    // console.log(Geolocation)
    // navigator.geolocation.getCurrentPosition();
    // console.log(position.coords.latitude)
    

    // x.innerHTML = "Latitude: " + lat + "<br>Longitude: " + lon;

    
}

function timeSmartCards(){
    var fullDate = new Date();

    var hourNow = fullDate.getHours();
    // hourNow = 8;
    console.log(hourNow);

    if ((hourNow > 6) && (hourNow < 10)) {
        document.getElementById("morning-card-1").className = "smart-card-show content-container";
        document.getElementById("morning-card-2").className = "smart-card-show content-container";
        console.log("morning");
    } else{
        document.getElementById("morning-card-1").className = "smart-card-hide content-container";
        document.getElementById("morning-card-2").className = "smart-card-hide content-container";
        console.log("not morning");
    }

    if ((hourNow > 11) && (hourNow < 15)) {
        document.getElementById("afternoon-card").className = "smart-card-show content-container";
        console.log("afternoon");
    } else{
        document.getElementById("afternoon-card").className = "smart-card-hide content-container";
        console.log("not afternoon");
    }
    if ((hourNow > 16) && (hourNow < 21)) {
        document.getElementById("evening-card").className = "smart-card-show content-container";
        console.log("afternoon");
    } else{
        document.getElementById("evening-card").className = "smart-card-hide content-container";
        console.log("not afternoon");
    }

    if ((hourNow > 21) || (hourNow < 6)) {
        document.getElementById("night-card").className = "smart-card-show content-container";
        console.log("night");
    } else{
        document.getElementById("night-card").className = "smart-card-hide content-container";
        console.log("not night");
    }





}

function lights(){
    if (document.getElementById("light-tray").classList == "smarthome-wrapper-hide smarthome-wrapper") {
        document.getElementById("light-tray").classList = "smarthome-wrapper-show smarthome-wrapper"
    } else{
        document.getElementById("light-tray").classList = "smarthome-wrapper-hide smarthome-wrapper"
    }
}
function appleTV(){
    if (document.getElementById("appletv-tray").classList == "smarthome-wrapper-hide smarthome-wrapper") {
        document.getElementById("appletv-tray").classList = "smarthome-wrapper-show smarthome-wrapper"
    } else{
        document.getElementById("appletv-tray").classList = "smarthome-wrapper-hide smarthome-wrapper"
    }
    // document.getElementById("light-tray").classList.toggle("smarthome-wrapper-hide")
}


// 22.260, 114.131
// 22.264, 114.135


// function showPosition(lat,lon) {
  
// }

// x.innerHTML = "Latitude: ";