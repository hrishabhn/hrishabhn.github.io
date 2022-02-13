for (const event of events_all) {
    if (event.allDay == 'No') {
        event.allDay = false
        event.duration = `${processTime(event.start)} - ${processTime(event.end)}`
    } else {
        event.allDay = true
        event.duration = 'All Day'
    }

    event.isToday = (new Date(event.start).getDate()) == new Date().getDate()
    event.isTmr = new Date(event.start).getDate() == new Date(new Date().getTime() + (1000 * 60 * 60 * 24)).getDate()
    event.hasStarted = (new Date(event.start) < new Date())
    event.hasEnded = (new Date(event.end) < new Date())

    event.color = eventColor(event.calendar)

    const eventNameData = {
        'Economía Financiera, grp.60,61 y 62': 'Financial Economics',
        'Economía Financiera, grp. 62': 'Financial Economics',
        'Organización Industrial, grupo 70': 'Industrial Organisation',
        'Ingeniería de Control I, grupo 39': 'Controls Engineering',
        'Fundamentos de gestión empresarial, grupo 18': 'Engineering Management',
        'Fundamentos de gestión empresarial, grp.18 y 19': 'Engineering Management',
    }

    if (eventNameData[event.name]) {
        event.name = eventNameData[event.name]
    }
}

function eventColor(calendar) {
    const data = {
        'Spring 2022': '999',
        'Personal': 'FF9200',
        'Travel': '0E61B9',
        'Key Dates': 'FFFF0B',
        'Work': '005392',
        'Errands': 'FF40FF',
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