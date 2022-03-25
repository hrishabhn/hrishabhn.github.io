function widgetCal() {
    // base card with header
    let card = widgetCardBase('div')
    card.id = ('cal')

    // icon
    let iconElem = elems.icon(SFSymbols.calendar)
    iconElem.classList = 'top-icon'
    card.append(iconElem)

    // left and right
    let left = document.createElement('div')
    left.classList = 'side'
    let right = document.createElement('div')
    right.classList = 'side'

    // day and date
    left.append(elems.title(capitalizeFirstLetter(processDate.day.long(new Date()))))
    left.append(elems.data(new Date().getDate(), null))
    left.append(elems.spacer(8))

    // variables
    let displayedLeft = 0
    let displayedRight = 0

    const limitLeft = 2
    const limitRight = 2

    let showingTdy = false
    let showingTmr = false

    // today
    if (todayEvents.length) {
        let i = 0
        while (todayEvents[i] && (displayedLeft < limitLeft)) {
            const event = todayEvents[i]
            if (!event.allDay) {
                left.append(eventCardElem(event))
                left.append(elems.spacer(5))

                displayedLeft++
                showingTdy = true
            }
            i++
        }

        // right
        while (todayEvents[i] && (displayedRight < limitRight)) {
            const event = todayEvents[i]
            if (!event.allDay) {
                right.append(eventCardElem(event))
                right.append(elems.spacer(5))

                displayedRight++
                showingTdy = true
            }
            i++
        }

        // more events today
        if (todayEvents[i]) right.append(futureCard(todayEvents.slice(i)))

    }

    // tomorrow
    if (tmrEvents.length) {
        let i = 0
        while (tmrEvents[i] && (displayedLeft < limitLeft)) {
            if (!showingTmr) {
                left.append(elems.spacer(5))
                left.append(elems.subtitle('TOMORROW'))
            }
            const event = tmrEvents[i]
            if (!event.allDay) {
                left.append(eventCardElem(event))
                left.append(elems.spacer(5))

                displayedLeft++
                showingTmr = true
            }
            i++
        }

        // right
        while (tmrEvents[i] && (displayedRight < limitRight)) {
            if (!showingTmr) {
                right.append(elems.spacer(5))
                right.append(elems.subtitle('TOMORROW'))
            }
            const event = tmrEvents[i]
            if (!event.allDay) {
                right.append(eventCardElem(event))
                right.append(elems.spacer(5))

                displayedRight++
                showingTmr = true
            }
            i++
        }

        // more events tmr
        if (tmrEvents[i] && (displayedLeft + displayedRight) < (limitLeft + limitRight + 1)) {
            if (!showingTmr) {
                right.append(elems.spacer(5))
                right.append(elems.subtitle('TOMORROW'))
            }
            right.append(futureCard(tmrEvents.slice(i)))
        }
    }

    const blank = !(showingTdy || showingTmr)

    if (blank) left.append(elems.subtitle('No upcoming events'))

    card.append(left)
    if (!blank) card.append(right)

    // initialise variables
    function futureCard(events) {
        let moreData = {
            number: 0,
            colors: {},
            events: [],
        }

        for (const event of events) {
            moreData.events.push(event)

            moreData.number++
            // countedEvents++

            if (!moreData.colors[event.color]) {
                moreData.colors[event.color] = true
            }
        }

        return futureCardElem(moreData)
    }

    return card
}