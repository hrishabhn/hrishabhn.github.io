


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

function smartCards(){

    const successCallback = (position) => {


        var fullDate = new Date();
        var hourNow = fullDate.getHours();
        // console.log(hourNow);

        var afternoon = (hourNow > 11) && (hourNow < 15);
        var evening = (hourNow > 16) && (hourNow < 21);
        var night = (hourNow > 20) || (hourNow < 6);

        var lat = position.coords.latitude;
        var lon = position.coords.longitude;
        // console.log(lat)
        // console.log(lon)

        const pokFuLam = (lat > 22.252) && (lat < 22.273) && (lon > 114.121) && (lon < 114.135);
        const cyberport = (lat > 22.260) && (lat < 22.264) && (lon > 114.127) && (lon < 114.131);
        const home = (lat > 22.260) && (lat < 22.264) && (lon > 114.131) && (lon < 114.135);

        const tuenMun = (lat > 22.37) && (lat < 22.41) && (lon > 113.96) && (lon < 113.985);
        const work = (lat > 22.3905) && (lat < 22.392) && (lon > 113.9695) && (lon < 113.971);
       
        const ktown = (lat > 22.279) && (lat < 22.285) && (lon > 114.125) && (lon < 114.130);
        const central = (lat > 22.281) && (lat < 22.290) && (lon > 114.156) && (lon < 114.159);
        const causeway = (lat > 22.270) && (lat < 22.283) && (lon > 114.180) && (lon < 114.190);
        const westKowloon = (lat > 22.298) && (lat < 22.308) && (lon > 114.154) && (lon < 114.165);
        const tsimShaTsui = (lat > 22.292) && (lat < 22.303) && (lon > 114.165) && (lon < 114.177);


        // 22.273,114.121 top left
        // 22.252,114.135 borrom right


        var district = "Hong Kong"

        if (home) {
            document.getElementById("smarthome-card").className = "smart-card-show content-container hidden-desktop"
            document.getElementById("transport-card").className = "smart-card-hide content-container hidden-desktop"
            // district = "Baguio"
            // console.log("at home")
        } else{
            document.getElementById("smarthome-card").className = "smart-card-hide content-container hidden-desktop"
            document.getElementById("transport-card").className = "smart-card-show content-container hidden-desktop"
            // console.log("not at home")
        }

        if (work) {
            document.getElementById("office-card").className = "smart-card-show content-container"
            // district = "Office"
            // console.log("at office")
        } else{
            document.getElementById("office-card").className = "smart-card-hide content-container"
            // console.log("not at office")
        }

        if (pokFuLam) {
            district = "Pok Fu Lam"
        }
        if (cyberport) {
            district = "Cyberport"
        }
        if (home) {
            district = "Baguio Villa"
        }

        if (tuenMun) {
            district = "Tuen Mun"
        }
        if (work) {
            district = "Office"
        }


        if (ktown) {
            district = "Kennedy Town"
        }
        if (central) {
            district = "Central"
        }
        if (causeway) {
            district = "Causeway Bay"
        }
        if (westKowloon) {
            district = "West Kowloon"
        }
        if (tsimShaTsui) {
            district = "Tsim Sha Tsui"
        }
        
        





        if ((afternoon) && (!home)) {
            document.getElementById("food-card").className = "smart-card-show content-container";
            // console.log("afternoon");
        } else{
            document.getElementById("food-card").className = "smart-card-hide content-container";
            // console.log("not afternoon");
        }
        if ((evening) && (!home)) {
            document.getElementById("food-card").className = "smart-card-show content-container";
            // console.log("evening");
        } else{
            document.getElementById("food-card").className = "smart-card-hide content-container";
            // console.log("not evening");
        }
        if ((night) && (home)) {
            document.getElementById("sleep-card").className = "smart-card-show content-container hidden-desktop";
            // console.log("night");
        } else{
            document.getElementById("sleep-card").className = "smart-card-hide content-container hidden-desktop";
            // console.log("not night");
        }

        // district = "West Lafayette"
        document.getElementById("district").innerHTML = district;

    }

    



    navigator.geolocation.getCurrentPosition(successCallback);
    
    // var test = Geolocation.getCurrentPosition;
    // console.log(Geolocation)
    // navigator.geolocation.getCurrentPosition();
    // console.log(position.coords.latitude)
    

    // x.innerHTML = "Latitude: " + lat + "<br>Longitude: " + lon;

    
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