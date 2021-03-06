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

        // routine suggestion
        if (routine.now())
            // if routine isn't current focus
            if (focus.get().id !== timeOfDay())
                // if routine is not done
                if (!routine.done())
                    stack.append(resultCard.base({
                        name: `Activate ${timeOfDay()} Mode`,
                        buttons: [{
                            icon: routine.now().icon,
                            name: 'Activate',
                            trigger: function () { focus.set(timeOfDay()) },
                        }],
                        type: 'vstack',
                        gap: 0,
                    }))







        // pinned apps
        if (focus.get().apps) stack.append(appObject.resultCard(focus.get().apps, focus.get().name))

        // //@
        if (!dnd.active()) {
            stack.append(resultCard.tray([calendar.resultCard(), ideas.resultCard(), budget.resultCard.week()]))
        }

        // focus cards
        if (focus.get().resultCards) for (const x of focus.get().resultCards()) stack.append(x)

        return stack
    },
    stack: function () {
        let x = document.createElement('div')
        x.classList = 'body-stack'
        return x
    },
}