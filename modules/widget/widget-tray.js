const widgets = {
    'cal': {
        card: function () { return widgetCal() },
    },
    'tasks': {
        id: 'tasks',
        type: 'a',
        title: 'Today\'s Tasks',
        icon: SFSymbols.list.bullet.circle.fill,
        content: widgetTaskItems(),
        card: function () { return widgetCard(this) },
    },
    'budget': {
        id: 'budget',
        type: 'div',
        icon: SFSymbols.creditcard.fill,
        iconClick: function () { addModalLayer(budgetModal()) },
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
    'bookpod': {
        card: function (data, type) { return widgetBookPod(data, type) },
    },
    'app': {
        card: function (data) { return widgetAppTray(data) },
    },
}

function widgetTray() {

    console.log(bookData)


    let card = document.createElement('div')
    card.id = 'widget-tray'
    card.classList = 'limit'

    card.append(widgets.cal.card())
    card.append(widgets.tasks.card())
    card.append(widgets.budget.card())
    card.append(widgets.flight.card())
    card.append(widgets.ideas.card())
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

    if (data.title) card.append(titleElement(data.title))
    if (data.data) card.append(dataElem(data.data.value, data.data.unit))
    if (data.icon) {
        let iconElem = iconElement(data.icon)
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