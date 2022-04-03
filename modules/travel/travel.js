const travelCard = {
    header: function ({ logo, name, desc }) {
        let header = elems.header()
        if (logo) {
            if (logo.icon) header.append(elems.icon(logo.icon))
            if (logo.text) {
                let icon = elems.icon(logo.text)
                icon.classList.add('wide')
                header.append(icon)
            }
        }
        header.append(elems.textbox(name, desc))
        return header
    },
    actionTray: function (data) {
        let tray = document.createElement('div')
        tray.classList = 'action-tray'

        let i = 0
        for (const item of data) {
            let action = elems.a(item.icon, item.text)
            action.classList = 'action clickable-o'
            action.target = '_blank'

            if (i) action.classList.add('secondary', 'layer-1')
            else action.classList.add('primary')

            if (item.link) action.href = item.link
            else if (item.trigger) action.onclick = function () { item.trigger() }
            if (item.link || item.trigger) action.style.setProperty('cursor', 'pointer')

            tray.append(action)
            tray.append(elems.spacer(10))
            i++
        }
        tray.lastChild.remove()
        return tray
    },
    row: function (data) {
        let row = document.createElement('div')
        row.classList = 'row clickable-o'
        if (data.trigger) row.onclick = function () { data.trigger() }

        if (data.left) row.append(data.left)
        else row.append(document.createElement('div'))

        if (data.right) row.append(data.right)
        else row.append(document.createElement('div'))

        return row
    },
    left: {
        plane: function () {
            let icon = elems.icon(SFSymbols.airplane)
            icon.classList.add('blue')
            return icon
        },
        train: function () {
            let icon = elems.icon(SFSymbols.tram.fill)
            icon.classList.add('pink')
            return icon
        },
        dep: function () {
            let icon = elems.icon(SFSymbols.arrow.up.right)
            icon.classList = 'arrow'
            return icon
        },
        arr: function () {
            let icon = elems.icon(SFSymbols.arrow.down.right)
            icon.classList = 'arrow'
            return icon
        },

    },
    deparr: function (data) {
        let card = document.createElement('div')
        card.classList = 'dep-arr'

        card.append(elems.title(data.code))
        card.append(document.createElement('div'))
        card.append(elems.subtitle(data.time))
        card.append(elems.name(data.airport ?? data.station))
        card.append(document.createElement('div'))
        card.append(elems.desc((data.terminal || data.gate) ? `Terminal ${data.terminal ?? '-'} &#149 Gate ${data.gate ?? '-'}` : null))
        return card
    },
    duration: function (dur) {
        let card = document.createElement('div')
        card.classList = 'duration'
        card.append(elems.hline())
        card.append(elems.p(`Total ${dur}`))
        card.append(elems.hline())
        return card
    },
    processEvent: function (event) {
        if (event.type == 'flight') {
            let right = document.createElement('div')
            right.classList = 'right'

            let top = document.createElement('div')
            top.classList = 'top'

            let logo = elems.icon(event.airline.logo.icon)
            logo.classList = 'logo'
            top.append(logo)
            top.append(elems.p(`${event.airline.code} ${event.number}`))
            top.append(elems.grow())
            top.append(elems.p(event.start))

            let middle = elems.p(`${event.dep.city} to ${event.arr.city}`)
            middle.classList = 'middle'

            let bottom = document.createElement('div')
            bottom.classList = 'bottom'

            let depIcon = elems.icon(SFSymbols.arrow.up.right)
            depIcon.classList = 'arrow'
            bottom.append(depIcon)
            bottom.append(elems.textbox(event.dep.code, event.dep.time))

            let arrIcon = elems.icon(SFSymbols.arrow.down.right)
            arrIcon.classList = 'arrow'
            bottom.append(arrIcon)
            bottom.append(elems.textbox(event.arr.code, event.arr.time))


            right.append(top)
            right.append(middle)
            right.append(bottom)

            return {
                left: travelCard.left.plane(),
                // right: elems.textbox(`${event.airline.name} ${event.number}`, `Departs at ${event.dep.time}`),
                right: right,
                trigger: function () { event.detail() },
            }
        }
        else if (event.type == 'train') return {
            left: travelCard.left.train(),
            right: elems.textbox(`${event.line.name} ${event.number}`, `Departs at ${event.dep.time}`),
            trigger: function () { event.detail() },
        }
    },
}

const travelWidget = {
    top: function ({ logo, code, number }) {
        let top = document.createElement('div')
        top.classList = 'top'

        let logoElem
        if (logo.icon) {
            logoElem = elems.icon(logo.icon)
            logoElem.classList.add('logo')
        }
        else if (logo.text) {
            logoElem = elems.icon(logo.text)
            logoElem.classList.add('logo', 'text')
        }

        let noElem = elems.p(`${code ?? ''} ${number}`)
        noElem.classList = 'number'

        top.append(logoElem)
        top.append(elems.grow())
        top.append(noElem)

        return top
    },
    middle: function ({ icon, city, style }) {
        let dest = document.createElement('div')
        dest.classList = 'dest'

        let destIcon = elems.icon(icon)
        destIcon.classList.add(style)
        destIcon.classList.add('secondary-fg')

        let destText = elems.p(city)
        destText.classList.add(`${style}-fg`)

        dest.append(destIcon)
        dest.append(elems.spacer(5))
        dest.append(destText)
        dest.append(elems.grow())


        return dest
    },
    count: function ({ flight, date }) {
        let count = document.createElement('div')
        count.classList = 'count'
        count.innerHTML = `${countdown.process.short(date, 'short').num} ${countdown.process.short(date).word}`
        return count
    },
    date: function ({ flight, date }) {
        let elem = document.createElement('div')
        elem.classList = 'date'
        elem.innerHTML = `${processDate.day.short(date)} ${new Date(date).getDate()} ${processDate.month.short(date)}, ${processTime.ampm(date)}`
        return elem
    },
}

