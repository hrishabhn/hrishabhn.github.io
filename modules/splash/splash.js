
const splash = {
    elem: function () {
        return document.getElementById('main-stack')
    },
    load: function () {
        splash.elem().append(spotlight.create())
        splash.elem().append(splash.baseCards())

        let resultStack = splash.stack()
        resultStack.id = 'result-stack'
        splash.elem().append(resultStack)

        //@widgets deprecated
    },
    baseCards: function () {
        // base cards
        const stack = splash.stack()
        stack.id = 'base-stack'
        const nodes = []

        // pinned apps
        if (focus.get().apps) nodes.push(appObject.resultCard(focus.get().apps, focus.get().name))

        // //@
        if (!dnd.active()) {
            nodes.push([calendar.resultCard(), ideas.resultCard()])
            nodes.push(budget.resultCardTray())

            // // show routine or not
            // if (routine.now()) cards.unshift(routine.splashCard())
            // else cards.push(routine.splashCard())
        }

        // focus cards
        if (focus.get().resultCards) for (const x of focus.get().resultCards()) nodes.push(x)

        for (const item of nodes) {
            if (item[0]) {
                let tray = document.createElement('div')
                tray.classList = 'result-card-stack splash-item-width'
                for (const child of item) tray.append(child)
                stack.append(tray)
            } else stack.append(item)
        }


        return stack
    },
    stack: function () {
        let x = document.createElement('div')
        x.classList = 'body-stack'
        return x
    },
}