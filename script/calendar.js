async function calTest() {
    // console.log(await fetchEvents())
    // console.log(calendarTray(await fetchEvents()))
    calendarTrayPopulate()
}

const totalEvents = 20
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

    var tray = document.createElement('div')
    tray.classList = 'tray'
    tray.append(widgetbarTitleElement('Up next'))

    for (let i = 1; i < totalEvents + 1; i++) {
        tray.append(calendarEventRender(i))
    }
    tray.append(spacerElement(15))

    return tray
}

function calendarEventRender(n) {
    var card = document.createElement('a')
    card.classList = 'calendar-event clickable'
    card.id = `event-${n}-card`
    // card.innerHTML = `
    // <div id="event-x" class="vstack fill-width" style="--col: #ccc;">
    //     <a class="calendar-event clickable now" id="event-x-card" href="ical://">
    //         <div class="color"></div>
    //         <div class="spacer-x" style="--size: 3px;"></div>
    //         <div class="grow">
    //             <div class="bg"></div>
    //             <div class="vstack fill-height">
    //                 <p id="event-x-title" class="title">-</p>
    //                 <p id="event-x-location" class="location">-</p>
    //                 <p id="event-x-time" class="time">-</p>
    //             </div>
    //             <div class="grow"></div>
    //             <div class="countdown">
    //                 <p id="event-x-countdown-big" class="big">-</p>
    //                 <p id="event-x-countdown-small" class="small">-</p>
    //             </div>
    //         </div>
    //     </a>
    //     <div class="spacer-x" style="--size: 5px;"></div>
    // </div>
    // `


    card.innerHTML = `
    <div class="color"></div>
    <div class="spacer-x" style="--size: 3px;"></div>
    <div class="grow">
        <div class="bg"></div>
        <div class="vstack fill-height">
            <p id="event-${n}-title" class="title">-</p>
            <p id="event-${n}-location" class="location">-</p>
            <p id="event-${n}-time" class="time">-</p>
        </div>
        <div class="grow"></div>
        <div class="countdown">
            <p id="event-${n}-countdown-big" class="big">-</p>
            <p id="event-${n}-countdown-small" class="small">-</p>
        </div>
    </div>
    `


    // card.innerHTML = `
    // <div class="bg"></div>
    // <div class="color"></div>
    // <div class="vstack fill-height">
    //     <p id="event-${n}-title" class="title" >-</p>
    //     <p id="event-${n}-location" class="location">-</p>
    //     <p id="event-${n}-time" class="time">-</p>
    // </div>
    // <div class="grow"><div class="spacer-x" style="--size: 4px;"></div></div>
    // <div class="countdown">
    //     <p id="event-${n}-countdown-big" class="big">-</p>
    //     <p id="event-${n}-countdown-small" class="small">-</p>
    // </div>`

    var container = document.createElement('div')
    container.classList = 'vstack fill-width hidden-always'
    container.id = `event-${n}`
    container.append(card)
    container.append(spacerElement(5))

    return container
}

async function calendarTrayPopulate() {
    var eventData = await fetchEvents()
    // console.log(eventData)

    for (i = 1; i < totalEvents + 1; i++) {
        const container = document.getElementById(`event-${i}`)
        const card = document.getElementById(`event-${i}-card`)
        const title = document.getElementById(`event-${i}-title`)
        const location = document.getElementById(`event-${i}-location`)
        const time = document.getElementById(`event-${i}-time`)
        const countdownBig = document.getElementById(`event-${i}-countdown-big`)
        const countdownSmall = document.getElementById(`event-${i}-countdown-small`)

        const started = (new Date(await eventData[i - 1].start)) < new Date()
        const ended = (new Date(await eventData[i - 1].end)) < new Date()
        const soon = (new Date(await eventData[i - 1].start)) < new Date((new Date).getTime() + 86400000)
        // console.log(soon)

        if (started) {
            card.classList.add('now')
        }
        if (ended || (!soon)) {
            container.classList.add('hidden-always')
        } else {
            container.classList.remove('hidden-always')
        }

        container.style.setProperty('--col', `#${eventColor(await eventData[i - 1].calendar)}`)
        location.innerHTML = eventLocation(await eventData[i - 1].location)
        title.innerHTML = await eventData[i - 1].name
        time.innerHTML = `${eventDate(await eventData[i - 1].start)} &#149 ${eventTime(await eventData[i - 1].start, await eventData[i - 1].end, await eventData[i - 1].allDay)}`

        if (!started) {
            countdownBig.innerHTML = countdownProcess((await eventData[i - 1].start),'short').num
            countdownSmall.innerHTML = countdownProcess((await eventData[i - 1].start),'short').word
        } else {
            countdownBig.innerHTML = ''
            countdownSmall.innerHTML = ''
            // countdownBig.innerHTML = countdownCalculate(await eventData[i - 1].end)[0]
            // countdownSmall.innerHTML = countdownCalculate(await eventData[i - 1].end)[1]
        }

        // console.log(!!(await eventData[i - 1].link))

        if (!!(await eventData[i - 1].link)) {
            card.href = await eventData[i - 1].link
            card.style.setProperty('cursor','pointer')
        } else {
            // card.href = eventLink()
            card.style.setProperty('cursor','default')
        }
    }
}

function eventLocation(location) {
    if (location) {
        return location
    } else {
        return ''
    }
}

function eventDate(start) {
    return processDay(processDate(start).day,'short')

}
function eventTime(start, end, allDay) {
    if (allDay == 'Yes') {
        return `All day`
    } else {
        const startString = `${processTime(new Date(start))} `
        const endString = `${processTime(new Date(end))} `

        return `${startString} - ${endString} `
    }
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
    } else if (calendar == 'Work') {
        return '005392'
    }  else if (calendar == 'Errands') {
        return 'FF40FF'
    } else {
        return '000'
    }
}

function eventLink() {
    if ('ontouchstart' in document.documentElement) {
        return `calshow://`
    } else {
        return `ical://`
    }
}
