const calEvents = {
    colors: {
        'Key Dates': Colors.yellow,
        'Personal': Colors.orange,
        'Work': Colors.indigo,
        'Errands': Colors.pink,
        'Outings': Colors.red,
        'Travel': Colors.blue,
        'HP': Colors.cyan,
        'Calendar': Colors.cyan,
    },
    today: [],
    tomor: [],
}

for (const event of events_all) {
    if (event.allDay == 'No') {
        event.allDay = false
        event.duration = `${processTime.ampm(event.start)} - ${processTime.ampm(event.end)}`
    } else {
        event.allDay = true
        event.duration = 'All Day'
    }

    event.isToday = removeTime(new Date(event.start)).getTime() === removeTime(new Date()).getTime()
    event.isTomor = removeTime(new Date(event.start)).getTime() === removeTime(new Date().getTime() + 86400000).getTime()
    event.hasStarted = new Date(event.start) < new Date()
    event.hasEnded = new Date(event.end) < new Date()

    // colors
    if (calEvents.colors[event.calendar]) event.color = calEvents.colors[event.calendar]
    else event.color = Colors.secondary

    if (!event.hasEnded) {
        if (event.isToday) calEvents.today.push(event)
        if (event.isTomor) calEvents.tomor.push(event)
    }

    if (event.location) {
        if (event.location.includes('https')) {
            if (event.location.includes('hp.zoom.com')) event.icon = SFSymbols.video.fill

        }
    }
}

// add event trigger for focus
// add event name process
