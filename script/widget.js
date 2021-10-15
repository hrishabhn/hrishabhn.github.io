function createWidget(widget) {
    // console.log(widget)
    var cardElement = document.createElement('div')
    cardElement.classList = 'widget-card content1 vstack radius-10'
    cardElement.id = `${widget.id}-widget`



    // Title

    var titleHTML = `
    <div class="widget-title">
        <div class="widget-title-bg ${widget.color}"></div>
        <div class="widget-title-content hstack flex-grow">
            <p class="${widget.color}-fg">${widget.title}</p>
            <div class="spacer"></div>
            <div class="widget-title-icon ${widget.color}-fg">
                ${widget.icon}
            </div>
        </div>
    </div>`


    var titleElement = parser.parseFromString(titleHTML, 'text/xml').firstChild
    // console.log(titleElement)

    cardElement.append(titleElement)



    // Body

    var bodyElement = widget.body()

    cardElement.append(bodyElement)



    // Buttons

    if (widget.buttons) {
        var lineElement = document.createElement('div')
        lineElement.classList = 'hline'
        cardElement.append(lineElement)

        var buttonTrayElement = document.createElement('div')
        buttonTrayElement.classList = 'hstack fill-parent padding-8-10'

        buttonTrayElement.append(createSpacer('scroll'))

        for (let i = 0; i < widget.buttons.length; i++) {
            var buttonElement = document.createElement('a')
            if (widget.buttons[i].primary) {
                buttonElement.classList = `widget-button clickable ${widget.color}`
            } else {
                buttonElement.classList = `widget-button clickable-text ${widget.color}-fg`
            }
            buttonElement.innerHTML = widget.buttons[i].text

            if (widget.buttons[i].action) {
                buttonElement.onclick = function() { widget.buttons[i].action() };
            } else if (widget.buttons[i].link) {
                buttonElement.href = widget.buttons[i].link
            }



            buttonTrayElement.append(buttonElement)

            if (i < widget.buttons.length - 1) {
                buttonTrayElement.append(createSpacer(8))
            }
        }

        cardElement.append(buttonTrayElement)

        // console.log(widget.initial())
        // widget.populate()
    }

    return cardElement
    // console.log(cardElement)
    document.getElementById('widgetbar-content').prepend(cardElement)

    // widget.initial()
    // widget.populate()
}

function countdownCalculate(date) {
    if (!date) {
        return null
    }


    var futureDate = new Date(date).getTime()
    // console.log(futureDate)
    var nowDate = new Date().getTime()
    var distance = futureDate - nowDate
    var past = false

    if (distance < 0) {
        distance = nowDate - futureDate
        past = true
    }
    // console.log(distance)
    // console.log(past)

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    var result

    if (days > 0) {
        result = [days,'days']
    } else if (hours > 0) {
        result = [hours,'hours']
    } else if (minutes > 0) {
        result = [minutes,'minutes']
    } else {
        result = [seconds,'seconds']
    }


    return result
    console.log(string)
}

const weatherWidget = {
    title: 'Weather',
    id: 'weather',
    color: 'cyan',
    icon: '<svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30"><path d="M8.984 1.986a1 1 0 00-.295.05 1 1 0 00-.091.034 1 1 0 00-.09.045 1 1 0 00-.237.186 1 1 0 00-.17.244 1 1 0 00-.09.285A1 1 0 008 3v1a1 1 0 00.074.39 1 1 0 00.041.09 1 1 0 00.051.086 1 1 0 00.06.082 1 1 0 00.067.073 1 1 0 00.074.068 1 1 0 00.08.059 1 1 0 00.272.127 1 1 0 00.197.035 1 1 0 00.2-.002 1 1 0 00.097-.018 1 1 0 00.19-.06 1 1 0 00.173-.1 1 1 0 00.361-.467A1 1 0 0010 4V3a1 1 0 00-.004-.1 1 1 0 00-.014-.1 1 1 0 00-.056-.19 1 1 0 00-.041-.09 1 1 0 00-.112-.168 1 1 0 00-.066-.073 1 1 0 00-.074-.068 1 1 0 00-.08-.059 1 1 0 00-.086-.05 1 1 0 00-.186-.077 1 1 0 00-.097-.023 1 1 0 00-.2-.016zM3.332 4.332a1 1 0 00-.695 1.719l.707.707a1 1 0 101.414-1.414l-.707-.707a1 1 0 00-.719-.305zm11.305.002a1 1 0 00-.1.008 1 1 0 00-.098.017 1 1 0 00-.095.028 1 1 0 00-.094.037 1 1 0 00-.088.047 1 1 0 00-.213.166l-.707.707a1 1 0 00-.18.236 1 1 0 00-.078.186 1 1 0 000 .59 1 1 0 00.036.093 1 1 0 00.043.09 1 1 0 00.052.086 1 1 0 00.463.367 1 1 0 00.096.031 1 1 0 00.096.022 1 1 0 00.1.014 1 1 0 00.099.002 1 1 0 00.295-.055 1 1 0 00.093-.037 1 1 0 00.25-.164 1 1 0 00.05-.047l.706-.707a1 1 0 00.069-.074 1 1 0 00.113-.165 1 1 0 00.117-.38 1 1 0 000-.2 1 1 0 00-.074-.289 1 1 0 00-.043-.09 1 1 0 00-.053-.085 1 1 0 00-.129-.153 1 1 0 00-.074-.066 1 1 0 00-.168-.108 1 1 0 00-.187-.072 1 1 0 00-.098-.021 1 1 0 00-.2-.014zM9 7a4 4 0 00-4 4 3.994 3.994 0 003.111 3.893 6.46 6.46 0 014.73-2.836c.094-.338.159-.689.159-1.057a4 4 0 00-4-4zm-8 3a1 1 0 100 2h1a1 1 0 100-2H1zm19.5 1a6.492 6.492 0 00-5.617 3.24A4.45 4.45 0 0013.5 14c-2.405 0-4.353 1.893-4.477 4.268C7.268 18.88 6 20.535 6 22.5a4.5 4.5 0 004.5 4.5h15a4.5 4.5 0 004.5-4.5c0-1.974-1.28-3.634-3.049-4.24.03-.25.049-.502.049-.76a6.5 6.5 0 00-6.5-6.5zM4.031 14.94a1 1 0 00-.295.054 1 1 0 00-.181.082 1 1 0 00-.084.055 1 1 0 00-.127.111l-.707.707a1 1 0 00-.182.239 1 1 0 00-.117.58 1 1 0 00.016.097 1 1 0 00.058.192 1 1 0 00.043.09 1 1 0 00.113.166 1 1 0 00.069.072 1 1 0 00.074.066 1 1 0 00.082.059 1 1 0 00.086.049 1 1 0 00.092.04 1 1 0 00.193.053 1 1 0 00.1.012 1 1 0 00.199-.006A1 1 0 004 17.412a1 1 0 00.05-.049l.708-.707a1 1 0 00.258-.422 1 1 0 00.039-.195 1 1 0 00.006-.1 1 1 0 00-.006-.1 1 1 0 00-.014-.099 1 1 0 00-.06-.19 1 1 0 00-.3-.394 1 1 0 00-.081-.058 1 1 0 00-.178-.09 1 1 0 00-.291-.067 1 1 0 00-.1-.002z"/></svg>',
    body: function() {
        var bodyElement = document.createElement('div')
        bodyElement.id = `${this.id}-widget-content`
        bodyElement.classList = 'scroll'
        return(bodyElement)
    },
    buttons: [
        {
            primary: false,
            text: 'Settings',
            link: 'weather://',
        },
        {
            primary: true,
            text: 'Open App',
        },
    ],
    initial: function() {
        const parent = document.getElementById(`${this.id}-widget-content`)
        const bodyHTML = `
        <div class="weather-item vstack">
            <p class="weather-item-time">--</p>
            <div class="weather-item-icon">--</div>
            <p class="weather-item-temp">-&#176</p>
        </div>`

        // const bodyElement = parser.parseFromString(bodyHTML, 'text/xml').firstChild

        parent.innerHTML = bodyHTML
    },
    populate: function() {
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
                            sunCloud: '<svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30"><path d="M8.984 1.986a1 1 0 00-.295.05 1 1 0 00-.091.034 1 1 0 00-.09.045 1 1 0 00-.237.186 1 1 0 00-.17.244 1 1 0 00-.09.285A1 1 0 008 3v1a1 1 0 00.074.39 1 1 0 00.041.09 1 1 0 00.051.086 1 1 0 00.06.082 1 1 0 00.067.073 1 1 0 00.074.068 1 1 0 00.08.059 1 1 0 00.272.127 1 1 0 00.197.035 1 1 0 00.2-.002 1 1 0 00.097-.018 1 1 0 00.19-.06 1 1 0 00.173-.1 1 1 0 00.361-.467A1 1 0 0010 4V3a1 1 0 00-.004-.1 1 1 0 00-.014-.1 1 1 0 00-.056-.19 1 1 0 00-.041-.09 1 1 0 00-.112-.168 1 1 0 00-.066-.073 1 1 0 00-.074-.068 1 1 0 00-.08-.059 1 1 0 00-.086-.05 1 1 0 00-.186-.077 1 1 0 00-.097-.023 1 1 0 00-.2-.016zM3.332 4.332a1 1 0 00-.695 1.719l.707.707a1 1 0 101.414-1.414l-.707-.707a1 1 0 00-.719-.305zm11.305.002a1 1 0 00-.1.008 1 1 0 00-.098.017 1 1 0 00-.095.028 1 1 0 00-.094.037 1 1 0 00-.088.047 1 1 0 00-.213.166l-.707.707a1 1 0 00-.18.236 1 1 0 00-.078.186 1 1 0 000 .59 1 1 0 00.036.093 1 1 0 00.043.09 1 1 0 00.052.086 1 1 0 00.463.367 1 1 0 00.096.031 1 1 0 00.096.022 1 1 0 00.1.014 1 1 0 00.099.002 1 1 0 00.295-.055 1 1 0 00.093-.037 1 1 0 00.25-.164 1 1 0 00.05-.047l.706-.707a1 1 0 00.069-.074 1 1 0 00.113-.165 1 1 0 00.117-.38 1 1 0 000-.2 1 1 0 00-.074-.289 1 1 0 00-.043-.09 1 1 0 00-.053-.085 1 1 0 00-.129-.153 1 1 0 00-.074-.066 1 1 0 00-.168-.108 1 1 0 00-.187-.072 1 1 0 00-.098-.021 1 1 0 00-.2-.014zM9 7a4 4 0 00-4 4 3.994 3.994 0 003.111 3.893 6.46 6.46 0 014.73-2.836c.094-.338.159-.689.159-1.057a4 4 0 00-4-4zm-8 3a1 1 0 100 2h1a1 1 0 100-2H1zm19.5 1a6.492 6.492 0 00-5.617 3.24A4.45 4.45 0 0013.5 14c-2.405 0-4.353 1.893-4.477 4.268C7.268 18.88 6 20.535 6 22.5a4.5 4.5 0 004.5 4.5h15a4.5 4.5 0 004.5-4.5c0-1.974-1.28-3.634-3.049-4.24.03-.25.049-.502.049-.76a6.5 6.5 0 00-6.5-6.5zM4.031 14.94a1 1 0 00-.295.054 1 1 0 00-.181.082 1 1 0 00-.084.055 1 1 0 00-.127.111l-.707.707a1 1 0 00-.182.239 1 1 0 00-.117.58 1 1 0 00.016.097 1 1 0 00.058.192 1 1 0 00.043.09 1 1 0 00.113.166 1 1 0 00.069.072 1 1 0 00.074.066 1 1 0 00.082.059 1 1 0 00.086.049 1 1 0 00.092.04 1 1 0 00.193.053 1 1 0 00.1.012 1 1 0 00.199-.006A1 1 0 004 17.412a1 1 0 00.05-.049l.708-.707a1 1 0 00.258-.422 1 1 0 00.039-.195 1 1 0 00.006-.1 1 1 0 00-.006-.1 1 1 0 00-.014-.099 1 1 0 00-.06-.19 1 1 0 00-.3-.394 1 1 0 00-.081-.058 1 1 0 00-.178-.09 1 1 0 00-.291-.067 1 1 0 00-.1-.002z"/></svg>',
                            moonCloud: '<svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30"><path d="M21.984 2.486A1 1 0 0021 3.5V4h-.5a1 1 0 100 2h.5v.5a1 1 0 102 0V6h.5a1 1 0 100-2H23v-.5a1 1 0 00-1.016-1.014zm-13.47 3.56a1 1 0 00-.08.005C5.398 6.339 3 8.889 3 12a5.97 5.97 0 001.617 4.08A4.435 4.435 0 003 19.5 4.5 4.5 0 007.5 24h15a4.5 4.5 0 004.5-4.5c0-1.965-1.268-3.618-3.023-4.232C23.854 12.893 21.906 11 19.5 11c-.486 0-.945.096-1.383.238A6.492 6.492 0 0012.5 8c-1.29 0-2.489.38-3.498 1.03L9 9c0-.524.146-1.01.4-1.46a1 1 0 00-.886-1.493zm17.47 1.94A1 1 0 0025 9a1 1 0 100 2 1 1 0 102 0 1 1 0 100-2 1 1 0 00-1.016-1.014zm-18.847.508C7.116 8.674 7 8.814 7 9c0 2.75 2.25 5 5 5 .187 0 .325-.116.506-.137A3.937 3.937 0 019 16c-2.22 0-4-1.78-4-4 0-1.54.868-2.843 2.137-3.506z"/></svg>',
                            sun: '<svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30"><path d="M14.984.986A1 1 0 0014 2v3a1 1 0 102 0V2A1 1 0 0014.984.986zM5.797 4.8a1 1 0 00-.695 1.717l2.12 2.12a1 1 0 101.415-1.413L6.516 5.102a1 1 0 00-.72-.303zm18.375 0a1 1 0 00-.688.303l-2.12 2.12a1 1 0 101.413 1.415l2.121-2.121a1 1 0 00-.726-1.717zM15 8a7 7 0 00-7 7 7 7 0 007 7 7 7 0 007-7 7 7 0 00-7-7zM2 14a1 1 0 100 2h3a1 1 0 100-2H2zm23 0a1 1 0 100 2h3a1 1 0 100-2h-3zM7.91 21.06a1 1 0 00-.687.303l-2.121 2.121a1 1 0 101.414 1.414l2.12-2.12a1 1 0 00-.726-1.717zm14.15 0a1 1 0 00-.697 1.717l2.121 2.121a1 1 0 101.414-1.414l-2.12-2.12a1 1 0 00-.717-.303zm-7.076 2.926A1 1 0 0014 25v3a1 1 0 102 0v-3a1 1 0 00-1.016-1.014z"/></svg>',
                            moon: '<svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30"><path d="M22 21c-6.627 0-12-5.373-12-12 0-1.95.475-3.785 1.3-5.412C6.485 5.148 3 9.665 3 15c0 6.627 5.373 12 12 12 4.678 0 8.72-2.682 10.7-6.588A11.974 11.974 0 0122 21z"/></svg>',

                            error: '<svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 511.998 511.998"><path d="M505.743 6.249c-6.08-6.101-15.211-7.893-23.168-4.672l-469.333 192C4.474 197.182-.881 206.121.122 215.55c.981 9.429 8.064 17.067 17.387 18.773l220.139 40.021 40.043 220.139c1.685 9.323 9.323 16.405 18.752 17.408.747.064 1.493.107 2.219.107 8.576 0 16.448-5.184 19.755-13.269l192-469.333c3.241-7.937 1.406-17.067-4.674-23.147z"/></svg>',
                            rain: '<svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30"><path d="M17.5 3a6.5 6.5 0 00-5.607 3.225A4.5 4.5 0 0010.5 6a4.5 4.5 0 00-4.473 4.031A4.5 4.5 0 002 14.5 4.5 4.5 0 006.5 19h17a4.5 4.5 0 004.5-4.5 4.5 4.5 0 00-4.027-4.473A6.5 6.5 0 0024 9.5 6.5 6.5 0 0017.5 3zM5.984 20.986A1 1 0 005 22v1a1 1 0 102 0v-1a1 1 0 00-1.016-1.014zm12 0A1 1 0 0017 22v1a1 1 0 102 0v-1a1 1 0 00-1.016-1.014zm-6 2A1 1 0 0011 24v1a1 1 0 102 0v-1a1 1 0 00-1.016-1.014zm12 0A1 1 0 0023 24v1a1 1 0 102 0v-1a1 1 0 00-1.016-1.014z"/></svg>',
                        }

                        var hourlyData = data['hourly']
                        var currentData = data['current']


                        var fullDates = []
                        var hours = []
                        var isNight = []
                        var conditions = []
                        var currentIcons = []
                        var temps = []

                        const dataLength = 25

                        for (let i = 1; i < dataLength; i++) {
                            fullDates[i] = new Date(hourlyData[i].dt * 1000)

                            hours[i] = fullDates[i].getHours()

                            if ((hours[i] < 20 ) && (hours[i] > 5)) {
                                isNight[i] = false
                            } else {
                                isNight[i] = true
                            }

                            // console.log(hours[i])
                            // console.log(isNight[i])

                            if (hours[i] > 12) {
                                hours[i] -= 12
                                hours[i] = `${hours[i]}PM`
                            } else {
                                hours[i] = `${hours[i]}AM`
                            }

                            if (hours[i] == '0AM') {
                                hours[i] = '12AM'
                            }

                            conditions[i] = hourlyData[i].weather[0]

                            temps[i] = Math.round(hourlyData[i].temp)
                        }

                        hours[0] = `NOW`
                        conditions[0] = currentData.weather[0]
                        temps[0] = Math.round(currentData.temp)


                        // console.log(conditions)

                        for (let i = 0; i < dataLength; i++) {
                            switch (conditions[i].description) {
                                case 'clear sky':
                                    if (!isNight[i]) {
                                        currentIcons[i] = weatherIcons.sun
                                    } else {
                                        currentIcons[i] = weatherIcons.moon
                                    }
                                    break
                                case 'light rain':
                                case 'moderate rain':
                                    currentIcons[i] = weatherIcons.rain
                                case 'few clouds':
                                case 'broken clouds':
                                case 'scattered clouds':
                                case 'overcast clouds':
                                    if (!isNight[i]) {
                                        currentIcons[i] = weatherIcons.sunCloud
                                    } else {
                                        currentIcons[i] = weatherIcons.moonCloud
                                    }
                                    break
                                default:
                                    currentIcons[i] = weatherIcons.error
                            }
                        }


                        var htmlString = ''
                        var itemHTML

                        htmlString = appendSpacer(htmlString,15)
                        for (let i = 0; i < 25; i++) {

                            if (i > 0) {
                                itemHTML = `
                                <div id="weather-item-${i}" class="weather-item vstack">
                                    <p id="weather-item-time-${i}" class="weather-item-time">${hours[i]}</p>
                                    <div id="weather-item-icon-${i}" class="weather-item-icon">${currentIcons[i]}</div>
                                    <p id="weather-item-temp-${i}" class="weather-item-temp">${temps[i]}&#176</p>
                                </div>`
                            } else {
                                itemHTML = `
                                <div id="weather-item-${i}" class="weather-item now vstack">
                                    <div id="weather-item-icon-${i}" class="weather-item-icon now">${currentIcons[i]}</div>
                                    <p id="weather-item-temp-${i}" class="weather-item-temp now">${temps[i]}&#176</p>
                                    <p class="weather-item-time now">${currentData.weather[0].main}</p>
                                </div>`
                            }

                            htmlString = `${htmlString}${itemHTML}`

                        }

                        htmlString = appendSpacer(htmlString,8)

                        htmlString = hstackEmbed(htmlString)
                        // htmlString = scrollEmbed(htmlString,0)

                        const weatherWidgetElement = document.getElementById('weather-widget-content')
                        weatherWidgetElement.innerHTML = htmlString

                        // Rest
                        var tempNow = Math.round(currentData.temp)
                        // console.log(tempNow)

                        var tempElement = document.getElementById('weather-temp')
                        // tempElement.innerHTML = tempNow + '&#176'





                    }).catch(function() {
                        console.log("error")
                    })
            })
        }
    },
    refresh: true,
}

const localeWidget = {
    title: 'Location',
    id: 'locale',
    color: 'blue',
    icon: '<svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 511.998 511.998"><path d="M505.743 6.249c-6.08-6.101-15.211-7.893-23.168-4.672l-469.333 192C4.474 197.182-.881 206.121.122 215.55c.981 9.429 8.064 17.067 17.387 18.773l220.139 40.021 40.043 220.139c1.685 9.323 9.323 16.405 18.752 17.408.747.064 1.493.107 2.219.107 8.576 0 16.448-5.184 19.755-13.269l192-469.333c3.241-7.937 1.406-17.067-4.674-23.147z"></path></svg>',
    body: function() {
        var bodyElement = document.createElement('div')
        bodyElement.id = `${this.id}-widget-content`
        bodyElement.classList = 'widget-subtitle hstack padding-12-15 fill-parent'
        return(bodyElement)
    },
    buttons: [
        {
            primary: false,
            text: 'Google Maps',
        },
        {
            primary: true,
            text: 'Maps',
            link: 'maps://'
        },
    ],
    initial: function() {
        const parent = document.getElementById(`${this.id}-widget-content`)
        const content = document.createElement('div')
        content.id = 'locale-current'
        content.innerHTML = '--'

        parent.innerHTML = ''
        parent.append(content)
        parent.append(createSpacer('n'))
    },
    populate: function() {
        // while (!globalLocale) {

        // }

    },
    refresh: true,
}

const calWidget = {
    title: 'Calendar',
    id: 'cal',
    color: 'red',
    icon: '<svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 511.998 511.998"><path d="M505.743 6.249c-6.08-6.101-15.211-7.893-23.168-4.672l-469.333 192C4.474 197.182-.881 206.121.122 215.55c.981 9.429 8.064 17.067 17.387 18.773l220.139 40.021 40.043 220.139c1.685 9.323 9.323 16.405 18.752 17.408.747.064 1.493.107 2.219.107 8.576 0 16.448-5.184 19.755-13.269l192-469.333c3.241-7.937 1.406-17.067-4.674-23.147z"></path></svg>',
    body: function() {
        var bodyElement = document.createElement('div')
        bodyElement.id = `${this.id}-widget-content`
        bodyElement.classList = 'hstack padding-12-15 fill-parent'
        return(bodyElement)
    },
    buttons: [
        {
            primary: false,
            text: 'Google Maps',
        },
        {
            primary: true,
            text: 'Open App',
        },
    ],
    initial: function() {
        const parent = document.getElementById(`${this.id}-widget-content`)

        const contentHTML = `
        <div class="widget-image content2 vstack">
            <p id="cal-icon-weekday" class="red-fg">--</p>
            <p id="cal-icon-date">--</p>
        </div>
        <div class="spacer-10"></div>
        <p id="date-current" class="widget-subtitle">--</p>
        <div class="spacer-n"></div>
        `

        parent.innerHTML = contentHTML
    },
    populate: function() {
        document.getElementById('cal-icon-weekday').innerHTML = weekDays.short[weekdayNow]
        document.getElementById('cal-icon-date').innerHTML = dateNow
        document.getElementById('date-current').innerHTML = weekDays.long[weekdayNow] + ", " + dateNow + " " + monthNow
    },
    refresh: true,
}

const userWidget = {
    title: 'User',
    id: 'user',
    color: 'green',
    icon: '<svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 45.532 45.532"><path d="M22.766.001C10.194.001 0 10.193 0 22.766s10.193 22.765 22.766 22.765c12.574 0 22.766-10.192 22.766-22.765S35.34.001 22.766.001zm0 6.807a7.53 7.53 0 11.001 15.06 7.53 7.53 0 01-.001-15.06zm-.005 32.771a16.708 16.708 0 01-10.88-4.012 3.209 3.209 0 01-1.126-2.439c0-4.217 3.413-7.592 7.631-7.592h8.762c4.219 0 7.619 3.375 7.619 7.592a3.2 3.2 0 01-1.125 2.438 16.702 16.702 0 01-10.881 4.013z"/></svg>',
    body: function() {
        var bodyElement = document.createElement('div')
        bodyElement.id = `${this.id}-widget-content`
        bodyElement.classList = 'hstack padding-12-15 fill-parent'
        return(bodyElement)
    },
    buttons: [
        {
            primary: false,
            text: 'New',
        },
        {
            primary: true,
            text: 'Switch User',
            action: function() { userSelectOpen() },
        },
    ],
    initial: function() {
        const parent = document.getElementById(`${this.id}-widget-content`)

        const contentHTML = `
        <div id="user-current-icon"></div>

        <div class="spacer-10"></div>
        <p id="user-current-name" class="widget-subtitle">--</p>
        <div class="spacer"></div>
        `

        parent.innerHTML = contentHTML
    },
    populate: function() {

    },
    refresh: false,
}

const countdownData = [
    {
        name: 'Halloween',
        date: 'Oct 31, 2021',
    },
    {
        name: 'Thanksgiving',
        date: 'Nov 24, 2021',
    },
    {
        name: 'Christmas',
        date: 'Dec 18, 2021',
    },
    {
        name: 'Madrid',
        date: 'Jan 31, 2022',
    },
    {
        name: 'Past Countdowns',
        date: null,
    },
    {
        name: 'Start of Fall 2021',
        date: 'Aug 23, 2021',
    },

    // {
    //     name: 'Start of Exams',
    //     date: 'Sep 27, 2021',
    // },
    // {
    //     name: 'Spanish Exam',
    //     date: 'Sep 27, 2021 16:30:00',
    // },
    // {
    //     name: 'ECE Exam',
    //     date: 'Sep 27, 2021 20:00:00',
    // },
    // {
    //     name: 'NUCL Exam',
    //     date: 'Sep 29, 2021 20:00:00',
    // },
    // {
    //     name: 'IE 386 Exam',
    //     date: 'Sep 30, 2021 09:30:00',
    // },
    // {
    //     name: 'IE 335 Quiz',
    //     date: 'Oct 1, 2021 12:30:00',
    // },
    // {
    //     name: 'End of Exams',
    //     date: 'Oct 1, 2021 13:30:00',
    // },
    // {
    //     name: 'Utah',
    //     date: 'Oct 8, 2021 08:50:00',
    // },
]

var allCountdowns = true

function showAllCountdowns() {

    if (countdownData.length > 3){
        if (allCountdowns) {
            for (i = 3; i < countdownData.length; i++) {
                var card = document.getElementById(`countdown-card-${i}`)
                var line = document.getElementById(`countdown-line-${i - 1}`)

                // console.log(card)
                card.classList.add('hidden-always')
                line.classList.add('hidden-always')
            }
            allCountdowns = false
        } else {
            for (i = 3; i < countdownData.length; i++) {
                var card = document.getElementById(`countdown-card-${i}`)
                var line = document.getElementById(`countdown-line-${i - 1}`)

                console.log(card)
                card.classList.remove('hidden-always')
                line.classList.remove('hidden-always')
            }
            allCountdowns = true
        }



    }
}

const countdownWidget = {
    title: 'Countdown',
    id: 'countdown',
    color: 'indigo',
    icon: '<svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" xml:space="preserve"><path d="M256 0C114.841 0 0 114.841 0 256s114.841 256 256 256 256-114.841 256-256S397.159 0 256 0zm116.101 291.335H250.952c-.244 0-.48-.029-.721-.036-.241.009-.477.036-.721.036-11.948 0-21.634-9.686-21.634-21.634V93.747c0-11.948 9.686-21.634 21.634-21.634s21.634 9.686 21.634 21.634v154.321h100.958c11.948 0 21.634 9.686 21.634 21.634s-9.687 21.633-21.635 21.633z"/></svg>',
    body: function() {
        var bodyElement = document.createElement('div')
        bodyElement.id = `${this.id}-widget-content`
        bodyElement.classList = 'vstack spacer padding-0-15 fill-parent'
        return(bodyElement)
    },
    buttons: [
        // {
        //     primary: false,
        //     text: 'New',
        // },
        {
            primary: true,
            text: 'Show All',
            action: function() { showAllCountdowns() },
        },
    ],
    initial: function() {
        const parent = document.getElementById(`${this.id}-widget-content`)
        var htmlString = ``

        for (let i = 0; i < countdownData.length; i++) {
            const countdownReturn = countdownCalculate(countdownData[i].date)
            // console.log(countdownReturn)
            
            if (countdownReturn) {
                var itemHTML = `
                <div id="countdown-card-${i}" class="hstack spacer fill-parent countdown-card">
                    <div id="countdown-name-${i}" class="countdown-name">${countdownData[i].name}</div>
                    <div class="spacer"></div>
                    <div class="vstack">
                        <div id="countdown-num-${i}" class="countdown-num">${countdownReturn[0]}</div>
                        <div id="countdown-days-${i}" class="countdown-days">${countdownReturn[1]}</div>
                    </div>
                </div>
                `
            } else {
                itemHTML = `
                <div id="countdown-card-${i}" class="hstack spacer fill-parent countdown-card">
                    <div id="countdown-name-${i}" class="countdown-name">${countdownData[i].name}</div>
                    <div class="spacer"></div>
                    <div class="vstack">
                        <div id="countdown-num-${i}" class="countdown-num"></div>
                        <div id="countdown-days-${i}" class="countdown-days"></div>
                    </div>
                </div>`
            }

            

            if (i < countdownData.length - 1) {
                var line = returnHline(`countdown-line-${i}`)
                itemHTML = `${itemHTML}${line}`
            //     itemHTML = appendHLine(itemHTML)
            }

            htmlString = `${htmlString}${itemHTML}`
        }




        parent.innerHTML = htmlString
    },
    populate: function() {
        showAllCountdowns()
        // const countdown = countdownCalculate()
    },
    refresh: false,
}

const busWidget = {
    title: 'Bus',
    id: 'bus',
    color: 'orange',
    icon: '<svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 45.532 45.532"><path d="M22.766.001C10.194.001 0 10.193 0 22.766s10.193 22.765 22.766 22.765c12.574 0 22.766-10.192 22.766-22.765S35.34.001 22.766.001zm0 6.807a7.53 7.53 0 11.001 15.06 7.53 7.53 0 01-.001-15.06zm-.005 32.771a16.708 16.708 0 01-10.88-4.012 3.209 3.209 0 01-1.126-2.439c0-4.217 3.413-7.592 7.631-7.592h8.762c4.219 0 7.619 3.375 7.619 7.592a3.2 3.2 0 01-1.125 2.438 16.702 16.702 0 01-10.881 4.013z"/></svg>',
    body: function() {
        var bodyElement = document.createElement('div')
        bodyElement.id = `${this.id}-widget-content`
        bodyElement.classList = 'content-container'
        return(bodyElement)
    },
    buttons: [
        {
            primary: false,
            text: 'New',
        },
        {
            primary: true,
            text: 'Switch User',
            action: function() { userSelectOpen() },
        },
    ],
    initial: function() {
        const parent = document.getElementById(`${this.id}-widget-content`)

        const contentHTML = `
        <div class="bus-icon-container">
            <svg id="bus-icon" class="bus-icon bus-icon-hide" xmlns="http://www.w3.org/2000/svg" viewBox="72.34278106689453 89.03302764892578 350.6231994628906 350.6231994628906"><path d="M172.477 389.589c0-13.855-5.589-26.371-14.642-35.425-9.053-9.053-21.57-14.642-35.425-14.642-27.632-.079-50.146 22.436-50.066 50.066 0 13.855 5.59 26.37 14.643 35.423s21.569 14.642 35.423 14.642c27.631.082 50.146-22.433 50.067-50.064zM389.589 422.967c-18.421 0-33.377-14.957-33.378-33.378.079-64.472-26.213-122.883-68.566-165.235s-100.763-68.645-165.235-68.566c-18.42 0-33.377-14.957-33.378-33.378 0-18.42 14.957-33.377 33.377-33.377 82.894.079 158.072 33.692 212.467 88.088s88.009 129.575 88.088 212.467c.003 18.422-14.954 33.379-33.375 33.379z"></path><path d="M256 423.046c-18.42 0-33.456-15.035-33.456-33.456 0-27.553-11.178-52.586-29.363-70.77-18.105-18.105-43.139-29.284-70.77-29.363-18.421 0-33.456-15.036-33.456-33.456s15.035-33.456 33.456-33.456c46.052.079 87.773 18.814 118.002 49.043s48.964 71.951 49.043 118.002c0 18.421-15.036 33.456-33.456 33.456zM122.411 439.656c-13.855 0-26.37-5.59-35.423-14.642l70.849-70.849c9.053 9.053 14.642 21.57 14.642 35.425.077 27.63-22.438 50.145-50.068 50.066z"></path><path d="M256 423.046c-18.42 0-33.456-15.035-33.456-33.456 0-27.553-11.178-52.586-29.363-70.77l47.232-47.232c30.229 30.229 48.964 71.951 49.043 118.002 0 18.421-15.036 33.456-33.456 33.456zM389.589 422.967c-18.421 0-33.377-14.957-33.378-33.378.079-64.472-26.213-122.883-68.566-165.235l47.232-47.232c54.396 54.396 88.009 129.575 88.088 212.467.002 18.421-14.955 33.378-33.376 33.378z"></path></svg>
        </div>
        <div class="content-title info-title" id="bus-title" onclick="busShowAll()">
            Buses
        </div>
        <div id="bus-number-tray" class="scrolling-tray">
            <div class="bus-number")">----</div>
        </div>
        <div id="bus-card-1" class="bus-card hidden-always">
            <!-- <div class="bus-card-line"></div> -->
            <div class="bus-info-card">
                <div class="bus-info">
                    <div class="bus-dest">
                        <div id="bus-dir-1" class="bus-dir">-</div>
                        <p id="bus-dest-1">Destination</p>
                    </div>
                    <div class="bus-stop">
                        <p id="bus-stop-1">Bus Stop</p>
                    </div>
                </div>
                <div class="bus-eta">
                    <p id="bus-eta-1">--</p>
                </div>
            </div>
        </div><div id="bus-card-2" class="bus-card hidden-always">
            <div class="bus-card-line"></div>
            <div class="bus-info-card">
                <div class="bus-info">
                    <div class="bus-dest">
                        <div id="bus-dir-2" class="bus-dir">-</div>
                        <p id="bus-dest-2">--</p>
                    </div>
                    <div class="bus-stop">
                        <p id="bus-stop-2">--</p>
                    </div>
                </div>
                <div class="bus-eta">
                    <p id="bus-eta-2">--</p>
                </div>
            </div>
        </div><div id="bus-card-3" class="bus-card hidden-always">
            <div class="bus-card-line"></div>
            <div class="bus-info-card">
                <div class="bus-info">
                    <div class="bus-dest">
                        <div id="bus-dir-3" class="bus-dir">-</div>
                        <p id="bus-dest-3">--</p>
                    </div>
                    <div class="bus-stop">
                        <p id="bus-stop-3">--</p>
                    </div>
                </div>
                <div class="bus-eta">
                    <p id="bus-eta-3">--</p>
                </div>
            </div>
        </div><div id="bus-card-4" class="bus-card hidden-always">
            <div class="bus-card-line"></div>
            <div class="bus-info-card">
                <div class="bus-info">
                    <div class="bus-dest">
                        <div id="bus-dir-4" class="bus-dir">-</div>
                        <p id="bus-dest-4">--</p>
                    </div>
                    <div class="bus-stop">
                        <p id="bus-stop-4">--</p>
                    </div>
                </div>
                <div class="bus-eta">
                    <p id="bus-eta-4">--</p>
                </div>
            </div>
        </div>
        `

        parent.innerHTML = contentHTML
    },
    populate: function() {

    },
    refresh: false,
}
const flightWidget = {
    title: 'Flight',
    id: 'flight',
    color: 'cyan',
    icon: '<svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 45.532 45.532"><path d="M22.766.001C10.194.001 0 10.193 0 22.766s10.193 22.765 22.766 22.765c12.574 0 22.766-10.192 22.766-22.765S35.34.001 22.766.001zm0 6.807a7.53 7.53 0 11.001 15.06 7.53 7.53 0 01-.001-15.06zm-.005 32.771a16.708 16.708 0 01-10.88-4.012 3.209 3.209 0 01-1.126-2.439c0-4.217 3.413-7.592 7.631-7.592h8.762c4.219 0 7.619 3.375 7.619 7.592a3.2 3.2 0 01-1.125 2.438 16.702 16.702 0 01-10.881 4.013z"/></svg>',
    body: function() {
        var bodyElement = document.createElement('div')
        bodyElement.id = `${this.id}-widget-content`
        bodyElement.classList = 'content-container'
        return(bodyElement)
    },
    buttons: [
        {
            primary: false,
            text: 'Refresh',
            action: function() { flightPull() }
        },
        {
            primary: true,
            text: 'Boarding Pass',
            link: 'wallet://',
        },
    ],
    initial: function() {
        const parent = document.getElementById(`${this.id}-widget-content`)

        const contentHTML = `
        <div class="info-card">
            <a id="flight-no">
                --
            </a>
            <div class="flight-route-container">
                <div class="dep-container">
                    <div class="airport" id="dep-airport">
                        ---
                    </div>
                    <div class="flight-time" id="dep-time">
                        --:--
                    </div>
                    <div class="gate" id="dep-gate">
                        Gate: -
                    </div>
                    <div class="gate" id="dep-terminal">
                        Terminal: -
                    </div>
                </div>

                <div class="spacer"></div>
                <div class="flight-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 510 510"><path d="M510 255c0-20.4-17.85-38.25-38.25-38.25H331.5L204 12.75h-51l63.75 204H76.5l-38.25-51H0L25.5 255 0 344.25h38.25l38.25-51h140.25l-63.75 204h51l127.5-204h140.25c20.4 0 38.25-17.85 38.25-38.25z"/></svg>
                </div>
                <div class="spacer"></div>
                <div class="arr-container">
                    <div class="airport" id="arr-airport">
                        ---
                    </div>
                    <div class="flight-time" id="arr-time">
                        --:--
                    </div>
                    <div class="gate" id="arr-gate">
                        Gate: -
                    </div>
                    <div class="gate" id="arr-terminal">
                        Terminal: -
                    </div>
                </div>
            </div>
        </div>
        `

        parent.innerHTML = contentHTML
    },
    populate: function() {
    },
    refresh: false,
}

const allWidgets = {
    widgets: [
        // flightWidget,
        userWidget,
        weatherWidget,
        countdownWidget,
        localeWidget,
        calWidget,
        busWidget,
    ],
    initial: function() {
        for (let i = 0; i < this.widgets.length; i++){
            const parent = document.getElementById('widgetbar-content')

            var cardElement = createWidget(this.widgets[i])
            parent.append(cardElement)

            this.widgets[i].initial()
            this.widgets[i].populate()


            if (i < this.widgets.length - 1) {
                parent.append(createSpacer(15))
            }

        }
    },
    refresh: function() {
        for (let i = 0; i < this.widgets.length; i++){
            if (this.widgets[i].refresh) {
                this.widgets[i].initial()
                this.widgets[i].populate()
            }
        }
    }

}
function todayWidget(){
    // weatherWidget();
    // calWidget();
    timeWidget(hourNow,minuteNow)
    dateWidget()


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
    document.getElementById('navbar-date').innerHTML = `${weekDays.long[weekdayNow]}, ${dateNow} ${monthNow}`
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

const contextModal = document.getElementById('context-modal')
const contextMenu = document.getElementById('context-menu')

// const scope = document.getElementById('main-5')

// scope.addEventListener('contextmenu', (event) => {
//     event.preventDefault()

//     const { clientX: mouseX, clientY: mouseY} = event

//     contextMenu.style.top = `${mouseY}px`
//     contextMenu.style.left = `${mouseX}px`
//     contextMenuOptions(event.target,0)
// })

// scope.addEventListener('click', (e) => {
//     if (e.target.offsetParent != contextMenu) {
//         contextMenu.classList.remove('visible')
//     }
// })

function contextShow(type,index) {
    contextOptions(type,index)

    if (type == 'tv') {
        var button = document.getElementById(`tv-play-icon-${index[0]}-${index[1]}`)

        contextMenu.style.bottom = `${window.innerHeight - button.getBoundingClientRect().bottom + 12.5}px`
        contextMenu.style.left = `${button.getBoundingClientRect().left + 12.5}px`
        contextMenu.classList.add('visible')
        contextModal.classList.add('visible')
        // var scrollTop = document.getElementById('main-8').scrollTop
        // console.log(window.innerHeight - button.getBoundingClientRect().bottom + 12.5)
        // console.log(button.getBoundingClientRect().left + 12.5)
        // console.log(contextMenu.style.bottom)
    }
    
}

function contextHide() {
    contextModal.classList.remove('visible')
    contextMenu.classList.remove('visible')
}


function contextOptions(type,index) {
    // console.log(element.classList.contains('tv-card'))
    if (type == 'tv') {
        // const i = parseInt(element.id.substring(8,9))
        // const j = parseInt(element.id.substring(10,11))
        const movie = movieData[index[0]][index[1]]

        var options = []

        options.push({
            text: 'Details',
            icon: '<svg class="icon" viewBox="0 0 515.555 515.555" xmlns="http://www.w3.org/2000/svg"><path d="M496.679 212.208c25.167 25.167 25.167 65.971 0 91.138s-65.971 25.167-91.138 0-25.167-65.971 0-91.138 65.971-25.167 91.138 0"/><path d="M303.347 212.208c25.167 25.167 25.167 65.971 0 91.138s-65.971 25.167-91.138 0-25.167-65.971 0-91.138 65.971-25.167 91.138 0"/><path d="M110.014 212.208c25.167 25.167 25.167 65.971 0 91.138s-65.971 25.167-91.138 0-25.167-65.971 0-91.138 65.971-25.167 91.138 0"/></svg>',
            function: `tvPopup(${index[0]},${index[1]})`,
        })
        
        if (movie.apps.tvTimeID) {
            options.push({
                text: 'TV Time',
                // icon: '<svg class="icon" id="Calque_1" data-name="Calque 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 875 875"><rect class="cls-2" x="175.34" y="174.74" width="174.91" height="174.91"/><rect class="cls-3" x="350.26" y="174.74" width="174.91" height="174.91"/><rect class="cls-4" x="525.17" y="174.74" width="174.91" height="174.91"/><rect class="cls-5" x="350.26" y="349.66" width="174.91" height="174.91"/><rect class="cls-6" x="350.26" y="524.57" width="174.91" height="174.91"/></svg>',
                link: `https://www.tvtime.com/en/show/${movie.apps.tvTimeID}`,
            })
        }

        if (movie.apps.reelgoodLink) {
            options.push({
                text: 'Reelgood',
                // icon: '<svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="m14.21 11.477 2.475 4.441h-3.803l-2.014-4.047h-1.4v4.047H6.151v-6.85l3.317-1.791v1.755h2.333c.686 0 1.38-.423 1.38-1.231 0-.809-.694-1.232-1.38-1.232h-.915V3.75h1.382c2.563 0 4.284 1.642 4.284 4.087 0 2.005-1.187 3.183-2.342 3.641zM0 0l8.75 5.032L0 10.064V0zm1.189 4.637h.8v1.997l3.536-2.09L1.189 2.05v2.587z"/></svg>',
                link: processLink(movie.apps.reelgoodLink),
            })
        }

        if (movie.apps.imdbID) {
            options.push({
                text: 'IMDb',
                // icon: '<svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="69.3499984741211 -75.6249885559082 440.6999816894531 440.6999816894531"><path d="M69.35 58.24h45.63v175.65H69.35V58.24Z"></path><path d="M201.2 139.15c-3.92-26.77-6.1-41.65-6.53-44.62-1.91-14.33-3.73-26.8-5.47-37.44h-59.16v175.65h39.97l.14-115.98 16.82 115.98h28.47l15.95-118.56.15 118.56h39.84V57.09h-59.61l-10.57 82.06Z"></path><path d="M346.71 93.63c.5 2.24.76 7.32.76 15.26v68.1c0 11.69-.76 18.85-2.27 21.49-1.52 2.64-5.56 3.95-12.11 3.95V87.13c4.97 0 8.36.53 10.16 1.57 1.8 1.05 2.96 2.69 3.46 4.93Zm20.61 137.32c5.43-1.19 9.99-3.29 13.69-6.28 3.69-3 6.28-7.15 7.76-12.46 1.49-5.3 2.37-15.83 2.37-31.58v-61.68c0-16.62-.65-27.76-1.66-33.42-1.02-5.67-3.55-10.82-7.6-15.44-4.06-4.62-9.98-7.94-17.76-9.96-7.79-2.02-20.49-3.04-42.58-3.04H287.5v175.65h55.28c12.74-.4 20.92-.99 24.54-1.79Z"></path><path d="M464.76 204.7c-.84 2.23-4.52 3.36-7.3 3.36-2.72 0-4.53-1.08-5.45-3.25-.92-2.16-1.37-7.09-1.37-14.81v-46.42c0-8 .4-12.99 1.21-14.98.8-1.97 2.56-2.97 5.28-2.97 2.78 0 6.51 1.13 7.47 3.4.95 2.27 1.43 7.12 1.43 14.55v45.01c-.29 9.25-.71 14.62-1.27 16.11Zm-58.08 26.51h41.08c1.71-6.71 2.65-10.44 2.84-11.19 3.72 4.5 7.81 7.88 12.3 10.12 4.47 2.25 11.16 3.37 16.34 3.37 7.21 0 13.43-1.89 18.68-5.68 5.24-3.78 8.58-8.26 10-13.41 1.42-5.16 2.13-13 2.13-23.54V141.6c0-10.6-.24-17.52-.71-20.77s-1.87-6.56-4.2-9.95c-2.33-3.39-5.72-6.02-10.16-7.9-4.44-1.88-9.68-2.82-15.72-2.82-5.25 0-11.97 1.05-16.45 3.12-4.47 2.07-8.53 5.21-12.17 9.42V55.56h-43.96v175.65Z"></path></svg>',
                link: `https://www.imdb.com/title/${movie.apps.imdbID}`
            })
        }

        if (movie.apps.subReddit) {
            options.push({
                text: 'Reddit',
                // icon: '<svg class="icon" data-bbox="1.959 3 46.082 42" viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg" data-type="shape"><g><path d="M29 3c-2.105 0-4.566 1.652-4.938 9.031.313-.008.622-.031.938-.031.352 0 .715.02 1.063.031C26.3 7.598 27.355 5 29 5c.703 0 1.102.383 1.844 1.188.867.94 2 2.164 4.218 2.625A6.215 6.215 0 0 1 35 8c0-.422.043-.82.125-1.219-1.375-.375-2.102-1.168-2.813-1.937C31.52 3.984 30.61 3 29 3zm12 1c-2.207 0-4 1.797-4 4 0 2.203 1.793 4 4 4s4-1.797 4-4c0-2.203-1.793-4-4-4zM25 14C12.867 14 3 20.18 3 29s9.867 16 22 16 22-7.18 22-16-9.867-15-22-15zm-17.5.938c-1.46 0-2.848.597-3.906 1.656-1.723 1.722-2.078 4.199-1.094 6.25 1.512-2.926 4.113-5.422 7.469-7.282-.762-.386-1.606-.624-2.469-.624zm35 0c-.863 0-1.707.238-2.469.624 3.356 1.86 5.957 4.356 7.469 7.282.984-2.051.629-4.528-1.094-6.25-1.058-1.059-2.445-1.657-3.906-1.657zM17 23a3 3 0 1 1-.002 6.002A3 3 0 0 1 17 23zm16 0a3 3 0 1 1-.002 6.002A3 3 0 0 1 33 23zM16.062 34c.25.043.497.184.657.406.105.149 2.449 3.282 8.281 3.282 5.91 0 8.258-3.22 8.281-3.25.317-.45.953-.57 1.407-.25.449.316.535.921.218 1.374-.117.168-2.968 4.126-9.906 4.126-6.941 0-9.79-3.958-9.906-4.126-.317-.453-.235-1.058.219-1.374.226-.16.5-.231.75-.188z" /></g></svg>',
                link: `https://www.reddit.com/r/${movie.apps.subReddit}`,
            })
        }

        options.push({
            text: 'Preview',
            icon: '<svg class="icon" viewBox="0 0 448 448" xmlns="http://www.w3.org/2000/svg"><path d="M408 184H272a8 8 0 0 1-8-8V40c0-22.09-17.91-40-40-40s-40 17.91-40 40v136a8 8 0 0 1-8 8H40c-22.09 0-40 17.91-40 40s17.91 40 40 40h136a8 8 0 0 1 8 8v136c0 22.09 17.91 40 40 40s40-17.91 40-40V272a8 8 0 0 1 8-8h136c22.09 0 40-17.91 40-40s-17.91-40-40-40zm0 0"/></svg>',
            function: `movieBig(${index[0]},${index[1]})`
        })

        if (movie.link) {
            options.push({
                text: 'Play',
                icon: '<svg class="icon" data-bbox="15.49 8.193 132.882 147.475" viewBox="0 0 163.861 163.861" xmlns="http://www.w3.org/2000/svg" data-type="shape"><g><path d="M39.564 11.445C26.27 3.818 15.49 10.065 15.49 25.388v113.074c0 15.338 10.78 21.577 24.075 13.958l98.832-56.68c13.3-7.629 13.3-19.99 0-27.617L39.564 11.445z" xmlns="http://www.w3.org/2000/svg" /></g></svg>',
                link: processLink(movie.link),
            })
        }

        contextMenuPopulate(options)
    }
}

function contextMenuPopulate(options) {
    var htmlString = ``

    for (i = 0; i < options.length; i++) {
        if (options[i].link) {
            var action = `href="${options[i].link}"`
        } else if (options[i].function) {
            var action = `onclick="${options[i].function};contextHide()"`
        }

        if (options[i].icon) {
            var icon = options[i].icon
        } else {
            var icon = ''
        }

        var optionHTML = `
        <a ${action} target="_blank" class="primary-fg">
            <p class="primary-fg">${options[i].text}</p>
            <div class="spacer"></div>
            <div class="context-icon">${icon}</div>
        </a>
        `


        htmlString = `${htmlString}${optionHTML}`

        if (i < options.length - 1) {
            htmlString = `${htmlString}<div class="hline"></div>`
        }
    }

    document.getElementById('context-menu').innerHTML = htmlString
}