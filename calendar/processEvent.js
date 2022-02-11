for (let i = 0; i < events_all.length; i++) {
    if (events_all[i].allDay == 'No') {
        events_all[i].allDay = false
        events_all[i].duration = `${processTime(events_all[i].start)} - ${processTime(events_all[i].end)}`
    } else {
        events_all[i].allDay = true
        events_all[i].duration = 'All Day'
    }

    events_all[i].isToday = (new Date(events_all[i].start).getDate()) == new Date().getDate()
    events_all[i].hasStarted = (new Date(events_all[i].start) < new Date())
    events_all[i].hasEnded = (new Date(events_all[i].end) < new Date())

    events_all[i].color = eventColor(events_all[i].calendar)
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