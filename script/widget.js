var fullDate = new Date();

const weekDays = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
const months = ["JAN","FEB","MAR","APR","MAY","JUN","July"]

var hourNow = fullDate.getHours();

var weekdayNow = fullDate.getDay()
weekdayNow = weekDays[weekdayNow]

var monthNow = fullDate.getMonth()
monthNow = months[monthNow]

var dateNow = fullDate.getDate();

function widgets(){
    var a;

    if (hourNow < 9) {
        a = 1;
    } else {
        a = 0;
    }

    weatherWidget(a);
    todayWidget(a);
    displayWidgets(a);
}


function weatherWidget(a) {
    var cloudyIcon = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30"><path d="M18 5a8 8 0 00-7.121094 4.3691406A5 5 0 009 9a5 5 0 00-4.9492188 4.333984A6 6 0 000 19a6 6 0 006 6h18a6 6 0 006-6 6 6 0 00-4.017578-5.654297A8 8 0 0026 13a8 8 0 00-8-8z"/></svg>'
    var sunnyIcon = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30"><path d="M14.984375.98632812A1.0001 1.0001 0 0014 2v3a1.0001 1.0001 0 102 0V2A1.0001 1.0001 0 0014.984375.98632812zm-9.1875 3.81249998a1.0001 1.0001 0 00-.6953125 1.7167969l2.1210937 2.1210938a1.0001 1.0001 0 101.4140626-1.4140626L6.515625 5.1015625a1.0001 1.0001 0 00-.71875-.3027344zm18.375 0a1.0001 1.0001 0 00-.6875.3027344l-2.121094 2.1210937a1.0001 1.0001 0 101.414063 1.4140626l2.121094-2.1210938a1.0001 1.0001 0 00-.726563-1.7167969zM15 8a7 7 0 00-7 7 7 7 0 007 7 7 7 0 007-7 7 7 0 00-7-7zM2 14a1.0001 1.0001 0 100 2h3a1.0001 1.0001 0 100-2H2zm23 0a1.0001 1.0001 0 100 2h3a1.0001 1.0001 0 100-2h-3zM7.9101562 21.060547a1.0001 1.0001 0 00-.6875.302734l-2.1210937 2.121094a1.0001 1.0001 0 101.4140625 1.414063l2.1210938-2.121094a1.0001 1.0001 0 00-.7265626-1.716797zm14.1503908 0a1.0001 1.0001 0 00-.697266 1.716797l2.121094 2.121094a1.0001 1.0001 0 101.414063-1.414063l-2.121094-2.121094a1.0001 1.0001 0 00-.716797-.302734zm-7.076172 2.925781A1.0001 1.0001 0 0014 25v3a1.0001 1.0001 0 102 0v-3a1.0001 1.0001 0 00-1.015625-1.013672z"/></svg>'




    // var lat = 22.26156301003138;
    // var lon = 114.132237619038;

    // navigator.geolocation.getCurrentPosition((position) => {
    //     long = position
    // }

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
            var lat = position.coords.latitude;
            var lon = position.coords.longitude;
            const api = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=2c11424ffd5a3ed7be3f73e6b9960fbe`;
            fetch(api)
                .then(response => response.json())
                .then(data => {
                    var cityValue = data['name'];
                    var tempValue = data['main']['temp'];
                    var iconValue = data['weather'][0]['main'];
                    console.log(data)
                    var hiValue = data['main']['temp_max'];
                    var loValue = data['main']['temp_min'];

                    tempValue = Math.round(tempValue);
                    hiValue = Math.round(hiValue);
                    loValue = Math.round(loValue);

                    var hiloValue = 'H:' + hiValue + '&#176 ' + 'L:' + loValue + '&#176';

                    if (a == 1) {
                        // console.log(hiloValue)

                        var widget = document.getElementById("today-widget");
                        // var city = document.getElementById("today-location")
                        // var temp = document.getElementById("today-temp")
                        var icon = document.getElementById("today-icon")
                        var hilo = document.getElementById("today-hilo")

                        // iconValue = "rain"
                        switch (iconValue) {
                            case 'Clouds':
                                icon.innerHTML = cloudyIcon;
                                break;
                            case 'Sunny':
                                icon.innerHTML = sunnyIcon;
                                break;
                            default:
                                console.log("error: no weather icon found");
                                console.log(iconValue)
                        }

                        if ((hourNow > 18) || (hourNow < 6)) {
                            iconValue = "Night"
                        }


                        switch (iconValue) {
                            case 'Clouds':
                                widget.classList = "today-widget-container cloudy"
                                break;
                            case 'Sunny':
                                widget.classList = "today-widget-container sunny"
                                break;
                            case 'Night':
                                widget.classList = "today-widget-container night"
                                break;
                            default:
                                widget.classList = "today-widget-container"
                                console.log("error: no weather icon found");
                                console.log(iconValue)
                        }

                        hilo.innerHTML = hiloValue
                        // testing.innerHTML = "hiloValue"
                        // temp.innerHTML = tempValue + "&#176C"
                        
                    } else {
                        var widget = document.getElementById("weather-widget");
                        var city = document.getElementById("weather-location")
                        var temp = document.getElementById("weather-temp")
                        var icon = document.getElementById("weather-icon")

                        switch (iconValue) {
                            case 'Clouds':
                                icon.innerHTML = cloudyIcon;
                                break;
                            case 'Sunny':
                                icon.innerHTML = sunnyIcon;
                                break;
                            default:
                                console.log("error: no weather icon found");
                                console.log(iconValue)
                        }

                        if ((hourNow > 18) || (hourNow < 6)) {
                            iconValue = "Night"
                        }


                        switch (iconValue) {
                            case 'Clouds':
                                widget.classList = "widget-container cloudy"
                                break;
                            case 'Sunny':
                                widget.classList = "widget-container sunny"
                                break;
                            case 'Night':
                                widget.classList = "widget-container night"
                                break;
                            default:
                                widget.classList = "today-widget-container"
                                console.log("error: no weather icon found");
                                console.log(iconValue)
                        }

                        city.innerHTML = cityValue
                        temp.innerHTML = tempValue + "&#176C"
                        // console.log(data)
                    }
                })
        })
    }
}

function todayWidget(a) {
    if (a == 1) {
        var widget = document.getElementById("today-widget");
        var weekday = document.getElementById("today-weekday")
        var date = document.getElementById("today-date")

        weekday.innerHTML = weekdayNow
        date.innerHTML = dateNow + " " + monthNow

    } else {
        var widget = document.getElementById("cal-widget");
        var weekday = document.getElementById("cal-weekday")
        var date = document.getElementById("cal-date")

        widget.classList = "widget-container"
        weekday.innerHTML = weekdayNow
        date.innerHTML = dateNow
        // console.log(a)
    }
    
    // var temp = document.getElementById("weather-temp")
    // var icon = document.getElementById("weather-icon")

    




    
    // console.log(weekdayNow)

    


    // // monthNow = fullDate.getMonth()
    // // monthNow = months[monthNow]


    // hourNow = fullDate.getHours();
    // minsNow = fullDate.getMinutes();
    // var timeNow=('0'  + hourNow).slice(-2)+':'+('0' + minsNow).slice(-2);


    // // timeNow = `${hourNow}:${minsNow}`;
    // // timeNow = "00:00";
    
    // document.getElementById("date-text").innerHTML = dayNow
    // // document.getElementById("date-month").innerHTML = monthNow
    // document.getElementById("date-number").innerHTML = dateNow
    // document.getElementById("time-now").innerHTML = timeNow
}

function displayWidgets(a) {
    if (a == 1) {
        document.getElementById("weather-widget").classList = "hidden-always";
        document.getElementById("cal-widget").classList = "hidden-always";
    } else {
        document.getElementById("today-widget").classList = "hidden-always";
    }
}



// function showWidgets(){
//     console.log("bruh")
//     var widget1 = document.getElementById("weather-widget");
//     var widget2 = document.getElementById("cal-widget");
//     console.log("bruh")

//     widget1.classList = "widget-container";
//     widget2.classList = "widget-container";
//     console.log("bruh")

// }