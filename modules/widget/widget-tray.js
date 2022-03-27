const widgets = {
    'cal': {
        card: function () { return widgetCal() },
    },
    'tasks': {
        id: 'tasks',
        type: 'a',
        title: 'Today\'s Tasks',
        icon: SFSymbols.checklist,
        content: widgetTaskItems(),
        card: function () { return widgetCard(this) },
    },
    'budget': {
        id: 'budget',
        type: 'div',
        icon: SFSymbols.creditcard.fill,
        iconClick: function () { modal.add(budgetModal()) },
        content: [
            elems.data(`${spendingData.totalSpent}`, 'Spent'),
            widgetBudgetChart(),
        ],
        card: function () { return widgetCard(this) },
    },
    flight: {
        card: function (key) { return travel.flight.widget(key) },
    },
    trip: {
        card: function (key) { return travel.trip.widget(key) }
    },
    'ideas': {
        card: function () { return widgetIdeas() },
    },
    'media': {
        card: function (data, type) { return widgetMedia(data, type) },
    },
    'app': {
        card: function (data) { return widgetAppTray(data) },
    },
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
    routine: {
        card: function (key) { return routine.widget(key) }
    },
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



    const nodes = [
        widgets.cal.card(),
        widgets.tasks.card(),
        widgets.budget.card(),
        widgets.ideas.card(),
        widgets.stack([
            widgets.trip.card('tenerife'),
            widgets.flight.card('mad-tfs'),
            widgets.flight.card('tfs-mad'),
        ]),
    ]

    if (routine.data[timeOfDay()]) card.append(widgets.routine.card(timeOfDay()))
    for (const item of nodes) card.append(item)
    if (getFocus().widgets) for (const widget of getFocus().widgets()) card.append(widget)


    // card.append(widgets.tracking.card())
    // card.append(todayCard())
    // card.append(budgetCard())
    // card.append(weatherCard())

    return card
}

function widgetCardBase(type) {
    let card = document.createElement(type)
    card.classList = 'widget-card layer-1'
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