function dateNow() {
    return processDate(new Date())
}

function timeOfDay() {
    if ((dateNow().hour > 0) && (dateNow().hour < 4)) {
        var t = 0
    } else if ((dateNow().hour > 3) && (dateNow().hour < 7)) {
        var t = 1
    } else if ((dateNow().hour > 6) && (dateNow().hour < 10)) {
        var t = 2
    } else if ((dateNow().hour > 9) && (dateNow().hour < 13)) {
        var t = 3
    } else if ((dateNow().hour > 12) && (dateNow().hour < 16)) {
        var t = 4
    } else if ((dateNow().hour > 15) && (dateNow().hour < 19)) {
        var t = 5
    } else if ((dateNow().hour > 18) && (dateNow().hour < 22)) {
        var t = 6
    } else if ((dateNow().hour > 21) || (dateNow().hour < 1)) {
        var t = 7
    }

    return t
}

function processDate(dateString) {
    // console.log(dateString)
    var date = new Date(dateString)
    // console.log(date)

    const dateObject = {
        year: date.getFullYear(),
        month: {
            index: date.getMonth(),
            short: processMonth(date.getMonth(), 'short'),
            long: processMonth(date.getMonth(), 'long'),
        },
        date: date.getDate(),
        day: {
            index: date.getDay(),
            short: processDay(date.getDay(), 'short'),
            long: processDay(date.getDay(), 'long'),
        },
        hour: date.getHours(),
        minute: date.getMinutes(),
        second: date.getSeconds(),
    }

    return dateObject
}

function processMonth(monthIndex, type) {
    if (type == 'short') {
        var months = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec']
    } else if (type == 'long') {
        var months = ['january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december']
    }

    return months[monthIndex]
}

function processDay(dayIndex, type) {
    if (type == 'short') {
        var days = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat']
    } else if (type == 'long') {
        var days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday']
    }

    return days[dayIndex]
}

function processTime(date) {
    date = new Date(date)

    hours = date.getHours()
    mins = date.getMinutes()

    var ampm = 'am'

    if (hours > 11) {
        hours = hours - 12
        ampm = 'pm'
    }

    if (hours == 0) {
        hours = 12
    }

    if (mins < 10) {
        mins = `0${mins}`
    }

    if (mins == 0) {
        mins = ''
    } else {
        mins = `:${mins}`
    }

    return `${hours}${mins}${ampm}`
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
        if (days < 2) {
            result = [days * 24 + hours, 'hours']
        } else {
            result = [days, 'days']
        }
    } else if (hours > 0) {
        if (hours < 2) {
            result = [hours * 60 + minutes, 'minutes']
        } else {
            result = [hours, 'hours']
        }
    } else if (minutes > 0) {
        result = [minutes, 'minutes']
    } else {
        result = [seconds, 'seconds']
    }

    var resultObject = {
        only: {
            days: Math.floor(distance / (1000 * 60 * 60 * 24)),
            hours: Math.floor(distance / (1000 * 60 * 60)),
            minutes: Math.floor(distance / (1000 * 60)),
            seconds: Math.floor(distance / 1000),
        },
        part: {

            days: Math.floor(distance / (1000 * 60 * 60 * 24)),
            hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
            minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
            seconds: Math.floor((distance % (1000 * 60)) / 1000),
        },
        past: past,
    }

    // console.log(resultObject)

    return resultObject
    console.log(string)
}

function countdownProcess(date, type) {
    const countdownResult = countdownCalculate(date)
    // console.log(countdownResult)

    if (type == 'short') {
        if (countdownResult.only.days > 0) {
            if (countdownResult.only.days < 2) {
                result = {
                    num: countdownResult.only.hours,
                    word: 'hours',
                }
            } else {
                result = {
                    num: countdownResult.only.days,
                    word: 'days',
                }
            }
        } else if (countdownResult.only.hours > 0) {
            if (countdownResult.only.hours < 2) {
                result = {
                    num: countdownResult.only.minutes,
                    word: 'minutes',
                }
            } else {
                result = {
                    num: countdownResult.only.hours,
                    word: 'hours',
                }
            }
        } else if (countdownResult.only.minutes > 0) {
            result = {
                num: countdownResult.only.minutes,
                word: 'minutes',
            }
        } else {
            result = {
                num: countdownResult.only.seconds,
                word: 'seconds',
            }
        }

        return result
    }
    //  else if (type == 'long') {
    //     let string = ''

    //     if (countdownResult.part.days) {
    //         string = `${countdownResult.part.days}:`
    //     }

    //     string = `${string}${countdownResult.part.hours}:${countdownResult.part.minutes}`


    //     return string
    // }
}

function durationCalculate(start, end) {
    var difference = end.getTime() - start.getTime()
    var hours = Math.floor(difference / (1000 * 60 * 60))
    var minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))

    if (hours) {
        return `${hours}h ${minutes}m`
    } else {
        return `${minutes}m`
    }
}

function googleSearch(query) {
    if ('ontouchstart' in document.documentElement) {
        return `google://search?q=${query}`
    } else {
        return `http://www.google.com/search?q=${query}`
    }
}


function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}


function processDeviceLink(linkObject) {
    if (linkObject.mobile) {
        if ('ontouchstart' in document.documentElement) {
            var result = linkObject.mobile
        } else {
            var result = linkObject.desktop
        }

    } else {
        var result = linkObject
    }

    return result
}