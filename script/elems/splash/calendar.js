function calendarCard() {
    let card = document.createElement('div')
    card.classList = 'cal-card card-item'

    card.innerHTML = `
    <p class="day red-fg">${processDay(new Date().getDay(), 'long').toUpperCase()}</p>
    <p class="date">${new Date().getDate()}</p>
    `

    card.append(spacerElement(8))
    // card.append(growElement())

    let displayedEvents = 0
    let countedEvents = 0

    for (let i = 0; (i < events_all.length) && (displayedEvents < 2); i++) {
        const event = events_all[i]

        if (!event.hasEnded && event.isToday) {
            card.append(eventCardElem(event))
            card.append(spacerElement(5))

            displayedEvents++
        }
        // card.lastChild.remove()
        countedEvents++
    }
    
    let futureCard = document.createElement('div')
    futureCard.classList = 'event future'
    let futureEvents = 0

    for (let i = countedEvents; (i < events_all.length); i++) {
        const event = events_all[i]

        if (!event.hasEnded && event.isToday) {
            let dot = document.createElement('div')
            dot.classList = 'col-block'
            dot.style.setProperty('background-color',`#${event.color}`)
            futureCard.append(dot)

            futureEvents++
            countedEvents++
        }
    }
    
    let futureCardText = pElement(`${futureEvents} more events`)
    if (futureEvents > 1) {
        futureCardText.concat('s')
    }

    futureCard.append(futureCardText)
    futureCard.append(growElement())
    
    if (futureEvents > 0) {
        card.append(futureCard)
    }

    if (!displayedEvents) {
        let noMore = pElement('No more events today')
        noMore.classList = ('no-more')
        card.append(noMore)
    }

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


// function eventColor(calendar) {
//     // console.log(calendar == 'Fall 2021')

    // if (calendar == 'Clubs') {
//         return '00FA92'
//     } else if (calendar == 'Travel') {
//         return '0E61B9'
//     } else if (calendar == 'Work') {
//         return '005392'
//     }  else if (calendar == 'Errands') {
//         return 'FF40FF'
//     } else {
//         return '000'
//     }
// }