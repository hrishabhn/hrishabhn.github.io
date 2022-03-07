function appCard(app) {
    let card = document.createElement('a')
    card.classList = 'app-card layer-1 clickable-o card-hover'
    card.target = '_blank'
    card = linkOrTrigger(card, app)

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

    card.append(thumbElement(app.thumb))
    card.append(textboxBase(app.name, app.desc))
    
    return card
}

function appCardSmall(app) {
    let card = document.createElement('a')
    card.classList = 'app-card-small layer-1 clickable-o card-hover'
    card = linkOrTrigger(card, app)

    if (app.accent) {
        card.style.setProperty('--brand-col', `#${app.accent}`)
    } else if (app.style) {
        card.style.setProperty('--brand-col-dark', `var(--${app.style}-dark)`)
        card.style.setProperty('--brand-col-light', `var(--${app.style}-light)`)
    }

    card.append(thumbElement(app.thumb))

    return card
}

function appCardSmallHover(app) {
    let hoverDetailElem = document.createElement('div')
    hoverDetailElem.classList = 'hover-detail layer-1'
    hoverDetailElem.innerHTML = app.name

    return hoverDetailElem
}