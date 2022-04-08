const widgets = {
    cal: { card: function () { return widgetCal() }, },
    tasks: { card: function () { return tasks.widget() } },
    // 'budget': {
    //     id: 'budget',
    //     type: 'div',
    //     icon: SFSymbols.creditcard.fill,
    //     iconClick: function () { modal.add(budget.modal()) },
    //     content: [
    //         elems.data(`${spendingData.totalSpent}`, 'Spent'),
    //         widgetBudgetChart(),
    //     ],
    //     card: function () { return widgetCard(this) },
    // },
    budget: { card: function () { return budget.widget() } },
    flight: { card: function (key) { return flight.widget(key) }, },
    train: { card: function (key) { return train.widget(key) }, },
    trip: { card: function (key) { return trip.widget(key) } },
    ideas: { card: function () { return ideas.widget() }, },
    media: { card: function (data, type) { return widgetMedia(data, type) }, },
    app: { card: function (data) { return widgetAppTray(data) }, },
    // 'tracking': {
    //     id: 'tracking',
    //     type: 'div',
    //     title: 'Most Used Apps',
    //     icon: SFSymbols.hourglass,
    //     iconClick: function() { removeCookie('app-tracking') },
    //     //     icon: SFSymbols.list.bullet.circle.fill,
    //         content: widgetTrackContent(),
    //     card: function () { return widgetCard(this) }
    // },
    routine: { card: function (key) { return routine.widget(key) } },
    // stack
    stack: function (arr) {
        let stack = document.createElement('div')
        stack.classList = 'widget-stack'

        for (const item of arr) {
            stack.append(item)
            stack.append(elems.spacer(10))
        }
        stack.lastChild.remove()
        stack.onscroll = function (e) {
            const elem = e.target
            elem.classList.add('scroll')

            const no = (elem.childNodes.length + 1) / 2
            const top = elem.scrollTop

            for (let i = 0; i < no; i++) if (top == (180 * i)) elem.classList.remove('scroll')
        }

        return stack
    }
}




function widgetTray() {
    let card = document.createElement('div')
    card.id = 'widget-tray'
    card.classList = 'limit'

    let title = elems.p(focus.get().name)
    title.classList = 'content-title'
    card.append(title)

    const nodes = [
        widgets.cal.card(),
        widgets.tasks.card(),
        widgets.budget.card(),
        widgets.ideas.card(),
        // widgets.stack([
        //     widgets.trip.card('tenerife'),
        //     widgets.flight.card('mad-tfs'),
        //     widgets.flight.card('tfs-mad'),
        // ]),
    ]


    // if there is a routine at this time of day
    if (routine.data()[timeOfDay()])
        //  if tasks are not all done
        if (!(routine.data()[timeOfDay()].map(x => x.done).every(Boolean)))
            card.append(widgets.routine.card(timeOfDay()))
    for (const item of nodes) card.append(item)
    if (focus.get().widgets) for (const widget of focus.get().widgets()) card.append(widget)

    if (focus.get().apps) for (const app of focus.get().apps) card.append(appObject.widget.card(app))


    // card.append(widgets.tracking.card())
    // card.append(todayCard())
    // card.append(budgetCard())
    // card.append(weatherCard())

    return card
}

function widgetCardBase(type) {
    let card = document.createElement(type)
    card.classList = 'widget-card layer-1'
    card = cardHover(card, undefined, undefined)
    return card
}

function widgetCard(data) {
    let card = widgetCardBase(data.type)
    card.id = data.id

    if (data.title) card.append(elems.title(data.title))
    if (data.data) card.append(elems.data(data.data.value, data.data.unit))
    if (data.icon) {
        let iconElem = elems.icon(data.icon)
        iconElem.classList = 'top-icon'
        if (data.iconClick) {
            iconElem.onclick = function () { data.iconClick() }
            iconElem.style.setProperty('cursor', 'pointer')
            iconElem.classList.add('clickable-b')
        }


        card.append(iconElem)
    }


    if (data.content) for (const item of data.content) card.append(item)

    return card
}