const leftbar = {
    load: function () {
        const elem = document.getElementById('leftbar')

        // spotlight
        elem.append(spotlight.create())

        // pinned apps
        if (focus.get().apps) {
            elem.append(elems.spacer(20))
            elem.append(appObject.resultCard(focus.get().apps, focus.get().name))
        }

        for (const x of leftbar.splashCards()) elem.append(x)

        if (!dnd.active()) elem.append(widgetTray())
    },
    splashCards: function () {
        let nodes = []
        if (!dnd.active()) {

            // cards
            let cards = [
                [calendar.resultCard(), ideas.resultCard()],
                budget.resultCardTray(),
            ]

            // focus cards
            if (focus.get().resultCard) cards.push(focus.get().resultCard())

            // // show routine or not
            // if (routine.now()) cards.unshift(routine.splashCard())
            // else cards.push(routine.splashCard())

            for (const item of cards) {
                nodes.push(elems.spacer(20))
                console.log(item)
                if (item[0]) {
                    let tray = document.createElement('div')
                    tray.classList = 'result-card-stack'
                    for (const child of item) tray.append(child)
                    nodes.push(tray)
                } else nodes.push(item)

            }
        }
        return nodes
    },
    pinned: {
        card: function (app) {
            let card = document.createElement('a')
            card.classList = 'app-card-pinned clickable-o'
            card.onclick = function (e) { openApp(app, e) }
            card = cardCol(card, { accent: app.accent, style: app.style, color: app.color })

            if (app.link) card.style.setProperty('cursor', 'pointer')

            if (app.thumb) card.append(elems.appThumb(app.thumb))
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
        card.classList = 'splash-card layer-1'

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