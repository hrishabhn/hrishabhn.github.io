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
    var futureDate = new Date(date).getTime()
    // console.log(futureDate)
    var nowDate = new Date().getTime()
    var distance = futureDate - nowDate
    // console.log(distance)

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    if (days > 0) {
        return [days,'days']
    } else if (hours > 0) {
        return [hours,'hours']
    } else if (minutes > 0) {
        return [minutes,'minutes']
    } else {
        return [seconds,'seconds']
    }


    var string = `${days}`
    return [string,'days']
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
    
                        // console.log(currentData)
                        
                        var fullDates = []
                        var hours = []
                        var conditions = []
                        var currentIcons = []
                        var temps = []
    
                        const dataLength = 25
    
                        for (let i = 1; i < dataLength; i++) {
                            fullDates[i] = new Date(hourlyData[i].dt * 1000)
    
                            hours[i] = fullDates[i].getHours()
    
                            if ((hours[i] < 8 ) && (hours[i] > 5)) {
                                var isNight = false
                            } else {
                                var isNight = true
                            }
    
    
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
                                    if (!isNight) {
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
                                    if (!isNight) {
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
    
                        htmlString = appendSpacer(htmlString,8)
                        for (let i = 0; i < 25; i++) {
                            itemHTML = `
                            <div id="weather-item-${i}" class="weather-item vstack">
                                <p id="weather-item-time-${i}" class="weather-item-time">${hours[i]}</p>
                                <div id="weather-item-icon-${i}" class="weather-item-icon">${currentIcons[i]}</div>
                                <p  id="weather-item-temp-${i}" class="weather-item-temp">${temps[i]}&#176</p>
                            </div>`
    
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
        name: 'BDubs',
        date: 'Sep 16, 2021 20:00:00',
    },
    {
        name: 'Exams',
        date: 'Sep 27, 2021',
    },
    {
        name: 'Utah',
        date: 'Oct 8, 2021',
    },
    {
        name: 'Christmas',
        date: 'Dec 18, 2021',
    },
    {
        name: 'Madrid',
        date: 'Jan 31, 2022',
    },
]

var allCountdowns = true

function showAllCountdowns() {

    if (countdownData.length > 3){
        if (allCountdowns) {
            for (i = 3; i < countdownData.length; i++) {
                var card = document.getElementById(`countdown-card-${i}`)
                var line = document.getElementById(`countdown-line-${i - 1}`)
                
                console.log(card)
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

        for (i = 0; i < countdownData.length; i++) {
            const countdownReturn = countdownCalculate(countdownData[i].date)
            // console.log(countdownReturn)

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
        countdownWidget,
        weatherWidget,
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