const content = {
    tray: function (title, nodes, padding, spacing) {
        let tray = document.createElement('div')
        tray.classList = 'content-tray'

        if (title) tray.append(elems.subtitle(title))

        let scroll = document.createElement('div')
        scroll.classList = 'scroll'
        scroll.append(elems.spacer(padding))
        for (const node of nodes) {
            scroll.append(node)
            scroll.append(elems.spacer(spacing))
        }
        scroll.lastChild.remove()
        scroll.append(elems.spacer(padding))
        tray.append(scroll)

        return tray
    },
    load: function () {
        const elem = document.getElementById('content-elem')
        // title and apps
        let header = elems.header()
        header.append(elems.p(focus.get().name))
        elem.append(header)
        if (focus.get().apps) {
            let nodes = []
            for (const app of focus.get().apps) nodes.push(appObject.small.card(app))
            elem.append(content.tray(null, nodes, 20, 5))
        }

        // content
        if (focus.get().trays) for (const tray of focus.get().trays()) elem.append(tray)
    },
}