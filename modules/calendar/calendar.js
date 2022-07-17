const calendar = {
    resultCard: function () {
        const title = `${processDate.day.long(new Date())}, ${new Date().getDate()} ${processDate.month.long(new Date())}`
        let card = resultCard.base({
            name: title,
            buttons: [{ icon: SFSymbols.calendar }],
            type: 'vstack',
            gap: 8,
        })
        // card.id = 'calendar'
        card.style.setProperty('height', '100%')

        if (calEvents.today.length || calEvents.tomor.length) {
            if (calEvents.today.length) for (const event of calEvents.today) card.lastChild.append(calendar.resultCardItem(event))
            if (calEvents.tomor.length) {
                let p = elems.p('TOMORROW')
                p.classList = 'calendar-sub-title'
                card.lastChild.append(p)
                for (const event of calEvents.tomor) card.lastChild.append(calendar.resultCardItem(event))
            }
        } else {
            let p = elems.p('No more events today or tomorrow.')
            p.classList = 'calendar-sub-title'
            card.lastChild.append(p)
        }

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

        if (event.icon) item.append(elems.icon(event.icon))


        // icon
        // trigger + link

        return item
    },
}