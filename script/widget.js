
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
            const apikey = '2c11424ffd5a3ed7be3f73e6b9960fbe'
            // const api = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apikey}`;
            const api = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=metric&appid=${apikey}`;
            fetch(api)
                .then(response => response.json())
                .then(data => {
                    // console.log(data)

                    const weatherIcons = {
                        fewClouds: '<svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30"><path d="M8.984 1.986a1 1 0 00-.295.05 1 1 0 00-.091.034 1 1 0 00-.09.045 1 1 0 00-.237.186 1 1 0 00-.17.244 1 1 0 00-.09.285A1 1 0 008 3v1a1 1 0 00.074.39 1 1 0 00.041.09 1 1 0 00.051.086 1 1 0 00.06.082 1 1 0 00.067.073 1 1 0 00.074.068 1 1 0 00.08.059 1 1 0 00.272.127 1 1 0 00.197.035 1 1 0 00.2-.002 1 1 0 00.097-.018 1 1 0 00.19-.06 1 1 0 00.173-.1 1 1 0 00.361-.467A1 1 0 0010 4V3a1 1 0 00-.004-.1 1 1 0 00-.014-.1 1 1 0 00-.056-.19 1 1 0 00-.041-.09 1 1 0 00-.112-.168 1 1 0 00-.066-.073 1 1 0 00-.074-.068 1 1 0 00-.08-.059 1 1 0 00-.086-.05 1 1 0 00-.186-.077 1 1 0 00-.097-.023 1 1 0 00-.2-.016zM3.332 4.332a1 1 0 00-.695 1.719l.707.707a1 1 0 101.414-1.414l-.707-.707a1 1 0 00-.719-.305zm11.305.002a1 1 0 00-.1.008 1 1 0 00-.098.017 1 1 0 00-.095.028 1 1 0 00-.094.037 1 1 0 00-.088.047 1 1 0 00-.213.166l-.707.707a1 1 0 00-.18.236 1 1 0 00-.078.186 1 1 0 000 .59 1 1 0 00.036.093 1 1 0 00.043.09 1 1 0 00.052.086 1 1 0 00.463.367 1 1 0 00.096.031 1 1 0 00.096.022 1 1 0 00.1.014 1 1 0 00.099.002 1 1 0 00.295-.055 1 1 0 00.093-.037 1 1 0 00.25-.164 1 1 0 00.05-.047l.706-.707a1 1 0 00.069-.074 1 1 0 00.113-.165 1 1 0 00.117-.38 1 1 0 000-.2 1 1 0 00-.074-.289 1 1 0 00-.043-.09 1 1 0 00-.053-.085 1 1 0 00-.129-.153 1 1 0 00-.074-.066 1 1 0 00-.168-.108 1 1 0 00-.187-.072 1 1 0 00-.098-.021 1 1 0 00-.2-.014zM9 7a4 4 0 00-4 4 3.994 3.994 0 003.111 3.893 6.46 6.46 0 014.73-2.836c.094-.338.159-.689.159-1.057a4 4 0 00-4-4zm-8 3a1 1 0 100 2h1a1 1 0 100-2H1zm19.5 1a6.492 6.492 0 00-5.617 3.24A4.45 4.45 0 0013.5 14c-2.405 0-4.353 1.893-4.477 4.268C7.268 18.88 6 20.535 6 22.5a4.5 4.5 0 004.5 4.5h15a4.5 4.5 0 004.5-4.5c0-1.974-1.28-3.634-3.049-4.24.03-.25.049-.502.049-.76a6.5 6.5 0 00-6.5-6.5zM4.031 14.94a1 1 0 00-.295.054 1 1 0 00-.181.082 1 1 0 00-.084.055 1 1 0 00-.127.111l-.707.707a1 1 0 00-.182.239 1 1 0 00-.117.58 1 1 0 00.016.097 1 1 0 00.058.192 1 1 0 00.043.09 1 1 0 00.113.166 1 1 0 00.069.072 1 1 0 00.074.066 1 1 0 00.082.059 1 1 0 00.086.049 1 1 0 00.092.04 1 1 0 00.193.053 1 1 0 00.1.012 1 1 0 00.199-.006A1 1 0 004 17.412a1 1 0 00.05-.049l.708-.707a1 1 0 00.258-.422 1 1 0 00.039-.195 1 1 0 00.006-.1 1 1 0 00-.006-.1 1 1 0 00-.014-.099 1 1 0 00-.06-.19 1 1 0 00-.3-.394 1 1 0 00-.081-.058 1 1 0 00-.178-.09 1 1 0 00-.291-.067 1 1 0 00-.1-.002z"/></svg>',
                        clearSky: '<svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30"><path d="M14.984.986A1 1 0 0014 2v3a1 1 0 102 0V2A1 1 0 0014.984.986zM5.797 4.8a1 1 0 00-.695 1.717l2.12 2.12a1 1 0 101.415-1.413L6.516 5.102a1 1 0 00-.72-.303zm18.375 0a1 1 0 00-.688.303l-2.12 2.12a1 1 0 101.413 1.415l2.121-2.121a1 1 0 00-.726-1.717zM15 8a7 7 0 00-7 7 7 7 0 007 7 7 7 0 007-7 7 7 0 00-7-7zM2 14a1 1 0 100 2h3a1 1 0 100-2H2zm23 0a1 1 0 100 2h3a1 1 0 100-2h-3zM7.91 21.06a1 1 0 00-.687.303l-2.121 2.121a1 1 0 101.414 1.414l2.12-2.12a1 1 0 00-.726-1.717zm14.15 0a1 1 0 00-.697 1.717l2.121 2.121a1 1 0 101.414-1.414l-2.12-2.12a1 1 0 00-.717-.303zm-7.076 2.926A1 1 0 0014 25v3a1 1 0 102 0v-3a1 1 0 00-1.016-1.014z"/></svg>',
                        error: '<svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 511.998 511.998"><path d="M505.743 6.249c-6.08-6.101-15.211-7.893-23.168-4.672l-469.333 192C4.474 197.182-.881 206.121.122 215.55c.981 9.429 8.064 17.067 17.387 18.773l220.139 40.021 40.043 220.139c1.685 9.323 9.323 16.405 18.752 17.408.747.064 1.493.107 2.219.107 8.576 0 16.448-5.184 19.755-13.269l192-469.333c3.241-7.937 1.406-17.067-4.674-23.147z"/></svg>',
                    }

                    var hourlyData = data['hourly']
                    var currentData = data['current']

                    // console.log(hourlyData[0].weather[0])
                    
                    var fullDates = []
                    var hours = []
                    var conditions = []
                    var currentIcons = []
                    var temps = []

                    for (i = 0; i < 6; i++) {
                        fullDates[i] = new Date(hourlyData[i].dt * 1000)
                        hours[i] = fullDates[i].getHours()

                        if (hours[i] > 12) {
                            hours[i] -= 12
                            hours[i] = `${hours[i]}PM` 
                        } else {
                            hours[i] = `${hours[i]}AM`
                        }

                        conditions[i] = hourlyData[i].weather[0]

                        switch (conditions[i].description) {
                            case 'clear sky':
                                currentIcons[i] = weatherIcons.clearSky
                                break
                            case 'few clouds':
                                currentIcons[i] = weatherIcons.fewClouds
                                break
                            default:
                                currentIcons[i] = weatherIcons.error
                        }


                        temps[i] = Math.round(hourlyData[i].temp)
                    }

                    console.log(conditions)



                    var htmlString = ''
                    var itemHTML

                    for (i = 1; i < 6; i++) {
                        itemHTML = `
                        <div class="weather-item vstack">
                            <p class="weather-item-time">${hours[i]}</p>
                            <div class="weather-item-icon">${currentIcons[i]}</div>
                            <p class="weather-item-temp">${temps[i]}&#176</p>
                        </div>`

                        htmlString = `${htmlString}${itemHTML}`

                    }

                    const weatherWidgetElement = document.getElementById('weather-widget-content')
                    weatherWidgetElement.innerHTML = htmlString

                    // Rest
                    var tempNow = Math.round(currentData.temp)
                    // console.log(tempNow)

                    var tempElement = document.getElementById('weather-temp')
                    tempElement.innerHTML = tempNow + '&#176'








                    // console.log(htmlString)

                    // tempValue = Math.round();
                    // hiValue = Math.round(hiValue);
                    // loValue = Math.round(loValue);

                    // var hiloValue = 'H:' + hiValue + '&#176 ' + 'L:' + loValue + '&#176';

                    // var weather = document.getElementById("weather")
                    // weatherValue = weatherValue.charAt(0).toUpperCase() + weatherValue.slice(1);

                    // weather.innerHTML = tempValue + "&#176C, " + weatherValue






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