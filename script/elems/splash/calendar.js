function calendarCard() {
    let card = document.createElement('card')
    card.classList = 'cal-card card-item'

    for (const event of events_all) {
        console.log(event.start)
    }


    console.log(events_all)
}