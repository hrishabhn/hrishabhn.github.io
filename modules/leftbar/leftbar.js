const leftbar = {
    load: function () {
        const elem = document.getElementById('leftbar')

        // spotlight
        elem.append(spotlight.create())

        // pinned apps
        if (focus.get().apps) {
            elem.append(elems.spacer(20))
            elem.append(leftbar.pinned.splashCard())
        }

        if (!dnd.active()) {
            // cards
            let cards = [
                [calendar.splashCard(), tasks.splashCard()],
            ]

            // focus cards
            if (focus.get().splashCard) cards.push(focus.get().splashCard())

            // show routine or not
            if (routine.now()) cards.unshift(routine.splashCard())
            else cards.push(routine.splashCard())

            for (const item of cards) {
                elem.append(elems.spacer(20))

                if (item[0]) {
                    let tray = document.createElement('div')
                    tray.classList = 'splash-card-tray'
                    for (const child of item) tray.append(child)
                    elem.append(tray)



                } else {
                    elem.append(item)
                }

            }


            // old
            elem.append(widgetTray())
        }




        // elem.append(leftbar.pinned.tray())
        // apps
        // if (focus.get().apps) elem.append(leftbar.currentApps())
    },
    pinned: {
        card: function (app) {
            let card = document.createElement('a')
            card.classList = 'app-card-pinned clickable-o'
            card.onclick = function (e) { openApp(app, e) }
            card = cardCol(card, { accent: app.accent, style: app.style, color: app.color })

            if (app.link) card.style.setProperty('cursor', 'pointer')

            if (app.dockIcon) card.append(elems.icon(app.dockIcon))
            else if (app.thumb) card.append(elems.appThumb(app.thumb))
            else if (app.icon) card.append(elems.icon(app.icon))

            card.append(elems.p(app.name))
            return card
        },
        splashCard: function () {
            let card = leftbar.cardBase(focus.get().name, null)
            card.classList.add('pinned-apps')
            let body = document.createElement('div')
            body.classList = 'body'
            for (const app of focus.get().apps) body.append(this.card(app))
            card.append(body)
            return card
        }
    },
    cardBase: function (title, buttons) {
        let card = document.createElement('div')
        card.classList = 'splash-card layer-0'

        let header = document.createElement('div')
        header.classList = 'header'
        header.append(elems.p(title))
        header.append(elems.grow())
        if (buttons) for (const b of buttons)
            header.append(appObject.bw({
                name: b.name,
                icon: b.icon,
                trigger: function () { if (b.trigger) b.trigger() }
            }))




        card.append(header)


        return card
    },
}