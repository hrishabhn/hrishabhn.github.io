// function timeOfDay() {
//     if ((new Date().hour > 0) && (new Date().hour < 4)) {
//         var t = 0
//     } else if ((new Date().hour > 3) && (new Date().hour < 7)) {
//         var t = 1
//     } else if ((new Date().hour > 6) && (new Date().hour < 10)) {
//         var t = 2
//     } else if ((new Date().hour > 9) && (new Date().hour < 13)) {
//         var t = 3
//     } else if ((new Date().hour > 12) && (new Date().hour < 16)) {
//         var t = 4
//     } else if ((new Date().hour > 15) && (new Date().hour < 19)) {
//         var t = 5
//     } else if ((new Date().hour > 18) && (new Date().hour < 22)) {
//         var t = 6
//     } else if ((new Date().hour > 21) || (new Date().hour < 1)) {
//         var t = 7
//     }

//     return t
// }

function cardHover(card, accent, style) {
    card.classList.add('card-hover')
    return cardCol(card, accent, style)
}

function cardCol(card, accent, style) {
    if (accent) {
        card.style.setProperty('--brand-col-dark', `#${accent}`)
        card.style.setProperty('--brand-col-light', `#${accent}`)
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
    letter: function (i) {
        const days = ['s', 'm', 't', 'w', 't', 'f', 's']
        return days[i]
    },
    // if (type == 'short') var days = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat']
    // else if (type == 'long') var days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday']
    // else if (type == 'letter') var days = ['s', 'm', 't', 'w', 't', 'f', 's']
    // return days[dayIndex]

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



// console.log(cntdwn.distance.ms('20 Mar 2022') / 86400000)
// console.log(cntdwn.distance.abs('20 Mar 2022') / 86400000)
// console.log(cntdwn.distance('30 Mar 2022') / 86400000)
// console.log(cntdwn.future('30 Mar 2021'))

// function countdownProcess(date, type) {
//     const countdownResult = countdown.calc(date)
//     // console.log(countdownResult)

//     if (type == 'short') {
//         if (countdownResult.only.days > 0) {
//             if (countdownResult.only.days < 2) {
//                 result = {
//                     num: countdownResult.only.hours,
//                     word: 'hours',
//                 }
//             } else {
//                 result = {
//                     num: countdownResult.only.days,
//                     word: 'days',
//                 }
//             }
//         } else if (countdownResult.only.hours > 0) {
//             if (countdownResult.only.hours < 2) {
//                 result = {
//                     num: countdownResult.only.minutes,
//                     word: 'minutes',
//                 }
//             } else {
//                 result = {
//                     num: countdownResult.only.hours,
//                     word: 'hours',
//                 }
//             }
//         } else if (countdownResult.only.minutes > 0) {
//             result = {
//                 num: countdownResult.only.minutes,
//                 word: 'minutes',
//             }
//         } else {
//             result = {
//                 num: countdownResult.only.seconds,
//                 word: 'seconds',
//             }
//         }

//         return result
//     }
//     //  else if (type == 'long') {
//     //     let string = ''

//     //     if (countdownResult.part.days) {
//     //         string = `${countdownResult.part.days}:`
//     //     }

//     //     string = `${string}${countdownResult.part.hours}:${countdownResult.part.minutes}`


//     //     return string
//     // }
// }

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

function openApp(data, e, force) {
    // appTrackAdd(data)

    if (!(data.distract && dnd.active() && !force)) {
        if (data.link) {
            if (e ? !e.metaKey : true) window.open(data.link, '_self')
            else window.open(data.link, '_blank')
        } else if (data.trigger) data.trigger(e)
    } else {
        modal.add(distractModal(data, e, true))
        document.getElementById('distract-input').focus()
    }
}

function randomElem(array) { return array[Math.floor(Math.random() * array.length)] }

function randomNumber(n) { return Math.floor(Math.random() * n) }