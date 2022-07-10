function cardCol(card, { accent, style, color }) {
    if (color) {
        if (color.dark && color.light) {
            card.style.setProperty('--brand-col-dark', `#${color.dark}`)
            card.style.setProperty('--brand-col-light', `#${color.light}`)
        } else {
            card.style.setProperty('--brand-col-dark', `#${color}`)
            card.style.setProperty('--brand-col-light', `#${color}`)
        }

        if (color.fg) {
            if (typeof color.fg === 'object') {
                card.style.setProperty('--fg-col-dark', `#${color.fg.dark}`)
                card.style.setProperty('--fg-col-light', `#${color.fg.light}`)
            } else {
                card.style.setProperty('--fg-col-dark', `#${color.fg}`)
                card.style.setProperty('--fg-col-light', `#${color.fg}`)
            }
        }

    } else if (accent) {
        if (accent.dark && accent.light) {
            alert('need to update smth', accent)
            card.style.setProperty('--brand-col-dark', `#${accent.dark}`)
            card.style.setProperty('--brand-col-light', `#${accent.light}`)
        } else {
            card.style.setProperty('--brand-col-dark', `#${accent}`)
            card.style.setProperty('--brand-col-light', `#${accent}`)
        }
    } else if (style) {
        card.style.setProperty('--brand-col-dark', `var(--${style}-dark)`)
        card.style.setProperty('--brand-col-light', `var(--${style}-light)`)
    }
    return card
}

function timeOfDay(n) {
    const hour = n ?? new Date().getHours()
    if ((hour >= 21) || (hour <= 4)) return 'night'
    if ((hour >= 5) && (hour <= 12)) return 'morning'
    if ((hour >= 13) && (hour <= 16)) return 'afternoon'
    if ((hour >= 17) && (hour <= 20)) return 'evening'
}

const processDate = {
    month: {
        short: function (str) {
            const months = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec']
            return months[new Date(str).getMonth()]
        },
        long: function (str) {
            const months = ['january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december']
            return months[new Date(str).getMonth()]
        },
    },
    day: {
        letter: function (str) {
            const days = ['s', 'm', 't', 'w', 't', 'f', 's']
            return days[new Date(str).getDay()]
        },
        short: function (str) {
            const days = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat']
            return days[new Date(str).getDay()]
        },
        long: function (str) {
            const days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday']
            return days[new Date(str).getDay()]
        },
    },
}

const processDay = {
    letter: ['s', 'm', 't', 'w', 't', 'f', 's'],
    short: ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'],
    long: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
}

const processTime = {
    ampm: function (date) {
        date = new Date(date)

        hours = date.getHours()
        mins = date.getMinutes()

        var ampm = 'am'

        if (hours > 11) {
            hours = hours - 12
            ampm = 'pm'
        }

        if (hours == 0) hours = 12

        if (mins < 10) mins = `0${mins}`

        if (mins == 0) mins = ''
        else mins = `:${mins}`

        return `${hours}${mins}${ampm}`
    }
}

const countdown = {
    distance: {
        ms: function (date) { return new Date(date).getTime() - new Date().getTime() },
        abs: function (date) { return Math.abs(this.ms(date)) },
    },
    future: function (date) { return this.distance.ms(date) > 0 },
    calc: function (date) {
        const distance = this.distance.abs(date)

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        let result
        if (days > 0) {
            if (days < 2) result = [days * 24 + hours, 'hours']
            else result = [days, 'days']
        } else if (hours > 0) {
            if (hours < 2) result = [hours * 60 + minutes, 'minutes']
            else result = [hours, 'hours']
        } else if (minutes > 0) result = [minutes, 'minutes']
        else result = [seconds, 'seconds']


        return {
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
            past: !countdown.future(date),
        }
    },
    process: {
        short: function (date) {
            const calc = countdown.calc(date)

            if (calc.only.days > 0) {
                if (calc.only.days < 2) result = {
                    num: calc.only.hours,
                    word: 'hours',
                }
                else result = {
                    num: calc.only.days,
                    word: 'days',
                }
            } else if (calc.only.hours > 0) {
                if (calc.only.hours < 2) result = {
                    num: calc.only.minutes,
                    word: 'minutes',
                }
                else result = {
                    num: calc.only.hours,
                    word: 'hours',
                }
            } else if (calc.only.minutes > 0) result = {
                num: calc.only.minutes,
                word: 'minutes',
            }
            else result = {
                num: calc.only.seconds,
                word: 'seconds',
            }

            return result
        },
    },
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
    while (parent.firstChild) parent.removeChild(parent.firstChild)
}


function processDeviceLink(link) {
    if (('ontouchstart' in document.documentElement) && link.mobile) return link.mobile
    else return link.desktop
}

function capitalizeFirstLetter(str) { return str.charAt(0).toUpperCase() + str.slice(1) }


function randomElem(array) { return array[Math.floor(Math.random() * array.length)] }

function randomNumber(n) { return Math.floor(Math.random() * n) }

function strToElem(str) {
    let x = document.createElement('div')
    x.innerHTML = str
    return x.firstChild
}