function widgetCal() {
    // base card with header
    let card = widgetCardBase('div')
    card.id = ('cal')


    // left and right
    let left = document.createElement('div')
    left.classList = 'side'
    let right = document.createElement('div')
    right.classList = 'side'

    // day and date
    left.append(titleElement(capitalizeFirstLetter(processDay(new Date().getDay(), 'long'))))
    left.append(dataElem(new Date().getDate(), null))

    left.append(spacerElement(8))

    // variables
    let displayedTotal = 0
    let countedEvents = 0

    let displayedLeft = 0
    let displayedRight = 0

    const limitLeft = 2
    const limitRight = 2

    let showingTdy = false
    let showingTmr = false

    // today
    if (todayEvents.length) {
        while (todayEvents[0] && (displayedLeft < limitLeft)) {
            const event = todayEvents.shift()
            if (!event.allDay) {
                left.append(eventCardElem(event))
                left.append(spacerElement(5))

                displayedLeft++
                // displayedTotal++
                // countedEvents++
                showingTdy = true
            }
        }

        // right
        while (todayEvents[0] && (displayedRight < limitRight)) {
            const event = todayEvents.shift()
            if (!event.allDay) {
                right.append(eventCardElem(event))
                right.append(spacerElement(5))

                displayedRight++
                // displayedTotal++
                // countedEvents++
                showingTdy = true
            }
        }

        // more events today
        if (todayEvents[0]) {
            right.append(futureCard(todayEvents))
        }
    }

    displayedTotal = displayedLeft + displayedRight

    // tomorrow
    if (tmrEvents.length) {
        while (tmrEvents[0] && (displayedLeft < limitLeft)) {
            if (!showingTmr) left.append(subtitleElement('TOMORROW'))
            const event = tmrEvents.shift()
            if (!event.allDay) {
                left.append(eventCardElem(event))
                left.append(spacerElement(5))

                displayedLeft++
                // displayedTotal++
                // countedEvents++
                showingTmr = true
            }
        }

        // right
        while (tmrEvents[0] && (displayedRight < limitRight)) {
            if (!showingTmr) right.append(subtitleElement('TOMORROW'))
            const event = tmrEvents.shift()
            if (!event.allDay) {
                right.append(eventCardElem(event))
                right.append(spacerElement(5))

                displayedRight++
                // displayedTotal++
                // countedEvents++
                showingTmr = true
            }
        }

        // more events tmr
        if (tmrEvents[0] && displayedTotal < (limitLeft + limitRight + 1)) {
            if (!showingTmr) right.append(subtitleElement('TOMORROW'))
            right.append(futureCard(tmrEvents))
        }
    }




    card.append(left)
    card.append(spacerElement(10))
    card.append(right)

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


    // if (tmrEvents[0]) {
    //     // tomorrow
    //     if (tmrEvents[0] && (displayedTmr < 2)) {
    //         card.append(subtitleElement('TOMORROW'))

    //         while (tmrEvents[0] && (displayedTmr < 2)) {
    //             const event = tmrEvents.shift()
    //             if (!event.allDay) {
    //                 card.append(eventCardElem(event))
    //                 card.append(spacerElement(5))

    //                 displayedTdy++
    //                 displayedTotal++
    //                 countedEvents++
    //                 showingTdy = true
    //             }
    //         }
    //         showingTmr = true
    //     }

    //     // more events tmr
    //     if (tmrEvents[0] && (showingTmr)) {
    //         card.append(futureCard(tmrEvents))
    //     }



    // }





    // // today's events
    // while (todayEvents[0] && (displayedEvents < limit)) {
    //     const event = todayEvents.shift()
    //     if (!event.allDay) {
    //         card.append(eventCardElem(event))
    //         card.append(spacerElement(5))

    //         displayedEvents++
    //         countedEvents++
    //     }
    // }

    // // more events today
    // if (todayEvents[0]) {
    //     card.append(futureCard(todayEvents))
    // }

    // // tomorrow
    // if (tmrEvents[0] && (displayedEvents < limit)) {
    //     card.append(subtitleElement('TOMORROW'))

    //     while (tmrEvents[0] && (displayedEvents < limit)) {
    //         const event = tmrEvents.shift()
    //         if (!event.allDay) {
    //             card.append(eventCardElem(event))
    //             card.append(spacerElement(5))

    //             displayedEvents++
    //             countedEvents++
    //         }
    //     }
    //     showingTmr = true
    // }

    // // more events tmr
    // if (tmrEvents[0] && (showingTmr)) {
    //     card.append(futureCard(tmrEvents))
    // }

    // // no events today or tmr
    // if (!displayedEvents) {
    //     card.append(subtitleElement('No more events today or tomorrow'))
    // }

    card.append(growElement())
    return card
}