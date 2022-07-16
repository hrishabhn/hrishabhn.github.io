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

        if (calEvents.today.length) {
            for (const event of calEvents.today) {
                body.append(calendar.eventCard(event))
                body.append(elems.spacer(5))
            }
        }

        if (calEvents.tomor.length) {
            body.append(elems.subtitle('TOMORROW'))
            for (const event of calEvents.tomor) {
                body.append(calendar.eventCard(event))
                body.append(elems.spacer(5))
            }
        }

        if (!calEvents.today.length && !calEvents.tomor.length) body.append(elems.subtitle('No more events today or tomorrow.'))

        card.append(body)
        return card
    },
    eventCard: function (event) {
        let eventCard = document.createElement('a')
        eventCard.classList = 'event clickable-o'
        eventCard.style.setProperty('--col', `#${event.hex}`)
        if (event.hasStarted) { eventCard.classList.add('started') }

        let colBlock = document.createElement('span')

        let info = document.createElement('div')
        info.classList = 'info'

        // 
        info.append(elems.bg(event.hex))
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
        // card.id = 'calendar'
        card.style.setProperty('height', '100%')
        card.lastChild.classList.add('single')

        let tray = document.createElement('div')
        tray.classList = 'event-tray'

        if (calEvents.today.length && calEvents.tomor.length) {
            if (calEvents.today.length) for (const event of calEvents.today) tray.append(calendar.resultCardItem(event))
            if (calEvents.tomor.length) {
                tray.append(elems.subtitle('TOMORROW'))
                for (const event of calEvents.tomor) tray.append(calendar.resultCardItem(event))
            }
        } else tray.append(elems.subtitle('No more events today or tomorrow.'))

        card.lastChild.append(tray)
        return card
    },
    resultCardItem(event) {
        let item = document.createElement('div')
        item.classList = 'calendar-event clickable-o'
        item = cardCol(item, { color: event.color })

        // event started
        if (event.hasStarted) item.classList.add('brand-bg')
        else {
            let span = document.createElement('span')
            span.classList = 'brand-bg'
            item.append(span)
        }

        let bg = elems.bg()
        bg.classList.add('brand-bg')
        item.append(bg)

        if (!event.allDay) item.append(elems.textbox(event.name, event.duration))
        else item.append(elems.textbox(event.name, null))

        // icon
        // trigger + link



        return item
    },
}