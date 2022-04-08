const appObject = {
    search: function (q, data) {
        let results = []
        for (let i = 0; i < data.length; i++) {
            const name = data[i].name.toUpperCase().includes(q)
            const desc = data[i].desc.toUpperCase().includes(q)

            let tagMatch = false
            if (data[i].tags) {
                for (const tag of data[i].tags) {
                    if (tag.toUpperCase().includes(q)) {
                        tagMatch = true
                    }
                }
            }

            if ((name) || (desc) || (tagMatch)) {
                results.push(data[i])
            }
        }
        return results
    },
    main: {
        card: function (app) {
            let card = document.createElement('a')
            card.classList = 'app-card layer-1 clickable-o'
            card.target = '_blank'
            card.onclick = function (e) { openApp(app, e) }
            card = cardHover(card, app.accent, app.style)

            // if (app.searchBase) {
            //     card.setAttribute('engineData', JSON.stringify(app))
            //     let icon = elems.icon(iconData['search'])
            //     icon.classList = 'search'
            //     card.append(icon)
            // }

            if (app.dockIcon) card.append(elems.icon(app.dockIcon))
            else if (app.thumb) card.append(elems.appThumb(app.thumb))
            else if (app.icon) card.append(elems.icon(app.icon))

            card.append(elems.spacer(8))
            card.append(elems.grow())

            card.append(elems.textbox(app.name, app.desc))

            return card
        },
        tray: function (data, title) {
            let nodes = []
            for (const app of data) nodes.push(this.card(app))
            return content.tray(title, nodes, 40, 8)
        },
    },
    small: {
        card: function (app) {
            let card = appObject.main.card(app)
            card.classList.add('small')
            return card
        },
    },
    topbar: {
        card: function (app) {
            let card = document.createElement('a')
            if (app.id) card.id = app.id
            card.classList = 'item layer-hover'
            card.onclick = function (e) { openApp(app, e) }
            card.append(elems.icon(app.icon))
            card.append(appObject.hover(app))
            if (app.link) card.style.setProperty('cursor', 'pointer')

            return card
        },
        tray: function (apps) {
            let nodes = []
            for (const app of apps) nodes.push(this.card(app))
            return trayWithKids(nodes, 5, 0)
        },
    },
    widget: {
        card: function (app) {
            let card = appObject.main.card(app)
            // card.childNodes[2].remove()
            card.classList.add('widget-card')
            // card.append(elems.grow())
            return card
        },
    },
    hover: function (app) {
        let hoverDetailElem = document.createElement('div')
        hoverDetailElem.classList = 'hover-detail layer-1'
        hoverDetailElem.textContent = app.name

        return hoverDetailElem
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
}