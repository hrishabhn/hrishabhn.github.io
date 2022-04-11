function widgetAppTray({ title, apps }) {
    let card = widgetCardBase('div')
    card.classList.add('app-tray')
    // card.classList = ('widget-card-app-tray')
    for (const app of apps) card.append(appObject.mini(app))
    return card
}