


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

function smartCards(userLocale) {
    // console.log(userLocale)
    if (userLocale == "Baguio Villa") {
        document.getElementById("smarthome-card").className = "smart-card-show content-container hidden-desktop"
        document.getElementById("transport-card").className = "smart-card-hide content-container hidden-desktop"
        // userLocale = "Baguio"
        // console.log("at home")
    } else{
        document.getElementById("smarthome-card").className = "smart-card-hide content-container hidden-desktop"
        document.getElementById("transport-card").className = "smart-card-show content-container hidden-desktop"
        // console.log("not at home")
        // console.log(userLocale)

    }

    if (userLocale == "Work") {
        document.getElementById("office-card").className = "smart-card-show content-container"
        // userLocale = "Office"
        // console.log("at office")
    } else{
        document.getElementById("office-card").className = "smart-card-hide content-container"
        // console.log("not at office")
    }


    
    
    if ((timeOfDay == "afternoon") && !(userLocale == "Baguio Villa")) {
        document.getElementById("food-card").className = "smart-card-show content-container";
        // console.log("afternoon");
    } else{
        document.getElementById("food-card").className = "smart-card-hide content-container";
        // console.log("not afternoon");
    }
    if ((timeOfDay == "evening") && !(userLocale == "Baguio Villa")) {
        document.getElementById("food-card").className = "smart-card-show content-container";
        // console.log("evening");
    } else{
        document.getElementById("food-card").className = "smart-card-hide content-container";
        // console.log("not evening");
    }
    if ((timeOfDay == "night") && (userLocale == "Baguio Villa")) {
        document.getElementById("sleep-card").className = "smart-card-show content-container hidden-desktop";
        // console.log("night");
    } else{
        document.getElementById("sleep-card").className = "smart-card-hide content-container hidden-desktop";
        // console.log("not night");
    }
}

function statusBar(show,hide){
    setTimeout(function(){
        document.getElementById("status-box").classList = "status-box status-box-show";
        // console.log("showing")
    },show);
    setTimeout(function(){
        document.getElementById("status-box").classList = "status-box status-box-hide";
        // console.log("hiding")
    },hide);
}

// function timeSmartCards(){


//     if ((hourNow > 11) && (hourNow < 15)) {
//         document.getElementById("afternoon-card").className = "smart-card-show content-container";
//         console.log("afternoon");
//     } else{
//         document.getElementById("afternoon-card").className = "smart-card-hide content-container";
//         console.log("not afternoon");
//     }
//     if ((hourNow > 16) && (hourNow < 21)) {
//         document.getElementById("evening-card").className = "smart-card-show content-container";
//         console.log("evening");
//     } else{
//         document.getElementById("evening-card").className = "smart-card-hide content-container";
//         console.log("not evening");
//     }
//     if ((hourNow > 21) || (hourNow < 6)) {
//         document.getElementById("night-card").className = "smart-card-show content-container";
//         console.log("night");
//     } else{
//         document.getElementById("night-card").className = "smart-card-hide content-container";
//         console.log("not night");
//     }





// }


// function lights(){
//     if (document.getElementById("light-tray").classList == "smarthome-wrapper-hide smarthome-wrapper") {
//         document.getElementById("light-tray").classList = "smarthome-wrapper-show smarthome-wrapper"
//         console.log("at home")
//     } else{
//         document.getElementById("light-tray").classList = "smarthome-wrapper-hide smarthome-wrapper"
//         console.log("not at home")
//     }
// }
// function appleTV(){
//     if (document.getElementById("appletv-tray").classList == "smarthome-wrapper-hide smarthome-wrapper") {
//         document.getElementById("appletv-tray").classList = "smarthome-wrapper-show smarthome-wrapper"
//     } else{
//         document.getElementById("appletv-tray").classList = "smarthome-wrapper-hide smarthome-wrapper"
//     }
//     // document.getElementById("light-tray").classList.toggle("smarthome-wrapper-hide")
// }

// function expandContainer(){
//     if (document.getElementById("expand").classList == "content-container") {
//         document.getElementById("expand").classList = "content-container content-container-expanded"
//         console.log("opening")
//     } else{
//         document.getElementById("expand").classList = "content-container"
//         console.log("closing")
//     }
// }


// 22.260, 114.131
// 22.264, 114.135


// function showPosition(lat,lon) {
  
// }

// x.innerHTML = "Latitude: ";