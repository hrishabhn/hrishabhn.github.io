async function calTest() {
    // console.log(await fetchEvents())
    // console.log(calendarTray(await fetchEvents()))
    calendarTrayPopulate()
}

const totalEvents = 10
async function fetchEvents() {

    var eventData = []

    for (let i = 0; i < totalEvents; i++) {
        let response = await fetch(`https://hrishabhn.github.io/calendar/event${i + 1}.json`);
        let data = JSON.parse(await response.text())

        eventData.push(data)
    }

    return eventData
}

function calendarTrayRender(eventData) {

    var tray = hscrollHuluElement()
    tray.append(spacerElement(15, 'only-mobile'))
    for (let i = 1; i < totalEvents + 1; i++) {
        tray.append(calendarEventRender(i))
        tray.append(spacerElement(15))
    }
    tray.append(spacerElement(25))

    return tray
}

function calendarEventRender(n) {
    var card = document.createElement('a')
    card.classList = 'calendar-event clickable'
    card.id = `event-${n}`
    card.href = eventLink()
    card.innerHTML = `
    <div class="bg"></div>
    <div class="color"></div>
    <div class="vstack grow fill-height">
        <p id="event-${n}-title" class="title" >-</p>
        <p id="event-${n}-location" class="location">-</p>
        <p id="event-${n}-time" class="time">-</p>
    </div>`

    return card
}

async function calendarTrayPopulate() {
    var eventData = await fetchEvents()
    // console.log(eventData)

    for (i = 1; i < totalEvents + 1; i++) {
        const card = document.getElementById(`event-${i}`)
        const title = document.getElementById(`event-${i}-title`)
        const location = document.getElementById(`event-${i}-location`)
        const time = document.getElementById(`event-${i}-time`)

        card.style.setProperty('--col', `#${eventColor(await eventData[i - 1].calendar)}`)
        location.innerHTML = eventLocation(await eventData[i - 1].location)
        title.innerHTML = await eventData[i - 1].name
        time.innerHTML = `${eventTime(await eventData[i - 1].start, await eventData[i - 1].end)}`


        // eventLocation(await eventData[i - 1].location)


        // console.log(await eventData[i - 1].location)
        // console.log(document.getElementById(`event-${i}-location`))
        // document.getElementById(`event-${i}-location`) = 'nice'
        // document.getElementById(`event-${i}-time`) = 'nice'


        //eventLocation(await eventData[i - 1].location)
        // document.getElementById(`event-${i}-time`) = eventData[i - 1].start

    }


}

function eventLocation(location) {
    if (location) {
        return location
    } else {
        return ''
    }
}

function eventTime(start, end) {
    const startString = `${processTime(processDate(start).hour, processDate(start).minute)}`
    const endString = `${processTime(processDate(end).hour, processDate(end).minute)}`

    // console.log(endString)

    return `${startString} - ${endString}`
}

function eventColor(calendar) {
    // console.log(calendar == 'Fall 2021')

    if (calendar == 'Fall 2021') {
        return 'ccc'
    } else if (calendar == 'Personal') {
        return 'FF9200'
    } else if (calendar == 'Key Dates') {
        return 'FFFF0B'
    } else if (calendar == 'Clubs') {
        return '00FA92'
    } else if (calendar == 'Travel') {
        return '0E61B9'
    } else {
        return 'f0f'
    }
}

function eventLink() {
    if ('ontouchstart' in document.documentElement) {
        return `calshow://`
    } else {
        return `ical://`
    }
}