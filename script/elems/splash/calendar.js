function calendarCard() {
    // base card with header

    let card = document.createElement('div')
    card.classList = 'cal-card card-item'

    card.innerHTML = `
    <p class="day red-fg">${processDay(new Date().getDay(), 'long').toUpperCase()}</p>
    <p class="date">${new Date().getDate()}</p>
    `

    card.append(spacerElement(8))

    // initialise variables

    let displayedEvents = 0
    let countedEvents = 0

    // console.log(!!todayEvents[0])

    let shownTmr = false

    // today's events

    while (todayEvents[0] && (displayedEvents < 2)) {
        const event = todayEvents.shift()

        card.append(eventCardElem(event))
        card.append(spacerElement(5))

        displayedEvents++
        countedEvents++
    }


    function futureCard(events) {
        let moreData = {
            number: 0,
            colors: {}
        }

        for (const event of events) {
            moreData.number++
            countedEvents++

            if (!moreData.colors[event.color]) {
                moreData.colors[event.color] = true
            }
        }

        return futureCardElem(moreData)
    }


    // more events today
    if (todayEvents[0]) {
        card.append(futureCard(todayEvents))
    }

    // tomorrow

    if (tmrEvents[0] && (displayedEvents < 2)) {
        let tmrTitle = pElement('TOMORROW')
        tmrTitle.classList = 'tmr-title'
        card.append(tmrTitle)

        while (tmrEvents[0] && (displayedEvents < 2)) {
            const event = tmrEvents.shift()

            card.append(eventCardElem(event))
            card.append(spacerElement(5))

            displayedEvents++
            countedEvents++
        }
    }

    // more events tmr
    if (tmrEvents[0]) {
        card.append(futureCard(tmrEvents))
    }

    card.append(growElement())
    return card
}



function futureCardElem(data) {
    let card = document.createElement('div')
    card.classList = 'event future'

    for (const color in data.colors) {
        let dot = document.createElement('div')
        dot.classList = 'col-block'
        dot.style.setProperty('background-color', `#${color}`)
        card.append(dot)
    }

    let textStr = `${data.number} more event`
    if (data.number > 1) { textStr = textStr.concat('s') }
    card.append(pElement(textStr))
    card.append(growElement())

    return card
}

function eventCardElem(event) {
    let eventCard = document.createElement('div')
    eventCard.classList = 'event clickable'
    eventCard.style.setProperty('--col', `#${event.color}`)
    if (event.hasStarted) { eventCard.classList.add('started') }

    let colBlock = document.createElement('div')
    colBlock.classList = 'col-block'

    let textBox = textboxBase(event.name, event.duration)
    textBox.prepend(bgElement(event.color))

    eventCard.append(colBlock)
    eventCard.append(textBox)

    return eventCard
}


function searchCal(q) {
    let results = []
    for (const event of events_all) {
        const name = event.name.toUpperCase().includes(q)
        const location = event.location.toUpperCase().includes(q)

        if (name || location) {
            results.push(event)
        }
    }

    return results
}

function searchCalRow(data) {
    let row = rowBase('Calendar Events')
    let tray = trayBase()

    for (let k = 0; k < data.length; k++) {
        let card = eventCardElem(data[k])
        tray.append(card)

        if (k < data.length - 1) {
            tray.append(spacerElement(10))
        }
    }
    row.append(tray)
    return row
}