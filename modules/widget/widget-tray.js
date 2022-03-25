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
            dataElem(`${spendingData.totalSpent}`, 'Spent'),
            widgetBudgetChart(),
        ],
        card: function () { return widgetCard(this) },
    },
    'flight': {
        card: function (key) { return widgetFlight(key) },
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
    'habit': {
        card: function (key) { return widgetHabit(key) }
    },
    'tracking': {
        id: 'tracking',
        type: 'div',
        title: 'Most Used Apps',
        icon: SFSymbols.hourglass,
        iconClick: function() { removeCookie('app-tracking') },
        //     icon: SFSymbols.list.bullet.circle.fill,
            content: widgetTrackContent(),
        card: function () { return widgetCard(this) }
    },
}

function widgetTray() {
    let card = document.createElement('div')
    card.id = 'widget-tray'
    card.classList = 'limit'

    card.append(widgets.cal.card())
    card.append(widgets.tasks.card())
    card.append(widgets.budget.card())
    card.append(widgets.flight.card())
    card.append(widgets.ideas.card())

    // card.append(widgets.tracking.card())
    // card.append(widgets.habit.card('email'))
    if (getFocus().widgets) for (const widget of getFocus().widgets()) card.append(widget)

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
    if (data.data) card.append(dataElem(data.data.value, data.data.unit))
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