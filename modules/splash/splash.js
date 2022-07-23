
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
            nodes.push(resultCard.tray([calendar.resultCard(), ideas.resultCard(), budget.resultCard.week()]))
            nodes.push(budget.resultCardTray())

            // // show routine or not
            // if (routine.now()) cards.unshift(routine.splashCard())
            // else cards.push(routine.splashCard())
        }

        // focus cards
        if (focus.get().resultCards) for (const x of focus.get().resultCards()) nodes.push(x)

        for (const x of nodes) stack.append(x)
        return stack
    },
    stack: function () {
        let x = document.createElement('div')
        x.classList = 'body-stack'
        return x
    },
}