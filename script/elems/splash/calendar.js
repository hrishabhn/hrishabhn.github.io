function calendarCard() {
    // base card with header
    let card = widgetItemElement('div')
    card.classList.add('cal-card')

    let day = capitalizeFirstLetter(processDay(new Date().getDay(), 'long'))

    card.innerHTML = `
    <p class="day red-fg">${day}</p>
    <p class="date">${new Date().getDate()}</p>
    `

    card.append(spacerElement(8))

    // initialise variables
    let displayedEvents = 0
    let countedEvents = 0
    let showingTmr = false

    function futureCard(events) {
        let moreData = {
            number: 0,
            colors: {},
            events: [],
        }

        for (const event of events) {
            moreData.events.push(event)

            moreData.number++
            countedEvents++

            if (!moreData.colors[event.color]) {
                moreData.colors[event.color] = true
            }
        }

        return futureCardElem(moreData)
    }

    // today's events
    while (todayEvents[0] && (displayedEvents < 2)) {
        const event = todayEvents.shift()

        card.append(eventCardElem(event))
        card.append(spacerElement(5))

        displayedEvents++
        countedEvents++

        if (event.allDay) { displayedEvents-- }
    }

    // more events today
    if (todayEvents[0]) {
        card.append(futureCard(todayEvents))
    }

    // tomorrow
    if (tmrEvents[0] && (displayedEvents < 2)) {
        card.append(subtitleElement('TOMORROW'))

        while (tmrEvents[0] && (displayedEvents < 2)) {
            const event = tmrEvents.shift()

            card.append(eventCardElem(event))
            card.append(spacerElement(5))

            displayedEvents++
            countedEvents++

            if (event.allDay) { displayedEvents-- }
        }
        showingTmr = true
    }

    // more events tmr
    if (tmrEvents[0] && (showingTmr)) {
        card.append(futureCard(tmrEvents))
    }

    // no events today or tmr
    if (!displayedEvents) {
        card.append(subtitleElement('No more events today or tomorrow'))
    }

    card.append(growElement())
    return card
}



function futureCardElem(data) {
    console.log(data.events)
    let menuData = []

    for (const event of data.events) {
        menuData.push({
            type: 'col-block',
            name: event.name,
            desc: event.duration,
            color: event.color,
        })
    }

    let card = document.createElement('div')
    card.classList = 'event future'
    card.onclick = function (e) {
        contextModalShow([menuData], e)
    }

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
    let eventCard = document.createElement('a')
    eventCard.classList = 'event clickable-o'
    eventCard.style.setProperty('--col', `#${event.color}`)
    if (event.hasStarted) { eventCard.classList.add('started') }

    let colBlock = document.createElement('div')
    colBlock.classList = 'col-block'

    let info = document.createElement('div')
    info.classList = 'info'

    info.append(bgElement(event.color))
    if (!event.allDay) {
        info.append(textboxBase(event.name, event.duration))
    } else {
        info.append(textboxBase(event.name, null))
        eventCard.classList.add('all-day')
    }

    info.append(growElement())

    if (event.icon) { info.append(iconElement(event.icon)) }

    if (event.link) {
        eventCard.href = event.link
        eventCard.style.setProperty('cursor', 'pointer')
    } else if (event.trigger) {
        eventCard.onclick = function () { event.trigger() }
        eventCard.style.setProperty('cursor', 'pointer')
    }


    eventCard.append(colBlock)
    eventCard.append(info)

    return eventCard
}


// function searchCal(q) {
//     let results = []
//     for (const event of events_all) {
//         const name = event.name.toUpperCase().includes(q)
//         const location = event.location.toUpperCase().includes(q)

//         if (name || location) {
//             results.push(event)
//         }
//     }

//     return results
// }

// function searchCalRow(data) {
//     let row = rowBase('Calendar Events')
//     let tray = trayBase()

//     for (let k = 0; k < data.length; k++) {
//         let card = eventCardElem(data[k])
//         tray.append(card)

//         if (k < data.length - 1) {
//             tray.append(spacerElement(10))
//         }
//     }
//     row.append(tray)
//     return row
// }