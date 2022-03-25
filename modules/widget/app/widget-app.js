function widgetAppTray({ title, apps }) {
    let card = widgetCardBase('div')
    card.classList = ('widget-card-app-tray')
    for (const app of apps) card.append(appCardMini(app))
    return card
}