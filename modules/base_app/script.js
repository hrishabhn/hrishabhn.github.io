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

// function durationCalculate(start, end) {
//     var difference = end.getTime() - start.getTime()
//     var hours = Math.floor(difference / (1000 * 60 * 60))
//     var minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))

//     if (hours) {
//         return `${hours}h ${minutes}m`
//     } else {
//         return `${minutes}m`
//     }
// }

function googleSearch(query) {
    if ('ontouchstart' in document.documentElement) {
        return `google://search?q=${query}`
    } else {
        return `http://www.google.com/search?q=${query}`
    }
}


function processDeviceLink(link) {
    if (('ontouchstart' in document.documentElement) && link.mobile) return link.mobile
    else return link.desktop
}

function capitalizeFirstLetter(str) { return str.charAt(0).toUpperCase() + str.slice(1) }


// function randomElem(array) { return array[Math.floor(Math.random() * array.length)] }

function randomNumber(n) { return Math.floor(Math.random() * n) }

function strToElem(str) {
    let x = document.createElement('div')
    x.innerHTML = str
    return x.firstChild
}