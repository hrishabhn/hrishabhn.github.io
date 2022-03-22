function appCard(app) {
    // if (app.type == 'flight') return appCardFlight(app)

    let card = document.createElement('a')
    card.classList = 'app-card layer-1 clickable-o card-hover'
    card.target = '_blank'
    card.onclick = function (e) { openApp(app, e) }

    if (app.accent) {
        card.style.setProperty('--brand-col', `#${app.accent}`)
    } else if (app.style) {
        card.style.setProperty('--brand-col-dark', `var(--${app.style}-dark)`)
        card.style.setProperty('--brand-col-light', `var(--${app.style}-light)`)
    }

    if (app.searchBase) {
        card.setAttribute('engineData', JSON.stringify(app))
        let icon = iconElement(iconData['search'])
        icon.classList = 'search'
        card.append(icon)
    }

    if (app.thumb) {
        card.append(thumbElement(app.thumb))
        card.append(spacerElement(8))
    } else if (app.icon) {
        card.append(iconElement(app.icon))
        card.append(spacerElement(8))
    }

    card.append(textboxBase(app.name, app.desc))

    return card
}

function appCardMini(app) {
    let card = document.createElement('a')
    card.classList = 'app-card-mini clickable-o'
    card.target = '_blank'
    card.onclick = function (e) { openApp(app, e) }

    if (app.thumb) card.append(thumbElement(app.thumb))
    else if (app.icon) card.append(iconElement(app.icon))

    card.append(textboxBase(app.name, null))

    return card
}


function appCardSmall(app) {
    let card = document.createElement('a')
    card.classList = 'app-card-small layer-1 clickable-o card-hover'
    card.onclick = function (e) { openApp(app, e) }

    if (app.accent) {
        card.style.setProperty('--brand-col', `#${app.accent}`)
    } else if (app.style) {
        card.style.setProperty('--brand-col-dark', `var(--${app.style}-dark)`)
        card.style.setProperty('--brand-col-light', `var(--${app.style}-light)`)
    }

    if (app.thumb) {
        card.append(thumbElement(app.thumb))
    } else if (app.icon) {
        card.append(iconElement(app.icon))
    }

    if (app.name) {
        card.append(appCardSmallHover(app))
    }

    return card
}

function appCardSmallHover(app) {
    let hoverDetailElem = document.createElement('div')
    hoverDetailElem.classList = 'hover-detail layer-1'
    hoverDetailElem.innerHTML = app.name

    return hoverDetailElem
}