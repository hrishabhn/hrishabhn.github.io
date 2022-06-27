const dock = {
    elem: function () { return document.getElementById('dock') },
    load: function () {
        if (focus.get().apps) {
            // detect
            let detect = document.createElement('div')
            detect.classList = 'detect'
            detect.onmouseover = function () { dock.elem().classList = 'show' }
            detect.onmouseout = function () { dock.elem().classList = 'hide' }

            // apps
            const appTray = dock.tray()
            appTray.classList.add('layer-0')
            appTray.onmouseover = function () { dock.elem().classList = 'show' }
            appTray.onmouseout = function () { dock.elem().classList = 'hide' }

            // create
            dock.elem().append(detect)
            dock.elem().append(dock.tab())
            dock.elem().append(appTray)

            // testing
            // dock.elem().classList = 'show'
        }
    },
    tab: function () {
        let tab = document.createElement('div')
        tab.classList = 'tab'

        return tab
    },
    tray: function () {
        let nodes = []
        nodes.push(elems.grow())
        for (const app of focus.get().apps) nodes.push(dock.app(app))
        nodes.push(elems.grow())
        return content.tray(null, nodes, 0, 5)
    },
    app: function (app) {
        let card = document.createElement('a')
        card.classList = 'app-card-dock clickable-o'
        card.onclick = function (e) { openApp(app, e) }
        card = cardCol(card, { accent: app.accent, style: app.style })

        if (app.link) card.style.setProperty('cursor', 'pointer')

        if (app.dockIcon) card.append(elems.icon(app.dockIcon))
        else if (app.thumb) card.append(elems.appThumb(app.thumb))
        else if (app.icon) card.append(elems.icon(app.icon))

        card.append(elems.p(app.name))
        card.append(elems.grow())
        return card
    },
}