
function todayWidget(){
    weatherWidget();
    calWidget();
    timeWidget(hourNow,minuteNow)
    dateWidget()
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






function weatherWidget() {
    // var cloudyIcon = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30"><path d="M18 5a8 8 0 00-7.121094 4.3691406A5 5 0 009 9a5 5 0 00-4.9492188 4.333984A6 6 0 000 19a6 6 0 006 6h18a6 6 0 006-6 6 6 0 00-4.017578-5.654297A8 8 0 0026 13a8 8 0 00-8-8z"/></svg>'
    // var sunnyIcon = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30"><path d="M14.984375.98632812A1.0001 1.0001 0 0014 2v3a1.0001 1.0001 0 102 0V2A1.0001 1.0001 0 0014.984375.98632812zm-9.1875 3.81249998a1.0001 1.0001 0 00-.6953125 1.7167969l2.1210937 2.1210938a1.0001 1.0001 0 101.4140626-1.4140626L6.515625 5.1015625a1.0001 1.0001 0 00-.71875-.3027344zm18.375 0a1.0001 1.0001 0 00-.6875.3027344l-2.121094 2.1210937a1.0001 1.0001 0 101.414063 1.4140626l2.121094-2.1210938a1.0001 1.0001 0 00-.726563-1.7167969zM15 8a7 7 0 00-7 7 7 7 0 007 7 7 7 0 007-7 7 7 0 00-7-7zM2 14a1.0001 1.0001 0 100 2h3a1.0001 1.0001 0 100-2H2zm23 0a1.0001 1.0001 0 100 2h3a1.0001 1.0001 0 100-2h-3zM7.9101562 21.060547a1.0001 1.0001 0 00-.6875.302734l-2.1210937 2.121094a1.0001 1.0001 0 101.4140625 1.414063l2.1210938-2.121094a1.0001 1.0001 0 00-.7265626-1.716797zm14.1503908 0a1.0001 1.0001 0 00-.697266 1.716797l2.121094 2.121094a1.0001 1.0001 0 101.414063-1.414063l-2.121094-2.121094a1.0001 1.0001 0 00-.716797-.302734zm-7.076172 2.925781A1.0001 1.0001 0 0014 25v3a1.0001 1.0001 0 102 0v-3a1.0001 1.0001 0 00-1.015625-1.013672z"/></svg>'

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
            var lat = position.coords.latitude;
            var lon = position.coords.longitude;
            const api = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=2c11424ffd5a3ed7be3f73e6b9960fbe`;
            fetch(api)
                .then(response => response.json())
                .then(data => {
                    // var cityValue = data['name'];
                    var tempValue = data['main']['temp'];
                    var weatherValue = data['weather'][0]['description'];
                    // console.log(weatherValue)
                    var hiValue = data['main']['temp_max'];
                    var loValue = data['main']['temp_min'];
                    // console.log(data)

                    tempValue = Math.round(tempValue);
                    hiValue = Math.round(hiValue);
                    loValue = Math.round(loValue);

                    // var hiloValue = 'H:' + hiValue + '&#176 ' + 'L:' + loValue + '&#176';

                    var weather = document.getElementById("weather")
                    // weatherValue = weatherValue.charAt(0).toUpperCase() + weatherValue.slice(1);

                    weather.innerHTML = tempValue + "&#176C, " + weatherValue






                    // var widget = document.getElementById("today-widget");
                    // var city = document.getElementById("today-location")
                    // var temp = document.getElementById("today-temp")
                    // var icon = document.getElementById("today-icon")
                    // var hilo = document.getElementById("today-hilo")


                    // if ((hourNow > 18) || (hourNow < 6)) {
                    //     iconValue = "Night"
                    // }

                    // switch (iconValue) {
                    //     case 'Clouds':
                    //         widget.classList = "today-widget-container cloudy"
                    //         break;
                    //     case 'Sunny':
                    //         widget.classList = "today-widget-container sunny"
                    //         break;
                    //     case 'Night':
                    //         widget.classList = "today-widget-container night"
                    //         break;
                    //     default:
                    //         widget.classList = "today-widget-container indigo-gradient"
                    //         // console.log("error: no weather icon found");
                    //         // console.log(iconValue)
                    // }

                    // hilo.innerHTML = hiloValue
                    // temp.innerHTML = tempValue + "&#176"                    
                })
        })
    }
}

function calWidget() {
    document.getElementById("date-now").innerHTML = weekdayNow + ", " + dateNow + " " + monthNow
    // var weekday = document.getElementById("today-weekday")
    // var date = document.getElementById("today-date")

    // weekday.innerHTML = weekdayNow
    // date.innerHTML = dateNow + " " + monthNow
}

function timeWidget(hour,minute) {
    // minute = 0
    // hour = 0

    var ampm = 'am'

    if (hour > 12) {
        hour -= 12
        ampm = 'pm'
    }

    if (minute < 10) {
        minute = `0${minute}`
    }
    if (hour == 0) {
        hour = '12'
    }

    document.getElementById('navbar-time').innerHTML = `${hour}:${minute}${ampm}`
}

function dateWidget() {
    document.getElementById('navbar-date').innerHTML = `${weekdayNow}, ${dateNow} ${monthNow}`
}


var sideModal = document.getElementById("side-popup-modal");

function popupSideShow() {
    sideModal.className = "side-modal side-popup-open";
    // popupAllShow()
}
function popupSideHide() {
    sideModal.className = "side-modal side-popup-closed";
    // popupAllHide()
}