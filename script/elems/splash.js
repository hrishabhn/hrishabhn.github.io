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

    container.append(iconElement(iconData['search']))
    container.append(input)

    let result = document.createElement('div')
    result.id = 'results'


    tray.append(container)
    tray.append(result)

    return tray
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
    card.append(budgetCard())
    // card.append(worldClockCard())
    // card.append(flightCountdownCard('mad-lhr'))
    card.append(tasksCard())

    return card
}

function tasksCard() {
    let tasksCard = document.createElement('div')
    tasksCard.id = 'tasks-card'
    tasksCard.classList = 'card-item layer-1 card-shadow'

    if (getCookie('task-list')) {
        var taskData = JSON.parse(getCookie('task-list'))
    } else {
        var taskData = []
    }
    taskData.push('')


    for (const data of taskData) {
        let item = document.createElement('div')
        item.classList = 'item'

        let check = document.createElement('a')
        check.classList = 'clickable-o'

        let input = document.createElement('input')
        input.value = data
        input.placeholder = 'New'
        input.onkeyup = function (e) {
            setTasks()

            if (e.key == 'Enter') {
                refreshTasks()
            }

            if (e.key == 'ArrowUp') {
                e.preventDefault()
                if (item.previousElementSibling) {
                    item.previousElementSibling.lastChild.focus()
                }
            }
            if (e.key == 'ArrowDown') {
                e.preventDefault()
                if (item.nextElementSibling) {
                    item.nextElementSibling.lastChild.focus()
                }
            }
        }

        item.append(check)
        item.append(spacerElement(8))
        item.append(input)

        tasksCard.append(item)
    }

    return tasksCard
}

function setTasks() {
    let tasksCard = document.getElementById('tasks-card')

    let nodes = tasksCard.childNodes
    let data = []


    for (let i = 0; i < nodes.length; i++) {
        let value = nodes[i].lastChild.value

        if (value) {
            data.push(value)
        }
    }

    setCookie('task-list', JSON.stringify(data), 7)
}

function refreshTasks() {
    let old = document.getElementById('tasks-card')
    let newCard = tasksCard()
    old.parentNode.replaceChild(newCard, old)
    newCard.lastChild.lastChild.focus()
}

function flightCountdownCard(flightKey) {
    const flight = firstFlight()

    let card = document.createElement('div')
    card.classList = 'flight-countdown card-item clickable'
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

function worldClockCard() {
    const clockData = [
        {
            name: 'Hong Kong',
            offset: '+7',
        },
        {
            name: 'West Lafayette',
            offset: '-6',
        },
        {
            name: 'London',
            offset: '-1',
        },
    ]


    let card = document.createElement('div')
    card.classList = 'world-clock card-item'

    for (data of clockData) {
        let item = document.createElement('div')
        item.classList = 'row clickable'
        item.innerHTML = `
        <div class="left">
            <p class="offset">${data.offset}HR</p>
            <p class="city">${data.name}</p>
        </div>
        <div class="grow"></div>
        <div class="time">${processTime(new Date().getTime() + ((1000 * 60 * 60 * parseInt(data.offset))))}</div>
        `

        card.append(item)
        card.append(hlineElement())
    }
    card.lastChild.remove()




    card.append(growElement())

    return card
}