const calendar = {
    topCard: function () {
        let card = calendar.splashCard()
        card.classList.remove('splash-card')
        card.classList.add('top-card')
        return card
    },
    splashCard: function () {
        // base card with header
        const title = `${processDate.day.long(new Date())}, ${new Date().getDate()} ${processDate.month.long(new Date())}`
        let card = leftbar.cardBase(title, [{ icon: SFSymbols.calendar }])
        card.id = 'cal'

        let body = document.createElement('div')
        body.classList = 'body'

        if (todayEvents.length) {
            for (const event of todayEvents) {
                body.append(calendar.eventCard(event))
                body.append(elems.spacer(5))
            }
        }

        if (tmrEvents.length) {
            body.append(elems.subtitle('TOMORROW'))
            for (const event of tmrEvents) {
                body.append(calendar.eventCard(event))
                body.append(elems.spacer(5))
            }
        }

        if (!todayEvents.length && !tmrEvents.length) body.append(elems.subtitle('No more events today or tomorrow.'))

        card.append(body)
        return card

    },
    eventCard: function (event) {
        let eventCard = document.createElement('a')
        eventCard.classList = 'event clickable-o'
        eventCard.style.setProperty('--col', `#${event.color}`)
        if (event.hasStarted) { eventCard.classList.add('started') }

        let colBlock = document.createElement('span')

        let info = document.createElement('div')
        info.classList = 'info'

        // 
        info.append(elems.bg(event.color))
        if (!event.allDay) {
            info.append(elems.textbox(event.name, event.duration))
        } else {
            info.append(elems.textbox(event.name, null))
        }

        info.append(elems.grow())

        if (event.icon) { info.append(elems.icon(event.icon)) }

        if (event.link) {
            eventCard.href = event.link
            eventCard.style.setProperty('cursor', 'pointer')
        } else if (event.trigger) {
            eventCard.onclick = function () { event.trigger() }
            eventCard.style.setProperty('cursor', 'pointer')
        }


        eventCard.append(colBlock)
        eventCard.append(info)

        return eventCard
    },
    resultCard: function () {
        const title = `${processDate.day.long(new Date())}, ${new Date().getDate()} ${processDate.month.long(new Date())}`
        let card = resultCard.base({
            name: title,
            buttons: [{ icon: SFSymbols.calendar }],
        })

        // console.log(todayEvents)

        return card
    },
}