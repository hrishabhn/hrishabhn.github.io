function loadApp() {
    baseElements[0].render()
    pageDataRender()
    loadSwitches()

    widgetPopulate()
    openFirstPage(0)
    // tvPopup(0,0,[1,0])
    // testTV()
}

function openFirstPage(n) {
    const pageCookie = getCookie('page')
    // console.log(pageCookie)
    if (pageCookie) {
        pageData[pageCookie].open()
    } else {
        pageData[n].open()
    }
}


function testTV() {
    for (let i = 0; i < movieData.length; i++) {
        for (let j = 0; j < movieData[i].length; j++) {
            tvPopup(i,j)
        }
    }
}

const body = document.getElementById('body')

const baseElements = [
    {
        id: 'leftbar',
        render: function() {
            const element = document.getElementById(this.id)

            var time = document.createElement('div')
            time.classList = 'time hidden-mobile'
            time.innerHTML = processTime(dateNow().hour,dateNow().minute)

            var date = document.createElement('div')
            date.classList = 'date hidden-mobile'
            date.innerHTML = `${processDay(dateNow().day,'long')}, ${dateNow().date} ${processMonth(dateNow().month,'long')}`

            // console.log(processDay(dateNow().day,'long'))

            element.append(time)
            element.append(date)
        },
    }
]






function dateNow() {
    var date = new Date()
    // console.log(date)

    const dateObject = {
        year: date.getFullYear(),
        month: date.getMonth(),
        date: date.getDate(),
        day: date.getDay(),
        hour: date.getHours(),
        minute: date.getMinutes(),
        second: date.getSeconds(),
    }

    return dateObject
}

function processMonth(monthIndex,type) {
    if (type == 'short') {
        var months = ['jan','feb','mar','apr','may','jun','jul','aug','sep','oct']
    } else if (type == 'long') {
        var months = ['january','february','march','april','may','june','july','august','september','october']
    }

    return months[monthIndex]
}

function processDay(dayIndex,type) {
    if (type == 'short') {
        var days = ['sun','mon','tue','wed','thu','fri','sat']
    } else if (type == 'long') {
        var days = ['sunday','monday','tuesday','wednesday','thursday','friday','saturday']
    }

    return days[dayIndex]
}

function processTime(hours,mins) {
    var ampm = 'am'

    if (hours > 12) {
        hours = hours - 12
        ampm = 'pm'
    }

    if (hours == 0) {
        hours = 12
    }

    if (mins < 10) {
        mins = `0${mins}`
    }

    return `${hours}:${mins}${ampm}`
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
