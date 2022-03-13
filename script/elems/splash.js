let splash = document.getElementById('splash')

function splashLoad() {
    let focus = document.createElement('div')
    focus.classList = 'focus limit'
    focus.innerHTML = `<p class="text">${getFocus().name}</p>`

    let appTray = document.createElement('div')
    appTray.classList = 'focus-apps'

    appTray.append(growElement())
    for (const app of getFocus().apps) {
        appTray.append(appCard(app))
        appTray.append(spacerElement(10))
    }
    appTray.append(growElement())

    splash.append(growElement())
    splash.append(spacerElement(50))
    splash.append(focus)
    splash.append(spacerElement(10))
    splash.append(createSpotlight())
    splash.append(spacerElement(10))
    splash.append(widgetCard())
    splash.append(spacerElement(50))
    splash.append(growElement())
    splash.append(appTray)
}

function createSpotlight() {
    let tray = document.createElement('div')
    tray.classList = 'spotlight-tray limit layer-1 card-shadow'

    let container = document.createElement('div')
    container.classList = 'spotlight-container'


    let input = document.createElement('input')
    input.type = 'text'
    input.placeholder = 'Search'
    input.id = 'spotlight'
    input.onkeyup = function (e) { spotlightRun(e) }

    input.autocomplete = 'off'
    input.spellcheck = 'false'
    // input.autocorrect = 'off'

    container.append(iconElement(iconData['search']))
    container.append(input)

    let result = document.createElement('div')
    result.id = 'results'


    tray.append(container)
    tray.append(result)

    return tray
}

function resetSpotlight() {
    let container = (spotlightElem().parentElement)
    let thumb = container.childNodes[1]
    let input = container.lastChild

    thumb.remove()
    input.value = ''
    input.placeholder = 'Search'
    input.onkeyup = function (e) { spotlightRun(e) }
}

function startSearchEngine(data) {
    let container = (spotlightElem().parentElement)
    let input = container.lastChild

    removeAllChildNodes(resultElem())

    input.before(thumbElement(data.thumb))
    input.value = ''
    input.placeholder = `Search ${data.name}`
    input.onkeyup = function (e) {
        if (e.key == 'Enter') {
            if (input.value) {
                window.open(`${data.searchBase}${input.value}`, '_self')
            }
        } else if (e.key == 'Backspace') {
            if (!input.value) {
                resetSpotlight()
            }
        }
    }
}

function pElement(text) {
    let elem = document.createElement('p')
    elem.innerHTML = text
    return elem
}

function widgetCard() {
    let card = document.createElement('div')
    card.id = 'widget-card'
    card.classList = 'limit'

    card.append(calendarCard())
    card.append(todayCard())
    card.append(budgetCard())
    // card.append(flightCountdownCard('mad-tfs'))
    card.append(weatherCard())
    card.append(tasksCard())

    return card
}
function widgetItemElement(type) {
    let card = document.createElement(type)
    card.classList = 'card-item layer-1 card-shadow'
    return card
}


function flightCountdownCard(flightKey) {
    const flight = firstFlight()

    let card = widgetItemElement('div')
    card.classList.add('flight-countdown', 'clickable-o')
    card.onclick = function () { flight.detail() }

    let top = document.createElement('div')
    top.classList = 'top'

    let icon = iconElement(flight.airline.logo.icon)
    icon.classList.add('logo')
    let number = pElement(`${flight.airline.code} ${flight.number}`)
    number.classList = 'number'

    top.append(icon)
    top.append(growElement())
    top.append(number)


    let dest = document.createElement('div')
    dest.classList = `dest`

    let destIcon = iconElement(iconData['plane'])
    destIcon.classList.add(flight.airline.style)
    destIcon.classList.add('secondary-fg')

    let destText = pElement(flight.arr.city)
    destText.classList.add(`${flight.airline.style}-fg`)

    dest.append(destIcon)
    dest.append(spacerElement(5))
    dest.append(destText)
    dest.append(growElement())


    let count = document.createElement('div')
    count.classList = 'count'
    count.innerHTML = `${countdownProcess(flight.date, 'short').num} ${countdownProcess(flight.date, 'short').word}`

    let date = document.createElement('div')
    date.classList = 'date'
    date.innerHTML = `${processDate(flight.date).day.short} ${processDate(flight.date).date} ${processDate(flight.date).month.short}, ${processTime(flight.date)}`

    card.append(top)
    card.append(growElement())
    card.append(spacerElement(20))
    card.append(dest)
    card.append(spacerElement(5))
    card.append(count)
    card.append(spacerElement(2))
    card.append(date)

    return card
}