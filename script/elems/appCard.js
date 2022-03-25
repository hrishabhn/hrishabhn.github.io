const appCard = {
    hover: function (app) {
        let hoverDetailElem = document.createElement('div')
        hoverDetailElem.classList = 'hover-detail layer-1'
        hoverDetailElem.innerHTML = app.name

        return hoverDetailElem
    },
    main: function (app) {
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
            let icon = elems.icon(iconData['search'])
            icon.classList = 'search'
            card.append(icon)
        }

        if (app.thumb) {
            card.append(elems.appThumb(app.thumb))
        } else if (app.icon) {
            card.append(elems.icon(app.icon))
        }
        card.append(elems.spacer(8))
        card.append(elems.grow())

        card.append(elems.textbox(app.name, app.desc))

        return card
    },
    dock: function (app) {
        let card = appCard.main(app)
        if (app.dockIcon) {
            let thumb = card.firstChild
            card.replaceChild(elems.icon(app.dockIcon), thumb)
            card.style.setProperty('color', 'white')
            card.prepend(elems.bg())
            card.classList.remove('card-hover')
        }
        return card
    },
    mini: function (app) {
        let card = document.createElement('a')
        card.classList = 'app-card-mini clickable-o'
        card.target = '_blank'
        card.onclick = function (e) { openApp(app, e) }

        if (app.thumb) card.append(elems.appThumb(app.thumb))
        else if (app.icon) card.append(elems.icon(app.icon))

        card.append(elems.textbox(app.name, null))

        return card
    },
    small: function (app) {
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
            card.append(elems.appThumb(app.thumb))
        } else if (app.icon) {
            card.append(elems.icon(app.icon))
        }

        if (app.name) {
            card.append(appCard.hover(app))
        }

        return card
    },
    topbar: {
        tray: function (apps) {
            let nodes = []
            for (const app of apps) nodes.push(this.card(app))
            return trayWithKids(nodes, 5, 0)
        },
        card: function (app) {
            let card = document.createElement('a')
            if (app.id) card.id = app.id
            card.classList = 'item layer-hover'
            card.onclick = function (e) { openApp(app, e) }
            card.append(elems.icon(app.icon))
            card.append(appCard.hover(app))
            if (app.link) card.style.setProperty('cursor', 'pointer')

            return card
        },
    },
}