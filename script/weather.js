function weatherWidget() {
    var widget = document.getElementById("weather-widget")
    var city = document.getElementById("weather-location")
    var temp = document.getElementById("weather-temp")
    var icon = document.getElementById("weather-icon")

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
                    var tempValue = data['main']['temp']    
                    var iconValue = data['weather'][0]['main']

                    tempValue = Math.round(tempValue);

                    switch (iconValue) {
                        case 'Clouds':
                            icon.innerHTML = cloudyIcon;
                            widget.classList = "widget-container hidden-desktop cloudy"
                            break;
                        case 'Sunny':
                            icon.innerHTML = sunnyIcon;
                            widget.classList = "widget-container hidden-desktop sunny"
                            break;
                        default:
                            console.log("error: no weather icon found");
                    }

                    
                    city.innerHTML = cityValue
                    temp.innerHTML = tempValue + "&#176C"
                    // console.log(data)
                })
        })
    }

    

        // const api = `https://api.openweathermap.org/data/2.5/weather?q=Hong%20Kong&appid=2c11424ffd5a3ed7be3f73e6b9960fbe`;






}