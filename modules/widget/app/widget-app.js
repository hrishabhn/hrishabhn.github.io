function widgetAppTray({ title, apps }) {
    let card = widgetCardBase('div')
    card.classList = ('widget-card-app-tray')
    for (const app of apps) card.append(appCardMini(app))





    // let card = document.createElement('a')
    // card.classList = 'widget-card app layer-0-blur clickable-o'
    // card.onclick = function (e) { openApp(app, e) }

    // if (app.accent) {
    //     card.style.setProperty('--brand-col', `#${app.accent}`)
    // } else if (app.style) {
    //     card.style.setProperty('--brand-col-dark', `var(--${app.style}-dark)`)
    //     card.style.setProperty('--brand-col-light', `var(--${app.style}-light)`)
    // }

    // if (app.searchBase) {
    //     card.setAttribute('engineData', JSON.stringify(app))
    //     let icon = iconElement(iconData['search'])
    //     icon.classList = 'search'
    //     card.append(icon)
    // }

    // if (app.thumb) {
    //     card.append(thumbElement(app.thumb))
    //     card.append(spacerElement(8))
    // } else if (app.icon) {
    //     card.append(iconElement(app.icon))
    //     card.append(spacerElement(8))
    // }

    // card.append(growElement())
    // card.append(textboxBase(app.name, app.desc))

    return card
}