for (const event of events_all) {
    if (event.allDay == 'No') {
        event.allDay = false
        event.duration = `${processTime.ampm(event.start)} - ${processTime.ampm(event.end)}`
    } else {
        event.allDay = true
        event.duration = 'All Day'
    }

    event.isToday = (new Date(event.start).getDate()) == new Date().getDate()
    event.isTmr = new Date(event.start).getDate() == new Date(new Date().getTime() + (1000 * 60 * 60 * 24)).getDate()
    event.hasStarted = (new Date(event.start) < new Date())
    event.hasEnded = (new Date(event.end) < new Date())

    event.color = eventColor(event.calendar)

    // const eventNameData = {
    //     'Economía Financiera, grp.60,61 y 62': 'Financial Economics',
    //     'Economía Financiera, grp. 62': 'Financial Economics',
    //     'Organización Industrial, grupo 70': 'Industrial Organisation',
    //     'Ingeniería de Control I, grupo 39': 'Controls Engineering',
    //     'Fundamentos de gestión empresarial, grupo 18': 'Engineering Management',
    //     'Fundamentos de gestión empresarial, grp.18 y 19': 'Engineering Management',
    // }

    // if (eventNameData[event.name]) { event.name = eventNameData[event.name] }

    const eventTrigger = {
        'SAIL Study': function () { focusData[1]['sail'].trigger() },

        'Industrial Organisation': function () { focusData[1]['indorg'].trigger() },
        'Industrial Organisation Study': function () { focusData[1]['indorg'].trigger() },

        'Financial Economics': function () { focusData[1]['finecon'].trigger() },
        'Financial Economics Study': function () { focusData[1]['finecon'].trigger() },

        'Engineering Management': function () { focusData[1]['manage'].trigger() },

        'Controls Engineering': function () { focusData[1]['controls'].trigger() },
        'Controls Study': function () { focusData[1]['controls'].trigger() },

        'Gym': function () { focusData[2]['workout'].trigger() },
    }

    if (event.location.includes('https')) {
        if ((event.location.includes('zoom')  || (event.location.includes('webex')))) {
            event.icon = iconData['video-call']
        }

        event.link = event.location
    } else if (eventTrigger[event.name]) {
        event.trigger = function () { eventTrigger[event.name]() }
    }

    const eventNotesIcon = {
        'sport': iconData['ball'],
    }

    if (eventNotesIcon[event.notes]) { event.icon = eventNotesIcon[event.notes] }

    // if (event.notes.includes('https://www.appintheair.mobi/cal')) {
    //     event.icon = iconData['plane']
    //     delete event.link

    //     let flightNo = event.notes.split('\n')[0].split(' ').at(-1)

    //     for (const key in flightData) {
    //         let match = flightData[key].number == flightNo
    //         if (match) { event.trigger = function () { flightData[key].detail() } }
    //     }
    // }
}

function eventColor(calendar) {
    const data = {
        'Spring 2022': colorData.fluent.red,
        'Personal': 'FF9200',
        'Travel': '0E61B9',
        'Key Dates': 'FFFF0B',
        'Work': '005392',
        'Errands': 'FF40FF',
        'Outings': 'FB0207',
        'HP': '0096d6',
        'Calendar': '0096d6',
    }

    if (data[calendar]) {
        return data[calendar]
    } else {
        return '000'
    }
}

let todayEvents = []
let tmrEvents = []

for (const event of events_all) {
    if (!event.hasEnded) {
        if (event.isToday) { todayEvents.push(event) }
        if (event.isTmr) { tmrEvents.push(event) }
    }
}