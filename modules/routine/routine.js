const routine = {
    load: function () {
        // removeCookie('routine')
        if (!getCookie('routine')) {
            const rawData = {
                morning: {
                    greeting: 'Good Morning',
                    icon: SFSymbols.sunrise.fill,
                    data: [
                        {
                            name: 'Drink Water',
                        },
                        {
                            name: 'Email',
                            desc: 'Clear work and personal inboxes',
                        },
                        { name: 'Clear Notifications', },
                        { name: 'Get Ready', },
                        {
                            name: 'Today\'s Tasks',
                            desc: 'Look over todays events and tasks',
                        },
                    ],
                },
                night: {
                    greeting: 'Good Night',
                    icon: SFSymbols.moon.fill,
                    data: [
                        { name: 'Accounting', },
                        { name: 'Dry Clothes', },
                        { name: 'Clean Up Room', },
                        { name: 'Kitchen', },
                        { name: 'Prepare for Tomorrow', },
                        { name: 'Review Tasks', },
                        { name: 'Self Care', },
                        { name: 'Reflection', },
                    ],
                },
            }

            for (const k in rawData) {
                rawData[k].id = k
                for (const item of rawData[k].data) item.done = false
            }
            setCookie('routine', JSON.stringify(rawData), 1 / 2)
        }
        routine.data = JSON.parse(getCookie('routine'))
    },
    data: null,
    update: function () {
        setCookie('routine', JSON.stringify(routine.data), 1)
    },
    resultCard: function (data) {
        let card = resultCard.base({
            name: 'Routine',
            buttons: [{ icon: data.icon }],
            type: 'vstack',
            gap: 0,
        })

        for (const x of data.data) card.lastChild.append(routine.resultCardItem(x))
        return card
    },
    resultCardItem: function (x) {
        let item = document.createElement('div')
        item.classList = 'routine-result-item'

        // dot and line
        let dot3 = document.createElement('div')
        dot3.classList = 'subdot'
        if (!x.done) dot3.classList.add('layer-1')

        let dot2 = document.createElement('div')
        dot2.classList = 'subdot accent-bg'
        dot2.append(dot3)

        let dot1 = document.createElement('div')
        dot1.classList = 'dot layer-1'
        dot1.append(dot2)


        let line = document.createElement('div')
        line.classList = 'line'
        if (x.done) line.classList.add('accent-bg')
        else line.classList.add('layer-line')


        // name
        let name = elems.name(x.name)
        name.classList.add('layer-hover')
        name.onclick = function () {
            x.done = !x.done
            item.replaceWith(routine.resultCardItem(x))
            routine.update()
        }

        item.append(dot1)
        item.append(name)
        item.append(document.createElement('div'))
        item.append(elems.desc(x.desc ?? ''))
        item.append(line)
        return item
    },
}

const agenda = {
    resultCard: function (data) {
        let tmr = false
        if (data.id === 'night') tmr = true

        let card = resultCard.base({
            name: 'Agenda',
            buttons: [{ icon: data.icon }],
            type: 'single',
            gap: 0,
        })

        let agenda = document.createElement('di')
        agenda.classList = 'agenda'

        let a = elems.p(data.greeting)
        a.style.setProperty('font-size', '30px')

        let c = elems.p(dateToStr(new Date(new Date().getTime() + (tmr ? 86400000 : 0))))
        c.style.setProperty('font-size', '14px')
        c.style.setProperty('font-weight', '500')
        c.style.setProperty('text-transform', 'capitalize')
        c.style.setProperty('opacity', '0.75')


        agenda.append(a)
        agenda.append(c)

        // cal
        let events
        if (!tmr) events = calEvents.today
        else events = calEvents.tomor

        let cols = []
        for (const e of events) if (!cols.includes(e.color)) cols.push(e.color)

        let eventsElem = document.createElement('div')
        eventsElem.classList = 'events'
        for (const c of cols) {
            let dot = document.createElement('div')
            dot = cardCol(dot, { color: c })
            dot.classList = 'brand-bg'
            eventsElem.append(dot)
        }
        eventsElem.append(elems.p(`You have ${events.length} events ${tmr ? 'tomorrow' : 'today'}`))

        agenda.append(eventsElem)

        card.lastChild.appendChild(agenda)
        // card.lastChild.appendChild(date)

        // console.log(data)


        return card
    },
}