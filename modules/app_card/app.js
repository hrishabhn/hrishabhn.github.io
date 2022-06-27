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

            if (app.searchBase) {
                card.setAttribute('engineData', JSON.stringify(app))
                let icon = elems.icon(iconData['search'])
                icon.classList = 'search'
                card.append(icon)
            }

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
    hover: function (app) {
        let hoverDetailElem = document.createElement('div')
        hoverDetailElem.classList = 'hover-detail secondary-bg secondary-fg'
        hoverDetailElem.textContent = app.name

        return hoverDetailElem
    },
    bw: function (app) {
        let card = document.createElement('a')
        // id + class
        if (app.id) card.id = app.id
        card.classList = 'app-card-bw'

        // if active
        if (app.active) card.classList.add('active')

        // onclick
        card.onclick = function (e) { openApp(app, e) }
        if (app.link) card.style.setProperty('cursor', 'pointer')

        // icon
        card.append(elems.icon(app.icon))

        // text big or hover
        if (app.name) card.append(appObject.hover(app))

        // // color or basic
        // if (app.style || app.accent) {
        //     let bg = elems.bg()
        //     bg = cardCol(bg, app.accent, app.style)
        //     // bg.classList.add(app.style)
        //     card.prepend(bg)
        // } else 
        card.classList.add('layer-hover')

        return card
    },
}